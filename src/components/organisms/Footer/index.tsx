import clsx from 'clsx';
import React from 'react';

export const Footer: React.VFC<{className?: string}> = ({className}) => (
  <footer
    className={clsx(
      className,
      ['px-4', 'py-8'],
      ['border-t'],
      ['border-gray-300'],
      ['flex', 'justify-end'],
    )}
  >
    <a
      href="https://github.com/SnO2WMaN/tohohoify"
      className={clsx(['text-sm'], ['text-gray-400'], ['select-all'])}
    >
      GitHub
    </a>
  </footer>
);
