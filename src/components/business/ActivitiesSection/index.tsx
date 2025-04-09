import Container from "@/components/common/Container";
import React from "react";

import { Activities_layout, Activity } from "@/types";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";
import Layout4 from "./Layout4";
import { useTranslation } from "react-i18next";

type Props = {
  activities: Activity[];
  layout: Activities_layout;
  commitment?: string;
};

const ActivitiesSection = ({ activities, layout, commitment }: Props) => {
  const {t} = useTranslation();
  return (
    <div id="activities" className="bg-gaet-50">
      <Container className="max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          <span className="relative inline-block">
            {t('business_main_activities')}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gaet-500"></div>
          </span>
        </h2>
        {layout === "layout1" ? (
          <Layout1 activities={activities} />
        ) : layout === "layout2" ? (
          <Layout2 activities={activities} />
        ) : layout === "layout3" ? (
          <Layout3 activities={activities} />
        ) : (
          <Layout4 activities={activities} />
        )}

<div className="mt-12 bg-gaet-700 text-white p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  {t('business_our_commitment')}
                </h3>
                <p className="leading-relaxed">
                  {commitment}
                </p>
              </div>
      </Container>
    </div>
  );
};

export default ActivitiesSection;
