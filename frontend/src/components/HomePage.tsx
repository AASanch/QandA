import React from "react";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions } from "../data/QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";

export const HomePage = () => (
  <Page>
    <div>
      <PageTitle>Unanswered Questions</PageTitle>
      <button>Ask a question</button>
    </div>
    <QuestionList data={getUnansweredQuestions()} />
  </Page>
);