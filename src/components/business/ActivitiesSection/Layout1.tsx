import React from "react";
import { Activity } from "@/types";

type Props = {
  activities: Activity[];
};

const Layout1 = ({ activities }: Props) => {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-gaet-100 rounded-full p-2 flex-shrink-0">
                <div className="bg-gaet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Layout1;
