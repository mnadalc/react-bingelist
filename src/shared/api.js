const ENDPOINT = 'http://localhost:4000';

const request = (method, entity, settings = {}) =>
  new Promise((resolve, reject) => {
    const headers = {
      ...(settings.headers || {}),
    };

    const url = `${ENDPOINT}/${entity}`;

    fetch(url, {
      ...settings,
      method,
      headers,
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response
            .json()
            .then(res => ({
              headers: response.headers,
              status: response.status,
              data: res,
            }))
            .then(resolve)
            .catch(() => resolve());
        }

        response
          .json()
          .then(reject)
          .catch(reject);
      })
      .catch(e => {
        console.error(e);
        reject(new Error(`There's a problem with the request`));
      });
  });

export default request;
