import React, { useCallback, useState } from 'react';

import { useData, useTheme, useTranslation } from '../hooks';
import { Block, Coursecard, Image, Input, Product, Text, Channelcard } from '../components';
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
const Explore = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  const {
    channels,
    catagories
  } = useData();
  // const [products, setProducts] = useState(design);
  const { assets, colors, fonts, gradients, sizes } = useTheme();



  return (
    <Block tabScreen>
      {/* search input */}
      <Block color={colors.backgroundnew} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>

      {/* entire page wrapper */}
      <Block
        color={colors.backgroundnew}
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.l }}
        paddingTop={sizes.sm}
      >

        {/* catagories */}
        <Block marginBottom={14}>
          <Text bold size={18} marginBottom={10}>CATEGORIES</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.capsuleWrapper}>
            {catagories?.map((cat) => (
              <View key={cat.id} style={[styles.capsule, { borderColor: colors.text }]}>
                <Text bold>{cat.title}</Text>
              </View>
            ))}
          </ScrollView>
        </Block>

        {/* courses list */}
        <Block>
          {channels?.map((data) => (
            <Block width={"100%"} row wrap="wrap" justify="space-between" marginTop={sizes.s} marginRight={sizes.md} key={`block-${data.id}`}>
              <Channelcard {...data} key={`card-${data.id}`} />
            </Block>
          ))}
        </Block>

      </Block>



    </Block>
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
  capsuleWrapper: {
    overflow: "scroll",
  },
  capsule: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 50,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 7,
  },
  capsuleText: {

  },
});

export default Explore;

