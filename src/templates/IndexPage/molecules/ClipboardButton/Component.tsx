import {faClipboard} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export type ComponentProps = {
  className?: string;
  disabled: boolean;
  handleClick(): void;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  disabled,
  handleClick,
}) => (
  <button
    type="button"
    disabled={disabled}
    className={clsx(
      className,
      ['flex', 'justify-center', 'items-center'],
      'px-4',
      ['disabled:bg-gray-400', 'bg-blue-400', 'active:bg-blue-500'],
      ['disabled:cursor-default', 'cursor-pointer'],
    )}
    onClick={handleClick}
  >
    <FontAwesomeIcon
      icon={faClipboard}
      className={clsx(['text-lg'], 'text-white')}
    />
  </button>
);
