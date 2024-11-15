// src/theme/theme.js

export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
              // Dark mode colors
              primary: {
                  400: '#3f51b5', // Primary color for dark mode
              },
              grey: {
                  100: '#f5f5f5',
                  200: '#e0e0e0',
                  300: '#bdbdbd',
                  400: '#9e9e9e',
              },
              greenAccent: {
                  400: '#66bb6a',
              },
          }
        : {
              // Light mode colors
              primary: {
                  400: '#1976d2', // Primary color for light mode
              },
              grey: {
                  100: '#212121',
                  200: '#424242',
                  300: '#616161',
                  400: '#757575',
              },
              greenAccent: {
                  400: '#388e3c',
              },
          }),
});

export default tokens;
