import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint32} from "semantic-types";

export interface Vector2D {
  x: Sint32;
  y: Sint32;
}

export namespace Vector2D {
  export interface Json {
    x: number;
    y: number;
  }

  export const type: DocumentType<Vector2D> = new DocumentType<Vector2D>({
    properties: {
      x: {type: new Int32Type()},
      y: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}