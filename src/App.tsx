import { useState } from "react";

//components
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import categories from "../categories.ts";
const App = () => {
    //category
    const [selectCategory, setSelectCategory] = useState();
    //expense
    const [expenses, setExpenses] = useState([]);
    const visbleExpenses = selectCategory
        ? expenses.filter(item => item.category === selectCategory)
        : expenses;
    return (
        <div>
            <ExpenseForm
                onSubmit={newExpense =>
                    setExpenses([
                        ...expenses,
                        { ...newExpense, id: expenses.length + 1 }
                    ])
                }
            />
            <ExpenseFilter
                onSelectCategory={category => setSelectCategory(category)}
            />
            <ExpenseList
                expenses={visbleExpenses}
                onDelete={id =>
                    setExpenses(expenses.filter(item => item.id !== id))
                }
            />
        </div>
    );
};

export default App;
