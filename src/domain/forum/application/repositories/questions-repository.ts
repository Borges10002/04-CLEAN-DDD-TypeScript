import { Question } from "../../interprise/entities/question";

export interface QuestionsRepository {
  create(question: Question): Promise<void>;
}
