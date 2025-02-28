/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  newStore = stores.push(store);
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  removedStore = stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
// My attempt
// function duplicateStore(store) {
//   let storeDuplicate = {}
//   let key = '';

//   for (key in store) {
//     storeDuplicate[key] = store[key];
//   }


//   return storeDuplicate;
// }

// console.log(boardGame = store.boardGames.slice(0));

function duplicateStore(store) {
  return {
    name: store.name,
    boardGames: store.boardGames.slice(0),
    address: {
      street: store.address.street,
      city: store.address.city,
      state: store.address.state,
      zip: store.address.zip,
    },
  };
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
