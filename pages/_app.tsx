import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';


import { AnimatePresence } from "framer-motion";
import { SWRConfig } from "swr";

import "../styles/styles.scss";


function MyApp({ Component, pageProps, router }: AppProps) {
  
  
  
  
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        </PersistGate>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
