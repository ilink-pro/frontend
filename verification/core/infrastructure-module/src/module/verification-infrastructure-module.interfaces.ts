export interface VerificationTypeOrmDbOptions {
  port?: number
  host?: string
  database?: string
  username?: string
  password?: string
}

export interface VerificationTypeOrmOptions {
  db?: VerificationTypeOrmDbOptions
}
