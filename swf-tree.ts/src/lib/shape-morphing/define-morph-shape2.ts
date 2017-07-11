import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {Shape} from "../shapes/shape";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {MorphFillStyle} from "./morph-fill-style";
import {MorphLineStyle} from "./morph-line-style";

export interface DefineMorphShape2 extends SwfTagBase {
  type: SwfTagType.DefineMorphShape2;
  characterId: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  startEdgeBounds: Rect;
  endEdgeBounds: Rect;
  usesNonScalingStrokes: boolean;
  usesScalingStrokes: boolean;
  offset: Uint32;
  morphFillStyles: MorphFillStyle[];
  morphLineStyles: MorphLineStyle[];
  startEdges: Shape;
  endEdges: Shape;
}

export namespace DefineMorphShape2 {
  export interface Json {
    type: "define-morph-shape2";
    "character-id": number;
    "start-bounds": Rect.Json;
    "end-bounds": Rect.Json;
    "uses-non-scaling-strokes": boolean;
    "uses-scaling-strokes": boolean;
    "offset": number;
    "morph-fill-styles": MorphFillStyle[];
    "morph-line-styles": MorphLineStyle[];
    "start-edges": Shape.Json;
    "end-edges": Shape.Json;
  }

  export const type: DocumentType<DefineMorphShape2> = new DocumentType<DefineMorphShape2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineMorphShape2})},
      characterId: {type: new Int32Type()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      usesNonScalingStrokes: {type: new BooleanType()},
      usesScalingStrokes: {type: new BooleanType()},
      offset: {type: new Int32Type()},
      morphFilleStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      morphLineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      startEdges: {type: Shape.type},
      endEdges: {type: Shape.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
