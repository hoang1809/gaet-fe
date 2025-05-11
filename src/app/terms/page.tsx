"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchTermsPage } from "@/hooks/useFetchTermsPage";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TermsPage = () => {
  const { isLoading, error, data } = useFetchTermsPage();
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
            {t("footer_terms")}
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-gaet-800 mb-6">
            {t("footer_terms")}
          </h2>
        </div>
        <BlocksRenderer
          content={data.data.attributes.content}
          blocks={{
            image: ({ image }) => {
              return (
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image src={image.url} fill alt="" objectFit="cover" />
                </div>
              );
            },
            paragraph: ({ children }) => {
              return <p className="text-lg">{children}</p>;
            },
          }}
        />
      </Container>
    </>
  );
};

export default TermsPage;
