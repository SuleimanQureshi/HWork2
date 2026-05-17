import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'corporate-immigration')!;

export default function CorporateImmigrationPage() {
    return <ServiceDetailPage category={category} />;
}
