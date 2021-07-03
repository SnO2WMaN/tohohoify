import {useImageBaseUrl} from '~/hooks/useBaseUrl';

export const useImageUrlBuilder = () => {
  const baseUrl = useImageBaseUrl();
  return ({
    icon,
    text,
    font,
    fontSize,
  }: {
    icon: string;
    text: string;
    font?: string;
    fontSize?: string;
  }) => {
    const url = new URL(baseUrl);
    url.searchParams.set('icon', icon);
    url.searchParams.set('text', text);
    if (font) url.searchParams.set('font', font);
    if (fontSize) url.searchParams.set('fontSize', fontSize);
    return url.toString();
  };
};
