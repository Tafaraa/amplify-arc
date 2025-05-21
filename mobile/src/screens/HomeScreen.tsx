import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SERVICES } from '../../../shared/data';
import Header from '../components/Header';
import AnimatedCard, { CardTitle, CardDescription } from '../components/AnimatedCard';
import { useThemeContext } from '../contexts/ThemeContext';
import { MobileTheme } from '../../../shared/theme.mobile';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Container>
      <Header showThemeToggle toggleTheme={toggleTheme} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <HeroSection>
          <HeroGradient
            colors={['rgba(182, 255, 0, 0.2)', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
          <HeroContent>
            <Subtitle>Premium Digital Agency</Subtitle>
            <Title>Amplifying your vision with <AccentText>stunning digital experiences</AccentText></Title>
            <Description>
              We craft exceptional digital solutions that elevate brands, engage users, and drive business growth.
            </Description>
            <ButtonContainer>
              <PrimaryButton onPress={() => navigation.navigate('Quote')}>
                <ButtonText>Get a Quote</ButtonText>
                <Ionicons name="arrow-forward" size={18} color="#000" />
              </PrimaryButton>
              <SecondaryButton onPress={() => navigation.navigate('Portfolio')}>
                <SecondaryButtonText>View Our Work</SecondaryButtonText>
              </SecondaryButton>
            </ButtonContainer>
          </HeroContent>
          <GlassMorphCard />
        </HeroSection>

        {/* Services Section */}
        <SectionContainer>
          <SectionHeader>
            <SectionSubtitle>What We Do</SectionSubtitle>
            <SectionTitle>Premium Services</SectionTitle>
            <SectionDescription>
              We offer a comprehensive suite of digital services to transform your ideas into powerful, market-ready solutions.
            </SectionDescription>
          </SectionHeader>

          {/* Services Cards */}
          <ServicesContainer>
            {SERVICES.slice(0, 3).map((service, index) => (
              <AnimatedCard 
                key={service.id}
                animationType="slide"
                delay={index * 100}
                onPress={() => navigation.navigate('Services')}
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  borderRadius: 12,
                  padding: 25,
                  marginBottom: 20,
                  borderWidth: 1,
                  borderColor: 'rgba(182, 255, 0, 0.2)'
                }}
              >
                <ServiceIconContainer>
                  <Ionicons 
                    name={getServiceIcon(service.icon)} 
                    size={24} 
                    color="#B6FF00" 
                  />
                </ServiceIconContainer>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description.substring(0, 100)}...</ServiceDescription>
                <ServiceLink>
                  <ServiceLinkText>Learn More</ServiceLinkText>
                  <Ionicons name="arrow-forward" size={14} color="#B6FF00" />
                </ServiceLink>
              </AnimatedCard>
            ))}
          </ServicesContainer>

          <ViewAllButton onPress={() => navigation.navigate('Services')}>
            <ViewAllButtonText>View All Services</ViewAllButtonText>
          </ViewAllButton>
        </SectionContainer>

        {/* CTA Section */}
        <AnimatedCard 
          animationType="fade" 
          delay={300}
          style={{ 
            margin: 20, 
            padding: 30, 
            backgroundColor: 'rgba(182, 255, 0, 0.05)', 
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'rgba(182, 255, 0, 0.1)',
            alignItems: 'center'
          }}
        >
          <CTATitle>Ready to elevate your digital presence?</CTATitle>
          <CTAButton onPress={() => navigation.navigate('Quote')}>
            <CTAButtonText>Get Started Today</CTAButtonText>
          </CTAButton>
        </AnimatedCard>
      </ScrollView>
    </Container>
  );
};

// Helper function to map service icons to Ionicons
const getServiceIcon = (iconName: string): string => {
  switch (iconName) {
    case 'mobile-alt':
      return 'phone-portrait-outline';
    case 'laptop-code':
      return 'laptop-outline';
    case 'pencil-ruler':
      return 'create-outline';
    case 'paint-brush':
      return 'brush-outline';
    case 'tools':
      return 'construct-outline';
    case 'lightbulb':
      return 'bulb-outline';
    default:
      return 'apps-outline';
  }
};

// Styled Components
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: { theme: MobileTheme }) => props.theme.background};
`;

const HeroSection = styled.View`
  position: relative;
  height: 600px;
  padding: 20px;
  justify-content: center;
`;

const HeroGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const HeroContent = styled.View`
  z-index: 1;
  margin-bottom: 30px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
  color: #B6FF00;
  font-weight: 500;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  line-height: 42px;
  margin-bottom: 15px;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
`;

const AccentText = styled.Text`
  color: #B6FF00;
`;

const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 25px;
  color: ${(props: { theme: MobileTheme }) => props.theme.textSecondary};
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const PrimaryButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  padding: 15px 25px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const SecondaryButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 15px 25px;
  border-radius: 8px;
  border: 2px solid #B6FF00;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SecondaryButtonText = styled.Text`
  color: #B6FF00;
  font-weight: bold;
  font-size: 16px;
`;

const GlassMorphCard = styled.View`
  width: ${width - 40}px;
  height: 200px;
  background-color: rgba(182, 255, 0, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(182, 255, 0, 0.2);
  margin-top: 20px;
  align-self: center;
`;

const SectionContainer = styled.View`
  padding: 40px 20px;
`;

const SectionHeader = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

const SectionSubtitle = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #B6FF00;
  margin-bottom: 10px;
`;

const SectionTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
`;

const SectionDescription = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${(props: { theme: MobileTheme }) => props.theme.textSecondary};
  line-height: 24px;
`;

const ServicesContainer = styled.View`
  gap: 20px;
`;

const ServiceCard = styled.View`
  background-color: ${(props: { theme: MobileTheme }) => props.theme.card};
  border-radius: 12px;
  padding: 25px 20px;
  margin-bottom: 20px;
  border: 1px solid ${(props: { theme: MobileTheme }) => props.theme.border};
`;

const ServiceIconContainer = styled.View`
  width: 50px;
  height: 50px;
  background-color: rgba(182, 255, 0, 0.1);
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
`;

const ServiceDescription = styled.Text`
  color: ${(props: { theme: MobileTheme }) => props.theme.textSecondary};
  margin-bottom: 15px;
  line-height: 22px;
`;

const ServiceLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const ServiceLinkText = styled.Text`
  color: #B6FF00;
  font-weight: bold;
`;

const ViewAllButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 20px;
  padding: 15px 25px;
  background-color: transparent;
  border: 2px solid #B6FF00;
  border-radius: 8px;
`;

const ViewAllButtonText = styled.Text`
  color: #B6FF00;
  font-weight: bold;
  font-size: 16px;
`;

const CTAContainer = styled.View`
  margin: 20px;
  padding: 30px 20px;
  background-color: rgba(182, 255, 0, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(182, 255, 0, 0.1);
  align-items: center;
`;

const CTATitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
`;

const CTAButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  padding: 15px 25px;
  border-radius: 8px;
`;

const CTAButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export default HomeScreen;
