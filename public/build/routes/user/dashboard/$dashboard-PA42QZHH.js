import {
  chart_default
} from "/build/_shared/chunk-6HKAFIBQ.js";
import "/build/_shared/chunk-VZUCI7BY.js";
import {
  home_default
} from "/build/_shared/chunk-YOJECPD4.js";
import "/build/_shared/chunk-EWUXHAI4.js";
import {
  card,
  transItems
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  useLoaderData
} from "/build/_shared/chunk-D3KJI62M.js";
import {
  breadcrumb_default,
  button_default,
  card_default,
  col_default,
  date_picker_default,
  row_default,
  select_default,
  tooltip_default,
  typography_default
} from "/build/_shared/chunk-V6IPQRBL.js";
import "/build/_shared/chunk-AWUHEWV2.js";
import "/build/_shared/chunk-32CWOV4L.js";
import "/build/_shared/chunk-AWTQJBQZ.js";
import {
  chart2_default
} from "/build/_shared/chunk-L6IHUOOX.js";
import "/build/_shared/chunk-A2XFLHA7.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-R4SZSUKO.js";
import {
  __toESM
} from "/build/_shared/chunk-O7YBTOWT.js";

// app/routes/user/dashboard/$dashboard.jsx
var import_react = __toESM(require_react());

// app/assets/expense.png
var expense_default = "/build/_assets/expense-T43H5IGW.png";

// app/assets/TotalExpense.png
var TotalExpense_default = "/build/_assets/TotalExpense-45VAN2EI.png";

