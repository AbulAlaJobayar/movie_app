import { Stack } from "expo-router";
import Provider from "../lib/provider/Provider";
import "./global.css";

export default function RootLayout() {
  return (
    <>
      <Provider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movie/[id]" options={{headerShown:false}}/>
        </Stack>
      </Provider>
    </>
  );
}
