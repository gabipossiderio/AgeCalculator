import { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [yearInput, setYearInput] = useState(1900);
  const [info, setInfo] = useState<InfoProps>();

  interface InfoProps{
    name: string;
    year: number;
    age: number;
  }

  function Calcular(event: FormEvent){
    event.preventDefault();
    const ageCalc = (2023 - yearInput);
    setInfo({
      name: nameInput,
      year: yearInput,
      age: ageCalc,
    })
    setYearInput(0);
  }

  return (
    <div>
      <main className="container">
        <h1>Age Calculator</h1>
        <h2>find out your age</h2>
        <form className="form" onSubmit={Calcular}>
          <label>Seu nome:</label>
          <input
            className="input"
            type="text"
            id="name"
            required
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />

          <label>Ano de nascimento:</label>
          <input
            className="input"
            type="number"
            id="year"
            min="1900"
            step="1"
            required
            value={yearInput}
            onChange={(e) => setYearInput(Number(e.target.value))}
          />

          <div className="btn-wrapper">
            <input
            type="submit"
            value="Find Age"
            className="btn"
            />
          </div>
        </form>

        {info && info.age > 0 && info.name === nameInput && (
          <div className="result">
            {nameInput}, você tem {info.age} anos.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
