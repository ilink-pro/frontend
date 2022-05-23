import { DocumentType } from '../enums'

export class IdDocument {
  #id!: string

  #type!: DocumentType

  #frontSide!: Buffer

  #backSide!: Buffer

  constructor(id: string, type: DocumentType, frontSide: Buffer, backSide: Buffer) {
    this.#id = id
    this.#type = type
    this.#frontSide = frontSide
    this.#backSide = backSide
  }

  get id() {
    return this.#id
  }

  get type() {
    return this.#type
  }

  get frontSide() {
    return this.#frontSide
  }

  get backSide() {
    return this.#backSide
  }

  get properties() {
    return {
      id: this.#id,
      type: this.#type,
      frontSide: this.#frontSide,
      backSide: this.#backSide,
    }
  }
}
