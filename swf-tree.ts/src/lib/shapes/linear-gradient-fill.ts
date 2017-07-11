import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Matrix} from "../basic-types/matrix";
import {Rgba} from "../basic-types/rgba";
import {Gradient} from "../gradients/gradient";
import {FillStyleType} from "./fill-style-type";

export interface LinearGradientFill {
  fillStypeType: FillStyleType.LinearGradient;
  gradientMatrix: Matrix;
  gradient: Gradient;
}

export namespace LinearGradientFill {
  export interface Json {
    "fill-style-type": "linear-gradient";
    "gradient-matrix": Matrix.Json;
    gradient: Gradient.Json;
  }

  export const type: DocumentType<LinearGradientFill> = new DocumentType<LinearGradientFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.LinearGradient})},
      gradientMatrix: {type: Rgba.type},
      gradient: {type: Gradient.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
