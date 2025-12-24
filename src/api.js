const API_BASE = "http://localhost:4000/api";

export const getExpenses = async () => {
  const res = await fetch(`${API_BASE}/expenses`);
  return res.json();
};

export const addExpense = async (title, amount) => {
  const res = await fetch(`${API_BASE}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, amount })
  });
  return res.json();
};

export const deleteExpense = async (id) => {
  await fetch(`${API_BASE}/expenses/${id}`, {
    method: "DELETE"
  });
};
