import React from "react";
import { QuestionData } from "../data/QuestionsData";
import { Question } from "./Question";

interface QuestionListProps {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: QuestionListProps) => (
  <ul>
    {data.map((question) => (
      <li key={question.questionId}>
        {renderItem ? renderItem(question) : <Question data={question} />}
      </li>
    ))}
  </ul>
);
