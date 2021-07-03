import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import {fontFamilies, FontFamily} from '~/libs/fonts';

export const SampleText = styled.span<{fontFamily: FontFamily}>`
  font-family: ${({fontFamily}) => fontFamily};
`;

export const Plain: React.VFC<{
  className?: string;
  id: string;
  labelText: string;
  value: string;
  handleChange(text: FontFamily): void;
}> = ({className, id, labelText, value, handleChange}) => {
  return (
    <details
      id={id}
      aria-label={labelText}
      className={clsx(className, 'relative')}
    >
      <summary
        className={clsx(
          ['rounded'],
          ['px-4'],
          ['py-2'],
          ['bg-white'],
          'border',
          ['border-gray-200'],
          ['text-sm'],
          'shadow-lg',
          ['select-none'],
        )}
      >
        {value}
      </summary>
      <div
        role="listbox"
        className={clsx(
          ['shadow-lg'],
          ['z-50'],
          ['absolute'],
          ['top-full'],
          ['mt-1'],
          ['w-full'],
          ['h-32'],
          ['flex', 'flex-col'],
          ['overflow-y-auto'],
          ['divide-y'],
          ['scroll-snap-y-mandatory'],
        )}
      >
        {fontFamilies.map((family) => (
          <div
            key={family}
            role="option"
            tabIndex={0}
            aria-selected={value === family}
            className={clsx(
              ['px-4'],
              ['py-2'],
              ['flex', 'items-center'],
              'cursor-pointer',
              ['group'],
              ['bg-white', 'hover:bg-blue-500'],
              ['scroll-snap-align-center'],
            )}
            onClick={() => handleChange(family)}
            onKeyPress={() => handleChange(family)}
          >
            <SampleText
              className={clsx(
                'text-lg',
                ['group-hover:text-white'],
                ['text-gray-900'],
                ['text-lg'],
                ['select-none'],
              )}
              fontFamily={family}
            >
              サンプル
            </SampleText>
            <span
              className={clsx(
                ['ml-2'],
                ['group-hover:text-white'],
                'flex-grow',
                ['text-gray-500'],
                ['text-xs'],
                'text-right',
              )}
            >
              {family}
            </span>
          </div>
        ))}
      </div>
    </details>
  );
};

export const FontSelector = styled(Plain)`
  > summary {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 40;
    }
  }

  &:not([open]) > summary::before {
    display: none;
  }
`;
