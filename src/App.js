import { useState } from "react";
function App() {
  const [pepperoniChecked, setPepperoniChecked] = useState(false)
  function togglePepperoni(e) {
    setPepperoniChecked(e.target.checked);
  }
  return (
    <div>
        <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniChecked}
        aria-checked={pepperoniChecked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniChecked ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  )
}

export default App;
