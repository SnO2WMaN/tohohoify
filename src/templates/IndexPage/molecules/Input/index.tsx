import clsx from 'clsx';
import React from 'react';

export const InputLabel: React.VFC<{
  className?: string;
  labelText: string;
  Icon: React.VFC<{className?: string}>;
}> = ({className, Icon, labelText}) => (
  <div className={clsx(className, ['flex', 'items-center'], ['pl-2'])}>
    <Icon className={clsx('text-md', ['text-blue-400'])} />
    <span className={clsx('ml-2', 'text-md', ['text-gray-500'])}>
      {labelText}
    </span>
  </div>
);

export const InputText: React.VFC<{
  className?: string;
  id: string;
  labelText: string;
  value: string;
  handleChange(text: string): void;
}> = ({className, id, labelText, value, handleChange}) => (
  <input
    id={id}
    aria-label={labelText}
    className={clsx(
      className,
      ['w-full'],
      ['rounded'],
      ['px-4'],
      ['py-2'],
      ['bg-white'],
      'border',
      ['border-gray-200'],
      ['text-gray-900'],
      ['text-sm'],
      ['shadow-lg'],
    )}
    value={value}
    onChange={(event) => {
      event.preventDefault();
      handleChange(event.target.value);
    }}
  />
);
