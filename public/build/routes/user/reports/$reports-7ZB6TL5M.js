import {
  require_main
} from "/build/_shared/chunk-FBA2TD4L.js";
import {
  ReportDownload_default
} from "/build/_shared/chunk-YA4LSDRY.js";
import "/build/_shared/chunk-YFZKLCXR.js";
import {
  home_default
} from "/build/_shared/chunk-AJOY3NXZ.js";
import "/build/_shared/chunk-EWUXHAI4.js";
import {
  transItems
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  useLoaderData
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
  SearchOutlined_default,
  breadcrumb_default,
  button_default,
  col_default,
  input_default,
  row_default,
  space_default,
  table_default,
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

// app/routes/user/reports/$reports.jsx
var import_react = __toESM(require_react());
var import_react_highlight_words = __toESM(require_main());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title } = typography_default;
var Report = () => {
  const loaderData = useLoaderData();
  const [expenses, setExpenses] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    var _a;
    const data = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.expenses;
    setExpenses(data);
  }, [loaderData]);
  const [searchText, setSearchText] = (0, import_react.useState)("");
  const [searchedColumn, setSearchedColumn] = (0, import_react.useState)("");
  const searchInput = (0, import_react.useRef)(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
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
      confirm,
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
              onPressEnter: () => handleSearch(selectedKeys, confirm, dataIndex),
              style: {
                marginBottom: 8,
                display: "block"
              }
            },
            void 0,
            false,
            {
              fileName: "app/routes/user/reports/$reports.jsx",
              lineNumber: 60,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              button_default,
              {
                type: "primary",
                onClick: () => handleSearch(selectedKeys, confirm, dataIndex),
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchOutlined_default, {}, void 0, false, {
                  fileName: "app/routes/user/reports/$reports.jsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                size: "small",
                children: "Search"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 74,
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
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 81,
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
                  confirm({
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
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 87,
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
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 99,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 73,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 55,
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
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 111,
        columnNumber: 4
      },
      this
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          var _a;
          return (_a = searchInput.current) == null ? void 0 : _a.select();
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
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 126,
        columnNumber: 5
      },
      this
    ) : text
  });
  const columns = [
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
      render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { children: text }, void 0, false, {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 147,
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
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 177,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { children: "Reports" }, void 0, false, {
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 178,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 173,
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
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Title,
                  {
                    level: 3,
                    style: { marginTop: 0 },
                    children: "Download Expense Report"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/user/reports/$reports.jsx",
                    lineNumber: 188,
                    columnNumber: 8
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 185,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 12,
                xl: 12,
                style: { textAlign: "right" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReportDownload_default, { expenses }, void 0, false, {
                  fileName: "app/routes/user/reports/$reports.jsx",
                  lineNumber: 199,
                  columnNumber: 8
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 195,
                columnNumber: 7
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/user/reports/$reports.jsx",
          lineNumber: 181,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        table_default,
        {
          columns,
          dataSource: expenses
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/reports/$reports.jsx",
          lineNumber: 203,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/user/reports/$reports.jsx",
      lineNumber: 180,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/reports/$reports.jsx",
    lineNumber: 172,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/user/reports/$reports.jsx",
    lineNumber: 171,
    columnNumber: 3
  }, this);
};
var reports_default = Report;
export {
  reports_default as default
};
//# sourceMappingURL=/build/routes/user/reports/$reports-7ZB6TL5M.js.map
