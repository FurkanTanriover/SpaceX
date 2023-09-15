import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const TimeCalendar = ({ data }) => {
  console.log("data", data);
  return (
    <ScrollView style={styles.timeCalendarContainer}>
      {data.map((item) => {
        return (
          <View style={styles.eventInfoSection}>
            <View style={styles.hours}>
              <Text className="text-white">{item.hour}</Text>
            </View>
            <View style={item.content.length > 0 ? styles.content : styles.freeContent}>
              <Text className="text-white">{item.content}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TimeCalendar;

const styles = StyleSheet.create({
  timeCalendarContainer: {
    display: "flex",
    flexDirection: "column",
  },
  eventInfoSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: wp("100%"),
  },
  hours: {
    paddingHorizontal: wp("4%"),
    display: "flex",
    marginBottom: hp("4%"),
  },
  content: {
    backgroundColor: "#36445B",
    padding: wp("2%"),
    borderRadius: 50,
    display: "flex",
    flex: 1,
    marginBottom: hp("4%"),
    alignItems: "center",
  },
  freeContent: {
    padding: wp("2%"),
    marginBottom: hp("4%"),
  },
});
