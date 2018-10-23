import React from "react";
import {
  footerLeftStyle,
  footerRightStyle,
  footerStyle
} from "./footer.styles";
import { FooterGithubIcon } from "./footer.github.icon";

export class FooterComponent extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <div style={footerLeftStyle}>
          Copyright &copy; {new Date().getFullYear()}
        </div>
        <div style={footerRightStyle}>
          <FooterGithubIcon />
        </div>
      </div>
    );
  }
}
