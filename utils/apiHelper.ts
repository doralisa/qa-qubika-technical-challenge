import axios, { AxiosResponse } from 'axios';
import { getEnvironment } from '../config/environments';
import { generateTestUser, TestUserData } from '../config/testData';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class ApiHelper {
  private baseUrl: string;

  constructor() {
    this.baseUrl = getEnvironment().apiUrl;
  }

  async createUser(): Promise<ApiResponse<TestUserData>> {
    const userData = generateTestUser();
    
    const possibleEndpoints = [
      '/api/users',
      '/api/auth/register',
      '/api/members',
      '/users',
      '/auth/register'
    ];

    for (const endpoint of possibleEndpoints) {
      try {
        const response: AxiosResponse = await axios.post(
          `${this.baseUrl}${endpoint}`,
          userData,
          {
            headers: { 'Content-Type': 'application/json' },
            timeout: 10000
          }
        );

        return {
          success: true,
          data: userData
        };

      } catch (error: any) {
        continue;
      }
    }

    return {
      success: false,
      error: 'Could not create user via any API endpoint'
    };
  }
} 