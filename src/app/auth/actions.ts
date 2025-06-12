'use server';


export async function loginUser() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
    const data = await response.json();
    
    if (data.results && data.results[0]) {
      return data.results[0];
    }
    throw new Error('Failed to fetch user data');
  } catch  {
    throw new Error('Failed to login');
  }
} 