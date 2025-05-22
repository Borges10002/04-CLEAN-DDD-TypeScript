import { QuestionAttachment } from "../../interprise/entities/question-attachment";

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(answerId: string): Promise<QuestionAttachment[]>;
  deleteManyByQuestionId(questionId: string): Promise<void>;
}
