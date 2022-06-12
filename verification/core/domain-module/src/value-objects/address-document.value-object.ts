export class AddressDocument {
  #id!: string

  #fileId!: string

  constructor(id: string, fileId: string) {
    this.#id = id
    this.#fileId = fileId
  }

  get id() {
    return this.#id
  }

  get fileId() {
    return this.#fileId
  }

  get properties() {
    return {
      id: this.#id,
      fileId: this.#fileId,
    }
  }
}
