export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  categories: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  learners: string[];
  extraLearners: number;
};
