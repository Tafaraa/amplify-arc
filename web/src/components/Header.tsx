import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { COLORS, FONTS, BREAKPOINTS } from '@shared/theme';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <HeaderContainer scrolled={isScrolled}>
      <div className="container">
        <HeaderContent>
          <Logo to="/">
            <LogoText>Amplify<LogoAccent>ARC</LogoAccent></LogoText>
          </Logo>

          <NavContainer open={mobileMenuOpen}>
            <NavLinks>
              <NavItem active={location.pathname === '/'}>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem active={location.pathname === '/services'}>
                <NavLink to="/services">Services</NavLink>
              </NavItem>
              <NavItem active={location.pathname === '/portfolio'}>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem active={location.pathname === '/contact'}>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavLinks>

            <NavActions>
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </ThemeToggle>
              <ContactButton to="/contact">Contact Me</ContactButton>
            </NavActions>
          </NavContainer>

          <MobileMenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuToggle>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.scrolled ? '0.75rem 0' : '1.5rem 0'};
  background: ${props => props.scrolled 
    ? props.theme.glass
    : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled 
    ? `1px solid ${props.theme.border}`
    : 'none'};
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  z-index: 1001;
`;

const LogoText = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  color: ${props => props.theme.text};
`;

const LogoAccent = styled.span`
  color: ${COLORS.AMPLIFY_LIME};
  font-weight: 700;
`;

const NavContainer = styled.nav<{ open: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.glass};
    backdrop-filter: blur(20px);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    transform: translateX(${props => props.open ? '0' : '100%'});
    transition: transform 0.3s ease;
    z-index: 1000;
    padding: 2rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  margin: 0 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${COLORS.AMPLIFY_LIME};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
    
    &::after {
      bottom: -8px;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${COLORS.AMPLIFY_LIME};
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  color: ${props => props.theme.text};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;
  border: none;
  padding: 0.5rem;
  outline: none;
  
  &:hover {
    color: ${COLORS.AMPLIFY_LIME};
    transform: rotate(15deg);
  }
  
  &:focus {
    outline: none;
  }
`;

const ContactButton = styled(Link)`
  background: ${COLORS.AMPLIFY_LIME};
  color: #000;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(182, 255, 0, 0.3);
    color: #000;
  }
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: transparent;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  z-index: 1001;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    display: block;
  }
`;

export default Header;
