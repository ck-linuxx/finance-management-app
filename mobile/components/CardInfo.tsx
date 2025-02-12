import { Text, View } from "react-native";
import { CategoryIcon } from "./icons/categoryIcon";
import { useState } from "react";
import { SalaryIcon } from "./icons/SalaryIcon";
import { FoodIconDark } from "./icons/FoodIconDark";

export function CardInfo() {
  const [goals, setGoals] = useState(true);
  const revenue = "1.700,00"

  return (
    <View className={`py-5 px-9 w-auto min-w-75 h-[152px] gap-7 flex-row rounded-2xl bg-mainGreen mt-8 items-center justify-center `}>

      {goals &&
      <>
        <View
          className="max-w-16 items-center justify-center"
        >
          <View
            className="mb-2 items-center justify-center bg-transparent rounded-full w-16 h-16 border-blueButton border-[2px]"
          >
            <CategoryIcon />
          </View>

          <Text 
            style={{ fontFamily: "Poppins_500Medium" }}
            className="text-darkModeGreenBlack text-sm"
          >
            Metas
          </Text>
        </View>

        <View className="border-r-2 border-lightGreen w-0 h-[108px]" />
      </>
      }

      <View
        className="max-w-40 justify-center items-center gap-[13px]"
      >
        <View className="flex-row">
          <SalaryIcon color="#093030" />

          <View
            className="flex-col items-start ml-3"
          >
            <Text
              style={{ fontFamily: "Poppins_400Regular" }}
              className="text-sm"
            >
              Gastos mês passados
            </Text>

            <Text
              style={{ fontFamily: "Inter_700Bold" }}
              className="text-backgroundAndDarkModeLetters text-base"
            >
              R$ {revenue} 
            </Text>   
          </View>
        </View>

        <View className="border-b-2 border-lightGreen w-40 h-0" />

        <View className="flex-row">
          <FoodIconDark  />

          <View
            className="flex-col ml-3 "
          >
            <Text
              style={{ fontFamily: "Poppins_400Regular" }}
              className="text-sm"
            >
              Maior gasto no mês passado
            </Text>

            <Text
              style={{ fontFamily: "Inter_700Bold" }}
              className="text-oceanBlueButton text-base"
            >
              R$ {revenue}
            </Text>   
          </View>
        </View>

      </View>

    </View>
  );
}