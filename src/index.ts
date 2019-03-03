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

const makeFunction = (platform: string) =>
  ((strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) =>
    Platform.OS === platform &&
    css(strings, ...interpolations)) as ThemedCssFunction<{}>;

function generatePlatformConditionalStyle(): PlatformStyles {
  return {
    ios: makeFunction("ios"),
    android: makeFunction("android")
  };
}

export default generatePlatformConditionalStyle();
