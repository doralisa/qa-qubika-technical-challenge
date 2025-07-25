export interface Environment {
  name: string;
  webUrl: string;
  apiUrl: string;
}

export const environments: Record<string, Environment> = {
  qa: {
    name: 'QA',
    webUrl: 'https://club-administration.qa.qubika.com/#/auth/login',
    apiUrl: 'https://api.club-administration.qa.qubika.com'
  },
  // Future environments can be added here
  // staging: { ... },
  // prod: { ... }
};

export function getEnvironment(): Environment {
  // For this challenge, we'll use QA environment
  // In a real project, this could read from process.env or config files
  return environments.qa;
} 