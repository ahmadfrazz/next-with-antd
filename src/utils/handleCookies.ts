import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

export const getCookie = (name: string) => {
  const cookie = Cookies.get(name);
  return cookie;
};

export const removeCookie = (name: string) => {
  Cookies.remove('email');
};
