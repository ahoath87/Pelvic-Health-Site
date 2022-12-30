const diagnosis = [
  { name: "Symphisis Pubis Dysfunction", phase: "pregnancy" },
  { name: "Urinary Frequency", phase: "both" },
  { name: "Stress Urinary Incontinence", phase: "both" },
  { name: "Pelvic Organ Prolapse", phase: "both" },
];

const symptomsAndSigns = [
  { description: "groin pain" },
  { description: "urinating too frequently" },
  { description: "urinating with coughing, sneezing, jumping" },
  { description: "heaviness/fullness in vaginal region" },
  { description: "pain with putting shoes on" },
  { description: "sharp lower abdominal pain" },
  { description: "difficulty emptying bladder" },
  { description: "difficulty making it to the bathroom" },
  { description: "pain going up steps" },
  { description: "obstruction to inserting tampon" },
  { description: "low back pain" },
  { description: "waking up multiple times in the night to urinate" },
  { description: "difficulty holding back gas" },
  { description: "pelvic pain" },
];

const diagnosisSymptoms = [
  { diagnosisId: 1, symptomsAndSignsId: 1 },
  { diagnosisId: 1, symptomsAndSignsId: 5 },
  { diagnosisId: 1, symptomsAndSignsId: 6 },
  { diagnosisId: 1, symptomsAndSignsId: 9 },
  { diagnosisId: 1, symptomsAndSignsId: 11 },
  { diagnosisId: 1, symptomsAndSignsId: 14 },
  { diagnosisId: 2, symptomsAndSignsId: 2 },
  { diagnosisId: 2, symptomsAndSignsId: 7 },
  { diagnosisId: 2, symptomsAndSignsId: 8 },
  { diagnosisId: 2, symptomsAndSignsId: 12 },
  { diagnosisId: 2, symptomsAndSignsId: 14 },
  { diagnosisId: 3, symptomsAndSignsId: 3 },
  { diagnosisId: 3, symptomsAndSignsId: 8 },
  { diagnosisId: 3, symptomsAndSignsId: 13 },
  { diagnosisId: 4, symptomsAndSignsId: 4 },
  { diagnosisId: 4, symptomsAndSignsId: 7 },
  { diagnosisId: 4, symptomsAndSignsId: 10 },
  { diagnosisId: 4, symptomsAndSignsId: 14 },
];

const treatments = [
  { name: "diaphragmatic breathing", instruction: "do this" },
  { name: "pelvic floor strengthening", instruction: "do this" },
  { name: "adductor strengthening", instruction: "do this" },
  { name: "core recruitment", instruction: "do this" },
  { name: "pelvic floor relaxation", instruction: "do this" },
  { name: "toileting technique training", instruction: "do this" },
];

const diagnosisTreatments = [
  { diagnosisId: 1, treatmentId: 2 },
  { diagnosisId: 1, treatmentId: 3 },
  { diagnosisId: 1, treatmentId: 4 },
  { diagnosisId: 2, treatmentId: 1 },
  { diagnosisId: 2, treatmentId: 5 },
  { diagnosisId: 2, treatmentId: 6 },
  { diagnosisId: 3, treatmentId: 2 },
  { diagnosisId: 3, treatmentId: 3 },
  { diagnosisId: 3, treatmentId: 4 },
  { diagnosisId: 4, treatmentId: 1 },
  { diagnosisId: 4, treatmentId: 2 },
  { diagnosisId: 4, treatmentId: 3 },
  { diagnosisId: 4, treatmentId: 4 },
  { diagnosisId: 4, treatmentId: 6 },
];

module.exports = {
  diagnosis,
  symptomsAndSigns,
  diagnosisSymptoms,
  treatments,
  diagnosisTreatments,
};
