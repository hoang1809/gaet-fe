"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchVisionPage } from "@/hooks/useFetchVisionPage";
import { Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const VisionPage = () => {
  const { isLoading, error, data } = useFetchVisionPage();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="bg-gaet-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            {t("vision_vision_and_mission")}
          </h1>
        </div>
      </div>
      <div className="bg-white">
        <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gaet-700 mb-6">
              {t("vision_vision")}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {data.data.attributes.vision}
            </p>

            <div className="mt-12 relative">
              <div className="absolute inset-0 bg-gaet-50 transform -skew-y-3 z-0"></div>
              <div className="relative z-10 py-12 px-8">
                <h2 className="text-3xl font-bold text-gaet-700 mb-6">
                  {t("vision_mission")}
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  {data.data.attributes.mission}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gaet-700 mb-10 text-center">
              {t("vision_core_values")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.data.attributes.core_values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <Target className="size-12 text-gaet-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gaet-700 mb-10 text-center">
              {t("vision_objectives")}
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-gaet-600">
              <ul className="space-y-4">
                {data.data.attributes.objectives.map((objective) => (
                  <li className="flex items-start" key={objective.id}>
                    <div className="bg-gaet-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-gaet-600 rounded-full w-3 h-3"></div>
                    </div>
                    <p className="text-gray-700">{objective.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VisionPage;
