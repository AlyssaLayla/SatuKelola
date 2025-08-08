"use client";

import React, { useState, useEffect } from "react";
import { FeaturedVideoSection } from "./video.component";
import { CommentsSection } from "./comment-section.componnet";
import { RecommendedCourses } from "./course-recommendation.component";
import { FEATURED_COURSE, RECOMMENDED_COURSES, COMMENTS } from '../_constants/pembelajaran.constant';
import { Breadcrumbs } from "../../../../components/breadcrumbs.component";

export const PembelajaranMain = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState<number[]>([]);
  const [visibleComments, setVisibleComments] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCourses(RECOMMENDED_COURSES.map((_, index) => index));
      setVisibleComments(COMMENTS.map((_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Breadcrumb items configuration
  const breadcrumbItems = [
    {
      label: "Komunitas", 
      href: "/komunitas",
    },
    {
      label: "Kelas Online",
      isActive: true,
    },
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "100px",
        }}
        className="main-container"
      >
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Main Content Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "40px",
          }}
          className="main-grid"
        >
          {/* Left Column - Main Content */}
          <div className="main-content">
            <FeaturedVideoSection
              course={FEATURED_COURSE}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
            />

            <CommentsSection
              comments={COMMENTS}
              visibleComments={visibleComments}
            />
          </div>

          {/* Right Column - Recommended Courses */}
          <div className="sidebar-content">
            <RecommendedCourses
              courses={RECOMMENDED_COURSES}
              visibleCourses={visibleCourses}
            />
          </div>
        </div>
      </div>

      {/* Global Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .main-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 30px !important;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 20px !important;
            padding-bottom: 60px !important;
          }

          .main-grid {
            gap: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            padding-left: 12px !important;
            padding-right: 12px !important;
            padding-top: 16px !important;
            padding-bottom: 40px !important;
          }

          .main-grid {
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};