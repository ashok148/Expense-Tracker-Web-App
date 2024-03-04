import {
  home_default
} from "/build/_shared/chunk-2SWRGZJV.js";
import "/build/_shared/chunk-EWUXHAI4.js";
import {
  btnCat,
  transItems
} from "/build/_shared/chunk-6D5NUV3L.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-NOX3DQZ3.js";
import {
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

// app/routes/user/setting/$setting.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Title, Text } = typography_default;
var Setting = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  const [inputs, setInputs] = (0, import_react.useState)({
    firstname: "",
    lastname: "",
    password: "",
    cpassword: ""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(home_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      breadcrumb_default,
      {
        style: {
          margin: "16px 0"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { style: { color: "#3dc4e0" }, children: "User" }, void 0, false, {
            fileName: "app/routes/user/setting/$setting.jsx",
            lineNumber: 69,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(breadcrumb_default.Item, { children: "Settings" }, void 0, false, {
            fileName: "app/routes/user/setting/$setting.jsx",
            lineNumber: 70,
            columnNumber: 5
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/user/setting/$setting.jsx",
        lineNumber: 65,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: transItems, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Title,
        {
          level: 3,
          style: { marginTop: 0 },
          children: "Profile Settings"
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/setting/$setting.jsx",
          lineNumber: 73,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "PUT", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 85,
                      columnNumber: 8
                    },
                    this
                  ),
                  ((_a = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _a.firstname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.firstname }, void 0, false, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 94,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 82,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
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
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 100,
                      columnNumber: 8
                    },
                    this
                  ),
                  ((_c = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _c.lastname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.lastname }, void 0, false, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 97,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                xl: 12,
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
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 115,
                      columnNumber: 8
                    },
                    this
                  ),
                  ((_e = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _e.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.password }, void 0, false, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 112,
                columnNumber: 7
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              col_default,
              {
                sm: 24,
                xl: 12,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    input_default,
                    {
                      name: "cpassword",
                      placeholder: "Confirm Password",
                      required: true,
                      size: "large",
                      value: inputs.cpassword,
                      onChange: handleChange,
                      type: "password",
                      autoComplete: "off"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/user/setting/$setting.jsx",
                      lineNumber: 132,
                      columnNumber: 8
                    },
                    this
                  ),
                  ((_g = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _g.cpassword) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { type: "danger", children: (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.cpassword }, void 0, false, {
                    fileName: "app/routes/user/setting/$setting.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                  }, this) : null
                ]
              },
              void 0,
              true,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 129,
                columnNumber: 7
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
                children: "Update Profile"
              },
              void 0,
              false,
              {
                fileName: "app/routes/user/setting/$setting.jsx",
                lineNumber: 147,
                columnNumber: 8
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/user/setting/$setting.jsx",
              lineNumber: 146,
              columnNumber: 7
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/routes/user/setting/$setting.jsx",
          lineNumber: 79,
          columnNumber: 6
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/user/setting/$setting.jsx",
        lineNumber: 78,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user/setting/$setting.jsx",
      lineNumber: 72,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user/setting/$setting.jsx",
    lineNumber: 64,
    columnNumber: 3
  }, this);
};
var setting_default = Setting;
export {
  setting_default as default
};
//# sourceMappingURL=/build/routes/user/setting/$setting-SYG422KG.js.map
