import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaChartLine, FaCog, FaHeadset, FaUsers, FaLightbulb } from 'react-icons/fa';
import { COLORS, FONTS, BREAKPOINTS } from '@shared/theme';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from '@shared/data';

const HomePage: React.FC = () => {
  // Scroll animations
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Services section animations
  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Features section animations
  const featuresControls = useAnimation();
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Hero section parallax effects
  const heroTextY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroImageY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  useEffect(() => {
    if (servicesInView) {
      servicesControls.start('visible');
    }
  }, [servicesControls, servicesInView]);
  
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start('visible');
    }
  }, [featuresControls, featuresInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Features section data
  const features = [
    {
      id: 'feature-1',
      title: 'User-Centered Design',
      description: 'We put users at the center of everything we create, ensuring intuitive and engaging experiences.',
      icon: <FaUsers />
    },
    {
      id: 'feature-2',
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to create forward-thinking digital products.',
      icon: <FaLightbulb />
    },
    {
      id: 'feature-3',
      title: 'Technical Excellence',
      description: 'Our code is clean, maintainable, and built to the highest standards of quality.',
      icon: <FaLaptopCode />
    },
    {
      id: 'feature-4',
      title: 'Responsive Support',
      description: 'We provide ongoing support and maintenance to ensure your digital products thrive.',
      icon: <FaHeadset />
    }
  ];
  
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'laptop-code': return <FaLaptopCode />;
      case 'mobile-alt': return <FaMobileAlt />;
      case 'pencil-ruler': return <FaPaintBrush />;
      case 'paint-brush': return <FaPaintBrush />;
      case 'tools': return <FaCog />;
      case 'lightbulb': return <FaChartLine />;
      default: return <FaHeadset />;
    }
  };

  return (
    <>
      <HeroSection ref={heroRef}>
        <HeroOverlay 
          as={motion.div} 
          style={{ opacity: heroOpacity }}
        />
        <HeroContent>
          <HeroTextContainer
            as={motion.div}
            style={{ y: heroTextY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroSubtitle>Premium Digital Agency</HeroSubtitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HeroTitle>
                Amplifying your vision with <AccentText>stunning digital experiences</AccentText>
              </HeroTitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <HeroDescription>
                We craft exceptional digital solutions that elevate brands, engage users, and drive business growth through innovative design and cutting-edge technology.
              </HeroDescription>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <HeroButtons>
                <PrimaryButton to="/contact">
                  Contact Me <FaArrowRight />
                </PrimaryButton>
                <SecondaryButton to="/portfolio">
                  View Our Work
                </SecondaryButton>
              </HeroButtons>
            </motion.div>
          </HeroTextContainer>
          
          <HeroImageContainer
            as={motion.div}
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GlassMorphCard />
          </HeroImageContainer>
        </HeroContent>
        
        <ScrollIndicator 
          as={motion.div}
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowRight style={{ transform: 'rotate(90deg)' }} />
          </motion.div>
        </ScrollIndicator>
      </HeroSection>

      <ServicesSection ref={servicesRef}>
        <div className="container">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <SectionHeader>
              <SectionSubtitle>What We Do</SectionSubtitle>
              <SectionTitle>Premium Services</SectionTitle>
              <SectionDescription>
                We offer a comprehensive suite of digital services to transform your ideas into powerful, market-ready solutions.
              </SectionDescription>
            </SectionHeader>
          </motion.div>

          <ServicesGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={servicesControls}
          >
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                as={motion.div}
                variants={itemVariants}
              >
                <ServiceIconContainer>
                  {getServiceIcon(service.icon)}
                </ServiceIconContainer>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceLink to={`/services#${service.id}`}>
                  Learn More <FaArrowRight />
                </ServiceLink>
              </ServiceCard>
            ))}
          </ServicesGrid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ServicesAction>
              <ActionText>Ready to elevate your digital presence?</ActionText>
              <ActionButton to="/contact">Contact Me Today</ActionButton>
            </ServicesAction>
          </motion.div>
        </div>
      </ServicesSection>

      <FeaturesSection ref={featuresRef}>
        <div className="container">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
          >
            <SectionHeader>
              <SectionSubtitle>Why Choose Us</SectionSubtitle>
              <SectionTitle>Our Approach</SectionTitle>
              <SectionDescription>
                We combine creativity, technology, and strategy to deliver exceptional results for our clients.
              </SectionDescription>
            </SectionHeader>
          </motion.div>

          <FeaturesGrid
            as={motion.div}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={featuresControls}
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                as={motion.div}
                variants={itemVariants}
              >
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </div>
      </FeaturesSection>
    </>
  );
};

