export interface TourPackage {
  id: string;
  title: string;
  price: number;
  short_description: string;
  full_description: string;
  image_url: string;
  schedule: string | null;
  duration: string | null;
  status: string | null;
  participants: string | null;
  created_at: string;
}

export interface Service {
  id: string;
  title: string;
  short_description?: string;
  full_description: string;
  image_url?: string;
}
