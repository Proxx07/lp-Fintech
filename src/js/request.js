const BASE_URL = 'https://api.dlvr.uz';

const $request = {
  post: async (url, formData) => {
    const body = {};
    formData.forEach((value, key) => (body[key] = value));
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    });

    return response;
  },
};

export default $request;
