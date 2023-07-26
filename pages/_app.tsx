import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Auth from "@/auth/auth";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Auth>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </Auth>
  );
}
