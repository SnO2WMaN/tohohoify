import {useBaseUrl, useImageBaseUrl} from '~/hooks/useBaseUrl';

export type Builder = (query: {
  icon: string;
  text: string;
  font?: string;
  fontSize?: string;
}) => string;

export const useShareUrlBuilder: () => Builder = () => {
  const baseUrl = useBaseUrl();
  return ({icon, text, font, fontSize}) => {
    const url = new URL(baseUrl);
    url.searchParams.set('icon', icon);
    url.searchParams.set('text', text);
    if (font) url.searchParams.set('font', font);
    if (fontSize) url.searchParams.set('fontSize', fontSize);
    return url.toString();
  };
};

export const useImageUrlBuilder: () => Builder = () => {
  const imageBaseUrl = useImageBaseUrl();
  return ({icon, text, font, fontSize}) => {
    const url = new URL(imageBaseUrl);
    url.searchParams.set('icon', icon);
    url.searchParams.set('text', text);
    if (font) url.searchParams.set('font', font);
    if (fontSize) url.searchParams.set('fontSize', fontSize);
    return url.toString();
  };
};
