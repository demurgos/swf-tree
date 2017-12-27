import {CaseStyle, DocumentType, IntegerType} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba8} from "./straight-s-rgba8";

export interface MorphColorStop {
  startRatio: Uint8;
  startColor: StraightSRgba8;
  endRatio: Uint8;
  endColor: StraightSRgba8;
}

export namespace MorphColorStop {
  export interface Json {
    startRatio: number;
    startColor: StraightSRgba8.Json;
    endRatio: number;
    endColor: StraightSRgba8.Json;
  }

  export const type: DocumentType<MorphColorStop> = new DocumentType<MorphColorStop>({
    properties: {
      startRatio: {type: new IntegerType()},
      startColor: {type: StraightSRgba8.type},
      endRatio: {type: new IntegerType()},
      endColor: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}