import clsx from 'clsx';
import React from 'react';

export const Code: React.VFC<{className?: string; url?: string}> = ({
  className,
  url,
}) => (
  <pre
    className={clsx(
      className,
      'w-full',
      ['py-2'],
      ['px-4'],
      'no-scrollbar',
      'whitespace-nowrap',
      ['bg-gray-600'],
      'overflow-x-auto',
    )}
  >
    <code
      className={clsx('inline-block', ['text-sm'], 'text-white', 'select-all')}
    >
      {url && url}
    </code>
  </pre>
);
