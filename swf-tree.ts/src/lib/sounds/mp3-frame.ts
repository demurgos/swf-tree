import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Mp3ChannelMode} from "./mp3-channel-mode";
import {Mp3Layer} from "./mp3-layer";
import {MpegVersion} from "./mpeg-version";

export interface Mp3Frame {
  mpegVersion: MpegVersion;
  layer: Mp3Layer;
  bitrate: number; // TODO: Union
  samplingRate: number; // TODO: enum or union
  useFramePadding: boolean;
  channelMode: Mp3ChannelMode;
  isCopyrighted: boolean;
  isOriginal: boolean;
  emphasis: "none" | "50/15" | "CcitJ17";
  sampleData: Buffer;
}

export namespace Mp3Frame {
  export interface Json {
    "seek-samples": number;
    "mp3-frames": any[];
  }

  export const type: DocumentType<Mp3Frame> = new DocumentType<Mp3Frame>({
    properties: {
      seekSamples: {type: new Int32Type()},
      mp3Frames: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
