import * as migration_20241205_040146_initial from './20241205_040146_initial'

export const migrations = [
  {
    up: migration_20241205_040146_initial.up,
    down: migration_20241205_040146_initial.down,
    name: '20241205_040146_initial',
  },
]
