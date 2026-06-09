import { motion } from 'framer-motion';

export default function NewHeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-8 w-full relative z-10 text-left pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        The Italian Immigration <br className="hidden md:block" />
                        and Relocation Company
                    </h1>

                    {/* <p className="text-lg md:text-xl text-light-yellow mb-8 max-w-3xl font-medium">
                        We provide legal advice, practical assistance and tailored services in every city across Italy.
                    </p> */}



                    <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-widest">
                        <a
                            href="#about-us"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-8 py-3 bg-transparent border border-light-yellow text-white rounded hover:border-white hover:bg-white/10 transition-colors uppercase"
                        >
                            ABOUT US
                        </a>
                        <a
                            href="#latest-news"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('latest-news')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-8 py-3 bg-transparent border border-light-yellow text-white rounded hover:border-white hover:bg-white/10 transition-colors uppercase"
                        >
                            LATEST NEWS
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
