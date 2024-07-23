import { SourceDocumentModel } from "./source-document.model";

export class AnswerModel {
    content: string;
    sourceDocuments: Array<SourceDocumentModel>;
}