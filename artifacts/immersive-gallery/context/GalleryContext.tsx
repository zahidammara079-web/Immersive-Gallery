import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { defaultAlbums, photos } from '@/data/gallery';
export type ThemeMode = 'dark' | 'light';
type GalleryContextValue = { theme: ThemeMode; setTheme: (theme: ThemeMode) => void; favorites: string[]; toggleFavorite: (id: string) => void; deleted: string[]; deletePhoto: (id: string) => void; albums: string[]; albumPhotos: Record<string, string[]>; createAlbum: (name: string) => void; toggleAlbumPhoto: (album: string, id: string) => void; gridColumns: 2 | 3; setGridColumns: (columns: 2 | 3) => void; slideshow: boolean; setSlideshow: (value: boolean) => void; loaded: boolean; };
export const ThemeContext = createContext<{ theme: ThemeMode }>({ theme: 'dark' });
export const GalleryContext = createContext<GalleryContextValue>({} as GalleryContextValue);
export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [favorites, setFavorites] = useState<string[]>(['lake', 'coast', 'woman']);
  const [deleted, setDeleted] = useState<string[]>([]);
  const [albums, setAlbums] = useState<string[]>(defaultAlbums);
  const [albumPhotos, setAlbumPhotos] = useState<Record<string, string[]>>({ 'Quiet Mornings':['lake','fern','valley'], 'Wanderlust':['coast','street','ocean','architecture','train'], 'Earth Study':['desert','mountain','forest','dunes','waterfall'], 'Portraits':['woman','hands','portrait','profile','smile'] });
  const [gridColumns, setGridColumnsState] = useState<2 | 3>(2);
  const [slideshow, setSlideshowState] = useState(true);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { AsyncStorage.multiGet(['ig-theme','ig-favorites','ig-deleted','ig-albums','ig-album-photos','ig-grid','ig-slideshow']).then((entries) => { const map = Object.fromEntries(entries); if (map['ig-theme']) setThemeState(map['ig-theme'] as ThemeMode); if (map['ig-favorites']) setFavorites(JSON.parse(map['ig-favorites'])); if (map['ig-deleted']) setDeleted(JSON.parse(map['ig-deleted'])); if (map['ig-albums']) setAlbums(JSON.parse(map['ig-albums'])); if (map['ig-album-photos']) setAlbumPhotos(JSON.parse(map['ig-album-photos'])); if (map['ig-grid']) setGridColumnsState(JSON.parse(map['ig-grid'])); if (map['ig-slideshow']) setSlideshowState(JSON.parse(map['ig-slideshow'])); }).catch(() => Alert.alert('Storage unavailable', 'Your changes will still work for this session.')).finally(() => setLoaded(true)); }, []);
  const persist = useCallback((key: string, value: unknown) => { AsyncStorage.setItem(key, JSON.stringify(value)).catch(() => undefined); }, []);
  const setTheme = (value: ThemeMode) => { setThemeState(value); persist('ig-theme', value); };
  const toggleFavorite = (id: string) => setFavorites((current) => { const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]; persist('ig-favorites', next); return next; });
  const deletePhoto = (id: string) => { setDeleted((current) => { const next = [...current, id]; persist('ig-deleted', next); return next; }); };
  const createAlbum = (name: string) => { const cleaned = name.trim(); if (!cleaned || albums.includes(cleaned)) return; const next = [...albums, cleaned]; setAlbums(next); persist('ig-albums', next); setAlbumPhotos((current) => { const nextPhotos = { ...current, [cleaned]: [] }; persist('ig-album-photos', nextPhotos); return nextPhotos; }); };
  const toggleAlbumPhoto = (album: string, id: string) => setAlbumPhotos((current) => { const list = current[album] ?? []; const nextList = list.includes(id) ? list.filter((item) => item !== id) : [...list, id]; const next = { ...current, [album]: nextList }; persist('ig-album-photos', next); return next; });
  const setGridColumns = (value: 2 | 3) => { setGridColumnsState(value); persist('ig-grid', value); };
  const setSlideshow = (value: boolean) => { setSlideshowState(value); persist('ig-slideshow', value); };
  const value = useMemo(() => ({ theme, setTheme, favorites, toggleFavorite, deleted, deletePhoto, albums, albumPhotos, createAlbum, toggleAlbumPhoto, gridColumns, setGridColumns, slideshow, setSlideshow, loaded }), [theme, favorites, deleted, albums, albumPhotos, gridColumns, slideshow, loaded]);
  return <ThemeContext.Provider value={{ theme }}><GalleryContext.Provider value={value}>{children}</GalleryContext.Provider></ThemeContext.Provider>;
}
