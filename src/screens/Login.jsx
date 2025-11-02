import React, { useCallback, useEffect, useState } from 'react';
import { Linking, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useData, useTheme, useTranslation } from '../hooks';
import * as regex from '../constants/regex';
import { Block, Button, Input, Image, Text, Checkbox, ModernInput } from '../components';

const isAndroid = Platform.OS === 'android';


const Register = () => {
  const { isDark } = useData();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false,
  });
  const { assets, colors, gradients, sizes } = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({ ...state, ...value }));
    },
    [setRegistration],
  );

  const handleSignUp = useCallback(() => {
    if (!Object.values(isValid).includes(false)) {
      /** send/save registratin data */
      console.log('handleSignUp', registration);
    }
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);

  return (
    <Block safe>
      <Block>
        <Block flex={0} style={{ zIndex: 0 }}
          marginBottom={-(55)}
          height={sizes.height * 0.3}
        >
          <Block
            gradient={['#4CAF50', '#087F23']} // light green → dark green
            padding={sizes.sm}
            paddingTop={sizes.md}
            height={sizes.height * 0.3}
          >
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{ rotate: '180deg' }]}
              />
              <Text p white marginLeft={sizes.s}>
                {t('common.goBack')}
              </Text>
            </Button>

            <Text h4 center white marginBottom={sizes.md}>
              {t('register.title')}
            </Text>
          </Block>
        </Block>
        {/* register form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          radius={sizes.sm * 1.5}
        >

          <Block
            flex={0}
            radius={sizes.sm}
            color={colors.background}
            padding={sizes.sm}
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              paddingVertical={sizes.sm}>
              <Text p semibold center>
                {t('register.login')}
              </Text>

              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm} marginTop={20}>
                <ModernInput
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={t('common.email')}
                  keyboardType="email-address"
                  // placeholder={t('common.emailPlaceholder')}
                  success={Boolean(registration.email && isValid.email)}
                  onChangeText={(value) => handleChange({ email: value })}
                />
                <ModernInput
                  secureTextEntry
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={t('common.password')}
                  // placeholder={t('common.passwordPlaceholder')}
                  onChangeText={(value) => handleChange({ password: value })}
                  success={Boolean(registration.password && isValid.password)}
                  danger={Boolean(registration.password && !isValid.password)}
                  iconType="eye"
                />
              </Block>
              <Block
                marginTop={sizes.sm * 1.3}
                flex={1}
                style={{ alignItems: "flex-end" }} // <- use flex-end
              >
                <Text
                  bold
                  primary
                >
                  {t('register.forgot')}
                </Text>
              </Block>

              <Block marginTop={sizes.l}></Block>
              <Button
                onPress={handleSignUp}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                radius={sizes.md}
                disabled={Object.values(isValid).includes(false)}>
                <Text bold white transform="uppercase">
                  {t('common.signup')}
                </Text>
              </Button>
              <Button
                shadow={!isAndroid}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                onPress={() => navigation.navigate('Register')}>
                <Block row>
                  <Text primary>
                    {t('common.noAcc?') + " "}
                  </Text>
                  <Text bold primary>
                    {t('common.signin')}
                  </Text>
                </Block>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Register;
