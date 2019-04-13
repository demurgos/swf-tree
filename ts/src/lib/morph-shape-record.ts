import { TaggedUnionType } from "kryo/types/tagged-union";
import * as shapeRecords from "./shape-records";

export type MorphShapeRecord =
  shapeRecords.MorphEdge
  | shapeRecords.MorphStyleChange;

export const $MorphShapeRecord: TaggedUnionType<MorphShapeRecord> = new TaggedUnionType<MorphShapeRecord>({
  variants: [
    shapeRecords.$MorphEdge,
    shapeRecords.$MorphStyleChange,
  ],
  tag: "type",
});
