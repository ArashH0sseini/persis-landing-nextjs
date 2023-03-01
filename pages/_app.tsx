import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'


function MyApp({ Component, pageProps }: AppProps) {
  return(
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
  ) 
}

export default MyApp
