/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: {
              DEFAULT: '#ecedee',
            },
            primary: {
              DEFAULT: '#ec4e39',
            },
            secondary: {
              DEFAULT: '#ec4e39',
            },
            // background: '#f0edf2'
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            black: {
              DEFAULT: '#121212',
            },
            background: {
              DEFAULT: '#121212',
            },
            primary: {
              DEFAULT: '#ec4e39',
              secondary: {
                DEFAULT: '#ec4e39',
              },
            },
            //  background: '#040008'
          }, // dark theme colors
        },
      },
    }),
  ],
};
