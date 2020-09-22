import store from './store';
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nick-jang';

const shoppingFetch = function (...args) {
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        store.setError({code: res.status});
      }

      return res.json();
    })
    .then(data => {
      if (store.error.code) {
        store.setError({message: data.message}); 
        return Promise.reject(store.error);
      }

      return data;
    })
    .catch(e => { 
      console.log(`Error creating item: ${store.error.message}`);
    });
};

const getItems = function () {
  return shoppingFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({ name: name });
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  };

  return shoppingFetch(`${BASE_URL}/items`, options);
};

const updateItem = function (id, updateData) {
  const bodyData = JSON.stringify(updateData);

  let options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: bodyData
  };

  return shoppingFetch(`${BASE_URL}/items/${id}`, options);
};

const deleteItem = function (id) {
  return shoppingFetch(`${BASE_URL}/items/${id}`, { method: 'DELETE' });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};