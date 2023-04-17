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

export const getTheSymptomDescByItsId = async (id) => {
  console.log('this is id in getTheDESC', id);
  try {
    const response = await fetch(`${API_URL}/symptoms/${id}/description`);
    const results = await response.json();
    console.log('these are getSYMPT DESC by ids', results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
