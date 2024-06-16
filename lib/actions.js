'use server';

import { supabase } from './supabase';

export async function getMainImages() {
  // const { data, error } = await supabase.storage.getBucket('main-images');
  // main-images

  const { data, error } = await supabase.storage.from('main-images').list('', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  });

  if (error) {
    console.error(error);
    throw new Error('Main-Images could not be loaded');
  }
  return data;
}
