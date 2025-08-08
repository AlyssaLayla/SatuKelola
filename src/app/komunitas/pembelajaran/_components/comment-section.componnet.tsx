'use client';

import React from "react";
import { Comment } from '../_types/pembelajaran.type';
import { CommentCard } from "./comment-card.component";

interface CommentsSectionProps {
  comments: Comment[];
  visibleComments: number[];
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  visibleComments,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        padding: "0 2rem",
      }}
      className="comments-section"
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "600",
          color: "#111827",
          marginBottom: "2rem",
          letterSpacing: "-0.02em",
        }}
        className="comments-title"
      >
        Komentar
      </h2>

      <div style={{ marginBottom: "2rem" }}>
        {comments.map((comment, index) => {
          const isVisible = visibleComments.includes(index);

          return (
            <CommentCard
              key={comment.id}
              comment={comment}
              index={index}
              isVisible={isVisible}
            />
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .comments-section {
            padding: 0 1.5rem !important;
          }

          .comments-title {
            font-size: 1.5rem !important;
            margin-bottom: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .comments-section {
            padding: 0 1rem !important;
          }

          .comments-title {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};