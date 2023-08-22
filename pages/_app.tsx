import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "src/components/layout/layout";
import { Provider } from "react-redux";
import store from "src/store/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalizationProvider>
    </Provider>
  );
}
