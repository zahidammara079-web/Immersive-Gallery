import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useColors } from '@/hooks/useColors';
export function SearchBar({ value, onChangeText }: { value: string; onChangeText: (value: string) => void }) { const colors = useColors(); return <View style={[styles.wrap, { backgroundColor: colors.input }]}><Feather name="search" size={18} color={colors.mutedForeground} /><TextInput value={value} onChangeText={onChangeText} placeholder="Search your gallery" placeholderTextColor={colors.mutedForeground} style={[styles.input, { color: colors.foreground }]} returnKeyType="search" /></View>; }
const styles = StyleSheet.create({ wrap: { height: 50, borderRadius: 16, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 10 }, input: { flex: 1, fontSize: 15 } });
