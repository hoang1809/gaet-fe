import React from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const {t} = useTranslation();
  return (
    <div className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto bg-gaet-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t('business_interested')}
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            {t('business_contact_us')}
          </p>
          <Button className="bg-white text-gaet-700 hover:bg-gaet-50">
            {t('homepage_contact_now')}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
