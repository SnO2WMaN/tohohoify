export const fontFamilies = [
  'Dela Gothic One',
  'DotGothic16',
  'Hachi Maru Pop',
  'Kiwi Maru',
  'Kosugi',
  'Kosugi Maru',
  'M PLUS 1p',
  'M PLUS Rounded 1c',
  'New Tegomin',
  'Noto Sans JP',
  'Noto Serif JP',
  'Otomanopee One',
  'Potta One',
  'Reggae One',
  'RocknRoll One',
  'Sawarabi Gothic',
  'Sawarabi Mincho',
  'Shippori Mincho',
  'Shippori Mincho B1',
  'Stick',
  'Train One',
  'Yomogi',
  'Yusei Magic',
] as const;

export type FontFamily = typeof fontFamilies[number];
export const isValidFontFamily = (value: string): value is FontFamily =>
  fontFamilies.includes(value as any);
