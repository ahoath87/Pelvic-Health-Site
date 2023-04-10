import React, { useState, useEffect } from 'react';
import { getAllTheSymptoms } from '../api/symptoms';
import SecondQuiz from './SecondQuiz';

const Quiz = () => {
  const [symptomChoice, setSymptomChoice] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  // const [selected, setSelected] = useState(false);

  useEffect(() => {
    const allSymps = async () => {
      const fetchedSymps = await getAllTheSymptoms();
      // console.log('this is fecthedSymps', fetchedSymps);
      setSymptoms(fetchedSymps);
    };
    allSymps();
  }, []);

  const submitHandler = async (e) => {
    try {
      if (symptomChoice == null) {
        alert('You must make a selection before submitting');
      } else {
        console.log('BOOM BABY', symptomChoice);
        console.log('this is symptomChoice', symptomChoice);
        e.preventDefault();
      }
    } catch (error) {
      console.error(error);
    }
  };

  function onChangeValue(event) {
    setSymptomChoice(event.target.value);
    // setSelected(true);
    // console.log('this is selected', selected);
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
                      id='radio-quizone'
                      value={symptom.id}
                      name={'firstsymptom'}
                      onChange={onChangeValue}
                      // defaultChecked={false}
                    ></input>
                    {symptom.description}
                  </label>
                </div>
              );
            })}
        </div>
        <div>
          <button className='btn-quiz1' type='button' onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
      {symptomChoice === null ? <div>Nothing here</div> : <SecondQuiz />}
    </div>
  );
};

export default Quiz;