// Hero Section Styles
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.background};
  padding-top: 80px;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    min-height: auto;
    padding: 120px 0 60px;
    height: auto;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(182, 255, 0, 0.1), transparent 60%);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 5%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${COLORS.AMPLIFY_LIME};
    opacity: 0.2;
    filter: blur(15px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    right: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${COLORS.AMPLIFY_LIME};
    opacity: 0.15;
    filter: blur(25px);
  }
`;

const HeroContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  position: relative;
  z-index: 2;
  align-items: center;
  
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: column;
    gap: 3rem;
    padding: 0 ${props => props.theme.spacing.lg};
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 0 ${props => props.theme.spacing.md};
    text-align: center;
  }
`;

const HeroTextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, transparent, ${COLORS.AMPLIFY_LIME}, transparent);
    opacity: 0.6;
  }
  
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    max-width: 100%;
    order: 2;
    
    &::before {
      display: none;
    }
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroSubtitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${COLORS.AMPLIFY_LIME};
  font-weight: ${props => props.theme.fontWeights.medium};
  display: inline-block;
  position: relative;
  padding: 8px 16px;
  background-color: rgba(182, 255, 0, 0.1);
  border-radius: ${props => props.theme.borderRadius.sm};
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.text};
  font-family: ${props => props.theme.fonts.display};
  font-weight: ${props => props.theme.fontWeights.bold};
  position: relative;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const AccentText = styled.span`
  color: ${COLORS.AMPLIFY_LIME};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.AMPLIFY_LIME};
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
`;

const HeroDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.textSecondary};
  max-width: 540px;
  position: relative;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${props => props.theme.fontSizes.base};
    max-width: 100%;
    text-align: center;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${COLORS.AMPLIFY_LIME};
  color: #000;
  padding: 0.875rem 2rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
    z-index: -1;
  }
  
  svg {
    transition: transform ${props => props.theme.transitions.fast};
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};
    color: #000;
    
    &::before {
      transform: translateX(100%);
    }
    
    svg {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${COLORS.AMPLIFY_LIME};
  color: ${COLORS.AMPLIFY_LIME};
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(182, 255, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  
  @media (max-width: 992px) {
    justify-content: center;
    order: 1;
  }
`;

const GlassMorphCard = styled.div`
  width: 450px;
  height: 450px;
  background: rgba(182, 255, 0, 0.05);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid rgba(182, 255, 0, 0.2);
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(182, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    animation: rotate 15s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%);
    border-radius: ${props => props.theme.borderRadius.xl};
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    width: 380px;
    height: 380px;
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 280px;
    height: 280px;
  }
`;

// Services Section Styles
const ServicesSection = styled.section`
  padding: 8rem 0;
  background-color: ${props => props.theme.backgroundAlt};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(182, 255, 0, 0.03) 0%, transparent 25%),
                      radial-gradient(circle at 80% 70%, rgba(182, 255, 0, 0.03) 0%, transparent 25%);
  }
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding: 5rem 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem;
  position: relative;
  padding: 0 ${props => props.theme.spacing.lg};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, transparent, ${COLORS.AMPLIFY_LIME}, transparent);
  }
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    margin-bottom: 3rem;
  }
`;

const SectionSubtitle = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${COLORS.AMPLIFY_LIME};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
  color: ${props => props.theme.textSecondary};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: 5rem;
  padding: 0 ${props => props.theme.spacing.lg};
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${props => props.theme.spacing.lg};
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;
    padding: 0 ${props => props.theme.spacing.md};
  }
`;

const ServiceCard = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2.5rem 2rem;
  transition: all ${props => props.theme.transitions.normal};
  border: 1px solid ${props => props.theme.border};
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, ${COLORS.AMPLIFY_LIME}, transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.lg};
    background-color: ${props => props.theme.cardHover};
    
    &::before {
      transform: translateX(0);
    }
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 2rem 1.5rem;
  }
