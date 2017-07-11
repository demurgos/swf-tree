import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Sfixed16p16, Sfixed8p8, Uint8} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {FilterId} from "./filter-id";

export interface BevelFilter {
  filterId: FilterId.Bevel;
  shadowColor: Rgba;
  highlightColor: Rgba;
  blurX: Sfixed16p16;
  blurY: Sfixed16p16;
  angle: Sfixed16p16;
  distance: Sfixed16p16;
  strength: Sfixed8p8;
  innerShadow: boolean;
  knockout: boolean;
  compositeSource: true;
  onTop: boolean;
  passes: Uint8;
}

export namespace BevelFilter {
  export interface Json {
    "filter-id": "bevel";
    "shadow-color": Rgba.Json;
    "highligh-color": Rgba.Json;
    "blur-x": number;
    "blur-y": number;
    "angle": number;
    "distance": number;
    "strength": number;
    "inner-shadow": boolean;
    "knockout": boolean;
    "composite-source": true;
    "on-top": boolean;
    "passes": number;
  }

  export const type: DocumentType<BevelFilter> = new DocumentType<BevelFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.Bevel})},
      shadowColor: {type: Rgba.type},
      highlightColor: {type: Rgba.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      angle: {type: new Float64Type()},
      distance: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      innerShadow: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      onTop: {type: new BooleanType()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
