import {VercelRequest} from '@vercel/node';

export type ParsedOptions = {
  icon: string;
  text: string;
  type: 'png' | 'jpeg';
};
export const parseRequest = ({query}: VercelRequest): ParsedOptions => {
  const {icon, text, type = 'jpeg'} = query;

  if (Array.isArray(icon)) throw new Error('icon must not be array');
  if (Array.isArray(text)) throw new Error('text must not be array');

  if (Array.isArray(type)) throw new Error('type must not be array');
  if (type !== 'png' && type !== 'jpeg')
    throw new Error('type must be "png" or "jpeg"');

  return {
    icon,
    text,
    type,
  };
};
