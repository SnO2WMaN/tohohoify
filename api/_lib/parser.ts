import {VercelRequest} from '@vercel/node';
import escape from 'escape-html';

export type ParsedOptions = {
  icon: string;
  text: string;
  font: string;
  type: 'png' | 'jpeg';
};
export const parseRequest = ({query}: VercelRequest): ParsedOptions => {
  const {icon, text, font = 'Yusei Magic', type = 'jpeg'} = query;

  if (Array.isArray(icon)) throw new Error('icon must not be array');
  if (Array.isArray(text)) throw new Error('text must not be array');

  if (Array.isArray(type)) throw new Error('type must not be array');
  if (type !== 'png' && type !== 'jpeg')
    throw new Error('type must be "png" or "jpeg"');

  if (Array.isArray(font)) throw new Error('font must not be array');

  return {
    icon: escape(icon),
    text: escape(text),
    font: escape(font),
    type,
  };
};
