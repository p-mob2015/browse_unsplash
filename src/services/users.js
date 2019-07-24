import axios from 'axios';

import { ERROR } from 'enum';

const API_ROOT = process.env.REACT_APP_API_ROOT;
const API_KEY = process.env.REACT_APP_API_KEY;

const searchUsers = async (params) => {
  try {
    const response = await axios.get(
      `${API_ROOT}/search/users?client_id=${API_KEY}`,
      { params }
    );

    return response.data;
  } catch (_error) {
    throw new Error({
      type: ERROR.API_FAILURE,
      subject: 'users',
    });
  }
};

export default {
  searchUsers,
};
