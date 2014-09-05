Package.describe({
  name: 'cfs:reactive-list',
  version: '0.0.0',
  summary: "ReactiveList provides a small, fast queue/list built for Power-Queue"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('deps', ['client', 'server']);

  api.export && api.export('ReactiveList');
  api.add_files(['reactive-list.js'], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('cfs:reactive-list');
  api.use('test-helpers', 'server');
  api.use('tinytest');

  api.add_files('tests.js');
});
