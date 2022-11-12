import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const LinkContainer = styled("ul")(({ theme, show }) => ({
  listStyleType: "none",
  display: "flex",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  transition: "all 0.3s linear",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxHeight: show ? "300px" : "0px",
  },
}));

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LinkList = styled("li")(({ theme }) => ({
  fontSize: "1rem",
  color: "gray",
  [theme.breakpoints.down("md")]: {
    padding: "5px 0px",
  },
}));

export const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
