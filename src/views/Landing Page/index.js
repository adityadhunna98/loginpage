import { Link } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import Logo from "../ui-component/Logo";
import background from "../assests/Picture1.jpg";
const index = () => {
  return (
    <Grid container direction="row" sx={{ minHeight: "100vh" }}>
      <Grid item xs={6} style={{ backgroundColor: "#00338D" }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 68px)" }}
        >
          <Logo />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          //   justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 68px)" }}
          style={{
            display: "flex",
            flexDirection:'column',
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>Please Select One Option</h1>
          <Grid item style={{marginTop:'-10rem'}}>  
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div
                style={{
                  width: "20vw",
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#f4fdff",
                  borderRadius: "10px",
                  boxShadow: "2px 7px 5px 	#36454F",
                  color: "black",
                  border: "10px",
                }}
              >
                <h1>Management</h1>
              </div>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div
                style={{
                  marginTop: "5rem",
                  width: "20vw",
                  height: "20vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#f4fdff",
                  borderRadius: "10px",
                  boxShadow: "2px 7px 5px 	#36454F",
                  color: "black",
                  border: "10px",
                }}
              >
                <h1>OPCO's</h1>
              </div>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
