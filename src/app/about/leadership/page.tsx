"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchLeadershipPage } from "@/hooks/useFetchLeadershipPage";
import { getStrapiMedia } from "@/utils";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const LeadershipPage = () => {
  const { isLoading, error, data } = useFetchLeadershipPage();
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
            {t("header_leadership")}
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mx-auto max-w-[65ch]">
          <p className="text-lg">{data.data.description}</p>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg"
            >
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={leader.image ? getStrapiMedia(leader.image.url) : "/"}
                    fill
                    alt=""
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium bg-gaet-50 text-gaet-700 px-2 py-1 rounded">
                    {leader.title}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>

                {leader.description && (
                  <p className="text-gray-600 mt-3 text-sm">
                    {leader.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mx-auto max-w-[65ch]">
          <h2 className="text-3xl font-bold text-gaet-800 mb-6">
            {t("organization_structure")}
          </h2>
          <p className="text-lg">{data.data.description}</p>
        </div>
      </Container>
    </>
  );
};

export default LeadershipPage;
