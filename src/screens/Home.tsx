import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import UpcomingEventCard from "../components/UpcomingEventCard";
import RecentLaunchCard from "../components/RecenLaunchCard";

const Home = () => {
  return (
    <Layout>
      {/* upcoming events */}
      <View style={styles.upcomingEventsContainer}>
        <Text className="text-2xl font-normal text-white flex mb-4  justify-start">Upcoming Events</Text>
        <ScrollView contentContainerStyle={{ columnGap: 14 }} showsHorizontalScrollIndicator={false} horizontal>
          {
            <UpcomingEventCard
              backgroundImg="https://picsum.photos/200/300"
              eventName="CRS-22"
              eventDate="June 12,23"
              eventTime="09:10PM"
            />
          }
          {
            <UpcomingEventCard
              backgroundImg="https://picsum.photos/200/300"
              eventName="CRS-22"
              eventDate="June 12,23"
              eventTime="09:10PM"
            />
          }
          {
            <UpcomingEventCard
              backgroundImg="https://picsum.photos/200/300"
              eventName="CRS-22"
              eventDate="June 12,23"
              eventTime="09:10PM"
            />
          }
          {
            <UpcomingEventCard
              backgroundImg="https://picsum.photos/200/300"
              eventName="CRS-22"
              eventDate="June 12,23"
              eventTime="09:10PM"
            />
          }
        </ScrollView>
      </View>
      {/* recent launches */}
      <View style={styles.recentLaunchesContainer}>
        <Text className="text-2xl font-normal text-white flex mb-4  justify-start">Recent Launch</Text>
        <ScrollView contentContainerStyle={{ rowGap: 14 }}>
          <RecentLaunchCard
            title="Starlink Mission"
            description="first orbital Class Rocket Capable Of Reflight"
            date="Jun 21, 2023"
            imageURL="https://picsum.photos/200/300"
          />
          <RecentLaunchCard
            title="Starlink Mission"
            description="first orbital Class Rocket Capable Of Reflight"
            date="Jun 21, 2023"
            imageURL="https://picsum.photos/200/300"
          />
          <RecentLaunchCard
            title="Starlink Mission"
            description="first orbital Class Rocket Capable Of Reflight"
            date="Jun 21, 2023"
            imageURL="https://picsum.photos/200/300"
          />
          <RecentLaunchCard
            title="Starlink Mission"
            description="first orbital Class Rocket Capable Of Reflight"
            date="Jun 21, 2023"
            imageURL="https://picsum.photos/200/300"
          />
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  upcomingEventsContainer: {
    marginTop: hp("1%"),
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
  },
  recentLaunchesContainer: {
    flex: 1,
    marginTop: hp("1%"),
    width: wp("100%"),
    paddingHorizontal: wp("5%"),
  },
});
