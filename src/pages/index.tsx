import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import {useImageUrlBuilder} from '~/hooks/useImageUrlBuilder';
import {useParametersFromURL} from '~/hooks/useParametersFromURL';
import {fontFamilies} from '~/libs/fonts';
import {IndexPage} from '~/templates/IndexPage';

export const useOGP = () => {
  const urlBuilder = useImageUrlBuilder();
  const {icon, text, font, fontSize} = useParametersFromURL();

  if (icon && text) {
    return {
      description: text,
      image: urlBuilder({
        icon,
        text,
        ...{font},
        ...{fontSize},
      }),
    };
  }
  return null;
};

export const useGoogleFontsHref = () => {
  const baseUrl = new URL('https://fonts.googleapis.com/css2');
  const params = new URLSearchParams([
    ['display', 'swap'],
    ...fontFamilies.map((family) => ['family', family]),
  ]);
  return (text: string) => {
    params.set('text', text);
    baseUrl.search = params.toString();
    return baseUrl.toString();
  };
};

export type PageProps = Record<string, never>;
export const Page: NextPage<PageProps> = ({...props}) => {
  const ogp = useOGP();
  const googleFonts = useGoogleFontsHref();

  return (
    <>
      <Head>
        <title>tohohoify</title>
        <meta property="og:title" content="tohohoify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tohohoify.vercel.app" />
        <meta name="twitter:title" content="tohohoify" />
        <meta name="twitter:site" content="@SnO2WMaN" />
        {!ogp && (
          <>
            <meta property="og:description" content="トホホ…" />
            <meta property="twitter:description" content="トホホ…" />
          </>
        )}
        {ogp && (
          <>
            <meta property="og:description" content={ogp.description} />
            <meta property="og:image" content={ogp.image} />
            <meta name="twitter:card" content="photo" />
            <meta name="twitter:description" content={ogp.description} />
            <meta property="twitter:image" content={ogp.image} />
          </>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link href={googleFonts('サンプル')} rel="stylesheet" />
      </Head>
      <IndexPage />
    </>
  );
};
export default Page;
