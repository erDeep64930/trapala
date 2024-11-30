import Layout from "@/app/components/layout/Layout";
import React from "react";

import BannerSection from "./BannerSection/BannerSection";
import VideoSection from "./VideoSection/VideoSection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import SubjectCard from "./SubjectCard/SubjectCard";

const HomePage = () => {
  return (
    <Layout>
      <BannerSection />
      <VideoSection />
      <WhyChooseUs />
      <SubjectCard />
    </Layout>
  );
};

export default HomePage;
