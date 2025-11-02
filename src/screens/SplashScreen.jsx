import React, { useCallback, useState } from 'react';

// import { useData } from '../hooks';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Block } from '../components';
import { VideoView } from 'expo-video';
const { width } = Dimensions.get('window');

const Home = () => {
    return (
        <Block>
            <View style={styles.container}>
                <VideoView
                    source={require('../assets/splashscreen/Loading.mp4')}
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
    video: { width: 500, height: 500 },
});

export default Home;
