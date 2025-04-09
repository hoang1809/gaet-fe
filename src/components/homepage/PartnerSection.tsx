import React from "react";
import Container from "../common/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getStrapiMedia } from "@/utils";
import { useTranslation } from "react-i18next";
import { useFetchPartners } from "@/hooks/useFetchPartners";
import Loading from "../common/Loading";
type Props = {
  description: string;
};
const PartnerSection = ({ description }: Props) => {
  const { t } = useTranslation();

  const { isLoading, error, data } = useFetchPartners();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  if (!data || !data.data) {
    return <div>No data available</div>;
  }


  const scrollLeft = () => {
    const container = document.getElementById("partners-container");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("partners-container");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <Container>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gaet-700">
          {t("homepage_strategic_partners")}
        </h2>
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="relative mt-12">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gaet-50 transition-colors hidden md:flex"
          aria-label="Scroll left"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          id="partners-container"
          className="flex overflow-x-auto gap-8 pb-8 px-4 scrollbar-hide scroll-smooth"
        >
          {data.data.map((partner, index) => (
            <div
              key={partner.id}
              className="flex-shrink-0 glass-card p-6 rounded-xl w-64 flex flex-col items-center justify-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-24 relative w-full flex items-center justify-center mb-4">
                <Image
                  src={
                    partner.logo?.url ? getStrapiMedia(partner.logo?.url) : "/"
                  }
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gaet-50 transition-colors hidden md:flex"
          aria-label="Scroll right"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* <div className="text-center mt-10">
        <a href="/partners" className="btn-secondary inline-flex items-center">
          {t("homepage_view_all_partners")}
          <ArrowRight size={16} className="ml-2" />
        </a>
      </div> */}
    </Container>
  );
};

export default PartnerSection;
