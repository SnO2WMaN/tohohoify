import {useRouter} from 'next/router';
import {isValidFontFamily} from '~/libs/fonts';

export const useParametersFromURL = () => {
  const {query} = useRouter();
  return {
    icon: query.icon && typeof query.icon === 'string' ? query.icon : undefined,
    text: query.text && typeof query.text === 'string' ? query.text : undefined,
    font:
      query.font &&
      typeof query.font === 'string' &&
      isValidFontFamily(query.font)
        ? query.font
        : undefined,
    fontSize:
      query.fontSize && typeof query.fontSize === 'string'
        ? query.fontSize
        : undefined,
  };
};
