import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Dimensions, Modal, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { PORTFOLIO_ITEMS, TESTIMONIALS } from '../../../shared/data';

const { width } = Dimensions.get('window');

const PortfolioScreen = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Extract unique categories from portfolio items
  const categories = ['all', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

  // Filter portfolio items based on selected category
  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  // Get selected portfolio item
  const getSelectedItem = () => {
    return PORTFOLIO_ITEMS.find(item => item.id === selectedItem);
  };

  // Handle next testimonial
  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Handle previous testimonial
  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderSection>
          <PageTitle>Our Portfolio</PageTitle>
          <PageDescription>
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </PageDescription>
        </HeaderSection>

        <FilterContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
              <FilterButton 
                key={category}
                isActive={filter === category}
                onPress={() => setFilter(category)}
              >
                <FilterButtonText isActive={filter === category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </FilterButtonText>
              </FilterButton>
            ))}
          </ScrollView>
        </FilterContainer>

        <PortfolioGrid>
          {filteredItems.map(item => (
            <PortfolioItem 
              key={item.id}
              onPress={() => setSelectedItem(item.id)}
            >
              <PortfolioImagePlaceholder>
                <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
                <PortfolioItemCategory>{item.category}</PortfolioItemCategory>
              </PortfolioImagePlaceholder>
            </PortfolioItem>
          ))}
        </PortfolioGrid>

        <TestimonialsSection>
          <SectionTitle>Client Testimonials</SectionTitle>
          <SectionDescription>
            Hear what our clients have to say about working with Amplify ARC.
          </SectionDescription>

          <TestimonialCard>
            <TestimonialQuote>"{TESTIMONIALS[currentTestimonial].quote}"</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialAvatar>
                {TESTIMONIALS[currentTestimonial].clientName.charAt(0)}
              </TestimonialAvatar>
              <TestimonialInfo>
                <TestimonialName>{TESTIMONIALS[currentTestimonial].clientName}</TestimonialName>
                <TestimonialCompany>{TESTIMONIALS[currentTestimonial].company}</TestimonialCompany>
              </TestimonialInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialControls>
            <TestimonialButton onPress={handlePrevTestimonial}>
              <Ionicons name="chevron-back" size={24} color="#B6FF00" />
            </TestimonialButton>
            <TestimonialDots>
              {TESTIMONIALS.map((_, index) => (
                <TestimonialDot 
                  key={index}
                  isActive={currentTestimonial === index}
                  onPress={() => setCurrentTestimonial(index)}
                />
              ))}
            </TestimonialDots>
            <TestimonialButton onPress={handleNextTestimonial}>
              <Ionicons name="chevron-forward" size={24} color="#B6FF00" />
            </TestimonialButton>
          </TestimonialControls>
        </TestimonialsSection>

        <CTASection>
          <CTATitle>Ready to start your project?</CTATitle>
          <CTAButton>
            <CTAButtonText>Get a Quote</CTAButtonText>
          </CTAButton>
        </CTASection>
      </ScrollView>

      {/* Portfolio Item Modal */}
      <Modal
        visible={selectedItem !== null}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedItem(null)}
      >
        <ModalContainer>
          <ModalContent>
            <ModalCloseButton onPress={() => setSelectedItem(null)}>
              <Ionicons name="close" size={24} color="#fff" />
            </ModalCloseButton>
            
            {getSelectedItem() && (
              <>
                <ModalImagePlaceholder />
                <ModalBody>
                  <ModalTitle>{getSelectedItem()?.title}</ModalTitle>
                  <ModalCategory>{getSelectedItem()?.category}</ModalCategory>
                  <ModalDescription>{getSelectedItem()?.description}</ModalDescription>
                  <ModalLink>
                    <ModalLinkText>View Project</ModalLinkText>
                    <Ionicons name="arrow-forward" size={16} color="#B6FF00" />
                  </ModalLink>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </ModalContainer>
      </Modal>
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

const FilterContainer = styled.View`
  padding: 0 20px;
  margin-bottom: 20px;
`;

const FilterButton = styled.TouchableOpacity<{ isActive: boolean }>`
  background-color: ${props => props.isActive ? '#B6FF00' : 'transparent'};
  border: 2px solid ${props => props.isActive ? '#B6FF00' : props.theme.border};
  border-radius: 8px;
  padding: 10px 15px;
  margin-right: 10px;
`;

const FilterButtonText = styled.Text<{ isActive: boolean }>`
  color: ${props => props.isActive ? '#000' : props.theme.text};
  font-weight: bold;
  font-size: 14px;
`;

const PortfolioGrid = styled.View`
  padding: 0 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const PortfolioItem = styled.TouchableOpacity`
  width: ${(width - 50) / 2}px;
  height: 180px;
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
`;

const PortfolioImagePlaceholder = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.card};
  justify-content: flex-end;
  padding: 15px;
`;

const PortfolioItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const PortfolioItemCategory = styled.Text`
  font-size: 12px;
  color: #B6FF00;
`;

// Testimonials Section Styles
const TestimonialsSection = styled.View`
  padding: 20px;
  margin-bottom: 40px;
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

const TestimonialCard = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.border};
`;

const TestimonialQuote = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.text};
  line-height: 24px;
  font-style: italic;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TestimonialAvatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #B6FF00;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const TestimonialInfo = styled.View``;

const TestimonialName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const TestimonialCompany = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

const TestimonialControls = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TestimonialButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const TestimonialDots = styled.View`
  flex-direction: row;
  margin: 0 15px;
`;

const TestimonialDot = styled.TouchableOpacity<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.isActive ? '#B6FF00' : props.theme.border};
  margin: 0 5px;
`;

// CTA Section Styles
const CTASection = styled.View`
  margin: 0 20px 40px;
  padding: 30px 20px;
  background-color: rgba(182, 255, 0, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(182, 255, 0, 0.1);
  align-items: center;
`;

const CTATitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: ${props => props.theme.text};
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

// Modal Styles
const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalContent = styled.View`
  width: 100%;
  max-height: 80%;
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  overflow: hidden;
`;

const ModalCloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalImagePlaceholder = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.backgroundAlt};
`;

const ModalBody = styled.View`
  padding: 20px;
`;

const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.text};
  margin-bottom: 5px;
`;

const ModalCategory = styled.Text`
  font-size: 14px;
  color: #B6FF00;
  margin-bottom: 15px;
`;

const ModalDescription = styled.Text`
  color: ${props => props.theme.textSecondary};
  line-height: 22px;
  margin-bottom: 20px;
`;

const ModalLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const ModalLinkText = styled.Text`
  color: #B6FF00;
  font-weight: bold;
  margin-right: 5px;
`;

export default PortfolioScreen;
