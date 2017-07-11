import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint32} from "semantic-types";

export interface AdpcmStereoPacket {
  initialSampleLeft: Sint16;
  initialIndexLeft: Uint32;
  initialSampleRight: Sint16;
  initialIndexRight: Uint32;
  adpcmCodeData: Buffer;
}

export namespace AdpcmStereoPacket {
  export interface Json {
    "sample-count": number;
    "mp3-sound-data": any;
  }

  export const type: DocumentType<AdpcmStereoPacket> = new DocumentType<AdpcmStereoPacket>({
    properties: {
      sampleCount: {type: new Int32Type()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