`;

const ServiceIconContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(182, 255, 0, 0.1);
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  font-size: 1.75rem;
  color: ${COLORS.AMPLIFY_LIME};
  position: relative;
  transition: all ${props => props.theme.transitions.normal};
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: ${props => props.theme.borderRadius.md};
    border: 1px dashed rgba(182, 255, 0, 0.3);
    opacity: 0;
    transition: all ${props => props.theme.transitions.normal};
  }
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
    
    &::after {
      opacity: 1;
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${COLORS.AMPLIFY_LIME};
  font-weight: 600;
  transition: all 0.3s ease;
  
  svg {
    font-size: 0.875rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${COLORS.AMPLIFY_LIME};
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const ServicesAction = styled.div`
  text-align: center;
  background-color: rgba(182, 255, 0, 0.05);
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 3rem 2rem;
  border: 1px solid rgba(182, 255, 0, 0.1);
  margin: 0 ${props => props.theme.spacing.lg};
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(182, 255, 0, 0.03);
    z-index: 0;
  }
  
  &::before {
    top: -100px;
    left: -100px;
  }
  
  &::after {
    bottom: -100px;
    right: -100px;
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    margin: 0 ${props => props.theme.spacing.md};
    padding: 2rem 1.5rem;
  }
`;

const ActionText = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.text};
  position: relative;
  z-index: 1;
  display: inline-block;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
  background-color: ${COLORS.AMPLIFY_LIME};
  color: #000;
  padding: 1rem 2.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};
    color: #000;
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 0.875rem 2rem;
    width: 100%;
  }
`;

// Scroll Indicator
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textSecondary};
  font-size: 0.875rem;
  gap: 0.5rem;
  z-index: 10;
  
  span {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
  }
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    display: none;
  }
`;

// Features Section Styles
const FeaturesSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  /* Base background that changes with theme */
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  
  /* Base gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.background}dd 0%,
      ${props => props.theme.background}bb 100%
    );
    z-index: 0;
  }
  
  /* Vertical light beams effect - adapts to theme */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => {
      const beamColor = 'rgba(182, 255, 0, ';
      return `
        linear-gradient(180deg, transparent 0%, ${beamColor}0.03) 50%, transparent 100%),
        linear-gradient(180deg, transparent 10%, ${beamColor}0.02) 50%, transparent 90%) 20% 0,
        linear-gradient(180deg, transparent 0%, ${beamColor}0.04) 50%, transparent 100%) 40% 0,
        linear-gradient(180deg, transparent 10%, ${beamColor}0.03) 50%, transparent 90%) 60% 0,
        linear-gradient(180deg, transparent 0%, ${beamColor}0.02) 50%, transparent 100%) 80% 0
      `;
    }};
    background-size: 5% 200%, 5% 200%, 5% 200%, 5% 200%, 5% 200%;
    background-repeat: no-repeat;
    z-index: 0;
    opacity: ${props => props.theme.background === '#000000' ? 0.8 : 0.5};
    animation: lightBeams 20s ease-in-out infinite;
    will-change: transform, opacity;
  }
  
  @keyframes lightBeams {
    0% {
      background-position: 
        0 0%,
        20% 10%,
        40% 20%,
        60% 0%,
        80% 15%;
      opacity: ${props => props.theme.background === '#000000' ? 0.4 : 0.2};
    }
    50% {
      background-position: 
        0 100%,
        20% 90%,
        40% 80%,
        60% 100%,
        80% 85%;
      opacity: ${props => props.theme.background === '#000000' ? 0.8 : 0.5};
    }
    100% {
      background-position: 
        0 0%,
        20% 10%,
        40% 20%,
        60% 0%,
        80% 15%;
      opacity: ${props => props.theme.background === '#000000' ? 0.4 : 0.2};
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.background === '#000000' 
    ? 'rgba(30, 30, 30, 0.7)' 
    : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
  border: 1px solid ${props => props.theme.border};
  box-shadow: ${props => props.theme.shadows.md};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(182, 255, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B6FF00;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  /* Icon background remains consistent in both themes for brand recognition */
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

export default HomePage;
