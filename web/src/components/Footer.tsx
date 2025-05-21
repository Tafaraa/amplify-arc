import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { COLORS, FONTS } from '@shared/theme';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterTop>
            <FooterBrand>
              <FooterLogo>
                Amplify<FooterLogoAccent>ARC</FooterLogoAccent>
              </FooterLogo>
              <FooterTagline>
                Amplifying your vision with stunning digital experiences
              </FooterTagline>
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </SocialLink>
                <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
              </SocialLinks>
            </FooterBrand>
            
            <FooterLinksContainer>
              <FooterLinkGroup>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/portfolio">Our Work</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup>
                <FooterLinkTitle>Services</FooterLinkTitle>
                <FooterLink to="/services#app-dev">App Development</FooterLink>
                <FooterLink to="/services#web-dev">Web Development</FooterLink>
                <FooterLink to="/services#ui-design">UI/UX Design</FooterLink>
                <FooterLink to="/services#branding">Branding</FooterLink>
              </FooterLinkGroup>
              
              <FooterLinkGroup>
                <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/case-studies">Case Studies</FooterLink>
                <FooterLink to="/resources">Guides</FooterLink>
                <FooterLink to="/faq">FAQ</FooterLink>
              </FooterLinkGroup>
            </FooterLinksContainer>
          </FooterTop>
          
          <FooterDivider />
          
          <FooterBottom>
            <Copyright>
              © {currentYear} Amplify ARC. All rights reserved.
            </Copyright>
            <FooterLegalLinks>
              <FooterLegalLink to="/privacy">Privacy Policy</FooterLegalLink>
              <FooterLegalLink to="/terms">Terms of Service</FooterLegalLink>
              <FooterLegalLink to="/cookies">Cookie Policy</FooterLegalLink>
            </FooterLegalLinks>
          </FooterBottom>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.backgroundAlt};
  padding: 5rem 0 2rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterBrand = styled.div`
  flex: 1;
  min-width: 250px;
`;

const FooterLogo = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const FooterLogoAccent = styled.span`
  color: ${COLORS.AMPLIFY_LIME};
  font-weight: 700;
`;

const FooterTagline = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${COLORS.AMPLIFY_LIME};
    color: #000;
    transform: translateY(-3px);
  }
`;

const FooterLinksContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

const FooterLinkTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  color: ${props => props.theme.text};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.75rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${COLORS.AMPLIFY_LIME};
  }
`;

const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${props => props.theme.border};
  margin: 3rem 0 2rem;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  margin: 0;
`;

const FooterLegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLegalLink = styled(Link)`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${COLORS.AMPLIFY_LIME};
  }
`;

export default Footer;
