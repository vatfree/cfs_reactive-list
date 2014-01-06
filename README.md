Reactive List [![Build Status](https://travis-ci.org/CollectionFS/Meteor-reactive-list.png?branch=master)](https://travis-ci.org/CollectionFS/Meteor-reactive-list)
=========

ReactiveList:
* Simple
* Fast
* Sortable
* etc.

And... It's powered by Meteor's reactive sugar :)

Kind regards Eric(@aldeed) and Morten(@raix)

Happy coding!!

#API
[API Documentation](api.md)

From the docs:
#### <a name="ReactiveList"></a>new ReactiveList([options], sort)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
```
@ReactiveList Keeps a reactive list of key+value items
```
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

#Contribute
[API Complete Documentation](internal.api.md)
Update docs, `npm install docmeteor`
```bash
$ docmeteor
```