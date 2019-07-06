import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface FileAttributes extends _Tag {
  readonly type: TagType.FileAttributes;
  readonly useNetwork: boolean;
  readonly useRelativeUrls: boolean;
  readonly noCrossDomainCaching: boolean;
  readonly useAs3: boolean;
  readonly hasMetadata: boolean;
  readonly useGpu: boolean;
  readonly useDirectBlit: boolean;
}

export const $FileAttributes: DocumentIoType<FileAttributes> = new DocumentType<FileAttributes>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.FileAttributes as TagType.FileAttributes})},
    useNetwork: {type: $Boolean},
    useRelativeUrls: {type: $Boolean},
    noCrossDomainCaching: {type: $Boolean},
    useAs3: {type: $Boolean},
    hasMetadata: {type: $Boolean},
    useGpu: {type: $Boolean},
    useDirectBlit: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
