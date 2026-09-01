import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { useColors } from '@/hooks/useColors';
export function PhotoTile({ source, title, aspect, favorite, onPress, onFavorite, columns = 2 }: { source: ImageSourcePropType; title: string; aspect: number; favorite: boolean; onPress: () => void; onFavorite: () => void; columns?: 2 | 3 }) {
  const colors = useColors();
  return <Pressable testID={`photo-${title}`} onPress={onPress} style={({ pressed }) => [styles.tile, { backgroundColor: colors.card, width: columns === 3 ? '31.9%' : '48.2%', opacity: pressed ? 0.86 : 1 }]}><Image source={source} style={[styles.image, { aspectRatio: aspect }]} resizeMode="cover" /><View style={styles.bottom}><Text numberOfLines={1} style={[styles.title, { color: colors.cardForeground }]}>{title}</Text><Pressable testID={`favorite-${title}`} hitSlop={10} onPress={onFavorite} style={styles.heart}><Feather name={favorite ? 'heart' : 'heart'} size={15} color={favorite ? colors.primary : 'rgba(255,255,255,0.84)'} /></Pressable></View></Pressable>;
}
const styles = StyleSheet.create({ tile: { borderRadius: 16, overflow: 'hidden', marginBottom: 12, position: 'relative' }, image: { width: '100%' }, bottom: { position: 'absolute', left: 0, right: 0, bottom: 0, padding: 12, paddingTop: 26, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.24)' }, title: { fontSize: 13, fontWeight: '600', flex: 1 }, heart: { marginLeft: 6 } });
