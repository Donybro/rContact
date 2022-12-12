import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../app/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Poppins } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAction } from "../app/hooks/useAction";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import AppLayout from "../app/layouts/AppLayout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div id="root">
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </div>
          <ToastContainer />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
