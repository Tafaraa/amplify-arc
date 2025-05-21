import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../shared/theme';

const ServicesPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <HeaderTitle>Our Services</HeaderTitle>
            <HeaderDescription>
              We offer a range of digital services to help your business grow and succeed online.
            </HeaderDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <ServicesSection>
        <div className="container">
          <ServicesList>
            {/* Service items will be added here */}
            <ServiceCard>
              <ServiceIcon>💻</ServiceIcon>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                Custom websites built with the latest technologies for optimal performance and user experience.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>📱</ServiceIcon>
              <ServiceTitle>Mobile Development</ServiceTitle>
              <ServiceDescription>
                Native and cross-platform mobile applications for iOS and Android.
              </ServiceDescription>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🎨</ServiceIcon>
              <ServiceTitle>UI/UX Design</ServiceTitle>
              <ServiceDescription>
                User-centered design that enhances usability and creates memorable brand experiences.
              </ServiceDescription>
            </ServiceCard>
          </ServicesList>
        </div>
      </ServicesSection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
`;

const PageHeader = styled.section`
  background-color: ${props => props.theme.background};
  padding: 10rem 0 5rem;
  position: relative;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 4.5rem);
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${COLORS.AMPLIFY_LIME};
    margin: 1.5rem auto 0;
  }
`;

const HeaderDescription = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.backgroundAlt};
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
`;

export default ServicesPage;
