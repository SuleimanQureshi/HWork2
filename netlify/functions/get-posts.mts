import { getStore } from '@netlify/blobs';

export default async function handler() {
    try {
        const store = getStore('linkedin-posts');
        const data = await store.get('posts', { type: 'json' });

        if (!data) {
            return new Response(JSON.stringify({ posts: [] }), { status: 200 });
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ posts: [] }), { status: 500 });
    }
}