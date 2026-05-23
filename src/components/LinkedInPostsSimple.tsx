import { motion } from 'framer-motion';
import { Calendar, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LinkedInPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

export default function LinkedInPostsSimple(): JSX.Element {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLinkedInPosts();
  }, []);

  async function fetchLinkedInPosts(): Promise<void> {
    try {
      const response = await fetch('/.netlify/functions/get-posts');
      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts);
      } else {
        await fetchLive();
      }
    } catch (error) {
      await fetchLive();
    } finally {
      setLoading(false);
    }
  }

  async function fetchLive(): Promise<void> {
    try {
      const response = await fetch('https://linkedin-feed.teridmir.workers.dev/');
      const xmlText = await response.text();

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, 'text/xml');

      const items = Array.from(xml.querySelectorAll('item'));
      const lastItem = items[items.length - 1];
      const descriptionRaw = lastItem?.querySelector('description')?.textContent || '';

      const htmlParser = new DOMParser();
      const doc = htmlParser.parseFromString(descriptionRaw, 'text/html');

      const feedCards = Array.from(doc.querySelectorAll('[data-id="entire-feed-card-link"]'));

      if (feedCards.length === 0) {
        setFallbackPosts();
        return;
      }

      const parsed: LinkedInPost[] = feedCards.slice(0, 3).map((card, index) => {
        const overlayLink = card.querySelector('.main-feed-card__overlay-link');
        const url = overlayLink?.getAttribute('href') || 'https://www.linkedin.com/company/mp-immigration-srl/';

        const commentary = card.querySelector('[data-test-id="main-feed-activity-card__commentary"]');
        let excerpt = commentary?.textContent?.trim() || '';
        excerpt = excerpt.replace(/\S+@\S+\.\S+/g, '').trim();
        if (excerpt.length > 150) excerpt = excerpt.substring(0, 150) + '...';

        const titleEl = card.querySelector('[data-test-id="article-content__title"]');
        let title = titleEl?.textContent?.trim() || excerpt.split('.')[0] || 'LinkedIn Update';
        if (title.length > 80) title = title.substring(0, 80) + '...';

        const articleImg = card.querySelector('[data-test-id="article-content"] img, [data-test-id="feed-images-content"] img');
        const rawImage = articleImg?.getAttribute('data-delayed-url') || '';
        const image = rawImage
          ? `https://images.weserv.nl/?url=${encodeURIComponent(rawImage)}`
          : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop';

        const timeEl = card.querySelector('time');
        let date = 'Recent';
        if (timeEl) {
          const t = timeEl.textContent?.trim() || '';
          if (t.includes('ore')) date = 'Today';
          else if (t.includes('giorno') || t === '1 giorno') date = '1 day ago';
          else if (t.includes('giorni')) date = `${t.match(/\d+/)?.[0]} days ago`;
          else if (t.includes('settimana') && !t.includes('settimane')) date = '1 week ago';
          else if (t.includes('settimane')) date = `${t.match(/\d+/)?.[0]} weeks ago`;
          else if (t.includes('mese') && !t.includes('mesi')) date = '1 month ago';
          else if (t.includes('mesi')) date = `${t.match(/\d+/)?.[0]} months ago`;
          else date = t;
        }

        return { id: `post-${index}`, date, title, excerpt: excerpt || 'Read more on LinkedIn', image, url };
      });

      setPosts(parsed);
    } catch {
      setFallbackPosts();
    }
  }

  function setFallbackPosts(): void {
    setPosts([
      {
        id: '1',
        date: 'February 10, 2026',
        title: 'Buying Property in Italy: Citizen vs. Non-Citizen',
        excerpt: 'Can foreigners actually buy property in Italy? The answer depends on where you are from and recent changes have caught many by surprise...',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
        url: 'https://www.linkedin.com/company/mp-immigration-srl/'
      },
      {
        id: '2',
        date: 'February 5, 2026',
        title: 'The Winter Olympics are here!',
        excerpt: 'We are thrilled and deeply honoured to have contributed our work to this incredible event.',
        image: 'https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=800&h=600&fit=crop',
        url: 'https://www.linkedin.com/company/mp-immigration-srl/'
      },
      {
        id: '3',
        date: 'January 28, 2026',
        title: 'Italy Entrepreneur Visa',
        excerpt: "€500K investment, 3 jobs created, and a direct path to EU residency—Italy's Entrepreneur Visa is the strategic alternative most overlook.",
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        url: 'https://www.linkedin.com/company/mp-immigration-srl/'
      }
    ]);
  }

  if (loading) {
    return (
      <section id="latest-news" style={{ backgroundColor: '#FFF6F3' }} className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-1/2 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-3xl h-96"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="latest-news" style={{ backgroundColor: '#FFF6F3' }} className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ color: '#7A1F2B', fontSize: '12px', letterSpacing: '0.2em' }}
              className="font-poppins font-semibold mb-4"
            >
              LATEST UPDATES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: '#7A1F2B' }}
              className="text-5xl font-poppins font-bold max-w-2xl leading-tight"
            >
              Stay connected with our latest news
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', display: 'flex', flexDirection: 'column' }}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full w-full"
            >
              <div className="w-full overflow-hidden" style={{ height: '220px', backgroundColor: '#F5F0EE' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop';
                  }}
                />
              </div>
              <div className="p-8 pb-10 flex flex-col flex-grow w-full relative">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: '#7A7A7A' }} />
                    <span style={{ color: '#7A7A7A' }} className="text-sm font-poppins">
                      {post.date}
                    </span>
                  </div>
                </div>
                <h3 style={{ color: '#7A1F2B' }} className="text-xl font-poppins font-bold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p style={{ color: '#7A7A7A' }} className="text-sm font-poppins mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex-grow"></div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#7A1F2B', marginTop: 'auto', paddingTop: '16px' }}
                  className="flex items-center gap-2 font-poppins font-semibold text-sm hover:gap-3 transition-all"
                >
                  View on LinkedIn <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="https://www.linkedin.com/company/mp-immigration-srl/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: '#0A66C2' }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-poppins font-semibold text-base"
          >
            <Linkedin size={20} />
            Follow Us on LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
}