import { DocumentType } from '../enums'

export class IdDocument {
  #id!: string

  #type!: DocumentType

  #frontSideId!: string

  #backSideId!: string

  constructor(id: string, type: DocumentType, frontSideId: string, backSideId: string) {
    this.#id = id
    this.#type = type
    this.#frontSideId = frontSideId
    this.#backSideId = backSideId
  }

  get id() {
    return this.#id
  }

  get type() {
    return this.#type
  }

  get frontSideId() {
    return this.#frontSideId
  }

  get backSideId() {
    return this.#backSideId
  }

  get properties() {
    return {
      id: this.#id,
      type: this.#type,
      frontSideId: this.#frontSideId,
      backSideId: this.#backSideId,
    }
  }
}
