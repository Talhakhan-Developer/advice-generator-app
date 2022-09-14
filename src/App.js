import dividerIcon from "./images/pattern-divider-mobile.svg";
import iconDice from "./images/icon-dice.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState("");
  const [id, setId] = useState("");

  const qetQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomQuote = Math.floor(Math.random() * data.length);
        let randomNum = Math.floor(Math.random() * 200);
        setQuotes(data[randomQuote]);
        setId(randomNum);
      });
  };

  useEffect(() => {
    qetQuote();
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="quote-title">
            <p>advice # {id}</p>
          </div>
          <div className="quote-description">
            <p>
              <blockquote>
                <q>{quotes.text}</q>
              </blockquote>
            </p>
            <img src={dividerIcon} alt="Icon" />
          </div>
          <div onClick={qetQuote} className="change-button">
            <img src={iconDice} alt="Icon" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
