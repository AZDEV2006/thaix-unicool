import {
      getSchool,
      getSchoolAndFilter,
      getSchoolAndFind,
      getUniversity,
      getUniversityFilter,
      getUniversityFind
} from "./index.ts";

// ==========================
// ตัวอย่างการใช้งาน School
// ==========================

// ดึงโรงเรียนทั้งหมด
const allSchools = getSchool().all();
console.log("All Schools:", allSchools.slice(0, 3)); // แสดงแค่ 3 ตัวอย่าง

// Filter: หาโรงเรียนที่อยู่จังหวัด "กรุงเทพมหานคร"
const bangkokSchools = getSchoolAndFilter(
      (school) => school.provinceNameThai === "กรุงเทพมหานคร"
);
console.log("Schools in Bangkok:", bangkokSchools.slice(0, 3));

// Find: หาโรงเรียนที่มีรหัสตรงกับ "101234"
const oneSchool = getSchoolAndFind((school) => school.schoolID === "101234");
console.log("Found School:", oneSchool);

// ใช้ map: แปลงให้เหลือแค่ชื่อโรงเรียน
const schoolNames = getSchool()
      .map((school) => school.departmentNameThai)
      .all();
console.log("School Names:", schoolNames.slice(0, 5));


// ==========================
// ตัวอย่างการใช้งาน University
// ==========================

// ดึงมหาวิทยาลัยทั้งหมด
const allUniversities = getUniversity().all();
console.log("All Universities:", allUniversities.slice(0, 3));

// Filter: เลือกมหาลัยที่ชื่อย่อ EN = "CU"
const cu = getUniversityFilter((uni) => uni.short_name_en === "CU");
console.log("Chulalongkorn University:", cu);

const kmitl = getUniversityFilter((uni) => uni.short_name_en === "KMITL");
console.log("KMITL:", kmitl);

// Find: หา TU
const tu = getUniversityFind((uni) => uni.short_name_en === "TU");
console.log("Thammasat University:", tu);

// ใช้ map: แปลงเหลือเฉพาะ object { code, name }
const universityList = getUniversity()
      .map((uni) => ({
            code: uni.short_name_en,
            name: uni.en_name,
      }))
      .all();

console.log("University List:", universityList.slice(0, 5));
