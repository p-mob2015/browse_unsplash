const defaultRemoteSet = {
  data: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const users = {
  ...defaultRemoteSet,
  params: null,
  current: null,
  totalPages: 1000,
};

export const images = {
  ...defaultRemoteSet,
  params: null,
  hasMore: true,
};
