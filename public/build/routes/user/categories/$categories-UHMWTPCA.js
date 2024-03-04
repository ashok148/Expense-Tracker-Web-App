import {
  home_default
} from "/build/_shared/chunk-H437XYH3.js";
import "/build/_shared/chunk-EWUXHAI4.js";
import {
  card,
  categoryItem,
  transItems
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
  alert_default,
  breadcrumb_default,
  button_default,
  col_default,
  input_default,
  row_default,
  typography_default
} from "/build/_shared/chunk-JRC4MRFV.js";
import "/build/_shared/chunk-DKJEZQLW.js";
import "/build/_shared/chunk-32CWOV4L.js";
import "/build/_shared/chunk-JR6OZEIM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-WQGPB5ZT.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/user/categories/$categories.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
var Categories = () => {
  var _a, _b, _c;
  const actionData = useActionData();
  const [formData, setFormData] = (0, import_react.useState)({
    title: "",
    category: "",
    amount: "",
    date: ""
  });
  const categories = [
    "Maintenance_and_repairs",
    "Telephone",
    "Printing",
    "Salaries_and_other_compensation",
    "Travel",
    "Business_meals",
    "Medical_expenses",
    "Licenses_and_permits",
    "Client_gifts",
    "Employee_loans"
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleValue = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      breadcrumb_default,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, false, {
            fileName: "app/routes/user/categories/$categories.jsx",
            lineNumber: 77,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { children: "Create New Expense" }, void 0, false, {
            fileName: "app/routes/user/categories/$categories.jsx",
            lineNumber: 78,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/categories/$categories.jsx",
        lineNumber: 73,
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
          children: "Create New Expense"
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/categories/$categories.jsx",
          lineNumber: 81,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        col_default,
        {
          sm: 24,
          xl: 12,
          style: { margin: "auto" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [16, 16], children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                col_default,
                {
                  xl: 24,
                  style: { width: "100%" },
                  children: ((_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    alert_default,
                    {
                      message: (_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message,
                      type: "success"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/user/categories/$categories.jsx",
                      lineNumber: 97,
                      columnNumber: 11
                    },
                    this
                  ) : null
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 93,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                col_default,
                {
                  xl: 24,
                  style: { width: "100%" },
                  children: ((_c = actionData == null ? void 0 : actionData.error) == null ? void 0 : _c.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    alert_default,
                    {
                      message: "Fail to add.!",
                      type: "error"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/user/categories/$categories.jsx",
                      lineNumber: 107,
                      columnNumber: 11
                    },
                    this
                  ) : null
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 103,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/routes/user/categories/$categories.jsx",
              lineNumber: 92,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { ...card, ...categoryItem }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  level: 4,
                  style: { textAlign: "center", margin: "0px 0px 15px 0px" },
                  children: "Register a new expense and save it."
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 115,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                row_default,
                {
                  gutter: [16, 16],
                  className: "row",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          input_default,
                          {
                            name: "title",
                            placeholder: "Title",
                            required: true,
                            size: "large",
                            value: formData.title,
                            onChange: handleChange
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 127,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "select",
                          {
                            name: "category",
                            value: formData.category,
                            onChange: handleChange,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                "option",
                                {
                                  hidden: true,
                                  value: true,
                                  children: "Select Category.."
                                },
                                "blankKey",
                                false,
                                {
                                  fileName: "app/routes/user/categories/$categories.jsx",
                                  lineNumber: 143,
                                  columnNumber: 13
                                },
                                this
                              ),
                              categories && categories.map((item) => {
                                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                  "option",
                                  {
                                    value: item,
                                    children: item
                                  },
                                  item,
                                  false,
                                  {
                                    fileName: "app/routes/user/categories/$categories.jsx",
                                    lineNumber: 152,
                                    columnNumber: 16
                                  },
                                  this
                                );
                              })
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 139,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 136,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          input_default,
                          {
                            required: true,
                            type: "number",
                            placeholder: "Add Expense Amount",
                            name: "amount",
                            value: formData.amount,
                            onChange: handleChange
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 164,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          input_default,
                          {
                            placeholder: "DD-MM-YYYY",
                            type: "date",
                            required: true,
                            name: "date",
                            value: formData.date,
                            onChange: handleChange
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 176,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          button_default,
                          {
                            onClick: handleValue,
                            type: "primary",
                            htmlType: "submit",
                            children: "Create Expense"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 188,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 121,
                  columnNumber: 10
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/user/categories/$categories.jsx",
                lineNumber: 120,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/user/categories/$categories.jsx",
              lineNumber: 114,
              columnNumber: 8
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/user/categories/$categories.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/user/categories/$categories.jsx",
        lineNumber: 87,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/categories/$categories.jsx",
      lineNumber: 80,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/categories/$categories.jsx",
    lineNumber: 72,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/user/categories/$categories.jsx",
    lineNumber: 71,
    columnNumber: 3
  }, this);
};
var categories_default = Categories;
export {
  categories_default as default
};
//# sourceMappingURL=/build/routes/user/categories/$categories-UHMWTPCA.js.map
