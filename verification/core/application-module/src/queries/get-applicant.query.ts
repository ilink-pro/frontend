interface Query {
  id?: string
  externalUserId?: string
}

export class GetApplicantQuery {
  constructor(public readonly query?: Query) {}
}
