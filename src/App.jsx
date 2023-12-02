import Header from "./components/Header.jsx";
import Inputs from "./components/Inputs.jsx";
import {useState} from "react";
import Table from "./components/Table.jsx";

function App() {

  const [input , setInput] = useState({
    initialInvestment: 0,
    annualInvestment: 500,
    expectedReturn: 3,
    duration: 10
  });

  function handleChange(input, newValue) {
    setInput(prevUserInput => {
      return {
        ...prevUserInput,
        [input]: +newValue,
      }
    });
  }




  return (
    <>
    <Header />
      <Inputs onChange={handleChange} input={input}/>
      <Table input={input} initialInvestment={input.initialInvestment} />
    </>
  )
}

export default App
