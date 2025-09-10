import React, { useContext, useMemo } from "react";
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

export type { Theme } from "mdui/internal/theme";

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

function getPaging(
  key: "themePage" | "colorPage",
  page: boolean | ThemePageOptions | undefined
) {
  if (key == "themePage") {
    if (page == undefined) {
      return true;
    } else if (typeof page == "boolean") {
      return page;
    } else {
      return page.themePage != false;
    }
  } else if (key == "colorPage") {
    if (page == undefined) {
      return true;
    } else if (typeof page == "boolean") {
      return page;
    } else {
      return page.colorPage != false;
    }
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
 * The provider for the Theme, Color and Locale of mdui.
 *
 * First `ConfigProvider` will control Theme, Color of all page. Then `ConfigProvider` in `ConfigProvider` will control the children nodes.
 *
 * But need notice the locale is global.
 */
export function ConfigProvider(props: ConfigProviderProps) {
  const prefix = "mdui-theme-";
  const [page] = React.useState(
    React.useContext(InstanceContext).instance == undefined
  );
  const slotRef = React.useRef<HTMLDivElement>(null);
  const documentJQ = $(document.documentElement);

  function setTheme(theme: Theme) {
    if (page) {
      setMduiTheme(theme);
    }
  }
  function getTheme(): Theme {
    if (page) {
      return getMduiTheme();
    }
    const slot = $(slotRef.current);
    if (slot.hasClass(prefix + "auto")) {
      return "auto";
    } else if (slot.hasClass(prefix + "dark")) {
      return "dark";
    }

    return "light";
  }
  function resetTheme() {
    if (page) {
      documentJQ.removeClass(prefix + getTheme());
    }
  }
  function setColorScheme(hex: string, customColors?: CustomColor[]) {
    const slot = $(slotRef.current);
    if (page) {
      setMduiColorScheme(hex, { customColors: customColors });
    } else if (slotRef.current) {
      setMduiColorScheme(hex, { target: slot, customColors: customColors });
    }
  }
  function removeColorScheme() {
    const slot = $(slotRef.current);
    if (page) {
      removeMduiColorScheme();
    } else {
      removeMduiColorScheme(slot);
    }
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
      <Slot
        ref={slotRef}
        className={props.theme ? prefix + props.theme : undefined}
      >
        {props.children}
      </Slot>
    </InstanceContext.Provider>
  );
}
