/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import BadgeExample from "./components/BadgeExample";
import DatePickerExample from "./components/DatePickerExample";
import DeckSwiperExample from "./components/DeckSwiper";
import Segments from "./components/Segments";
import SegmentOutsideHeader from "./components/SegmentOutsideHeader";
import { name as appName } from "./app.json";
import ListExample from './components/List/List';
import ListDividerExample from './components/List/List-Divider';
import ListHeaderExample from './components/List/ListHeader';
import ListItemNoIndentExample from './components/List/ListNoIndent';
import ListIconExample from './components/List/ListIcon';
import ListAvatarExample from './components/List/ListAvatar';
import DynamicListExample from './components/List/DynamicList';
import ListSeparatorExample from './components/List/ListSeperator';
import RefExample from './components/RefExample';
import ThumbnailExample from './components/ThumbnailExample';
import CheckBoxExample from './components/CheckBoxExample';

AppRegistry.registerComponent(appName, () => CheckBoxExample);
