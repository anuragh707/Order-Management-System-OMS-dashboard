import axios from 'axios';
import {
  mockOrderSummary,
  mockOrderDetails,
  mockOrderItems,
  mockCustomerDetails,
  mockTimelineEvents
} from '../data/mockData';

// Create a configured Axios instance
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// Intercept requests and return mock responses to simulate real API integration
api.interceptors.request.use(async (config) => {
  // Simulate network latency (200ms - 500ms)
  await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 200));

  const url = config.url || '';
  
  // Normalize double slashes or remove base prefix if present
  const route = url.replace(/^\/api/, '');
  
  // Match patterns for GET /orders/:id
  const orderIdPattern = /^\/orders\/([^/]+)$/;
  const detailsPattern = /^\/orders\/([^/]+)\/details$/;
  const itemsPattern = /^\/orders\/([^/]+)\/items$/;
  const customerPattern = /^\/orders\/([^/]+)\/customer$/;
  const timelinePattern = /^\/orders\/([^/]+)\/timeline$/;

  let mockData = null;

  if (timelinePattern.test(route)) {
    mockData = mockTimelineEvents;
  } else if (customerPattern.test(route)) {
    mockData = mockCustomerDetails;
  } else if (itemsPattern.test(route)) {
    mockData = mockOrderItems;
  } else if (detailsPattern.test(route)) {
    mockData = mockOrderDetails;
  } else if (orderIdPattern.test(route)) {
    mockData = mockOrderSummary;
  }

  if (mockData) {
    // Return a custom rejection with the mock data to bypass the actual network request
    return Promise.reject({
      config,
      response: {
        data: mockData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      },
      __isMock: true
    });
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle our custom mock rejection and return it as resolved
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.__isMock) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

export default api;
export {
  mockOrderSummary,
  mockOrderDetails,
  mockOrderItems,
  mockCustomerDetails,
  mockTimelineEvents
};
