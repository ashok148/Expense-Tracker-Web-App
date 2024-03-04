import {
  ArcElement,
  Chart,
  Doughnut,
  plugin_legend,
  plugin_tooltip
} from "/build/_shared/chunk-QXJU3JI5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WQGPB5ZT.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/user/dashboard/chart.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
Chart.register(ArcElement, plugin_tooltip, plugin_legend);
var DoughnutChart = ({ expenseList }) => {
  const categories = expenseList.map((item) => item.category);
  const occurrencesOfEach = (categories2) => {
    const count = categories2.reduce((accumulator, value) => {
      accumulator[value] = ++accumulator[value] || 1;
      return accumulator;
    }, {});
    return count;
  };
  const itemCount = occurrencesOfEach(categories);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left"
      },
      title: {
        display: true,
        text: "Total Number of Expenses of each categories"
      }
    }
  };
  const data = {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "chart",
      style: { display: "flex", justifyContent: "center", flexWrap: "wrap" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Doughnut,
        {
          data,
          options
        },
        void 0,
        false,
        {
          fileName: "app/routes/user/dashboard/chart.jsx",
          lineNumber: 93,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/user/dashboard/chart.jsx",
      lineNumber: 90,
      columnNumber: 3
    },
    this
  );
};
var chart_default = DoughnutChart;

export {
  chart_default
};
//# sourceMappingURL=/build/_shared/chunk-CZGVDUQK.js.map
