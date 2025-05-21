import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, StyleSheet, Dimensions, ViewStyle, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { MobileTheme } from '../../../shared/theme.mobile';

interface AnimatedCardProps {
  children: React.ReactNode;
  onPress?: () => void;
  delay?: number;
  style?: ViewStyle;
  activeOpacity?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'none';
  disabled?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  onPress,
  delay = 0,
  style,
  activeOpacity = 0.8,
  animationType = 'fade',
  disabled = false,
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      delay,
      useNativeDriver: true,
    }).start();
  }, [animation, delay]);

  const getAnimationStyle = () => {
    switch (animationType) {
      case 'fade':
        return {
          opacity: animation,
        };
      case 'slide':
        return {
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        };
      case 'scale':
        return {
          opacity: animation,
          transform: [
            {
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
              }),
            },
          ],
        };
      case 'none':
        return {};
      default:
        return {
          opacity: animation,
        };
    }
  };

  const cardContent = (
    <Animated.View style={[styles.card, getAnimationStyle(), style]}>
      {children}
    </Animated.View>
  );

  if (onPress && !disabled) {
    return (
      <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
        {cardContent}
      </TouchableOpacity>
    );
  }

  return cardContent;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// Styled components for use with the AnimatedCard
export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props: { theme: MobileTheme }) => props.theme.text};
  margin-bottom: 8px;
`;

export const CardDescription = styled.Text`
  font-size: 14px;
  color: ${(props: { theme: MobileTheme }) => props.theme.textSecondary};
  line-height: 20px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-color: ${(props: { theme: MobileTheme }) => props.theme.border};
`;

export const CardButton = styled.TouchableOpacity`
  background-color: ${(props: { theme: MobileTheme }) => props.theme.primary};
  padding: 8px 16px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const CardButtonText = styled.Text`
  color: #000000;
  font-weight: bold;
  font-size: 14px;
`;

export default AnimatedCard;
