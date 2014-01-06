#ReactiveList
Provides a simple reactive list interface

#### <a name="ReactiveList"></a>new ReactiveList([options], sort)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-

__Arguments__

* __options__ *{object}*    (Optional)
* __sort__ *{function}*  
The sort algorithm to use

-
Example:
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
####Example of a sort algorithm
```js
var list = new ReactiveList({
   sort: function(a, b) {
     // a and b are type of { key, value }
     // here we sort by the key:
     return a.key < b.key;
   }
 });
```

> ```ReactiveList = function(options) { ...``` [reactive-list.js:38](reactive-list.js#L38)

-

#### <a name="ReactiveList.prototype.update"></a>*reactivelist*.update(key, value)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __update__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __key__ *{string|number}*  
Key to update
* __value__ *{any}*  
Update with this value

-

> ```ReactiveList.prototype.update = function(key, value) { ...``` [reactive-list.js:56](reactive-list.js#L56)

-

#### <a name="ReactiveList.prototype.insert"></a>*reactivelist*.insert(key, value)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __insert__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __key__ *{string|number}*  
Key to insert
* __value__ *{any}*  
Insert item with this value

-

> ```ReactiveList.prototype.insert = function(key, value) { ...``` [reactive-list.js:70](reactive-list.js#L70)

-

#### <a name="ReactiveList.prototype.remove"></a>*reactivelist*.remove(key)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __remove__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __key__ *{string|number}*  
Key to remove

-

> ```ReactiveList.prototype.remove = function(key) { ...``` [reactive-list.js:104](reactive-list.js#L104)

-

#### <a name="ReactiveList.prototype.forEach"></a>*reactivelist*.forEach(f, [noneReactive])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __forEach__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __f__ *{function}*  
Callback `funciton(value, key)`
* __noneReactive__ *{boolean}*    (Optional = false)
Set true if want to disable reactivity

-

> ```ReactiveList.prototype.forEach = function(f, noneReactive) { ...``` [reactive-list.js:122](reactive-list.js#L122)

-

#### <a name="ReactiveList.prototype.fetch"></a>*reactivelist*.fetch([noneReactive])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __fetch__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __noneReactive__ *{boolean}*    (Optional = false)
Set true if want to disable reactivity

-

__Returns__  *{array}*  __(is reactive)__
List of items

> ```ReactiveList.prototype.fetch = function(noneReactive) { ...``` [reactive-list.js:135](reactive-list.js#L135)

-
