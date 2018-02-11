import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $BlendMode, BlendMode } from "../blend-mode";
import { $ColorTransformWithAlpha, ColorTransformWithAlpha } from "../color-transform-with-alpha";
import { $Filter, Filter } from "../filter";
import { $Matrix, Matrix } from "../matrix";

export interface ButtonRecord {
  stateHitTest: boolean;
  stateDown: boolean;
  stateOver: boolean;
  stateUp: boolean;
  characterId: Uint16;
  placeDepth: Uint16;
  placeMatrix: Matrix;
  colorTransform?: ColorTransformWithAlpha;
  filterList?: Filter[];
  blendMode?: BlendMode;
}

export const $ButtonRecord: DocumentIoType<ButtonRecord> = new DocumentType<ButtonRecord>({
  properties: {
    stateHitTest: {type: $Boolean},
    stateDown: {type: $Boolean},
    stateOver: {type: $Boolean},
    stateUp: {type: $Boolean},
    characterId: {type: $Uint16},
    placeDepth: {type: $Uint16},
    placeMatrix: {type: $Matrix},
    colorTransform: {type: $ColorTransformWithAlpha, optional: true},
    fontAdanceTable: {type: new ArrayType({itemType: $Filter, maxLength: Infinity}), optional: true},
    blendMode: {type: $BlendMode, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
