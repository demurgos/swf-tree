import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {UintSize} from "semantic-types";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface WaitForFrame2 extends ActionBase {
  action: ActionType.WaitForFrame2;
  skipCount: UintSize;
}

export namespace WaitForFrame2 {
  export interface Json {
    action: "wait-for-frame2";
    skipCount: number;
  }

  export const type: DocumentType<WaitForFrame2> = new DocumentType<WaitForFrame2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.WaitForFrame2})},
      skipCount: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
