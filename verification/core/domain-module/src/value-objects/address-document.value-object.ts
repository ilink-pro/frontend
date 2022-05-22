export class AddressDocument {
  #id!: string

  #file!: Buffer

  constructor(id: string, file: Buffer) {
    this.#id = id
    this.#file = file
  }

  get id() {
    return this.#id
  }

  get file() {
    return this.#file
  }

  get properties() {
    return {
      id: this.#id,
      file: this.#file,
    }
  }
}
