import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { SERVICES } from '../../../shared/data';
import { formatPrice, calculateTotalPrice, isValidEmail } from '../../../shared/utils';

const QuoteScreen = ({ navigation }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectDetails, setProjectDetails] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const totalPrice = calculateTotalPrice(selectedServices, SERVICES);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: {[key: string]: string} = {};
    
    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        newErrors.services = 'Please select at least one service';
      }
    } else if (currentStep === 2) {
      if (!name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep(2)) {
      // In a real app, this would send the form data to a server
      Alert.alert(
        "Quote Request Submitted",
        "Thank you for your interest in Amplify ARC. We've received your quote request and will get back to you within 24-48 hours with a detailed proposal.",
        [
          { 
            text: "OK", 
            onPress: () => navigation.navigate('Home')
          }
        ]
      );
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <PageTitle>Get a Quote</PageTitle>
          <PageDescription>
            Tell us about your project, and we'll provide you with a custom quote tailored to your needs.
          </PageDescription>
        </HeaderSection>

        <StepIndicator>
          <StepItem isActive={step === 1} isCompleted={step > 1}>
            <StepNumber isActive={step === 1} isCompleted={step > 1}>1</StepNumber>
            <StepLabel>Select Services</StepLabel>
          </StepItem>
          <StepConnector isCompleted={step > 1} />
          <StepItem isActive={step === 2} isCompleted={step > 2}>
            <StepNumber isActive={step === 2} isCompleted={step > 2}>2</StepNumber>
            <StepLabel>Your Details</StepLabel>
          </StepItem>
          <StepConnector isCompleted={step > 2} />
          <StepItem isActive={step === 3} isCompleted={step > 3}>
            <StepNumber isActive={step === 3} isCompleted={step > 3}>3</StepNumber>
            <StepLabel>Review & Submit</StepLabel>
          </StepItem>
        </StepIndicator>

        <StepContent>
          {step === 1 && (
            <>
              <StepTitle>Select the services you need</StepTitle>
              
              {errors.services && <ErrorText>{errors.services}</ErrorText>}
              
              <ServicesList>
                {SERVICES.map(service => (
                  <ServiceCheckbox 
                    key={service.id}
                    isSelected={selectedServices.includes(service.id)}
                    onPress={() => toggleService(service.id)}
                  >
                    <CheckboxIndicator isChecked={selectedServices.includes(service.id)}>
                      {selectedServices.includes(service.id) && (
                        <Ionicons name="checkmark" size={16} color="#000" />
                      )}
                    </CheckboxIndicator>
                    <ServiceInfo>
                      <ServiceName>{service.title}</ServiceName>
                      <ServicePrice>{formatPrice(service.price)}</ServicePrice>
                    </ServiceInfo>
                  </ServiceCheckbox>
                ))}
              </ServicesList>
              
              <FormGroup>
                <Label>Project Details (Optional)</Label>
                <TextArea 
                  placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                  value={projectDetails}
                  onChangeText={setProjectDetails}
                  multiline
                  numberOfLines={5}
                  placeholderTextColor="#666"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Approximate Budget (Optional)</Label>
                <Input 
                  placeholder="e.g. $5,000 - $10,000"
                  value={budget}
                  onChangeText={setBudget}
                  placeholderTextColor="#666"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Desired Timeline (Optional)</Label>
                <Input 
                  placeholder="e.g. 2-3 months"
                  value={timeline}
                  onChangeText={setTimeline}
                  placeholderTextColor="#666"
                />
              </FormGroup>
              
              <ButtonContainer>
                <PrimaryButton onPress={handleNextStep}>
                  <ButtonText>Continue</ButtonText>
                  <Ionicons name="arrow-forward" size={18} color="#000" />
                </PrimaryButton>
              </ButtonContainer>
            </>
          )}

          {step === 2 && (
            <>
              <StepTitle>Your Contact Information</StepTitle>
              
              <FormGroup>
                <Label>Full Name *</Label>
                <Input 
                  placeholder="Your full name"
                  value={name}
                  onChangeText={setName}
                  hasError={!!errors.name}
                  placeholderTextColor="#666"
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </FormGroup>
              
              <FormGroup>
                <Label>Email Address *</Label>
                <Input 
                  placeholder="Your email address"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  hasError={!!errors.email}
                  placeholderTextColor="#666"
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </FormGroup>
              
              <FormGroup>
                <Label>Phone Number (Optional)</Label>
                <Input 
                  placeholder="Your phone number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                  placeholderTextColor="#666"
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Company (Optional)</Label>
                <Input 
                  placeholder="Your company name"
                  value={company}
                  onChangeText={setCompany}
                  placeholderTextColor="#666"
                />
              </FormGroup>
              
              <ButtonContainer>
                <SecondaryButton onPress={handlePrevStep}>
                  <ButtonText>Back</ButtonText>
                </SecondaryButton>
                <PrimaryButton onPress={handleNextStep}>
                  <ButtonText>Review Quote</ButtonText>
                  <Ionicons name="arrow-forward" size={18} color="#000" />
                </PrimaryButton>
              </ButtonContainer>
            </>
          )}

          {step === 3 && (
            <>
              <StepTitle>Review Your Quote</StepTitle>
              
              <QuoteSummary>
                <SummarySection>
                  <SummaryTitle>Selected Services</SummaryTitle>
                  {selectedServices.map(serviceId => {
                    const service = SERVICES.find(s => s.id === serviceId);
                    return service ? (
                      <ServiceListItem key={service.id}>
                        <ServiceListName>{service.title}</ServiceListName>
                        <ServiceListPrice>{formatPrice(service.price)}</ServiceListPrice>
                      </ServiceListItem>
                    ) : null;
                  })}
                  
                  <TotalSection>
                    <TotalLabel>Estimated Total:</TotalLabel>
                    <TotalAmount>{formatPrice(totalPrice)}</TotalAmount>
                  </TotalSection>
                  
                  <SummaryNote>
                    * This is an estimated price. The final quote may vary based on project specifics.
                  </SummaryNote>
                </SummarySection>
                
                {projectDetails && (
                  <SummarySection>
                    <SummaryTitle>Project Details</SummaryTitle>
                    <SummaryText>{projectDetails}</SummaryText>
                  </SummarySection>
                )}
                
                <SummarySection>
                  <SummaryTitle>Contact Information</SummaryTitle>
                  <ContactInfo>
                    <ContactItem>
                      <ContactLabel>Name:</ContactLabel>
                      <ContactValue>{name}</ContactValue>
                    </ContactItem>
                    <ContactItem>
                      <ContactLabel>Email:</ContactLabel>
                      <ContactValue>{email}</ContactValue>
                    </ContactItem>
                    {phone && (
                      <ContactItem>
                        <ContactLabel>Phone:</ContactLabel>
                        <ContactValue>{phone}</ContactValue>
                      </ContactItem>
                    )}
                    {company && (
                      <ContactItem>
                        <ContactLabel>Company:</ContactLabel>
                        <ContactValue>{company}</ContactValue>
                      </ContactItem>
                    )}
                  </ContactInfo>
                </SummarySection>
              </QuoteSummary>
              
              <ButtonContainer>
                <SecondaryButton onPress={handlePrevStep}>
                  <ButtonText>Back</ButtonText>
                </SecondaryButton>
                <SubmitButton onPress={handleSubmit}>
                  <ButtonText>Submit Quote Request</ButtonText>
                  <Ionicons name="paper-plane" size={18} color="#000" />
                </SubmitButton>
              </ButtonContainer>
            </>
          )}
        </StepContent>
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

const StepIndicator = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const StepItem = styled.View<{ isActive: boolean; isCompleted: boolean }>`
  align-items: center;
`;

const StepNumber = styled.Text<{ isActive: boolean; isCompleted: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => 
    props.isCompleted ? '#B6FF00' : 
    props.isActive ? 'rgba(182, 255, 0, 0.2)' : 
    props.theme.card};
  border: 2px solid ${props => 
    props.isCompleted || props.isActive ? '#B6FF00' : 
    props.theme.border};
  color: ${props => 
    props.isCompleted ? '#000' : 
    props.isActive ? '#B6FF00' : 
    props.theme.textSecondary};
  text-align: center;
  line-height: 26px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StepLabel = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.textSecondary};
`;

const StepConnector = styled.View<{ isCompleted: boolean }>`
  width: 30px;
  height: 2px;
  background-color: ${props => props.isCompleted ? '#B6FF00' : props.theme.border};
  margin: 0 5px;
`;

const StepContent = styled.View`
  padding: 0 20px;
  margin-bottom: 40px;
`;

const StepTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

const ServicesList = styled.View`
  margin-bottom: 20px;
`;

const ServiceCheckbox = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.isSelected ? 'rgba(182, 255, 0, 0.1)' : props.theme.card};
  border: 2px solid ${props => props.isSelected ? '#B6FF00' : props.theme.border};
  border-radius: 12px;
  margin-bottom: 10px;
`;

const CheckboxIndicator = styled.View<{ isChecked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${props => props.isChecked ? '#B6FF00' : props.theme.border};
  background-color: ${props => props.isChecked ? '#B6FF00' : 'transparent'};
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const ServiceInfo = styled.View`
  flex: 1;
`;

const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ServicePrice = styled.Text`
  font-weight: 600;
  color: #B6FF00;
`;

const FormGroup = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text};
  margin-bottom: 8px;
`;

const Input = styled.TextInput<{ hasError?: boolean }>`
  background-color: ${props => props.theme.background};
  padding: 12px 15px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${props => props.hasError ? 'red' : props.theme.border};
  color: ${props => props.theme.text};
  font-size: 16px;
`;

const TextArea = styled.TextInput`
  background-color: ${props => props.theme.background};
  padding: 12px 15px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${props => props.theme.border};
  color: ${props => props.theme.text};
  font-size: 16px;
  min-height: 120px;
  text-align-vertical: top;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const PrimaryButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  padding: 15px 20px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  margin-left: 5px;
`;

const SecondaryButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 15px 20px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.border};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 5px;
`;

const SubmitButton = styled(PrimaryButton)`
  flex: 2;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.primary === '#B6FF00' ? '#000' : props.theme.text};
  font-weight: bold;
  font-size: 16px;
`;

// Quote Summary Styles
const QuoteSummary = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.border};
`;

const SummarySection = styled.View`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SummaryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.border};
`;

const ServiceListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.border};
  border-style: dashed;
  
  &:last-child {
    border-bottom-width: 0;
  }
`;

const ServiceListName = styled.Text`
  color: ${props => props.theme.text};
`;

const ServiceListPrice = styled.Text`
  font-weight: 600;
  color: #B6FF00;
`;

const TotalSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgba(182, 255, 0, 0.1);
  border-radius: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
`;

const TotalAmount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #B6FF00;
`;

const SummaryNote = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.textSecondary};
  font-style: italic;
`;

const SummaryText = styled.Text`
  color: ${props => props.theme.textSecondary};
  line-height: 20px;
`;

const ContactInfo = styled.View``;

const ContactItem = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const ContactLabel = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.text};
  width: 80px;
`;

const ContactValue = styled.Text`
  color: ${props => props.theme.textSecondary};
  flex: 1;
`;

export default QuoteScreen;
