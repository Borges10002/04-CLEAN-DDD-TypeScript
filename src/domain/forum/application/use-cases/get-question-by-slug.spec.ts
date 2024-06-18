import { expect } from "vitest";

import { InMemoryQuestionsRepository } from "test/respositories/in-memory-questions-repository";
import { Question } from "../../interprise/entities/question";
import { Slug } from "../../interprise/entities/value-objects/slug";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to get a question by slug", async () => {
    const newQuestion = Question.create({
      authorId: new UniqueEntityID(),
      title: "Example question",
      slug: Slug.create("Example question"),
      content: "Example question",
    });

    await inMemoryQuestionsRepository.create(newQuestion);

    const { question } = await sut.execute({ slug: "Example question" });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title);
  });
});
