import '@/styles/global.css'

import type { AppProps } from 'next/app'
import MainLayout from 'layout/main-layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )

}
