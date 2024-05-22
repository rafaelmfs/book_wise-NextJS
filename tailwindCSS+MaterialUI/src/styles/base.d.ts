import '@mui/material/styles';
import { AppThemeColors } from '../../public/appTheme';

declare module '@mui/material/styles' {
  interface Palette extends AppThemeColors{}
  interface PaletteColor extends AppThemeColors{}
  interface PaletteOptions extends AppThemeColors{}
}