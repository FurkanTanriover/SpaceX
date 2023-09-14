import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

interface UpcomingEventDayCardProps {
  data: any;
  onPress: () => void;
  isSelected: boolean; // Seçili olup olmadığını belirten prop
}

const UpcomingEventDayCard = ({ data, onPress, isSelected }: UpcomingEventDayCardProps) => {
  const textColor = isSelected ? "#36445B" : "white"; // Seçili ise veya değilse metin rengini ayarla
  const backgroundColor = isSelected ? "#D9D9D9" : "transparent"; // Seçili ise veya değilse arka plan rengini ayarla

  return (
    <View style={[styles.upcomingEventDay, { backgroundColor }]}>
      <TouchableOpacity className="items-center" onPress={onPress}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: textColor }}>{data.day}</Text>
        <Text className="text-[#36445B54]/90">{data.dayName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingEventDayCard;

const styles = StyleSheet.create({
  upcomingEventDay: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: wp("10%"),
    textAlign: "center",
  },
});
