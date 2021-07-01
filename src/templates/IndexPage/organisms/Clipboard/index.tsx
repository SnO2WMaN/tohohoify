import clsx from 'clsx';
import React from 'react';
import {Button} from '../../molecules/ClipboardButton';
import {Code} from '../../molecules/CodeBlock';

export const Clipboard: React.VFC<{
  className?: string;
  url?: string;
}> = ({className, url}) => (
  <div
    className={clsx(
      className,
      ['overflow-hidden'],
      ['flex', 'justify-center'],
      ['rounded'],
    )}
  >
    <Code url={url} />
    <Button url={url} />
  </div>
);
