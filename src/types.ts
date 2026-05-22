export interface ProblemItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyItem {
  id: string;
  image: string;
  badge: string;
  industry: string;
  title: string;
  description: string;
  fullCase: {
    problem: string;
    action: string;
    result: string;
    metrics: { label: string; value: string }[];
  };
}

export interface PricingPlanItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
