"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchHistoryPage } from "@/hooks/useFetchHistoryPage";
import { useTranslation } from "react-i18next";

const HistoryPage = () => {
  const { isLoading, error, data } = useFetchHistoryPage();
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
            {t('history_title')}
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mx-auto max-w-[65ch]">
          <h2 className="text-3xl font-bold text-gaet-800 mb-6">
            {t('history_development')}
          </h2>
          <p className="text-lg">{data.data.history_of_development}</p>
        </div>
      </Container>
      <Container className="pb-6">
        <div className="relative ml-6 md:mx-auto md:max-w-5xl">
          <div className="absolute top-0 bottom-0 border-l-4 border-gaet-600"></div>

          {data.data.milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="flex items-center mb-16 animate-fade-in"
            >
              <div className="flex-shrink-0 px-2 md:px-6 py-2 min-w-[92px] md:min-w-[125px] bg-gaet-600 text-white rounded-r-lg text-center font-bold text-sm">
                {milestone.year}
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 ml-8 flex-1">
                <h3 className="text-xl font-bold text-gaet-700">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="md:max-w-5xl pt-0">
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gaet-700 mb-6">
            {t('history_notable_chievements')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.data.achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-gaet-600 mb-3">
                  {achievement.time}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HistoryPage;
