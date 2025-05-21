import React from 'react';
import { TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ParamListBase } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { MobileTheme } from '../../../shared/theme.mobile';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showThemeToggle?: boolean;
  toggleTheme?: () => void;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showThemeToggle = false,
  toggleTheme,
  rightComponent,
}) => {
  const navigation = useNavigation();
  // Type assertion for navigation is handled implicitly
  const route = useRoute();
  const theme = useTheme() as MobileTheme;
  
  // If no title is provided, use the route name
  const headerTitle = title || route.name;

  return (
    <HeaderContainer>
      <StatusBar 
        barStyle={theme.statusBar === 'light' ? 'light-content' : 'dark-content'} 
        backgroundColor="transparent" 
        translucent 
      />
      
      <HeaderContent>
        <LeftSection>
          {showBack && (
            <IconButton onPress={() => navigation.goBack()}>
              <Ionicons 
                name="arrow-back" 
                size={24} 
                color={theme.text} 
              />
            </IconButton>
          )}
        </LeftSection>
        
        <TitleSection>
          <Logo>ARC</Logo>
          {headerTitle && <Title>{headerTitle}</Title>}
        </TitleSection>
        
        <RightSection>
          {showThemeToggle && toggleTheme && (
            <IconButton onPress={toggleTheme}>
              <Ionicons 
                name={theme.statusBar === 'light' ? 'sunny' : 'moon'} 
                size={24} 
                color={theme.text} 
              />
            </IconButton>
          )}
          {rightComponent}
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  width: 100%;
  padding-top: ${Platform.OS === 'ios' ? '44px' : '40px'};
  background-color: ${(props: { theme: MobileTheme }) => props.theme.background};
  border-bottom-width: 1px;
  border-bottom-color: ${(props: { theme: MobileTheme }) => props.theme.border};
  z-index: 10;
`;

const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding-horizontal: 16px;
`;

const LeftSection = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const TitleSection = styled.View`
  flex: 2;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Logo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #B6FF00;
  margin-right: 8px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
`;

const RightSection = styled.View`
  flex: 1;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`;

const IconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: { theme: MobileTheme }) => props.theme.backgroundAlt};
  margin-left: 8px;
`;

export default Header;
