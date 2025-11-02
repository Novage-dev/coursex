import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import { useTheme } from '../hooks';

interface ProductProps {
  id: number;
  title: string;
  seller: string;
  rating: number;
  price: number;
  isBest?: boolean;
  image: string;
  type?: 'vertical' | 'horizontal';
  onPress?: () => void;
}

const Product = ({
  id,
  title,
  seller,
  rating,
  price,
  isBest,
  image,
  type = 'vertical',
  onPress,
}: ProductProps) => {
  const { colors, sizes } = useTheme();

  const isHorizontal = type === 'horizontal';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Block
        card
        radius={16}
        shadow
        overflow="hidden"
        marginBottom={sizes.sm}
        width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      >
        {/* Image */}
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={{
            height: isHorizontal ? 120 : 150,
            width: '100%',
          }}
        />

        {/* Content */}
        <Block padding={sizes.s}>
            <Text bold size={14} numberOfLines={2}>
              {title}
            </Text>

            <Text size={12} color={colors.gray}>
              {seller}
            </Text>

          <Block row align="center" marginTop={4}>
            <Ionicons name="star" size={14} color={colors.warning} />
            <Text size={12} marginLeft={4}>
              {rating.toFixed(1)}
            </Text>
            {/* {isBest && (
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
          </Block>

          <Text bold size={15} color={colors.primary} marginTop={sizes.s}>
            ${price}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default Product;
