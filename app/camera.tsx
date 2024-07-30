import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FontAwesome } from '@expo/vector-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [facing, setFacing] = useState('back');
  const [permissionCamera, requestPermissionCamera] = useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [image, setImage] = useState(null);
  const [flash, setFlash] = useState('off');
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setImage(null);
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!hasCameraPermission) {
    return <Text>No access to camera</Text>;
  }

  if (!permissionCamera) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermissionCamera} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  function toggleFlash() {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CameraView style={styles.camera} facing={facing} flash={flash} ref={cameraRef}>
            <View style={styles.topContainer}>
              <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="close" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFlash}>
                <FontAwesome name="flash" size={26}
                  color={flash === 'off' ? 'gray' : '#fff'} />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.bottomTopContainer}>
                <View style={styles.bottomLeftCont}>
                  {
                    image ?
                      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() =>
                          router.push(`/single_image?image=${encodeURIComponent(image)}`)
                        }>
                          <Image source={{ uri: image }} style={{
                            width: 50, height: 50,
                            borderRadius: 8, borderColor: 'rgba(0, 0, 0, 0.7)', borderWidth: 1
                          }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.subtleDarkCircularBackground]}
                          onPress={savePicture}>
                          <AntDesign name="save" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.subtleDarkCircularBackground]}
                          onPress={() => setImage(null)}>
                          <Ionicons name="trash-bin-outline" size={24} color="white" />
                        </TouchableOpacity>
                      </View>
                      :
                      <TouchableOpacity style={[styles.button, styles.subtleDarkCircularBackground]}
                        onPress={() => router.push('/gallery')}>
                        <MaterialCommunityIcons name="image-outline" size={24} color="white" />
                      </TouchableOpacity>
                  }
                </View>
                <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                  <FontAwesomeIcon icon={faCircle} size={40} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.subtleDarkCircularBackground]} onPress={toggleCameraFacing}>
                  <MaterialIcons name="flip-camera-android" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomBottomContainer}>
                <View style={styles.bottomBottomInnerContainer}>
                  <Text style={styles.pvText}>Video</Text>
                  <Text style={[styles.pvText, styles.selectedMode]}>Photo</Text>
                </View>
              </View>
            </View>
          </CameraView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bottomLeftCont: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  selectedMode: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  pvText: {
    color: 'white',
    fontWeight: '300'
  },
  bottomBottomInnerContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flex: 1,
  },
  bottomBottomContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: 48,
  },
  captureButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 4,
    padding: 5,
  },
  subtleDarkCircularBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  bottomTopContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  button: {
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});