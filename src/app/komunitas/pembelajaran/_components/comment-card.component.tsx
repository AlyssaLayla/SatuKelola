"use client";

import { Eye, MessageCircle, ThumbsUp, User } from "lucide-react";
import React from "react";
import { Comment } from "../_types/pembelajaran.type";

interface CommentCardProps {
  comment: Comment;
  index: number;
  isVisible: boolean;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  index,
  isVisible,
}) => {
  return (
    <div
      key={comment.id}
      className={`comment-card transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        padding: "1.5rem",
        marginBottom: "1rem",
        border: "1px solid #e5e7eb",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.1}s`,
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
        }}
        className="comment-content"
      >
        {/* Avatar */}
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
          <User size={20} style={{ color: "white" }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Author and Timestamp */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
            className="comment-header"
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "#111827",
              }}
              className="comment-author"
            >
              {comment.author}
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#6b7280",
              }}
            >
              •
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#6b7280",
              }}
              className="comment-timestamp"
            >
              {comment.timestamp}
            </span>
          </div>

          {/* Comment Content */}
          <p
            style={{
              fontSize: "0.9rem",
              color: "#374151",
              lineHeight: "1.5",
              marginBottom: "0.75rem",
              margin: "0 0 0.75rem 0",
            }}
            className="comment-text"
          >
            {comment.content}
          </p>

          {/* Engagement Stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
            className="comment-stats"
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
                borderRadius: "20px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ThumbsUp size={14} style={{ color: "#6b7280" }} />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  fontWeight: "400",
                }}
              >
                {comment.likes}
              </span>
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0.5rem",
                borderRadius: "10px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <MessageCircle size={14} style={{ color: "#6b7280" }} />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  fontWeight: "400",
                }}
              >
                {comment.replies}
              </span>
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              <Eye size={14} style={{ color: "#6b7280" }} />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  fontWeight: "400",
                }}
              >
                {comment.views}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .comment-card {
            padding: 1rem !important;
            margin-bottom: 0.75rem !important;
          }

          .comment-content {
            gap: 0.5rem !important;
          }

          .comment-avatar {
            width: 32px !important;
            height: 32px !important;
          }

          .comment-author {
            font-size: 0.85rem !important;
          }

          .comment-timestamp {
            font-size: 0.75rem !important;
          }

          .comment-text {
            font-size: 0.85rem !important;
            margin-bottom: 0.5rem !important;
          }

          .comment-stats {
            gap: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .comment-card {
            padding: 0.75rem !important;
          }

          .comment-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.25rem !important;
            margin-bottom: 0.75rem !important;
          }

          .comment-stats {
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};
