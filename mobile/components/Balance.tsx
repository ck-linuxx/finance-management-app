import { View, Text } from "react-native"
import { CheckIcon } from "./icons/checkIcon";
import { DollarSign } from "./icons/DollarSign";
import { PiggybankIcon } from "./icons/piggybankIcon";
import React from "react";

interface IProps {
  incomeValue: string;
  expanseveValue: string;
  percentage: string;
  currentBalance: string;
}

export function Balance({ incomeValue, expanseveValue, percentage, currentBalance }: IProps) {
  const receita = incomeValue
  const despesas = expanseveValue

  return (
    <>
      <View
        className="w-full items-center justify-center flex-col gap-2 pt-4"
      >
        <View className="flex-row justify-center item-center gap-2">
          <View className="bg-lightGreen rounded-md py-2 px-4 w-[49%] flex-row items-center gap-2">
              <View className="px-2 py-2 bg-mainGreen rounded-md items-center">
                <DollarSign w="24px" h="24px" />
              </View>
              <View>
                <Text 
                  style={{ fontFamily: "Poppins_300Light" }}
                  className="text-backgroundAndDarkModeLetters">
                  Receitas
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-mainGreen text-xl"
                >
                  R$ {receita}
                </Text>
              </View> 
          </View>
          <View className="bg-lightGreen rounded-md py-2 px-4 w-[49%] flex-row items-center gap-2">
              <View className="px-2 py-2 bg-red rounded-md items-center">
                <DollarSign w="24px" h="24px" />
              </View>
              <View>
                <Text
                  style={{ fontFamily: "Poppins_300Light" }}
                  className="text-backgroundAndDarkModeLetters"
                >
                  Despesas
                </Text>
                <Text
                  style={{ fontFamily: "Poppins_600SemiBold" }}
                  className="text-red text-xl"
                >
                  R$ {despesas}
                </Text>
              </View>
          </View>
        </View>

        <View className="w-full bg-lightGreen rounded-md py-2 px-4 flex-row gap-2">
          <View className="px-2 py-2 bg-blueButton/80 rounded-md items-center">
            <PiggybankIcon w="24px" h="24px" />
          </View>
          <View className="flex-col">
            <Text
              className="text-darkModeGreenBlack"
            >
              Saldo atual
            </Text>
            <Text
              style={{ fontFamily: "Poppins_600SemiBold" }}
              className="text-blueButton text-2xl"
            >
              R$ {currentBalance}
            </Text>
          </View>
        </View>

      </View>

      <View 
        className="flex items-center gap-2 flex-row pt-3 ml-3"
      >
        <CheckIcon />
        <Text
          className="text-base"
        >
          {percentage}% da sua receita esta em uso!
        </Text>
      </View>
    </>
  );
}