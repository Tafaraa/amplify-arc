import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { PRICING_PLANS, SERVICES } from '../../../shared/data';
import { formatPrice } from '../../../shared/utils';

const PricingScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('solo-services');

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <PageTitle>Pricing Plans</PageTitle>
          <PageDescription>
            Transparent pricing options designed to fit your specific needs and budget.
          </PageDescription>
        </HeaderSection>

        <PlanTabsContainer>
          {PRICING_PLANS.map(plan => (
            <PlanTab 
              key={plan.id}
              isActive={selectedPlan === plan.id}
              onPress={() => setSelectedPlan(plan.id)}
            >
              <PlanTabText isActive={selectedPlan === plan.id}>{plan.title}</PlanTabText>
            </PlanTab>
          ))}
        </PlanTabsContainer>

        <PricingContent>
          {selectedPlan === 'solo-services' && (
            <SoloServicesContent>
              <SectionSubtitle>Choose Your Services</SectionSubtitle>
              
              {SERVICES.map(service => (
                <ServiceItem key={service.id}>
                  <ServiceInfo>
                    <ServiceName>{service.title}</ServiceName>
                    <ServiceDescription>{service.description.substring(0, 80)}...</ServiceDescription>
                  </ServiceInfo>
                  <ServicePriceContainer>
                    <ServicePrice>{formatPrice(service.price)}</ServicePrice>
                    <SelectButton>
                      <SelectButtonText>Select</SelectButtonText>
                    </SelectButton>
                  </ServicePriceContainer>
                </ServiceItem>
              ))}
            </SoloServicesContent>
          )}

          {selectedPlan === 'combo-deals' && (
            <ComboDealsContent>
              <SectionSubtitle>Popular Combinations</SectionSubtitle>
              
              <ComboCard>
                <ComboHeader>
                  <ComboTitle>Web + Mobile App</ComboTitle>
                  <ComboPrice>{formatPrice(1500)}</ComboPrice>
                </ComboHeader>
                <ComboDescription>
                  Full-stack development for both web and mobile platforms with consistent design and functionality.
                </ComboDescription>
                <FeaturesList>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Responsive web application</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Native mobile experience</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Shared codebase for efficiency</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Cross-platform consistency</FeatureText>
                  </FeatureItem>
                </FeaturesList>
                <SelectComboButton>
                  <SelectComboButtonText>Select This Package</SelectComboButtonText>
                </SelectComboButton>
              </ComboCard>

              <ComboCard>
                <ComboHeader>
                  <ComboTitle>Design + Development</ComboTitle>
                  <ComboPrice>{formatPrice(1400)}</ComboPrice>
                </ComboHeader>
                <ComboDescription>
                  End-to-end solution from UX/UI design to full implementation of your digital product.
                </ComboDescription>
                <FeaturesList>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>User research & wireframing</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>UI/UX design</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Frontend development</FeatureText>
                  </FeatureItem>
                  <FeatureItem>
                    <FeatureDot />
                    <FeatureText>Backend integration</FeatureText>
                  </FeatureItem>
                </FeaturesList>
                <SelectComboButton>
                  <SelectComboButtonText>Select This Package</SelectComboButtonText>
                </SelectComboButton>
              </ComboCard>
            </ComboDealsContent>
          )}

          {selectedPlan === 'custom-package' && (
            <CustomPackageContent>
              <SectionSubtitle>Tailored to Your Needs</SectionSubtitle>
              <CustomPackageDescription>
                Our custom packages are designed specifically for your unique business requirements. 
                Tell us about your project, and we'll create a tailored solution that perfectly fits your needs and budget.
              </CustomPackageDescription>
              
              <CustomFeatureContainer>
                <CustomFeature>
                  <CustomFeatureIcon>🎯</CustomFeatureIcon>
                  <CustomFeatureTitle>Personalized Strategy</CustomFeatureTitle>
                  <CustomFeatureDescription>
                    Customized approach based on your specific business goals.
                  </CustomFeatureDescription>
                </CustomFeature>
                
                <CustomFeature>
                  <CustomFeatureIcon>🔄</CustomFeatureIcon>
                  <CustomFeatureTitle>Flexible Scope</CustomFeatureTitle>
                  <CustomFeatureDescription>
                    Adaptable project scope that can evolve as your requirements change.
                  </CustomFeatureDescription>
                </CustomFeature>
                
                <CustomFeature>
                  <CustomFeatureIcon>💰</CustomFeatureIcon>
                  <CustomFeatureTitle>Budget Control</CustomFeatureTitle>
                  <CustomFeatureDescription>
                    Transparent pricing with options to prioritize features based on your budget.
                  </CustomFeatureDescription>
                </CustomFeature>
              </CustomFeatureContainer>
              
              <CustomQuoteButton>
                <CustomQuoteButtonText>Request a Custom Quote</CustomQuoteButtonText>
              </CustomQuoteButton>
            </CustomPackageContent>
          )}
        </PricingContent>

        <FAQSection>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          
          <FAQItem>
            <FAQQuestion>
              <FAQQuestionText>How do you determine pricing for custom projects?</FAQQuestionText>
              <Ionicons name="chevron-down" size={20} color="#B6FF00" />
            </FAQQuestion>
            <FAQAnswer>
              We evaluate project complexity, scope, timeline, and resources required. After an initial consultation, 
              we provide a detailed quote that breaks down all costs.
            </FAQAnswer>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              <FAQQuestionText>Do you offer ongoing maintenance plans?</FAQQuestionText>
              <Ionicons name="chevron-down" size={20} color="#B6FF00" />
            </FAQQuestion>
          </FAQItem>
          
          <FAQItem>
            <FAQQuestion>
              <FAQQuestionText>What payment methods do you accept?</FAQQuestionText>
              <Ionicons name="chevron-down" size={20} color="#B6FF00" />
            </FAQQuestion>
          </FAQItem>
        </FAQSection>
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

const PlanTabsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const PlanTab = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: ${props => props.isActive ? '#B6FF00' : 'transparent'};
  border: 2px solid ${props => props.isActive ? '#B6FF00' : props.theme.border};
  border-radius: 8px;
  padding: 12px 20px;
  margin: 5px;
`;

const PlanTabText = styled.Text<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#000' : props.theme.text};
  font-weight: bold;
  font-size: 14px;
`;

const PricingContent = styled.View`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const SectionSubtitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

// Solo Services Styles
const SoloServicesContent = styled.View``;

const ServiceItem = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.border};
`;

const ServiceInfo = styled.View`
  margin-bottom: 15px;
`;

const ServiceName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ServiceDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  font-size: 14px;
  line-height: 20px;
`;

const ServicePriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.border};
`;

const ServicePrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #B6FF00;
`;

const SelectButton = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px solid #B6FF00;
  border-radius: 8px;
  padding: 8px 15px;
`;

const SelectButtonText = styled.Text`
  color: #B6FF00;
  font-weight: bold;
  font-size: 14px;
`;

// Combo Deals Styles
const ComboDealsContent = styled.View``;

const ComboCard = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.border};
`;

const ComboHeader = styled.View`
  margin-bottom: 15px;
`;

const ComboTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ComboPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #B6FF00;
`;

const ComboDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 15px;
  line-height: 22px;
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

const SelectComboButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
`;

const SelectComboButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

// Custom Package Styles
const CustomPackageContent = styled.View``;

const CustomPackageDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  text-align: center;
  line-height: 22px;
  margin-bottom: 30px;
`;

const CustomFeatureContainer = styled.View`
  margin-bottom: 30px;
`;

const CustomFeature = styled.View`
  align-items: center;
  margin-bottom: 25px;
`;

const CustomFeatureIcon = styled.Text`
  font-size: 36px;
  margin-bottom: 15px;
`;

const CustomFeatureTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
`;

const CustomFeatureDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  text-align: center;
  line-height: 20px;
  max-width: 250px;
`;

const CustomQuoteButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
`;

const CustomQuoteButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

// FAQ Section Styles
const FAQSection = styled.View`
  padding: 20px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

const FAQItem = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid ${props => props.theme.border};
`;

const FAQQuestion = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FAQQuestionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  flex: 1;
`;

const FAQAnswer = styled.Text`
  color: ${props => props.theme.textSecondary};
  margin-top: 15px;
  line-height: 22px;
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.border};
`;

export default PricingScreen;
