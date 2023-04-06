const API_URL = 'http://localhost:8080/api';

export const getAllTheSymptoms = async () => {
  try {
    const response = await fetch(`${API_URL}/symptoms`);
    const results = await response.json();
    console.log('these are getallsymtposm results', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
