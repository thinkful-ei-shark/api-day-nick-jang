const items = [];
let hideCheckeditems = false;
let error = { code: '', message: '' };

const findById = function (id) {
  let item = {};
  items.forEach(currentItem => {
    if (currentItem.id === id) {
      item = currentItem;
    }
  });
  return item;
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function (id, newData) {
  let item = findById(id);
  Object.assign(item, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const setError = function (e) {
  Object.assign(error, e);
};

const resetError = function (e) {
  this.error.code = '';
  this.error.message = '';
};

export default {
  items,
  hideCheckeditems,
  error,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter,
  setError,
  resetError
};