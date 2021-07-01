import clsx from 'clsx';
import React, {useEffect, useMemo, useState} from 'react';
import {
  IconFontFamily,
  IconFontSize,
  IconIcon,
  IconText,
} from '~/components/atoms/Icon';
import {useImageBaseUrl} from '~/hooks/useBaseUrl';
import {Input} from '../../molecules/Input';

export const Form: React.VFC<{
  className?: string;
  onUrl(value: string): void;
}> = ({className, onUrl}) => {
  const baseUrl = useImageBaseUrl();
  const [iconUrl, setIconUrl] = useState<string>(
    'https://github.com/SnO2WMaN.png',
  );
  const [text, setText] = useState<string>('トホホ…');
  const [fontFamily, setFontFamily] = useState<string>('Yusei Magic');
  const [fontSize, setFontSize] = useState<string>('4');

  const url = useMemo(() => {
    const url = new URL(baseUrl);
    url.searchParams.set('icon', iconUrl);
    url.searchParams.set('text', text);
    if (fontFamily !== '') url.searchParams.set('font', fontFamily);
    if (fontSize !== '') url.searchParams.set('fontSize', fontSize);
    return url.toString();
  }, [baseUrl, iconUrl, text, fontFamily, fontSize]);

  useEffect(
    () => {
      onUrl(url);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      onUrl(url);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [onUrl, url]);

  return (
    <form
      className={clsx(
        className,
        ['grid'],
        ['grid-cols-3', 'md:grid-cols-4', 'lg:grid-cols-6'],
        ['gap-x-2', 'md:gap-x-4'],
        ['gap-y-8', 'md:gap-y-4'],
      )}
    >
      <Input
        className={clsx(['col-span-full', 'lg:col-span-4'])}
        id="icon"
        labelText="Icon URL"
        value={iconUrl}
        handleChange={(event) => {
          setIconUrl(event.target.value);
        }}
        Icon={IconIcon}
      />
      <Input
        className={clsx(['col-span-full', 'lg:col-span-2'])}
        id="text"
        labelText="Text"
        value={text}
        handleChange={(event) => setText(event.target.value)}
        Icon={IconText}
      />
      <Input
        className={clsx(['col-span-2'])}
        id="font-family"
        labelText="Font Family"
        value={fontFamily}
        handleChange={(event) => setFontFamily(event.target.value)}
        Icon={IconFontFamily}
      />
      <Input
        className={clsx(['col-span-1'])}
        id="font-size"
        labelText="Font Size"
        value={fontSize}
        handleChange={(event) => setFontSize(event.target.value)}
        Icon={IconFontSize}
      />
    </form>
  );
};
