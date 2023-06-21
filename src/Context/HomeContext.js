import { createContext, useState } from "react";

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {
    const [checkModal, setCheckModal] = useState(false)
  const data = {
    checkModal,
    setCheckModal
  };

  return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
};

export default HomeContextProvider;
