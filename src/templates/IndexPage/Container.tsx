import React, {useMemo, useState} from 'react';
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

  const tweetUrl = useMemo(() => {
    if (shareUrl) {
      const url = new URL('http://twitter.com/share');
      url.searchParams.set('url', shareUrl);
      return url.toString();
    } else return undefined;
  }, [shareUrl]);

  return (
    <Component
      imageUrl={imageUrl}
      shareUrl={shareUrl}
      socialUrls={{twitter: tweetUrl}}
      handleImageUrl={(value) => setImageUrl(value)}
      handleShareUrl={(value) => setShareUrl(value)}
      defaultValues={defaultValues}
    />
  );
};
