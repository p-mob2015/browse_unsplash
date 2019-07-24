import { PAGE_SIZE } from 'enum';

export const generateUserParams = keyword => ({
  query: keyword,
  page: 1,
  per_page: PAGE_SIZE.users,
});

export const generateImageParams = username => ({
  username,
  page: 1,
  per_page: PAGE_SIZE.images,
});
