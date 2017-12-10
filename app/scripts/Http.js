/* eslint-disable no-underscore-dangle */

const raiseStatus = (response) => {
  console.log('Response', response);
  if (response.status === 200) {
    return JSON.parse(response._bodyText);
  }
  /* TODO: Add remaining handlers */
  throw new Error({ message: 'Fetch Failed', status: response.status });
};

export default raiseStatus;
