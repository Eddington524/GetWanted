const JYIP = '10.58.0.212:8000';
const JWIP = '10.58.6.5:8000';
const BJIP = '10.58.7.44:8000';

export const GET_LOGIN_API = `http://${JWIP}`;
export const GET_APPLYLIST_API = `http://${JYIP}/applylist`;
export const GET_JOBLIST_API = `http://${JYIP}/notifications`;

export const EMAIL_API = `http://${JYIP}/users/email`;
export const LOGIN_API = `http://${JYIP}/users/signi`;
export const SIGNUP_API = `http://${JYIP}/users/signu`;
export const STORAGE_FORMS_API = `http://${BJIP}/resumes`;
export const STORAGE_FILES_API = `http://${BJIP}/resumes/files`;
export const STORAGE_LIST_API = `http://${BJIP}/resumes/lists`;
export const RESUME_API = `http://${BJIP}/resumes`;
