import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";

// react bmi calculator - 15mins

// develop a functional hooks component with react form.

// it should have 3 i/p text box (name, weight(with placeholder as 'in kgs') and
// height(with placeholder as 'in cms')), a submit button and reload button.

// on clicking the submit btn, calculate the bmi using the formula, [weight (kg) /
// height (cm) / height (cm)] x 10,000

// on clicking the reload, it should clear the data from name, weight and height textbox.

// the calculated bmi should be displayed below the reload button with text "Hi <name>,
// Your BMI is: <bmi value>"

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
