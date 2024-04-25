import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import axios from "axios";
import Header from "../Layout/Header";
import SideNav from "../Layout/SideNav";
import Pillars from "./Pillars";
import SubPillar from "./SubPillar";
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";

function Dahboard() {
  const [clientDetails, setclientDetails] = useState([]);
  Chart.register(CategoryScale);
  const labels = ["Q1", "Q2", "Q3", "Q4"];
  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    barThickness: 18, // Set the width of each bar in pixels
    maxBarThickness: 40, // Set the maximum width of each bar in pixels
    borderWidth: 1,
    borderRadius: 20, // This will round the corners
    // borderSkipped: false,

    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        labels: {
          color: "#000000",
          font: {
            size: 10,
          },
          align: "center",
          padding: 5,
          usePointStyle: true,
          boxWidth: 6,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2.05, 2.1, 3.33, 3],
        backgroundColor: "#613DF1",
      },
    ],
  };

  const data1 = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ display: "flex", overflowX: "hidden" }}>
      <SideNav />
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
      >
        <Toolbar />
        <div style={{marginTop:'-1rem'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginLeft: "1rem",
            }}
          >
            <h4
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
                color: "#252525",
              }}
            >
              Maturity Assessment Pillars
            </h4>
            <h4 style={{ color: "#656565" }}>
              (Cameroon RAFM practice is at a Maturity Level of 2.05 out of 5)
            </h4>
          </div>
          <div style={{ width: "80%", display: "flex", marginTop: "-1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Pillars name=" Influence" value=" 3.14" />
              <SubPillar sub="Awareness & presentation" value="2.83" />
              <SubPillar sub="Information Technology" value="3.45" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Pillars name="Organization" value="3.35" />
              <SubPillar sub="Planning" value="2.83" />
              <SubPillar sub="Structure" value="3.60" />
              <SubPillar sub="Roles & Responsibilities" value="3.61" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Pillars name="People" value="3.63" />
              <SubPillar sub="Skill Set & Experience" value="3.25" />
              <SubPillar sub="Motivation & development" value="4.00" />
              <SubPillar sub="Team Size" value="3.61" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Pillars name="Process" value="3.42" />
              <SubPillar sub="Methodology" value="3.29" />
              <SubPillar sub="framework" value="4.01" />
              <SubPillar sub="standard & kpi’s" value="2.97" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <Pillars name="Technology" value="3.22" />
              <SubPillar sub="Strategy & management" value="3.57" />
              <SubPillar sub="tool functionality" value="3.69" />
              <SubPillar sub="issue resolution Portal" value="2.5" />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(134, 180, 249, 0.8) 64.5%, rgba(226, 253, 255, 0) 165%)",
                borderRadius: "8px",
                width: "50%",
                height: "27vh",
                marginLeft: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "29px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#1634A1",
                }}
              >
                Yearly maturity Score Comparison
                <Bar options={options} data={data} height="80%" />
              </h3>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(134, 180, 249, 0.8) 64.5%, rgba(226, 253, 255, 0) 165%)",
                borderRadius: "8px",
                width: "45%",
                height: "27vh",
                marginLeft: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "29px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "#1634A1",
                }}
              >
                Maturity Score per pillar
              </h3>
              {/* <Radar data={data1} height="80%" /> */}
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Dahboard;
