import React, { useCallback, useState } from 'react';

import { useData, useTheme, useTranslation } from '../hooks';
import { Block, Coursecard, Image, Input, Product, Text } from '../components';
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { CATAGORIES } from '../constants/mocks';

const { width } = Dimensions.get("window");
const Home = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);
  const {
    design,
    business,
    development,
    trading,
    catagories
  } = useData();
  const [products, setProducts] = useState(design);
  const { assets, colors, fonts, gradients, sizes } = useTheme();
  const data = [
    {
      'id': 1,
      "gradient1": colors.adgrad1,
      "gradient2": colors.adgrad2,
      "text": "Learn, Change, Grow... "
    },
    {
      'id': 2,
      "gradient1": colors.adgrad3,
      "gradient2": colors.adgrad4,
      "text": "Change your life!"
    },
    {
      'id': 3,
      "gradient1": colors.adgrad5,
      "gradient2": colors.adgrad6,
      "text": "Start today"
    },
  ]


  return (
    <Block>
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

      >
        {/* header ad */}
        <Carousel
          loop={true}
          width={width * 0.9}
          height={120}
          snapEnabled={false}
          pagingEnabled={true}
          autoPlay
          autoPlayInterval={3000}
          data={data}
          style={{ width: "100%" }}
          renderItem={({ index }) => (
            <Block marginTop={sizes.sm}>
              <LinearGradient
                colors={[`${data[index].gradient1}`, `${data[index].gradient2}`]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: "98%",
                  height: 90,
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  bold
                  size={18}
                  color="#fff"
                  style={{ textAlign: "left", paddingHorizontal: 10 }}
                >
                  {data[index].text}
                </Text>
              </LinearGradient>
            </Block>
          )}
        />

        {/* catagories */}
        <Block marginBottom={14}>
          <Text bold size={18} marginBottom={10}>CATEGORIES</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATAGORIES?.map((cat) => (
              <View key={cat.id} style={[styles.capsule, { borderColor: colors.text }]}>
                <Text bold>{cat.title}</Text>
              </View>
            ))}
          </ScrollView>
        </Block>

        {/* courses list */}
        <>
          <View>
            <Block marginTop={sizes.sm}>
              <Text bold size={18}>Top Courses on Trading</Text>
            </Block>
            <ScrollView paddingLeft={8} horizontal showsHorizontalScrollIndicator={false}>
              {design?.map((data) => (
                <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm} marginRight={sizes.md} key={`block-${data.id}`}>
                  <Coursecard {...data} key={`card-${data.id}`} />
                </Block>
              ))}
            </ScrollView>
          </View>

          <View>
            <Block marginTop={sizes.sm}>
              <Text bold size={18}>Top Courses on Trading</Text>
            </Block>
            <ScrollView paddingLeft={8} horizontal showsHorizontalScrollIndicator={false}>
              {trading?.map((data) => (
                <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm} marginRight={sizes.md} key={`block-${data.id}`}>
                  <Coursecard {...data} key={`card-${data.id}`} />
                </Block>
              ))}
            </ScrollView>
          </View>

          <View>
            <Block marginTop={sizes.sm}>
              <Text bold size={18}>Top Courses on Develompment</Text>
            </Block>
            <ScrollView paddingLeft={8} horizontal showsHorizontalScrollIndicator={false}>
              {development?.map((data) => (
                <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm} marginRight={sizes.md} key={`block-${data.id}`}>
                  <Coursecard {...data} key={`card-${data.id}`} />
                </Block>
              ))}
            </ScrollView>
          </View>

          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
            {products?.map((product) => (
              <Product {...product} key={`card-${product?.id}`} />
            ))}
          </Block>
        </>


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

export default Home;

