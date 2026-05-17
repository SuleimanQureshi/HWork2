import { Link, useParams, Navigate } from 'react-router-dom';
import {
    ChevronRight,
    Briefcase,
    Home,
    TrendingUp,
    Users,
    Laptop,
    Flag,
    GraduationCap,
    FileText,
    Search,
    BookOpen,
    MapPin,
    Key,
    FileCheck,
    Globe,
    Building2,
    CalendarCheck,
    LucideProps,
} from 'lucide-react';
import { serviceCategories } from '../../data/serviceCategories';
import BookingForm from '../../components/BookingForm';
import WhyChooseUs from '../../components/WhyChooseUs';

// Map icon name strings → actual Lucide components
const iconMap: Record<string, React.FC<LucideProps>> = {
    Briefcase,
    Home,
    TrendingUp,
    Users,
    Laptop,
    Flag,
    GraduationCap,
    FileText,
    Search,
    BookOpen,
    MapPin,
    Key,
    FileCheck,
    Globe,
    Building2,
};

export default function SubServiceDetailPage() {
    const { categorySlug, subServiceId } = useParams<{
        categorySlug: string;
        subServiceId: string;
    }>();

    const category = serviceCategories.find((c) => c.slug === categorySlug);
    const sub = category?.subServices.find((s) => s.id === subServiceId);

    if (!category || !sub) {
        return <Navigate to="/services" replace />;
    }

    const IconComponent = iconMap[sub.icon] ?? Briefcase;

    return (
        <>
            {/* ── Hero Banner ── */}
            <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
                <img
                    src={sub.image}
                    alt={sub.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                {/* Hero content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    {/* Icon badge */}
                    <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 shadow-xl">
                        <IconComponent className="w-9 h-9 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
                        {sub.title}
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
                        {sub.short_description}
                    </p>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-5xl mx-auto px-4 py-10">

                    {/* Breadcrumb */}
                    <nav className="flex items-center flex-wrap gap-2 text-sm text-gray-500 mb-10">
                        <Link to="/" className="hover:text-red-800 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <Link to="/services" className="hover:text-red-800 transition-colors">Services</Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <Link
                            to={`/services/${category.slug}`}
                            className="hover:text-red-800 transition-colors"
                        >
                            {category.title}
                        </Link>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        <span className="text-red-800 font-medium">{sub.title}</span>
                    </nav>

                    {/* Content card */}
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* Top accent bar */}
                        <div className="h-2 bg-gradient-to-r from-red-900 to-red-600" />

                        <div className="p-8 md:p-12">
                            {/* Icon + title row */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 border border-red-100">
                                    <IconComponent className="w-8 h-8 text-red-800" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-red-700 uppercase tracking-wider mb-1">
                                        {category.title}
                                    </p>
                                    <h2 className="text-3xl font-bold text-gray-800">
                                        {sub.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Divider */}
                            <hr className="border-gray-100 mb-8" />

                            {/* Full description */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                {sub.full_description.split('\n').map((para, i) => (
                                    <p key={i} className="mb-4 last:mb-0">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <Link
                                    to="/appointment"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                                >
                                    <CalendarCheck className="w-5 h-5" />
                                    Contact Us
                                </Link>
                                <Link
                                    to={`/services/${category.slug}`}
                                    className="text-red-800 hover:text-red-900 font-semibold transition-colors underline-offset-4 hover:underline"
                                >
                                    ← Back to {category.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingForm />
            <WhyChooseUs />
        </>
    );
}
