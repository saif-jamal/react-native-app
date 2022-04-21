import * as React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { Video, AVPlaybackStatus } from "expo-av";
import { Styles } from "./Style";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
// import { keyframe, stagger } from "popmotion";

const VideoElement = (props) => {
  const video = React.useRef(null);
  const [Post, setPost] = React.useState(props.Post ? props.Post : null);
  // const { Post } = props;
  const [status, setStatus] = React.useState({});
  const [videourl, setvideourl] = React.useState(
    "https://v16-webapp.tiktok.com/592aed185a377ada5d0037ea742edd89/626014fc/video/tos/alisg/tos-alisg-pve-0037c001/c6a0b46a3d0a4550adbc1f2b3316ee86/?a=1988&br=1744&bt=872&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=eXd.6H.gMyq8ZwvFwwe2NwDwyl7Gb&l=202204200811060101880320560201682C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlmZjg6ZmxrOzMzODczNEApN2g4Zzk2Zzs4N2c0O2VmN2dvYzZqcjRvcWVgLS1kMS1zczBiYjM1NTQ0LjIyXmI0Li46Yw%3D%3D&vl=&vr="
  );
  const [isliked, setisliked] = React.useState(false);

  //change status of playing video from pause to play and so on when press  on screen.
  const onpresschangeplayvideostatus = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  //make video run when page load
  React.useEffect(() => {
    // video.current.playAsync();
  }, []);

  const setlikeevent = () => {
    // isliked?
    const likestoadd = !isliked ? 1 : -1;
    // let thenum = Post.likes.match(/\d+/)[0]; // "3"

    setPost({
      ...Post,
      likes: parseInt(Post.likes) + likestoadd,
    });
    setisliked(!isliked);
  };

  return (
    <View style={Styles.Container}>
      <TouchableWithoutFeedback onPress={onpresschangeplayvideostatus}>
        <Video
          ref={video}
          style={Styles.video}
          source={{
            uri: Post.videourl,
          }}
          useNativeControls={false}
          resizeMode="cover"
          isLooping={true}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>

      <View style={Styles.userEnterAction}>
        <View>
          <Image
            source={{
              uri: Post.userimage,
            }}
            style={Styles.imageUser}
          />
        </View>

        <View style={Styles.likes}>
          <TouchableOpacity onPress={setlikeevent}>
            <AntDesign
              style={Styles.iconsActionStyle}
              name="heart"
              color={isliked ? "red" : "white"}
            />
          </TouchableOpacity>
          <Text style={Styles.textunderAction}>{Post.likes}</Text>
        </View>

        <View style={Styles.comments}>
          <FontAwesome
            style={Styles.iconsActionStyle}
            name="commenting"
            color="white"
          />
          <Text style={Styles.textunderAction}>{Post.comments}</Text>
        </View>

        <View style={Styles.shaires}>
          <Fontisto
            style={Styles.iconsActionStyle}
            name="share-a"
            color="white"
          />
          <Text style={Styles.textunderAction}>{Post.shares}</Text>
        </View>
      </View>

      <View style={Styles.containerButtom}>
        <View style={Styles.leftButtomTitle}>
          <Text style={Styles.userName}>{Post.username}</Text>
          <Text style={Styles.textTitle}>{Post.postTitle}</Text>
          <View style={Styles.musicNameBox}>
            <Entypo name="beamed-note" size={24} color="white" />
            <Text style={Styles.textMusicName}>{Post.musicname}</Text>
          </View>
        </View>

        <View style={Styles.rightButtomTitle}>
          <View style={Styles.rightImageMusicContainer}>
            <Image
              source={{
                uri: Post.musicimage,
              }}
              style={Styles.imageMusic}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoElement;
