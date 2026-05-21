import AboutUs from '../components/AboutUs';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import Companies from '../components/Companies';
import CountriesCarousel from '../components/CountriesCarousel';
import VisaCategories from '../components/VisaCategories';
import Hero2 from '../components/Hero2';
import OffersSection from '../components/OffersSection';
import Testimonial from '../components/Testimonial';
import Form from '../components/Form';
import ProcessOverview from '../components/ProcessOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import RecentBlogs from '../components/RecentBlogs';
import LinkedInPosts from '../components/LinkedInPostsSimple';
import BookingForm from '../components/BookingForm';
import NewHeroSection from '../components/NewHeroSection';
import ExpertiseCards from '../components/ExpertiseCards';

export default function HomePage() {
    return (
        <>
            <NewHeroSection />
            <AboutUs />
            <ExpertiseCards />
            {/* <ServicesSection /> */}
            {/* <WhyChooseSection /> */}
            <Companies />
            <CountriesCarousel />
            {/* <VisaCategories /> */}
            {/* <Hero2 /> */}
            <OffersSection />
            <Testimonial />
            <BookingForm />
            {/* <ProcessOverview /> */}
            <WhyChooseUs />
            {/* <RecentBlogs /> */}
            <LinkedInPosts />
        </>
    );
}
