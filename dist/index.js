import thaiXUnicool from "./thaix-unicool_lib.js";
import schoolData from './src/unicool-school.json' with { type: "json" };
import universityData from './src/unicool-university.json' with { type: "json" };
const School = new thaiXUnicool(schoolData);
const University = new thaiXUnicool(universityData);
const getSchool = () => {
    return School.getAll();
};
const getSchoolAndFilter = (filter) => {
    return School.getAll().filter(filter).all();
};
const getSchoolAndFind = (find) => {
    return School.getAll().find(find).all();
};
const getUniversity = () => {
    return University.getAll();
};
const getUniversityFilter = (filter) => {
    return University.getAll().filter(filter).all();
};
const getUniversityFind = (find) => {
    return University.getAll().find(find).all();
};
export { getSchool, getSchoolAndFilter, getSchoolAndFind, getUniversity, getUniversityFilter, getUniversityFind };
