import React, { useCallback, useLayoutEffect } from 'react';
import { Platform, Linking, Modal, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { Block, Button, Image, Text, Switch, Product } from '../components';
import { useData, useTheme, useTranslation } from '../hooks';

const isAndroid = Platform.OS === 'android';

const Profile = () => {

  const { user, allCourses, isDark, handleIsDark } = useData();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { assets, colors, sizes } = useTheme();
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  // place a dark-mode toggle in the header's right side
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Switch checked={isDark} onPress={(checked) => handleIsDark(checked)} />
      ),
      headerRightContainerStyle: {
        paddingRight: sizes.sm * 2, // adds space to the edge
        marginRight: sizes.sm,      // optional
      },
    });
  }, [navigation, isDark, handleIsDark, sizes.sm]);


  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;


  const openCoursePopup = (course) => {
    setSelectedCourse(course);
  };

  const closeCoursePopup = () => {
    setSelectedCourse(null);
  };


  const handleSocialLink = useCallback(
    (type) => {
      const url =
        type === 'twitter'
          ? `https://twitter.com/${user?.social?.twitter}`
          : `https://dribbble.com/${user?.social?.dribbble}`;

      try {
        Linking.openURL(url);
      } catch (error) {
        alert(`Cannot open URL: ${url}`);
      }
    },
    [user],
  );

  return (
    <Block tabScreen safe>

      <Block
        scroll
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: sizes.padding }}>

        {/* HEADER: Avatar + Name */}
        <Block align="center" marginTop={sizes.l}>
          <Image
            width={100}
            height={100}
            radius={100}
            source={{ uri: user?.avatar }}
          />

          <Text h5 semibold marginTop={sizes.s}>
            @{user?.name}
          </Text>

          <Text p color={colors.gray} marginTop={sizes.xs}>
            {user?.department}
          </Text>
        </Block>

        {/* STATS: Like TikTok */}
        <Block
          row
          justify="center"
          marginTop={sizes.m}
          marginBottom={sizes.s}
        >
          <Block align="center" marginHorizontal={sizes.m}>
            <Text h5 bold>{user?.stats?.posts}</Text>
            <Text p>{t('profile.posts')}</Text>
          </Block>

          <Block align="center" marginHorizontal={sizes.m}>
            <Text h5 bold>{(user?.stats?.followers || 0)}</Text>
            <Text p>{t('profile.followers')}</Text>
          </Block>

          <Block align="center" marginHorizontal={sizes.m}>
            <Text h5 bold>{(user?.stats?.following || 0)}</Text>
            <Text p>{t('profile.following')}</Text>
          </Block>
        </Block>

        {/* ACTION BUTTONS: Follow / Message */}
        <Block row justify="center" marginBottom={sizes.s}>

          <Button
            radius={sizes.m}
            color={colors.primary}
            paddingHorizontal={sizes.l}
            marginRight={sizes.s}
            onPress={() => alert(`Follow ${user?.name}`)}
          >
            <Text bold white>{t('common.follow')}</Text>
          </Button>

          <Button
            radius={sizes.m}
            outlined
            gray
            paddingHorizontal={sizes.l}
            onPress={() => alert('Message')}
          >
            <Text bold>{t('common.message')}</Text>
          </Button>

        </Block>

        {/* SOCIAL ROW — new row under actions */}
        <Block row justify="center" marginBottom={sizes.m}>
          <Button
            radius={sizes.m}
            paddingHorizontal={sizes.m}
            marginRight={sizes.s}
            onPress={() => handleSocialLink('tiktok')}
          >
            <Ionicons size={20} name="logo-tiktok" color={colors.text} />
          </Button>

          <Button
            radius={sizes.m}
            paddingHorizontal={sizes.m}
            onPress={() => handleSocialLink('youtube')}
          >
            <Ionicons size={20} name="logo-youtube" color={colors.text} />
          </Button>
        </Block>


        {/* ABOUT */}
        <Block align="center" marginBottom={sizes.m} paddingHorizontal={sizes.sm}>
          <Text center p lineHeight={22}>
            {user?.about}
          </Text>
        </Block>

        {/* TABS - TikTok style */}
        <Block
          row
          justify="space-around"
          borderBottomWidth={1}
          borderColor={colors.gray}
          marginBottom={sizes.m}
        >
          <Text semibold paddingVertical={sizes.s}>Courses</Text>
        </Block>

        {/* GRID (Placeholder for courses/videos) */}
        <Block row wrap="wrap" justify="space-between" paddingLeft={sizes.s} paddingRight={sizes.s}>
          {allCourses.map((item) => (
            <Product {...item} key={`card-${item?.id}`} onPress={() => openCoursePopup(item)} />
          ))}
        </Block>

      </Block>


      {/* Popup Modal */}
      <Modal
        visible={!!selectedCourse}
        animationType="slide"
        transparent
      >
        <Block flex={1} color="rgba(0,0,0,0.5)" justify="flex-end">

          {/* TAP OUTSIDE TO CLOSE */}
          <Button
            onPress={closeCoursePopup}
            style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
            transparent
          />

          <Block
            color={colors.card}
            radius={20}
            paddingTop={sizes.m}
            paddingHorizontal={sizes.m}
            style={{
              maxHeight: "80%",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              elevation: 20,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowOffset: { width: 0, height: -2 },
            }}
          >
            <Block scroll showsVerticalScrollIndicator={false}>

              {/* IMAGE WITH GRADIENT OVERLAY */}
              <Block style={{ position: "relative" }}>
                <Image
                  source={{ uri: selectedCourse?.image }}
                  width="100%"
                  height={220}
                  radius={12}
                />

                {/* Close Button */}
                <Button
                  onPress={closeCoursePopup}
                  style={{
                    position: "absolute",
                    top: -7,
                    right: -7,
                    padding: 6,
                    // borderRadius: 25,
                    // borderWidth: 2,
                    // borderColor: "#000",
                    // backgroundColor: "#0000009a",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="close" size={25} color="#000" />
                </Button>


                {/* GRADIENT TEXT OVERLAY */}
                <Block
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: sizes.m,
                    backgroundColor: "rgba(0,0,0,0.65)",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                  }}
                >
                  <Text h5 bold white>{selectedCourse?.title}</Text>
                  <Text p white opacity={0.8}>By {selectedCourse?.seller}</Text>
                </Block>
              </Block>

              {/* RATING */}
              <Block row align="center" marginTop={sizes.m}>
                <Ionicons name="star" size={20} color={colors.warning} />
                <Text semibold marginLeft={6}>{selectedCourse?.rating} / 5.0</Text>
              </Block>

              {/* DESCRIPTION */}
              <Text
                p
                lineHeight={22}
                color={colors.text}
                marginTop={sizes.s}
                marginBottom={sizes.m}
              >
                {selectedCourse?.description ||
                  "This course will guide you step-by-step and help you develop strong expertise with practical lessons, real-world examples, and clear explanations."}
              </Text>

              {/* PRICE */}
              <Text bold size={22} color={colors.primary} marginBottom={sizes.m}>
                ${selectedCourse?.price}
              </Text>
            </Block>

            {/* FIXED BOTTOM BUTTON */}
            <View row marginBottom={sizes.l * 2} marginTop={sizes.s}>
              <Button
                flex={1}
                radius={sizes.s}
                color={colors.primary}
                onPress={() => alert("Buying process...")}
              >
                <Text bold white>Buy Now</Text>
              </Button>
            </View>

          </Block>
        </Block>
      </Modal>


    </Block>
  );

};

export default Profile;
