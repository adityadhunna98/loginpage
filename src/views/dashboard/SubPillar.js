import React from "react";

const SubPillar = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(134, 180, 249, 0.8) 64.5%, rgba(226, 253, 255, 0) 165%)",
        width: "14vw",
        height: "12vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h4
        style={{
          marginLeft: "1rem",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "900",
          fontSize: "20px",
          lineHeight: "19px",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#1634A2",
        }}
      >
        {props.value}
      </h4>
      <h4 style={{
          marginLeft: "1rem",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "12px",
          lineHeight: "19px",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#1634A2",
        }}>{props.sub}</h4>
    </div>
  );
};

export default SubPillar;
