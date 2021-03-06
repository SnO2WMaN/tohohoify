import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import {IconLink, IconShare} from '~/components/atoms/Icon';
import {FontFamily} from '~/libs/fonts';
import {SocialButtonTwitter} from './atoms/SocialButton';
import {Clipboard} from './organisms/Clipboard';
import {Form} from './organisms/Form';

export type ComponentProps = {
  className?: string;
  imageUrl?: string;
  shareUrl?: string;
  socialUrls: Record<'twitter', string | undefined>;
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
  socialUrls,
  handleShareUrl,
  handleImageUrl,
  defaultValues,
}) => {
  return (
    <main className={clsx(className, ['px-4', 'sm:px-2', 'lg:px-0'])}>
      <section className={clsx(['w-full'], ['h-64', 'sm:h-72', 'md:h-96'])}>
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
            ['gap-y-4'],
          )}
        >
          <div className={clsx('col-span-1')}>
            <div className={clsx('pl-2', 'flex', 'items-center')}>
              <IconLink className={clsx('text-lg', ['text-blue-400'])} />
              <h2 className={clsx('ml-2', 'text-lg', 'text-gray-700')}>
                Image URL
              </h2>
            </div>
            <Clipboard className={clsx(['mt-2'], 'shadow-xl')} url={imageUrl} />
          </div>
          <div className={clsx('col-span-1')}>
            <div className={clsx('pl-2', 'flex', 'items-center')}>
              <IconShare className={clsx('text-lg', ['text-blue-400'])} />
              <h2 className={clsx('ml-2', 'text-lg', 'text-gray-700')}>
                Share
              </h2>
            </div>
            <div className={clsx('mt-2', ['flex', 'items-center'])}>
              <Clipboard
                className={clsx(['flex-grow'], 'shadow-xl')}
                url={shareUrl}
              />
              <div className={clsx('ml-4', 'flex')}>
                <SocialButtonTwitter
                  href={socialUrls.twitter}
                  className={clsx(
                    ['w-10', 'h-10'],
                    ['bg-twitter-1', 'text-white', 'text-lg'],
                    'shadow-xl',
                  )}
                />
              </div>
            </div>
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
