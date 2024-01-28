import { Person } from './definitions';

export async function getPerson(id: string) {
  try {
    const person = {
      id: id,
      name: 'João',
    };
    return person as Person;
  } catch (error) {
    console.error('Could not find such user. Try again.', error);
    throw new Error('Could not find such user.');
  }
}
