import api from "./api";

const LINKS_ENDPOINT = import.meta.env.VITE_LINKS_ENDPOINT;

export const getLinks = () => {
  return api.get(LINKS_ENDPOINT);
};

export const getLink = (id) => {
  return api.get(`${LINKS_ENDPOINT}/${id}`);
};

export const getOriginalLink = (shortenedLink) => {
  return api.get(`${LINKS_ENDPOINT}/original/${shortenedLink}`);
};

export const createLink = (values) => {
  return api.post(LINKS_ENDPOINT, JSON.stringify(values));
};

export const updateLink = (values, id) => {
  return api.patch(`${LINKS_ENDPOINT}/${id}`, JSON.stringify(values));
};

export const deleteLink = (id) => {
  return api.delete(`${LINKS_ENDPOINT}/${id}`);
};
