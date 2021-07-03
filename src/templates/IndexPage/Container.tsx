import React, {useState} from 'react';
import {FontFamily} from '~/libs/fonts';
import {Component} from './Component';

export type ContainerProps = {
  defaultValues: {
    icon?: string;
    text?: string;
    font?: FontFamily;
    fontSize?: string;
  };
};
export const Container: React.VFC<ContainerProps> = ({defaultValues}) => {
  const [url, setUrl] = useState<string | undefined>();

  return (
    <Component
      url={url}
      onUrl={(value) => setUrl(value)}
      defaultValues={defaultValues}
    />
  );
};
