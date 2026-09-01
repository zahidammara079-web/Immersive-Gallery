import { useContext } from 'react';
import { ThemeContext } from '@/context/GalleryContext';
import colors from '@/constants/colors';
export function useColors() {
  const { theme } = useContext(ThemeContext);
  return { ...(theme === 'dark' ? colors.dark : colors.light), radius: colors.radius };
}
