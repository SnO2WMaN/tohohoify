import clsx from 'clsx';
import React, {useEffect, useMemo, useState} from 'react';
import {
  IconFontFamily,
  IconFontSize,
  IconIcon,
  IconText,
} from '~/components/atoms/Icon';
import {useImageUrlBuilder} from '~/hooks/useImageUrlBuilder';
import {FontFamily} from '~/libs/fonts';
import {FontSelector} from '../../molecules/FontSelector';
import {InputLabel, InputText} from '../../molecules/Input';

export const Form: React.VFC<{
  className?: string;
  onUrl(value: string): void;
  defaultValues: {
    icon?: string;
    text?: string;
    font?: FontFamily;
    fontSize?: string;
  };
}> = ({className, onUrl, defaultValues}) => {
  const urlBuilder = useImageUrlBuilder();

  const [iconUrl, setIconUrl] = useState<string>(
    defaultValues?.icon ?? 'https://github.com/SnO2WMaN.png',
  );
  const [text, setText] = useState<string>(defaultValues?.text ?? 'トホホ…');
  const [fontFamily, setFontFamily] = useState<FontFamily>(
    defaultValues?.font ?? 'Yusei Magic',
  );
  const [fontSize, setFontSize] = useState<string>(
    defaultValues?.fontSize ?? '4',
  );

  const url = useMemo(
    () => urlBuilder({icon: iconUrl, text, font: fontFamily, fontSize}),
    [urlBuilder, iconUrl, text, fontFamily, fontSize],
  );

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
      <label
        className={clsx(['col-span-full', 'lg:col-span-4'])}
        htmlFor="icon-url"
      >
        <InputLabel labelText="Icon URL" Icon={IconIcon} />
        <InputText
          className={clsx(['mt-2'])}
          id="icon-url"
          labelText="Icon URL"
          value={iconUrl}
          handleChange={(value) => setIconUrl(value)}
        />
      </label>
      <label
        className={clsx(['col-span-full', 'lg:col-span-2'])}
        htmlFor="text"
      >
        <InputLabel labelText="Text" Icon={IconText} />
        <InputText
          className={clsx(['mt-2'])}
          id="text"
          labelText="Text"
          value={text}
          handleChange={(value) => setText(value)}
        />
      </label>
      <label className={clsx(['col-span-2'])} htmlFor="font-family">
        <InputLabel labelText="Font Family" Icon={IconFontFamily} />
        <FontSelector
          className={clsx(['mt-2'])}
          id="font-family"
          labelText="Font Family"
          value={fontFamily}
          handleChange={(value) => setFontFamily(value)}
        />
      </label>
      <label className={clsx(['col-span-1'])} htmlFor="font-size">
        <InputLabel labelText="Font Size" Icon={IconFontSize} />
        <InputText
          className={clsx(['mt-2'])}
          id="font-size"
          labelText="Font Size"
          value={fontSize}
          handleChange={(value) => setFontSize(value)}
        />
      </label>
    </form>
  );
};
