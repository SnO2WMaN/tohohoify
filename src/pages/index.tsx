import {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import {useImageUrlBuilder} from '~/hooks/useImageUrlBuilder';
import {fontFamilies, FontFamily, isValidFontFamily} from '~/libs/fonts';
import {IndexPage} from '~/templates/IndexPage';

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

export type UrlQuery = {
  icon?: string;
  text?: string;
  font?: string;
  fontSize?: string;
};
export type PageProps = {
  icon?: string;
  text?: string;
  font?: FontFamily;
  fontSize?: string;
};

export const getServerSideProps: GetServerSideProps<
  UrlQuery,
  PageProps
> = async ({query}) => {
  return {
    props: {
      ...{
        icon:
          query.icon && typeof query.icon === 'string' ? query.icon : undefined,
      },
      ...{
        text:
          query.text && typeof query.text === 'string' ? query.text : undefined,
      },
      ...{
        font:
          query.font &&
          typeof query.font === 'string' &&
          isValidFontFamily(query.font)
            ? query.font
            : undefined,
      },
      ...{
        fontSize:
          query.fontSize && typeof query.fontSize === 'string'
            ? query.fontSize
            : undefined,
      },
    },
  };
};

export const Page: NextPage<PageProps> = ({
  icon,
  text,
  font,
  fontSize,
  ...props
}) => {
  const urlBuilder = useImageUrlBuilder();
  const googleFonts = useGoogleFontsHref();

  return (
    <>
      <Head>
        <title>tohohoify</title>
        <meta property="og:title" content="tohohoify" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tohohoify.vercel.app" />
        <meta name="twitter:title" content="tohohoify" />
        <meta name="twitter:creator" content="@SnO2WMaN" />
        {!(icon && text) && (
          <>
            <meta property="og:description" content="トホホ…" />
            <meta name="twitter:card" content="summary" />
          </>
        )}
        {icon && text && (
          <>
            <meta property="og:description" content={text} />
            <meta
              property="og:image"
              content={urlBuilder({icon, text, ...{font}, ...{fontSize}})}
            />
            <meta name="twitter:card" content="summary_large_image" />
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
      <IndexPage
        defaultValues={{
          icon,
          text,
          font,
          fontSize,
        }}
      />
    </>
  );
};
export default Page;
