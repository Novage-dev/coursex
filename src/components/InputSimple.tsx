import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ColorValue,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../hooks/useTheme';

interface ModernInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  success?: boolean;
  danger?: boolean;
  iconType?: 'check' | 'eye';
}

const ModernInput: React.FC<ModernInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  success = false,
  danger = false,
  iconType,
}) => {
  const { colors, sizes } = useTheme();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleIconPress = () => {
    if (iconType === 'eye') setPasswordVisible((prev) => !prev);
  };

  // --- Determine icon and color based on state ---
  let iconName: string | undefined;
  let iconColor: string | undefined | ColorValue;

  if (iconType === 'eye') {
    iconName = isPasswordVisible ? 'eye-outline' : 'eye-off-outline';
    iconColor = colors.icon;
  } else if (success) {
    iconName = 'checkmark-circle-outline';
    iconColor = colors.success;
  } else if (danger) {
    iconName = 'alert-circle-outline';
    iconColor = colors.danger;
  }

  const borderColor = danger
    ? colors.danger
    : success
    ? colors.success
    : colors.gray;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={[styles.container, { marginVertical: sizes.s }]}>
        <Text style={[styles.label, { color: colors.text, fontSize: sizes.sm }]}>
          {label}
        </Text>

        <View
          style={[
            styles.inputRow,
            {
              borderBottomColor: borderColor,
              borderBottomWidth: 1.5,
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              {
                color: colors.input,
                fontSize: sizes.p,
                paddingVertical: sizes.s / 2,
              },
            ]}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={iconType === 'eye' && !isPasswordVisible ? true : false}
          />

          {iconName && (
            <TouchableOpacity
              onPress={handleIconPress}
              activeOpacity={iconType === 'eye' ? 0.7 : 1}
            >
              <Ionicons
                name={iconName as any}
                size={20}
                color={iconColor}
                style={{ marginLeft: sizes.s }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
});

export default ModernInput;
