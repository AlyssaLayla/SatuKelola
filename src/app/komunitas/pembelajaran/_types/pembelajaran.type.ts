export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  thumbnail: string;
  isPopular?: boolean;
  level: "beginner" | "intermediate" | "advanced";
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  views: number;
  replies: number;
  timestamp: string;
}

export interface FeaturedCourse {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  thumbnail: string;
}