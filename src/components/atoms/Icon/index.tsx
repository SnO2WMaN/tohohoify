import {
  faFont,
  faImage,
  faSignature,
  faTextHeight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export const IconIcon: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} icon={faImage} fixedWidth />
);

export const IconText: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} icon={faSignature} fixedWidth />
);

export const IconFontFamily: React.VFC<{className?: string}> = ({
  className,
}) => <FontAwesomeIcon className={clsx(className)} icon={faFont} fixedWidth />;

export const IconFontSize: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} icon={faTextHeight} fixedWidth />
);
