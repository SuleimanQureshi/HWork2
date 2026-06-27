import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export default function AboutUs() {
    return (
        <section id="about-us" className="py-20 px-8 bg-brand-cream">
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

                    <div className="space-y-4 text-justify text-lg md:text-xl text-purple leading-relaxed mx-auto">
                        <p>
                            With over 20 years of experience, MP Immigration is a trusted Italian consulting firm specializing in Immigration and Global Mobility. We support multinational companies, organizations, and private clients in navigating the complexities of relocating to Italy with confidence and ease.
                        </p>
                        <p>
                            From visa applications and residency permits to tax advisory, real estate assistance, and citizenship processes, we offer a comprehensive, end-to-end service tailored to each client’s needs. Our expertise also extends to genealogical research, helping individuals trace their Italian heritage and obtain citizenship.
                        </p>
                        <p>
                            At MP Immigration, we combine in-depth regulatory knowledge with a highly personalized approach, ensuring every step of the journey is efficient, compliant, and stress-free. Whether you are moving to Italy for work, investment, or personal reasons, we are here to guide you every step of the way.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
