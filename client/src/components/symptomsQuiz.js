import React from 'react';

const SymptomsQuiz = () => {
  return (
    <div>
      QUIZ
      <input type='radio' value='groin pain' name='symptom' /> Groin Pain
      <input type='radio' value='urgeUI' name='symptom' /> Urinating too
      frequently
      <input type='radio' value='stressUI' name='symptom' /> Urinating with
      Coughing, Sneezing, or Jumping
      <input type='radio' value='heaviness' name='symptom' /> Heaviness/fullness
      in vaginal region
      <input type='radio' value='obstruction' name='symptom' /> Vaginal
      obstruction
      <input type='radio' value='night urination' name='symptom' /> Waking up
      frequently to urinate at night
      <input type='radio' value='low back pain' name='symptom' /> Low back Pain
      <input type='radio' value='Pelvic Pain' name='symptom' /> Pelvic Pain
      <input type='radio' value='abdominal pain' name='symptom' /> Sharp lower
      abdominal pain
      <input
        type='radio'
        value='pain with putting shoes on'
        name='symptom'
      />{' '}
      Pain with putting shoes on
      <input
        type='radio'
        value='difficulty emptying bladder'
        name='symptom'
      />{' '}
      Difficulty emptying bladder
      <input type='radio' value='leaking' name='symptom' /> Difficulty making it
      to the bathroom
      <input type='radio' value='pain going up steps' name='symptom' /> Pain
      going up the steps
    </div>
  );
};

export default SymptomsQuiz;
