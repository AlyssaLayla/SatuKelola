'use client';

import React from "react";
import { Course } from "../_types/pembelajaran.type";
import { CourseCard } from "./course-card.component";

interface RecommendedCoursesProps {
  courses: Course[];
  visibleCourses: number[];
}

export const RecommendedCourses: React.FC<RecommendedCoursesProps> = ({
  courses,
  visibleCourses,
}) => {
  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: "40px",
        }}
        className="recommended-courses-sticky"
      >
        {/* Recommended Courses */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
          className="recommended-courses-grid"
        >
          {courses.map((course, index) => {
            const isVisible = visibleCourses.includes(index);

            return (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .recommended-courses-sticky {
            position: static !important;
          }

          .recommended-courses-grid {
            gap: 16px !important;
          }
        }

        @media (max-width: 768px) {
          .recommended-courses-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .recommended-courses-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};