
import { Activity } from "@/types";

type Props = {
  activities: Activity[];
};

const Layout3 = ({activities} : Props) => {
  return (
    <div className="space-y-8">
                  {activities.map((activity, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-gaet-100 rounded-full p-2 flex-shrink-0">
                          <div className="bg-gaet-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="w-full">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                            {activity.title}
                          </h3>
                          <div className="space-y-3">
                            {/* {service.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700 leading-relaxed">
                                {detail}
                              </p>
                            ))} */}
                            {activity.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
  );
};

export default Layout3;
