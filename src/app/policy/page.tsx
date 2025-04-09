"use client";
import Container from "@/components/common/Container";
import Loading from "@/components/common/Loading";
import { useFetchPolicyPage } from "@/hooks/useFetchPolicyPage";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

const PolicyPage = () => {
  const { isLoading, error, data } = useFetchPolicyPage();

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
            Chính sách bảo mật
          </h1>
        </div>
      </div>
      <Container className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-gaet-800 mb-6">
            Chính sách bảo mật
          </h2>
        </div>
        <BlocksRenderer
          content={data.data.content}
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

export default PolicyPage;
