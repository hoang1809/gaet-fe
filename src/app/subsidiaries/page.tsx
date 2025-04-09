"use client";
import Loading from "@/components/common/Loading";
import Container from "@/components/common/Container";
import { useFetchMembers } from "@/hooks/useFetchMembers";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/utils/getStrapiMedia";

const SubsidiariesPage = () => {
  const { isLoading, error, data } = useFetchMembers();

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
            Đơn vị thành viên
          </h1>
          <p className="text-white/80 text-center mt-4 max-w-3xl mx-auto">
            GAET có một hệ thống các đơn vị thành viên hoạt động trong nhiều
            lĩnh vực khác nhau, từ sản xuất công nghiệp đến thương mại và dịch
            vụ.
          </p>
        </div>
      </div>
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((subsidiary: any, index: number) => (
            <Link
              href={`/subsidiaries/${subsidiary.documentId}`}
              key={subsidiary.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
            >
              <div className="h-48 relative overflow-hidden bg-gray-200">
                <Image
                  src={
                    subsidiary.image?.url
                      ? getStrapiMedia(subsidiary.image?.url)
                      : "/"
                  }
                  className="hover:scale-105 transition-all duration-700"
                  fill
                  alt=""
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {index + 1}. {subsidiary.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {subsidiary.description}
                </p>

                <div className="flex justify-end">
                  <span className="text-gaet-600 text-sm font-medium hover:text-gaet-800 transition-colors duration-300">
                    Xem chi tiết →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default SubsidiariesPage;
