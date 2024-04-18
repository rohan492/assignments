import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from "./components/Card/Card.jsx";
import Layout from "./components/Layout/Layout.jsx";
import CreateCard from "./components/CreateCard/CreateCard.jsx";
import NoPage from "./components/NoPage/NoPage.jsx";

import "./App.css";

function App() {
  const [cardInfo, setCardInfo] = useState([
    {
      name: "Rohan Mathur",
      description:
        "React Dev @ US Based AI Startup | Ex AI-ML Intern at MeITy, Delhi",
      interests: ["React", "Open Source", "Cricket"],
      socials: [
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/therohanmathur",
        },
        {
          name: "Twitter",
          link: "https://www.twitter.com/therohanmathur",
        },
      ],
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card cardInfo={cardInfo} />} />
          <Route path="/create" element={<CreateCard setCardInfo={setCardInfo} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
