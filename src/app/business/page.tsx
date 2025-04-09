"use client";
import Container from "@/components/common/Container";
import InfoCard from "@/components/common/InfoCard";
import Loading from "@/components/common/Loading";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import { getStrapiMedia } from "@/utils";

const BusinessPage = () => {
  const { isLoading, error, data } = useFetchBusinessArea();

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
            Tin tức & Sự kiện
          </h1>
        </div>
      </div>
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((item) => (
            <InfoCard
              key={item.documentId}
              title={item.title}
              id={item.documentId}
              image={getStrapiMedia(item.cover.url)}
              description={item.general}
              detailPath="business"
            />
          ))}
        </div>

        <div className="max-w-4xl mt-32 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Phát triển bền vững
          </h2>
          <p className="text-gray-600 mb-8">
            Bên cạnh việc phát triển các lĩnh vực kinh doanh chủ lực, Tổng công
            ty GAET luôn đặt mục tiêu phát triển bền vững lên hàng đầu, đảm bảo
            sự hài hòa giữa lợi ích kinh tế và trách nhiệm xã hội.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gaet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gaet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Hiệu quả
              </h3>
              <p className="text-gray-600 text-center">
                Tối ưu hóa quy trình sản xuất và kinh doanh để đạt hiệu quả cao
                nhất.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gaet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gaet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Bền vững
              </h3>
              <p className="text-gray-600 text-center">
                Đảm bảo các hoạt động kinh doanh tuân thủ các nguyên tắc bảo vệ
                môi trường.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gaet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gaet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Trách nhiệm xã hội
              </h3>
              <p className="text-gray-600 text-center">
                Đóng góp tích cực vào sự phát triển của cộng đồng và xã hội.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BusinessPage;
