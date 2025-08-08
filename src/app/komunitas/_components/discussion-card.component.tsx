"use client";

import React from "react";
import { ThumbsUp, Eye, MessageCircle, User } from "lucide-react";
import { Discussion } from "../_constants/komunitas.constant";

interface DiscussionCardProps {
  discussion: Discussion;
  isVisible: boolean;
  index: number;
  isLast?: boolean;
}

export const DiscussionCard: React.FC<DiscussionCardProps> = ({
  discussion,
  isVisible,
  index,
  isLast = false,
}) => {
  return (
    <div
      className={`discussion-card transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "2rem",
        marginBottom: isLast ? "0" : "1.5rem",
        border: "1px solid #f1f5f9",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(0, 0, 0, 0.1)";
        e.currentTarget.style.borderColor = "#FDD741";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#f1f5f9";
      }}
    >
      <div
        className="discussion-content"
        style={{
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#20273A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          className="comment-avatar"
        >
          <User size={24} style={{ color: "white" }} />
        </div>

        <div className="discussion-text" style={{ flex: 1, minWidth: 0 }}>
          <div
            className="author-meta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              className="author-name"
              style={{
                fontSize: "0.95rem",
                fontWeight: "500",
                color: "#111827",
              }}
            >
              {discussion.author}
            </span>
            <span
              className="separator"
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              •
            </span>
            <span
              className="published-text"
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
              }}
            >
              Published in
            </span>
            <span
              className="category-name"
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#C4A73B",
              }}
            >
              {discussion.category}
            </span>
          </div>

          <h3
            className="discussion-title"
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "1rem",
              lineHeight: "1.4",
              letterSpacing: "-0.01em",
            }}
          >
            {discussion.title}
          </h3>

          <p
            className="discussion-preview"
            style={{
              fontSize: "0.95rem",
              color: "#64748b",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {discussion.content}
          </p>

          <div
            className="engagement-stats"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              className="stat-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ThumbsUp size={16} style={{ color: "#64748b" }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  fontWeight: "500",
                }}
              >
                {discussion.likes}
              </span>
            </div>

            <div
              className="stat-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Eye size={16} style={{ color: "#64748b" }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  fontWeight: "500",
                }}
              >
                {discussion.views}
              </span>
            </div>

            <div
              className="stat-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <MessageCircle size={16} style={{ color: "#64748b" }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  fontWeight: "500",
                }}
              >
                {discussion.comments}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .discussion-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Large tablets and small desktops */
        @media (max-width: 1024px) {
          .discussion-card {
            padding: 1.75rem !important;
          }

          .discussion-title {
            font-size: 1.15rem !important;
          }

          .discussion-preview {
            font-size: 0.9rem !important;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .discussion-card {
            padding: 1.5rem !important;
            margin-bottom: ${isLast ? "0" : "1.25rem"} !important;
          }

          .discussion-content {
            gap: 1.25rem !important;
          }

          .avatar-container {
            width: 44px !important;
            height: 44px !important;
          }

          .avatar-container svg {
            width: 22px !important;
            height: 22px !important;
          }

          .discussion-title {
            font-size: 1.1rem !important;
            margin-bottom: 0.75rem !important;
          }

          .discussion-preview {
            font-size: 0.9rem !important;
            margin-bottom: 1.25rem !important;
          }

          .author-meta {
            margin-bottom: 0.75rem !important;
            gap: 0.5rem !important;
          }

          .author-name,
          .category-name {
            font-size: 0.9rem !important;
          }

          .published-text,
          .separator {
            font-size: 0.825rem !important;
          }

          .engagement-stats {
            gap: 1.5rem !important;
          }
        }

        /* Small tablets and large phones */
        @media (max-width: 640px) {
          .discussion-card {
            padding: 1.25rem !important;
          }

          .discussion-content {
            gap: 1rem !important;
          }

          .avatar-container {
            width: 40px !important;
            height: 40px !important;
          }

          .avatar-container svg {
            width: 20px !important;
            height: 20px !important;
          }

          .author-meta {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.25rem !important;
          }

          /* Hide separators and "Published in" text on mobile */
          .separator,
          .published-text {
            display: none !important;
          }

          /* Make author info more compact */
          .author-meta {
            margin-bottom: 0.5rem !important;
          }

          .discussion-title {
            font-size: 1rem !important;
            margin-bottom: 0.5rem !important;
            line-height: 1.3 !important;
          }

          .discussion-preview {
            font-size: 0.85rem !important;
            margin-bottom: 1rem !important;
            -webkit-line-clamp: 3 !important;
          }

          .engagement-stats {
            gap: 1.25rem !important;
          }

          .stat-item span {
            font-size: 0.8rem !important;
          }

          .stat-item svg {
            width: 14px !important;
            height: 14px !important;
          }
        }

        /* Mobile phones */
        @media (max-width: 480px) {
          .discussion-card {
            padding: 1rem !important;
            border-radius: 16px !important;
          }

          .discussion-content {
            gap: 0.875rem !important;
          }

          .avatar-container {
            width: 36px !important;
            height: 36px !important;
          }

          .avatar-container svg {
            width: 18px !important;
            height: 18px !important;
          }

          .discussion-title {
            font-size: 0.95rem !important;
            margin-bottom: 0.5rem !important;
          }

          .discussion-preview {
            font-size: 0.8rem !important;
            margin-bottom: 0.875rem !important;
            line-height: 1.5 !important;
          }

          .engagement-stats {
            gap: 1rem !important;
          }

          .stat-item {
            gap: 0.375rem !important;
          }

          .stat-item span {
            font-size: 0.75rem !important;
          }

          .author-name {
            font-size: 0.85rem !important;
          }

          .category-name {
            font-size: 0.8rem !important;
            padding: 0.125rem 0.375rem !important;
            background: #fef3cd !important;
            border-radius: 6px !important;
          }
        }

        /* Very small phones */
        @media (max-width: 380px) {
          .discussion-card {
            padding: 0.875rem !important;
          }

          .discussion-title {
            font-size: 0.9rem !important;
          }

          .discussion-preview {
            font-size: 0.75rem !important;
          }

          .engagement-stats {
            gap: 0.75rem !important;
          }

          .stat-item span {
            font-size: 0.7rem !important;
          }

          .avatar-container {
            width: 32px !important;
            height: 32px !important;
          }

          .avatar-container svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DiscussionCard;
