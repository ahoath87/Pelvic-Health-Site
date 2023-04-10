const API_URL = 'http://localhost:8080/api';

export const getAllTheDiagnosisIdsBySymptomId = async (id) => {
  console.log('this is SYMPTOM the id', id);
  try {
    const response = await fetch(`${API_URL}/symptoms/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const results = await response.json();
    console.log('this is results in get all the diagnosisIDs', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
