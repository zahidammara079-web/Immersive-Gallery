import type { ImageSourcePropType } from 'react-native';
export type Category = 'Nature' | 'Travel' | 'People' | 'Recent';
export type Photo = { id: string; title: string; category: Category; album: string; source: ImageSourcePropType; aspect: number; location: string; date: string; };
const localLake = require('@/assets/images/lake-sunrise.jpg');
const localFern = require('@/assets/images/fern-light.jpg');
const localCoast = require('@/assets/images/coastal-road.jpg');
const remote = (uri: string): ImageSourcePropType => ({ uri });
export const photos: Photo[] = [
  { id:'lake', title:'First Light', category:'Travel', album:'Quiet Mornings', source:localLake, aspect:0.78, location:'Dolomites, Italy', date:'Today' },
  { id:'fern', title:'After Rain', category:'Nature', album:'Quiet Mornings', source:localFern, aspect:0.84, location:'Kyoto, Japan', date:'Today' },
  { id:'coast', title:'The Long Way', category:'Travel', album:'Wanderlust', source:localCoast, aspect:0.72, location:'Côte d’Azur, France', date:'Yesterday' },
  { id:'desert', title:'Soft Horizons', category:'Nature', album:'Earth Study', source:remote('https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&q=85'), aspect:0.78, location:'Namib Desert', date:'Aug 28' },
  { id:'woman', title:'Sunlit', category:'People', album:'Portraits', source:remote('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85'), aspect:0.78, location:'Lisbon, Portugal', date:'Aug 27' },
  { id:'mountain', title:'Blue Hour', category:'Nature', album:'Earth Study', source:remote('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85'), aspect:0.76, location:'Banff, Canada', date:'Aug 26' },
  { id:'street', title:'Passing Through', category:'Travel', album:'Wanderlust', source:remote('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85'), aspect:0.72, location:'Chicago, USA', date:'Aug 25' },
  { id:'hands', title:'Between Words', category:'People', album:'Portraits', source:remote('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85'), aspect:0.8, location:'New York, USA', date:'Aug 24' },
  { id:'forest', title:'Green Room', category:'Nature', album:'Earth Study', source:remote('https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=85'), aspect:0.72, location:'Hoh Rainforest', date:'Aug 23' },
  { id:'ocean', title:'Low Tide', category:'Travel', album:'Wanderlust', source:remote('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85'), aspect:0.76, location:'Amalfi, Italy', date:'Aug 22' },
  { id:'portrait', title:'Quiet Confidence', category:'People', album:'Portraits', source:remote('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=85'), aspect:0.8, location:'Paris, France', date:'Aug 21' },
  { id:'valley', title:'Stillness', category:'Nature', album:'Quiet Mornings', source:remote('https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=900&q=85'), aspect:0.76, location:'Patagonia', date:'Aug 20' },
  { id:'architecture', title:'Lines of Light', category:'Travel', album:'Wanderlust', source:remote('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=85'), aspect:0.78, location:'Tokyo, Japan', date:'Aug 19' },
  { id:'profile', title:'Golden Hour', category:'People', album:'Portraits', source:remote('https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&q=85'), aspect:0.75, location:'Oia, Greece', date:'Aug 18' },
  { id:'dunes', title:'Wind Written', category:'Nature', album:'Earth Study', source:remote('https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=900&q=85'), aspect:0.78, location:'Sahara', date:'Aug 17' },
  { id:'train', title:'Northbound', category:'Travel', album:'Wanderlust', source:remote('https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=900&q=85'), aspect:0.72, location:'Swiss Alps', date:'Aug 16' },
  { id:'smile', title:'Unscripted', category:'People', album:'Portraits', source:remote('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=85'), aspect:0.8, location:'Copenhagen, Denmark', date:'Aug 15' },
  { id:'waterfall', title:'A Quiet Roar', category:'Nature', album:'Earth Study', source:remote('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=900&q=85'), aspect:0.72, location:'Iceland', date:'Aug 14' },
];
export const defaultAlbums = ['Quiet Mornings', 'Wanderlust', 'Earth Study', 'Portraits'];
