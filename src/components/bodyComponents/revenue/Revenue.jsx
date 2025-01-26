import React, { Component } from "react";
import RevenueCard from "./RevenueCard";
import { Box, Grid, Paper } from "@mui/material";
import RevenueCostChart from "./RevenueCostChart";
import BestSelledProductChart from "./BestSelledProductChart";
import BestSelledProductChartBar from "./BestSelledProductChartBar";

export default class Revenue extends Component {
  render() {
    const revenuCards = [
      {
        
        currency: "Rands",
        number: "R238 876",
        percentage: 55,
        upOrDown: "up",
        color: "green",
        title: "Total Sales This Year",
        subTitle: "vs prev year",
      },
      {
        
        number: "R176 312",
        percentage: 70,
        upOrDown: "up",
        color: "green",
        title: "Revenue This Year",
        subTitle: "vs prev year",
      },
      {
        
        number: "R46 753",
        percentage: 12,
        upOrDown: "down",
        color: "red",
        title: "Cost This Year",
        subTitle: "vs prev year",
      },
      {
        
        number: "R359 562",
        percentage: undefined,
        title: "Revenue Total",
        subTitle: "vs prev year",
      },
    ];
    return (
      <Box sx={{ p: 3, mx: 3 }}>
        <Grid container sx={{ mx: 4 }}>
          {revenuCards.map((card) => (
            <Grid item md={3}>
              <Box m={4}>
                <RevenueCard card={card} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container sx={{ mx: 4 }}>
          <Grid item md={12}>
            <RevenueCostChart />
          </Grid>
        </Grid>
        <Grid container sx={{ mx: 4 }}>
          <Grid item md={6}>
            <BestSelledProductChart />
          </Grid>
          <Grid item md={6}>
            <BestSelledProductChartBar />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
