import { BASE_URL, METHOD } from '../scripts/Enums';
import raiseStatus from '../scripts/Http';

const auth = '1d866253385f7497dd2def1a5c0adf58314788f79e014f658ce6f61e749f8b7e';
const user_id = 'a7a24e90f734d9204c1a9be60e138bba439ff4101efa2957dc10eed067cda3b4';

// const user_id = 'f10b7fce14a9ce5d4c89843ff21d4668a1d0b398a31461cfeb8c656f4d3e9ec3';
// const auth = 'c34b2d3a9f627d6d31ca021ad37fbd38773f3913ffab57c50fe76535f89a9c81';

const getQuizStatus = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/quiz/getquizforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getTotalTimeSpent = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/useractivitydata/total`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getAllCourses = () => {};

const validateAnswer = quizResponseObject =>
  fetch(`${BASE_URL.URL}/app2/useractivitydata/total`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: JSON.stringify(quizResponseObject),
  }).then(raiseStatus);

export {
  getQuizStatus,
  validateAnswer,
  getTotalTimeSpent,
};

