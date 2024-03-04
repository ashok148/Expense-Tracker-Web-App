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
} from "/build/_shared/chunk-D3KJI62M.js";
import {
  UserOutlined_default,
  alert_default,
  avatar_default,
  button_default,
  col_default,
  input_default,
  row_default,
  typography_default
} from "/build/_shared/chunk-V6IPQRBL.js";
import "/build/_shared/chunk-AWUHEWV2.js";
import "/build/_shared/chunk-32CWOV4L.js";
import "/build/_shared/chunk-AWTQJBQZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-R4SZSUKO.js";
import {
  __toESM
} from "/build/_shared/chunk-O7YBTOWT.js";

// app/routes/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title, Paragraph, Text } = typography_default;
var meta = () => {
  return {
    title: "Sign Up"
  };
};
function Signup() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const actionData = useActionData();
  const navigate = useNavigate();
  const userId = (_a = actionData == null ? void 0 : actionData.myData) == null ? void 0 : _a.user._id;
  const [inputs, setInputs] = (0, import_react.useState)({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  });
  (0, import_react.useEffect)(() => {
    if (userId == void 0) {
      return navigate("/");
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
            ((_b = actionData == null ? void 0 : actionData.myData) == null ? void 0 : _b.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: (_c = actionData == null ? void 0 : actionData.myData) == null ? void 0 : _c.message,
                type: "success"
              },
              void 0,
              false,
              {
                fileName: "app/routes/index.jsx",
                lineNumber: 106,
                columnNumber: 6
              },
              this
            ) : null,
            ((_d = actionData == null ? void 0 : actionData.error) == null ? void 0 : _d.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: "User Already Exits, Please login",
                type: "error"
              },
              void 0,
              false,
              {
                fileName: "app/routes/index.jsx",
                lineNumber: 112,
                columnNumber: 6
              },
              this
            ) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-user-component", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "main-component", children: [
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
                      fileName: "app/routes/index.jsx",
                      lineNumber: 126,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 120,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Title,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Sign up"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.jsx",
                    lineNumber: 128,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/index.jsx",
                lineNumber: 119,
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
                        xs: 24,
                        sm: 12,
                        xl: 12,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            input_default,
                            {
                              name: "firstname",
                              placeholder: "First Name",
                              required: true,
                              size: "large",
                              value: inputs.firstname,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 142,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_e = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _e.firstname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.firstname }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        xs: 24,
                        sm: 12,
                        xl: 12,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            input_default,
                            {
                              name: "lastname",
                              placeholder: "last Name",
                              required: true,
                              size: "large",
                              value: inputs.lastname,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 160,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_g = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _g.lastname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.lastname }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 156,
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
                              fileName: "app/routes/index.jsx",
                              lineNumber: 177,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_i = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _i.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.email }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 186,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 174,
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
                              autoComplete: "off",
                              size: "large",
                              type: "password",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 192,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_k = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _k.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.password }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 203,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 189,
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
                              name: "cpassword",
                              placeholder: "Confirm Password",
                              required: true,
                              autoComplete: "off",
                              type: "password",
                              size: "large",
                              value: inputs.cpassword,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 211,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_m = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _m.cpassword) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.cpassword }, void 0, false, {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 222,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 208,
                        columnNumber: 9
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
                            type: "primary",
                            htmlType: "submit",
                            style: btnCat,
                            size: "large",
                            children: "Sign Up"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/index.jsx",
                            lineNumber: 230,
                            columnNumber: 10
                          },
                          this
                        )
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/index.jsx",
                        lineNumber: 227,
                        columnNumber: 9
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      col_default,
                      {
                        sm: 24,
                        xl: 24,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paragraph, { strong: true, children: [
                          "Already have an account?",
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            button_default,
                            {
                              type: "link",
                              href: "/login",
                              children: "Sign In"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/index.jsx",
                              lineNumber: 243,
                              columnNumber: 11
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "app/routes/index.jsx",
                          lineNumber: 241,
                          columnNumber: 10
                        }, this)
                      },
                      void 0,
                      false,
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
                true,
                {
                  fileName: "app/routes/index.jsx",
                  lineNumber: 135,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/index.jsx",
                lineNumber: 134,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/index.jsx",
              lineNumber: 118,
              columnNumber: 6
            }, this) }, void 0, false, {
              fileName: "app/routes/index.jsx",
              lineNumber: 117,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/index.jsx",
          lineNumber: 102,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/index.jsx",
      lineNumber: 98,
      columnNumber: 3
    },
    this
  );
}
export {
  Signup as default,
  meta
};
//# sourceMappingURL=/build/routes/index-WQ6GBNE6.js.map
