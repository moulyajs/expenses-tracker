import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses =[
    {
      id: `e1`,
      title:`Toilet Paper`,
      amount:94.12,
      date:new Date(2020,7,14),
    },
    { id:`e2`,title:`New TV`, amount:799 ,date:new Date (2021,3,16)},
    {
      id: `e3`,
      title:`Car insurance`,
      amount: 200,
      date:new Date(2022,4,9),
    },
    {
      id:`e4`,
      title:`New Desk`,
      amount:450,
      date:new Date(2022,6,8),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      </div>
  );

export default App;

