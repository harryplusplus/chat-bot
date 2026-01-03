import util from 'node:util'

export function inspect(x: unknown): string {
  return util.inspect(x, { depth: 5 })
}
