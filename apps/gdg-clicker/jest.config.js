module.exports = {
  name: 'gdg-clicker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gdg-clicker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
