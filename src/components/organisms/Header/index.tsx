import clsx from 'clsx';
import React from 'react';

export const Header: React.VFC<{className?: string}> = ({className}) => (
  <header
    className={clsx(className, ['py-4'], ['border-b'], ['border-gray-300'])}
  >
    <h1
      className={clsx(
        ['pl-4'],
        ['text-3xl'],
        ['text-gray-700'],
        'font-bold',
        'select-all',
      )}
    >
      tohohoify
    </h1>
  </header>
);
