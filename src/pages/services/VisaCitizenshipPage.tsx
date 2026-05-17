import { serviceCategories } from '../../data/serviceCategories';
import ServiceDetailPage from './ServiceDetailPage';

const category = serviceCategories.find((c) => c.slug === 'visa-citizenship')!;

export default function VisaCitizenshipPage() {
    return <ServiceDetailPage category={category} />;
}
