import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image as RNImage, StyleSheet, View } from "react-native";

import { useData, useTheme } from "../hooks";
import { Block, Button, Text } from "../components";

const Articles = () => {
  const HorizontalLine = () => {
  return (
    <View style={styles.line} />
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1, // Thickness of the line
    backgroundColor: '#cccccc47', // Color of the line
    width: '100%', // Full width
    marginVertical: 10, // Optional: Add some vertical spacing
  },
});
  const data = useData();
  const { colors, gradients, sizes } = useTheme();

  // States
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  // Initialize categories & articles
  useEffect(() => {
    if (data?.categories?.length) {
      setCategories(data.categories);
      setSelectedCategory(data.categories[0]);
    }
    if (data?.articles?.length) {
      setArticles(data.articles);
    }
  }, [data]);

  // Update articles when category changes
  useEffect(() => {
    if (selectedCategory && data?.articles?.length) {
      const newArticles = data.articles.filter(
        (article) => article?.category?.id === selectedCategory.id
      );
      setArticles(newArticles);
    }
  }, [selectedCategory, data]);

  return (
    <Block tabScreen>

      {/* Category list */}
      <Block row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: -sizes.padding, y: 0 }}
        >
          {categories?.map((category) => {
            const isSelected = category?.id === selectedCategory?.id;
            return (
              <Button
                key={`category-${category?.id}`}
                radius={sizes.m}
                marginHorizontal={sizes.s}
                onPress={() => setSelectedCategory(category)}
                gradient={gradients?.[isSelected ? "primary" : "light"]}
                style={{ borderColor: colors.gray, borderWidth: 1 }}
              >
                <Text
                  p
                  bold={isSelected}
                  style={isSelected ? { color: colors.text } : { color: colors.gray, opacity: 0.6 }}
                  transform="capitalize"
                  marginHorizontal={sizes.m}
                >
                  {category?.name}
                </Text>
              </Button>
            );
          })}
        </Block>
      </Block>

      {/* Articles list */}
      <Block marginTop={sizes.m} scroll>
        {articles?.map((article) => (
          <TouchableOpacity key={article?.id}>
            <Block marginLeft={sizes.sm} marginRight={sizes.sm} style={{ marginBottom: sizes.s , marginTop: sizes.s }} row align="center">
              <RNImage
                source={{ uri: article?.image }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginRight: sizes.m,
                }}
              />
              <Block flex>
                <Text bold>{article?.title}</Text>
                <Text p color={colors.gray} numberOfLines={2}>
                  {article?.description}
                </Text>
              </Block>
            </Block>
            <HorizontalLine />
          </TouchableOpacity>
        ))}
      </Block>

    </Block>
  );
};

export default Articles;
