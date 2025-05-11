"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

const HeaderNavigationMenu = () => {
  const { isLoading, data } = useFetchBusinessArea();
  const { t } = useTranslation();

  // Define the navItems structure
  const navItems = [
    { label: t("header_home"), href: "/" },
    {
      label: t("header_about"),
      subItems: [
        { label: t("header_history"), href: "/about/history" },
        { label: t("header_vision"), href: "/about/vision" },
        { label: t("header_organization"), href: "/about/organization" },
        { label: t("header_leadership"), href: "/about/leadership" },
      ],
    },
    {
      label: t("header_business"),
      subItems:
        !isLoading && data
          ? data.data.map((item) => ({
              label: item.attributes.title,
              href: `/business/${item.id}`,
            }))
          : [],
    },
    { label: t("header_news"), href: "/news" },
    { label: t("header_gallery"), href: "/gallery" },
    { label: t("header_member_units"), href: "/subsidiaries" },
  ];

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="text-white">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.subItems ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="bg-white rounded-md p-2 min-w-[200px]">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gaet-50 rounded-md hover:text-gaet-600 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                className={navigationMenuTriggerStyle()}
              >
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <LanguageSwitcher />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigationMenu;
