// #ReactiveList
// Provides a simple reactive list interface

/** @method ReactiveList Keeps a reactive list of key+value items
  * @constructor
  * @param {object} [options]
  * @param {function} sort The sort algorithm to use
  * Example:
```js
  var list = new ReactiveList();
  list.add(1, { text: 'Hello id: 1' });
  list.add(2, { text: 'Hello id: 2' });
  list.add(3, { text: 'Hello id: 3' });
  list.update(2, { text: 'Updated 2'});
  list.del(1);
  
  list.forEach(function(value, key) {
    console.log('GOT: ' + value.text);
  }, true); // Set noneReactive = true, default behaviour is reactive

  // Return from Template:
  Template.hello.list = function() {
    return list.fetch();
  };
```
  *
  * ####Example of a sort algorithm
```js
  var list = new ReactiveList({
    sort: function(a, b) {
      // a and b are type of { key, value }
      // here we sort by the key:
      return a.key < b.key;
    }
  });
```
  */
ReactiveList = function(options) {
  var self = this;
  // Base sorted list
  self.list = [];
  // Make a quick lookup index
  self.lookup = {};
  // Set sort to options.sort or default to true (asc)
  self.sort = (options && options.sort || function(a, b) {
    return a.key < b.key;
  });
  // Rig the dependency
  self._listDeps = new Deps.Dependency();
};

/** @method ReactiveList.prototype.update
  * @param {string|number} key Key to update
  * @param {any} value Update with this value
  */
ReactiveList.prototype.update = function(key, value) {
  var self = this;
  var i = self.lookup[key];
  if (typeof i === 'undefined') {
    throw new Error('Reactive list cannot update, key "' + key + '" not found');
  }
  self.list[i] = { key: key, value: value };
  self._listDeps.changed();
};

/** @method ReactiveList.prototype.insert
  * @param {string|number} key Key to insert
  * @param {any} value Insert item with this value
  */
ReactiveList.prototype.insert = function(key, value) {
  var self = this;
  if (typeof self.lookup[key] !== 'undefined') {
    throw new Error('Reactive list could not insert: key "' + key + '" allready found');
  }
  var newList = [];
  var newItem = { key: key, value: value };
  var inserted = 0;
  // push, sort and index...
  for (var i = 0; i < self.list.length; i++) {
    // If not allready inserted and match sort then insert the new item
    if (self.sort && !inserted && self.sort(newItem, self.list[i])) {
      newList[i] = newItem;
      self.lookup[key] = i;
      inserted = 1;      
    }
    // Add the item to the new list
    newList[i+inserted] = self.list[i];
    self.lookup[self.list[i].key] = i+inserted;
  }
  // Make sure its inserted if its the last one
  if (!inserted) {
    self.lookup[key] = newList.length;
    newList[newList.length] = newItem;
  }
  // Point to the new list
  self.list = newList;

  self._listDeps.changed();
};

/** @method ReactiveList.prototype.remove
  * @param {string|number} key Key to remove
  */
ReactiveList.prototype.remove = function(key) {
  var self = this;
  var newList = [];
  for (var i = 0; i < self.list.length; i++) {
    if (self.list[i].key !== key) {
      // Push all others than key
      newList[newList.length] = self.list[i];
    }
  }
  delete self.lookup[key];
  self.list = newList;
  self._listDeps.changed();
};

/** @method ReactiveList.prototype.forEach
  * @param {function} f Callback `funciton(value, key)`
  * @param {boolean} [noneReactive=false] Set true if want to disable reactivity
  */
ReactiveList.prototype.forEach = function(f, noneReactive) {
  var self = this;
  if (!noneReactive) self._listDeps.depend();
  for (var i = 0; i < self.list.length; i++) {
    f(self.list[i].value, self.list[i].key);
  }
};

/** @method ReactiveList.prototype.fetch Returns list as array
  * @param {boolean} [noneReactive=false] Set true if want to disable reactivity
  * @reactive This can be disabled
  * @returns {array} List of items
  */
ReactiveList.prototype.fetch = function(noneReactive) {
  var self = this;
  var result = [];
  self.forEach(function(value, key) {
    result.push(value);
  }, noneReactive);
  return result;
};