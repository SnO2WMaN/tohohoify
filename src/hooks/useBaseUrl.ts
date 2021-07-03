// eslint-disable-next-line no-process-env
export const useBaseUrl = () => new URL(process.env.BASE_URL!).toString();

export const useImageBaseUrl = () => {
  const baseUrl = useBaseUrl();
  return new URL('/api', baseUrl).toString();
};
