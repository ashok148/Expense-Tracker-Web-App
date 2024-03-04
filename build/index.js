var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/backend/src/models/UserModel.js
var require_UserModel = __commonJS({
  "app/backend/src/models/UserModel.js"(exports, module2) {
    "use strict";
    var mongoose2 = require("mongoose"), bcrypt2 = require("bcryptjs"), userSchema = new mongoose2.Schema({
      firstname: {
        type: String,
        required: !0
      },
      lastname: {
        type: String,
        required: !0
      },
      email: {
        type: String,
        required: !0,
        unique: !0
      },
      password: {
        type: String,
        required: !0
      },
      cpassword: {
        type: String,
        required: !0
      },
      expenses: [{
        type: mongoose2.Schema.Types.ObjectId,
        ref: "Expense",
        required: !0
      }]
    });
    userSchema.pre("save", async function(next) {
      this.isModified("password") && (this.password = bcrypt2.hashSync(this.password, 12), this.cpassword = bcrypt2.hashSync(this.password, 12)), next();
    });
    module2.exports = mongoose2.models.User || mongoose2.model("User", userSchema);
  }
});

// app/backend/src/models/ExpenseModel.js
var require_ExpenseModel = __commonJS({
  "app/backend/src/models/ExpenseModel.js"(exports, module2) {
    "use strict";
    var mongoose2 = require("mongoose"), ExpenseSchema = new mongoose2.Schema({
      title: {
        type: String,
        required: !0
      },
      category: {
        type: String,
        required: !0
      },
      amount: {
        type: Number,
        required: !0
      },
      createdAt: {
        type: String,
        default: Date.now
      },
      userId: {
        type: mongoose2.Schema.Types.ObjectId,
        ref: "User",
        required: !0
      }
    });
    module2.exports = mongoose2.models.Expense || mongoose2.model("Expense", ExpenseSchema);
  }
});

// app/backend/src/config/sendEmail.js
var require_sendEmail = __commonJS({
  "app/backend/src/config/sendEmail.js"(exports, module2) {
    "use strict";
    var nodemailer = require("nodemailer"), transporter2 = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: !1,
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    module2.exports = transporter2;
  }
});

// app/backend/src/config/database.js
var database_exports = {};
__export(database_exports, {
  default: () => database_default
});
var mongoose, connectDatabase, database_default, init_database = __esm({
  "app/backend/src/config/database.js"() {
    "use strict";
    mongoose = require("mongoose"), connectDatabase = async () => {
      await mongoose.connect(process.env.DATABASE).then((con) => {
        console.log(con);
      }).catch((err) => {
        console.log(err, "databse connection fail!");
      });
    }, database_default = connectDatabase;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 41,
          columnNumber: 4
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = error;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 83,
          columnNumber: 4
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = error;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_react_redux = require("react-redux");

// app/style.css
var style_default = "/build/_assets/style-TU7HDPHH.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: style_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Expense Tracker Web Application",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 29,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 49
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 4
  }, this);
}

// app/routes/user/transaction/$transaction.jsx
var transaction_exports = {};
__export(transaction_exports, {
  action: () => action,
  default: () => transaction_default,
  loader: () => loader2
});
var import_react5 = require("react"), import_antd2 = require("antd"), import_react_highlight_words = __toESM(require("react-highlight-words")), import_icons2 = require("@ant-design/icons");

// app/routes/layouts/home.jsx
var home_exports = {};
__export(home_exports, {
  default: () => home_default,
  loader: () => loader
});
var import_react3 = require("react"), import_icons = require("@ant-design/icons"), import_antd = require("antd"), import_react4 = require("@remix-run/react"), import_js_cookie = require("js-cookie");

// app/routes/user/styles.jsx
var styles_exports = {};
__export(styles_exports, {
  btnCat: () => btnCat,
  card: () => card,
  cardItem: () => cardItem,
  categoryItem: () => categoryItem,
  listyle: () => listyle,
  transItem: () => transItem,
  transItems: () => transItems
});
var card = {
  boxShadow: "rgb(0 0 0 / 7%) 0px 10px 41px",
  background: "#f0f1f5"
}, cardItem = {
  textAlign: "center",
  marginTop: "10px"
}, transItem = {
  padding: 24,
  minHeight: 360,
  background: "#fff"
}, categoryItem = {
  padding: "30px"
}, btnCat = {
  width: "100%",
  marginTop: "15px",
  color: "#fff",
  border: "2px solid #2c2c58",
  borderRadius: "5px",
  fontSize: "16px",
  textTransform: "capitalize",
  background: "#2c2c58",
  padding: "5px 10px 5px 10px"
}, listyle = {
  height: 32,
  margin: 16,
  background: "rgba(255, 255, 255, 0.2)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, transItems = {
  padding: 24,
  minHeight: 525,
  background: "#f0f1f5"
};

// app/authSession/session.jsx
var import_node2 = require("@remix-run/node"), import_UserModel = __toESM(require_UserModel()), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId) {
    let searchParams = new URLSearchParams([
      ["redirectTo", redirectTo]
    ]);
    throw (0, import_node2.redirect)("/login");
  }
  return userId;
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return userId || null;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (!userId)
    return null;
  try {
    return await import_UserModel.default.findOne({ userId });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(request, userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), getUserId(request), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/layouts/home.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), { Header, Content, Footer, Sider } = import_antd.Layout, { Text } = import_antd.Typography;