// app/routes/user/dashboard/$dashboard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
var items = [
  {
    value: "Maintenance_and_repairs",
    label: "Maintenance_and_repairs"
  },
  {
    value: "Telephone",
    label: "Telephone"
  },
  {
    value: "Printing",
    label: "Printing"
  },
  {
    value: "Salaries_and_other_compensation",
    label: "Salaries_and_other_compensation"
  },
  {
    value: "Travel",
    label: "Travel"
  },
  {
    value: "Business_meals",
    label: "Business_meals"
  },
  {
    value: "Medical_expenses",
    label: "Medical_expenses"
  },
  {
    value: "Licenses_and_permits",
    label: "Licenses_and_permits"
  },
  {
    value: "Client_gifts",
    label: "Client_gifts"
  },
  {
    value: "Employee_loans",
    label: "Employee_loans"
  }
];
var Dashboard = () => {
  const loaderData = useLoaderData();
  const [expenseList, setExpenseList] = (0, import_react.useState)([]);
  const [selectedDate, setSelectedDate] = (0, import_react.useState)("");
  const [selectedCategory, setSelectedcategory] = (0, import_react.useState)();
  const [filterData, setFilterData] = (0, import_react.useState)([]);
  const amounts = expenseList.map((transaction) => transaction.amount);
  const totalExpense = amounts.filter((item) => item > 0).reduce((acc, item) => acc += item, 0);
  const expenseCount = () => {
    let count = 0;
    for (let i = 0; i < expenseList.length; i++) {
      count++;
    }
    return count;
  };
  (0, import_react.useEffect)(() => {
    var _a;
    const data = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.expenses;
    setExpenseList(data);
  }, [loaderData]);
  const onChangeDate = (date, dateString) => {
    setSelectedDate(dateString);
  };
  const handleChangeSelect = (value) => {
    setSelectedcategory(value);
  };
  const handleData = () => {
    const data = expenseList == null ? void 0 : expenseList.filter((item) => {
      const month = `${new Date(item.createdAt).getFullYear()}-${new Date(item.createdAt).getMonth() + 1}`;
      return (item == null ? void 0 : item.category) === selectedCategory && month == selectedDate;
    });
    setFilterData(data);
  };
  const handleReset = () => {
    setSelectedDate("");
    setSelectedcategory();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, { userId: loaderData, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      breadcrumb_default,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, false, {
            fileName: "app/routes/user/dashboard/$dashboard.jsx",
            lineNumber: 127,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/user/dashboard/$dashboard.jsx",
            lineNumber: 128,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/dashboard/$dashboard.jsx",
        lineNumber: 123,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Title,
        {
          level: 3,
          style: { margin: "0 0 20px 0px" },
          children: "User Dashboard"
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/dashboard/$dashboard.jsx",
          lineNumber: 131,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        row_default,
        {
          gutter: [16, 16],
          className: "row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                md: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { title: "Total amount of all expenses.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { className: "dashboard-expense", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  row_default,
                  {
                    align: "middle",
                    justify: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, children: "Total Expense" }, void 0, false, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 149,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, children: [
                          "\u20B9 ",
                          totalExpense
                        ] }, void 0, true, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 150,
                          columnNumber: 12
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 148,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { style: { display: "flex" }, children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "img",
                          {
                            src: expense_default,
                            width: 70,
                            alt: ""
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 154,
                            columnNumber: 12
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 145,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 144,
                  columnNumber: 9
                }, this) }, void 0, false, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 143,
                  columnNumber: 8
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 139,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                md: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tooltip_default, { title: "Total number of expenses.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { className: "dashboard-expense", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  row_default,
                  {
                    align: "middle",
                    justify: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 5, children: "Number of Expenses" }, void 0, false, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 175,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { level: 2, children: expenseCount() }, void 0, false, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 176,
                          columnNumber: 12
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "img",
                        {
                          src: TotalExpense_default,
                          width: 70,
                          alt: ""
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 179,
                          columnNumber: 12
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 171,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 170,
                  columnNumber: 9
                }, this) }, void 0, false, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 169,
                  columnNumber: 8
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 165,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                lg: 10,
                xl: 10,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: card, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Title,
                    {
                      level: 4,
                      style: { marginTop: "10px" },
                      children: "Category Summary"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 194,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chart_default, { expenseList }, void 0, false, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 200,
                    columnNumber: 10
                  }, this) }, void 0, false, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 199,
                    columnNumber: 9
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 193,
                  columnNumber: 8
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 189,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                lg: 14,
                xl: 14,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { style: card, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    Title,
                    {
                      level: 4,
                      style: { marginTop: "10px" },
                      children: "Expense Summary"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 209,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    row_default,
                    {
                      align: "middle",
                      gutter: [16, 16],
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          col_default,
                          {
                            xs: 24,
                            sm: 7,
                            md: 5,
                            xl: 6,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              date_picker_default,
                              {
                                placeholder: "Select Month",
                                onChange: onChangeDate,
                                picker: "month"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 217,
                            columnNumber: 10
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          col_default,
                          {
                            xs: 24,
                            md: 7,
                            lg: 7,
                            xl: 9,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              select_default,
                              {
                                placeholder: "Select",
                                style: {
                                  width: 190
                                },
                                onChange: handleChangeSelect,
                                options: items,
                                value: selectedCategory
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                lineNumber: 233,
                                columnNumber: 11
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 228,
                            columnNumber: 10
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          col_default,
                          {
                            xs: 24,
                            md: 10,
                            xl: 8,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                button_default,
                                {
                                  type: "primary",
                                  htmlType: "apply",
                                  onClick: handleData,
                                  children: "Apply"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                  lineNumber: 247,
                                  columnNumber: 11
                                },
                                this
                              ),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                button_default,
                                {
                                  type: "primary",
                                  onClick: handleReset,
                                  htmlType: "reset",
                                  children: "Reset"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                  lineNumber: 253,
                                  columnNumber: 11
                                },
                                this
                              )
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 243,
                            columnNumber: 10
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 214,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginTop: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chart2_default, { expenseList: filterData }, void 0, false, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 262,
                    columnNumber: 10
                  }, this) }, void 0, false, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 261,
                    columnNumber: 9
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 208,
                  columnNumber: 8
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 204,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/user/dashboard/$dashboard.jsx",
          lineNumber: 136,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/user/dashboard/$dashboard.jsx",
      lineNumber: 130,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/dashboard/$dashboard.jsx",
    lineNumber: 122,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/user/dashboard/$dashboard.jsx",
    lineNumber: 121,
    columnNumber: 3
  }, this);
};
var dashboard_default = Dashboard;
export {
  dashboard_default as default
};
//# sourceMappingURL=/build/routes/user/dashboard/$dashboard-PA42QZHH.js.map
