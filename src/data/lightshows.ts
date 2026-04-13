export interface LightShow {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  url?: string;
  equipment?: string[];
}

export const lightShows: LightShow[] = [
  {
    id: 'ls-1',
    title: 'Festival Stage 2024',
    description: 'Dynamic light show programmed for the main stage using grandMA3.',
    date: '2024-05-12',
    image: '/images/videoframe_2000.png',
    equipment: ['grandMA3', 'Timecode', 'Moving Heads'],
  },
  {
    id: 'ls-2',
    title: 'Theater Light Design',
    description: 'Atmospheric light programming for Kolpingtheater Ramsen.',
    date: '2023-11-04',
    image: '/images/Kolpingtheater.svg', // using available image
    equipment: ['ETC ColorSource', 'Theatrical Spotlights'],
  },
  {
    id: 'ls-3',
    title: 'Club Event Visuals',
    description: 'Fast-paced, beam-heavy show synced to electronic music.',
    date: '2024-01-20',
    image: '/images/logo-clean.png', // placeholder
    equipment: ['Chamsys', 'Lasers', 'Strobes', 'Audio Sync'],
  },
  {
    id: 'ls-4',
    title: 'Corporate Live Event',
    description: 'Sophisticated ambient lighting and smooth cue firing for keynote presentations.',
    date: '2023-09-15',
    image: '/images/logo-clean.png', // placeholder
    equipment: ['grandMA2', 'LED Walls', 'Washlights'],
  }
];
