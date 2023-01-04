import React from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quizes/:quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
