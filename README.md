# ThaiXUnicool

โปรเจกต์ตัวอย่างสำหรับการใช้งาน **thaiUnicool**  
Library ที่ช่วยให้คุณ filter, find, map ข้อมูลโรงเรียนและมหาวิทยาลัยของไทยได้ง่าย ๆ  
ข้อมูลมาจาก JSON ของ **กระทรวงศึกษาธิการ** และ **Thai University List** บน GitHub

---

## การติดตั้ง How to install

Clone repo นี้แล้วติดตั้ง dependency

```bash
git clone AZDEV2006/thaix-unicool.git
cd thaix-unicool
npm install
```

---

## โครงสร้างไฟล์ File Structure
```
.
├── index.ts                # รวม function ที่ export
├── thai-unicool_lib.ts     # class thaiUnicool
├── app.js                  # ตัวอย่างการใช้งาน (demo)
├── src/
│   ├── unicool-school.json     # ข้อมูลโรงเรียนไทย
│   └── unicool-university.json # ข้อมูลมหาวิทยาลัยไทย
└── types/
    ├── schoolDataTypes.ts
    └── universityDataTypes.ts
```

---

## วิธีใช้งาน Instruction

รัน `app.js` เพื่อดูตัวอย่างการใช้งาน:

```bash
node app.js
```

ตัวอย่างการใช้งานกับ **โรงเรียน**
```js
import { getSchool, getSchoolAndFilter, getSchoolAndFind } from "./index.ts";

// ดึงโรงเรียนทั้งหมด
const schools = getSchool().all();
console.log("All schools:", schools.slice(0, 3));

// Filter: หาโรงเรียนที่อยู่จังหวัดกรุงเทพมหานคร
const bangkok = getSchoolAndFilter(
  (school) => school.provinceNameThai === "กรุงเทพมหานคร"
);
console.log("Schools in Bangkok:", bangkok);

// Find: หาโรงเรียนที่มีรหัสเฉพาะ
const oneSchool = getSchoolAndFind((s) => s.schoolID === "101234");
console.log("One school:", oneSchool);

// Map: เอาเฉพาะชื่อโรงเรียน
const names = getSchool()
  .map((s) => s.departmentNameThai)
  .all();
console.log("School names:", names.slice(0, 5));
```

ตัวอย่างการใช้งานกับ **มหาวิทยาลัย**
```js
import { getUniversity, getUniversityFilter, getUniversityFind } from "./index.ts";

// ดึงมหาลัยทั้งหมด
const universities = getUniversity().all();
console.log("All universities:", universities.slice(0, 3));

// Filter: หา CU
const cu = getUniversityFilter((uni) => uni.short_name_en === "CU");
console.log("Chulalongkorn University:", cu);

// Find: หา TU
const tu = getUniversityFind((uni) => uni.short_name_en === "TU");
console.log("Thammasat University:", tu);

// Map: แปลงเหลือ {code, name}
const uniList = getUniversity()
  .map((uni) => ({ code: uni.short_name_en, name: uni.en_name }))
  .all();

console.log("University list:", uniList.slice(0, 5));
```

---

## แหล่งข้อมูล JSON

- **โรงเรียนมัธยมศึกษา**: [exchange-api.moe.go.th](https://exchange-api.moe.go.th) (ข้อมูลจากกระทรวงศึกษาธิการ)  
- **มหาวิทยาลัย**: [t6tg/thai-university](https://github.com/t6tg/thai-university) (รายชื่อมหาวิทยาลัยไทย)

---

## จุดประสงค์

- ใช้ `thaiUnicool<T>` เพื่อฝึกการเขียน **Generic Class ใน TypeScript**  
- เรียนรู้การใช้งาน **chain method** (`getAll().filter().map().all()`)  
- ใช้เป็น Workshop สำหรับนักพัฒนา
- ใช้เพื่อการศึกษาเท่านั้น

---
