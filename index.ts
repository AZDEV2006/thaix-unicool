import thaiXUnicool from "./thaix-unicool_lib.js";
import type { SchoolDataTypes } from "./types/schoolDataTypes.ts";
import schoolData from './src/unicool-school.json' with { type: "json" };
import type { UniversityDataTypes } from "./types/universityDataTypes.ts";
import universityData from './src/unicool-university.json' with { type: "json" };

const School = new thaiXUnicool<SchoolDataTypes>(schoolData);
const University = new thaiXUnicool<UniversityDataTypes>(universityData);

const getSchool = () => {
      return School.getAll();
}

const getSchoolAndFilter = (filter : (e : SchoolDataTypes) => Boolean) => {
      return School.getAll().filter(filter).all()
}

const getSchoolAndFind = (find : (e : SchoolDataTypes) => Boolean) => {
      return School.getAll().find(find).all()
}

const getUniversity = () => {
      return University.getAll();
}

const getUniversityFilter = (filter : (e : UniversityDataTypes) => Boolean) => {
      return University.getAll().filter(filter).all();
}

const getUniversityFind = (find: (e : UniversityDataTypes) => Boolean) => {
      return University.getAll().find(find).all();
}

export { getSchool, getSchoolAndFilter, getSchoolAndFind, getUniversity, getUniversityFilter, getUniversityFind }