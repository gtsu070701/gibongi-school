import type { ComponentType } from "react";
import type { QuizQuestion } from "@/components/quiz/QuizRunner";

export type ChapterMeta = {
  slug: string;
  title: string;
  order: number;
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  placeholder: boolean;
  chapters: ChapterMeta[];
};

export type Subject = {
  slug: string;
  name: string;
  tagline: string;
  courses: Course[];
};

export type ChapterEntry = {
  Component: ComponentType;
  quiz: QuizQuestion[];
};

export type ExamQuestion = QuizQuestion;

export type { QuizQuestion };
