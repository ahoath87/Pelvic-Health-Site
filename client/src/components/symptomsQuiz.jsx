// import React, { Component } from 'react';

// class SymptomsQuiz extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'QuizSymp1',
//     };
//     this.onValueChange = this.onValueChange.bind(this);
//     this.formSubmit = this.formSubmit.bind(this);
//   }

//   onValueChange(event) {
//     this.setState({
//       selectedOption: event.target.value,
//     });
//   }

//   formSubmit(event) {
//     event.preventDefault();
//     // console.log('QHATIS IT', this.props.symptoms);

//     console.log(this.state.selectedOption);
//   }

//   render() {
//     return (
//       <form onSubmit={this.formSubmit}>
//         <div className='radio'>
//           {this.props.symptoms.symptoms &&
//             this.props.symptoms.symptoms.map((symptom) => {
//               return (
//                 <div key={symptom.id}>
//                   <label>
//                     {' '}
//                     <input
//                       type='radio'
//                       value={symptom.description}
//                       checked={
//                         this.state.selectedOption === symptom.description
//                       }
//                       onChange={this.onValueChange}
//                     ></input>
//                     {symptom.description}
//                   </label>
//                 </div>
//               );
//             })}
//         </div>
//         <div>Selected option is : {this.state.selectedOption}</div>
//         <button className='btn btn-default' type='submit'>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default SymptomsQuiz;

// currently I am selecting a single choice
// I want then to show every symptom option that is within a diagnosis that includes the selected symptom
// From those select one other
// if they are from the same diagnosis return that diagnosis and tx options
// else give all potential dx based on the two selected symptoms
// read snippets of them then choose which is more like them
