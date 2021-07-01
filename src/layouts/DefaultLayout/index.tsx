import clsx from 'clsx';
import React from 'react';
import {Footer} from '~/components/organisms/Footer';
import {Header} from '~/components/organisms/Header';

export const DefaultLayout: React.FC = ({children}) => (
  <div
    className={clsx('w-full', 'min-h-screen', 'bg-gray-50', 'flex', 'flex-col')}
  >
    <Header className={clsx('container', 'mx-auto', ['mb-4'])} />
    <div className={clsx('container', 'mx-auto', 'flex-grow')}>{children}</div>
    <Footer className={clsx('container', 'mx-auto', ['mt-4'])} />
  </div>
);
