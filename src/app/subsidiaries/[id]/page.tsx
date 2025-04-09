"use client";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { use } from "react";
import Image from "next/image";
import { useFetchMemberDetail } from "@/hooks/useFetchMemberDetail";
import { getStrapiMedia } from "@/utils/getStrapiMedia";
import Loading from "@/components/common/Loading";

type Props = {
  params: Promise<{ id: string }>;
};

const SubsidiaryDetailPage = ({ params }: Props) => {
  const { id } = use(params);

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
                  Thông tin liên hệ
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-700 mb-1">
                      Địa chỉ
                    </h4>
                    <p className="text-gray-600">{data.data.address}</p>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-700 mb-1">
                      Điện thoại
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

                  {data.email && (
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
                Chức năng kinh doanh chính
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
                  Giới thiệu
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
