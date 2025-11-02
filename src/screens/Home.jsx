import React, { useCallback, useState } from 'react';

import { useData, useTheme, useTranslation } from '../hooks';
import { Block, Coursecard, Image, Input, Product, Text } from '../components';
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

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
      "gradient1": "#38A954",
      "gradient2": "#07601eff",
      "text": "Learn, Change, Grow... "
    },
    {
      'id': 2,
      "gradient1": "#9dd554ff",
      "gradient2": "#2d5b05ff",
      "text": "Change your life!"
    },
    {
      'id': 3,
      "gradient1": "#24a56dff",
      "gradient2": "#044f3bff",
      "text": "Start today"
    },
  ]


  return (
    <Block>
      {/* search input */}
      <Block color={colors.backgroundnew} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>
      <Block
       color={colors.backgroundnew}
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.l }}

      >
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
        
        <Block marginTop={sizes.sm}>
          <Text bold size={18}>Top Courses on Design</Text>
        </Block>
        <Carousel
          loop={false}
          width={430}
          height={258}
          snapEnabled={false}
          pagingEnabled={false}
          // autoPlay
          // autoPlayInterval={2000}
          data={design}
          style={{ width: "100%" }}
          renderItem={({ index }) => (
            <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
              <Coursecard {...design[index]} key={`card-${design[index]?.id}`} />
            </Block>
          )}
        />
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            <Product {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
        <Block marginTop={sizes.sm}>
          <Text bold size={18}>Top Courses on Trading</Text>
        </Block>
        <Carousel
          loop={false}
          width={430}
          height={258}
          snapEnabled={false}
          pagingEnabled={false}
          // autoPlay
          // autoPlayInterval={2000}
          data={trading}
          style={{ width: "100%" }}
          renderItem={({ index }) => (
            <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
              <Coursecard {...design[index]} key={`card-${design[index]?.id}`} />
            </Block>
          )}
        />

      </Block>

    </Block>
  );
};

export default Home;
