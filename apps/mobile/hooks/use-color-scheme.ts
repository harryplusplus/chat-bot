import { useColorScheme as useColorSchemeInternal } from 'react-native'

export function useColorScheme(): 'light' | 'dark' {
  const name = useColorSchemeInternal()
  if (name === 'unspecified') {
    return 'light'
  }

  return name
}
