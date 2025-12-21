// @/global.variables.ts

// Environment detection
export const Environment = (process.env.NEXT_PUBLIC_ENVIRONMENT as 'development' | 'production') || 'development';

// API URLs - corrected environment variable names
export const serverDevUrl = process.env.NEXT_PUBLIC_SERVER_DEV_URL || 'http://localhost:5000/api/v1';
export const serverProdUrl = process.env.NEXT_PUBLIC_SERVER_PROD_URL || 'https://api.a2zautobodyparts.co.za/api/v1';

// API Key - ensure it's a string
export const SERVER_API_ACCESS_KEY = process.env.NEXT_PUBLIC_SERVER_API_ACCESS_KEY || '';

// Validation (for development only)
if (Environment === 'development' && !SERVER_API_ACCESS_KEY) {
  console.warn('⚠️  WARNING: SERVER_API_ACCESS_KEY is not set in development environment');
  console.warn('   API calls may fail. Set it in your .env.local file.');
}