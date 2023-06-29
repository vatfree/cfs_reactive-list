Package.describe({
  name: 'cfs:reactive-list',
  version: '0.0.10',
  summary: 'ReactiveList provides a small, fast queue/list built for Power-Queue',
  git: 'https://github.com/vatfree/cfs_reactive-list.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['1.0','2.0']);

  api.use('deps', ['client', 'server']);

  api.export('ReactiveList');
  api.addFiles(['reactive-list.js'], ['client', 'server']);
});

Package.onTest(function (api) {
  api.use('cfs:reactive-list');
  api.use('test-helpers', 'server');
  api.use('tinytest');

  api.addFiles('tests.js');
});