async function loader({ request }) {
  return await getUserId(request);
}
var MainLayout = ({ children }) => {
  var _a;
  let loaderData = (0, import_react4.useLoaderData)(), userId = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.userId, navigate = (0, import_react4.useNavigate)(), [collapsed, setCollapsed] = (0, import_react3.useState)(!1), Logout = () => {
    navigate("/login");
  }, handleMenuItem = (key) => {
    navigate(key);
  }, navItems = [
    {
      label: "Dashboard",
      key: `/user/dashboard/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.HomeOutlined, {}, void 0, !1, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 49,
        columnNumber: 10
      }, this)
    },
    {
      label: "Create Expense",
      key: `/user/categories/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.FileOutlined, {}, void 0, !1, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 54,
        columnNumber: 10
      }, this)
    },
    {
      label: "Transaction",
      key: `/user/transaction/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.TransactionOutlined, {}, void 0, !1, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 59,
        columnNumber: 10
      }, this)
    },
    {
      label: "Reports",
      key: `/user/reports/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.DesktopOutlined, {}, void 0, !1, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 64,
        columnNumber: 10
      }, this)
    },
    {
      label: "Settings",
      key: `/user/setting/${userId}`,
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.SettingOutlined, {}, void 0, !1, {
        fileName: "app/routes/layouts/home.jsx",
        lineNumber: 69,
        columnNumber: 10
      }, this)
    }
  ], myprofile = `../setting/${userId}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_antd.Layout,
    {
      style: {
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Sider,
          {
            collapsible: !0,
            collapsed,
            onCollapse: (value) => setCollapsed(value),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: listyle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "\u03A3\u01AC" }, void 0, !1, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 102,
                columnNumber: 6
              }, this) }, void 0, !1, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 101,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                import_antd.Menu,
                {
                  theme: "dark",
                  onClick: (item) => handleMenuItem(item == null ? void 0 : item.key),
                  defaultSelectedKeys: ["1"],
                  mode: "inline",
                  items: navItems
                },
                void 0,
                !1,
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
          !0,
          {
            fileName: "app/routes/layouts/home.jsx",
            lineNumber: 97,
            columnNumber: 4
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Layout, { className: "site-layout", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Header,
            {
              style: {
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_antd.Row, { justify: "space-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_antd.Col,
                  {
                    xl: 12,
                    style: { display: "flex", alignItems: "center" },
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { className: "expense", children: "\u{1D53C}\u{1D54F}\u2119\u{1D53C}\u2115\u{1D54A}\u{1D53C} \u{1D54B}\u211D\u{1D538}\u2102\u{1D542}" }, void 0, !1, {
                      fileName: "app/routes/layouts/home.jsx",
                      lineNumber: 124,
                      columnNumber: 8
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/layouts/home.jsx",
                    lineNumber: 121,
                    columnNumber: 7
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_antd.Col,
                  {
                    xl: 12,
                    align: "right",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                      import_antd.Popover,
                      {
                        placement: "bottomRight",
                        content: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            import_antd.Button,
                            {
                              block: !0,
                              type: "text",
                              href: myprofile,
                              children: "My Profile"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/layouts/home.jsx",
                              lineNumber: 77,
                              columnNumber: 4
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                            import_antd.Button,
                            {
                              block: !0,
                              type: "text",
                              onClick: Logout,
                              children: "Log out"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/layouts/home.jsx",
                              lineNumber: 83,
                              columnNumber: 4
                            },
                            this
                          )
                        ] }, void 0, !0, {
                          fileName: "app/routes/layouts/home.jsx",
                          lineNumber: 76,
                          columnNumber: 3
                        }, this),
                        trigger: "click",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                          import_antd.Avatar,
                          {
                            style: { background: "#ffffff33" },
                            size: 44,
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_icons.UserOutlined, {}, void 0, !1, {
                              fileName: "app/routes/layouts/home.jsx",
                              lineNumber: 136,
                              columnNumber: 16
                            }, this)
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/layouts/home.jsx",
                            lineNumber: 133,
                            columnNumber: 9
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/layouts/home.jsx",
                        lineNumber: 129,
                        columnNumber: 8
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/layouts/home.jsx",
                    lineNumber: 126,
                    columnNumber: 7
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/layouts/home.jsx",
                lineNumber: 120,
                columnNumber: 6
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 113,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            Content,
            {
              style: {
                margin: "0 16px"
              },
              children
            },
            void 0,
            !1,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 142,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
            !0,
            {
              fileName: "app/routes/layouts/home.jsx",
              lineNumber: 148,
              columnNumber: 5
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/layouts/home.jsx",
          lineNumber: 112,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/layouts/home.jsx",
      lineNumber: 93,
      columnNumber: 3
    },
    this
  );
}, home_default = MainLayout;

// app/routes/user/transaction/$transaction.jsx
var import_axios = require("axios"), import_react6 = require("@remix-run/react");

// app/backend/src/services/expenseServices.js
var Expense = require_ExpenseModel(), User2 = require_UserModel(), createExpense = async (title, category, amount, createdAt, userId) => {
  let existingUser;
  try {
    existingUser = await User2.findById(userId);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser)
    throw new Error({ message: "Unable to find User By this Id!" });
  let expense = new Expense({
    title,
    category,
    amount,
    createdAt,
    userId
  });
  try {
    await expense.save(), existingUser.expenses.push(expense), await existingUser.save();
  } catch (err) {
    throw console.log(err), new Error({ message: err });
  }
  return { message: "expense added..", expense };
}, getExpenseByUserId = async (user_id) => {
  let userExpenses;
  try {
    userExpenses = await User2.findById(user_id).populate("expenses");
  } catch (err) {
    console.log(err);
  }
  if (!userExpenses)
    throw new Error({ message: "No expense added yet!" });
  return { status: "success", user: {
    userId: userExpenses._id,
    name: {
      firstname: userExpenses.firstname,
      lastname: userExpenses.lastname
    },
    email: userExpenses.email,
    expenses: userExpenses.expenses
  } };
}, updateExpense = async (title, category, amount, createdAt, expenseId) => {
  let expense;
  try {
    expense = await Expense.findByIdAndUpdate(expenseId, {
      title,
      category,
      amount,
      createdAt
    }), await expense.save();
  } catch (err) {
    console.log(err);
  }
  if (!expense)
    throw new Error({ message: "Unable to update details!" });
  return { status: "success", message: "details update successfully.", data: expense };
}, deleteExpense = async (expense_id) => {
  let expense;
  try {
    expense = await Expense.findByIdAndRemove(expense_id).populate("userId"), await expense.userId.expenses.pull(expense), await expense.userId.save();
  } catch (err) {
    console.log(err);
  }
  if (!expense)
    throw new Error({ message: "Unable To Delete" });
  return { message: "Item deleted successfully.." };
};

// app/routes/user/transaction/$transaction.jsx
var import_js_cookie2 = __toESM(require("js-cookie"));
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), { Title } = import_antd2.Typography;
async function loader2({ request, params }) {
  await requireUserId(request);
  let id2 = params.transaction;
  return await getExpenseByUserId(id2);
}
async function action({ request }) {
  switch (request.method) {
    case "DELETE":
      return await deleteExpense(id);
    case "PUT":
      return await updateExpense(id);
    default:
      return "invalid action";
  }
}
function Transaction() {
  var _a;
  let loaderData = (0, import_react6.useLoaderData)(), actionData = (0, import_react6.useActionData)(), [expenses, setExpenses] = (0, import_react5.useState)([]), [isModalVisible, setIsModalVisible] = (0, import_react5.useState)(!1), [formData, setFormData] = (0, import_react5.useState)({}), categories = [
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
  ], { confirm } = import_antd2.Modal, showDeleteConfirm = (id2, index) => {
    confirm({
      title: "Are you sure delete this Item?",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.ExclamationCircleFilled, {}, void 0, !1, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 72,
        columnNumber: 10
      }, this),
      content: "This item is delete Permanently",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        setExpenses((pre) => pre.filter((item) => item._id !== id2));
      },
      onCancel() {
      }
    });
  }, showModalEdit = (id2) => {
    import_js_cookie2.default.set("expense_id", id2), setExpenses(expenses), setIsModalVisible(!0);
    let editData = expenses.filter((item) => {
      if (item._id === id2)
        return item;
    });
    setFormData({
      id: editData[0]._id,
      title: editData[0].title,
      category: editData[0].category,
      amount: editData[0].amount,
      createdAt: editData[0].createdAt
    });
  }, handleOk = () => {
    let id2 = import_js_cookie2.default.get("expense_id");
    setIsModalVisible(!1), setExpenses((pre) => pre.map((item) => item._id === formData.id ? formData : item)), resetEditing();
  }, resetEditing = () => {
    setIsModalVisible(!1);
  }, handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, [searchText, setSearchText] = (0, import_react5.useState)(""), [searchedColumn, setSearchedColumn] = (0, import_react5.useState)(""), searchInput = (0, import_react5.useRef)(null), handleSearch = (selectedKeys, confirm2, dataIndex) => {
    confirm2(), setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
  }, handleReset = (clearFilters) => {
    clearFilters(), setSearchText("");
  }, getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm: confirm2,
      clearFilters,
      close
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "div",
      {
        style: {
          padding: 8
        },
        onKeyDown: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_antd2.Input,
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
            !1,
            {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 175,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Space, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_antd2.Button,
              {
                type: "primary",
                onClick: () => handleSearch(selectedKeys, confirm2, dataIndex),
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.SearchOutlined, {}, void 0, !1, {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 192,
                  columnNumber: 13
                }, this),
                size: "small",
                children: "Search"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 189,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_antd2.Button,
              {
                onClick: () => clearFilters && handleReset(clearFilters),
                size: "small",
                type: "primary",
                children: "Reset"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 196,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_antd2.Button,
              {
                size: "small",
                type: "primary",
                onClick: () => {
                  confirm2({
                    closeDropdown: !1
                  }), setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
                },
                children: "Filter"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 202,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              import_antd2.Button,
              {
                type: "primary",
                size: "small",
                onClick: () => {
                  close();
                },
                children: "close"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 214,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 188,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 170,
        columnNumber: 4
      },
      this
    ),
    filterIcon: (filtered) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_icons2.SearchOutlined,
      {
        style: {
          color: filtered ? "#1890ff" : void 0
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 226,
        columnNumber: 4
      },
      this
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      visible && setTimeout(() => {
        var _a2;
        return (_a2 = searchInput.current) == null ? void 0 : _a2.select();
      }, 100);
    },
    render: (text) => searchedColumn === dataIndex ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react_highlight_words.default,
      {
        highlightStyle: {
          backgroundColor: "#ffc069",
          padding: 0
        },
        searchWords: [searchText],
        autoEscape: !0,
        textToHighlight: text ? text.toString() : ""
      },
      void 0,
      !1,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 241,
        columnNumber: 5
      },
      this
    ) : text
  });
  (0, import_react5.useEffect)(() => {
    var _a2;
    let data = (_a2 = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a2.expenses;
    setExpenses(data);
  }, [loaderData]);
  let columns = [
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
      render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: text }, void 0, !1, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 267,
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
      render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Tag, { color: "red", children: "EXPENSE" }, void 0, !1, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 294,
        columnNumber: 6
      }, this) }, void 0, !1, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 293,
        columnNumber: 5
      }, this)
    },
    {
      title: "Action",
      dataIndex: "_id",
      key: "_id",
      render: (_, { _id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Space, { size: "middle", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_antd2.Button,
          {
            id: _id,
            type: "primary",
            onClick: () => showModalEdit(_id),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.EditFilled, {}, void 0, !1, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 308,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 304,
            columnNumber: 6
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_antd2.Button,
          {
            onClick: () => showDeleteConfirm(_id),
            type: "dashed",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_icons2.DeleteFilled, {}, void 0, !1, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 313,
              columnNumber: 7
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 310,
            columnNumber: 6
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 303,
        columnNumber: 5
      }, this)
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(home_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_antd2.Breadcrumb,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Breadcrumb.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, !1, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 327,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Breadcrumb.Item, { children: "Transactions" }, void 0, !1, {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 328,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 323,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_antd2.Row,
        {
          justify: "space-between",
          align: "middle",
          style: { marginBottom: 20 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_antd2.Col,
            {
              sm: 24,
              xl: 10,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                Title,
                {
                  level: 3,
                  style: { marginTop: 0 },
                  children: "All Expenses"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 338,
                  columnNumber: 8
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 335,
              columnNumber: 7
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/transaction/$transaction.jsx",
          lineNumber: 331,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Col, { xl: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_antd2.Table,
          {
            columns,
            dataSource: expenses
          },
          (_a = expenses[0]) == null ? void 0 : _a.title,
          !1,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 347,
            columnNumber: 8
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/user/transaction/$transaction.jsx",
          lineNumber: 346,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          import_antd2.Modal,
          {
            title: "Basic Modal",
            open: isModalVisible,
            onOk: handleOk,
            onCancel: resetEditing,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Form, { method: "PUT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Row, { gutter: [16, 16], children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_antd2.Input,
                {
                  name: "title",
                  placeholder: "Title",
                  required: !0,
                  size: "large",
                  value: formData.title,
                  onChange: handleChange
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 361,
                  columnNumber: 11
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 360,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "select",
                {
                  name: "category",
                  placeholder: "Select Category..",
                  value: formData.category,
                  onChange: handleChange,
                  children: categories && categories.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "option",
                    {
                      value: item,
                      children: item
                    },
                    item,
                    !1,
                    {
                      fileName: "app/routes/user/transaction/$transaction.jsx",
                      lineNumber: 379,
                      columnNumber: 15
                    },
                    this
                  ))
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 371,
                  columnNumber: 11
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 370,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_antd2.Input,
                {
                  required: !0,
                  type: "number",
                  placeholder: "Amount",
                  name: "amount",
                  value: formData.amount,
                  onChange: handleChange
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 389,
                  columnNumber: 11
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 388,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_antd2.Col, { span: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_antd2.Input,
                {
                  format: "DD-MM-YYYY",
                  type: "date",
                  required: !0,
                  name: "createdAt",
                  value: formData.createdAt,
                  onChange: handleChange
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/transaction/$transaction.jsx",
                  lineNumber: 399,
                  columnNumber: 11
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/user/transaction/$transaction.jsx",
                lineNumber: 398,
                columnNumber: 10
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 359,
              columnNumber: 9
            }, this) }, void 0, !1, {
              fileName: "app/routes/user/transaction/$transaction.jsx",
              lineNumber: 358,
              columnNumber: 8
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/user/transaction/$transaction.jsx",
            lineNumber: 353,
            columnNumber: 7
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/user/transaction/$transaction.jsx",
        lineNumber: 345,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user/transaction/$transaction.jsx",
      lineNumber: 330,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user/transaction/$transaction.jsx",
    lineNumber: 322,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/user/transaction/$transaction.jsx",
    lineNumber: 321,
    columnNumber: 3
  }, this);
}
var transaction_default = Transaction;

// app/routes/user/categories/$categories.jsx
var categories_exports = {};
__export(categories_exports, {
  action: () => action2,
  default: () => categories_default,
  loader: () => loader3
});
var import_react7 = require("react");
var import_antd3 = require("antd"), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), { Title: Title2 } = import_antd3.Typography;
async function loader3({ request }) {
  return await requireUserId(request), null;
}
async function action2({ request, params }) {
  let userId = params.categories, form = await request.formData(), title = form.get("title"), category = form.get("category"), amount = form.get("amount"), date = form.get("date");
  switch (request.method) {
    case "POST":
      return await createExpense(
        title,
        category,
        amount,
        date,
        userId
      );
    default:
      return "invalid form data";
  }
}
var Categories = () => {
  var _a, _b, _c;
  let actionData = (0, import_react8.useActionData)(), [formData, setFormData] = (0, import_react7.useState)({
    title: "",
    category: "",
    amount: "",
    date: ""
  }), categories = [
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
  ], handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, handleValue = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(home_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_antd3.Breadcrumb,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Breadcrumb.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, !1, {
            fileName: "app/routes/user/categories/$categories.jsx",
            lineNumber: 77,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Breadcrumb.Item, { children: "Create New Expense" }, void 0, !1, {
            fileName: "app/routes/user/categories/$categories.jsx",
            lineNumber: 78,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/categories/$categories.jsx",
        lineNumber: 73,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Title2,
        {
          level: 3,
          style: { margin: "0 0 20px 0px" },
          children: "Create New Expense"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/categories/$categories.jsx",
          lineNumber: 81,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Row, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_antd3.Col,
        {
          sm: 24,
          xl: 12,
          style: { margin: "auto" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Row, { gutter: [16, 16], children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_antd3.Col,
                {
                  xl: 24,
                  style: { width: "100%" },
                  children: (_a = actionData == null ? void 0 : actionData.mydata) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    import_antd3.Alert,
                    {
                      message: (_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message,
                      type: "success"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/categories/$categories.jsx",
                      lineNumber: 97,
                      columnNumber: 11
                    },
                    this
                  ) : null
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 93,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_antd3.Col,
                {
                  xl: 24,
                  style: { width: "100%" },
                  children: (_c = actionData == null ? void 0 : actionData.error) != null && _c.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    import_antd3.Alert,
                    {
                      message: "Fail to add.!",
                      type: "error"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/categories/$categories.jsx",
                      lineNumber: 107,
                      columnNumber: 11
                    },
                    this
                  ) : null
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 103,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/user/categories/$categories.jsx",
              lineNumber: 92,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { ...card, ...categoryItem }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Title2,
                {
                  level: 4,
                  style: { textAlign: "center", margin: "0px 0px 15px 0px" },
                  children: "Register a new expense and save it."
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 115,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_antd3.Row,
                {
                  gutter: [16, 16],
                  className: "row",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_antd3.Col,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          import_antd3.Input,
                          {
                            name: "title",
                            placeholder: "Title",
                            required: !0,
                            size: "large",
                            value: formData.title,
                            onChange: handleChange
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 127,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 124,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_antd3.Col,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          "select",
                          {
                            name: "category",
                            value: formData.category,
                            onChange: handleChange,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                                "option",
                                {
                                  hidden: !0,
                                  value: !0,
                                  children: "Select Category.."
                                },
                                "blankKey",
                                !1,
                                {
                                  fileName: "app/routes/user/categories/$categories.jsx",
                                  lineNumber: 143,
                                  columnNumber: 13
                                },
                                this
                              ),
                              categories && categories.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                                "option",
                                {
                                  value: item,
                                  children: item
                                },
                                item,
                                !1,
                                {
                                  fileName: "app/routes/user/categories/$categories.jsx",
                                  lineNumber: 152,
                                  columnNumber: 16
                                },
                                this
                              ))
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 139,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 136,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_antd3.Col,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          import_antd3.Input,
                          {
                            required: !0,
                            type: "number",
                            placeholder: "Add Expense Amount",
                            name: "amount",
                            value: formData.amount,
                            onChange: handleChange
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 164,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_antd3.Col,
                      {
                        sm: 24,
                        xl: 12,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          import_antd3.Input,
                          {
                            placeholder: "DD-MM-YYYY",
                            type: "date",
                            required: !0,
                            name: "date",
                            value: formData.date,
                            onChange: handleChange
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 176,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/user/categories/$categories.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                      import_antd3.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                          import_antd3.Button,
                          {
                            onClick: handleValue,
                            type: "primary",
                            htmlType: "submit",
                            children: "Create Expense"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/categories/$categories.jsx",
                            lineNumber: 188,
                            columnNumber: 12
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
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
                !0,
                {
                  fileName: "app/routes/user/categories/$categories.jsx",
                  lineNumber: 121,
                  columnNumber: 10
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/user/categories/$categories.jsx",
                lineNumber: 120,
                columnNumber: 9
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/user/categories/$categories.jsx",
              lineNumber: 114,
              columnNumber: 8
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/user/categories/$categories.jsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/user/categories/$categories.jsx",
        lineNumber: 87,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user/categories/$categories.jsx",
      lineNumber: 80,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user/categories/$categories.jsx",
    lineNumber: 72,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/user/categories/$categories.jsx",
    lineNumber: 71,
    columnNumber: 3
  }, this);
}, categories_default = Categories;

// app/routes/user/reports/ReportDownload.jsx
var ReportDownload_exports = {};
__export(ReportDownload_exports, {
  default: () => ReportDownload_default
});
var import_jspdf = __toESM(require("jspdf")), import_jspdf_autotable = __toESM(require("jspdf-autotable")), import_react_export_table_to_excel = require("react-export-table-to-excel"), import_react_csv = require("react-csv"), import_icons3 = require("@ant-design/icons"), import_antd4 = require("antd"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function ReportDownload({ expenses }) {
  let CsvExpenses = expenses.flatMap((item) => [
    {
      title: item == null ? void 0 : item.title,
      amount: item == null ? void 0 : item.amount,
      category: item == null ? void 0 : item.category,
      date: item == null ? void 0 : item.createdAt
    }
  ]);
  function handleDownloadExcel() {
    let header = ["Item Name", "Amount", "Category", "Expense Date"], newExpense = expenses.flatMap((item) => [
      {
        title: item == null ? void 0 : item.title,
        amount: item == null ? void 0 : item.amount,
        category: item == null ? void 0 : item.category,
        date: item == null ? void 0 : item.createdAt
      }
    ]);
    (0, import_react_export_table_to_excel.downloadExcel)({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        body: newExpense
      }
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_antd4.Dropdown,
    {
      menu: {
        items: [
          {
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { onClick: () => {
              let doc = new import_jspdf.default(), newExpense = expenses.map((item) => [item.title, item.amount, item.category, item.createdAt]);
              (0, import_jspdf_autotable.default)(doc, {
                head: [["Item Name", "Amount", "Category", "Expense Date"]],
                body: newExpense
              }), doc.save("table.pdf");
            }, children: "Download as a PDF" }, void 0, !1, {
              fileName: "app/routes/user/reports/ReportDownload.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            key: "0"
          },
          {
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { onClick: handleDownloadExcel, children: "Download as a Excel file" }, void 0, !1, {
              fileName: "app/routes/user/reports/ReportDownload.jsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            key: "1"
          },
          {
            label: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Space, { size: "middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              import_react_csv.CSVLink,
              {
                className: "btn-color",
                data: CsvExpenses,
                filename: "my-file.csv",
                children: "Download as a CSV"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/ReportDownload.jsx",
                lineNumber: 61,
                columnNumber: 6
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/user/reports/ReportDownload.jsx",
              lineNumber: 60,
              columnNumber: 5
            }, this),
            key: "3"
          }
        ]
      },
      trigger: ["click"],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "a",
        {
          onClick: (e) => e.preventDefault(),
          className: "btn-color",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Space, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons3.DownloadOutlined, {}, void 0, !1, {
              fileName: "app/routes/user/reports/ReportDownload.jsx",
              lineNumber: 83,
              columnNumber: 7
            }, this),
            "Report Download"
          ] }, void 0, !0, {
            fileName: "app/routes/user/reports/ReportDownload.jsx",
            lineNumber: 82,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/reports/ReportDownload.jsx",
          lineNumber: 79,
          columnNumber: 5
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/user/reports/ReportDownload.jsx",
      lineNumber: 74,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/user/reports/ReportDownload.jsx",
    lineNumber: 73,
    columnNumber: 3
  }, this);
}
var ReportDownload_default = ReportDownload;

// app/routes/password/reset/$id/$reset.jsx
var reset_exports = {};
__export(reset_exports, {
  action: () => action3,
  default: () => reset_default,
  meta: () => meta2
});
var import_antd5 = require("antd"), import_icons4 = require("@ant-design/icons"), import_react9 = require("@remix-run/react"), import_react10 = require("react");

// app/backend/src/services/authServices.js
var User3 = require_UserModel(), bcrypt = require("bcryptjs"), jwt = require("jsonwebtoken"), transporter = require_sendEmail(), connectDatabase2 = (init_database(), __toCommonJS(database_exports));
connectDatabase();
var registerUser = async (firstname, lastname, email, password, cpassword) => {
  let existingUser;
  try {
    existingUser = await User3.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser)
    throw new Error({ error: "User already exists! Please login" });
  if (password !== cpassword)
    throw new Error({ error: "Password does'nt match!" });
  let user = new User3({
    firstname,
    lastname,
    email,
    password,
    cpassword
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err, "Fail to register.");
  }
  return { user, message: "User create successfully..." };
}, loginUser = async (email, password) => {
  let existingUser;
  try {
    existingUser = await User3.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser)
    throw new Error({ status: "fail", error: "Could not find any user for this account!" });
  if (!await bcrypt.compareSync(
    password,
    existingUser.password
  ))
    throw new Error({ error: "Incorrect email or password!" });
  return { user: existingUser, message: "Login Successfull..." };
}, forgotPassword = async (email) => {
  let existingUser, info;
  try {
    existingUser = await User3.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser)
    throw new Error({ error: "Could not find any user for this account!" });
  let secret = existingUser._id + process.env.JWT_SECRET_KEY, resetToken = jwt.sign({ userID: existingUser._id }, secret, {
    expiresIn: "2h"
  }), passwordResetLink = `http://localhost:3000/password/reset/${existingUser._id}/${resetToken}`;
  console.log(passwordResetLink);
  try {
    info = await transporter.sendMail({
      from: process.env.EMAIL_EROM,
      to: existingUser.email,
      subject: "ExpenseTracker - Password Reset Link",
      html: `<p>We have received your request to reset the password </p> <p>Use the link below to update your password:</p> <a href='${passwordResetLink}'> <button style="background:blue; color: white; font-size: 16px;">Click Here!</button></a>. <p>This link will expire in 24 hours.</p>
          <p>Thank You</p>
          <p>Customer Support</p>`
    });
  } catch (error) {
    throw console.log(error), new Error({ error: "Fail to send email!" });
  }
  return {
    status: "success",
    message: `Email sent to ${existingUser.email} successfully...please check your email.`,
    info
  };
}, resetPassword = async (password, cpassword, id2, token) => {
  let user = await User3.findById(id2), new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    if (jwt.verify(token, new_secret), password && cpassword) {
      if (password !== cpassword)
        throw new Error({
          error: "New Password & Confirm New Password does'nt matched!"
        });
      {
        let newPassword = await bcrypt.hashSync(password);
        return await User3.findByIdAndUpdate(user._id, {
          $set: {
            password: newPassword
          }
        }), { message: "Password reset successfully..." };
      }
    }
  } catch (error) {
    throw console.log(error), new Error({ error: "Reset password token is invalid or has been expired!" });
  }
}, updateProfile = async (firstname, lastname, password, cpassword, id2) => {
  let user = await User3.findById(id2);
  try {
    if (password && cpassword) {
      if (password !== cpassword)
        throw new Error({
          error: "Old Password &  New Password does'nt matched!"
        });
      {
        let newPassword = await bcrypt.hashSync(password);
        return { message: "Details updated successfully...", data: await User3.findByIdAndUpdate(user._id, {
          firstname,
          lastname,
          password: newPassword
        }) };
      }
    }
  } catch (error) {
    throw console.log(error), new Error({ error: "Something went wrong please try again!" });
  }
};

