import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import {fontFamilies} from '~/libs/fonts';
import {IndexPage} from '~/templates/IndexPage';

export type PageProps = Record<string, never>;
export const Page: NextPage<PageProps> = ({...props}) => {
  const url = new URL('https://fonts.googleapis.com/css2');
  const parms = new URLSearchParams([
    ['text', 'サンプル'],
    ['display', 'swap'],
    ...fontFamilies.map((family) => ['family', family]),
  ]);
  url.search = parms.toString();

  return (
    <>
      <Head>
        <title>tohohoify</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href={url.toString()} rel="stylesheet" />
      </Head>
      <IndexPage />
    </>
  );
};
export default Page;
