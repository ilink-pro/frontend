import { FilesBucket } from '../interfaces'

export interface FilesBucketsRegistryPort {
  get(name: string): FilesBucket | undefined
}
