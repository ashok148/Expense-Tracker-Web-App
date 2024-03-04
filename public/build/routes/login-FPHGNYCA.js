import {
  js_cookie_default
} from "/build/_shared/chunk-EWUXHAI4.js";
import {
  btnCat
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  Form,
  useActionData,
  useNavigate
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
  UserOutlined_default,
  alert_default,
  avatar_default,
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

// app/routes/login.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title, Paragraph, Text } = typography_default;
var meta = () => {
  return {
    title: "Login"
  };
};
function Login() {
  var _a, _b, _c;
  const actionData = useActionData();
  const navigate = useNavigate();
  const userId = actionData == null ? void 0 : actionData.user._id;
  const [inputs, setInputs] = (0, import_react2.useState)({
    email: "",
    password: ""
  });
  (0, import_react2.useEffect)(() => {
    if (userId == void 0) {
      return navigate("/login");
    } else {
      js_cookie_default.set("id", userId);
      return navigate(`/user/dashboard/${userId}`);
    }
  }, [navigate, userId]);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    row_default,
    {
      justify: "center",
      align: "middle",
      style: { height: "100vh" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        col_default,
        {
          sm: 16,
          xl: 10,
          children: [
            (actionData == null ? void 0 : actionData.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: actionData == null ? void 0 : actionData.message,
                type: "success"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 76,
                columnNumber: 6
              },
              this
            ) : null,
            ((_a = actionData == null ? void 0 : actionData.error) == null ? void 0 : _a.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: "Please provide a valid email address and password.",
                type: "error"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 82,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-component login", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  avatar_default,
                  {
                    style: {
                      backgroundColor: "#9c27b0",
                      verticalAlign: "middle"
                    },
                    size: "large",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserOutlined_default, { size: "large" }, void 0, false, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 97,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 91,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Title,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Login"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 99,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 90,
                columnNumber: 7
              }, this),
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
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            input_default,
                            {
                              name: "email",
                              placeholder: "Email Address",
                              required: true,
                              size: "large",
                              value: inputs.email,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 112,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_c = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _c.email }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 24,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            input_default,
                            {
                              name: "password",
                              placeholder: "Password",
                              required: true,
                              size: "large",
                              type: "password",
                              autoComplete: "off",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 127,
                              columnNumber: 10
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            col_default,
                            {
                              span: 8,
                              align: "left",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { strong: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                                button_default,
                                {
                                  type: "link",
                                  href: "/password/forgot",
                                  children: "Forgot Your Password"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/routes/login.jsx",
                                  lineNumber: 142,
                                  columnNumber: 13
                                },
                                this
                              ) }, void 0, false, {
                                fileName: "app/routes/login.jsx",
                                lineNumber: 141,
                                columnNumber: 12
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 138,
                              columnNumber: 11
                            },
                            this
                          ) }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 137,
                            columnNumber: 10
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      button_default,
                      {
                        type: "primary",
                        htmlType: "submit",
                        size: "large",
                        style: btnCat,
                        children: "Login"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 152,
                        columnNumber: 10
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 151,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(col_default, { span: 24, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Paragraph,
                      {
                        strong: true,
                        style: { marginBottom: 0 },
                        children: [
                          "Don't have an account?",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            button_default,
                            {
                              type: "link",
                              href: "/",
                              children: "Sign Up"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/login.jsx",
                              lineNumber: 165,
                              columnNumber: 11
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 161,
                        columnNumber: 10
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 160,
                      columnNumber: 9
                    }, this)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 106,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 105,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/login.jsx",
              lineNumber: 89,
              columnNumber: 6
            }, this) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 88,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/login.jsx",
          lineNumber: 72,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/login.jsx",
      lineNumber: 68,
      columnNumber: 3
    },
    this
  );
}
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-FPHGNYCA.js.map
