// theme.ts
import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e6f2ff' },
          100: { value: '#e6f2ff' },
          200: { value: '#bfdeff' },
          300: { value: '#99caff' },
          400: { value: '#66b3ff' },
          500: { value: '#3399ff' },
          600: { value: '#0077cc' },
          700: { value: '#005999' },
          800: { value: '#004466' },
          900: { value: '#00334d' },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '{colors.brand.100}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.200}' },
          emphasized: { value: '{colors.brand.300}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
  },
})



