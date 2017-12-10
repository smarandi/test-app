/**
 * global fetch
 */
import { BASE_URL, METHOD } from '../scripts/Enums';
import raiseStatus from '../scripts/Http';

const register = formBody =>
  fetch(`${BASE_URL.URL}/app2/auth/signup`, {
    method: 'post',
    body: formBody,
  }).then(raiseStatus);

const generate = phone => fetch(`${BASE_URL.URL}/app2/auth/generate`, {
  method: METHOD.POST,
  body: phone,
}).then(raiseStatus);

const login = auth =>
  fetch(`${BASE_URL.URL}/app2/auth/login`, {
    method: METHOD.POST,
    body: auth,
  }).then(raiseStatus);


export { register, generate, login };
