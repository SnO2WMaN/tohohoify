import {VercelRequest} from '@vercel/node';

export type ParsedOptions = {
  icon: string;
  text: string;
};
export const parseRequest = ({query}: VercelRequest): ParsedOptions => {
  const {icon, text} = query;

  if (Array.isArray(icon)) throw new Error('icon must not be array');
  if (Array.isArray(text)) throw new Error('text must not be array');

  return {icon, text};
};
