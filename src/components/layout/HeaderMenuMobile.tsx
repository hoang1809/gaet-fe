import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useFetchBusinessArea } from "@/hooks/useFetchBussinessArea";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function HeaderMenuMoile() {
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost"><Menu color="white" className="size-8"/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div>
          {navItems.map((item) =>
            item.subItems && item.subItems.length > 0 ? (
              <Accordion key={item.label} type="multiple">
                <AccordionItem value={item.label}>
                  <AccordionTrigger className="py-2 px-4 font-normal">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="block px-4 py-2 text-sm"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
