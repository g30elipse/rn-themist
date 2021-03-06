import * as React from 'react';
import ThemeContext from "../ThemeContext";
import { StyleSheet } from 'react-native';
import { RNTheme } from '../RNTheme';

export type StylesHook<T> = () => T;

export type StyleFunction<T> = (theme: RNTheme) => T;

export default function makeStyles<T extends StyleSheet.NamedStyles<T> = StyleSheet.NamedStyles<any>>(styleFunction: StyleFunction<T>): StylesHook<T> {
    return (() => {
        const theme = React.useContext<RNTheme>(ThemeContext);
        return styleFunction(theme);
    })
}