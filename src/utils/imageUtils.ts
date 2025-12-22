/**
 * Helper function to get the correct image URL based on environment
 * Handles both local paths and full URLs from MongoDB
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '/images/placeholder.jpg'; // Fallback

  // If it's already a full URL (http:// or https://), return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // For local paths starting with /, prepend the base URL
  if (path.startsWith('/')) {
    // In development
    if (process.env.NODE_ENV === 'development') {
      return `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${path}`;
    }
    // In production
    return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://a2zautobodyparts.co.za'}${path}`;
  }

  // For relative paths without leading slash
  return `/${path}`;
};

/**
 * Helper for Next.js Image component src
 */
export const getImageSrc = (path: string): string => {
  const url = getImageUrl(path);

  // If it's an external URL, return as-is (Next.js will handle optimization)
  // If it's a local URL with base, extract just the path for Next.js
  if (url.startsWith('http://localhost:3000')) {
    return url.replace('http://localhost:3000', '');
  }
  if (url.startsWith('https://a2zautobodyparts.co.za')) {
    return url.replace('https://a2zautobodyparts.co.za', '');
  }

  return url;
};
