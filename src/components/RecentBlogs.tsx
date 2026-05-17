import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Calendar, User } from 'lucide-react';

const blogs = [
  {
    date: 'October 19, 2022',
    author: 'admin',
    title: 'World of Wander Discovering Diverse Landscapes',
    excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
  },
  {
    date: 'October 19, 2022',
    author: 'admin',
    title: 'Search of Serenity Tranquil Retreats and Escapes',
    excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
  },
  {
    date: 'October 19, 2022',
    author: 'admin',
    title: 'Road to Adventure Embarking on New Horizons',
    excerpt: 'Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum',
  },
];

export default function RecentBlogs() {
  return (
    <section style={{ backgroundColor: '#FFF6F3' }} className="py-20 px-8">
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
              RECENT BLOGS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ color: '#7A1F2B' }}
              className="text-5xl font-poppins font-bold max-w-2xl leading-tight"
            >
              Have questions? we've probably answered them!
            </motion.h2>
          </div>

          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: '#E8E8E8' }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
            >
              <ArrowLeft size={20} style={{ color: '#7A1F2B' }} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: '#FFC233' }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
            >
              <ArrowRight size={20} style={{ color: '#FFFFFF' }} />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: '24px' }}
              className="overflow-hidden"
            >
              <div className="h-64 w-full" style={{ backgroundColor: '#D9D9D9' }} />

              <div className="p-8">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: '#7A7A7A' }} />
                    <span style={{ color: '#7A7A7A' }} className="text-sm font-poppins">
                      {blog.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} style={{ color: '#7A7A7A' }} />
                    <span style={{ color: '#7A7A7A' }} className="text-sm font-poppins">
                      By {blog.author}
                    </span>
                  </div>
                </div>

                <h3 style={{ color: '#7A1F2B' }} className="text-xl font-poppins font-bold mb-4">
                  {blog.title}
                </h3>

                <p style={{ color: '#7A7A7A' }} className="text-sm font-poppins mb-6">
                  {blog.excerpt}
                </p>

                <button
                  style={{ color: '#7A1F2B' }}
                  className="flex items-center gap-2 font-poppins font-semibold text-sm"
                >
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
