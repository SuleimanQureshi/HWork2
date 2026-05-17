import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'other-services')!;

export default function OtherServicesPage() {
    return <ServiceDetailPage category={category} />;
}
