import { Balance } from 'components/Balance';
import { BodyStyle } from 'components/BodyStyle';
import { CardInfo } from 'components/CardInfo';
import { RingIcon } from 'components/icons/ringIcon';
import { Transactions } from 'components/Transactions';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const userName = "Clark"

  return (
    <SafeAreaProvider>
      <View className="bg-mainGreen pt-safe pb-8 px-7">
        <StatusBar style='auto' />

        <View className="pt-7 flex-row justify-between">
          <View>
            <Text
              style={{fontFamily: "Poppins_600SemiBold"}}
              className="text-[20px]"
            >
              Bem vindo de volta {userName}!
            </Text>
            <Text>
              Bom dia!
            </Text>
          </View>

          <View>
            <TouchableOpacity className="w-8 h-8 items-center justify-center bg-lightGreen rounded-full" >
              <RingIcon />
            </TouchableOpacity>
          </View>
        </View>

        <Balance 
          expanseveValue={"1.600.00"}
          incomeValue={"1.700,00"}
          percentage={"30"}
          currentBalance={"100,00"}
        />


      </View>

      <BodyStyle>
        <CardInfo />
        <View>
          <Transactions />
        </View>
      </BodyStyle>
    </SafeAreaProvider>
  );
}
