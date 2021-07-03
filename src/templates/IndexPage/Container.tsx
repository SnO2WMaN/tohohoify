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
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [shareUrl, setShareUrl] = useState<string | undefined>();

  return (
    <Component
      imageUrl={imageUrl}
      shareUrl={shareUrl}
      handleImageUrl={(value) => setImageUrl(value)}
      handleShareUrl={(value) => setShareUrl(value)}
      defaultValues={defaultValues}
    />
  );
};
