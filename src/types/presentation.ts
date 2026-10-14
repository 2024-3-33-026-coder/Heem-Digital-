export type SlideCategory = 
  | 'overview'
  | 'design'
  | 'customer-portal'
  | 'admin-portal'
  | 'architecture'
  | 'integrations'
  | 'governance'
  | 'roadmap';

export interface SlideData {
  id: number;
  numberStr: string;
  category: SlideCategory;
  categoryLabel: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  summary: string;
  speakerNotes: string;
  interactiveComponent?: string;
  tags: string[];
}

export interface ClientChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  status: 'required' | 'awaiting-confirmation' | 'optional';
  impact: 'High' | 'Medium' | 'Critical';
  clientContactRole: string;
  actionRequired: string;
}

export interface RoadmapPhase {
  phaseNumber: number;
  title: string;
  objective: string;
  durationEstimate: string;
  keyActivities: string[];
  deliverables: string[];
  approvalMilestone: string;
  dependencies: string[];
}
