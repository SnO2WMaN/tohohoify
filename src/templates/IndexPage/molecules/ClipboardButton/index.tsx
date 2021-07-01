import React, {useCallback} from 'react';
import {useClipboard} from 'use-clipboard-copy';
import {Component} from './Component';

export const Button: React.VFC<{className?: string; url?: string}> = ({
  className,
  url,
}) => {
  const clipboard = useClipboard();
  const handleClick = useCallback(() => {
    if (url) clipboard.copy(url);
  }, [clipboard, url]);

  return (
    <Component
      className={className}
      disabled={!url}
      handleClick={handleClick}
    />
  );
};
