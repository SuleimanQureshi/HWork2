import { motion } from 'framer-motion';
import { Shield, MapPin, Globe } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: 'Trust You Can Count On',
        description: 'No hidden surprises or confusing jargon. We keep you informed throughout the entire process with straightforward updates, realistic timelines, and honest answers. You\'ll always know exactly where you stand and what comes next. Our team of attorneys, paralegals, real estate agents and relocation professionals ensure full compliance with Italian law at every step.'
    },
    {
        icon: MapPin,
        title: 'Local Support That Goes the Distance',
        description: 'We don\'t just process paperwork; we\'re there with you in person. From accompanying you to government offices to helping you settle into your new neighbourhood, our team provides hands-on assistance throughout your entire journey in Italy.'
    },
    {
        icon: Globe,
        title: 'Global Reach, Italian Expertise',
        description: 'Through our trusted international partners, we extend our services worldwide while maintaining deep roots in Italian immigration and relocation. Whether you\'re coming from across the globe or managing transfers from abroad, we bridge the gap seamlessly between your current location and your new Italian home.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-8 bg-gradient-to-br from-[#FDF6F0] to-[#FFF6F3]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-gray-700 font-semibold">
                        Trust, Local Support, Global Reach
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-brand-primary rounded-full mb-6 mx-auto">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-brand-primary mb-4 text-center">
                                {feature.title}
                            </h3>

                            <p className="text-gray-700 leading-relaxed text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-xl md:text-2xl font-semibold text-brand-primary bg-white rounded-2xl p-6 shadow-md inline-block">
                        One team, complete solutions—from visas and permits to finding your home and settling in
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
