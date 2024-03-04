import {
  require_main
} from "/build/_shared/chunk-FBA2TD4L.js";
import {
  home_default
} from "/build/_shared/chunk-VTJZMSD7.js";
import {
  js_cookie_default
} from "/build/_shared/chunk-EWUXHAI4.js";
import {
  transItems
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
  DeleteFilled_default,
  EditFilled_default,
  ExclamationCircleFilled_default,
  SearchOutlined_default,
  breadcrumb_default,
  button_default,
  col_default,
  input_default,
  modal_default,
  row_default,
  space_default,
  table_default,
  tag_default,
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

// app/routes/user/transaction/$transaction.jsx
var import_react = __toESM(require_react());
var import_react_highlight_words = __toESM(require_main());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
function Transaction() {
  var _a;
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [expenses, setExpenses] = (0, import_react.useState)([]);
  const [isModalVisible, setIsModalVisible] = (0, import_react.useState)(false);
  const [formData, setFormData] = (0, import_react.useState)({});
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
  const { confirm } = modal_default;
  const showDeleteConfirm = (id2, index) => {
    confirm({
      title: "Are you sure delete this Item?",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExclamationCircleFilled_default, {}, void 0, false, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 81,
        columnNumber: 10
      }, this),
      content: "This item is delete Permanently",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        actionData(id2);
        setExpenses((pre) => {
          return pre.filter((item) => item._id !== id2);
        });
      },
      onCancel() {
      }
    });
  };
  const showModalEdit = (id2) => {
    js_cookie_default.set("expense_id", id2);
    setExpenses(expenses);
    setIsModalVisible(true);
    const editData = expenses.filter((item) => {
      if (item._id === id2) {
        return item;
      }
    });
    setFormData({
      id: editData[0]._id,
      title: editData[0].title,
      category: editData[0].category,
      amount: editData[0].amount,
      createdAt: editData[0].createdAt
    });
  };
  const handleOk = () => {
    const id2 = js_cookie_default.get("expense_id");
    actionData(id2);
    setIsModalVisible(false);
    setExpenses((pre) => {
      return pre.map((item) => {
        if (item._id === formData.id) {
          return formData;
        } else {
          return item;
        }
      });
    });
    resetEditing();
  };
  const resetEditing = () => {
    setIsModalVisible(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const [searchText, setSearchText] = (0, import_react.useState)("");
  const [searchedColumn, setSearchedColumn] = (0, import_react.useState)("");
  const searchInput = (0, import_react.useRef)(null);
  const handleSearch = (selectedKeys, confirm2, dataIndex) => {
    confirm2();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm: confirm2,
      clearFilters,
      close
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        style: {
          padding: 8
        },
        onKeyDown: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            input_default,
            {
              ref: searchInput,
              placeholder: `Search ${dataIndex}`,
              value: selectedKeys[0],
              onChange: (e) => setSelectedKeys(e.target.value ? [e.target.value] : []),
              onPressEnter: () => handleSearch(selectedKeys, confirm2, dataIndex),
              style: {
                marginBottom: 8,
                display: "block"
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 186,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              button_default,
              {
                type: "primary",
                onClick: () => handleSearch(selectedKeys, confirm2, dataIndex),
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchOutlined_default, {}, void 0, false, {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 203,
                  columnNumber: 13
                }, this),
                size: "small",
                children: "Search"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 200,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              button_default,
              {
                onClick: () => clearFilters && handleReset(clearFilters),
                size: "small",
                type: "primary",
                children: "Reset"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 207,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              button_default,
              {
                size: "small",
                type: "primary",
                onClick: () => {
                  confirm2({
                    closeDropdown: false
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                },
                children: "Filter"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 213,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              button_default,
              {
                type: "primary",
                size: "small",
                onClick: () => {
                  close();
                },
                children: "close"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 225,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 199,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 181,
        columnNumber: 4
      },
      this
    ),
    filterIcon: (filtered) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      SearchOutlined_default,
      {
        style: {
          color: filtered ? "#1890ff" : void 0
        }
      },
      void 0,
      false,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 237,
        columnNumber: 4
      },
      this
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          var _a2;
          return (_a2 = searchInput.current) == null ? void 0 : _a2.select();
        }, 100);
      }
    },
    render: (text) => searchedColumn === dataIndex ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react_highlight_words.default,
      {
        highlightStyle: {
          backgroundColor: "#ffc069",
          padding: 0
        },
        searchWords: [searchText],
        autoEscape: true,
        textToHighlight: text ? text.toString() : ""
      },
      void 0,
      false,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 252,
        columnNumber: 5
      },
      this
    ) : text
  });
  (0, import_react.useEffect)(() => {
    var _a2;
    const data = (_a2 = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a2.expenses;
    setExpenses(data);
  }, [loaderData]);
  const columns = [
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
      render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: text }, void 0, false, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 278,
        columnNumber: 22
      }, this)
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category"),
      sorter: (a, b) => a.category.length - b.category.length,
      sortDirections: ["descend", "ascend"]
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.amount - b.amount
    },
    {
      title: "Expense Date",
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
      title: "Type",
      key: "type",
      render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tag_default, { color: "red", children: "EXPENSE" }, void 0, false, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 305,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 304,
        columnNumber: 5
      }, this)
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_, { _id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { size: "middle", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          button_default,
          {
            id: _id,
            type: "primary",
            onClick: () => showModalEdit(_id),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditFilled_default, {}, void 0, false, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 319,
              columnNumber: 7
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 315,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          button_default,
          {
            onClick: () => showDeleteConfirm(_id),
            type: "dashed",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteFilled_default, {}, void 0, false, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 324,
              columnNumber: 7
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 321,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 314,
        columnNumber: 5
      }, this)
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      breadcrumb_default,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, false, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 338,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { children: "Transactions" }, void 0, false, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 339,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 334,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        row_default,
        {
          justify: "space-between",
          align: "middle",
          style: { marginBottom: 20 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            col_default,
            {
              sm: 24,
              xl: 10,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Title,
                {
                  level: 3,
                  style: { marginTop: 0 },
                  children: "All Expenses"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 349,
                  columnNumber: 8
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 346,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/transaction/$transaction.jsx",
          lineNumber: 342,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { xl: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          table_default,
          {
            columns,
            dataSource: expenses
          },
          (_a = expenses[0]) == null ? void 0 : _a.title,
          false,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 358,
            columnNumber: 8
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/user/transaction/$transaction.jsx",
          lineNumber: 357,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          modal_default,
          {
            title: "Basic Modal",
            open: isModalVisible,
            onOk: handleOk,
            onCancel: resetEditing,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { gutter: [16, 16], children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 372,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 371,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "select",
                {
                  name: "category",
                  placeholder: "Select Category..",
                  value: formData.category,
                  onChange: handleChange,
                  children: categories && categories.map((item) => {
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: item,
                        children: item
                      },
                      item,
                      false,
                      {
                        fileName: "app/routes/user/transaction/$transaction.jsx",
                        lineNumber: 390,
                        columnNumber: 15
                      },
                      this
                    );
                  })
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 382,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 381,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                input_default,
                {
                  required: true,
                  type: "number",
                  placeholder: "Amount",
                  name: "amount",
                  value: formData.amount,
                  onChange: handleChange
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 400,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 399,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                input_default,
                {
                  format: "DD-MM-YYYY",
                  type: "date",
                  required: true,
                  name: "createdAt",
                  value: formData.createdAt,
                  onChange: handleChange
                },
                void 0,
                false,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 410,
                  columnNumber: 11
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 409,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 370,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 369,
              columnNumber: 8
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 364,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 356,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/transaction/$transaction.jsx",
      lineNumber: 341,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/transaction/$transaction.jsx",
    lineNumber: 333,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/user/transaction/$transaction.jsx",
    lineNumber: 332,
    columnNumber: 3
  }, this);
}
var transaction_default = Transaction;
export {
  transaction_default as default
};
//# sourceMappingURL=/build/routes/user/transaction/$transaction-B55ZCHYS.js.map
