import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "src/components/layout/layout";
import { Provider } from "react-redux";
import store from "src/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
