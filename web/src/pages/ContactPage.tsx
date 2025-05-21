import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import { COLORS, FONTS, BREAKPOINTS } from '@shared/theme';
import { isValidEmail } from '@shared/utils';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [requestCallback, setRequestCallback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      try {
        // In a real implementation, this would use EmailJS or another service
        // to send the form data to the specified email address
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setRequestCallback(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({...errors, submit: 'Failed to submit form. Please try again.'});
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <HeaderTitle>Contact Us</HeaderTitle>
            <HeaderDescription>
              Have a question or ready to start your project? Get in touch with our team.
            </HeaderDescription>
          </HeaderContent>
        </div>
      </PageHeader>

      <ContactSection>
        <div className="container">
          <ContactContainer>
            <ContactInfo>
              <InfoTitle>Get in Touch</InfoTitle>
              <InfoText>
                We're here to answer any questions you have about our services, pricing, or how we can help your business grow.
              </InfoText>
              
              <ContactDetails>
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactItemContent>
                    <ContactItemTitle>Visit Us</ContactItemTitle>
                    <ContactItemText>123 Innovation Way, Tech District, San Francisco, CA 94103</ContactItemText>
                  </ContactItemContent>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactItemContent>
                    <ContactItemTitle>Call Us</ContactItemTitle>
                    <ContactItemText>+1 (555) 123-4567</ContactItemText>
                  </ContactItemContent>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactItemContent>
                    <ContactItemTitle>Email Us</ContactItemTitle>
                    <ContactItemText>hello@amplifyarc.com</ContactItemText>
                  </ContactItemContent>
                </ContactItem>
              </ContactDetails>
              
              <BusinessHours>
                <BusinessHoursTitle>Business Hours</BusinessHoursTitle>
                <BusinessHoursText>Monday - Friday: 9:00 AM - 6:00 PM</BusinessHoursText>
                <BusinessHoursText>Saturday - Sunday: Closed</BusinessHoursText>
              </BusinessHours>
            </ContactInfo>
            
            <ContactForm>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <FormTitle>Send Us a Message</FormTitle>
                  
                  <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      hasError={!!errors.name}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </FormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        hasError={!!errors.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <Label htmlFor="message">Message *</Label>
                    <TextArea 
                      id="message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      hasError={!!errors.message}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                  </FormGroup>
                  
                  <CheckboxGroup>
                    <Checkbox 
                      id="requestCallback"
                      checked={requestCallback}
                      onChange={() => setRequestCallback(!requestCallback)}
                    >
                      {requestCallback && <FaCheck />}
                    </Checkbox>
                    <CheckboxLabel htmlFor="requestCallback">
                      Request a callback
                    </CheckboxLabel>
                  </CheckboxGroup>
                  
                  {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
                  
                  <SubmitButton 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </SubmitButton>
                </form>
              ) : (
                <SuccessMessage
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SuccessIcon>✓</SuccessIcon>
                  <SuccessTitle>Message Sent!</SuccessTitle>
                  <SuccessText>
                    Thank you for contacting Amplify ARC. We've received your message and will get back to you shortly.
                  </SuccessText>
                  <ResetButton onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </ResetButton>
                </SuccessMessage>
              )}
            </ContactForm>
          </ContactContainer>
        </div>
      </ContactSection>

      <MapSection>
        <MapContainer>
          {/* In a real implementation, this would be a Google Maps or Mapbox component */}
          <MapPlaceholder>
            <MapText>Interactive Map Coming Soon</MapText>
          </MapPlaceholder>
        </MapContainer>
      </MapSection>
    </>
  );
};

// Page Header Styles
const PageHeader = styled.section`
  background-color: ${props => props.theme.background};
  padding: 10rem 0 5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(182, 255, 0, 0.15) 0%, rgba(0, 0, 0, 0) 50%);
    z-index: 1;
  }
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

// Contact Section Styles
const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.backgroundAlt};
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: 1fr;
  }
`;

// Contact Info Styles
const ContactInfo = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 16px;
  padding: 3rem 2rem;
  height: fit-content;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const InfoText = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ContactDetails = styled.div`
  margin-bottom: 2.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(182, 255, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.AMPLIFY_LIME};
  font-size: 1.25rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ContactItemContent = styled.div``;

const ContactItemTitle = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const ContactItemText = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.95rem;
`;

const BusinessHours = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const BusinessHoursTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
`;

const BusinessHoursText = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Contact Form Styles
const ContactForm = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 16px;
  padding: 3rem 2rem;
  
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding: 2rem 1.5rem;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex-direction: column;
    gap: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.text};
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.hasError ? props.theme.error : props.theme.border};
  border-radius: 8px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.AMPLIFY_LIME};
    box-shadow: 0 0 0 3px rgba(182, 255, 0, 0.2);
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid ${props => props.hasError ? props.theme.error : props.theme.border};
  border-radius: 8px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.AMPLIFY_LIME};
    box-shadow: 0 0 0 3px rgba(182, 255, 0, 0.2);
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    opacity: 0.7;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const Checkbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${props => props.checked ? COLORS.AMPLIFY_LIME : props.theme.border};
  background-color: ${props => props.checked ? COLORS.AMPLIFY_LIME : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin-right: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const CheckboxLabel = styled.label`
  color: ${props => props.theme.textSecondary};
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  display: inline-block;
  width: 100%;
  background-color: ${COLORS.AMPLIFY_LIME};
  color: #000;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(182, 255, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Success Message Styles
const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${COLORS.AMPLIFY_LIME};
  color: #000;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const SuccessText = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ResetButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: 2px solid ${COLORS.AMPLIFY_LIME};
  color: ${COLORS.AMPLIFY_LIME};
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${COLORS.AMPLIFY_LIME};
    color: #000;
    transform: translateY(-3px);
  }
`;

// Map Section Styles
const MapSection = styled.section`
  height: 400px;
  background-color: ${props => props.theme.background};
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.border};
`;

const MapText = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.25rem;
`;

export default ContactPage;
