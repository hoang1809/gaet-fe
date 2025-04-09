import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dayjs from "dayjs";

type Props = {
  id: string;
  tag?: string;
  image?: string;
  createdAt?: string;
  title: string;
  description: string;
  detailPath?: string;
};

const InfoCard = ({ id, tag, createdAt, image, title, description, detailPath }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg">
      <div className="relative rounded-lg aspect-[424/256] w-full overflow-hidden">
        <Image
          src={image ? image : "/"}
          className="hover:scale-105 transition-all duration-700"
          fill
          alt=""
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        {(tag || createdAt) && (
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium bg-gaet-50 text-gaet-700 px-2 py-1 rounded">
                {tag}
              </span>
              <span className="text-xs text-gray-500">
                {dayjs(createdAt).format("DD/MM/YYYY")}
              </span>
            </div>
          )}

        <h3 className="text-lg font-semibold mb-3 text-gray-900 line-clamp-2">
          <Link
            href={`${detailPath ? `/${detailPath}/${id}` : '#'}`}
            className="hover:text-gaet-600 transition-colors"
          >
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{description}</p>

        <Link
          href={`/news/${id}`}
          className="inline-flex items-center text-gaet-600 font-medium text-sm hover:text-gaet-800 transition-colors"
        >
          Đọc tiếp
          <ArrowRight
            size={16}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
