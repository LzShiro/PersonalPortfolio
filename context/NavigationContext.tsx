"use client";

import { createContext, useContext, useState } from "react";

interface NavigationContextValue {
  hasNavigated: boolean;
  setHasNavigated: () => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  hasNavigated: false,
  setHasNavigated: () => {},
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasNavigated, setHasNavigatedState] = useState(false);

  const setHasNavigated = () => setHasNavigatedState(true);

  return (
    <NavigationContext.Provider value={{ hasNavigated, setHasNavigated }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
