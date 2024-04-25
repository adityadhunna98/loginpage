import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import AuthCardWrapper from "./AuthCardWrapper";
import AuthLogin from "./AuthLogin";
import Logo from "../ui-component/Logo";
import "./login.css"
const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="row" sx={{ minHeight: "100vh" }}>
      <Grid item xs={6} className="login-container">
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
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "calc(100vh - 68px)" }}
        >
          <Grid item>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "60%",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.primary.main}
                            gutterBottom
                            variant={matchDownSM ? "h4" : "h3"}
                            style={{ marginTop: "-0.5rem" }}
                          >
                            Sign In
                          </Typography>
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : "inherit"}
                            style={{ marginTop: "-0.5rem" }}
                          >
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={14}>
                    <AuthLogin />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