// app/routes/validation.jsx
var validation_exports = {};
__export(validation_exports, {
  validateConfirmPassword: () => validateConfirmPassword,
  validateEmail: () => validateEmail,
  validatePassword: () => validatePassword,
  validatefirst: () => validatefirst,
  validatelast: () => validatelast
});
var validatefirst = (firstname) => {
  if (firstname) {
    if (typeof firstname != "string" || firstname.length < 3)
      return "First Name must be 3 characters";
  } else
    return "firstName is required";
}, validatelast = (lastname) => {
  if (lastname) {
    if (typeof lastname != "string" || lastname.length < 3)
      return "Last Name must be 3 characters";
  } else
    return "lastname is required";
}, validateEmail = (email) => {
  if (email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Invalid Email Address";
  } else
    return "Email is Required";
}, validatePassword = (password) => {
  if (password) {
    if (typeof password != "string" || password.length < 6)
      return "Passwords must be at least 6 characters long";
    if (password.length > 0 && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))
      return "Minimum one lowercase, uppercase, number and special character required";
  } else
    return "Password is required";
}, validateConfirmPassword = (password, cpassword) => {
  if (cpassword) {
    if (password !== cpassword)
      return "Password does not match";
  } else
    return "Confirm Password is required";
};

// app/routes/password/reset/$id/$reset.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), { Title: Title3, Text: Text2 } = import_antd5.Typography;
async function action3({ request, params }) {
  let id2 = params.id, token = params.reset, form = await request.formData(), password = form.get("password"), cpassword = form.get("cpassword"), formErrors = {
    password: validatePassword(password),
    cpassword: validateConfirmPassword(password, cpassword)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST":
      return await resetPassword({ id: id2, token, password, cpassword });
    default:
      return "invalid reset password data";
  }
}
var meta2 = () => ({
  title: "Reset Password"
});
function Reset() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react9.useActionData)(), navigate = (0, import_react9.useNavigate)(), [inputs, setInputs] = (0, import_react10.useState)({
    password: "",
    cpassword: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (0, import_react10.useEffect)(() => {
    var _a2;
    (_a2 = actionData == null ? void 0 : actionData.mydata) != null && _a2.message && navigate("/login");
  }, [(_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.message]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_antd5.Row,
    {
      justify: "center",
      align: "middle",
      style: { height: "100vh" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_antd5.Col,
        {
          sm: 16,
          xl: 10,
          children: [
            (_b = actionData == null ? void 0 : actionData.mydata) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_antd5.Alert,
              {
                message: (_c = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _c.message,
                type: "success"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 69,
                columnNumber: 6
              },
              this
            ) : null,
            (_d = actionData == null ? void 0 : actionData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              import_antd5.Alert,
              {
                message: "Fail to reset password!",
                type: "error"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 75,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "main-component", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_antd5.Avatar,
                  {
                    style: {
                      backgroundColor: "#9c27b0",
                      verticalAlign: "middle"
                    },
                    size: "large",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.UserOutlined, { size: "large" }, void 0, !1, {
                      fileName: "app/routes/password/reset/$id/$reset.jsx",
                      lineNumber: 90,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 84,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  Title3,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Reset Your Password"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 92,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 83,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_antd5.Row,
                {
                  gutter: [16, 16],
                  className: "row",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_antd5.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            import_antd5.Input,
                            {
                              name: "password",
                              placeholder: "Enter New Password",
                              required: !0,
                              size: "large",
                              autoComplete: "off",
                              type: "password",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/password/reset/$id/$reset.jsx",
                              lineNumber: 105,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text2, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.password }, void 0, !1, {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_antd5.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            import_antd5.Input,
                            {
                              name: "cpassword",
                              placeholder: "Confirm New Password",
                              required: !0,
                              autoComplete: "off",
                              type: "password",
                              size: "large",
                              value: inputs.cpassword,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/password/reset/$id/$reset.jsx",
                              lineNumber: 124,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.cpassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Text2, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.cpassword }, void 0, !1, {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                      import_antd5.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                          import_antd5.Button,
                          {
                            type: "primary",
                            htmlType: "submit",
                            style: btnCat,
                            size: "large",
                            children: "Update Password"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 143,
                            columnNumber: 10
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/password/reset/$id/$reset.jsx",
                  lineNumber: 99,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 98,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 82,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 81,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/password/reset/$id/$reset.jsx",
          lineNumber: 65,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/password/reset/$id/$reset.jsx",
      lineNumber: 61,
      columnNumber: 3
    },
    this
  );
}
var reset_default = Reset;

// app/routes/user/dashboard/$dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader4
});
var import_react12 = require("react");

// app/assets/expense.png
var expense_default = "/build/_assets/expense-T43H5IGW.png";

// app/assets/TotalExpense.png
var TotalExpense_default = "/build/_assets/TotalExpense-45VAN2EI.png";

// app/routes/user/dashboard/$dashboard.jsx
var import_antd6 = require("antd");

// app/routes/user/dashboard/chart.jsx
var chart_exports = {};
__export(chart_exports, {
  default: () => chart_default
});
var import_chart = require("chart.js"), import_react_chartjs_2 = require("react-chartjs-2"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
import_chart.Chart.register(import_chart.ArcElement, import_chart.Tooltip, import_chart.Legend);
var DoughnutChart = ({ expenseList }) => {
  let categories = expenseList.map((item) => item.category), itemCount = ((categories2) => categories2.reduce((accumulator, value) => (accumulator[value] = ++accumulator[value] || 1, accumulator), {}))(categories), options = {
    responsive: !0,
    plugins: {
      legend: {
        position: "left"
      },
      title: {
        display: !0,
        text: "Total Number of Expenses of each categories"
      }
    }
  }, data = {
    labels: [
      "Maintenance and repairs",
      "Telephone",
      "Printing",
      "Salaries and other compensation",
      "Travel",
      "Business meals",
      "Medical expenses",
      "Licenses and permits",
      "Client gifts",
      "Employee loans"
    ],
    datasets: [
      {
        label: "Total expense",
        data: [
          itemCount.Maintenance_and_repairs,
          itemCount.Telephone,
          itemCount.Printing,
          itemCount.Salaries_and_other_compensation,
          itemCount.Travel,
          itemCount.Business_meals,
          itemCount.Medical_expenses,
          itemCount.Licenses_and_permits,
          itemCount.Client_gifts,
          itemCount.Employee_loans
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(465, 791, 24, 1)",
          "rgba(125, 29, 14, 1)",
          "rgba(69, 23, 234, 1)",
          "rgba(125, 49, 114, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(465, 791, 24, 1)",
          "rgba(125, 29, 14, 1)",
          "rgba(69, 23, 234, 1)",
          "rgba(125, 49, 114, 1)"
        ],
        borderWidth: 1,
        hoverOffset: 16
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "div",
    {
      className: "chart",
      style: { display: "flex", justifyContent: "center", flexWrap: "wrap" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react_chartjs_2.Doughnut,
        {
          data,
          options
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/dashboard/chart.jsx",
          lineNumber: 93,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/user/dashboard/chart.jsx",
      lineNumber: 90,
      columnNumber: 3
    },
    this
  );
}, chart_default = DoughnutChart;

// app/routes/user/dashboard/chart2.jsx
var chart2_exports = {};
__export(chart2_exports, {
  default: () => chart2_default
});
var import_react11 = require("react"), import_chart2 = require("chart.js"), import_react_chartjs_22 = require("react-chartjs-2"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
import_chart2.Chart.register(import_chart2.CategoryScale, import_chart2.LinearScale, import_chart2.BarElement, import_chart2.Title, import_chart2.Tooltip, import_chart2.Legend);
var BarChart = ({ expenseList }) => {
  let amounts = expenseList.map((transaction) => transaction.amount), expenseTitle = expenseList.map((item) => item.title), options = {
    responsive: !0,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: !0,
        text: "Top 5 highest expense per month"
      }
    }
  }, data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datasets: [
      {
        label: expenseTitle[0] ? [expenseTitle[0]] : "Label 1",
        data: [amounts[0]],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132,0.5)",
        borderWidth: 5
      },
      {
        label: expenseTitle[1] ? [expenseTitle[1]] : "Label 2",
        data: [amounts[1]],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(465, 791, 24, 1)",
        borderWidth: 5
      },
      {
        label: expenseTitle[2] ? [expenseTitle[2]] : "Label 3",
        data: [amounts[2]],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(25, 159, 124, 1)",
        borderWidth: 5
      },
      {
        label: expenseTitle[3] ? [expenseTitle[3]] : "Label 4",
        data: [amounts[3]],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(175, 212, 12, 1)",
        borderWidth: 5
      },
      {
        label: expenseTitle[4] ? [expenseTitle[4]] : "Label 5",
        data: [amounts[4]],
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(235, 231, 24, 1)",
        borderWidth: 5
      }
    ]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "chart", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_react_chartjs_22.Bar,
    {
      options,
      data
    },
    void 0,
    !1,
    {
      fileName: "app/routes/user/dashboard/chart2.jsx",
      lineNumber: 90,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/user/dashboard/chart2.jsx",
    lineNumber: 89,
    columnNumber: 3
  }, this);
}, chart2_default = BarChart;

// app/routes/user/dashboard/$dashboard.jsx
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), { Title: Title5 } = import_antd6.Typography;
async function loader4({ request, params }) {
  await requireUserId(request);
  let userId = params.dashboard;
  return await getExpenseByUserId(userId);
}
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
], Dashboard = () => {
  let loaderData = (0, import_react13.useLoaderData)(), [expenseList, setExpenseList] = (0, import_react12.useState)([]), [selectedDate, setSelectedDate] = (0, import_react12.useState)(""), [selectedCategory, setSelectedcategory] = (0, import_react12.useState)(), [filterData, setFilterData] = (0, import_react12.useState)([]), totalExpense = expenseList.map((transaction) => transaction.amount).filter((item) => item > 0).reduce((acc, item) => acc += item, 0), expenseCount = () => {
    let count = 0;
    for (let i = 0; i < expenseList.length; i++)
      count++;
    return count;
  };
  (0, import_react12.useEffect)(() => {
    var _a;
    let data = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.expenses;
    setExpenseList(data);
  }, [loaderData]);
  let onChangeDate = (date, dateString) => {
    setSelectedDate(dateString);
  }, handleChangeSelect = (value) => {
    setSelectedcategory(value);
  }, handleData = () => {
    let data = expenseList == null ? void 0 : expenseList.filter((item) => {
      let month = `${new Date(item.createdAt).getFullYear()}-${new Date(item.createdAt).getMonth() + 1}`;
      return (item == null ? void 0 : item.category) === selectedCategory && month == selectedDate;
    });
    setFilterData(data);
  }, handleReset = () => {
    setSelectedDate(""), setSelectedcategory();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(home_default, { userId: loaderData, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_antd6.Breadcrumb,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Breadcrumb.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, !1, {
            fileName: "app/routes/user/dashboard/$dashboard.jsx",
            lineNumber: 127,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Breadcrumb.Item, { children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/user/dashboard/$dashboard.jsx",
            lineNumber: 128,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/dashboard/$dashboard.jsx",
        lineNumber: 123,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Title5,
        {
          level: 3,
          style: { margin: "0 0 20px 0px" },
          children: "User Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/dashboard/$dashboard.jsx",
          lineNumber: 131,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_antd6.Row,
        {
          gutter: [16, 16],
          className: "row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_antd6.Col,
              {
                sm: 24,
                md: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Tooltip, { title: "Total amount of all expenses.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Card, { className: "dashboard-expense", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  import_antd6.Row,
                  {
                    align: "middle",
                    justify: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Col, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title5, { level: 5, children: "Total Expense" }, void 0, !1, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 149,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title5, { level: 2, children: [
                          "\u20B9 ",
                          totalExpense
                        ] }, void 0, !0, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 150,
                          columnNumber: 12
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 148,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Col, { style: { display: "flex" }, children: [
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                          "img",
                          {
                            src: expense_default,
                            width: 70,
                            alt: ""
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 154,
                            columnNumber: 12
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 145,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 144,
                  columnNumber: 9
                }, this) }, void 0, !1, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 143,
                  columnNumber: 8
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 139,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_antd6.Col,
              {
                sm: 24,
                md: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Tooltip, { title: "Total number of expenses.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Card, { className: "dashboard-expense", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  import_antd6.Row,
                  {
                    align: "middle",
                    justify: "space-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Col, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title5, { level: 5, children: "Number of Expenses" }, void 0, !1, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 175,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Title5, { level: 2, children: expenseCount() }, void 0, !1, {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 176,
                          columnNumber: 12
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Col, { style: { display: "flex" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                        "img",
                        {
                          src: TotalExpense_default,
                          width: 70,
                          alt: ""
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/user/dashboard/$dashboard.jsx",
                          lineNumber: 179,
                          columnNumber: 12
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/user/dashboard/$dashboard.jsx",
                        lineNumber: 178,
                        columnNumber: 11
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 171,
                    columnNumber: 10
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 170,
                  columnNumber: 9
                }, this) }, void 0, !1, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 169,
                  columnNumber: 8
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 165,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_antd6.Col,
              {
                sm: 24,
                lg: 10,
                xl: 10,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Card, { style: card, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    Title5,
                    {
                      level: 4,
                      style: { marginTop: "10px" },
                      children: "Category Summary"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 194,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(chart_default, { expenseList }, void 0, !1, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 200,
                    columnNumber: 10
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 199,
                    columnNumber: 9
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 193,
                  columnNumber: 8
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                lineNumber: 189,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              import_antd6.Col,
              {
                sm: 24,
                lg: 14,
                xl: 14,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_antd6.Card, { style: card, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    Title5,
                    {
                      level: 4,
                      style: { marginTop: "10px" },
                      children: "Expense Summary"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 209,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    import_antd6.Row,
                    {
                      align: "middle",
                      gutter: [16, 16],
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                          import_antd6.Col,
                          {
                            xs: 24,
                            sm: 7,
                            md: 5,
                            xl: 6,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                              import_antd6.DatePicker,
                              {
                                placeholder: "Select Month",
                                onChange: onChangeDate,
                                picker: "month"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 217,
                            columnNumber: 10
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                          import_antd6.Col,
                          {
                            xs: 24,
                            md: 7,
                            lg: 7,
                            xl: 9,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                              import_antd6.Select,
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
                              !1,
                              {
                                fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                lineNumber: 233,
                                columnNumber: 11
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/user/dashboard/$dashboard.jsx",
                            lineNumber: 228,
                            columnNumber: 10
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                          import_antd6.Col,
                          {
                            xs: 24,
                            md: 10,
                            xl: 8,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                                import_antd6.Button,
                                {
                                  type: "primary",
                                  htmlType: "apply",
                                  onClick: handleData,
                                  children: "Apply"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                                  lineNumber: 247,
                                  columnNumber: 11
                                },
                                this
                              ),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                                import_antd6.Button,
                                {
                                  type: "primary",
                                  onClick: handleReset,
                                  htmlType: "reset",
                                  children: "Reset"
                                },
                                void 0,
                                !1,
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
                          !0,
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
                    !0,
                    {
                      fileName: "app/routes/user/dashboard/$dashboard.jsx",
                      lineNumber: 214,
                      columnNumber: 9
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { marginTop: "40px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(chart2_default, { expenseList: filterData }, void 0, !1, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 262,
                    columnNumber: 10
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/user/dashboard/$dashboard.jsx",
                    lineNumber: 261,
                    columnNumber: 9
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/user/dashboard/$dashboard.jsx",
                  lineNumber: 208,
                  columnNumber: 8
                }, this)
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/routes/user/dashboard/$dashboard.jsx",
          lineNumber: 136,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/user/dashboard/$dashboard.jsx",
      lineNumber: 130,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user/dashboard/$dashboard.jsx",
    lineNumber: 122,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/user/dashboard/$dashboard.jsx",
    lineNumber: 121,
    columnNumber: 3
  }, this);
}, dashboard_default = Dashboard;

// app/routes/user/reports/$reports.jsx
var reports_exports = {};
__export(reports_exports, {
  default: () => reports_default,
  loader: () => loader5
});
var import_react14 = require("react"), import_react15 = require("@remix-run/react"), import_icons5 = require("@ant-design/icons");
var import_antd7 = require("antd"), import_react_highlight_words2 = __toESM(require("react-highlight-words"));
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), { Title: Title6 } = import_antd7.Typography;
async function loader5({ request, params }) {
  await requireUserId(request);
  let id2 = params.reports;
  return await getExpenseByUserId(id2);
}
var Report = () => {
  let loaderData = (0, import_react15.useLoaderData)(), [expenses, setExpenses] = (0, import_react14.useState)([]);
  (0, import_react14.useEffect)(() => {
    var _a;
    let data = (_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.expenses;
    setExpenses(data);
  }, [loaderData]);
  let [searchText, setSearchText] = (0, import_react14.useState)(""), [searchedColumn, setSearchedColumn] = (0, import_react14.useState)(""), searchInput = (0, import_react14.useRef)(null), handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm(), setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
  }, handleReset = (clearFilters) => {
    clearFilters(), setSearchText("");
  }, getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        style: {
          padding: 8
        },
        onKeyDown: (e) => e.stopPropagation(),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            import_antd7.Input,
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
            !1,
            {
              fileName: "app/routes/user/reports/$reports.jsx",
              lineNumber: 60,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd7.Space, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Button,
              {
                type: "primary",
                onClick: () => handleSearch(selectedKeys, confirm, dataIndex),
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_icons5.SearchOutlined, {}, void 0, !1, {
                  fileName: "app/routes/user/reports/$reports.jsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                size: "small",
                children: "Search"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 74,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Button,
              {
                onClick: () => clearFilters && handleReset(clearFilters),
                size: "small",
                type: "primary",
                children: "Reset"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 81,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Button,
              {
                size: "small",
                type: "primary",
                onClick: () => {
                  confirm({
                    closeDropdown: !1
                  }), setSearchText(selectedKeys[0]), setSearchedColumn(dataIndex);
                },
                children: "Filter"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 87,
                columnNumber: 6
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Button,
              {
                type: "primary",
                size: "small",
                onClick: () => {
                  close();
                },
                children: "close"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 99,
                columnNumber: 6
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 73,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 55,
        columnNumber: 4
      },
      this
    ),
    filterIcon: (filtered) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_icons5.SearchOutlined,
      {
        style: {
          color: filtered ? "#1890ff" : void 0
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 111,
        columnNumber: 4
      },
      this
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      visible && setTimeout(() => {
        var _a;
        return (_a = searchInput.current) == null ? void 0 : _a.select();
      }, 100);
    },
    render: (text) => searchedColumn === dataIndex ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_react_highlight_words2.default,
      {
        highlightStyle: {
          backgroundColor: "#ffc069",
          padding: 0
        },
        searchWords: [searchText],
        autoEscape: !0,
        textToHighlight: text ? text.toString() : ""
      },
      void 0,
      !1,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 126,
        columnNumber: 5
      },
      this
    ) : text
  }), columns = [
    {
      title: "Item Name",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend", "ascend"],
      render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { children: text }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(home_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_antd7.Breadcrumb,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd7.Breadcrumb.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, !1, {
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 177,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd7.Breadcrumb.Item, { children: "Reports" }, void 0, !1, {
            fileName: "app/routes/user/reports/$reports.jsx",
            lineNumber: 178,
            columnNumber: 6
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/reports/$reports.jsx",
        lineNumber: 173,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_antd7.Row,
        {
          justify: "space-between",
          align: "middle",
          style: { marginBottom: 20 },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Col,
              {
                sm: 12,
                xl: 12,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
                  Title6,
                  {
                    level: 3,
                    style: { marginTop: 0 },
                    children: "Download Expense Report"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/user/reports/$reports.jsx",
                    lineNumber: 188,
                    columnNumber: 8
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/reports/$reports.jsx",
                lineNumber: 185,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
              import_antd7.Col,
              {
                sm: 12,
                xl: 12,
                style: { textAlign: "right" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ReportDownload_default, { expenses }, void 0, !1, {
                  fileName: "app/routes/user/reports/$reports.jsx",
                  lineNumber: 199,
                  columnNumber: 8
                }, this)
              },
              void 0,
              !1,
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
        !0,
        {
          fileName: "app/routes/user/reports/$reports.jsx",
          lineNumber: 181,
          columnNumber: 6
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_antd7.Table,
        {
          columns,
          dataSource: expenses
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/reports/$reports.jsx",
          lineNumber: 203,
          columnNumber: 6
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/user/reports/$reports.jsx",
      lineNumber: 180,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user/reports/$reports.jsx",
    lineNumber: 172,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/user/reports/$reports.jsx",
    lineNumber: 171,
    columnNumber: 3
  }, this);
}, reports_default = Report;

// app/routes/user/setting/$setting.jsx
var setting_exports = {};
__export(setting_exports, {
  action: () => action4,
  default: () => setting_default,
  loader: () => loader6
});
var import_react16 = require("react");
var import_antd8 = require("antd");
var import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), { Title: Title7, Text: Text3 } = import_antd8.Typography;
async function loader6({ request }) {
  return await requireUserId(request), null;
}
async function action4({ request, params }) {
  let id2 = params.setting, form = await request.formData(), firstname = form.get("firstname"), lastname = form.get("lastname"), password = form.get("password"), cpassword = form.get("cpassword"), formErrors = {
    firstname: validatefirst(firstname),
    lastname: validatelast(lastname),
    password: validatePassword(password),
    cpassword: validateConfirmPassword(password, cpassword)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "PUT":
      return await updateProfile(id2, firstname, lastname, password, cpassword);
    default:
      return "invalid form data";
  }
}
var Setting = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react17.useActionData)(), [inputs, setInputs] = (0, import_react16.useState)({
    firstname: "",
    lastname: "",
    password: "",
    cpassword: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(home_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      import_antd8.Breadcrumb,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd8.Breadcrumb.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, !1, {
            fileName: "app/routes/user/setting/$setting.jsx",
            lineNumber: 69,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd8.Breadcrumb.Item, { children: "Settings" }, void 0, !1, {
            fileName: "app/routes/user/setting/$setting.jsx",
            lineNumber: 70,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/user/setting/$setting.jsx",
        lineNumber: 65,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Title7,
        {
          level: 3,
          style: { marginTop: 0 },
          children: "Profile Settings"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/user/setting/$setting.jsx",
          lineNumber: 73,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react17.Form, { method: "PUT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_antd8.Row,
        {
          gutter: [16, 16],
          className: "row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd8.Col,
              {
                sm: 24,
                xl: 12,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_antd8.Input,
                    {
                      name: "firstname",
                      placeholder: "First Name",
                      required: !0,
                      size: "large",
                      value: inputs.firstname,
                      onChange: handleChange
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 85,
                      columnNumber: 8
                    },
                    this
                  ),
                  (_a = actionData == null ? void 0 : actionData.formErrors) != null && _a.firstname ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, { type: "danger", children: (_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.firstname }, void 0, !1, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 82,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd8.Col,
              {
                sm: 24,
                xl: 12,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_antd8.Input,
                    {
                      name: "lastname",
                      placeholder: "last Name",
                      required: !0,
                      size: "large",
                      value: inputs.lastname,
                      onChange: handleChange
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 100,
                      columnNumber: 8
                    },
                    this
                  ),
                  (_c = actionData == null ? void 0 : actionData.formErrors) != null && _c.lastname ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, { type: "danger", children: (_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.lastname }, void 0, !1, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 97,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd8.Col,
              {
                sm: 24,
                xl: 12,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_antd8.Input,
                    {
                      name: "password",
                      placeholder: "Password",
                      required: !0,
                      size: "large",
                      type: "password",
                      autoComplete: "off",
                      value: inputs.password,
                      onChange: handleChange
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 115,
                      columnNumber: 8
                    },
                    this
                  ),
                  (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.password }, void 0, !1, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 112,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd8.Col,
              {
                sm: 24,
                xl: 12,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    import_antd8.Input,
                    {
                      name: "cpassword",
                      placeholder: "Confirm Password",
                      required: !0,
                      size: "large",
                      value: inputs.cpassword,
                      onChange: handleChange,
                      type: "password",
                      autoComplete: "off"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 132,
                      columnNumber: 8
                    },
                    this
                  ),
                  (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.cpassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Text3, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.cpassword }, void 0, !1, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 129,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd8.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd8.Button,
              {
                type: "primary",
                htmlType: "submit",
                size: "large",
                style: btnCat,
                children: "Update Profile"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 147,
                columnNumber: 8
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/user/setting/$setting.jsx",
              lineNumber: 146,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/user/setting/$setting.jsx",
          lineNumber: 79,
          columnNumber: 6
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/user/setting/$setting.jsx",
        lineNumber: 78,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/user/setting/$setting.jsx",
      lineNumber: 72,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/user/setting/$setting.jsx",
    lineNumber: 64,
    columnNumber: 3
  }, this);
}, setting_default = Setting;

// app/routes/password/forgot.jsx
var forgot_exports = {};
__export(forgot_exports, {
  action: () => action5,
  default: () => Forgot,
  meta: () => meta3
});
var import_antd9 = require("antd"), import_icons6 = require("@ant-design/icons"), import_react18 = require("@remix-run/react"), import_react19 = require("react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), { Title: Title8, Paragraph, Text: Text4 } = import_antd9.Typography;
async function action5({ request }) {
  let email = (await request.formData()).get("email"), formErrors = {
    email: validateEmail(email)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST":
      return await forgotPassword({ email });
    default:
      return "invalid forgot password data";
  }
}
var meta3 = () => ({
  title: "Forgot Password"
});
function Forgot() {
  var _a, _b, _c, _d, _e;
  let actionData = (0, import_react18.useActionData)(), [inputs, setInputs] = (0, import_react19.useState)({
    email: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_antd9.Row,
    {
      justify: "center",
      align: "middle",
      style: { height: "100vh" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_antd9.Col,
        {
          sm: 16,
          xl: 10,
          children: [
            (_a = actionData == null ? void 0 : actionData.mydata) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_antd9.Alert,
              {
                type: "success",
                message: (_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 57,
                columnNumber: 6
              },
              this
            ) : null,
            (_c = actionData == null ? void 0 : actionData.error) != null && _c.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_antd9.Alert,
              {
                type: "error",
                message: "Could not find any user for this account!"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 63,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "main-component login", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  import_antd9.Avatar,
                  {
                    style: {
                      backgroundColor: "#9c27b0",
                      verticalAlign: "middle"
                    },
                    size: "large",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_icons6.UserOutlined, { size: "large" }, void 0, !1, {
                      fileName: "app/routes/password/forgot.jsx",
                      lineNumber: 77,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/password/forgot.jsx",
                    lineNumber: 71,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                  Title8,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Forgot password"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/password/forgot.jsx",
                    lineNumber: 79,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 70,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text4, { style: { marginBottom: "8px", display: "block" }, children: "Enter your registered email to reset your password." }, void 0, !1, {
                fileName: "app/routes/password/forgot.jsx",
                lineNumber: 85,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                import_react18.Form,
                {
                  method: "POST",
                  style: { width: "100%" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                    import_antd9.Row,
                    {
                      gutter: [16, 16],
                      className: "row",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                          import_antd9.Col,
                          {
                            sm: 24,
                            xl: 24,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                                import_antd9.Input,
                                {
                                  name: "email",
                                  placeholder: "Email Address",
                                  required: !0,
                                  size: "large",
                                  value: inputs.email,
                                  onChange: handleChange
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/routes/password/forgot.jsx",
                                  lineNumber: 97,
                                  columnNumber: 10
                                },
                                this
                              ),
                              (_d = actionData == null ? void 0 : actionData.formErrors) != null && _d.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Text4, { type: "danger", children: (_e = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _e.email }, void 0, !1, {
                                fileName: "app/routes/password/forgot.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                              }, this) : null
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/password/forgot.jsx",
                            lineNumber: 94,
                            columnNumber: 9
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                          import_antd9.Col,
                          {
                            sm: 24,
                            xl: 24,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                              import_antd9.Button,
                              {
                                type: "primary",
                                htmlType: "submit",
                                style: btnCat,
                                size: "large",
                                children: "Reset Password"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/password/forgot.jsx",
                                lineNumber: 112,
                                columnNumber: 10
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/password/forgot.jsx",
                            lineNumber: 109,
                            columnNumber: 9
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_antd9.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Paragraph, { strong: !0, children: [
                          "New here?",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                            import_antd9.Button,
                            {
                              type: "link",
                              href: "/",
                              children: "Sign Up"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/password/forgot.jsx",
                              lineNumber: 123,
                              columnNumber: 11
                            },
                            this
                          )
                        ] }, void 0, !0, {
                          fileName: "app/routes/password/forgot.jsx",
                          lineNumber: 121,
                          columnNumber: 10
                        }, this) }, void 0, !1, {
                          fileName: "app/routes/password/forgot.jsx",
                          lineNumber: 120,
                          columnNumber: 9
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/routes/password/forgot.jsx",
                      lineNumber: 91,
                      columnNumber: 8
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/password/forgot.jsx",
                  lineNumber: 88,
                  columnNumber: 7
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 69,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/routes/password/forgot.jsx",
              lineNumber: 68,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/password/forgot.jsx",
          lineNumber: 53,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/password/forgot.jsx",
      lineNumber: 49,
      columnNumber: 3
    },
    this
  );
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action6,
  default: () => Signup,
  meta: () => meta4
});
var import_react20 = require("react"), import_react21 = require("@remix-run/react");
var import_antd10 = require("antd"), import_icons7 = require("@ant-design/icons"), import_js_cookie3 = __toESM(require("js-cookie"));
var import_node3 = require("@remix-run/node"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), { Title: Title9, Paragraph: Paragraph2, Text: Text5 } = import_antd10.Typography;
async function action6({ request }) {
  let form = await request.formData(), firstname = form.get("firstname"), lastname = form.get("lastname"), email = form.get("email"), password = form.get("password"), cpassword = form.get("cpassword"), formErrors = {
    firstname: validatefirst(firstname),
    lastname: validatelast(lastname),
    email: validateEmail(email),
    password: validatePassword(password),
    cpassword: validateConfirmPassword(password, cpassword)
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };
  switch (request.method) {
    case "POST": {
      let userData = await registerUser(
        firstname,
        lastname,
        email,
        password,
        cpassword
      );
      if (!userData)
        return (0, import_node3.json)(
          { errors: "Fail to register!" },
          { status: 400 }
        );
      let userId = userData.user._id, redirectTo = `/user/dashboard/${userData.user._id}`;
      return createUserSession(request, userId, redirectTo);
    }
    default:
      return "invalid form data";
  }
}
var meta4 = () => ({
  title: "Sign Up"
});
function Signup() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let actionData = (0, import_react21.useActionData)(), navigate = (0, import_react21.useNavigate)(), userId = (_a = actionData == null ? void 0 : actionData.myData) == null ? void 0 : _a.user._id, [inputs, setInputs] = (0, import_react20.useState)({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  });
  (0, import_react20.useEffect)(() => userId == null ? navigate("/") : (import_js_cookie3.default.set("id", userId), navigate(`/user/dashboard/${userId}`)), [navigate, userId]);
  let handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_antd10.Row,
    {
      justify: "center",
      align: "middle",
      style: { height: "100vh" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_antd10.Col,
        {
          sm: 16,
          xl: 10,
          children: [
            (_b = actionData == null ? void 0 : actionData.myData) != null && _b.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_antd10.Alert,
              {
                message: (_c = actionData == null ? void 0 : actionData.myData) == null ? void 0 : _c.message,
                type: "success"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.jsx",
                lineNumber: 106,
                columnNumber: 6
              },
              this
            ) : null,
            (_d = actionData == null ? void 0 : actionData.error) != null && _d.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              import_antd10.Alert,
              {
                message: "User Already Exits, Please login",
                type: "error"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/index.jsx",
                lineNumber: 112,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "main-component", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                  import_antd10.Avatar,
                  {
                    style: {
                      backgroundColor: "#9c27b0",
                      verticalAlign: "middle"
                    },
                    size: "large",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_icons7.UserOutlined, { size: "large" }, void 0, !1, {
                      fileName: "app/routes/index.jsx",
                      lineNumber: 126,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 120,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                  Title9,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Sign up"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 128,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/index.jsx",
                lineNumber: 119,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react21.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                import_antd10.Row,
                {
                  gutter: [16, 16],
                  className: "row",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        xs: 24,
                        sm: 12,
                        xl: 12,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Input,
                            {
                              name: "firstname",
                              placeholder: "First Name",
                              required: !0,
                              size: "large",
                              value: inputs.firstname,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 142,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.firstname ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text5, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.firstname }, void 0, !1, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        xs: 24,
                        sm: 12,
                        xl: 12,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Input,
                            {
                              name: "lastname",
                              placeholder: "last Name",
                              required: !0,
                              size: "large",
                              value: inputs.lastname,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 160,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.lastname ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text5, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.lastname }, void 0, !1, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Input,
                            {
                              name: "email",
                              placeholder: "Email Address",
                              required: !0,
                              size: "large",
                              value: inputs.email,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 177,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_i = actionData == null ? void 0 : actionData.formErrors) != null && _i.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text5, { type: "danger", children: (_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.email }, void 0, !1, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 186,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Input,
                            {
                              name: "password",
                              placeholder: "Password",
                              required: !0,
                              autoComplete: "off",
                              size: "large",
                              type: "password",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 192,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_k = actionData == null ? void 0 : actionData.formErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text5, { type: "danger", children: (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.password }, void 0, !1, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 203,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Input,
                            {
                              name: "cpassword",
                              placeholder: "Confirm Password",
                              required: !0,
                              autoComplete: "off",
                              type: "password",
                              size: "large",
                              value: inputs.cpassword,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 211,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_m = actionData == null ? void 0 : actionData.formErrors) != null && _m.cpassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Text5, { type: "danger", children: (_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.cpassword }, void 0, !1, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 222,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 208,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                          import_antd10.Button,
                          {
                            type: "primary",
                            htmlType: "submit",
                            style: btnCat,
                            size: "large",
                            children: "Sign Up"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 230,
                            columnNumber: 10
                          },
                          this
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                      import_antd10.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Paragraph2, { strong: !0, children: [
                          "Already have an account?",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                            import_antd10.Button,
                            {
                              type: "link",
                              href: "/login",
                              children: "Sign In"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 243,
                              columnNumber: 11
                            },
                            this
                          )
                        ] }, void 0, !0, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 241,
                          columnNumber: 10
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 238,
                        columnNumber: 9
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 135,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/index.jsx",
                lineNumber: 134,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/index.jsx",
              lineNumber: 118,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 117,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/index.jsx",
          lineNumber: 102,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.jsx",
      lineNumber: 98,
      columnNumber: 3
    },
    this
  );
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login,
  loader: () => loader7,
  meta: () => meta5
});
var import_node4 = require("@remix-run/node"), import_antd11 = require("antd"), import_icons8 = require("@ant-design/icons"), import_react22 = require("@remix-run/react"), import_react23 = require("react"), import_js_cookie4 = require("js-cookie");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), { Title: Title10, Paragraph: Paragraph3, Text: Text6 } = import_antd11.Typography;
async function loader7({ request }) {
  let id2 = getUserId();
  return await getUser(request) ? (0, import_node4.redirect)(`/user/dashboard/${id2}`) : null;
}
async function action7({ request }) {
  let form = await request.formData(), email = form.get("email"), password = form.get("password");
  switch (request.method) {
    case "POST": {
      let userData = await loginUser(email, password);
      if (!userData)
        return (0, import_node4.json)(
          { errors: { email: "Invalid email or password", password: null } },
          { status: 400 }
        );
      let userId = userData.user._id, redirectTo = `/user/dashboard/${userData.user._id}`;
      return createUserSession(request, userId, redirectTo);
    }
    default:
      return "invalid login form data";
  }
}
var meta5 = () => ({
  title: "Login"
});
function Login() {
  var _a, _b, _c;
  let actionData = (0, import_react22.useActionData)(), [inputs, setInputs] = (0, import_react23.useState)({
    email: "",
    password: ""
  }), handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_antd11.Row,
    {
      justify: "center",
      align: "middle",
      style: { height: "100vh" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_antd11.Col,
        {
          sm: 16,
          xl: 10,
          children: [
            actionData != null && actionData.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_antd11.Alert,
              {
                message: actionData == null ? void 0 : actionData.message,
                type: "success"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 79,
                columnNumber: 6
              },
              this
            ) : null,
            (_a = actionData == null ? void 0 : actionData.error) != null && _a.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_antd11.Alert,
              {
                message: "Please provide a valid email address and password.",
                type: "error"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 85,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "main-component login", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  import_antd11.Avatar,
                  {
                    style: {
                      backgroundColor: "#9c27b0",
                      verticalAlign: "middle"
                    },
                    size: "large",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_icons8.UserOutlined, { size: "large" }, void 0, !1, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 100,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 94,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  Title10,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Login"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 102,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/login.jsx",
                lineNumber: 93,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react22.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_antd11.Row,
                {
                  gutter: [16, 16],
                  className: "row",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      import_antd11.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            import_antd11.Input,
                            {
                              name: "email",
                              placeholder: "Email Address",
                              required: !0,
                              size: "large",
                              value: inputs.email,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 115,
                              columnNumber: 10
                            },
                            this
                          ),
                          (_b = actionData == null ? void 0 : actionData.formErrors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Text6, { type: "danger", children: (_c = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _c.email }, void 0, !1, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 124,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 112,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      import_antd11.Col,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            import_antd11.Input,
                            {
                              name: "password",
                              placeholder: "Password",
                              required: !0,
                              size: "large",
                              type: "password",
                              autoComplete: "off",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 130,
                              columnNumber: 10
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_antd11.Row, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            import_antd11.Col,
                            {
                              span: 8,
                              align: "left",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Paragraph3, { strong: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                                import_antd11.Button,
                                {
                                  type: "link",
                                  href: "/password/forgot",
                                  children: "Forgot Your Password"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/routes/login.jsx",
                                  lineNumber: 145,
                                  columnNumber: 13
                                },
                                this
                              ) }, void 0, !1, {
                                fileName: "app/routes/login.jsx",
                                lineNumber: 144,
                                columnNumber: 12
                              }, this)
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 141,
                              columnNumber: 11
                            },
                            this
                          ) }, void 0, !1, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 140,
                            columnNumber: 10
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_antd11.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      import_antd11.Button,
                      {
                        type: "primary",
                        htmlType: "submit",
                        size: "large",
                        style: btnCat,
                        children: "Login"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 155,
                        columnNumber: 10
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 154,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_antd11.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                      Paragraph3,
                      {
                        strong: !0,
                        style: { marginBottom: 0 },
                        children: [
                          "Don't have an account?",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                            import_antd11.Button,
                            {
                              type: "link",
                              href: "/",
                              children: "Sign Up"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 168,
                              columnNumber: 11
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 164,
                        columnNumber: 10
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 163,
                      columnNumber: 9
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 109,
                  columnNumber: 8
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/login.jsx",
                lineNumber: 108,
                columnNumber: 7
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/login.jsx",
              lineNumber: 92,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.jsx",
              lineNumber: 91,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/login.jsx",
          lineNumber: 75,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/login.jsx",
      lineNumber: 71,
      columnNumber: 3
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1a3d8a85", entry: { module: "/build/entry.client-3HGRSVYA.js", imports: ["/build/_shared/chunk-NOX3DQZ3.js", "/build/_shared/chunk-JR6OZEIM.js", "/build/_shared/chunk-WQGPB5ZT.js", "/build/_shared/chunk-JE7OEZ56.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ADRKE44D.js", imports: ["/build/_shared/chunk-YFZKLCXR.js", "/build/_shared/chunk-32CWOV4L.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EHYM6RWL.js", imports: ["/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/layouts/home": { id: "routes/layouts/home", parentId: "root", path: "layouts/home", index: void 0, caseSensitive: void 0, module: "/build/routes/layouts/home-PV2EIZL5.js", imports: ["/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-YJQMYPI3.js", imports: ["/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password/forgot": { id: "routes/password/forgot", parentId: "root", path: "password/forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/password/forgot-RWN7JS27.js", imports: ["/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/password/reset/$id/$reset": { id: "routes/password/reset/$id/$reset", parentId: "root", path: "password/reset/:id/:reset", index: void 0, caseSensitive: void 0, module: "/build/routes/password/reset/$id/$reset-NR7VWSQE.js", imports: ["/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/categories/$categories": { id: "routes/user/categories/$categories", parentId: "root", path: "user/categories/:categories", index: void 0, caseSensitive: void 0, module: "/build/routes/user/categories/$categories-FOTTNGHC.js", imports: ["/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/dashboard/$dashboard": { id: "routes/user/dashboard/$dashboard", parentId: "root", path: "user/dashboard/:dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/user/dashboard/$dashboard-QV3HDPB4.js", imports: ["/build/_shared/chunk-CZGVDUQK.js", "/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js", "/build/_shared/chunk-RU3ZUEQM.js", "/build/_shared/chunk-QXJU3JI5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/dashboard/chart": { id: "routes/user/dashboard/chart", parentId: "root", path: "user/dashboard/chart", index: void 0, caseSensitive: void 0, module: "/build/routes/user/dashboard/chart-XLUN2FZB.js", imports: ["/build/_shared/chunk-CZGVDUQK.js", "/build/_shared/chunk-QXJU3JI5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/dashboard/chart2": { id: "routes/user/dashboard/chart2", parentId: "root", path: "user/dashboard/chart2", index: void 0, caseSensitive: void 0, module: "/build/routes/user/dashboard/chart2-XG65ODGE.js", imports: ["/build/_shared/chunk-RU3ZUEQM.js", "/build/_shared/chunk-QXJU3JI5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/reports/$reports": { id: "routes/user/reports/$reports", parentId: "root", path: "user/reports/:reports", index: void 0, caseSensitive: void 0, module: "/build/routes/user/reports/$reports-6W3PMEGH.js", imports: ["/build/_shared/chunk-FBA2TD4L.js", "/build/_shared/chunk-YA4LSDRY.js", "/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/reports/ReportDownload": { id: "routes/user/reports/ReportDownload", parentId: "root", path: "user/reports/ReportDownload", index: void 0, caseSensitive: void 0, module: "/build/routes/user/reports/ReportDownload-N47F5BZO.js", imports: ["/build/_shared/chunk-YA4LSDRY.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/setting/$setting": { id: "routes/user/setting/$setting", parentId: "root", path: "user/setting/:setting", index: void 0, caseSensitive: void 0, module: "/build/routes/user/setting/$setting-4F7UF5LX.js", imports: ["/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/styles": { id: "routes/user/styles", parentId: "root", path: "user/styles", index: void 0, caseSensitive: void 0, module: "/build/routes/user/styles-SUGAYHIC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/user/transaction/$transaction": { id: "routes/user/transaction/$transaction", parentId: "root", path: "user/transaction/:transaction", index: void 0, caseSensitive: void 0, module: "/build/routes/user/transaction/$transaction-RALEEXIP.js", imports: ["/build/_shared/chunk-FBA2TD4L.js", "/build/_shared/chunk-QHQDGXC7.js", "/build/_shared/chunk-EWUXHAI4.js", "/build/_shared/chunk-6D5NUV3L.js", "/build/_shared/chunk-JRC4MRFV.js", "/build/_shared/chunk-DKJEZQLW.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/validation": { id: "routes/validation", parentId: "root", path: "validation", index: void 0, caseSensitive: void 0, module: "/build/routes/validation-BEU4QT4Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1A3D8A85.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/user/transaction/$transaction": {
    id: "routes/user/transaction/$transaction",
    parentId: "root",
    path: "user/transaction/:transaction",
    index: void 0,
    caseSensitive: void 0,
    module: transaction_exports
  },
  "routes/user/categories/$categories": {
    id: "routes/user/categories/$categories",
    parentId: "root",
    path: "user/categories/:categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/user/reports/ReportDownload": {
    id: "routes/user/reports/ReportDownload",
    parentId: "root",
    path: "user/reports/ReportDownload",
    index: void 0,
    caseSensitive: void 0,
    module: ReportDownload_exports
  },
  "routes/password/reset/$id/$reset": {
    id: "routes/password/reset/$id/$reset",
    parentId: "root",
    path: "password/reset/:id/:reset",
    index: void 0,
    caseSensitive: void 0,
    module: reset_exports
  },
  "routes/user/dashboard/$dashboard": {
    id: "routes/user/dashboard/$dashboard",
    parentId: "root",
    path: "user/dashboard/:dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/user/dashboard/chart2": {
    id: "routes/user/dashboard/chart2",
    parentId: "root",
    path: "user/dashboard/chart2",
    index: void 0,
    caseSensitive: void 0,
    module: chart2_exports
  },
  "routes/user/reports/$reports": {
    id: "routes/user/reports/$reports",
    parentId: "root",
    path: "user/reports/:reports",
    index: void 0,
    caseSensitive: void 0,
    module: reports_exports
  },
  "routes/user/setting/$setting": {
    id: "routes/user/setting/$setting",
    parentId: "root",
    path: "user/setting/:setting",
    index: void 0,
    caseSensitive: void 0,
    module: setting_exports
  },
  "routes/user/dashboard/chart": {
    id: "routes/user/dashboard/chart",
    parentId: "root",
    path: "user/dashboard/chart",
    index: void 0,
    caseSensitive: void 0,
    module: chart_exports
  },
  "routes/password/forgot": {
    id: "routes/password/forgot",
    parentId: "root",
    path: "password/forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/layouts/home": {
    id: "routes/layouts/home",
    parentId: "root",
    path: "layouts/home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/user/styles": {
    id: "routes/user/styles",
    parentId: "root",
    path: "user/styles",
    index: void 0,
    caseSensitive: void 0,
    module: styles_exports
  },
  "routes/validation": {
    id: "routes/validation",
    parentId: "root",
    path: "validation",
    index: void 0,
    caseSensitive: void 0,
    module: validation_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
