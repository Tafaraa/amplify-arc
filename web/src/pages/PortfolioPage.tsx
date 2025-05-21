import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../shared/theme';

const PortfolioPage: React.FC = () => {
  return (
    <PageContainer>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <HeaderTitle>Our Portfolio</HeaderTitle>
            <HeaderDescription>
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </HeaderDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <PortfolioSection>
        <div className="container">
          <PortfolioGrid>
            {/* Portfolio items will be added here */}
            <PortfolioMessage>
              Our portfolio is being updated. Please check back soon or contact us for more information.
            </PortfolioMessage>
          </PortfolioGrid>
        </div>
      </PortfolioSection>
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

const PortfolioSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.backgroundAlt};
`;

const PortfolioGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const PortfolioMessage = styled.div`
  font-size: 1.25rem;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  padding: 2rem;
`;

export default PortfolioPage;
