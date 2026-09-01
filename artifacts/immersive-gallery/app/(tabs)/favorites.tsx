import { useRouter } from 'expo-router';
import React, { useContext, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useColors } from '@/hooks/useColors';
import { GalleryGrid } from '@/components/GalleryGrid';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SearchBar } from '@/components/SearchBar';
import { GalleryContext } from '@/context/GalleryContext';
import { photos } from '@/data/gallery';
export default function FavoritesScreen() { const colors = useColors(); const router = useRouter(); const { favorites, toggleFavorite, deleted, gridColumns } = useContext(GalleryContext); const [query,setQuery] = useState(''); const items = useMemo(() => photos.filter((photo) => favorites.includes(photo.id) && !deleted.includes(photo.id)).filter((photo) => !query || photo.title.toLowerCase().includes(query.toLowerCase()) || photo.location.toLowerCase().includes(query.toLowerCase())), [favorites,deleted,query]); return <View style={[styles.screen,{backgroundColor:colors.background}]}><ScreenHeader eyebrow="Your saved work" title="Favorites" /><View style={styles.search}><SearchBar value={query} onChangeText={setQuery} /></View><View style={styles.heading}><Text style={[styles.count,{color:colors.mutedForeground}]}>{items.length} moments you want to keep close</Text></View><GalleryGrid items={items} favorites={favorites} columns={gridColumns} emptyTitle="Nothing saved yet" emptyCopy="Tap the heart on any photograph to keep it here." onPhotoPress={(photo) => router.push({ pathname:'/viewer', params:{ id:photo.id } })} onFavorite={toggleFavorite} /></View>; }
const styles=StyleSheet.create({screen:{flex:1},search:{paddingHorizontal:20},heading:{paddingHorizontal:20,paddingVertical:16},count:{fontSize:13}});
