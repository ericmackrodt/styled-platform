/* tslint:disable no-submodule-imports */
import {
  ThemedCssFunction,
  SimpleInterpolation,
  css
} from "styled-components/native";
import { Platform } from "react-native";

type Platforms<T> = {
  [key: string]: T;
  ios: T;
  android: T;
};

type PlatformStyles = Platforms<ThemedCssFunction<{}>>;

function generatePlatformConditionalStyle(): PlatformStyles {
  return {
    ios: ((
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) =>
      Platform.OS === "ios" &&
      css(strings, ...interpolations)) as ThemedCssFunction<{}>,
    android: ((
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) =>
      Platform.OS === "android" &&
      css(strings, ...interpolations)) as ThemedCssFunction<{}>
  };
}

export default generatePlatformConditionalStyle();
