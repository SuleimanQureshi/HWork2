import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function AboutUs() {
    return (
        <section className="py-20 px-8 bg-brand-cream">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Building2 className="w-6 h-6 text-brand-primary" />
                        <h2 className="text-sm font-semibold text-brand-primary tracking-wider uppercase">
                            About Us
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        MP Immigration is a leading Italian immigration consulting firm providing immigration, real estate, citizenship, genealogical research, legal, and tax services to international companies, organisations and private clients.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
