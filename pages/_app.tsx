import { AppProps } from "next/app"
import "~/style/globals.css"

// write a default nextjs _app
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
