import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroSection } from '../../components/HeroSection';
import BookingForm from '../../components/BookingForm';
import WhyChooseUs from '../../components/WhyChooseUs';
import { ServiceCategory, SubService } from '../../data/serviceCategories';

interface ServiceDetailPageProps {
    category: ServiceCategory;
}

function SubServiceCard({
    sub,
    categorySlug,
}: {
    sub: SubService;
    categorySlug: string;
}) {
    return (
        <div
            id={sub.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group scroll-mt-28"
        >
            {/* Hero image thumbnail — clickable */}
            <Link to={`/services/${categorySlug}/${sub.id}`} className="relative h-44 overflow-hidden block">
                <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Coloured bottom bar */}
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

export default function ServiceDetailPage({ category }: ServiceDetailPageProps) {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            const content = document.getElementById('service-content');
            if (content) {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <>
            <HeroSection />

            <div id="service-content" className="min-h-screen bg-gray-50">
                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
                    <nav className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-red-800 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/services" className="hover:text-red-800 transition-colors">
                            Services
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-red-800 font-medium">{category.title}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h1>
                        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                            {category.description}
                        </p>
                    </div>

                    {/* Sub-service cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {category.subServices.map((sub) => (
                            <SubServiceCard
                                key={sub.id}
                                sub={sub}
                                categorySlug={category.slug}
                            />
                        ))}
                    </div>

                    {/* Back to services link */}
                    <div className="flex justify-center mb-8">
                        <Link
                            to="/services"
                            className="flex items-center gap-2 text-red-800 hover:text-red-900 font-semibold transition-colors group"
                        >
                            ← Back to All Services
                        </Link>
                    </div>
                </div>
            </div>

            <BookingForm />
            <WhyChooseUs />
        </>
    );
}
