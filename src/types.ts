const typeDefs = `
  type Cabang {
    id: Int!
    nama: String!
  }

  type Mutation {
    addCabang (cabang: Cabang): Int!
  }
`;