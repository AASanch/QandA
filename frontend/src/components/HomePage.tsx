import React from "react";
import { QuestionList } from "./QuestionList";
import { QuestionData, getUnansweredQuestions } from "../data/QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };

    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log("TODO - move to the AskPage");
  };

  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button onClick={handleAskQuestionClick}>Ask a question</button>
      </div>
      {questionsLoading && <div>Loading...</div>}
      <QuestionList data={questions} />
    </Page>
  );
};
