import React from "react";
import { ScrollView } from "react-native";
import { View, Image, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface RecentLaunchCardProps {
  title: string;
  description: string;
  date: string;
  imageURL: string;
}

const RecentLaunchCard: React.FC<RecentLaunchCardProps> = ({ title, description, date, imageURL }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageURL }} style={styles.image} />
      </View>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text className="text-[12px] text-white/40">{date}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp("11%"),
    flexDirection: "row",
    backgroundColor: "rgba(54, 68, 91, 0.5)",
    borderRadius: 5,
    overflow: "hidden",
    padding: 5,
  },
  imageContainer: {
    width: 92,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    fontSize: 12,
    color: "white",
  },
});

export default RecentLaunchCard;
