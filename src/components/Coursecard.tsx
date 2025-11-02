import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import { ICourse } from '../constants/types';
import { useTheme, useTranslation } from '../hooks';

const Coursecard = ({ image, title, type, linkLabel, seller, rating, isbest, price }: ICourse) => {
  const { t } = useTranslation();
  const { assets, colors, sizes } = useTheme();

  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH * 2 + sizes.sm}>
      <Image
        resizeMode="cover"
        source={{ uri: image }}
        style={{
          height: isHorizontal ? 114 : 110,
          width: !isHorizontal ? '100%' : sizes.width / 2.435,
        }}
      />
      <Block
        paddingTop={sizes.s}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>
        <Block row justify='space-between'>
          <Text p marginBottom={sizes.s}>
            {title}
          </Text>
          {/* Seller */}
          <Text size={12} color={colors.gray}>
            {seller}
          </Text>
        </Block>

        {/* Rating + Best Seller Badge */}
        <Block row align="center" marginTop={4}>
          <Ionicons name="star" size={14} color={colors.warning} />
          <Text size={12} marginLeft={4}>
            {rating.toFixed(1)}
          </Text>
        </Block>
        {/* {isbest && (
          <Block
            color={colors.success}
            radius={8}
            paddingHorizontal={6}
            paddingVertical={2}
            marginLeft={8}
          >
            <Text size={10} color="#fff">
              Best Seller
            </Text>
          </Block>
        )} */}

        {/* Price */}
        <Text bold size={15} color={colors.primary} marginTop={sizes.s}>
          ${price}
        </Text>
      </Block>
    </Block>
  );
};

export default Coursecard;
