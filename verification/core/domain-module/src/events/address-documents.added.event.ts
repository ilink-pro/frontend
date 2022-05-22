import { AddressDocument } from '../value-objects'

export class AddressDocumentsAdded {
  constructor(public readonly addressDocuments: Array<AddressDocument>) {}
}
