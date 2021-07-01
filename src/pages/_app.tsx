import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {AppProps} from 'next/app';
import React from 'react';
import '~/styles/global.css';
import {DefaultLayout} from '../layouts/DefaultLayout';

config.autoAddCss = false;

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <DefaultLayout>
      <PageComponent {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
