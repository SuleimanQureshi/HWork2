import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'real-estate')!;

export default function RealEstatePage() {
    return <ServiceDetailPage category={category} />;
}
