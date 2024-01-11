import hrModel from "../models/hrModel.js";

export const isValidTitle = function (title) {
  return ["Director", "Manager", "Team_leader"].includes(title);
};
export const isvalidName = function (value) {
  if (!/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/.test(value)) return true;
  return false;
};

export const isvalidPhone = function (value) {
  // console.log("value valid phone", value);
  if (!/^[\s]*[6-9]\d{9}[\s]*$/.test(value)) return true;
  return false;
};
export const isvalidEmail = function (value) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
};

export const isvalidAddress = function (value) {
  if (!/^([a-zA-z0-9/\\''(),-\s]{2,200})$/.test(value)) return true;
  return false;
};
export const isValidprofile = function (profile) {
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

export const isValidprofileExperience = function (profileExperience) {
  return ["Fresher", "Experienced"].includes(profileExperience);
};

export const isvalidboolean = function (value) {
  return ["Yes", "No"].includes(value);
};
export const isvalidProbation = function (value) {
  if (!/^[0-6]{1,}(?: [a-z]+){0,7}$/.test(value)) return true;
  return false;
};
export const isvalidPassword = function (value) {
  if (!/^[\s]*[0-9a-zA-Z@#$%^&*]{8,15}[\s]*$/.test(value)) return true;
  return false;
};
export const isvalidCompanyName = function (value) {
  if (!/^([a-zA-Z0-9]|[- ,@\.#&!])*$/.test(value)) return true;
  return false;
};
export const isValidDate = function (value) {
  if (/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(value))
    return true;
  return false;
};
export const isvalidLocation = function (value) {
  if (
    !/^[a-zA-Z0-9]{2,20}(?: [a-zA-Z0-9]+){0,10}(?: [a-zA-z0-9/\\''(),-\s]+){0,20}$/.test(
      value
    )
  )
    return true;
  return false;
};

export const isvalidLanguage = function (value) {
  if (!/^([a-zA-z0-9/\\''(),-\s]{2,200})$/.test(value)) return true;
  return false;
};

export const isvalidStatus = function (value) {
  return ["Selected", "Rejected", "Interview Pending"].includes(value);
};
export const isvalidLiveStatus = function (value) {
  return ["Joined", "Left", "Terminated"].includes(value);
};
export const isvalidcallProcess = function (value) {
  return [
    "Meta/English",
    "PPC/English",
    "Meta/Spanish",
    "PPC/Spanish",
    "bilingual",
    "French",
  ].includes(value);
};
export const isvalidCab = function (value) {
  return ["Yes", "No", "Included", "Depends on route"].includes(value);
};
export const isvalidMeals = function (value) {
  return ["Yes", "No", "Included"].includes(value);
};
export const isvalidGstIn = function (value) {
  if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value))
    return true;
  return false;
};
export const isvalidTypeBpo = function (value) {
  if (!/^[a-zA-Z]{2,}$/.test(value)) return true;
  return false;
};

export const isvalidNumWord = function (value) {
  if (!/^([a-zA-z0-9/\\-\s]{2,20})$/.test(value)) return true;
  return false;
};
export const isvalidInterviewProcess = function (value) {
  return [
    "Face to face",
    "Telephonic",
    "Telephonic and Face to face Both",
  ].includes(value);
};
export const isvalidShiftTime = function (value) {
  if (!/^([a-zA-z0-9/\\'',-\s]{2,50})$/.test(value)) return true;
  return false;
};
export const isvalidSalaryBracket = function (value) {
  if (!/^([a-zA-z0-9/\\'',-\s]{2,150})$/.test(value)) return true;
  return false;
};

export const userValidations = async (data) => {
  let {
    firstName,
    lastName,
    phoneP,
    phoneB,
    email,
    address,
    alias_name,
    doj,
    probation,
    profile,
    profileExperience,
    shift,
    process,
    referredBy,
    salaryBracket,
    password,
  } = data;

  if (Object.keys(data).length == 0) {
    return "for registration user data is required";
  }

  if (!firstName) {
    return "Enter your first Name";
  }
  if (isvalidName(firstName)) {
    return "Please enter a valid  first Name";
  }
  if (!lastName) {
    return "Enter your last Name";
  }

  if (isvalidName(lastName)) {
    return "Please enter a valid last Name";
  }

  if (!alias_name) {
    return "Enter the  username";
  }
  const existAliasName = await hrModel.findOne({ alias_name: alias_name });
  if (existAliasName) {
    return "User with this alias_name is already registered ";
  }
  if (!phoneP || phoneP.trim().length === 0) {
    return "Enter your phone Number. Its mandatory";
  }
  if (isvalidPhone(phoneP)) {
    return "Please Enter valid phone Number For Calling";
  }
  if (!phoneB) {
    return "Enter your phone Number. Its mandatory";
  }
  if (isvalidPhone(phoneB)) {
    return "Please Enter valid phone Number For Work";
  }

  let existphone = await hrModel.findOne({ phoneB: phoneB });
  if (existphone) {
    return "User with this phone number is already registered.";
  }

  if (!email) {
    return "Enter your email .Its mandatory for registration!!!";
  }
  if (isvalidEmail(email)) {
    return "Please Enter valid Email";
  }
  let existEmail = await hrModel.findOne({ email: email });
  if (existEmail) {
    return "User with this email is already registered";
  }
  if (!address) {
    return "Please enter address for registartion";
  }
  if (isvalidAddress(address)) {
    return "please Enter valid Address";
  }
  if (!doj) {
    return "Please enter doj for registartion";
  }

  if (!probation) {
    return "Please enter probation for registartion";
  }

  if (!profile) {
    return "Please enter profile for registartion";
  }
  if (!isValidprofile(profile)) {
    return " profile type doesn't exist";
  }
  if (!profileExperience) {
    return "Please enter profileExperience for registartion";
  }
  if (!isValidprofileExperience(profileExperience)) {
    return " profileExperience must be type of ['Fresher','Experienced']";
  }
  if (!shift) {
    return "Please enter sift for registartion";
  }
  if (!process) {
    return "Please enter process for registartion";
  }
  if (isvalidName(process)) {
    return "Please enter a valid process";
  }
  if (!referredBy) {
    return "Please Enter Refered By name";
  }
  if (isvalidName(referredBy)) {
    return "Please enter a valid name";
  }
  if (!salaryBracket) {
    return "Please enter salaryBracket for registartion";
  }

  if (!password) {
    return "Please enter Password for registartion";
  }

  if (isvalidPassword(password)) {
    return "please Enter valid Password and it's length should be 8-15";
  }
};
