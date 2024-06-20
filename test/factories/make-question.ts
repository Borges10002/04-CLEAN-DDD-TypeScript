import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/interprise/entities/question";
import { Slug } from "@/domain/forum/interprise/entities/value-objects/slug";
import { faker } from "@faker-js/faker";

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      authorId: new UniqueEntityID(),
      title: faker.lorem.sentence(),
      slug: Slug.create("Example question"),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  );

  return question;
}
