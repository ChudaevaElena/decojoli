export interface GalleryImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  city: string;
  square: string;
  year: string;
  description: string;
  gallery: GalleryImage[];
  poster: string;
  category: 'residential' | 'commercial';
}

export interface Info {
  phone: string;
  email: string;
  address: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
  vk: string;
  pinterest: string;
  dzen: string;
  managerName: string;
  managerAbout: string;
  managerImage: string;
}