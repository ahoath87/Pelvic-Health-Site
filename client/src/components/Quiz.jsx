import React, { useState, useEffect } from 'react';
import { getAllTheSymptoms } from '../api/symptoms';

const Quiz = () => {
  const [symptomChoice, setSymptomChoice] = useState('');
  const [symptoms, setSymptoms] = useState([]);

  // console.log('symptoms in QUIZ', symptoms);

  useEffect(() => {
    const allSymps = async () => {
      const fetchedSymps = await getAllTheSymptoms();
      // console.log('this is fecthedSymps', fetchedSymps);
      setSymptoms(fetchedSymps);
    };
    allSymps();
  }, []);

  // const submitHandler = async (e) => {
  //   try {
  //     e.prevenDefault();
  //     console.log('gotcha symptom buddy');

  //     console.log('BOOM BABY', symptomChoice);
  //   } catch (error) {
  //     console.errer(error);
  //   }
  // };

  function onChangeValue(event) {
    setSymptomChoice(event.target.value);
    console.log('this is symptomChoice', symptomChoice);
  }
  return (
    <div>
      <form>
        <div className='radio'>
          {symptoms &&
            symptoms.map((symptom) => {
              return (
                <div key={symptom.id}>
                  <label>
                    {' '}
                    <input
                      type='radio'
                      value={symptom.id}
                      name={'firstsymptom'}
                      checked={symptom.name}
                      onChange={onChangeValue}
                    ></input>
                    {symptom.description}
                  </label>
                </div>
              );
            })}
        </div>
        {/* <div>
          <button className='btn-quiz1' type='submit' onClick={submitHandler}>
            Submit
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Quiz;
