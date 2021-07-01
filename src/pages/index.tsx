import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import {IndexPage} from '~/templates/IndexPage';

export type PageProps = Record<string, never>;
export const Page: NextPage<PageProps> = ({...props}) => {
  return (
    <>
      <Head>
        <title>tohohoify</title>
      </Head>
      <IndexPage />
    </>
  );
};
export default Page;
