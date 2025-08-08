"use client";

import { Clock, Star } from "lucide-react";
import React from "react";
import { Course } from "../_types/pembelajaran.type";
import { getLevelColor, getLevelLabel } from "../_utils/pembelajaran.util";

interface CourseCardProps {
  course: Course;
  index: number;
  isVisible: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  index,
  isVisible,
}) => {
  return (
    <div
      key={course.id}
      className={`course-card transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 6px 5px -8px rgba(0, 0, 0, 0.1)",
        border: "2px solid #FEE480",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px -8px rgba(0, 0, 0, 0.15)";
        e.currentTarget.style.borderColor = "#FDD741";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.borderColor = "#FEE480";
      }}
    >
      {/* Course Content Layout */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
        }}
        className="course-content"
      >
        {/* Course Thumbnail with Level Badge Below */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexShrink: 0,
          }}
          className="course-thumbnail-container"
        >
          {/* Thumbnail Image */}
          <div
            style={{
              width: "100px",
              height: "80px",
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "0.25rem",
            }}
            className="course-thumbnail"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Level Badge Below Image */}
          <div
            style={{
              background: getLevelColor(course.level),
              borderRadius: "10px",
              padding: "0 8px",
              margin: "0",
              display: "inline-block",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: "500",
                color: "#ffffff",
                lineHeight: "1",
                margin: "0",
                padding: "8px 6px",
                height: "100%",
              }}
            >
              {getLevelLabel(course.level)}
            </div>
          </div>
        </div>

        {/* Course Info - Right Side */}
        <div style={{ flex: 1, minWidth: 0 }} className="course-info">
          {/* Popular Badge */}
          {course.isPopular && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: "#FDD741",
                borderRadius: "10px",
                padding: "2px 6px",
                marginBottom: "0.5rem",
              }}
            >
              <Star size={10} style={{ color: "#111827" }} />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Popular
              </span>
            </div>
          )}

          <h3
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "0.3rem",
              lineHeight: "1.3",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="course-card-title"
          >
            {course.title}
          </h3>

          <p
            style={{
              fontSize: "0.75rem",
              color: "#64748b",
              lineHeight: "1.4",
              marginBottom: "0.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            className="course-card-description"
          >
            {course.description}
          </p>

          {/* Duration and Students - Mini Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
            className="course-mini-stats"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <Clock size={10} style={{ color: "#C4A73B" }} />
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#C4A73B",
                  fontWeight: "500",
                }}
              >
                {course.duration}
              </span>
            </div>

            <span
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
              }}
            >
              •
            </span>

            <span
              style={{
                fontSize: "0.65rem",
                color: "#64748b",
                fontWeight: "500",
              }}
            >
              {course.students} siswa
            </span>
          </div>
        </div>
      </div>

      {/* Instructor and Rating */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="course-footer"
      >
        <span
          style={{
            fontSize: "0.75rem",
            color: "#C4A73B",
            fontWeight: "600",
          }}
          className="course-instructor"
        >
          {course.instructor}
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="course-rating"
        >
          <Star size={12} style={{ color: "#FDD741" }} />
          <span
            style={{
              fontSize: "0.75rem",
              color: "#111827",
              fontWeight: "600",
            }}
          >
            {course.rating}
          </span>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .course-card {
            padding: 1rem !important;
          }

          .course-content {
            gap: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }

          .course-thumbnail {
            width: 80px !important;
            height: 64px !important;
            border-radius: 8px !important;
          }

          .course-card-title {
            font-size: 0.85rem !important;
            margin-bottom: 0.25rem !important;
          }

          .course-card-description {
            font-size: 0.7rem !important;
            margin-bottom: 0.4rem !important;
          }

          .course-mini-stats {
            gap: 0.5rem !important;
          }

          .course-instructor {
            font-size: 0.7rem !important;
          }

          .course-rating span {
            font-size: 0.7rem !important;
          }
        }

        @media (max-width: 480px) {
          .course-card {
            padding: 0.75rem !important;
          }

          .course-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.5rem !important;
          }

          .course-thumbnail-container {
            flex-direction: row !important;
            align-items: center !important;
            gap: 0.5rem !important;
          }

          .course-thumbnail {
            width: 60px !important;
            height: 48px !important;
            margin-bottom: 0 !important;
          }

          .course-info {
            text-align: center !important;
          }

          .course-footer {
            flex-direction: column !important;
            gap: 0.5rem !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
};
