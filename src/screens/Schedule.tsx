import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import UpcomingEventCard from "../components/UpcomingEventCard";
import RecentLaunchCard from "../components/RecentLaunchCard";
import { loadToken } from "../utils/storage";
import { getUpcomingEvents } from "../redux/action";
import { useDispatch } from "react-redux";

const Schedule = () => {
 
  return (
    <Layout>
      <Text>Schedule</Text>
    </Layout>
  );
};

export default Schedule;

const styles = StyleSheet.create({});
