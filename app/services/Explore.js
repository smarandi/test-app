/**
 * global fetch
 */
import { BASE_URL, METHOD } from '../scripts/Enums';
import raiseStatus from '../scripts/Http';

// const auth = 'c34b2d3a9f627d6d31ca021ad37fbd38773f3913ffab57c50fe76535f89a9c81';
// const user_id = 'f10b7fce14a9ce5d4c89843ff21d4668a1d0b398a31461cfeb8c656f4d3e9ec3';
const auth = '1d866253385f7497dd2def1a5c0adf58314788f79e014f658ce6f61e749f8b7e';
const user_id = 'a7a24e90f734d9204c1a9be60e138bba439ff4101efa2957dc10eed067cda3b4';


const getAllCourse = (token, id) =>
  fetch(`${BASE_URL.URL}/app2/course/getcourseforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: JSON.stringify({ uuid: '' }),
  }).then(raiseStatus);

const getCourse = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/course/getcourseforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getAllStory = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/story/getstoryforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getAllProjects = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/project/getprojectforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getAllBlogs = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/blog/getblogforuser`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

const getJourney = (token, id, uuid) =>
  fetch(`${BASE_URL.URL}/app2/useractivitydata/journey`, {
    headers: {
      // auth_token: token,
      // user_id: id,
      auth_token: auth,
      user_id,
    },
    method: METHOD.POST,
    body: uuid,
  }).then(raiseStatus);

export {
  getAllCourse,
  getCourse,
  getAllStory,
  getAllProjects,
  getAllBlogs,
  getJourney,
};
