import { useEffect, useState } from "react";
import { getExpenses, addExpense, deleteExpense } from "./api";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleAdd = async () => {
    await addExpense(title, amount);
    setTitle("");
    setAmount("");
    loadExpenses();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Smart Expense Tracker</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {expenses.map(e => (
          <li key={e.id}>
            {e.title} - ₹{e.amount}
            <button onClick={() => deleteExpense(e.id).then(loadExpenses)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
