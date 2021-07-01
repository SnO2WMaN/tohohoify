import clsx from 'clsx';
import React from 'react';

export const Input: React.VFC<{
  className?: string;
  id: string;
  labelText: string;
  value: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  Icon: React.VFC<{className?: string}>;
}> = ({className, id, labelText, value, handleChange, Icon}) => (
  <label className={clsx(className)} htmlFor={id}>
    <div className={clsx(['flex', 'items-center'], ['pl-2'])}>
      <Icon className={clsx('text-md', ['text-blue-400'])} />
      <span className={clsx('ml-2', 'text-md', ['text-gray-500'])}>
        {labelText}
      </span>
    </div>
    <input
      className={clsx(
        ['w-full'],
        ['rounded'],
        ['mt-2'],
        ['px-4'],
        ['py-2'],
        'border',
        ['border-gray-400'],
        ['text-sm'],
      )}
      id={id}
      value={value}
      aria-label={labelText}
      onChange={handleChange}
    />
  </label>
);
