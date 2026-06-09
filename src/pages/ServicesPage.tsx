import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import { serviceCategories, SubService } from '../data/serviceCategories';
import { ArrowRight } from 'lucide-react';

function SubServiceCard({
    sub,
    categorySlug,
}: {
    sub: SubService;
    categorySlug: string;
}) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
            {/* Thumbnail image — clickable */}
            <Link to={`/services/${categorySlug}/${sub.id}`} className="relative h-44 overflow-hidden block">
                <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-800 to-red-600" />
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-800 transition-colors duration-200">
                    {sub.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {sub.short_description}
                </p>
                <Link
                    to={`/services/${categorySlug}/${sub.id}`}
                    className="flex items-center gap-1 text-red-800 hover:text-red-900 font-semibold text-sm transition-colors self-start group/btn"
                >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-12">
                        Comprehensive immigration, legal, and real estate services tailored to your needs in Italy
                    </p>

                    <div className="space-y-20">
                        {serviceCategories.map((category) => (
                            <section key={category.slug} id={category.slug} className="scroll-mt-24">
                                {/* Section header */}
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
                                        <p className="text-gray-600 max-w-2xl">{category.description}</p>
                                    </div>
                                    <Link
                                        to={`/services/${category.slug}`}
                                        className="flex items-center gap-2 bg-red-800 hover:bg-red-900 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow hover:shadow-lg whitespace-nowrap self-start sm:self-auto group"
                                    >
                                        View All
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </div>

                                {/* Sub-service cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.subServices.map((sub) => (
                                        <SubServiceCard
                                            key={sub.id}
                                            sub={sub}
                                            categorySlug={category.slug}
                                        />
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="mt-12 border-b border-gray-200" />
                            </section>
                        ))}
                    </div>
                </div>
            </div>
            <BookingForm />
            <WhyChooseUs />
        </>
    );
}