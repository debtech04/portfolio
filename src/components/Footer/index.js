import React from 'react';
import {FaFacebook, FaYoutube, FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink,
    FooterSocial,
    WebsiteRights,
    FooterSocialList,
    FooterSocialLink

} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLinkItems>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">Ho it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careeres</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>Service</FooterLinkTitle>
                        <FooterLinkItems>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">Ho it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careeres</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>Discover</FooterLinkTitle>
                        <FooterLinkItems>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">Ho it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careeres</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>Quick Links</FooterLinkTitle>
                        <FooterLinkItems>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">Ho it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careeres</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterSocial>
                    <WebsiteRights>dolla &#169; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <FooterSocialList>
                        <FooterSocialLink href="/" traget="_blank" aria-label="facebook">
                            <FaFacebook />
                        </FooterSocialLink>
                        <FooterSocialLink href="/" traget="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </FooterSocialLink>
                        <FooterSocialLink href="/" traget="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </FooterSocialLink>
                        <FooterSocialLink href="/" traget="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </FooterSocialLink>
                        <FooterSocialLink href="/" traget="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </FooterSocialLink>
                    </FooterSocialList>
                </FooterSocial>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
