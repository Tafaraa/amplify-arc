import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { SERVICES } from '../../../shared/data';

const ServicesScreen = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  // Helper function to map service icons to Ionicons
  const getServiceIcon = (iconName: string): string => {
    switch (iconName) {
      case 'laptop-code': return 'laptop-outline';
      case 'mobile-alt': return 'phone-portrait-outline';
      case 'pencil-ruler': return 'brush-outline';
      case 'paint-brush': return 'color-palette-outline';
      case 'tools': return 'construct-outline';
      case 'lightbulb': return 'bulb-outline';
      default: return 'apps-outline';
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <PageTitle>Our Services</PageTitle>
          <PageDescription>
            We offer comprehensive digital solutions tailored to elevate your brand and drive business growth.
          </PageDescription>
        </HeaderSection>

        <ServicesContainer>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceHeader onPress={() => toggleService(service.id)}>
                <ServiceIconContainer>
                  <Ionicons 
                    name={getServiceIcon(service.icon)} 
                    size={24} 
                    color="#B6FF00" 
                  />
                </ServiceIconContainer>
                <ServiceInfo>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServicePrice>${service.price}</ServicePrice>
                </ServiceInfo>
                <ExpandButton>
                  <Ionicons 
                    name={expandedService === service.id ? 'chevron-up' : 'chevron-down'} 
                    size={24} 
                    color="#B6FF00" 
                  />
                </ExpandButton>
              </ServiceHeader>

              {expandedService === service.id && (
                <ServiceDetails>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <FeaturesTitle>What's included:</FeaturesTitle>
                  <FeaturesList>
                    <FeatureItem>
                      <FeatureDot />
                      <FeatureText>Initial consultation and planning</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureDot />
                      <FeatureText>Custom design and development</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureDot />
                      <FeatureText>Quality assurance testing</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureDot />
                      <FeatureText>Deployment and launch support</FeatureText>
                    </FeatureItem>
                    <FeatureItem>
                      <FeatureDot />
                      <FeatureText>Post-launch maintenance (30 days)</FeatureText>
                    </FeatureItem>
                  </FeaturesList>
                  <QuoteButton>
                    <QuoteButtonText>Get a Quote</QuoteButtonText>
                  </QuoteButton>
                </ServiceDetails>
              )}
            </ServiceCard>
          ))}
        </ServicesContainer>

        <ProcessSection>
          <SectionTitle>Our Process</SectionTitle>
          <SectionDescription>
            We follow a structured approach to deliver exceptional results that exceed expectations.
          </SectionDescription>

          <ProcessSteps>
            <ProcessStep>
              <ProcessNumber>01</ProcessNumber>
              <ProcessStepTitle>Discovery</ProcessStepTitle>
              <ProcessStepDescription>
                We begin by understanding your business, goals, and target audience.
              </ProcessStepDescription>
            </ProcessStep>

            <ProcessStep>
              <ProcessNumber>02</ProcessNumber>
              <ProcessStepTitle>Planning</ProcessStepTitle>
              <ProcessStepDescription>
                Our team develops a detailed project plan with timelines and specifications.
              </ProcessStepDescription>
            </ProcessStep>

            <ProcessStep>
              <ProcessNumber>03</ProcessNumber>
              <ProcessStepTitle>Design & Development</ProcessStepTitle>
              <ProcessStepDescription>
                We create stunning designs and build robust, scalable solutions.
              </ProcessStepDescription>
            </ProcessStep>

            <ProcessStep>
              <ProcessNumber>04</ProcessNumber>
              <ProcessStepTitle>Testing & Launch</ProcessStepTitle>
              <ProcessStepDescription>
                Rigorous quality assurance ensures your product is flawless before launch.
              </ProcessStepDescription>
            </ProcessStep>

            <ProcessStep>
              <ProcessNumber>05</ProcessNumber>
              <ProcessStepTitle>Support & Growth</ProcessStepTitle>
              <ProcessStepDescription>
                Our relationship continues with ongoing support and strategic guidance.
              </ProcessStepDescription>
            </ProcessStep>
          </ProcessSteps>
        </ProcessSection>
      </ScrollView>
    </Container>
  );
};

// Styled Components
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const HeaderSection = styled.View`
  padding: 80px 20px 40px;
  align-items: center;
`;

const PageTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
  text-align: center;
`;

const PageDescription = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  line-height: 24px;
  max-width: 300px;
`;

const ServicesContainer = styled.View`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const ServiceCard = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.border};
`;

const ServiceHeader = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const ServiceIconContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: rgba(182, 255, 0, 0.1);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const ServiceInfo = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const ServiceTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #B6FF00;
`;

const ExpandButton = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

const ServiceDetails = styled.View`
  padding: 0 20px 20px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.border};
`;

const ServiceDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 20px;
  line-height: 22px;
  padding-top: 15px;
`;

const FeaturesTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
`;

const FeaturesList = styled.View`
  margin-bottom: 20px;
`;

const FeatureItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const FeatureDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #B6FF00;
  margin-right: 10px;
`;

const FeatureText = styled.Text`
  color: ${props => props.theme.textSecondary};
  flex: 1;
`;

const QuoteButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const QuoteButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const ProcessSection = styled.View`
  padding: 40px 20px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
  text-align: center;
`;

const SectionDescription = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  line-height: 24px;
  margin-bottom: 30px;
`;

const ProcessSteps = styled.View`
  gap: 30px;
`;

const ProcessStep = styled.View`
  align-items: center;
`;

const ProcessNumber = styled.Text`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.theme.card};
  border: 2px solid #B6FF00;
  color: #B6FF00;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 46px;
  margin-bottom: 15px;
`;

const ProcessStepTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
`;

const ProcessStepDescription = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
  text-align: center;
  line-height: 20px;
  max-width: 250px;
`;

export default ServicesScreen;
