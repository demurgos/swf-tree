import { TaggedUnionType } from "kryo/types/tagged-union";
import * as fillStyles from "./fill-styles/index";

export type FillStyle =
  fillStyles.Bitmap
  | fillStyles.FocalGradient
  | fillStyles.LinearGradient
  | fillStyles.RadialGradient
  | fillStyles.Solid;

export const $FillStyle: TaggedUnionType<FillStyle> = new TaggedUnionType<FillStyle>({
  variants: [
    fillStyles.$Bitmap,
    fillStyles.$FocalGradient,
    fillStyles.$LinearGradient,
    fillStyles.$RadialGradient,
    fillStyles.$Solid,
  ],
  tag: "type",
});
