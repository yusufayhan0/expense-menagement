//[--] we prevent extra import on other pages
import ExpensesCreate from "./Expenses/Create";
import ExpensesList from "./Expenses/List";
import ExpensesEdit from "./Expenses/Edit";
import IncomeCreate from "./Income/Create";
import IncomeList from "./Income/List";
import IncomeEdit from "./Income/Edit";
import NotFound from "./NotFound";
import DashBoard from "./DashBoard";

export default {
  Expenses: {
    Create: ExpensesCreate,
    List: ExpensesList,
    Edit: ExpensesEdit,
  },
  Income: {
    Create: IncomeCreate,
    List: IncomeList,
    Edit: IncomeEdit,
  },
  NotFound,
  DashBoard,
};
