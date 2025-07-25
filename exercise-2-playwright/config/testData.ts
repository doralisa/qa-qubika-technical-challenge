export interface TestCredentials {
  email: string;
  password: string;
}

export interface TestUserData {
  email: string;
  password: string;
  name: string;
}

// Provided test credentials from challenge
// NOTE: In a real project, these would come from .env file and be excluded from git:
// .env file would contain:
// TEST_EMAIL=test.qubika@qubika.com
// TEST_PASSWORD=12345678
export const TEST_CREDENTIALS: TestCredentials = {
  email: 'test.qubika@qubika.com',
  password: '12345678'
};

// Generate unique test user data
export function generateTestUser(): TestUserData {
  const timestamp = Date.now();
  return {
    email: `test.user.${timestamp}@example.com`,
    password: 'TestPassword123!',
    name: `Test User ${timestamp}`
  };
}

// Test data for categories
export const TEST_CATEGORY_DATA = {
  categoryName: () => `Test Category ${Date.now()}`,
  subcategoryName: () => `Test Subcategory ${Date.now()}`
}; 