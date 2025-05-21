import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, Switch, Alert } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { isValidEmail } from '../../../shared/utils';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [requestCallback, setRequestCallback] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // In a real app, this would send the form data to a server
      Alert.alert(
        "Message Sent",
        "Thank you for contacting Amplify ARC. We'll get back to you shortly.",
        [{ text: "OK" }]
      );
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setRequestCallback(false);
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <PageTitle>Contact Us</PageTitle>
          <PageDescription>
            Have a question or ready to start your project? Get in touch with our team.
          </PageDescription>
        </HeaderSection>

        <ContactInfoSection>
          <SectionTitle>Get in Touch</SectionTitle>
          
          <ContactItem>
            <ContactIconContainer>
              <Ionicons name="location-outline" size={24} color="#B6FF00" />
            </ContactIconContainer>
            <ContactItemContent>
              <ContactItemTitle>Visit Us</ContactItemTitle>
              <ContactItemText>123 Innovation Way, Tech District, San Francisco, CA 94103</ContactItemText>
            </ContactItemContent>
          </ContactItem>
          
          <ContactItem>
            <ContactIconContainer>
              <Ionicons name="call-outline" size={24} color="#B6FF00" />
            </ContactIconContainer>
            <ContactItemContent>
              <ContactItemTitle>Call Us</ContactItemTitle>
              <ContactItemText>+1 (555) 123-4567</ContactItemText>
            </ContactItemContent>
          </ContactItem>
          
          <ContactItem>
            <ContactIconContainer>
              <Ionicons name="mail-outline" size={24} color="#B6FF00" />
            </ContactIconContainer>
            <ContactItemContent>
              <ContactItemTitle>Email Us</ContactItemTitle>
              <ContactItemText>hello@amplifyarc.com</ContactItemText>
            </ContactItemContent>
          </ContactItem>
          
          <BusinessHours>
            <BusinessHoursTitle>Business Hours</BusinessHoursTitle>
            <BusinessHoursText>Monday - Friday: 9:00 AM - 6:00 PM</BusinessHoursText>
            <BusinessHoursText>Saturday - Sunday: Closed</BusinessHoursText>
          </BusinessHours>
        </ContactInfoSection>

        <FormSection>
          <SectionTitle>Send Us a Message</SectionTitle>
          
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
            <Label>Message *</Label>
            <TextArea 
              placeholder="How can we help you?"
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={5}
              hasError={!!errors.message}
              placeholderTextColor="#666"
            />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
          </FormGroup>
          
          <SwitchContainer>
            <Switch
              value={requestCallback}
              onValueChange={setRequestCallback}
              trackColor={{ false: "#333", true: "rgba(182, 255, 0, 0.4)" }}
              thumbColor={requestCallback ? "#B6FF00" : "#f4f3f4"}
            />
            <SwitchLabel>Request a callback</SwitchLabel>
          </SwitchContainer>
          
          <SubmitButton onPress={handleSubmit}>
            <SubmitButtonText>Send Message</SubmitButtonText>
          </SubmitButton>
        </FormSection>

        <MapSection>
          <MapPlaceholder>
            <MapText>Interactive Map Coming Soon</MapText>
          </MapPlaceholder>
        </MapSection>
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

const ContactInfoSection = styled.View`
  margin: 0 20px 30px;
  padding: 20px;
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
`;

const ContactItem = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const ContactIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(182, 255, 0, 0.1);
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const ContactItemContent = styled.View`
  flex: 1;
`;

const ContactItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ContactItemText = styled.Text`
  color: ${props => props.theme.textSecondary};
  line-height: 20px;
`;

const BusinessHours = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.border};
`;

const BusinessHoursTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 10px;
`;

const BusinessHoursText = styled.Text`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 5px;
`;

const FormSection = styled.View`
  margin: 0 20px 30px;
  padding: 20px;
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
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

const TextArea = styled.TextInput<{ hasError?: boolean }>`
  background-color: ${props => props.theme.background};
  padding: 12px 15px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${props => props.hasError ? 'red' : props.theme.border};
  color: ${props => props.theme.text};
  font-size: 16px;
  min-height: 120px;
  text-align-vertical: top;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const SwitchLabel = styled.Text`
  color: ${props => props.theme.textSecondary};
  margin-left: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #B6FF00;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const SubmitButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const MapSection = styled.View`
  height: 200px;
  margin: 0 20px 40px;
  border-radius: 12px;
  overflow: hidden;
`;

const MapPlaceholder = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.card};
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.border};
`;

const MapText = styled.Text`
  color: ${props => props.theme.textSecondary};
  font-size: 16px;
`;

export default ContactScreen;
