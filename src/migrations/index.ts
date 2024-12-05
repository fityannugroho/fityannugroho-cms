import * as migration_20241205_131420_init from './20241205_131420_init';

export const migrations = [
  {
    up: migration_20241205_131420_init.up,
    down: migration_20241205_131420_init.down,
    name: '20241205_131420_init'
  },
];
