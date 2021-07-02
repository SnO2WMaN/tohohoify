import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';
import {useImageBaseUrl} from '~/hooks/useBaseUrl';
import {fontFamilies} from '~/libs/fonts';
import {IndexPage} from '~/templates/IndexPage';

export const useImageUrlBuilder = () => {
  const baseUrl = useImageBaseUrl();
  return ({
    icon,
    text,
    font,
    fontSize,
  }: {
    icon: string;
    text: string;
    font?: string;
    fontSize?: string;
  }) => {
    const url = new URL(baseUrl);
    url.searchParams.set('icon', icon);
    url.searchParams.set('text', text);
    if (font) url.searchParams.set('font', font);
    if (fontSize) url.searchParams.set('fontSize', fontSize);
    return url.toString();
  };
};

export const useOGP = () => {
  const urlBuilder = useImageUrlBuilder();
  const {query} = useRouter();

  if (
    query.icon &&
    typeof query.icon === 'string' &&
    query.text &&
    typeof query.text === 'string'
  ) {
    return {
      description: query.text,
      image: urlBuilder({
        icon: query.icon,
        text: query.text,
        font:
          query.font && typeof query.font === 'string' ? query.font : undefined,
        fontSize:
          query.fontSize && typeof query.fontSize === 'string'
            ? query.fontSize
            : undefined,
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
        {!ogp && (
          <>
            <meta property="og:description" content="トホホ…" />
          </>
        )}
        {ogp && (
          <>
            <meta property="og:description" content={ogp.description} />
            <meta property="og:image" content={ogp.image} />
            <meta name="twitter:card" content="photo" />
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
