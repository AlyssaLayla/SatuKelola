'use client';

import { BookOpen, Pause, Play, Star, Users } from "lucide-react";
import React from "react";
import { FeaturedCourse } from '../_types/pembelajaran.type';

interface FeaturedVideoSectionProps {
  course: FeaturedCourse;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const FeaturedVideoSection: React.FC<FeaturedVideoSectionProps> = ({
  course,
  isPlaying,
  onPlayPause,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        marginBottom: "40px",
        overflow: "hidden",
      }}
    >
      {/* Video Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          background: "linear-gradient(135deg, #FEF2C0, #FDD741)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24px",
          border: "2px solid #FDD741",
        }}
        className="featured-video-container"
      >
        {/* Video Placeholder */}
        <img
          src={course.thumbnail}
          alt="Featured Course Thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "24px",
          }}
        />

        {/* Play/Pause Button Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
          }}
          className="play-button"
          onClick={onPlayPause}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translate(-50%, -50%) scale(1.1)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translate(-50%, -50%) scale(1)";
            e.currentTarget.style.background =
              "rgba(255, 255, 255, 0.9)";
          }}
        >
          {isPlaying ? (
            <Pause size={32} style={{ color: "#111827" }} />
          ) : (
            <Play
              size={32}
              style={{ color: "#111827", marginLeft: "4px" }}
            />
          )}
        </div>

        {/* Course Stats Overlay */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            gap: "12px",
          }}
          className="stats-overlay"
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "20px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Users size={16} style={{ color: "#ffffff" }} />
            <span
              style={{
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              {course.students.toLocaleString()}
            </span>
          </div>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.7)",
              borderRadius: "20px",
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Star size={16} style={{ color: "#FDD741" }} />
            <span
              style={{
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              {course.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div style={{ padding: "2rem 2rem 0 2rem" }} className="course-info">
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#111827",
            marginBottom: "1rem",
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
          }}
          className="course-title"
        >
          {course.title}
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#64748b",
            lineHeight: "1.7",
            marginBottom: "2rem",
          }}
          className="course-description"
        >
          {course.description}
        </p>

        {/* Instructor Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
          className="instructor-info"
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#FEE480",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookOpen size={24} style={{ color: "#111827" }} />
          </div>
          <div>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              {course.instructor}
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
                margin: 0,
              }}
            >
              {course.duration}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .featured-video-container {
            height: 300px !important;
            border-radius: 16px !important;
          }
          
          .featured-video-container img {
            border-radius: 16px !important;
          }

          .play-button {
            width: 60px !important;
            height: 60px !important;
          }

          .stats-overlay {
            top: 10px !important;
            right: 10px !important;
            gap: 8px !important;
          }

          .stats-overlay div {
            padding: 6px 12px !important;
          }

          .course-info {
            padding: 1.5rem !important;
          }

          .course-title {
            font-size: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }

          .course-description {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .instructor-info {
            gap: 0.75rem !important;
            margin-bottom: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .featured-video-container {
            height: 250px !important;
            border-radius: 12px !important;
          }

          .featured-video-container img {
            border-radius: 12px !important;
          }

          .play-button {
            width: 50px !important;
            height: 50px !important;
          }

          .course-info {
            padding: 1rem !important;
          }

          .course-title {
            font-size: 1.25rem !important;
          }

          .course-description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};