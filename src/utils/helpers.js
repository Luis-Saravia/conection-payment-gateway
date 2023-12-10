export const callForFetch = async (url, config = {}) => {

  return fetch(url, config)
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(error => console.error(error));
}