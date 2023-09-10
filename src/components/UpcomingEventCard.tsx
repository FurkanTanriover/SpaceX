import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface UpcomingEventCardProps {
  backgroundImg: string; // Arka plan görselinin kaynağı
  eventName: string; // Etkinlik adı
  eventDate: string; // Etkinlik tarihi
  eventTime: string; // Etkinlik saati
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ backgroundImg, eventName, eventDate, eventTime }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: backgroundImg }} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.eventName}>{eventName}</Text>
        <View>
          <Text style={styles.eventDate}>{eventDate}</Text>
          <Text style={styles.eventDate}>{eventTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp("35"),
    height: hp("19"),
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Hafif karartma efekti
    justifyContent: "space-between",
    padding: 16,
  },
  eventName: {
    fontSize: 16,
    color: "white",
    fontWeight: "normal",
  },
  eventDate: {
    fontSize: 12,
    color: "white",
  },
});

export default UpcomingEventCard;
