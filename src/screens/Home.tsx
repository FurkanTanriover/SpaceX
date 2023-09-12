import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Layout from "../components/Layout";
import RecentLaunchCard from "../components/RecentLaunchCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingEvents } from "./../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const [upcomingEvents, recentLaunch] = useSelector((state: any) => [state.reducer.upcomingEvents, state.reducer.recentLaunch]);
  useEffect(() => {
    getUpcomingEvents(dispatch);
  }, [dispatch, upcomingEvents, recentLaunch]);

  console.log("xy", upcomingEvents);
  console.log("dfg", recentLaunch);
  return (
    <Layout>
      {/* upcoming events */}
      <View style={styles.upcomingEventsContainer}>
        <Text className="text-2xl font-normal text-white flex mb-4  justify-start">Upcoming Events</Text>
        <ScrollView contentContainerStyle={{ columnGap: 14 }} showsHorizontalScrollIndicator={false} horizontal>
          {upcomingEvents.map((event: any) => (
            <UpcomingEventCard
              key={event.id}
              backgroundImg={event.image}
              eventName={event.title}
              eventDate={event.date}
              eventTime={event.time}
            />
          ))}
        </ScrollView>
      </View>
      {/* recent launches */}
      <View style={styles.recentLaunchesContainer}>
        <Text className="text-2xl font-normal text-white flex mb-4  justify-start">Recent Launch</Text>
        <ScrollView contentContainerStyle={{ rowGap: 14 }}>
          {recentLaunch.map((launch: any) => (
            <RecentLaunchCard
              key={launch.id}
              title={launch.title}
              description={launch.description}
              date={launch.date}
              imageURL={launch.image}
            />
          ))}
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
