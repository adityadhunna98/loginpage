import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../Layout/Header";
import SideNav from "../Layout/SideNav";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Index = () => {
  const [selectedValues, setSelectedValues] = useState(Array(5).fill(""));

  const handleChange = (event, index) => {
    const newValues = [...selectedValues];
    newValues[index] = event.target.value;
    setSelectedValues(newValues);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#C8DCFF",
      color: theme.palette.common.black,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const rows = [
    {
      id: 1,
      name: "Are employees at all levels in the organization are aware of the RA Function and its purpose?",
    },
    {
      id: 2,
      name: "Is the internal communication regarding perceived fraudulent activities defined and robust between cross functional departments?",
    },
    {
      id: 3,
      name: "Is the RA function able to influence the business's strategy and operations if necessary ?",
    },
    {
      id: 4,
      name: "Are the regular meetings held with other departments to review the findings of RA activities and jointly plan corrective & preventive actions ?",
    },
    {
      id: 5,
      name: "Is the Corporate Intranet portal/ digital flyers/ scrollers/ internal branding/ screen savers used to communicate RA Policy?",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Header />
      <div style={{ width: "80%", marginLeft: "1.3rem" }}>
        <TableContainer
          style={{
            marginTop: "7rem",
            boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Questions </StyledTableCell>
                <StyledTableCell align="right">Response</StyledTableCell>
                <StyledTableCell align="right">Evidence</StyledTableCell>
                <StyledTableCell align="right">View Evidence</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <FormControl
                      fullWidth
                      style={{ width: "85%" }}
                      variant="standard"
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Select"
                        value={selectedValues[index]}
                        onChange={(event) => handleChange(event, index)}
                      >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="Partially">Partially</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                        <MenuItem value="Not Applicable">Not Applicable</MenuItem>
                      </Select>
                    </FormControl>
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <Button
                      component="label"
                      style={{
                        fontFamily: "Nunito",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "22px",
                        textDecorationLine: "underline",
                        color: "#00338D",
                        marginTop: "1rem",
                      }}
                    >
                      <svg
                        width="10"
                        height="12"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: "0.2rem" }}
                      >
                        <path
                          d="M9.90425 5.11021L8.88925 4.09621L3.81425 9.17021C3.61438 9.37015 3.45584 9.6075 3.3477 9.8687C3.23955 10.1299 3.18392 10.4099 3.18396 10.6926C3.18401 10.9753 3.23974 11.2552 3.34797 11.5164C3.4562 11.7775 3.61481 12.0148 3.81475 12.2147C4.01469 12.4146 4.25204 12.5731 4.51324 12.6813C4.77445 12.7894 5.0544 12.845 5.3371 12.845C5.61981 12.845 5.89974 12.7892 6.16091 12.681C6.42208 12.5728 6.65938 12.4142 6.85925 12.2142L12.9493 6.12521C13.6221 5.45223 14.0001 4.53951 14 3.58786C13.9999 2.63621 13.6217 1.72357 12.9487 1.05071C12.2758 0.377859 11.363 -9.37508e-05 10.4114 1.74434e-08C9.45974 9.37856e-05 8.5471 0.378227 7.87425 1.05121L1.48025 7.44421L1.46625 7.45721C-0.48875 9.41221 -0.48875 12.5802 1.46625 14.5342C3.42125 16.4882 6.58925 16.4882 8.54425 14.5342L8.55725 14.5202L8.55825 14.5212L12.9233 10.1572L11.9082 9.14321L7.54325 13.5062L7.53025 13.5192C6.86039 14.1878 5.95265 14.5632 5.00625 14.5632C4.05985 14.5632 3.15211 14.1878 2.48225 13.5192C2.15021 13.1864 1.88712 12.7914 1.70807 12.3568C1.52901 11.9221 1.43751 11.4564 1.43881 10.9863C1.44011 10.5162 1.53419 10.051 1.71564 9.61736C1.8971 9.18371 2.16237 8.79014 2.49625 8.45921L2.49525 8.45821L8.89025 2.06521C9.72925 1.22521 11.0953 1.22521 11.9353 2.06521C12.7753 2.90521 12.7743 4.27021 11.9353 5.10921L5.84525 11.1982C5.70896 11.3236 5.52951 11.3914 5.34437 11.3876C5.15923 11.3838 4.98272 11.3086 4.85172 11.1777C4.72072 11.0468 4.64534 10.8704 4.64134 10.6853C4.63734 10.5001 4.70502 10.3206 4.83025 10.1842L9.90525 5.10921L9.90425 5.11021Z"
                          fill="#00338D"
                        />
                      </svg>
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      component="label"
                      style={{
                        fontFamily: "Nunito",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "12px",
                        lineHeight: "22px",
                        color: '#BBBBBB',
                        marginTop: "1rem",
                      }}
                    >
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: "0.2rem" }}
                      >
                        <path
                          d="M8 0C4.36364 0 1.25818 2.28067 0 5.5C1.25818 8.71933 4.36364 11 8 11C11.6364 11 14.7418 8.71933 16 5.5C14.7418 2.28067 11.6364 0 8 0ZM8 9.16667C5.99273 9.16667 4.36364 7.524 4.36364 5.5C4.36364 3.476 5.99273 1.83333 8 1.83333C10.0073 1.83333 11.6364 3.476 11.6364 5.5C11.6364 7.524 10.0073 9.16667 8 9.16667ZM8 3.3C6.79273 3.3 5.81818 4.28267 5.81818 5.5C5.81818 6.71733 6.79273 7.7 8 7.7C9.20727 7.7 10.1818 6.71733 10.1818 5.5C10.1818 4.28267 9.20727 3.3 8 3.3Z"
                          fill="#C2C2C2"
                        />
                      </svg>
                      View File
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Index;
