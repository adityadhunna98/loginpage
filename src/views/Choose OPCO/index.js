import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Header from "../Layout/Header";
import SideNav from "../Layout/SideNav";
import Card from "@mui/material/Card";

function Index() {
  const [clientDetails, setclientDetails] = useState([]);

  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
      >
        <Toolbar />
        <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
          <Card
            sx={{
              minWidth: 275,
              width: "100%",
              background: "#FFFFFF",
              boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "2rem",
                color: "#9F9F9F",
                textAlign: "left",
                marginLeft: "1.2rem",
              }}
            >
              Tier 1
            </h2>
            <hr
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                color: "#C6C6C6",
                marginTop: "-1rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_2396)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M4.68628 27.314C-1.56209 21.0656 -1.56209 10.935 4.68628 4.68652C4.68584 4.68721 13.9131 16.0003 13.9131 16.0003L4.68628 27.314Z"
                      fill="black"
                    />
                    <path
                      d="M13.9132 16.0002L2.12216 8.03223C1.7566 8.66766 1.43423 9.33091 1.15723 10.0174L7.12654 16.0002L1.15741 21.9834C1.43416 22.6694 1.75623 23.3322 2.12154 23.9672L13.9132 16.0002Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M31.8642 13.9131H13.9123L4.68578 4.68652C3.69153 5.68077 2.82772 6.80521 2.12172 8.03215L10.0742 16L2.12109 23.9669C2.82709 25.1941 3.69128 26.319 4.68578 27.3135L13.9123 18.087H31.8642C31.9532 17.4038 31.9997 16.7073 31.9997 16C31.9997 15.2927 31.9532 14.5962 31.8642 13.9131Z"
                      fill="#6DA544"
                    />
                    <path
                      d="M6.25879 28.6922C8.95685 30.7661 12.3342 31.9999 16.0002 31.9999C23.3926 31.9999 29.613 26.9861 31.449 20.1738H14.7772L6.25879 28.6922Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M31.449 11.8261C29.613 5.01381 23.3926 0 16.0002 0C12.3342 0 8.95685 1.23381 6.25879 3.30769L14.7772 11.8261H31.449Z"
                      fill="#D80027"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_2396">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN South Africa
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_2393)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M0 15.9999C0 22.8794 4.342 28.744 10.4348 31.0047V0.995117C4.342 3.25574 0 9.12049 0 15.9999Z"
                      fill="#6DA544"
                    />
                    <path
                      d="M32.0002 15.9999C32.0002 9.12049 27.6582 3.25574 21.5654 0.995117V31.0048C27.6582 28.744 32.0002 22.8794 32.0002 15.9999Z"
                      fill="#6DA544"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_2393">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Nigeria
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_2390)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M9.04395 21.5654L10.4353 31.0052C12.1685 31.6484 14.0433 32.0002 16.0004 32.0002C22.8798 32.0002 28.7446 27.6582 31.0052 21.5654H9.04395Z"
                      fill="black"
                    />
                    <path
                      d="M9.04395 10.4348L10.4353 0.995062C12.1685 0.351875 14.0433 0 16.0004 0C22.8798 0 28.7446 4.342 31.0052 10.4348H9.04395Z"
                      fill="#6DA544"
                    />
                    <path
                      d="M0 15.9999C0 22.8794 4.34206 28.7441 10.4348 31.0047V0.995117C4.34206 3.2558 0 9.12049 0 15.9999Z"
                      fill="#A2001D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_2390">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN UAE Global Connect
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
            </div>
            <h2
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "2rem",
                color: "#9F9F9F",
                textAlign: "left",
                marginLeft: "1.2rem",
              }}
            >
              Tier 2
            </h2>
            <hr
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                color: "#C6C6C6",
                marginTop: "-1rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3504)">
                    <path
                      d="M27.9246 26.6665C30.4585 23.8358 32 20.0981 32 15.9999C32 11.9016 30.4584 8.16395 27.9245 5.3332L16 4.17383L4.0755 5.3332C1.54156 8.16395 0 11.9016 0 15.9999C0 20.0981 1.5415 23.8358 4.07544 26.6665L16 27.826L27.9246 26.6665Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M4.0752 5.33331H27.9243C24.9946 2.06037 20.738 0 15.9997 0C11.2614 0 7.00482 2.06037 4.0752 5.33331Z"
                      fill="black"
                    />
                    <path
                      d="M0 16.0004L16 17.3917L32 16.0004C32 14.1301 31.6781 12.3352 31.0882 10.667H0.91175C0.321938 12.3352 0 14.1301 0 16.0004H0Z"
                      fill="#D80027"
                    />
                    <path
                      d="M0.91175 21.3333H31.0884C31.6781 19.6651 32 17.8702 32 16H0C0 17.8702 0.321938 19.6651 0.91175 21.3333Z"
                      fill="black"
                    />
                    <path
                      d="M27.9243 26.667H4.0752C7.00482 29.94 11.2614 32.0004 15.9998 32.0004C20.7381 32.0004 24.9947 29.94 27.9243 26.667Z"
                      fill="#D80027"
                    />
                    <path
                      d="M21.3394 16.0003C21.3394 18.9492 18.9492 21.3394 16.0003 21.3394C13.0513 21.3394 10.6611 18.9492 10.6611 16.0003C10.6611 13.0513 13.0513 10.6611 16.0003 10.6611C18.9492 10.6611 21.3394 13.0513 21.3394 16.0003Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M17.9558 16.2722L15.9999 15.4246C15.9999 15.4246 16.4575 13.9057 16.4819 13.8017C16.4997 13.7258 16.5092 13.6466 16.5092 13.5652C16.5092 13.277 16.3924 13.0162 16.2035 12.8274L16.6954 12.3355C16.3807 12.0209 15.9459 11.8262 15.4656 11.8262C14.9854 11.8262 14.5506 12.0208 14.2359 12.3355L14.7277 12.8274C14.5389 13.0162 14.4221 13.2771 14.4221 13.5652C14.4221 13.6706 14.4381 13.7722 14.4671 13.8681L13.7266 14.6086H15.0726C15.0726 14.6086 14.5161 15.4445 14.2122 16.1309C13.9084 16.8173 14.2164 17.6552 14.9186 17.9674L15.3246 18.1478L15.9999 18.7825V19.4782L15.3042 20.1738H16.6956V18.7825L17.3304 18.1477H18.6434C18.6497 18.1346 18.6563 18.1219 18.6623 18.1085C18.9742 17.4064 18.658 16.5842 17.9558 16.2722Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3504">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Uganda
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3654)">
                    <path
                      d="M16.432 32C18.4421 32 20.3675 31.648 22.1476 31.0048L22.8621 16L22.1477 0.995188C20.3675 0.352063 18.4421 0 16.432 0C14.422 0 12.4965 0.352063 10.7164 0.995188L10.002 16L10.7164 31.0048C12.4965 31.648 14.422 32 16.432 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M0 15.9999C0 22.8794 4.45935 28.7441 10.7168 31.0047V0.995117C4.45935 3.2558 0 9.12049 0 15.9999Z"
                      fill="#FF9811"
                    />
                    <path
                      d="M22.1484 0.995117V31.0048C28.4059 28.7441 32.8653 22.8794 32.8653 15.9999C32.8653 9.12049 28.4059 3.2558 22.1484 0.995117Z"
                      fill="#6DA544"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3654">
                      <rect width="32.8649" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Ivory Coast
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3525)">
                    <path
                      d="M23.8219 1.58763C21.7184 0.5705 19.3585 0 16.8654 0C14.3723 0 12.0124 0.5705 9.90889 1.58763L8.51758 16L9.90889 30.4124C12.0124 31.4295 14.3723 32 16.8654 32C19.3585 32 21.7184 31.4295 23.8219 30.4124L25.2132 16L23.8219 1.58763Z"
                      fill="#D80027"
                    />
                    <path
                      d="M16.8652 10.4346L18.2464 14.6858H22.7169L19.1004 17.3135L20.4817 21.5649L16.8652 18.9374L13.2486 21.5649L14.6302 17.3135L11.0137 14.6858H15.4839L16.8652 10.4346Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M9.90873 1.58789C4.55686 4.17577 0.865234 9.65633 0.865234 15.9997C0.865234 22.3431 4.55686 27.8236 9.90873 30.4115V1.58789Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M23.8213 1.58789V30.4115C29.1732 27.8236 32.8648 22.343 32.8648 15.9997C32.8648 9.65639 29.1732 4.17577 23.8213 1.58789Z"
                      fill="#FFDA44"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3525">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.865234)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Cameroon
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3494)">
                    <path
                      d="M1.58763 9.04366C0.5705 11.1472 0 13.507 0 16.0002C0 18.4933 0.5705 20.8532 1.58763 22.9567L16 24.348L30.4124 22.9567C31.4295 20.8532 32 18.4933 32 16.0002C32 13.507 31.4295 11.1472 30.4124 9.04366L16 7.65234L1.58763 9.04366Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M1.58789 22.9561C4.17577 28.308 9.65633 31.9996 15.9997 31.9996C22.3431 31.9996 27.8236 28.308 30.4115 22.9561H1.58789Z"
                      fill="black"
                    />
                    <path
                      d="M1.58789 9.0435H30.4115C27.8236 3.69156 22.3431 0 15.9997 0C9.65633 0 4.17577 3.69156 1.58789 9.0435Z"
                      fill="#D80027"
                    />
                    <path
                      d="M4.68628 4.68652C-1.56209 10.9349 -1.56209 21.0656 4.68628 27.314C7.26834 24.732 9.75166 22.2486 16 16.0003L4.68628 4.68652Z"
                      fill="#496E2D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3494">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Cameroon
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3536)">
                    <path
                      d="M0 16.0001C0 17.9573 0.352063 19.832 0.995188 21.5653L16 22.261L31.0048 21.5654C31.648 19.832 32 17.9573 32 16.0001C32 14.043 31.648 12.1683 31.0048 10.4349L16 9.73926L0.995188 10.4349C0.352063 12.1683 0 14.043 0 16.0001H0Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M15.9999 0C9.12049 0 3.25581 4.342 0.995117 10.4348H31.0048C28.7441 4.342 22.8794 0 15.9999 0V0Z"
                      fill="#D80027"
                    />
                    <path
                      d="M31.0047 21.5654H0.995117C3.2558 27.6582 9.12049 32.0002 15.9999 32.0002C22.8794 32.0002 28.7441 27.6582 31.0047 21.5654Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M15.9999 10.4346L17.3812 14.6858H21.8517L18.2353 17.3135L19.6165 21.5649L15.9999 18.9374L12.3834 21.5649L13.7649 17.3135L10.1484 14.6858H14.6187L15.9999 10.4346Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3536">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Ghana
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
            </div>
            <h2
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "2rem",
                color: "#9F9F9F",
                textAlign: "left",
                marginLeft: "1.2rem",
              }}
            >
              Tier 3
            </h2>
            <hr
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                color: "#C6C6C6",
                marginTop: "-1rem",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3481)">
                    <path
                      d="M0 15.9997C0 18.7716 0.705188 21.3787 1.94544 23.6519L16 25.0432L30.0546 23.6519C31.2948 21.3787 32 18.7716 32 15.9997L16 14.6084L0 15.9997Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M30.0546 8.34781C27.3409 3.37431 22.0647 0 16 0C9.93531 0 4.65912 3.37431 1.94544 8.34781C0.705188 10.621 0 13.2281 0 16H32C32 13.2281 31.2948 10.621 30.0546 8.34781Z"
                      fill="#338AF3"
                    />
                    <path
                      d="M15.9999 32.0002C22.0646 32.0002 27.3408 28.6258 30.0544 23.6523H1.94531C4.659 28.6258 9.93519 32.0002 15.9999 32.0002Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M18.0869 9.36358L20.041 10.2828L19.0005 12.1753L21.1224 11.7694L21.3912 13.9128L22.8691 12.3363L24.3471 13.9128L24.6159 11.7694L26.7378 12.1751L25.6973 10.2827L27.6513 9.36358L25.6972 8.44452L26.7378 6.55202L24.616 6.95789L24.347 4.81445L22.8691 6.39095L21.3912 4.81445L21.1224 6.95789L19.0004 6.55202L20.041 8.44458L18.0869 9.36358Z"
                      fill="#FFDA44"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3481">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Rawanda
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3510)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M22.2609 16H16V32C17.8702 32 19.6651 31.6781 21.3333 31.0884L22.2609 16Z"
                      fill="#D80027"
                    />
                    <path
                      d="M26.6668 27.9246C29.9398 24.9949 32.0001 20.7383 32.0001 16H25.7393L26.6668 27.9246Z"
                      fill="#FF9811"
                    />
                    <path
                      d="M21.333 16V31.0884C23.3203 30.3858 25.1274 29.3021 26.6664 27.9246V16H21.333Z"
                      fill="black"
                    />
                    <path
                      d="M29.5651 10.4353H25.3911C25.3911 9.66688 24.7682 9.04395 23.9998 9.04395C23.2314 9.04395 22.6085 9.66688 22.6085 10.4353H18.4346C18.4346 11.2037 19.1039 11.8266 19.8722 11.8266H19.8259C19.8259 12.595 20.4487 13.2179 21.2172 13.2179C21.2172 13.9863 21.84 14.6092 22.6085 14.6092H25.3911C26.1595 14.6092 26.7824 13.9863 26.7824 13.2179C27.5508 13.2179 28.1738 12.595 28.1738 11.8266H28.1274C28.8958 11.8265 29.5651 11.2036 29.5651 10.4353V10.4353Z"
                      fill="#FF9811"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3510">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Zambia
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3491)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M30.7515 9.79706C28.3285 4.04138 22.6365 0 15.9997 0C11.5813 0 7.58177 1.79119 4.68652 4.68681L8.6934 9.79706H30.7515Z"
                      fill="black"
                    />
                    <path
                      d="M8.73884 22.1445L4.68652 27.3127C7.58177 30.2083 11.5813 31.9995 15.9997 31.9995C22.6588 31.9995 28.3671 27.9312 30.7762 22.1445H8.73884Z"
                      fill="#496E2D"
                    />
                    <path
                      d="M3.47852 11.7686V20.1743H31.4491C31.808 18.8436 32.0003 17.4446 32.0003 16.0004C32.0003 14.5353 31.8029 13.1166 31.434 11.7686H3.47852Z"
                      fill="#A2001D"
                    />
                    <path
                      d="M4.68628 4.68652C-1.56209 10.9349 -1.56209 21.0656 4.68628 27.314C7.26834 24.732 9.75166 22.2486 16 16.0003L4.68628 4.68652Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M5.2112 12.0225L7.16402 14.7475L10.3595 13.7322L8.37133 16.4318L10.3241 19.157L7.14239 18.1003L5.15414 20.7998L5.17602 17.4471L1.99414 16.3903L5.18939 15.375L5.2112 12.0225Z"
                      fill="#FFDA44"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3491">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN South Sudan
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3516)">
                    <path
                      d="M0.7555 11.1302C0.265375 12.6658 -6.2489e-05 14.3016 1.10347e-08 15.9998C-6.2489e-05 17.6978 0.265375 19.3337 0.755563 20.8693L16 21.5651L31.2444 20.8693C31.7344 19.3337 31.9999 17.6978 31.9999 15.9998C31.9999 14.3017 31.7345 12.6658 31.2444 11.1302L15.9999 10.4346L0.7555 11.1302Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M32 16.0005C32 15.0513 31.9169 14.1215 31.7583 13.2178H0.24175C0.083125 14.1215 0 15.0511 0 16.0004C0 16.9496 0.0831875 17.8793 0.24175 18.783H31.7583C31.9168 17.8792 32 16.9496 32 16.0005Z"
                      fill="black"
                    />
                    <path
                      d="M16.0003 31.9996C23.1388 31.9996 29.1844 27.3245 31.2447 20.8691H0.755859C2.81617 27.3244 8.86186 31.9995 16.0003 31.9996Z"
                      fill="#338AF3"
                    />
                    <path
                      d="M16.0004 2.50646e-09C8.86192 2.50646e-09 2.8163 4.67519 0.755859 11.1303L31.2446 11.1304C29.1844 4.67519 23.1387 -0.000124998 16.0004 2.50646e-09Z"
                      fill="#338AF3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3516">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Botswana
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Eswatini
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3514)">
                    <path
                      d="M10.4346 14.6084L11.8259 31.4485C13.1567 31.8072 14.5556 31.9997 15.9998 31.9997C24.8363 31.9997 31.9998 24.8362 31.9998 15.9997L10.4346 14.6084Z"
                      fill="#D80027"
                    />
                    <path
                      d="M10.4346 16L11.8258 0.551188C13.1567 0.1925 14.5556 0 15.9998 0C24.8363 0 31.9998 7.1635 31.9998 16H10.4346Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M0 15.9996C0 23.392 5.01381 29.6124 11.8261 31.4484V0.550781C5.01381 2.38678 0 8.60716 0 15.9996Z"
                      fill="#6DA544"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3514">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Benin
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3682)">
                    <path
                      d="M21.5654 0.969059C19.832 0.342798 17.9572 0 16 0C14.0429 0 12.1682 0.342798 10.4349 0.968938L9.73926 15.5789L10.4349 30.189C12.1682 30.8152 14.0429 31.1579 16 31.1579C17.9573 31.1579 19.832 30.8152 21.5654 30.1888L22.261 15.5789L21.5654 0.969059Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M0 15.5788C0 22.2771 4.342 27.9875 10.4348 30.1886V0.96875C4.342 3.17001 0 8.8803 0 15.5788Z"
                      fill="#D80027"
                    />
                    <path
                      d="M32.0002 15.5788C32.0002 8.8803 27.6582 3.17001 21.5654 0.96875V30.1887C27.6582 27.9875 32.0002 22.2771 32.0002 15.5788Z"
                      fill="#6DA544"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3682">
                      <rect width="32" height="31.1579" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Guinea-Conakry
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3470)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M3.65723 5.81824H28.3427C27.431 4.71418 26.3735 3.73512 25.2004 2.90918H6.79954C5.62648 3.73499 4.56904 4.71412 3.65723 5.81824Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M0 16.0004C0 16.4908 0.0233125 16.9757 0.0665 17.455H31.9335C31.9767 16.9757 32 16.4908 32 16.0004C32 15.51 31.9767 15.0251 31.9335 14.5459H0.0665C0.0233125 15.0251 0 15.51 0 16.0004H0Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M1.74479 23.2723H30.2553C30.7264 22.3507 31.1107 21.3775 31.3975 20.3633H0.602539C0.889352 21.3775 1.27373 22.3507 1.74479 23.2723Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M6.79954 29.0907H25.2004C26.3734 28.2648 27.4309 27.2857 28.3427 26.1816H3.65723C4.56904 27.2856 5.62648 28.2648 6.79954 29.0907Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M0.602539 11.6366H31.3977C31.1108 10.6224 30.7265 9.6491 30.2554 8.72754H1.74485C1.27379 9.6491 0.889414 10.6224 0.602539 11.6366Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M7.68359 2.90906H25.3051C22.6917 1.07669 19.5054 0 16.0662 0C13.9706 0 10.297 1.07669 7.68359 2.90906Z"
                      fill="#D80027"
                    />
                    <path
                      d="M15.3672 8.72742H30.3805C29.8462 7.68661 29.2009 6.71167 28.46 5.81836H15.3672V8.72742Z"
                      fill="#D80027"
                    />
                    <path
                      d="M15.3672 14.5458H32.0657C31.9753 13.5469 31.7937 12.5742 31.5275 11.6367H15.3672V14.5458Z"
                      fill="#D80027"
                    />
                    <path
                      d="M0.604643 20.3641H31.5282C31.7944 19.4268 31.976 18.454 32.0664 17.4551H0.0664062C0.156782 18.454 0.338412 19.4267 0.604643 20.3641Z"
                      fill="#D80027"
                    />
                    <path
                      d="M3.67243 26.1815H28.461C29.2019 25.2881 29.8472 24.3132 30.3814 23.2725H1.75195C2.28624 24.3133 2.93154 25.2882 3.67243 26.1815Z"
                      fill="#D80027"
                    />
                    <path
                      d="M16.066 31.9999C19.5051 31.9999 22.6915 30.9232 25.3048 29.0908H6.82715C9.44051 30.9232 12.6269 31.9999 16.066 31.9999Z"
                      fill="#D80027"
                    />
                    <path
                      d="M0.602344 11.6364C0.337219 12.5739 0.156406 13.5466 0.0664062 14.5454H15.9999V0C8.67616 0 2.50184 4.92075 0.602344 11.6364Z"
                      fill="#0052B4"
                    />
                    <path
                      d="M9.52443 4.17383L10.5604 7.36227H13.9132L11.2009 9.33302L12.2367 12.5216L9.52443 10.551L6.81199 12.5216L7.84812 9.33302L5.13574 7.36227H8.48843L9.52443 4.17383Z"
                      fill="#F0F0F0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3470">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Liberia
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3542)">
                    <path
                      d="M15.9998 0C14.5556 0 13.1566 0.187434 11.8258 0.536683L10.4346 15.5789L11.8259 30.6212C13.1566 30.9705 14.5556 31.1579 15.9998 31.1579C24.8363 31.1579 31.9998 24.1829 31.9998 15.5789C31.9998 6.97499 24.8363 0 15.9998 0Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M10.4346 15.5791L11.8259 30.6214C13.1566 30.9706 14.5556 31.158 15.9998 31.158C24.8363 31.158 31.9998 24.1831 31.9998 15.5791H10.4346Z"
                      fill="#6DA544"
                    />
                    <path
                      d="M0 15.5792C0 21.4843 3.37438 26.6217 8.34781 29.2639V1.89453C3.37438 4.53675 0 9.67415 0 15.5792Z"
                      fill="#D80027"
                    />
                    <path
                      d="M0 15.5794C0 22.7773 5.01381 28.834 11.8261 30.6216V0.537109C5.01381 2.32479 0 8.38147 0 15.5794Z"
                      fill="#D80027"
                    />
                    <path
                      d="M6.04591 11.5146L7.08185 14.6192H10.4347L7.72235 16.5381L8.75823 19.6428L6.04591 17.724L3.33348 19.6428L4.3696 16.5381L1.65723 14.6192H5.00991L6.04591 11.5146Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3542">
                      <rect width="32" height="31.1579" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Guinea Bissau
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_211_3689)">
                    <path
                      d="M8.90762 30.228L20.9793 20.4275L31.0447 8.67346C29.4798 5.72046 26.9984 3.30303 23.9668 1.77734L11.8855 11.573L1.8252 23.3362C3.39199 26.2882 5.87475 28.7042 8.90762 30.228Z"
                      fill="#FFDA44"
                    />
                    <path
                      d="M28.0521 27.3147C33.2364 22.2667 34.2317 14.6857 31.0399 8.66406L8.89746 30.2238C15.0818 33.3315 22.8678 32.3625 28.0521 27.3147Z"
                      fill="#D80027"
                    />
                    <path
                      d="M4.81246 4.68581C-0.371834 9.73368 -1.36702 17.3148 1.82465 23.3364L23.9671 1.77669C17.7828 -1.33111 9.99675 -0.361991 4.81246 4.68581Z"
                      fill="#6DA544"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_211_3689">
                      <rect width="32.8649" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  MTN Congo-Brazzaville
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "25%",
                }}
              ></div>
            </div>
          </Card>
        </div>
      </Box>
    </Box>
  );
}

export default Index;
