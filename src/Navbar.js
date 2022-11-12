import React, { useState } from "react";
import {
  LinkContainer,
  LinkList,
  LogoContainer,
  NavbarContainer,
  SocialContainer,
} from "./StyledNavBar";
import { links, social } from "./data";
import "./Navbar.css";
import logo from "./logo.svg";
import ViewHeadlineTwoToneIcon from "@mui/icons-material/ViewHeadlineTwoTone";
import { Button, IconButton } from "@mui/material";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  console.log(logo);
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src={logo} alt="logo" height="40px" />
        <Button
          onClick={handleClick}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <ViewHeadlineTwoToneIcon />
        </Button>
      </LogoContainer>
      <LinkContainer show={show}>
        {links.map((link) => {
          return (
            <LinkList key={link.id}>
              <a href="link.url">{link.text}</a>
            </LinkList>
          );
        })}
      </LinkContainer>
      <SocialContainer>
        {social.map((social) => {
          return (
            <a key={social.id} href={social.url}>
              {social.icon}
            </a>
          );
        })}
      </SocialContainer>
    </NavbarContainer>
  );
};

export default Navbar;
