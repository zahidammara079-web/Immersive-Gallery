import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
export function ScreenHeader({ eyebrow, title, rightIcon, onRightPress }: { eyebrow?: string; title: string; rightIcon?: keyof typeof Feather.glyphMap; onRightPress?: () => void }) { const colors = useColors(); const insets = useSafeAreaInsets(); return <View style={[styles.wrap, { paddingTop: insets.top + 8 }]}><View><Text style={[styles.eyebrow, { color: colors.primary }]}>{eyebrow}</Text><Text style={[styles.title, { color: colors.foreground }]}>{title}</Text></View>{rightIcon && <Pressable testID="header-action" onPress={onRightPress} style={[styles.action, { backgroundColor: colors.card }]}><Feather name={rightIcon} size={20} color={colors.foreground} /></Pressable>}</View>; }
const styles = StyleSheet.create({ wrap: { paddingHorizontal: 20, paddingBottom: 18, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }, eyebrow: { fontSize: 11, letterSpacing: 1.8, textTransform: 'uppercase', fontWeight: '700', marginBottom: 5 }, title: { fontSize: 31, letterSpacing: -1.1, fontWeight: '700' }, action: { width: 44, height: 44, borderRadius: 15, alignItems: 'center', justifyContent: 'center' } });
