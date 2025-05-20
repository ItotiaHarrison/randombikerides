export interface BikeStory {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  coverImage: string;
  gallery: string[];
  content: string;
  distance?: number;
  elevation?: number;
  duration?: string;
}