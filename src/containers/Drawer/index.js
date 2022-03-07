import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
// import ExpandMoreIcon from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../../components/OutlinedBtn";

export default function TemporaryDrawer({ scrollClass, location }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 280,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="logo m-5  w-75px relative">
          <svg
            xmlns="http://www.w3.org/2000/svg "
            className="w-full h-full"
            zwidth="100%"
            height="100%"
            fill="none"
            viewBox="0 0 1080 288"
          >
            <ellipse cx="996" cy="204" fill="#FA541C" rx="60" ry="60"></ellipse>
            <path
              fill={` ${"#212b36"}`}
              d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
            ></path>
          </svg>
        </div>
      </List>
      <List>
        {[
          { title: "Home", callback: () => navigate("/") },
          { title: "About", callback: () => navigate("/about") },
          { title: "Jobs", callback: () => navigate("/jobs") },
          { title: "Job", callback: () => navigate("/job") },
          { title: "Blog Posts", callback: () => navigate("/blog-posts") },
          { title: "Blog Post", callback: () => navigate("/blog-post") },
          { title: "Contact", callback: () => navigate("contact") },
        ].map((text, index) => (
          <ListItem button key={text} onClick={text.callback} sx={text?.sx}>
            <ListItemText
              sx={{
                span: { fontSize: "15px", fontWeight: 400, color: "#637381" },
              }}
              primary={text.title}
            />
          </ListItem>
        ))}
      </List>
      <List sx={{ px: "15px", mt: "15px" }}>
        <CustomBtn variant="outlined" obj={{ width: "100%", color: "black" }}>
          Login
        </CustomBtn>
      </List>
      <List sx={{ px: "15px" }}>
        <CustomBtn
          variant="contained"
          obj={{
            width: "100%",
            background: "#212B36",
            "&:hover": { background: "#5D6670", shadow: "0" },
          }}
        >
          Join
        </CustomBtn>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          sx={{
            "&:hover": { svg: { transform: "scale(1.05)" } },
          }}
          onClick={toggleDrawer("left", true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className={`MuiBox-root css-0 text-2xl ${
              scrollClass || !location ? "text-black" : "text-white"
            }`}
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path d="M4 6h24v2H4z" fill="currentColor"></path>
            <path d="M4 24h24v2H4z" fill="currentColor"></path>
            <path d="M4 12h24v2H4z" fill="currentColor"></path>
            <path d="M4 18h24v2H4z" fill="currentColor"></path>
          </svg>
        </IconButton>
        <Drawer
          left={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
