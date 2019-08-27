import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
        }}
        isPortrait={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
