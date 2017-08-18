export const baseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:43301';
  } else if (process.env.NODE_ENV === 'production') {
    return 'http://nhole.ovh';
  }

  return null;
};
