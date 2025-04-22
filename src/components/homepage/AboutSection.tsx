import React from "react";
import Container from "../common/Container";
import { Feather } from "lucide-react";
import { useTranslation } from "react-i18next";

type Props = {
  description: string;
  features: Feature[];
};

const AboutSection = ({ description, features }: Props) => {
  const {t} = useTranslation();
  return (
    <div className="bg-white">
      <Container>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <div className="mb-6 text-center lg:text-left">
                  <span className="text-sm font-semibold text-gaet-600 uppercase tracking-wider">
                    {t("homepage_about_us")}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 header-underline about-text-balanced">
                    {t('homepage_about_us_description')}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6 about-text-balanced text-justify">
                  {description}
                </p>

                <a
                  href="/about"
                  className="btn-primary inline-flex items-center"
                >
                  {t("homepage_learn_more")}
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.id} className="glass-card p-6">
                    <div className="bg-gaet-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Feather className="h-6 w-6 text-gaet-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gaet-100 rounded-full opacity-70 blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gaet-200 rounded-full opacity-70 blur-3xl"></div>
            </div>
          </div>

          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
              <div>
                <div className="text-4xl font-bold text-gaet-700 mb-2">60+</div>
                <p className="text-gray-600">{t('homepage_years_of_experience')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaet-700 mb-2">10+</div>
                <p className="text-gray-600">{t('homepage_subsidiaries')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaet-700 mb-2">
                  100+
                </div>
                <p className="text-gray-600">{t('homepage_partner_countries')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gaet-700 mb-2">
                  1700+
                </div>
                <p className="text-gray-600">{t('homepage_personnel')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
