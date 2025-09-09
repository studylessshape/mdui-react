import React from "react";
import { Slot } from "../slot";
import { $ } from "mdui/jq";
import { getTheme as getMduiTheme } from "mdui/functions/getTheme";
import { setTheme as setMduiTheme } from "mdui/functions/setTheme";
import { setColorScheme as setMduiColorScheme } from "mdui/functions/setColorScheme";
import { removeColorScheme as removeMduiColorScheme } from "mdui/functions/removeColorScheme";
import { getLocale as getMduiLocale } from "mdui/functions/getLocale";
import { setLocale as setMduiLocale } from "mdui/functions/setLocale";
import type { LocaleCode } from "mdui/internal/localize";
import type { CustomColor } from "mdui/internal/colorScheme";
import type { Theme } from "mdui/internal/theme";
import type { LocaleStatusEventDetail } from "mdui";

export interface ThemePageOptions {
  /**
   * Set if theme affect all components
   * @default true
   */
  themePage?: boolean;
  /**
   * Set if color schema affect all components
   * @default true
   */
  colorPage?: boolean;
}

export interface ConfigProviderApi {
  /**
   * @see https://www.mdui.org/docs/2/functions/getTheme
   */
  getTheme(): Theme;
  /**
   * @see https://www.mdui.org/docs/2/functions/setTheme
   */
  setTheme(theme: Theme): void;
  resetTheme(): void;
  /**
   * @see https://www.mdui.org/docs/2/functions/setColorScheme
   */
  setColorScheme(hex: string, customColors?: CustomColor[]): void;
  /**
   * @see https://www.mdui.org/docs/2/functions/removeColorScheme
   */
  removeColorScheme(): void;
  /**
   * @see https://www.mdui.org/docs/2/functions/setLocale
   */
  setLocale(locale: LocaleCode): void;
  /**
   * @see https://www.mdui.org/docs/2/functions/getLocale
   */
  getLocale(): LocaleCode;
}

export interface ConfigProviderProps {
  children?: React.ReactNode;
  /**
   * @see https://www.mdui.org/docs/2/styles/dark-mode
   */
  theme?: Theme;
  /**
   * @see https://www.mdui.org/docs/2/styles/dynamic-color
   */
  color?: string;
  /**
   * @see https://www.mdui.org/docs/2/styles/dynamic-color
   */
  customColor?: CustomColor[];
  /**
   * Set if the theme affect all components
   * @default true
   */
  page?: boolean | ThemePageOptions;
  /**
   * @see https://www.mdui.org/docs/2/getting-started/localization
   */
  locale?: LocaleCode;
  /**
   * @see https://www.mdui.org/docs/2/getting-started/localization
   */
  onLocalizeStatusChange?: (
    event: CustomEvent<LocaleStatusEventDetail>
  ) => void;
  /**
   * Get the `ConfigProviderApi` of this component api.
   *
   * @param instance current `ConfigProvider` api.
   */
  getInstance?: (instance: ConfigProviderApi) => void;
}

function getThemePaging(
  key: "themePage" | "colorPage",
  page: boolean | ThemePageOptions | undefined
) {
  if (key == "themePage") {
    return (
      page == undefined ||
      (page instanceof Boolean && page != false) ||
      (page as ThemePageOptions).themePage != false
    );
  } else if (key == "colorPage") {
    return (
      page == undefined ||
      (page instanceof Boolean && page != false) ||
      (page as ThemePageOptions).colorPage != false
    );
  }
  return true;
}

const InstanceContext = React.createContext<{
  instance?: ConfigProviderApi;
}>({});

/**
 * Get the `ConfigProviderApi` from ReactContext.
 * @returns the apis
 */
export function useConfigProviderApi() {
  const instance = React.useContext(InstanceContext).instance;
  if (instance == undefined) {
    throw new Error("Can't use `useProvider` hook out of <ConfigProvider>!");
  }
  return instance;
}

/**
 * The provider for the Theme, Color and Locale of mdui
 */
export function ConfigProvider(props: ConfigProviderProps) {
  const themePage = getThemePaging("themePage", props.page);
  const colorPage = getThemePaging("colorPage", props.page);
  const slotRef = React.useRef<HTMLDivElement>(null);

  function getSolt() {
    return slotRef.current == null ? undefined : slotRef.current;
  }
  function setTheme(theme: Theme) {
    setMduiTheme(theme, themePage ? undefined : getSolt());
  }
  function getTheme() {
    return getMduiTheme(themePage ? undefined : getSolt());
  }
  function resetTheme() {
    const prefix = "mdui-theme-";
    $(getSolt()).removeClass(prefix + getTheme());
  }
  function setColorScheme(hex: string, customColors?: CustomColor[]) {
    setMduiColorScheme(hex, {
      target: colorPage ? undefined : getSolt(),
      customColors: customColors,
    });
  }
  function removeColorScheme() {
    removeMduiColorScheme(colorPage ? undefined : getSolt());
  }
  function getLocale() {
    return getMduiLocale();
  }
  function setLocale(locale: LocaleCode) {
    setMduiLocale(locale);
  }

  const instance: ConfigProviderApi = React.useMemo(
    () => ({
      getTheme: getTheme,
      setTheme: setTheme,
      resetTheme: resetTheme,
      setColorScheme: setColorScheme,
      removeColorScheme: removeColorScheme,
      getLocale: getLocale,
      setLocale: setLocale,
    }),
    []
  );

  React.useEffect(() => {
    if (props.getInstance) {
      props.getInstance(instance);
    }
  }, [props.getInstance]);

  React.useEffect(() => {
    if (props.theme) {
      setTheme(props.theme);
    } else {
      resetTheme();
    }
  }, [props.theme]);

  React.useEffect(() => {
    if (props.color) {
      setColorScheme(props.color, props.customColor);
    }
  }, [props.color, props.customColor]);
  React.useEffect(() => {
    if (props.locale) {
      setLocale(props.locale);
    }
  }, [props.locale]);

  function handleLocalizeStatus(
    this: Window,
    event: CustomEvent<LocaleStatusEventDetail>
  ) {
    if (props.onLocalizeStatusChange) {
      props.onLocalizeStatusChange(event);
    }
  }

  React.useEffect(() => {
    window.addEventListener("mdui-localize-status", handleLocalizeStatus);

    return () => {
      window.removeEventListener("mdui-localize-status", handleLocalizeStatus);
    };
  }, [props.onLocalizeStatusChange]);

  return (
    <InstanceContext.Provider value={{ instance: instance }}>
      <Slot ref={slotRef}>{props.children}</Slot>
    </InstanceContext.Provider>
  );
}
