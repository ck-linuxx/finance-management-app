import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode
}

export function BodyStyle({ children }: Props) {
  return (
    <View className="bg-mainGreen">
      <View
        className="h-full px-7 bg-lightGreen rounded-t-3xl "
      >
        {children}
      </View>
    </View>
  );
}