import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  QuestionAttachment,
  QuestionAttachmentProps,
} from "@/domain/forum/interprise/entities/question-attachment";

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const questionAttachment = QuestionAttachment.create(
    {
      questionId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  );

  return questionAttachment;
}
