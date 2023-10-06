import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary' | 'disabled' | 'default';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  ...restProps
}) => {
  //  styles based on the variant prop
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.defaultButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'disabled':
        return styles.disabledButton;
      default:
        return styles.defaultButton;
    }
  };

  //  text styles based on the variant prop
  const getButtonTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButtonText;
      case 'secondary':
        return styles.secondaryButtonText;
      case 'disabled':
        return styles.disabledButtonText;
      default:
        return styles.defaultButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
      disabled={variant === 'disabled'}
      {...restProps}>
      <Text style={[styles.defaultButton, getButtonTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 150,
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: '#007BFF',
  },
  secondaryButton: {
    backgroundColor: '#6C757D',
  },
  disabledButton: {
    backgroundColor: '#CED4DA',
  },
  primaryButtonText: {
    color: 'white',
  },
  secondaryButtonText: {
    color: 'white',
  },
  disabledButtonText: {
    color: '#6C757D',
  },
  defaultButtonText: {
    color: 'white',
  },
});
