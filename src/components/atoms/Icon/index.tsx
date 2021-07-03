import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {
  faFont,
  faImage,
  faLink,
  faShareSquare,
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

export const IconLink: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} icon={faLink} fixedWidth />
);

export const IconShare: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon
    className={clsx(className)}
    icon={faShareSquare}
    fixedWidth
  />
);

export const IconTwitter: React.VFC<{className?: string}> = ({className}) => (
  <FontAwesomeIcon className={clsx(className)} icon={faTwitter} fixedWidth />
);
