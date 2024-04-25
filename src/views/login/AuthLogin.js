import { React, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Checkbox,
  // Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  // useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../hooks/useScriptRef";
import AnimateButton from "../ui-component/extended/AnimateButton";

// assets
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const FirebaseLogin = ({ ...others }) => {
  // const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={14}
          container
          alignItems="center"
          justifyContent="center"
        ></Grid>
      </Grid>

      <Formik
        initialValues={{
          email: "",
          password: "",
          // submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            const url = "http://localhost:8000/login";
            let obj = {};
            obj["email"] = values["email"];
            obj["password"] = values["password"];
            const { data: res } = await axios.post(url, obj);
            console.log('res',res)
            if (res.message === "logged in successfully") {
              console.log('working')
              // if (res.data === "Analyst") {
              //   localStorage.setItem("name", res.data.name);
              //   localStorage.setItem("email", res.data["email"]);
              //   localStorage.setItem("desig", res.data["desig"]);
              //   window.location.href = "/analystview";
              // } else 
              if (res.data.userType=== "Management") {
                window.location.href = "/dashboard";
                console.log('Management login')
              }
            } else {
              handleClickOpen();
            }
            // console.log("hie", res);
            // console.log("values", values, obj);
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              // sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address / Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address / Username"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              // sx={{ ...theme.typography.customInput }}
              style={{ marginTop: "1rem" }}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Stack>
            
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <Link to="/opco" style={{textDecoration:'none' , color:'#ffff'}}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign in
                </Button>
              </AnimateButton>
              </Link>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Typography variant="subtitle1">Not a User?</Typography>
                }
              />
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={()=>{
                  window.location.href="/signup"
                }}

              >
                Create an account now.
              </Typography>
            </Stack>
          </form>
        )}
      </Formik>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Invalid Login"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Invalid Email or Password. Kindly check your credentials again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button> */}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FirebaseLogin;
