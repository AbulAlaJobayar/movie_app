import { PaperProvider } from 'react-native-paper';


import { ReactNode } from "react";
import { theme } from '../theme/theme';



const Provider = ({ children }: { children: ReactNode }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default Provider;
