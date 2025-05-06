"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchOrganizationPage } from "@/hooks/useFetchOrganizationPage";
import { useTranslation } from "react-i18next";

const OrganizationPage = () => {
  const { isLoading, error, data } = useFetchOrganizationPage();
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
            {t("header_organization")}
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12 pb-0">
        <div className="mx-auto max-w-[65ch]">
          <p className="text-lg">{data.data.description}</p>
        </div>
        <div>
          <div className="bg-gaet-600 text-white rounded-t-lg p-4 flex justify-center items-center">
            <div className="text-xl font-bold px-6 py-3 border-2 border-white rounded-lg">
              {t("organization_chairman")}
            </div>
          </div>
          <div className="bg-gaet-500 text-white p-4 flex justify-center items-center">
            <div className="text-xl font-bold">
              {t("organization_general_director")}
            </div>
          </div>
          <div className="bg-gaet-400 text-white p-3 flex justify-center items-center">
            <div className="text-lg font-semibold">
              {t("organization_deputy_general_directors")}
            </div>
          </div>
        </div>
      </Container>

      <Container className="max-w-6xl pb-0">
        <h2 className="text-xl font-bold text-gaet-700 border-b-2 border-gaet-200 pb-3 mb-6">
          {t("organization_directly_affiliated_agencies")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.data.directly_affiliated_agencies.map((agency) => (
            <div
              key={agency.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-gaet-500"
            >
              <h3 className="font-semibold text-gray-800">{agency.name}</h3>
            </div>
          ))}
        </div>
      </Container>

      <Container className="max-w-6xl pb-0">
        <h2 className="text-xl font-bold text-gaet-700 border-b-2 border-gaet-200 pb-3 mb-6">
          {t("organization_subsidiary_companies")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.data.subsidiary_companies.map((company) => (
            <div
              key={company.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-gaet-500"
            >
              <h3 className="font-semibold text-gray-800">{company.name}</h3>
            </div>
          ))}
        </div>
      </Container>

      <Container className="max-w-6xl">
        <h2 className="text-xl font-bold text-gaet-700 border-b-2 border-gaet-200 pb-3 mb-6">
          {t("organization_representative_offices")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.data.representative_offices.map((office) => (
            <div
              key={office.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-gaet-500"
            >
              <h3 className="font-semibold text-gray-800">{office.name}</h3>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default OrganizationPage;
