const isValidTitle = function (title) {
  return ["Director", "Manager"].includes(title);
};
const isvalidName = function (value) {
  if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(value)) return true;
  return false;
};

const isvalidPhone = function (value) {
  if (!/^[\s]*[6-9]\d{9}[\s]*$/.test(value)) return true;
  return false;
};
const isvalidEmail = function (value) {
  if (!/^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/.test(value)) return true;
  return false;
};

const isvalidAddress = function (value) {
  if (!/^([a-zA-z0-9/\\''(),-\s]{2,200})$/.test(value)) return true;
  return false;
};
const isValidprofile = function (profile) {
  return [
    "Hr recruiter",
    "Coach",
    "Team Leader",
    "Team manager",
    "Buisness head",
    "Business Development manager",
    "Business development executive",
    "AccountExecutive",
    "MIS executive",
  ].includes(profile);
};

const isValidprofileExperience = function (profileExperience) {
  return ["Fresher", "Experienced"].includes(profileExperience);
};

const isvalidboolean = function (value) {
  return ["Yes", "No"].includes(value);
};
const isvalidProbation = function (value) {
  if (!/^[0-6]{1,}(?: [a-z]+){0,7}$/.test(value)) return true;
  return false;
};
const isvalidPassword = function (value) {
  if (!/^[\s]*[0-9a-zA-Z@#$%^&*]{8,15}[\s]*$/.test(value)) return true;
  return false;
};
const isvalidCompanyName = function (value) {
  if (!/^([a-zA-Z0-9]|[- ,@\.#&!])*$/.test(value)) return true;
  return false;
};
const isValidDate = function (value) {
  if (/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(value))
    return true;
  return false;
};
const isvalidLocation = function (value) {
  if (
    !/^[a-zA-Z0-9]{2,20}(?: [a-zA-Z0-9]+){0,10}(?: [a-zA-z0-9/\\''(),-\s]+){0,20}$/.test(
      value
    )
  )
    return true;
  return false;
};

const isvalidLanguage = function (value) {
  if (!/^([a-zA-z0-9/\\''(),-\s]{2,200})$/.test(value)) return true;
  return false;
};

const isvalidStatus = function (value) {
  return ["Selected", "Rejected", "Interview Pending"].includes(value);
};
const isvalidLiveStatus = function (value) {
  return ["Joined", "Left", "Terminated"].includes(value);
};
const isvalidcallProcess = function (value) {
  return [
    "Meta/English",
    "PPC/English",
    "Meta/Spanish",
    "PPC/Spanish",
    "bilingual",
    "French",
  ].includes(value);
};
const isvalidCab = function (value) {
  return ["Yes", "No", "Included", "Depends on route"].includes(value);
};
const isvalidMeals = function (value) {
  return ["Yes", "No", "Included"].includes(value);
};
const isvalidGstIn = function (value) {
  if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value))
    return true;
  return false;
};
const isvalidTypeBpo = function (value) {
  if (!/^[a-zA-Z]{2,}$/.test(value)) return true;
  return false;
};

const isvalidNumWord = function (value) {
  if (!/^([a-zA-z0-9/\\-\s]{2,20})$/.test(value)) return true;
  return false;
};
const isvalidInterviewProcess = function (value) {
  return [
    "Face to face",
    "Telephonic",
    "Telephonic and Face to face Both",
  ].includes(value);
};
const isvalidShiftTime = function (value) {
  if (!/^([a-zA-z0-9/\\'',-\s]{2,50})$/.test(value)) return true;
  return false;
};
const isvalidSalaryBracket = function (value) {
  if (!/^([a-zA-z0-9/\\'',-\s]{2,150})$/.test(value)) return true;
  return false;
};

export {
  isvalidGstIn,
  isValidTitle,
  isvalidLiveStatus,
  isValidprofile,
  isValidDate,
  isvalidName,
  isvalidPhone,
  isvalidEmail,
  isvalidAddress,
  isvalidProbation,
  isvalidPassword,
  isValidprofileExperience,
  isvalidCompanyName,
  isvalidboolean,
  isvalidLocation,
  isvalidLanguage,
  isvalidStatus,
  isvalidTypeBpo,
  isvalidNumWord,
  isvalidcallProcess,
  isvalidCab,
  isvalidMeals,
  isvalidInterviewProcess,
  isvalidShiftTime,
  isvalidSalaryBracket,
};
