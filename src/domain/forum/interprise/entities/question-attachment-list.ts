import { WatchedList } from "@/core/entities/watched-list";
import { QuestionAttachment } from "./question-attachment";

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return b.attachmentId === b.attachmentId;
  }
}
