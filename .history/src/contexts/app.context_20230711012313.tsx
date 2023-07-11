import React from "react";
import { getAccessTokenFromLS } from "src/utils/auth";

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => {},
}
export const AppContext = React.createContext<AppContextInterface>(initialAppContext)
)