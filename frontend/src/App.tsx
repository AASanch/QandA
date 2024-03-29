/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { SearchPage } from "./components/SearchPage";
import { SignInPage } from "./components/SignInPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { QuestionPage } from "./components/QuestionPage";
import { Provider } from "react-redux";
import { configureStore } from "./data/Store";

const AskPage = React.lazy(() => import("./components/AskPage"));
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route
              path="ask"
              element={
                <React.Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: center;
                      `}
                    >
                      Loading...
                    </div>
                  }
                >
                  <AskPage />
                </React.Suspense>
              }
            />
            <Route path="signin" element={<SignInPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
