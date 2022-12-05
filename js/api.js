var dadosJason = $.ajax({
  url: 'db.json',
  dataType: 'json',
  async: false
}).responseJSON;

var dadosArray = dadosJason.dados;

var dias = dadosArray.map(i => {
  return i.day
})
var amount = dadosArray.map(i => {
  return i.amount
})

var chartColors = {
  red: 'hsl(10, 79%, 65%)',
  blue: 'hsl(186, 34%, 60%)'
};

var chartColorsHover = {
  red: 'hsla(10, 79%, 65%, 0.6)',
  blue: 'hsla(186, 34%, 60%, 0.6)'
}






const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: dias,
    datasets: [
    {
      data: amount,
        borderRadius: 2 ,
        backgroundColor: [chartColors.red, chartColors.red, chartColors.red, chartColors.red,chartColors.red],
        hoverBackgroundColor: [chartColorsHover.red, chartColorsHover.red, chartColorsHover.red, chartColorsHover.red, chartColorsHover.red, chartColorsHover.red]
      
    }]
  },
  options: {
    plugins: {
      tooltip: {
        // Customize font-size for data
        bodyFont: {
          size: 12,
          weight: "bold",
        },
        // Customize background-color tooltip
        backgroundColor: "rgb(56, 35, 20)",
        // Remove Tooltip Caret
        caretSize: 0,
        yAlign: "bottom",
        // Remove margin under title
        titleMarginBottom: 0,
        callbacks: {
          // Remove Tooltip Title
          title: function (tooltipItems, data) {
            return "";
          },
          // Set currency USD for data
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
          displayColors: false,
        },
        legend: {
          display: false
      },


    },
      scales: {
        x: {
          grid: {
            display: false
          },
        ticks: { color: "rgba(147, 134, 123, 1)", beginAtZero: true },
        },
        y: {
          display: false
        }
      }
  }
});

var colorChangeValue = 50; //set this to whatever is the deciding color change value
var dataset = chart.data.datasets[0];
for (var i = 0; i < dataset.data.length; i++) {
  if (dataset.data[i] >= colorChangeValue) {
    dataset.backgroundColor[i] = chartColors.blue;
    dataset.hoverBackgroundColor[i] = chartColorsHover.blue
  }
}
chart.update();

