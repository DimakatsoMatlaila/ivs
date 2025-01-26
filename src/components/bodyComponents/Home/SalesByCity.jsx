import React from "react";
import { Box } from "@mui/material";
import ApexCharts from "react-apexcharts";

export default function SalesByCity() {
  const donutOption = {
    labels: ["Cape Town", "Johannesburg", "Durban", "Polokwane"],
    legend: {
      position: "right",
      fontSize: "14",

      customLegendItems: [
        "Cape Town <b>30.3%</b>",
        "Johanneburg <b>37.9%</b>",
        "Durban <b>9.0%</b>",
        "Polokwane <b>22.8%</b>",
      ],
      //   const total = data.reduce((sum, value) => sum + value, 0);
      // const percentages = data.map(value => ((value / total) * 100).toFixed(2) + '%');
    },
    title: {
      text: "Sales By City",
    },
  };
  const donutSeries = [44, 55, 13, 33];

  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "100%",
      }}
    >
      <ApexCharts
        options={donutOption}
        series={donutSeries}
        type="pie"
        width="100%"
      />
    </Box>
  );
}
