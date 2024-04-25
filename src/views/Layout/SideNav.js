// import { React, useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import KPMG from "../assests/KPMG.png";
// import Divider from "@mui/material/Divider";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Img1 from "../assests/image4.png";
// import Img2 from "../assests/image1.png";
// import Img3 from "../assests/image2.png";
// import Img4 from "../assests/image3.png";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// const drawerWidth = 240;
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const SideNav = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [modal, setModal] = useState(false);
//   const handleOpenModal = () => setModal(true);
//   const handleCloseModal = () => setModal(false);
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   const handleClick1 = () => {
//     setOpen1(!open1);
//   };
//   return (
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#00338d",
//           color: "#ffffff",
//         },
//         color: "#ffffff",
//         backgroundColor: "#0000ff",
//       }}
//       variant="permanent"
//       anchor="left"
//       style={{ backgroundColor: "#0000ff" }}
//     >
//       <img src={KPMG} alt="logo" style={{ height: "18vh", width: "16vw" }} />
//       <Divider style={{ height: "0.5vh", background: "white", opacity: "1" }} />
//       <List
//         sx={{ width: "100%", maxWidth: 360 }}
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         style={{
//           height: "100%",
//           // overflowY: "scroll",
//           "&::-webkit-scrollbar": { display: "none" },
//           "&::-webkit-scrollbar": {
//             width: "20px",
//           },

//           "&::-webkit-scrollbar-track": {
//             backgroundColor: "transparent",
//           },

//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#d6dee1",
//           },

//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#d6dee1",
//             borderRadius: "20px",
//           },

//           "&::-webkit-scrollbar-thumb": {
//             backgroundColor: "#d6dee1",
//             borderRadius: "20px",
//             border: "6px solid transparent",
//             backgroundClip: "content-box",
//           },
//         }}
//       >
//         <ListItemButton onClick={handleClick}>
//           <ListItemText primary="Maturity Assessment" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="nav" aria-labelledby="nested-list-subheader">
//             <ListItemButton sx={{ pl: 6 }} onClick={handleClick1}>
//               <ListItemText primary="Influence" />
//               {open1 ? <ExpandMore /> : <ExpandLess />}
//             </ListItemButton>
//             <Collapse in={open1} timeout="auto" unmountOnExit>
//               <Link
//                 to="/awareness"
//                 style={{ textDecoration: "none", color: "white" }}
//               >
//                 <List component="div" disablePadding>
//                   <ListItemButton sx={{ pl: 8 }}>
//                     <ListItemText primary="Awareness & Perception" />
//                   </ListItemButton>
//                 </List>
//               </Link>
//               <List component="div" disablePadding>
//                 <ListItemButton sx={{ pl: 8 }}>
//                   <ListItemText primary="Information & Assistance" />
//                 </ListItemButton>
//               </List>
//             </Collapse>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 6 }}>
//               <ListItemText primary="Organisation" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 6 }}>
//               <ListItemText primary="People" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 6 }}>
//               <ListItemText primary="Process" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 6 }}>
//               <ListItemText primary=" Technology" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//         <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//         <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//         <ListItemButton onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//         <ListItemButton>
//           <ListItemText primary="Risk Assessment" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <ListItemButton>
//           <ListItemText primary="Control Assessment" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItemButton>
//         <Link
//           to="/dashboard"
//           style={{ textDecoration: "none", color: "white" }}
//         >
//           <ListItemButton>
//             <ListItemText primary="Overall Maturity" />
//             {open ? <ExpandLess /> : <ExpandMore />}
//           </ListItemButton>
//         </Link>
//         <Button
//           onClick={handleOpenModal}
//           style={{
//             background: "#003087",
//             border: "1px solid #FFFFFF",
//             borderRadius: "8px",
//             color: "#ffff",
//             position: "relative",
//             top: "40vh",
//             width: "80%",
//             // marginLeft: "1.4rem",
//           }}
//         >
//           Guidelines
//         </Button>
//         <Modal
//           open={modal}
//           onClose={handleCloseModal}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Carousel showThumbs={false}>
//               <div>
//                 <img src={Img1} />
//               </div>
//               <div>
//                 <img src={Img2} />
//               </div>
//               <div>
//                 <img src={Img3} />
//               </div>
//               <div>
//                 <img src={Img4} />
//               </div>
//             </Carousel>
//           </Box>
//         </Modal>
//         <Link to="/login" style={{ textDecoration: "none" }}>
//           <Button
//             variant="contained"
//             style={{
//               // marginTop: "22rem",
//               position: "relative",
//               top: "42vh",
//               width: "80%",
//               marginLeft: "1.4rem",
//               backgroundColor: "#8098c3",
//               display: "flex",
//             }}
//           >
//             <svg
//               style={{ marginRight: "0.3rem" }}
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M17.44 15.3699C17.25 15.3699 17.06 15.2999 16.91 15.1499C16.62 14.8599 16.62 14.3799 16.91 14.0899L18.94 12.0599L16.91 10.0299C16.62 9.73994 16.62 9.25994 16.91 8.96994C17.2 8.67994 17.68 8.67994 17.97 8.96994L20.53 11.5299C20.82 11.8199 20.82 12.2999 20.53 12.5899L17.97 15.1499C17.82 15.2999 17.63 15.3699 17.44 15.3699Z"
//                 fill="white"
//               />
//               <path
//                 d="M19.93 12.8101H9.76C9.35 12.8101 9.01 12.4701 9.01 12.0601C9.01 11.6501 9.35 11.3101 9.76 11.3101H19.93C20.34 11.3101 20.68 11.6501 20.68 12.0601C20.68 12.4701 20.34 12.8101 19.93 12.8101Z"
//                 fill="white"
//               />
//               <path
//                 d="M11.76 20.75C6.61 20.75 3.01 17.15 3.01 12C3.01 6.85 6.61 3.25 11.76 3.25C12.17 3.25 12.51 3.59 12.51 4C12.51 4.41 12.17 4.75 11.76 4.75C7.49 4.75 4.51 7.73 4.51 12C4.51 16.27 7.49 19.25 11.76 19.25C12.17 19.25 12.51 19.59 12.51 20C12.51 20.41 12.17 20.75 11.76 20.75Z"
//                 fill="white"
//               />
//             </svg>
//             Log Out
//           </Button>
//         </Link>
//       </List>
//     </Drawer>
//   );
// };

// export default SideNav;
