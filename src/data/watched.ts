export type WatchedType = 'Movie' | 'Series';

export interface WatchedItem {
  id: string;
  title: string;
  type: WatchedType;
  image: string;
  date: string; // ISO format
  rating: number;
}

export const watchedData: WatchedItem[] = [
  { id: '1', title: 'Dune Part Two', type: 'Movie', image: '/images/artists/twenty-one-pilots.jpeg', date: '2024-03-01', rating: 5 },
  { id: '2', title: 'The Bear S2', type: 'Series', image: '/images/artists/kasi.jpg', date: '2023-06-22', rating: 5 },
  { id: '3', title: 'Oppenheimer', type: 'Movie', image: '/images/artists/rocco.jpeg', date: '2023-07-21', rating: 4 },
  { id: '4', title: 'Succession', type: 'Series', image: '/images/artists/lino.jpeg', date: '2023-05-28', rating: 5 },
  { id: '5', title: 'Past Lives', type: 'Movie', image: '/images/artists/YU.webp', date: '2023-06-02', rating: 4 },
  { id: '6', title: 'Poor Things', type: 'Movie', image: '/images/artists/swiss-und-die-andern.png', date: '2023-12-08', rating: 5 },
];
