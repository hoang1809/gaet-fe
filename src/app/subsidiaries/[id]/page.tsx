"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchMemberDetail } from "@/hooks/useFetchMemberDetail";
import { getStrapiMedia } from "@/utils/getStrapiMedia";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { use } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  params: Promise<{ id: string }>;
};

const SubsidiaryDetailPage = ({ params }: Props) => {
  const { id } = use(params);
  const { t } = useTranslation();

  const { isLoading, error, data } = useFetchMemberDetail(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <div>
      <div className="bg-gaet-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            {data.data.name}
          </h1>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={
                    data.data.image?.url
                      ? getStrapiMedia(data.data.image.url)
                      : "/"
                  }
                  className="border-0"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {t("subsidiary_contact_info")}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-700 mb-1">
                      {t("subsidiary_address")}
                    </h4>
                    <p className="text-gray-600">{data.data.address}</p>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-700 mb-1">
                      {t("subsidiary_phone")}
                    </h4>
                    <ul className="space-y-1">
                      <li className="text-gray-600">
                        <a
                          href={`tel:${data.data.phone_number}`}
                          className="hover:text-gaet-600 transition-colors duration-300"
                        >
                          {data.data.phone_number}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {data.data.fax && (
                    <div>
                      <h4 className="text-md font-medium text-gray-700 mb-1">
                        Fax:
                      </h4>
                      <p className="text-gray-600">{data.data.fax}</p>
                    </div>
                  )}

                  {data.data.email && (
                    <div>
                      <h4 className="text-md font-medium text-gray-700 mb-1">
                        Email:
                      </h4>
                      <p className="text-gray-600">
                        <a
                          href={`mailto:${data.data.email}`}
                          className="hover:text-gaet-600 transition-colors duration-300"
                        >
                          {data.data.email}
                        </a>
                      </p>
                    </div>
                  )}

                  {data.data.website && (
                    <div>
                      <h4 className="text-md font-medium text-gray-700 mb-1">
                        Website:
                      </h4>
                      <p className="text-gray-600">
                        <a
                          href={`https://${data.data.website}`}
                          className="hover:text-gaet-600 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.data.website}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-md bg-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4 border-gray-200">
                {t("subsidiary_function")}
              </h2>

              <BlocksRenderer
                content={data.data.functions}
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
                  list: ({ children }) => {
                    return (
                      <ul className="list-disc pl-6 text-lg text-gray-700">
                        {children}
                      </ul>
                    );
                  },
                }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {t("subsidiary_about")}
                </h3>

                <p className="text-gray-700 mb-4">{data.data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubsidiaryDetailPage;
