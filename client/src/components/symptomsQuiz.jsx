// import React, { Component } from 'react';
// import { RadioGroup, Radio } from '../index.jsx';

// const Quiz = () => {
//   const [symptomChoice, setSymptomChoice] = useState('');
//   const [symptoms, setSymptoms] = useState([]);

//   // console.log('symptoms in QUIZ', symptoms);

//   useEffect(() => {
//     const allSymps = async () => {
//       const fetchedSymps = await getAllTheSymptoms();
//       // console.log('this is fecthedSymps', fetchedSymps);
//       setSymptoms(fetchedSymps);
//     };
//     allSymps();
//   }, []);

//   // const submitHandler = async (e) => {
//   //   try {
//   //     e.prevenDefault();
//   //     console.log('gotcha symptom buddy');

//   //     console.log('BOOM BABY', symptomChoice);
//   //   } catch (error) {
//   //     console.errer(error);
//   //   }
//   // };

//   function onChangeValue(event) {
//     setSymptomChoice(event.target.value);
//     console.log('this is symptomChoice', symptomChoice);
//   }
//   return (
//     <RadioGroup
//   );
// };

// export default Quiz;
