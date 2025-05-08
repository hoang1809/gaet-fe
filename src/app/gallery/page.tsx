"use client";
import { Suspense } from "react";
import GalleryList from "./GalleryList";

const GalleryPage = () => {
  return (
    <Suspense>
      <GalleryList />
    </Suspense>
  );
};

export default GalleryPage;
