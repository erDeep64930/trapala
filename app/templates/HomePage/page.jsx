import Layout from "@/app/components/layout/Layout";
import React from "react";

import BannerSection from "./BannerSection/BannerSection";
import VideoSection from "./VideoSection/VideoSection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import SubjectCard from "./SubjectCard/SubjectCard";
import BrightFuture from "./BrightFuture/BrightFuture";

const HomePage = () => {
  return (
    <Layout>
      <BannerSection />
      <VideoSection />
      <WhyChooseUs />
      <SubjectCard />
      <BrightFuture />
    </Layout>
  );
};

export default HomePage;
