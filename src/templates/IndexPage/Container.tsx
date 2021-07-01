import React, {useState} from 'react';
import {Component} from './Component';

export type ContainerProps = Record<string, never>;
export const Container: React.VFC<ContainerProps> = () => {
  const [url, setUrl] = useState<string | undefined>();

  return <Component url={url} onUrl={(value) => setUrl(value)} />;
};
