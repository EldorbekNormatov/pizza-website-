import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialMedi,
  SocialMediWrap,
  SocialLogo,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";


const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedi>
            <SocialMediWrap>
              <SocialLogo to="/">Pizza</SocialLogo>
              <SocialIcons>

                <SocialIconsLink
                href="/"
                  target="_blank"
                  aria-label="Facebook">
                  <FaFacebook />
                </SocialIconsLink>

                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                ></SocialIconsLink>
                <FaInstagram />

                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                ></SocialIconsLink>
                <FaYoutube />

                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                ></SocialIconsLink>
                <FaTwitter />

                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Lenkiden"
                ></SocialIconsLink>
                <FaLinkedin />

              </SocialIcons>
            </SocialMediWrap>
          </SocialMedi>
        </FooterWrap>
      </FooterContainer>
    );
};

export default Footer
