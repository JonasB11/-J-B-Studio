// Type definitions for JB Studio

export interface SupportAct {
  name: string;
  type: string;
}

export interface ArtistDetails {
  venue: string;
  city: string;
  setlist: string[];
  supportActs?: SupportAct[];
}

export interface ArtistSocial {
  spotify?: string;
  youtube?: string;
  instagram?: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  social?: ArtistSocial;
  details: ArtistDetails;
}

export interface Concert {
  id: number;
  date: string;
  artist: Artist;
  description: string;
  tags: string[];
  companions: string[];
  event: string[];
  images: string[];
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
  platform: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface Event {
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface MusicPlatform {
  name: string;
  icon: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
