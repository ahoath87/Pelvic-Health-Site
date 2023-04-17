import React, { useState, useEffect } from 'react';
import { getAllTheDiagsBySymptomsId } from '../api/diagnosis';

const SecondQuiz = ({ sentChoice }) => {
  const [diagnosis, setDiagnosis] = useState([]);
  console.log('this is symptom choice in second quiz', sentChoice);

  useEffect(() => {
    const allDiagIds = async () => {
      const fetchedDiagnosisIds = await getAllTheDiagsBySymptomsId(sentChoice);
      console.log('this is fetched diagnosis Ids', fetchedDiagnosisIds);
      setDiagnosis(fetchedDiagnosisIds);
    };
    allDiagIds();
  }, []);

  console.log('this is diagnosis', diagnosis);

  return <div>This will be second quiz</div>;
};

export default SecondQuiz;
