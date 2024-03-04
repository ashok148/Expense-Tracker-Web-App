const Expense = require("../models/ExpenseModel");
const User = require("../models/UserModel");

//Add expense
export const createExpense = async (title, category, amount, createdAt, userId) => {
    let existingUser;
    try {
      existingUser = await User.findById(userId);
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
        throw new Error ({ message: "Unable to find User By this Id!" });
    }
    const expense = new Expense({
        title,
        category,
        amount,
        createdAt,
        userId
    });
    try{
      await expense.save();
      existingUser.expenses.push(expense);
      await existingUser.save();
    } catch (err) {
      console.log(err);
      throw new Error ({ message: err });
    }
    return ({message:"expense added..", expense});
};
  

//get all expenses of a user by userId
export const getExpenseByUserId = async (user_id) => {
    let userExpenses;
    try {
        userExpenses = await User.findById(user_id).populate("expenses");
    } catch (err) {
        console.log(err);
    }
    if (!userExpenses) {
        throw new Error ({ message: "No expense added yet!" });
    }
    const user = {
        userId: userExpenses._id,
        name: {
            firstname: userExpenses.firstname, lastname: userExpenses.lastname
        },
        email: userExpenses.email,
        expenses: userExpenses.expenses
    }
    return ({ status: "success", user: user });
};

// update expense detail
export const updateExpense = async (title, category, amount, createdAt, expenseId) => {
    let expense;
    try {
        expense = await Expense.findByIdAndUpdate(expenseId, {
            title,
            category,
            amount,
            createdAt
        });
        await expense.save();
    } catch(err) {
        console.log(err);
    }
    if(!expense){     
    throw new Error ({message:"Unable to update details!" });
    }
    return ({status: "success", message:"details update successfully.", data: expense });
};

//deleteExpense
export const deleteExpense = async (expense_id) => {
    let expense;
    try {
        expense = await Expense.findByIdAndRemove(expense_id).populate("userId");
        await expense.userId.expenses.pull(expense);
        await expense.userId.save();
    } catch (err) {
        console.log(err);
    }
    if (!expense) {
        throw new Error ({ message: "Unable To Delete" });
    }
    return ({ message: "Item deleted successfully.." });
};

