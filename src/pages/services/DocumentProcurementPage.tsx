import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'document-procurement')!;

export default function DocumentProcurementPage() {
    return <ServiceDetailPage category={category} />;
}
