import {VercelRequest} from '@vercel/node';

export type Option = {
  icon: string;
  text: string;
};
export const parseRequest = ({query}: VercelRequest): Option => {
  const {icon, text} = query;

  if (Array.isArray(icon)) throw new Error('icon must not be array');
  if (Array.isArray(text)) throw new Error('text must not be array');

  return {icon, text};
};
