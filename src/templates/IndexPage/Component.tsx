import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import {IconLink, IconShare} from '~/components/atoms/Icon';
import {FontFamily} from '~/libs/fonts';
import {Clipboard} from './organisms/Clipboard';
import {Form} from './organisms/Form';

export type ComponentProps = {
  className?: string;
  imageUrl?: string;
  shareUrl?: string;
  handleImageUrl(value: string): void;
  handleShareUrl(value: string): void;
  defaultValues: {
    icon?: string;
    text?: string;
    font?: FontFamily;
    fontSize?: string;
  };
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  imageUrl,
  shareUrl,
  handleShareUrl,
  handleImageUrl,
  defaultValues,
}) => {
  return (
    <main className={clsx(className, ['px-4', 'sm:px-2', 'lg:px-0'])}>
      <section className={clsx(['w-full'], ['h-96'])}>
        <div className={clsx(['w-full'], ['h-full'], ['relative'])}>
          {imageUrl && (
            <Image
              src={imageUrl}
              title="tohohoify generate image"
              layout="fill"
              objectFit="contain"
              unoptimized
            />
          )}
        </div>
      </section>
      <section className={clsx(['w-full'], ['mt-8'])}>
        <div
          className={clsx(
            ['w-full', 'max-w-screen-lg'],
            ['mx-auto'],
            ['grid'],
            ['grid-cols-1', 'lg:grid-cols-2'],
            ['gap-x-6'],
          )}
        >
          <div className={clsx('col-span-1')}>
            <div className={clsx('pl-2', 'flex', 'items-center')}>
              <IconLink className={clsx('text-lg', ['text-blue-400'])} />
              <h2 className={clsx('ml-2', 'text-lg', 'text-gray-700')}>
                Image URL
              </h2>
            </div>
            <Clipboard className={clsx(['mt-2'])} url={imageUrl} />
          </div>
          <div className={clsx('col-span-1')}>
            <div className={clsx('pl-2', 'flex', 'items-center')}>
              <IconShare className={clsx('text-lg', ['text-blue-400'])} />
              <h2 className={clsx('ml-2', 'text-lg', 'text-gray-700')}>
                Share
              </h2>
            </div>
            <Clipboard className={clsx(['mt-2'])} url={shareUrl} />
          </div>
        </div>
        <Form
          className={clsx(['mt-8'], ['max-w-screen-lg'], ['mx-auto'])}
          handleImageUrl={handleImageUrl}
          handleShareUrl={handleShareUrl}
          defaultValues={defaultValues}
        />
      </section>
    </main>
  );
};
