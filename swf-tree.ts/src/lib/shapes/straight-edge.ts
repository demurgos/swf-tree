import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Int32} from "semantic-types";
import {ShapeRecordType} from "./shape-record-type";

export interface StraightEdge {
  type: ShapeRecordType.StraightEdge;
  deltaX: Int32;
  deltaY: Int32;
}

export namespace StraightEdge {
  export interface Json {
    type: "straight-edge";
    "delta-x": number;
    "delta-y": number;
  }

  export const type: DocumentType<StraightEdge> = new DocumentType<StraightEdge>({
    properties: {
      type: {type: new LiteralType({type: ShapeRecordType.type, value: ShapeRecordType.StyleChange})},
      deltaX: {type: new Int32Type()},
      deltay: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
