/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import BadgeExample from "./components/BadgeExample";
import DatePickerExample from "./components/DatePickerExample";
import DeckSwiperExample from "./components/DeckSwiper";
import Segments from "./components/Segments";
import SegmentOutsideHeader from "./components/SegmentOutsideHeader";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => DeckSwiperExample);
