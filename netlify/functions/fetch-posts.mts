import { getStore } from '@netlify/blobs';
import type { Config } from '@netlify/functions';

export default async function handler() {
    try {
        const response = await fetch('https://linkedin-feed.teridmir.workers.dev/');
        const xmlText = await response.text();

        const posts = parseLinkedInPosts(xmlText);

        const store = getStore('linkedin-posts');
        await store.setJSON('posts', { posts, updatedAt: new Date().toISOString() });

        return new Response(JSON.stringify({ success: true, count: posts.length }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
    }
}

function parseLinkedInPosts(xmlText: string) {
    // Parse XML to get the last item's description
    const parser = new (require('node-html-parser').parse);
    // Use regex since we're in Node (no DOMParser)
    const descMatch = xmlText.match(/<item>[^]*?<\/item>/g);
    const lastItem = descMatch?.[descMatch.length - 1] || '';

    const cdataMatch = lastItem.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)
        || lastItem.match(/<description>([\s\S]*?)<\/description>/);
    const html = cdataMatch?.[1] || '';

    const posts: any[] = [];
    const cardRegex = /data-id="entire-feed-card-link"[\s\S]*?<\/article>/g;
    let match;
    let index = 0;

    while ((match = cardRegex.exec(html)) !== null && index < 3) {
        const card = match[0];

        // URL
        const urlMatch = card.match(/main-feed-card__overlay-link[^>]+href="([^"]+)"/);
        const url = urlMatch?.[1] || 'https://www.linkedin.com/company/mp-immigration-srl/';

        // Commentary
        const commentaryMatch = card.match(/data-test-id="main-feed-activity-card__commentary"[^>]*>([\s\S]*?)<\/p>/);
        let excerpt = commentaryMatch?.[1]?.replace(/<[^>]*>/g, '').replace(/\S+@\S+\.\S+/g, '').trim() || '';
        if (excerpt.length > 150) excerpt = excerpt.substring(0, 150) + '...';

        // Title
        const titleMatch = card.match(/data-test-id="article-content__title"[^>]*>\s*([\s\S]*?)\s*<\/span>/);
        let title = titleMatch?.[1]?.replace(/<[^>]*>/g, '').trim() || excerpt.split('.')[0] || 'LinkedIn Update';
        if (title.length > 80) title = title.substring(0, 80) + '...';

        // Image
        const imgMatch = card.match(/data-test-id="article-content"[\s\S]*?data-delayed-url="([^"]+)"/);
        const rawImage = imgMatch?.[1] || '';
        const image = rawImage
            ? `https://images.weserv.nl/?url=${encodeURIComponent(rawImage)}`
            : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop';

        // Date
        const timeMatch = card.match(/<time[^>]*>\s*([\s\S]*?)\s*<\/time>/);
        const t = timeMatch?.[1]?.trim() || '';
        let date = 'Recent';
        if (t.includes('ore')) date = 'Today';
        else if (t.includes('giorni')) date = `${t.match(/\d+/)?.[0]} days ago`;
        else if (t.includes('giorno')) date = '1 day ago';
        else if (t.includes('settimane')) date = `${t.match(/\d+/)?.[0]} weeks ago`;
        else if (t.includes('settimana')) date = '1 week ago';
        else if (t.includes('mesi')) date = `${t.match(/\d+/)?.[0]} months ago`;
        else if (t.includes('mese')) date = '1 month ago';
        else date = t;

        posts.push({ id: `post-${index}`, url, excerpt, title, image, date });
        index++;
    }

    return posts;
}

export const config: Config = {
    schedule: '0 */6 * * *' // runs every 6 hours
};