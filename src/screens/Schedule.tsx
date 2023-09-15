import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Layout from "../components/Layout";
import UpcomingEventDayCard from "../components/UpcomingEventDayCard";
import fakeDateData from "../utils/fakeDateData";
import TimeCalendar from "../components/TimeCalendar";

const Schedule = () => {
  const dayData = fakeDateData();
  const [selectedDay, setSelectedDay] = useState(null);

  const dummyData = [
    { hour: "09:30 AM", content: "Apollo 11 Test Flight" },
    { hour: "10:00 AM", content: "" },
    { hour: "10:30 AM", content: "" },
    { hour: "11:00 AM", content: "XC75 Starship Rocket Launch" },
    { hour: "11:30 AM", content: "" },
    { hour: "00:00 PM", content: "" },
    { hour: "00:30 PM", content: "" },
    // Diğer saat dilimi ve içerikleri buraya ekleyin
  ];
  return (
    <Layout>
      {/* calendar header */}
      <View style={styles.calendarHeader}>
        <Text className="text-2xl font-bold text-white flex  justify-start">July {selectedDay ? selectedDay : "-"}</Text>
        <Text className="text-[16px]  text-white/50 flex  justify-start">2 events today</Text>
      </View>
      {/* upcoming event day container */}
      <View style={styles.upcomingEventDayContainer}>
        <ScrollView contentContainerStyle={{ columnGap: 14 }} showsHorizontalScrollIndicator={false} horizontal>
          {dayData.map((day) => {
            const isSelected = day.id === selectedDay;

            return (
              <UpcomingEventDayCard
                key={day.id}
                data={day}
                onPress={() => {
                  setSelectedDay(day.id);
                }}
                isSelected={isSelected}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* time calendar section */}
      <View style={styles.calendarContent}>
        <TimeCalendar data={dummyData} />
      </View>
    </Layout>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  calendarHeader: {
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
    height: hp("10%"),
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  upcomingEventDayContainer: {
    paddingHorizontal: wp("5%"),
    width: wp("100%"),
    height: hp("10%"),
  },
  calendarContent: {
    flex: 1,
    marginTop: hp("4%"),
    width: wp("100%"),
  },
});
