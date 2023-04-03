import { queryClient } from '@/lib/react-query'
import { globalStyle } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
