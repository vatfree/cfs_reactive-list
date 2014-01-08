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
###Object chain
```
                  first                               last
 undefined -       obj       -       obj       -       obj       - undefined
            (prev value next) (prev value next) (prev value next)
```

> ```ReactiveList = function(options) { ...``` [reactive-list.js:45](reactive-list.js#L45)

-

#### <a name="ReactiveList.prototype.length"></a>*reactivelist*.length()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __length__ is defined in `prototype` of `ReactiveList`*

__Returns__  *{number}*  __(is reactive)__
Length of the reactive list

> ```ReactiveList.prototype.length = function() { ...``` [reactive-list.js:69](reactive-list.js#L69)

-

#### <a name="ReactiveList.prototype.reset"></a>*reactivelist*.reset()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __reset__ is defined in `prototype` of `ReactiveList`*

> ```ReactiveList.prototype.reset = function() { ...``` [reactive-list.js:79](reactive-list.js#L79)

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

> ```ReactiveList.prototype.update = function(key, value) { ...``` [reactive-list.js:98](reactive-list.js#L98)

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

> ```ReactiveList.prototype.insert = function(key, value) { ...``` [reactive-list.js:114](reactive-list.js#L114)

-

#### <a name="ReactiveList.prototype.remove"></a>*reactivelist*.remove(key)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __remove__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __key__ *{string|number}*  
Key to remove

-

> ```ReactiveList.prototype.remove = function(key) { ...``` [reactive-list.js:176](reactive-list.js#L176)

-

#### <a name="ReactiveList.prototype.getLastItem"></a>*reactivelist*.getLastItem()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __getLastItem__ is defined in `prototype` of `ReactiveList`*

__Returns__  *{any}*
Pops last item from the list - removes the item from the list

> ```ReactiveList.prototype.getLastItem = function(first) { ...``` [reactive-list.js:216](reactive-list.js#L216)

-

#### <a name="ReactiveList.prototype.getFirstItem"></a>*reactivelist*.getFirstItem()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __getFirstItem__ is defined in `prototype` of `ReactiveList`*

__Returns__  *{any}*
Pops first item from the list - removes the item from the list

> ```ReactiveList.prototype.getFirstItem = function() { ...``` [reactive-list.js:234](reactive-list.js#L234)

-

#### <a name="ReactiveList.prototype.forEach"></a>*reactivelist*.forEach(f, [noneReactive], [reverse])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __forEach__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __f__ *{function}*  
Callback `funciton(value, key)`
* __noneReactive__ *{boolean}*    (Optional = false)
Set true if want to disable reactivity
* __reverse__ *{boolean}*    (Optional = false)
Set true to reverse iteration `forEachReverse`

-

> ```ReactiveList.prototype.forEach = function(f, noneReactive, reverse) { ...``` [reactive-list.js:244](reactive-list.js#L244)

-

#### <a name="ReactiveList.prototype.forEachReverse"></a>*reactivelist*.forEachReverse(f, [noneReactive])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __forEachReverse__ is defined in `prototype` of `ReactiveList`*

__Arguments__

* __f__ *{function}*  
Callback `funciton(value, key)`
* __noneReactive__ *{boolean}*    (Optional = false)
Set true if want to disable reactivity

-

> ```ReactiveList.prototype.forEachReverse = function(f, noneReactive) { ...``` [reactive-list.js:267](reactive-list.js#L267)

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

> ```ReactiveList.prototype.fetch = function(noneReactive) { ...``` [reactive-list.js:277](reactive-list.js#L277)

-
