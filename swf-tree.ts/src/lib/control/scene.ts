import { CaseStyle, DocumentType, IntegerType, Ucs2StringType } from "kryo";

export interface Scene {
  offset: number;
  name: string;
}

export namespace Scene {
  export interface Json {
    offset: number;
    name: string;
  }

  export const type: DocumentType<Scene> = new DocumentType<Scene>({
    properties: {
      offset: {type: new IntegerType()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
