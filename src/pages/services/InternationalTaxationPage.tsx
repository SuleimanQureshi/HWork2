import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'international-taxation')!;

export default function InternationalTaxationPage() {
    return <ServiceDetailPage category={category} />;
}
