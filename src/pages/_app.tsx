import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PriceProvider } from "@/components/atoms/PriceContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PriceProvider>
      <Component {...pageProps} />
    </PriceProvider>
  );
}
