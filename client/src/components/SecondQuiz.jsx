import React, { useState, useEffect } from 'react';
import { getAllTheDiagsBySymptomsId } from '../api/diagnosis';
import { getTheSymptomDescByItsId } from '../api/symptoms';

const SecondQuiz = ({ sentChoice }) => {
  const [diagnosis, setDiagnosis] = useState([]);
  const [symptomsDesc, setSymptomsDesc] = useState([]);
  const [sympList, setSympList] = useState([]);
  console.log('this is symptom choice in second quiz', sentChoice);

  useEffect(() => {
    const allDiagIds = async () => {
      const fetchedDiagnosisIds = await getAllTheDiagsBySymptomsId(sentChoice);
      console.log('this is fetched diagnosis Ids', fetchedDiagnosisIds);
      setDiagnosis(fetchedDiagnosisIds.diagIds);
      console.log('MONEYBABY', fetchedDiagnosisIds.diagIds);
      let gatheredSymptomIds = fetchedDiagnosisIds.diagIds.map(
        (singleFetched) => {
          console.log('AREWETHREE', singleFetched.symptoms);

          let deeperSymptoms = singleFetched.symptoms.map(
            async (evenDeeper) => {
              // const newArray = [];
              // newArray.push(
              //   getTheSymptomDescByItsId(evenDeeper.symptomsAndSignsId)
              // );

              // return newArray;
              console.log('CRAYEST', evenDeeper);
              setSympList([evenDeeper]);
            }
          );
          console.log('CRAY', sympList);
        }
      );
      console.log('CRAY CRAY', gatheredSymptomIds);
      setSymptomsDesc(gatheredSymptomIds);
      console.log('this si symptomsDesc', symptomsDesc);
    };
    allDiagIds();
  }, []);

  console.log('this is diagnosis', diagnosis);

  return (
    <div className='secondQuiz-container'>
      <div className='secondQuiz-choices'>
        {diagnosis &&
          diagnosis.map((singleDiagnosis) => {
            return (
              <div key={singleDiagnosis.id} className='sec-quiz-small'>
                <p>Diag Option: {singleDiagnosis.id}</p>
                {singleDiagnosis.symptoms.map((symptom) => {
                  return (
                    <div key={symptom.id} className='secondQuiz-symptoms'>
                      <p> Choice: {symptom.symptomsAndSignsId}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SecondQuiz;
