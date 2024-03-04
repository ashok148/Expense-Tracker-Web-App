import {
  listyle
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
  DesktopOutlined_default,
  FileOutlined_default,
  HomeOutlined_default,
  SettingOutlined_default,
  TransactionOutlined_default,
  UserOutlined_default,
  avatar_default,
  button_default,
  col_default,
  layout_default,
  menu_default,
  popover_default,
  row_default,
  typography_default
} from "/build/_shared/chunk-JRC4MRFV.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-WQGPB5ZT.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/layouts/home.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Header, Content, Footer, Sider } = layout_default;
var { Text } = typography_default;
var MainLayout = ({ children }) => {
  var _a;
  const loaderData = useLoaderData();
  const userId = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.userId;
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = (0, import_react.useState)(false);
  const Logout = () => {
    navigate("/login");
  };
  const handleMenuItem = (key) => {
    navigate(key);
  };
  const navItems = [
    {
      label: "Dashboard",
      key: `/user/dashboard/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HomeOutlined_default, {}, void 0, false, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 49,
        columnNumber: 10
      }, this)
    },
    {
      label: "Create Expense",
      key: `/user/categories/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileOutlined_default, {}, void 0, false, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 54,
        columnNumber: 10
      }, this)
    },
    {
      label: "Transaction",
      key: `/user/transaction/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TransactionOutlined_default, {}, void 0, false, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 59,
        columnNumber: 10
      }, this)
    },
    {
      label: "Reports",
      key: `/user/reports/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopOutlined_default, {}, void 0, false, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 64,
        columnNumber: 10
      }, this)
    },
    {
      label: "Settings",
      key: `/user/setting/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingOutlined_default, {}, void 0, false, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 69,
        columnNumber: 10
      }, this)
    }
  ];
  const myprofile = `../setting/${userId}`;
  const content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      button_default,
      {
        block: true,
        type: "text",
        href: myprofile,
        children: "My Profile"
      },
      void 0,
      false,
      {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 77,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      button_default,
      {
        block: true,
        type: "text",
        onClick: Logout,
        children: "Log out"
      },
      void 0,
      false,
      {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 83,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/layouts/home.jsx",
    lineNumber: 76,
    columnNumber: 3
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    layout_default,
    {
      style: {
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Sider,
          {
            collapsible: true,
            collapsed,
            onCollapse: (value) => setCollapsed(value),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: listyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "\u03A3\u01AC" }, void 0, false, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 102,
                columnNumber: 6
              }, this) }, void 0, false, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 101,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                menu_default,
                {
                  theme: "dark",
                  onClick: (item) => handleMenuItem(item == null ? void 0 : item.key),
                  defaultSelectedKeys: ["1"],
                  mode: "inline",
                  items: navItems
                },
                void 0,
                false,
                {
                  fileName: "app/routes/layouts/home.jsx",
                  lineNumber: 104,
                  columnNumber: 5
                },
                this
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 97,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(layout_default, { className: "site-layout", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Header,
            {
              style: {
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { justify: "space-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  col_default,
                  {
                    xl: 12,
                    style: { display: "flex", alignItems: "center" },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { className: "expense", children: "\u{1D53C}\u{1D54F}\u2119\u{1D53C}\u2115\u{1D54A}\u{1D53C} \u{1D54B}\u211D\u{1D538}\u2102\u{1D542}" }, void 0, false, {
                      fileName: "app/routes/layouts/home.jsx",
                      lineNumber: 124,
                      columnNumber: 8
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/layouts/home.jsx",
                    lineNumber: 121,
                    columnNumber: 7
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  col_default,
                  {
                    xl: 12,
                    align: "right",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      popover_default,
                      {
                        placement: "bottomRight",
                        content,
                        trigger: "click",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          avatar_default,
                          {
                            style: { background: "#ffffff33" },
                            size: 44,
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserOutlined_default, {}, void 0, false, {
                              fileName: "app/routes/layouts/home.jsx",
                              lineNumber: 136,
                              columnNumber: 16
                            }, this)
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/layouts/home.jsx",
                            lineNumber: 133,
                            columnNumber: 9
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/layouts/home.jsx",
                        lineNumber: 129,
                        columnNumber: 8
                      },
                      this
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/layouts/home.jsx",
                    lineNumber: 126,
                    columnNumber: 7
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 120,
                columnNumber: 6
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 113,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Content,
            {
              style: {
                margin: "0 16px"
              },
              children
            },
            void 0,
            false,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 142,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Footer,
            {
              style: {
                textAlign: "center"
              },
              children: [
                "Expense Tracker \xA9",
                new Date().getFullYear(),
                " Created."
              ]
            },
            void 0,
            true,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 148,
              columnNumber: 5
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/layouts/home.jsx",
          lineNumber: 112,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 93,
      columnNumber: 3
    },
    this
  );
};
var home_default = MainLayout;

export {
  home_default
};
//# sourceMappingURL=/build/_shared/chunk-QHQDGXC7.js.map
