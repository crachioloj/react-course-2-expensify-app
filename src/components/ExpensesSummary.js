import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpensesTotal from "../selectors/expenses-total";
import selectExpense from "../selectors/expenses"

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedTotal = numeral(expenseTotal / 100).format("$0,0.00")

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedTotal}.
      </h1>
    </div>
)};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpense(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: getExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);