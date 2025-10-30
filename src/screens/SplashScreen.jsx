import React, { useCallback, useState } from 'react';

// import { useData } from '../hooks';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Block } from '../components';
import { Video } from 'expo-av';
const { width } = Dimensions.get('window');

const Home = () => {
    return (
        <Block>
            <View style={styles.container}>
                <Video
                    source={{ uri: "../assets/splashscreen/loading.gif" }}
                    style={styles.video}
                    resizeMode="contain"
                    shouldPlay
                />
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    video: { width: width, height: 5000 },
});

export default Home;
