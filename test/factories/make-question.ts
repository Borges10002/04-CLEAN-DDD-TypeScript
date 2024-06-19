import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/interprise/entities/question";
import { Slug } from "@/domain/forum/interprise/entities/value-objects/slug";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: "Example question",
    slug: Slug.create("Example question"),
    content: "Example question",
    ...override,
  });

  return question;
}
