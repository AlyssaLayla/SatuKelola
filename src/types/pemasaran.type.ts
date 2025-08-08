export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  title: string;
  description?: string;
  type: 'single' | 'multiple';
  options: Option[];
};