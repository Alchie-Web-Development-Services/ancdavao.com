import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'tuggecli',
  dataset: 'production',
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to specify API version
  useCdn: true, // `false` if you want to ensure fresh data
});
