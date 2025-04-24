"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Mail,
  Phone,
  Globe,
  X,
} from "lucide-react";
import Link from "next/link";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import Loading from "../common/Loading";
import FooterMessageForm from "./FooterMessageForm";
import { useFetchAbout } from "@/hooks/useFetchAbout";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const {t} = useTranslation();
  const { isLoading, error, data } = useFetchBusinessArea();
  const infor = useFetchAbout()

  if (isLoading || infor.isLoading) {
    return <Loading />;
  }

  if (error || infor.error) {
    return <div>An error occurred: {error?.message}</div>;
  }
  if (!data || !data.data || !infor.data) {
    return <div>No data available</div>;
  }
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div id="contact">
            <div className="mb-4">
              <img
                src="/assets/logos/logo_GAET_transparent.png"
                alt="GAET Logo"
                className="h-10"
              />
            </div>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-gaet-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin
                  size={16}
                  className="mr-3 flex-shrink-0 text-gray-500"
                />
                <span className="text-gray-400 text-sm">
                  {infor.data.data.address}
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0 text-gray-500" />
                <a
                  href={`mailto:${infor.data.data.email}`}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {infor.data.data.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 flex-shrink-0 text-gray-500" />
                <div className="text-gray-400 text-sm">
                  <a
                    href="tel:+84243832537"
                    className="hover:text-white transition-colors block"
                  >
                    {infor.data.data.phone_number1}
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone
                  size={16}
                  className="mr-3 flex-shrink-0 text-gray-500 opacity-0"
                />
                <div className="text-gray-400 text-sm">
                  <a
                    href="tel:+84243832771"
                    className="hover:text-white transition-colors block"
                  >
                    {infor.data.data.phone_number2}
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-3 flex-shrink-0 text-gray-500" />
                <a
                  href="https://gaet.com.vn"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {infor.data.data.website}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">{t('header_business')}</h4>
            <ul className="space-y-2 mb-6">
              {data.data.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`business/${item.documentId}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors block"
                  >
                    {item.title
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-800">
              <h4 className="text-lg font-semibold mb-4">{t('footer_quick_links')}</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('header_home')}
                </Link>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('header_about')}
                </Link>
                <Link
                  href="business"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('header_business')}
                </Link>
                <Link
                  href="news"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('header_news')}
                </Link>
                <Link
                  href="/subsidiaries"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('header_member_units')}
                </Link>
                <Link
                  href="gallery"
                  className="text-gray-400 hover:text-white text-sm transition-colors block"
                >
                  {t('gallery_title')}
                </Link>
              </div>
            </div>
          </div>

          <FooterMessageForm />
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {t('footer_right')}
            </p>
            <div className="flex space-x-6">
              <Link
                href="/policy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer_policy')}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer_terms')}
              </Link>
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('footer_sitemap')}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
