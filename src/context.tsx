import { ReactNode, useContext, createContext, useState } from "react";
// import { MobileNav } from "./components/MobileNav";

type AppContextProviderProps = {
  children: ReactNode;
};

type AppContext = {
  isNav: boolean;
  setIsNav: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNav: () => void;
};

const AppContext = createContext({} as AppContext);

export function useGlobalContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: AppContextProviderProps) {
  const [isNav, setIsNav] = useState(false);

  const toggleNav = () => {
    setIsNav(!isNav);
  };

  return (
    <AppContext.Provider value={{ isNav, setIsNav, toggleNav }}>
      {children}
      {/* <MobileNav isNav={isNav} /> */}
    </AppContext.Provider>
  );
}

// export { AppContext, AppProvider };
