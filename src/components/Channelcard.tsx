import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Block from './Block';
import Image from './Image';
import Text from './Text';
import { IChannel } from '../constants/types';
import { useTheme } from '../hooks';

const Coursecard = ({
  id,
  name,
  bio,
  image,
  isVerified,
  coursesCount,
  followersCount,
}: IChannel) => {
  const { colors, sizes } = useTheme();

  return (
    <Block
      row
      align="center"
      padding={sizes.sm}
      marginBottom={sizes.sm}
      style={{
        backgroundColor: colors.card || '#fff',
        borderRadius: 24,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        position: 'relative', // for absolute positioning of the star
      }}
    >
      {/* Profile image */}
      <Block flex={0} align="center" justify="center">
        <Image
          source={{ uri: image }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            borderWidth: 2,
            borderColor: colors.gray,
          }}
        />
      </Block>

      {/* Text info */}
      <Block flex={1} marginLeft={sizes.sm}>
        <Text bold size={16}>
          {name || 'Name Here'}
        </Text>
        <Text color={colors.gray} size={13} marginBottom={sizes.s}>
          {bio || 'here is a short bio...'}
        </Text>

        <Text size={13} color={colors.gray}>
          {followersCount || 10} followers
        </Text>
        <Text size={13} color={colors.gray}>
          {coursesCount || 2} courses
        </Text>
      </Block>

      {/* Verified Star (top-right corner) */}
      {isVerified && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: sizes.sm,
            right: sizes.sm,
          }}
        >
          <Ionicons name="star" size={20} color={colors.warning} />
        </TouchableOpacity>
      )}
    </Block>
  );
};

export default Coursecard;
