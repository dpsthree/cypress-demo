module.exports = {
  name: 'nwa-clicker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nwa-clicker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
