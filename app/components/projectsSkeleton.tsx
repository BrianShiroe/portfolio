// app/components/projectsSkeleton.tsx
"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProjectsSkeletonProps {
  sections?: number; // how many sections to show
  itemsPerSection?: number; // how many skeleton cards per section
}

export default function ProjectsSkeleton({
  sections = 2,
  itemsPerSection = 3,
}: ProjectsSkeletonProps) {
  return (
    <>
      {Array.from({ length: sections }).map((_, idx) => (
        <div key={idx} className="w-full mb-6 sm:mb-10">
          <Skeleton width={150} height={30} className="mb-3 sm:mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {Array.from({ length: itemsPerSection }).map((__, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow bg-white"
              >
                <Skeleton height={350} width={600} className="w-full" />{" "}
                {/* Matches image height */}
                <div className="p-4 sm:p-5">
                  <Skeleton height={20} width="50%" className="mb-2" />
                  <Skeleton height={16} count={4} />
                  <Skeleton height={20} width="30%" className="mb-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
