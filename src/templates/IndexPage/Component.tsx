import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import {Clipboard} from './organisms/Clipboard';
import {Form} from './organisms/Form';

export type ComponentProps = {
  className?: string;
  url?: string;
  onUrl(value: string): void;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  url,
  onUrl,
}) => {
  return (
    <main className={clsx(className, ['px-4', 'sm:px-2', 'lg:px-0'])}>
      <section className={clsx(['w-full'], ['h-96'])}>
        <div className={clsx(['w-full'], ['h-full'], ['relative'])}>
          {url && (
            <Image src={url} layout="fill" objectFit="contain" unoptimized />
          )}
        </div>
      </section>
      <section className={clsx(['w-full'], ['mt-8'])}>
        <Clipboard
          className={clsx(['w-full', 'max-w-screen-lg'], ['mx-auto'])}
          url={url}
        />
        <Form
          className={clsx(['mt-6'], ['max-w-screen-lg'], ['mx-auto'])}
          onUrl={onUrl}
        />
      </section>
    </main>
  );
};
