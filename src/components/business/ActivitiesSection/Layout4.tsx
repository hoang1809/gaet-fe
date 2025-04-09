import { Activity } from "@/types";
import { CheckCircle2 } from "lucide-react";

type Props = {
  activities: Activity[];
};

const Layout4 = ({ activities }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CheckCircle2 className="text-gaet-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Hoạt động {index + 1}
            </h3>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout4;
