export interface LegalStep {
  id: number;
  title: string;
  description: string;
  estimatedTime: string;
  cost: string;
  category: 'registration' | 'licensing' | 'tax' | 'legal' | 'insurance' | 'reporting';
  icon: React.ReactNode;
  requirements: string[];
  isOnline: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface StepProgress {
  stepId: number;
  isCompleted: boolean;
  completedAt?: string;
  notes?: string;
}