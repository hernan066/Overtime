import type { AppProps } from "next/app";

import { store } from "../redux/store";
import { Provider } from "react-redux";

import "../styles/styles.scss";
import { AnimatePresence } from "framer-motion";
import { SWRConfig } from "swr";


function MyApp({ Component, pageProps, router }: AppProps) {
  
  
  
  
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
