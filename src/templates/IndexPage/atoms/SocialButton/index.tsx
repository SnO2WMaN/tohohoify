import clsx from 'clsx';
import React from 'react';
import {IconTwitter} from '~/components/atoms/Icon';

export const SocialButton: React.VFC<{
  className?: string;
  href?: string;
  Icon: React.VFC<{className?: string}>;
}> = ({className, href, Icon}) => (
  <a
    className={clsx(
      className,
      ['flex', 'justify-center', 'items-center'],
      ['rounded-lg'],
    )}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <Icon className={clsx([])} />
  </a>
);

export const SocialButtonTwitter: React.VFC<{
  className?: string;
  href?: string;
}> = ({...props}) => <SocialButton {...props} Icon={IconTwitter} />;
