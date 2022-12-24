import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./ImageCarousel.styles.ts";
import Carousel from "react-native-snap-carousel";
const ScreenWidth = Dimensions.get("window").width;

const imageData = [
  {
    image: "https://ak.picdn.net/shutterstock/videos/20775826/thumb/1.jpg",
  },
  {
    image: "https://milanofashiontour.com/wp-content/uploads/2016/12/1.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/0d/9d/c3/0d9dc3f97e6ada7d53be663cb5e397bc.jpg",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    image: "https://cdn.hipwallpaper.com/i/17/17/u5c7WI.jpg",
  },
];

const _renderItem = ({ item, index }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: ScreenWidth - 30, height: 90, borderRadius: 10 }}
      />
    </View>
  );
};

const ImageCarousel = () => {
  return (
    <View>
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={imageData}
        renderItem={_renderItem}
        sliderWidth={ScreenWidth - 30}
        itemWidth={ScreenWidth - 20}
        layout={"default"}
        layoutCardOffset={18}
      />
    </View>
  );
};

export default ImageCarousel;
