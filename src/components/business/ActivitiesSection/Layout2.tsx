import React from "react";
import { Activity } from "@/types";
import { useTranslation } from "react-i18next";

type Props = {
  activities: Activity[];
};

const Layout2 = ({ activities }: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        {t('business_notable_projects')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gaet-100 text-gaet-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">
                {index + 1}
              </div>
              <h4 className="text-md font-medium text-gray-800">
                {activity.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout2;
