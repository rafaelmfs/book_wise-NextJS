'use client';

import { createTheme } from '@mui/material/styles';
import { appTheme } from '../../public/appTheme';

const colors = appTheme.colors
export const muiTheme = createTheme({
  palette:  { ...colors }
})