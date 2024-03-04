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

// app/routes/password/reset/$id/$reset.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title, Text } = typography_default;
var meta = () => {
  return {
    title: "Reset Password"
  };
};
function Reset() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  const navigate = useNavigate();
  const [inputs, setInputs] = (0, import_react2.useState)({
    password: "",
    cpassword: ""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  (0, import_react2.useEffect)(() => {
    var _a2;
    if ((_a2 = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a2.message) {
      navigate("/login");
    }
  }, [(_a = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _a.message]);
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
            ((_b = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _b.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: (_c = actionData == null ? void 0 : actionData.mydata) == null ? void 0 : _c.message,
                type: "success"
              },
              void 0,
              false,
              {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 69,
                columnNumber: 6
              },
              this
            ) : null,
            ((_d = actionData == null ? void 0 : actionData.error) == null ? void 0 : _d.message) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              alert_default,
              {
                message: "Fail to reset password!",
                type: "error"
              },
              void 0,
              false,
              {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 75,
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
                      fileName: "app/routes/password/reset/$id/$reset.jsx",
                      lineNumber: 90,
                      columnNumber: 9
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 84,
                    columnNumber: 8
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  Title,
                  {
                    level: 2,
                    style: { marginTop: "10px" },
                    children: "Reset Your Password"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/password/reset/$id/$reset.jsx",
                    lineNumber: 92,
                    columnNumber: 8
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 83,
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
                              name: "password",
                              placeholder: "Enter New Password",
                              required: true,
                              size: "large",
                              autoComplete: "off",
                              type: "password",
                              value: inputs.password,
                              onChange: handleChange
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/routes/password/reset/$id/$reset.jsx",
                              lineNumber: 105,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_e = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _e.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.password }, void 0, false, {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 102,
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
                              placeholder: "Confirm New Password",
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
                              fileName: "app/routes/password/reset/$id/$reset.jsx",
                              lineNumber: 124,
                              columnNumber: 10
                            },
                            this
                          ),
                          ((_g = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _g.cpassword) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.cpassword }, void 0, false, {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                          }, this) : null
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "app/routes/password/reset/$id/$reset.jsx",
                        lineNumber: 121,
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
                            children: "Update Password"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/password/reset/$id/$reset.jsx",
                            lineNumber: 143,
                            columnNumber: 10
                          },
                          this
                        )
                      },
                      void 0,
                      false,
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
                true,
                {
                  fileName: "app/routes/password/reset/$id/$reset.jsx",
                  lineNumber: 99,
                  columnNumber: 8
                },
                this
              ) }, void 0, false, {
                fileName: "app/routes/password/reset/$id/$reset.jsx",
                lineNumber: 98,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 82,
              columnNumber: 6
            }, this) }, void 0, false, {
              fileName: "app/routes/password/reset/$id/$reset.jsx",
              lineNumber: 81,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/password/reset/$id/$reset.jsx",
          lineNumber: 65,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/password/reset/$id/$reset.jsx",
      lineNumber: 61,
      columnNumber: 3
    },
    this
  );
}
var reset_default = Reset;
export {
  reset_default as default,
  meta
};
//# sourceMappingURL=/build/routes/password/reset/$id/$reset-NR7VWSQE.js.map
