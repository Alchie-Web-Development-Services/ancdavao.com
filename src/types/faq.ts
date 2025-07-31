export interface Faqs {
  [category: string]: Faq[];
}

export interface Faq {
  question: string;
  answer: string;
}
