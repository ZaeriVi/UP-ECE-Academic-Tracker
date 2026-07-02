const COURSES = [
  {code:"EEE 111",title:"Intro to Programming",units:3,prereq:[],coreq:[],type:"major",year:1,sem:1},
  {code:"EEE 113",title:"Intro to EEE Systems",units:3,prereq:[],coreq:[],type:"major",year:1,sem:1},
  {code:"EEE 118",title:"EEE Lab 1",units:1,prereq:[],coreq:["EEE 113"],type:"major",year:1,sem:1},
  {code:"Math 21",title:"Elementary Analysis I",units:4,prereq:[],coreq:[],type:"math",year:1,sem:1},
  {code:"Physics 71",title:"Elementary Physics I",units:4,prereq:[],coreq:["Math 21"],type:"science",year:1,sem:1},
  {code:"Philo 1",title:"Philosophy (GE)",units:3,prereq:[],coreq:[],type:"ge",year:1,sem:1},
  {code:"PE 1",title:"Physical Education 1",units:2,prereq:[],coreq:[],type:"pe",year:1,sem:1},
  {code:"EEE 121",title:"Data Structures & Algorithms",units:3,prereq:["EEE 111"],coreq:[],type:"major",year:1,sem:2},
  {code:"EEE 123",title:"Circuits & Electronics I",units:3,prereq:[],coreq:["Math 21"],type:"major",year:1,sem:2},
  {code:"EEE 128",title:"EEE Lab 2",units:1,prereq:["EEE 118"],coreq:[],type:"major",year:1,sem:2},
  {code:"Math 22",title:"Elementary Analysis II",units:4,prereq:["Math 21"],coreq:[],type:"math",year:1,sem:2},
  {code:"Physics 72",title:"Elementary Physics II",units:4,prereq:["Physics 71"],coreq:[],type:"science",year:1,sem:2},
  {code:"Speech 30 / Eng 13",title:"Public Speaking and Persuasion / Writing as Thinking",units:3,prereq:[],coreq:[],type:"ge",year:1,sem:2},
  {code:"PE 2",title:"Physical Education 2",units:2,prereq:[],coreq:[],type:"pe",year:1,sem:2},
  {code:"EEE 131",title:"Devices & Circuits",units:3,prereq:["Physics 72","EEE 123"],coreq:[],type:"major",year:2,sem:1},
  {code:"EEE 133",title:"Circuits & Electronics II",units:3,prereq:["EEE 123"],coreq:[],type:"major",year:2,sem:1},
  {code:"EEE 137",title:"Prob Stat & RP",units:3,prereq:["Math 22"],coreq:[],type:"major",year:2,sem:1},
  {code:"EEE 138",title:"EEE Lab 3",units:1,prereq:["EEE 128"],coreq:[],type:"major",year:2,sem:1},
  {code:"Math 23",title:"Elementary Analysis III",units:4,prereq:["Math 22"],coreq:[],type:"math",year:2,sem:1},
  {code:"Math 40",title:"Linear Algebra",units:3,prereq:["Math 22"],coreq:[],type:"math",year:2,sem:1},
  {code:"GE Elective 1",title:"GE Elective",units:3,prereq:[],coreq:[],type:"ge_elective",year:2,sem:1},
  {code:"NSTP 1",title:"NSTP 1",units:3,prereq:[],coreq:[],type:"nstp",year:2,sem:1},
  {code:"PE 3",title:"Physical Education 3",units:2,prereq:[],coreq:[],type:"pe",year:2,sem:1},
  {code:"EEE 141",title:"Electronic Circuits & Systems",units:3,prereq:["EEE 131"],coreq:[],type:"major",year:2,sem:2},
  {code:"EEE 143",title:"Digital Logic Design",units:3,prereq:[],coreq:[],type:"major",year:2,sem:2},
  {code:"EEE 145",title:"Electro-Energy Conversion",units:3,prereq:["Physics 72"],coreq:[],type:"major",year:2,sem:2},
  {code:"EEE 147",title:"Signals and Systems",units:3,prereq:["Math 22"],coreq:[],type:"major",year:2,sem:2},
  {code:"EEE 148",title:"EEE Lab 4",units:1,prereq:["EEE 128"],coreq:[],type:"major",year:2,sem:2},
  {code:"ES 101",title:"Mechanics of Rigid Bodies",units:4,prereq:["Math 22"],coreq:[],type:"major",year:2,sem:2},
  {code:"NSTP 2",title:"NSTP 2",units:3,prereq:[],coreq:[],type:"nstp",year:2,sem:2},
  {code:"PE 4",title:"Physical Education 4",units:2,prereq:[],coreq:[],type:"pe",year:2,sem:2},
  {code:"EEE 135",title:"Electromagnetic Fields I",units:3,prereq:["Physics 72"],coreq:["Math 23"],type:"major",year:3,sem:1},
  {code:"EEE 151",title:"Analog & Digital Control",units:3,prereq:["EEE 147","ES 101"],coreq:[],type:"major",year:3,sem:1},
  {code:"EEE 153",title:"Computer Org & Embedded Sys",units:3,prereq:["EEE 143"],coreq:[],type:"major",year:3,sem:1},
  {code:"EEE 155",title:"Intro to Electric Power Sys",units:3,prereq:["EEE 123"],coreq:[],type:"major",year:3,sem:1},
  {code:"EEE 157",title:"Communications Sys & Networks",units:3,prereq:["EEE 147"],coreq:[],type:"major",year:3,sem:1},
  {code:"EEE 158",title:"EEE Lab 5",units:1,prereq:["EEE 128","EEE 147"],coreq:[],type:"major",year:3,sem:1},
  {code:"Physics 73",title:"Modern Physics",units:4,prereq:["Physics 72"],coreq:[],type:"science",year:3,sem:1},
  {code:"ECE 161",title:"Digital Signal Processing",units:3,prereq:["EEE 147"],coreq:[],type:"major",year:3,sem:2},
  {code:"ECE 163",title:"Communications Electronics",units:3,prereq:["EEE 131","EEE 157"],coreq:[],type:"major",year:3,sem:2},
  {code:"ECE 164",title:"Comm Circuits & SP Lab",units:1,prereq:["EEE 157"],coreq:[],type:"major",year:3,sem:2},
  {code:"EEE 192",title:"EEE Lab 6",units:1,prereq:["EEE 158"],coreq:[],type:"major",year:3,sem:2},
  {code:"EEE Elective",title:"EEE Elective",units:3,prereq:[],coreq:[],type:"eee_elective",year:3,sem:2},
  {code:"GE Elective 2",title:"GE Elective",units:3,prereq:[],coreq:[],type:"ge_elective",year:3,sem:2},
  {code:"Soc Sci 2",title:"Social Sciences 2 (GE)",units:3,prereq:[],coreq:[],type:"ge",year:3,sem:2},
  {code:"ECE 165",title:"Digital Communications Sys",units:3,prereq:["EEE 157"],coreq:[],type:"major",year:4,sem:1},
  {code:"ECE 167",title:"Computer Networks",units:3,prereq:["EEE 157"],coreq:[],type:"major",year:4,sem:1},
  {code:"ECE 168",title:"Network Comms Lab",units:1,prereq:["EEE 157"],coreq:[],type:"major",year:4,sem:1},
  {code:"EEE 196",title:"Colloquium / Capstone I",units:4,prereq:["EEE 192"],coreq:[],type:"major",year:4,sem:1},
  {code:"Engg Elective",title:"Engineering Elective",units:3,prereq:[],coreq:[],type:"engg_elective",year:4,sem:1},
  {code:"Kas 1",title:"Kasaysayan ng Pilipinas",units:3,prereq:[],coreq:[],type:"ge",year:4,sem:1},
  {code:"ECE 199",title:"Special Project / Capstone II",units:3,prereq:["EEE 196"],coreq:[],type:"major",year:4,sem:2},
  {code:"Free Elective",title:"Free Elective",units:3,prereq:[],coreq:[],type:"free_elective",year:4,sem:2},
  {code:"PI 100",title:"Philippine Constitution",units:3,prereq:[],coreq:[],type:"ge",year:4,sem:2},
  {code:"DRMAPS",title:"Disaster Risk / STS (GE)",units:3,prereq:[],coreq:[],type:"ge",year:4,sem:2},
  {code:"Arts 1",title:"Arts Appreciation (GE)",units:3,prereq:[],coreq:[],type:"ge",year:4,sem:2},
  {code:"Fil 40",title:"Filipino sa Iba't Ibang Larangan",units:3,prereq:[],coreq:[],type:"ge",year:4,sem:2},
];

const GRADE_OPTIONS = [
  {label:"In Progress",num:null},
  {label:"1.00",num:1.00},{label:"1.25",num:1.25},{label:"1.50",num:1.50},
  {label:"1.75",num:1.75},{label:"2.00",num:2.00},{label:"2.25",num:2.25},
  {label:"2.50",num:2.50},{label:"2.75",num:2.75},{label:"3.00",num:3.00},
  {label:"4.00 (INC)",num:4.00},{label:"5.00 (FAIL)",num:5.00},{label:"DRP",num:null},
];
const DOST_STATUS_INFO = {
  CONTINUED:{label:"Continued",color:"#16a34a",bg:"#dcfce7"},
  PROBATION:{label:"Continued under Probation",color:"#d97706",bg:"#fef3c7"},
  PARTIAL:{label:"Continued with Partial Allowance",color:"#ea580c",bg:"#fff7ed"},
  TERMINATED:{label:"Terminated",color:"#dc2626",bg:"#fee2e2"},
};
const HONORS = [
  {label:"Summa Cum Laude",min:1.00,max:1.20},
  {label:"Magna Cum Laude",min:1.21,max:1.45},
  {label:"Cum Laude",min:1.46,max:1.75},
];

const TYPE_COLOR = {
  major:"#7B1113",math:"#1d4ed8",science:"#065f46",ge:"#6b21a8",
  ge_elective:"#7c3aed",nstp:"#374151",pe:"#4b5563",
  eee_elective:"#b45309",engg_elective:"#c2410c",free_elective:"#0369a1"
};
const TYPE_BG = {
  major:"#fff0f0",math:"#eff6ff",science:"#ecfdf5",ge:"#f5f3ff",
  ge_elective:"#ede9fe",nstp:"#f3f4f6",pe:"#f9fafb",
  eee_elective:"#fef3c7",engg_elective:"#fff7ed",free_elective:"#e0f2fe"
};

const LOAD_KEY = "up_tracker_electron_v1_0_0";
let STATE = {
  grades: {},
  simGrades: {},
  simMode: false,
  scholarship: true,
  yearInScholarship: 1,
  prevDeficiency: false,
  selectedAudit: null,
  auditFilter: "all",
  gradeFilter: "all",
  // semesterMap: { courseCode -> {ay, sem} } — set by Planner sync
  semesterMap: {},
  // PE optional entries: [{id, name, sem, ay, status, notes}]
  peEntries: [],
  // NSTP optional entries: [{id, name, component, sem, ay, status, notes}]
  nstpEntries: [],
  // Scholarship enhancements
  scholarshipYear: "2025",   // "2023" | "2024" | "2025" | "2026"
  scholarSubTab: "status",   // "status" | "details" | "faq" | "rules"
  scholarshipType: "DOST",   // "DOST" | "CHED" | "Private" | "Custom" | "None"
  // Grade Simulation Workspaces: [{id, courseName, totalPoints, passingGrade, components:[{name,weight,maxScore,earned}], autoAnalyze, analysisResult}]
  gsWorkspaces: [],
  // Retake records: [{id, code, originalGrade, retakeStatus, removalStatus, placedAy, placedSem}]
  // retakeStatus: "planned" | "in_progress" | "completed"
  // removalStatus: null | "pending" | "passed" | "failed"
  retakeRecords: [],
  // retakeGrades: keyed by retake record id — separate grade store for each retake attempt
  // { [retakeId]: {label, num} }
  retakeGrades: {},
  // Custom scholarship name
  customScholarshipName: "",
  // Renamable elective placeholders: { courseCode -> {displayName, displayCode} }
  electiveNames: {},
  // Custom courses added by user: [{id, code, title, units, type, wagEligible}]
  customCourses: [],
  // Custom course grades: { customCourseId -> {label, num} }
  customGrades: {},
};

function loadState() {
  try {
    const s = localStorage.getItem(LOAD_KEY);
    if (s) { const d = JSON.parse(s); Object.assign(STATE, d); }
  } catch(e) {}
  COURSES.forEach(c => { if (!STATE.grades[c.code]) STATE.grades[c.code] = {label:"In Progress",num:null}; });
  if (!STATE.semesterMap) STATE.semesterMap = {};
  if (!STATE.peEntries) STATE.peEntries = [];
  if (!STATE.nstpEntries) STATE.nstpEntries = [];
  if (!STATE.gsWorkspaces) STATE.gsWorkspaces = [];
  if (!STATE.scholarshipType) STATE.scholarshipType = "DOST";
  if (!STATE.retakeRecords) STATE.retakeRecords = [];
  if (!STATE.retakeGrades) STATE.retakeGrades = {};
  if (!STATE.customScholarshipName) STATE.customScholarshipName = "";
  if (!STATE.electiveNames) STATE.electiveNames = {};
  if (!STATE.customCourses) STATE.customCourses = [];
  if (!STATE.customGrades) STATE.customGrades = {};
  // migrate legacy scholarship boolean
  if (STATE.scholarship === false && !STATE.scholarshipType) STATE.scholarshipType = "None";
}

function saveState() {
  try { localStorage.setItem(LOAD_KEY, JSON.stringify({
    grades:STATE.grades, simGrades:STATE.simGrades, simMode:STATE.simMode,
    scholarship:STATE.scholarship, yearInScholarship:STATE.yearInScholarship,
    prevDeficiency:STATE.prevDeficiency, semesterMap:STATE.semesterMap,
    peEntries:STATE.peEntries, nstpEntries:STATE.nstpEntries,
    scholarshipYear:STATE.scholarshipYear, scholarSubTab:STATE.scholarSubTab,
    scholarshipType:STATE.scholarshipType, gsWorkspaces:STATE.gsWorkspaces,
    retakeRecords:STATE.retakeRecords, retakeGrades:STATE.retakeGrades,
    customScholarshipName:STATE.customScholarshipName,
    electiveNames:STATE.electiveNames, customCourses:STATE.customCourses,
    customGrades:STATE.customGrades,
  })); } catch(e){}
}

function effectiveGrade(code) {
  if (STATE.simMode && STATE.simGrades[code]) return STATE.simGrades[code];
  return STATE.grades[code] || {label:"In Progress",num:null};
}
// Grade lookup with an EXPLICIT, independent sim/real mode — unlike
// effectiveGrade (which is at the mercy of the global STATE.simMode
// toggle), this lets callers force "real" or "simulated" regardless of
// whether Simulation Mode happens to be globally on. Needed so the
// What-If tab can show an accurate Real-vs-Simulated comparison at the
// same time, and so evaluateScholarshipStatus(useSimMode) always
// returns numbers matching the mode it was actually asked for.
// forceSimMode: true = simulated, false = real, undefined = respect
// the global toggle (identical to plain effectiveGrade).
function gradeForCourseMode(code, forceSimMode) {
  if (forceSimMode === true)  return STATE.simGrades[code] || STATE.grades[code] || {label:"In Progress",num:null};
  if (forceSimMode === false) return STATE.grades[code] || {label:"In Progress",num:null};
  return effectiveGrade(code);
}

// ── RETAKE-AWARE HELPERS ──────────────────────────────────────────
function getRetakesForCourse(code) {
  return (STATE.retakeRecords||[]).filter(r => r.code === code);
}
function getRetakeGrade(retakeId) {
  return (STATE.retakeGrades||{})[retakeId] || {label:"In Progress",num:null};
}
// Most recent graded attempt — used by scholarship evaluator and audit
function getLatestValidAttempt(code) {
  const retakes = getRetakesForCourse(code).slice().sort((a,b)=>(b.createdAt||"").localeCompare(a.createdAt||""));
  for (const r of retakes) {
    const rg = getRetakeGrade(r.id);
    if (rg.num !== null) return {grade: rg, source: "retake", retakeId: r.id};
  }
  return {grade: effectiveGrade(code), source: "original", retakeId: null};
}
// True if original OR any retake has a passing grade
function isCourseEffectivelyPassed(code) {
  const g = effectiveGrade(code);
  if (g.num !== null && g.num >= 1.00 && g.num <= 3.00) return true;
  return getRetakesForCourse(code).some(r => {
    const rg = getRetakeGrade(r.id);
    return rg.num !== null && rg.num >= 1.00 && rg.num <= 3.00;
  });
}
// ── CUSTOM COURSE HELPERS ─────────────────────────────────────────
function getCustomGrade(customId) {
  return (STATE.customGrades||{})[customId] || {label:"In Progress",num:null};
}

// ── GWA (General Weighted Average) ───────────────────────────────
// UP Diliman: includes all graded academic courses (major, math,
// science, GE, electives, custom). PE and NSTP are NOT included.
// 4.00 and 5.00 are included — they are final numeric grades.
// Only DRP (not graded) and "In Progress" (not yet graded) are excluded.
// Formula: Σ(grade × units) / Σ(units)
function computeGWA(filter, forceSimMode) {
  let tp=0, tu=0;

  COURSES.forEach(c => {
    if (["pe","nstp"].includes(c.type)) return; // PE and NSTP excluded from GWA
    if (filter && !filter(c)) return;
    const g = gradeForCourseMode(c.code, forceSimMode);
    if (!g || g.num === null || g.label === "In Progress" || g.label === "DRP") return;
    tp += g.num * c.units;
    tu += c.units;
  });

  // Retake attempts each contribute separately
  (STATE.retakeRecords||[]).forEach(r => {
    const course = COURSES.find(c=>c.code===r.code);
    if (!course || ["pe","nstp"].includes(course.type)) return; // PE and NSTP excluded
    if (filter && !filter(course)) return;
    const rg = getRetakeGrade(r.id);
    if (!rg || rg.num === null || rg.label === "In Progress" || rg.label === "DRP") return;
    tp += rg.num * course.units;
    tu += course.units;
  });

  // Custom courses are academic and always count toward GWA
  (STATE.customCourses||[]).forEach(cc => {
    if (["pe","nstp"].includes(cc.type)) return; // PE and NSTP excluded
    const g = getCustomGrade(cc.id);
    if (!g || g.num === null || g.label === "In Progress" || g.label === "DRP") return;
    tp += g.num * cc.units;
    tu += cc.units;
  });

  return tu > 0 ? tp / tu : null;
}

// ── SHARED SEMESTER BUCKET BUILDER ───────────────────────────────
// Single source of truth for grouping courses into semester buckets.
// Used by BOTH Grade Manager (display) and the Scholarship evaluator
// so their per-semester GWA values are always identical.
// Returns sorted array of: {key, label, sortKey, y, s, entries:[]}
// where entries are {type:"course"|"retake"|"custom", course, retakeRecord?}
function buildSemBuckets() {
  const hasSemMap = Object.keys(STATE.semesterMap).length > 0;
  const bucketMap = {};

  const addToBucket = (key, label, sortKey, y, s, entry) => {
    if (!bucketMap[key]) bucketMap[key] = {key, label, sortKey, y, s, entries:[]};
    bucketMap[key].entries.push(entry);
  };

  // 1. Regular curriculum courses
  COURSES.forEach(c => {
    let key, label, sortKey, y, s;
    if (hasSemMap && STATE.semesterMap[c.code] && !STATE.semesterMap[c.code].isRetake) {
      const m = STATE.semesterMap[c.code];
      key = `${m.ay}||${m.sem}`; label = `${m.ay} — ${m.sem} Semester`; sortKey = m.ay + m.sem;
      y = c.year; s = c.sem; // keep curriculum year/sem for scholarship logic
    } else {
      key = `y${c.year}s${c.sem}`; label = `Year ${c.year} — Semester ${c.sem}`; sortKey = `A${c.year}${c.sem}`;
      y = c.year; s = c.sem;
    }
    addToBucket(key, label, sortKey, y, s, {type:"course", course:c});
  });

  // 2. Retake entries
  (STATE.retakeRecords||[]).forEach(r => {
    if (!r.placedAy || !r.placedSem) return;
    const course = COURSES.find(c=>c.code===r.code);
    if (!course) return;
    const key = `${r.placedAy}||${r.placedSem}`;
    const label = `${r.placedAy} — ${r.placedSem} Semester`;
    addToBucket(key, label, r.placedAy+r.placedSem, course.year, course.sem, {type:"retake", course, retakeRecord:r});
  });

  // 3. Custom courses
  (STATE.customCourses||[]).forEach(cc => {
    const mapKey = "custom__" + cc.id;
    const mapped = STATE.semesterMap[mapKey];
    let key, label, sortKey;
    if (mapped && mapped.ay && mapped.sem) {
      key = `${mapped.ay}||${mapped.sem}`; label = `${mapped.ay} — ${mapped.sem} Semester`; sortKey = mapped.ay + mapped.sem;
    } else {
      key = "custom_unassigned"; label = "Custom Courses (Unassigned Semester)"; sortKey = "Z_custom";
    }
    const syntheticCourse = {
      code: "custom__" + cc.id, displayCode: cc.code, title: cc.title,
      units: cc.units, type: cc.type || "custom", prereq:[], coreq:[],
      isCustom:true, customId: cc.id,
    };
    addToBucket(key, label, sortKey, 0, 0, {type:"custom", course: syntheticCourse});
  });

  return Object.values(bucketMap).sort((a,b)=>a.sortKey.localeCompare(b.sortKey));
}

// Compute sem GWA for a bucket's entries — excludes PE/NSTP (shared rule).
function computeBucketSemGwa(entries) {
  let tp=0, tu=0;
  entries.forEach(entry => {
    const c = entry.course;
    if (["pe","nstp"].includes(c.type)) return;
    let g;
    if (entry.type === "retake") g = (STATE.retakeGrades||{})[entry.retakeRecord.id] || {label:"In Progress",num:null};
    else if (entry.type === "custom") g = getCustomGrade(c.customId);
    else g = effectiveGrade(c.code);
    if (!g || g.num === null || g.label === "In Progress" || g.label === "DRP") return;
    tp += g.num * c.units;
    tu += c.units;
  });
  return tu > 0 ? tp / tu : null;
}

// ── WAG (Weighted Average Grade) ─────────────────────────────────
// UP Latin Honors: curriculum-prescribed courses with PASSING grades
// only (1.00–3.00). Excludes PE, NSTP, failures (5.00), 4.00 INC,
// DRP, In Progress. Custom courses excluded unless wagEligible.
// Formula: Σ(grade × units) / Σ(units)  [passing only]
function computeWAG(forceSimMode) {
  let tp=0, tu=0;

  COURSES.forEach(c => {
    if (["pe","nstp"].includes(c.type)) return; // excluded per UP Honors rules
    const g = gradeForCourseMode(c.code, forceSimMode);
    if (!g || g.num === null || g.label === "In Progress" || g.label === "DRP") return;
    if (g.num < 1.00 || g.num > 3.00) return; // only passing grades (1.00–3.00)
    tp += g.num * c.units;
    tu += c.units;
  });

  (STATE.retakeRecords||[]).forEach(r => {
    const course = COURSES.find(c=>c.code===r.code);
    if (!course || ["pe","nstp"].includes(course.type)) return;
    const rg = getRetakeGrade(r.id);
    if (!rg || rg.num === null || rg.label === "In Progress" || rg.label === "DRP") return;
    if (rg.num < 1.00 || rg.num > 3.00) return;
    tp += rg.num * course.units;
    tu += course.units;
  });

  // Custom: only if wagEligible (assigned to satisfy a curriculum slot)
  (STATE.customCourses||[]).forEach(cc => {
    if (!cc.wagEligible || ["pe","nstp"].includes(cc.type)) return;
    const g = getCustomGrade(cc.id);
    if (!g || g.num === null || g.label === "In Progress" || g.label === "DRP") return;
    if (g.num < 1.00 || g.num > 3.00) return;
    tp += g.num * cc.units;
    tu += cc.units;
  });

  return tu > 0 ? tp / tu : null;
}

// ── AUDIT: course is "passed" if original OR any retake is passing ──
function computeAudit() {
  const passed = new Set();
  COURSES.forEach(c => { if (isCourseEffectivelyPassed(c.code)) passed.add(c.code); });

  // First pass: compute per-course eligibility ignoring coreqs
  const rawStatus = {};
  COURSES.forEach(c => {
    const g = effectiveGrade(c.code);
    const latest = getLatestValidAttempt(c.code);
    const prereqsMet = c.prereq.every(p => passed.has(p));
    const effGrade = latest.grade;
    let status;
    if (effGrade.num !== null && effGrade.num >= 1.00 && effGrade.num <= 3.00) status = "passed";
    else if (effGrade.num === 5.00) status = "failed";
    else if (effGrade.num === 4.00) status = "inc";
    else if (g.label === "DRP") status = "dropped";
    else if (g.label !== "In Progress") status = "in_progress";
    else if (prereqsMet) status = "available";
    else status = "blocked";
    rawStatus[c.code] = status;
  });

  // Second pass: propagate blocked status through corequisites.
  // A course is blocked if ANY of its corequisites are themselves blocked
  // (not passed and not eligible to be taken concurrently).
  // A coreq is "eligible concurrently" only if its own raw status is
  // "available" or "passed" — NOT if it's blocked/failed/inc/dropped.
  function isCoreqEligible(coreqCode) {
    if (passed.has(coreqCode)) return true; // already completed
    const rs = rawStatus[coreqCode];
    return rs === "available"; // eligible to take this sem
  }

  // Run propagation iteratively until stable (handles chains)
  let changed = true;
  const finalStatus = {...rawStatus};
  while (changed) {
    changed = false;
    COURSES.forEach(c => {
      if (finalStatus[c.code] === "passed" || finalStatus[c.code] === "failed" ||
          finalStatus[c.code] === "inc" || finalStatus[c.code] === "dropped") return;
      // Check each corequisite: if any is blocked/ineligible, this course is also blocked
      const blockedCoreq = c.coreq.filter(q => {
        if (passed.has(q)) return false; // passed already — fine
        const coreqFinal = finalStatus[q] || rawStatus[q];
        // A coreq must be "available" or "passed" to be usable concurrently
        return coreqFinal !== "available" && coreqFinal !== "passed";
      });
      if (blockedCoreq.length > 0 && finalStatus[c.code] !== "blocked") {
        finalStatus[c.code] = "blocked";
        changed = true;
      }
    });
  }

  return COURSES.map(c => {
    const g = effectiveGrade(c.code);
    const latest = getLatestValidAttempt(c.code);
    const prereqsMet = c.prereq.every(p => passed.has(p));
    const blockedByPrereq = c.prereq.filter(p => !passed.has(p));
    // Collect blocked coreqs for display (after propagation)
    const blockedCoreqs = c.coreq.filter(q => {
      if (passed.has(q)) return false;
      const s = finalStatus[q] || rawStatus[q];
      return s !== "available" && s !== "passed";
    });
    const blockedBy = [...blockedByPrereq, ...blockedCoreqs];
    return {
      ...c,
      status: finalStatus[c.code],
      blockedBy,
      prereqsMet,
      grade: g,
      effectiveGrade: latest.grade,
      retakeSource: latest.source,
    };
  });
}

// LEGACY WRAPPER — delegates to evaluateScholarshipStatus so all
// scholarship displays (header, dashboard, scholarship tab, what-if)
// use ONE engine. Retake grades are now visible to scholarship evaluation.
function computeDOST(audit) {
  if (!STATE.scholarship) return null;
  try {
    const result = evaluateScholarshipStatus(false);
    if (result.status === "N/A") return null;
    return {
      status: result.status,
      reasons: result.reason ? [result.reason] : ["All requirements met"],
      semData: result.semData || [],
    };
  } catch(e) {
    return {status:"CONTINUED", reasons:["Unable to evaluate"], semData:[]};
  }
}

function gradeColor(g) {
  if (!g||!g.num) return "#6b7280";
  if (g.num<=1.75) return "#16a34a";
  if (g.num<=2.50) return "#2563eb";
  if (g.num<=3.00) return "#d97706";
  if (g.num===4.00) return "#9333ea";
  return "#dc2626";
}
function statusColor(s) {
  return {passed:"#16a34a",available:"#2563eb",blocked:"#9ca3af",failed:"#dc2626",inc:"#9333ea",dropped:"#ea580c",not_started:"#d1d5db",in_progress:"#ca8a04"}[s]||"#d1d5db";
}
function statusBg(s) {
  return {passed:"#dcfce7",available:"#dbeafe",blocked:"#f3f4f6",failed:"#fee2e2",inc:"#f5f3ff",dropped:"#fff7ed",not_started:"#f9fafb",in_progress:"#fef9c3"}[s]||"#f9fafb";
}
function statusIcon(s) {
  return {passed:"✓",available:"→",blocked:"🔒",failed:"✗",inc:"⏳",dropped:"↩",not_started:"○",in_progress:"◉"}[s]||"○";
}

let currentTab = "dashboard";
function showTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-btn').forEach((b,i)=>{
    const tabs=["dashboard","grades","scholarship","whatif","audit","flowchart","planner","gradesim"];
    b.classList.toggle("active",tabs[i]===tab);
  });
  document.querySelectorAll('[id^="tab-"]').forEach(el=>el.style.display="none");
  document.getElementById("tab-"+tab).style.display="block";
  renderTab(tab);
}

function renderTab(tab) {
  const el = document.getElementById("tab-"+tab);
  if (tab==="dashboard") renderDashboard(el);
  else if (tab==="grades") renderGrades(el);
  else if (tab==="audit") renderAudit(el);
  else if (tab==="scholarship") renderScholarship(el);
  else if (tab==="whatif") renderWhatIf(el);
  else if (tab==="flowchart") renderFlowchart(el);
  else if (tab==="planner") renderPlanner(el);
  else if (tab==="gradesim") renderGradeSim(el);
  updateTopBadges();
}

function updateTopBadges() {
  document.getElementById("sim-badge").style.display = STATE.simMode ? "inline" : "none";
  const badge = document.getElementById("dost-badge");
  const scholType = STATE.scholarshipType || (STATE.scholarship ? "DOST" : "None");

  if (scholType === "None") {
    badge.textContent = "No Active Scholarship";
    badge.style.background = "#f3f4f6";
    badge.style.color = "#6b7280";
    badge.style.display = "inline";
    return;
  }

  // Build label prefix based on type
  const labelPrefix = scholType === "Custom"
    ? (STATE.customScholarshipName || "Custom Scholarship")
    : scholType;

  // Get status from evaluator
  const audit = computeAudit();
  const dost = computeDOST(audit);
  const DOST_STATUS_INFO_LOCAL = {
    CONTINUED: {label:"Continued", bg:"#dcfce7", color:"#16a34a"},
    PROBATION:  {label:"Under Probation", bg:"#fef3c7", color:"#d97706"},
    PARTIAL:    {label:"Partial Allowance", bg:"#fff7ed", color:"#ea580c"},
    TERMINATED: {label:"Terminated", bg:"#fee2e2", color:"#dc2626"},
  };
  const si = DOST_STATUS_INFO_LOCAL[dost?.status] || DOST_STATUS_INFO_LOCAL["CONTINUED"];
  badge.textContent = `${labelPrefix}: ${si.label}`;
  badge.style.background = si.bg;
  badge.style.color = si.color;
  badge.style.display = "inline";
}

function renderDashboard(el) {
  const audit = computeAudit();
  const dost = computeDOST(audit);
  const gwa = computeGWA();
  const wag = computeWAG();
  let comp=0,inprog=0,fail=0,drop=0;
  COURSES.forEach(c=>{
    const g=effectiveGrade(c.code);
    if(!g||g.label==="In Progress"){inprog+=c.units;return;}
    if(g.label==="DRP"){drop+=c.units;return;}
    if(g.num===5.00){fail+=c.units;return;}
    if(g.num!==null)comp+=c.units;
  });
  const total = COURSES.reduce((s,c)=>s+c.units,0);
  const gradPct = Math.round((comp/total)*100);
  const notPassed = audit.filter(c=>c.status!=="passed"&&!["pe","nstp"].includes(c.type)).length;
  const eligible = notPassed === 0 && audit.filter(c=>c.type==="nstp"&&c.status==="passed").length>=2;
  let sc={passed:0,available:0,blocked:0,failed:0,inc:0};
  audit.forEach(c=>{if(sc[c.status]!==undefined)sc[c.status]++;});
  const honors = HONORS.find(h=>wag&&wag>=h.min&&wag<=h.max);
  const honorsShort = honors ? (honors.label.includes("Summa")?"Summa CL":honors.label.includes("Magna")?"Magna CL":"Cum Laude") : "—";

  el.innerHTML = `
  <div class="section-title">Academic Dashboard</div>
  <div class="stat-grid">
    ${sc_card("GWA",gwa?gwa.toFixed(2):"—","Cumulative","#7B1113")}
    ${sc_card("WAG",wag?wag.toFixed(2):"—","Weighted Avg Grade","#1d4ed8")}
    ${sc_card("Units",comp+"/"+total,"Total curriculum: 145","#065f46")}
    ${sc_card("Progress",gradPct+"%","Toward graduation","#7c3aed")}
    ${sc_card("Honors",honorsShort,honors?honors.label:"No threshold reached","#b45309")}
    ${sc_card("Graduation",eligible?"✓ ELIGIBLE":notPassed+" remaining",eligible?"All reqs met":"Courses to complete",eligible?"#16a34a":"#dc2626")}
  </div>
  <div class="card" style="margin-bottom:10px">
    <div style="display:flex;justify-content:space-between;margin-bottom:7px">
      <span style="font-weight:600;font-size:13px">Degree Progress — ${comp} of 145 units</span>
      <span style="font-size:12px;color:#6b7280">${gradPct}% complete</span>
    </div>
    <div class="prog-bar">
      <div style="width:${(comp/total)*100}%;background:#7B1113;transition:width .5s"></div>
      <div style="width:${(inprog/total)*100}%;background:#FFC72C;opacity:.6"></div>
      <div style="width:${(fail/total)*100}%;background:#dc2626;opacity:.7"></div>
    </div>
    <div style="display:flex;gap:14px;margin-top:6px;font-size:11px;flex-wrap:wrap">
      ${[["#7B1113","Passed ("+comp+"u)"],["#FFC72C","In Progress ("+inprog+"u)"],["#dc2626","Failed ("+fail+"u)"],["#9ca3af","Remaining ("+Math.max(0,total-comp-inprog-fail)+"u)"]].map(([c,l])=>`<span style="display:flex;align-items:center;gap:3px"><span style="width:9px;height:9px;background:${c};border-radius:2px;display:inline-block"></span>${l}</span>`).join("")}
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    <div class="card">
      <div style="font-weight:600;font-size:13px;color:#7B1113;margin-bottom:10px">Course Status Summary</div>
      ${[["✅","Passed",sc.passed,"#16a34a"],["🔓","Available to take",sc.available,"#2563eb"],["🔒","Blocked (prereqs)",sc.blocked,"#9ca3af"],["❌","Failed (retake)",sc.failed,"#dc2626"],["⏳","Incomplete (INC)",sc.inc,"#9333ea"]].map(([i,l,v,c])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:12px"><span>${i} ${l}</span><span style="font-weight:700;color:${c};font-size:14px">${v}</span></div>`).join("")}
    </div>
    <div class="card">
      <div style="font-weight:600;font-size:13px;color:#7B1113;margin-bottom:10px">Recommended Next Courses</div>
      ${audit.filter(c=>c.status==="available").slice(0,7).map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid #f3f4f6"><div><span style="font-weight:700;font-size:11px;color:${TYPE_COLOR[c.type]||'#374151'}">${c.code}</span><span style="font-size:11px;color:#374151;margin-left:5px">${c.title.length>28?c.title.slice(0,28)+"…":c.title}</span></div><span style="font-size:11px;color:#6b7280">${c.units}u</span></div>`).join("") || '<div style="color:#6b7280;font-size:12px">No courses available yet</div>'}
    </div>
  </div>
  ${dost&&dost.status!=="CONTINUED"?`<div class="dost-alert" style="background:${DOST_STATUS_INFO[dost.status].bg};border-color:${DOST_STATUS_INFO[dost.status].color};margin-top:10px"><div style="font-weight:700;color:${DOST_STATUS_INFO[dost.status].color};margin-bottom:4px">⚠️ DOST Scholarship: ${DOST_STATUS_INFO[dost.status].label}</div><div style="font-size:12px;color:#374151">${dost.reasons.join(" • ")}</div></div>`:""}
  `;
}

function sc_card(label,value,sub,color) {
  return `<div class="stat-card" style="border-top:3px solid ${color}"><div class="s-label">${label}</div><div class="s-value" style="color:${color}">${value}</div><div class="s-sub" title="${sub}">${sub}</div></div>`;
}

function renderGrades(el) {
  const audit = computeAudit();
  const hasSemMap = Object.keys(STATE.semesterMap).length > 0;

  // Use shared bucket builder (same as scholarship evaluator)
  let semBuckets = buildSemBuckets();

  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
    <div class="section-title" style="margin:0">Grade Manager</div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      ${hasSemMap ? `<span style="font-size:11px;background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:7px;font-weight:600">📅 Planner-synced layout</span>` : `<span style="font-size:11px;color:#9ca3af">Default layout · sync from Planner to reorganize</span>`}
      <select onchange="STATE.gradeFilter=this.value;renderTab('grades')" style="padding:5px 10px;border-radius:8px;border:1px solid #d1d5db;font-size:12px">
        <option value="all" ${STATE.gradeFilter==="all"?"selected":""}>All courses</option>
        <option value="major" ${STATE.gradeFilter==="major"?"selected":""}>Major only</option>
        <option value="ge" ${STATE.gradeFilter==="ge"?"selected":""}>GE only</option>
        <option value="math" ${STATE.gradeFilter==="math"?"selected":""}>Math/Science</option>
        <option value="failed" ${STATE.gradeFilter==="failed"?"selected":""}>Failed/INC</option>
      </select>
    </div>
  </div>`;

  semBuckets.forEach(bucket => {
    // Filter entries by gradeFilter
    const entries = bucket.entries.filter(entry => {
      const c = entry.course;
      const f = STATE.gradeFilter;
      if (f === "major") return c.type === "major";
      if (f === "ge") return c.type === "ge" || c.type === "ge_elective";
      if (f === "math") return c.type === "math" || c.type === "science";
      if (f === "failed") {
        if (entry.type === "retake") {
          const rg = (STATE.retakeGrades||{})[entry.retakeRecord.id];
          return rg && (rg.num === 5.00 || rg.num === 4.00);
        }
        const g = effectiveGrade(c.code);
        return g.num === 5.00 || g.num === 4.00;
      }
      return true;
    });
    if (entries.length === 0) return;

    // Sem GWA via shared helper — identical to scholarship evaluator (PE/NSTP excluded).
    const semGwaNum = computeBucketSemGwa(entries);
    const semGwa = semGwaNum !== null ? semGwaNum.toFixed(2) : "—";

    const acadUnits = entries.filter(e=>!["pe","nstp"].includes(e.course.type)).reduce((s,e)=>s+e.course.units,0);
    const peUnits = entries.filter(e=>e.course.type==="pe").reduce((s,e)=>s+e.course.units,0);
    const nstpUnits = entries.filter(e=>e.course.type==="nstp").reduce((s,e)=>s+e.course.units,0);

    html += `<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px">
        <span style="font-weight:700;font-size:14px;color:#7B1113">${bucket.label}</span>
        <div style="display:flex;gap:8px;align-items:center;font-size:11px">
          ${acadUnits>0?`<span style="color:#374151">${acadUnits}u academic</span>`:""}
          ${peUnits>0?`<span style="color:#4b5563">+${peUnits}u PE</span>`:""}
          ${nstpUnits>0?`<span style="color:#374151">+${nstpUnits}u NSTP</span>`:""}
          <span id="gwa-label-${bucket.sortKey}" style="color:#6b7280">GWA: <b style="color:#1d4ed8">${semGwa}</b></span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:7px">`;

    entries.forEach(entry => {
      const c = entry.course;
      const tc = TYPE_COLOR[c.type]||"#374151";
      const tb = TYPE_BG[c.type]||"#f9fafb";
      const isNonAcad = ["pe","nstp"].includes(c.type);
      const isRetakeEntry = entry.type === "retake";
      const retakeRecord = entry.retakeRecord;

      // Grade for this entry: retake uses its own grade store, custom uses customGrades
      let g, gradeOnchange, displayCode, displayTitle;
      const isCustomEntry = entry.type === "custom";
      const isElectivePlaceholder = ["ge_elective","eee_elective","engg_elective","free_elective","pe","nstp"].includes(c.type);
      const renamed = (STATE.electiveNames||{})[c.code];
      if (isRetakeEntry) {
        g = (STATE.retakeGrades||{})[retakeRecord.id] || {label:"In Progress",num:null};
        gradeOnchange = `setRetakeGrade(${retakeRecord.id},this.value)`;
        displayCode = (renamed?.displayCode || c.code) + " ✦";
        displayTitle = (renamed?.displayName || c.title) + " (Retake)";
      } else if (isCustomEntry) {
        g = getCustomGrade(c.customId);
        gradeOnchange = `setCustomGrade(${c.customId},this.value)`;
        displayCode = c.displayCode || c.code;
        displayTitle = c.title;
      } else {
        g = effectiveGrade(c.code);
        gradeOnchange = `setGrade('${c.code}',this.value)`;
        displayCode = renamed?.displayCode || c.code;
        displayTitle = renamed?.displayName || c.title;
      }

      const ac = audit.find(a=>a.code===c.code);
      html += `<div class="grade-row" style="background:${isRetakeEntry?"#faf5ff":isCustomEntry?"#eff6ff":tb};border:1px solid ${isRetakeEntry?"#c4b5fd":isCustomEntry?"#93c5fd":tc+"18"}">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
            <span style="font-weight:700;font-size:11px;color:${isRetakeEntry?"#7c3aed":isCustomEntry?"#1d4ed8":tc}">${displayCode}</span>
            <span style="font-size:9px;background:${isRetakeEntry?"#7c3aed":isCustomEntry?"#1d4ed8":tc};color:#fff;padding:1px 5px;border-radius:7px">${c.units}u</span>
            ${isRetakeEntry?`<span style="font-size:9px;background:#ede9fe;color:#7c3aed;padding:1px 5px;border-radius:5px">🔁 Retake</span>`:""}
            ${isCustomEntry?`<span style="font-size:9px;background:#dbeafe;color:#1e40af;padding:1px 5px;border-radius:5px">✦ Custom</span>`:""}
            ${isNonAcad?`<span style="font-size:9px;background:#f3f4f6;color:#6b7280;padding:1px 5px;border-radius:5px">non-acad</span>`:""}
            ${!isRetakeEntry&&!isCustomEntry&&ac?.status==="blocked"?'<span style="font-size:10px">🔒</span>':""}
            ${!isRetakeEntry&&!isCustomEntry&&isElectivePlaceholder?`<button onclick="event.stopPropagation();showRenameElectiveModal('${c.code}')" style="font-size:9px;padding:1px 5px;border-radius:5px;border:1px solid #d1d5db;background:transparent;cursor:pointer;color:#6b7280" title="Rename this elective slot">✎</button>`:""}
          </div>
          <div style="font-size:11px;color:#374151;margin-top:1px">${displayTitle.length>34?displayTitle.slice(0,34)+"…":displayTitle}</div>
          ${!isRetakeEntry&&!isCustomEntry&&c.prereq.length>0?`<div style="font-size:9px;color:#9ca3af">Pre: ${c.prereq.join(", ")}</div>`:""}
          ${isRetakeEntry?`<div style="font-size:9px;color:#9ca3af">Original grade: <b style="color:#dc2626">${retakeRecord.originalGrade}</b></div>`:""}
        </div>
        <select class="grade-sel" onchange="${gradeOnchange}" style="border-color:${gradeColor(g)}40;color:${gradeColor(g)};font-weight:600">
          ${GRADE_OPTIONS.map(go=>`<option value="${go.label}" ${g.label===go.label?"selected":""}>${go.label}</option>`).join("")}
        </select>
      </div>`;
    });
    html += "</div></div>";
  });

  // ── PE TRACKER ──────────────────────────────────────────────────
  const peCompleted = STATE.peEntries.filter(e=>e.status==="Completed").length;
  const peTotal = 4;
  html += `<div class="pe-nstp-card">
    <div class="pe-nstp-hdr">
      <span class="pe-nstp-title">🏃 PE Progress (Optional)</span>
      <span class="pe-nstp-progress ${peCompleted>=peTotal?"pnp-ok":peCompleted>0?"pnp-partial":"pnp-empty"}">${peCompleted}/${peTotal} completed${peCompleted>=peTotal?" · Requirement Satisfied":""}</span>
    </div>
    ${STATE.peEntries.length===0?`<div style="font-size:12px;color:#9ca3af;margin-bottom:8px">No PE entries yet. Add your PE courses below (optional).</div>`:""}
    ${STATE.peEntries.map((e,i)=>`
      <div class="pe-nstp-entry">
        <div>
          <span style="font-weight:600;color:#374151">${e.name||"PE Course"}</span>
          <span style="color:#6b7280;font-size:11px;margin-left:6px">${e.sem||""} ${e.ay||""}</span>
          ${e.notes?`<div style="font-size:10px;color:#9ca3af">${e.notes}</div>`:""}
        </div>
        <span style="font-size:11px;padding:2px 7px;border-radius:6px;font-weight:600;background:${e.status==="Completed"?"#dcfce7":e.status==="In Progress"?"#fef3c7":"#f3f4f6"};color:${e.status==="Completed"?"#16a34a":e.status==="In Progress"?"#d97706":"#6b7280"}">${e.status||"Planned"}</span>
        <button class="del-entry-btn" onclick="deletePE(${i})">✕</button>
      </div>`).join("")}
    <div class="pe-nstp-add-form" id="pe-add-form" style="display:none">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <input id="pe-name" placeholder="e.g. PE 2 Walking for Fitness" style="width:100%">
        <select id="pe-status"><option>Planned</option><option>In Progress</option><option>Completed</option></select>
        <input id="pe-sem" placeholder="e.g. 1st Sem" style="width:100%">
        <input id="pe-ay" placeholder="e.g. AY 2025-2026" style="width:100%">
      </div>
      <input id="pe-notes" placeholder="Notes (optional)" style="width:100%;margin-bottom:8px">
      <div style="display:flex;gap:6px">
        <button class="add-entry-btn" style="background:#4b5563;color:#fff;border-color:#4b5563" onclick="addPEEntry()">Add PE</button>
        <button class="add-entry-btn" onclick="document.getElementById('pe-add-form').style.display='none'">Cancel</button>
      </div>
    </div>
    <button class="add-entry-btn" style="margin-top:6px" onclick="document.getElementById('pe-add-form').style.display=document.getElementById('pe-add-form').style.display==='none'?'block':'none'">+ Add PE Course</button>
  </div>`;

  // ── NSTP TRACKER ───────────────────────────────────────────────
  const nstpCompletedU = STATE.nstpEntries.filter(e=>e.status==="Completed").reduce((s,e)=>s+(+e.units||3),0);
  const nstpRequiredU = 6;
  html += `<div class="pe-nstp-card">
    <div class="pe-nstp-hdr">
      <span class="pe-nstp-title">🏫 NSTP Progress (Optional)</span>
      <span class="pe-nstp-progress ${nstpCompletedU>=nstpRequiredU?"pnp-ok":nstpCompletedU>0?"pnp-partial":"pnp-empty"}">${nstpCompletedU}/${nstpRequiredU}u completed${nstpCompletedU>=nstpRequiredU?" · Requirement Satisfied":""}</span>
    </div>
    ${STATE.nstpEntries.length===0?`<div style="font-size:12px;color:#9ca3af;margin-bottom:8px">No NSTP entries yet. Add your NSTP courses below (optional).</div>`:""}
    ${STATE.nstpEntries.map((e,i)=>`
      <div class="pe-nstp-entry">
        <div>
          <span style="font-weight:600;color:#374151">${e.name||"NSTP Course"}</span>
          <span style="font-size:10px;background:#e0e7ff;color:#4338ca;padding:1px 5px;border-radius:5px;margin-left:5px">${e.component||""}</span>
          <span style="color:#6b7280;font-size:11px;margin-left:4px">${e.sem||""} ${e.ay||""}</span>
          ${e.notes?`<div style="font-size:10px;color:#9ca3af">${e.notes}</div>`:""}
        </div>
        <span style="font-size:11px;padding:2px 7px;border-radius:6px;font-weight:600;background:${e.status==="Completed"?"#dcfce7":e.status==="In Progress"?"#fef3c7":"#f3f4f6"};color:${e.status==="Completed"?"#16a34a":e.status==="In Progress"?"#d97706":"#6b7280"}">${e.status||"Planned"}</span>
        <button class="del-entry-btn" onclick="deleteNSTP(${i})">✕</button>
      </div>`).join("")}
    <div class="pe-nstp-add-form" id="nstp-add-form" style="display:none">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
        <input id="nstp-name" placeholder="e.g. CWTS 1" style="width:100%">
        <select id="nstp-component"><option>CWTS</option><option>LTS</option><option>ROTC</option></select>
        <select id="nstp-status"><option>Planned</option><option>In Progress</option><option>Completed</option></select>
        <input id="nstp-units" type="number" value="3" min="1" max="6" placeholder="Units" style="width:100%">
        <input id="nstp-sem" placeholder="e.g. 1st Sem" style="width:100%">
        <input id="nstp-ay" placeholder="e.g. AY 2025-2026" style="width:100%">
      </div>
      <input id="nstp-notes" placeholder="Notes (optional)" style="width:100%;margin-bottom:8px">
      <div style="display:flex;gap:6px">
        <button class="add-entry-btn" style="background:#374151;color:#fff;border-color:#374151" onclick="addNSTPEntry()">Add NSTP</button>
        <button class="add-entry-btn" onclick="document.getElementById('nstp-add-form').style.display='none'">Cancel</button>
      </div>
    </div>
    <button class="add-entry-btn" style="margin-top:6px" onclick="document.getElementById('nstp-add-form').style.display=document.getElementById('nstp-add-form').style.display==='none'?'block':'none'">+ Add NSTP Course</button>
  </div>`;

  // ── CUSTOM COURSES PANEL ─────────────────────────────────────────
  // Only show unassigned custom courses here — assigned ones already appear
  // inline in their semester bucket above (via semesterMap). This avoids duplication.
  const unassignedCustom = (STATE.customCourses||[]).filter(cc => {
    const mk = "custom__" + cc.id;
    const m = STATE.semesterMap[mk];
    return !m || !m.ay || !m.sem;
  });
  let ccHtml = '<div class="pe-nstp-card">';
  ccHtml += '<div class="pe-nstp-hdr"><span class="pe-nstp-title">➕ Custom Courses (Outside Curriculum)</span>';
  ccHtml += '<span class="pe-nstp-progress pnp-empty">' + (STATE.customCourses||[]).length + ' added · ' + unassignedCustom.length + ' unassigned</span></div>';
  if ((STATE.customCourses||[]).length === 0) {
    ccHtml += '<div style="font-size:12px;color:#9ca3af;margin-bottom:8px">No custom courses yet. Add courses outside your curriculum (e.g. KAS 2, JAP 10, MGT 101). They count toward GWA and Units but NOT toward curriculum completion.</div>';
  } else if (unassignedCustom.length === 0) {
    ccHtml += '<div style="font-size:12px;color:#16a34a;margin-bottom:8px">✓ All custom courses are assigned to a semester via the Planner. Their grades appear in the semester sections above.</div>';
  }
  unassignedCustom.forEach(cc => {
    const ccg = getCustomGrade(cc.id);
    const wagBadge = cc.wagEligible
      ? '<span style="font-size:9px;background:#dcfce7;color:#16a34a;padding:1px 5px;border-radius:5px">WAG-eligible</span>'
      : '<span style="font-size:9px;background:#f3f4f6;color:#9ca3af;padding:1px 5px;border-radius:5px">excl. from WAG</span>';
    const optHtml = GRADE_OPTIONS.map(go =>
      '<option value="' + go.label + '"' + (ccg.label === go.label ? ' selected' : '') + '>' + go.label + '</option>'
    ).join('');
    ccHtml += '<div class="grade-row" style="background:#eff6ff;border:1px solid #93c5fd;margin-bottom:5px">';
    ccHtml += '<div style="flex:1">';
    ccHtml += '<div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">';
    ccHtml += '<span style="font-weight:700;font-size:11px;color:#1d4ed8">' + cc.code + '</span>';
    ccHtml += '<span style="font-size:9px;background:#1d4ed8;color:#fff;padding:1px 5px;border-radius:7px">' + cc.units + 'u</span>';
    ccHtml += '<span style="font-size:9px;background:#dbeafe;color:#1e40af;padding:1px 5px;border-radius:5px">custom · unassigned</span>';
    ccHtml += wagBadge;
    ccHtml += '<button class="del-entry-btn" onclick="deleteCustomCourse(' + cc.id + ')">✕</button>';
    ccHtml += '</div>';
    ccHtml += '<div style="font-size:11px;color:#374151;margin-top:1px">' + cc.title + '</div>';
    ccHtml += '<div style="font-size:10px;color:#9ca3af">Drag into a Planner semester, then Sync to Grade Manager to assign.</div>';
    ccHtml += '</div>';
    ccHtml += '<select class="grade-sel" onchange="setCustomGrade(' + cc.id + ',this.value)"';
    ccHtml += ' style="border-color:' + gradeColor(ccg) + '40;color:' + gradeColor(ccg) + ';font-weight:600">';
    ccHtml += optHtml + '</select>';
    ccHtml += '</div>';
  });
  ccHtml += '<div class="pe-nstp-add-form" id="custom-add-form" style="display:none">';
  ccHtml += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">';
  ccHtml += '<input id="custom-code" placeholder="Code (e.g. KAS 2)" style="width:100%">';
  ccHtml += '<input id="custom-title" placeholder="Course title" style="width:100%">';
  ccHtml += '<input id="custom-units" type="number" value="3" min="1" max="9" placeholder="Units" style="width:100%">';
  ccHtml += '<label style="font-size:11px;color:#6b7280;display:flex;align-items:center;gap:5px;cursor:pointer">';
  ccHtml += '<input type="checkbox" id="custom-wag" style="accent-color:#7B1113"> Include in WAG</label>';
  ccHtml += '</div>';
  ccHtml += '<div style="display:flex;gap:6px">';
  ccHtml += '<button class="add-entry-btn" style="background:#1d4ed8;color:#fff;border-color:#1d4ed8" onclick="addCustomCourse()">Add Custom Course</button>';
  ccHtml += '<button class="add-entry-btn" onclick="document.getElementById(\'custom-add-form\').style.display=\'none\'">Cancel</button>';
  ccHtml += '</div></div>';
  ccHtml += '<button class="add-entry-btn" style="margin-top:6px" onclick="var f=document.getElementById(\'custom-add-form\');f.style.display=f.style.display===\'none\'?\'block\':\'none\'">+ Add Custom Course</button>';
  ccHtml += '</div>';
  html += ccHtml;

  // ── RETAKE RECORDS PANEL (preserved as-is) ──────────────────────
  html += renderRetakePanel();

  el.innerHTML = html;
}

function setGrade(code, label) {
  const found = GRADE_OPTIONS.find(g=>g.label===label);
  STATE.grades[code] = found || {label:"In Progress",num:null};
  saveState();
  updateTopBadges();
  // Instant refresh: always re-render the active tab so GWA updates immediately
  if (currentTab === "grades") {
    renderTab("grades");
  } else if (currentTab === "dashboard") {
    renderTab("dashboard");
  }
  // Retake workflow: trigger modal for 5.00 and 4.00
  if (found && (found.num === 5.00 || found.num === 4.00)) {
    const course = COURSES.find(c=>c.code===code);
    if (course) {
      const existing = STATE.retakeRecords.find(r=>r.code===code && r.originalGrade===label);
      if (!existing) {
        showRetakeModal(code, found.num, course);
      }
    }
  }
}

// Set grade for a specific retake attempt (by record id)
function setRetakeGrade(retakeId, label) {
  const found = GRADE_OPTIONS.find(g=>g.label===label);
  if (!STATE.retakeGrades) STATE.retakeGrades = {};
  STATE.retakeGrades[retakeId] = found || {label:"In Progress",num:null};
  // Also update retakeStatus based on grade
  const record = STATE.retakeRecords.find(r=>r.id===retakeId);
  if (record) {
    if (found && found.num !== null && found.num >= 1.00 && found.num <= 3.00) {
      record.retakeStatus = "completed";
    } else if (found && found.num !== null) {
      record.retakeStatus = "in_progress";
    }
  }
  saveState();
  updateTopBadges();
  // Instant GWA refresh
  if (currentTab === "grades") renderTab("grades");
  else if (currentTab === "dashboard") renderTab("dashboard");
}

// ── ELECTIVE RENAME HELPERS ───────────────────────────────────────
function showRenameElectiveModal(code) {
  const course = COURSES.find(c=>c.code===code);
  if (!course) return;
  const current = STATE.electiveNames[code] || {};
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "rename-elective-modal";
  overlay.innerHTML = `<div class="modal-box">
    <div class="modal-title">✎ Rename Elective Requirement</div>
    <p style="font-size:13px;color:#6b7280;margin-bottom:12px">Renaming "${course.title}" (slot: ${code}). This still satisfies the curriculum requirement.</p>
    <div style="margin-bottom:10px">
      <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Display Code (e.g. PI 100)</div>
      <input id="rename-code" value="${current.displayCode||""}" placeholder="${code}" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
    </div>
    <div style="margin-bottom:14px">
      <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Course Title</div>
      <input id="rename-title" value="${current.displayName||""}" placeholder="${course.title}" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
    </div>
    <div class="modal-actions">
      <button class="modal-btn-cancel" onclick="document.getElementById('rename-elective-modal').remove()">Cancel</button>
      ${current.displayCode||current.displayName?`<button style="padding:7px 18px;border-radius:8px;border:1px solid #fca5a5;background:#fff;color:#dc2626;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit" onclick="clearElectiveRename('${code}')">Reset to default</button>`:""}
      <button class="modal-btn-confirm" onclick="confirmRenameElective('${code}')">Save</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}
function confirmRenameElective(code) {
  const displayCode = document.getElementById("rename-code")?.value?.trim();
  const displayName = document.getElementById("rename-title")?.value?.trim();
  STATE.electiveNames[code] = {displayCode: displayCode||undefined, displayName: displayName||undefined};
  saveState();
  document.getElementById("rename-elective-modal")?.remove();
  renderTab(currentTab);
}
function clearElectiveRename(code) {
  delete STATE.electiveNames[code];
  saveState();
  document.getElementById("rename-elective-modal")?.remove();
  renderTab(currentTab);
}

// ── CUSTOM COURSE HELPERS ─────────────────────────────────────────
function addCustomCourse() {
  const code = document.getElementById("custom-code")?.value?.trim();
  const title = document.getElementById("custom-title")?.value?.trim() || code;
  const units = +(document.getElementById("custom-units")?.value) || 3;
  const wagEligible = document.getElementById("custom-wag")?.checked || false;
  if (!code) { alert("Please enter a course code."); return; }
  STATE.customCourses.push({id:Date.now(), code, title, units, type:"custom", wagEligible});
  saveState();
  renderTab("grades");
}
function deleteCustomCourse(id) {
  STATE.customCourses = STATE.customCourses.filter(c=>c.id!==id);
  delete STATE.customGrades[id];
  saveState();
  renderTab("grades");
}
function setCustomGrade(id, label) {
  const found = GRADE_OPTIONS.find(g=>g.label===label);
  STATE.customGrades[id] = found || {label:"In Progress",num:null};
  saveState();
  updateTopBadges();
  if (currentTab === "grades") renderTab("grades");
  else if (currentTab === "dashboard") renderTab("dashboard");
}

// ── PE ENTRY HELPERS ──────────────────────────────────────────────
function addPEEntry() {
  const name = document.getElementById("pe-name")?.value?.trim() || "PE Course";
  const status = document.getElementById("pe-status")?.value || "Planned";
  const sem = document.getElementById("pe-sem")?.value?.trim() || "";
  const ay = document.getElementById("pe-ay")?.value?.trim() || "";
  const notes = document.getElementById("pe-notes")?.value?.trim() || "";
  STATE.peEntries.push({id: Date.now(), name, status, sem, ay, notes});
  saveState();
  renderTab("grades");
}
function deletePE(idx) {
  STATE.peEntries.splice(idx, 1);
  saveState();
  renderTab("grades");
}

// ── NSTP ENTRY HELPERS ────────────────────────────────────────────
function addNSTPEntry() {
  const name = document.getElementById("nstp-name")?.value?.trim() || "NSTP Course";
  const component = document.getElementById("nstp-component")?.value || "CWTS";
  const status = document.getElementById("nstp-status")?.value || "Planned";
  const units = +(document.getElementById("nstp-units")?.value) || 3;
  const sem = document.getElementById("nstp-sem")?.value?.trim() || "";
  const ay = document.getElementById("nstp-ay")?.value?.trim() || "";
  const notes = document.getElementById("nstp-notes")?.value?.trim() || "";
  STATE.nstpEntries.push({id: Date.now(), name, component, status, units, sem, ay, notes});
  saveState();
  renderTab("grades");
}
function deleteNSTP(idx) {
  STATE.nstpEntries.splice(idx, 1);
  saveState();
  renderTab("grades");
}

function renderAudit(el) {
  const audit = computeAudit();
  const notPassed = audit.filter(c=>c.status!=="passed"&&!["pe","nstp"].includes(c.type)).length;
  const eligible = notPassed===0 && audit.filter(c=>c.type==="nstp"&&c.status==="passed").length>=2;
  const failed = audit.filter(c=>c.status==="failed");

  const GROUPS = [
    {label:"Major Courses",types:["major"],icon:"🔬"},
    {label:"Mathematics",types:["math"],icon:"📐"},
    {label:"Sciences",types:["science"],icon:"⚗️"},
    {label:"GE Requirements",types:["ge"],icon:"📚"},
    {label:"Electives",types:["ge_elective","eee_elective","engg_elective","free_elective"],icon:"🎯"},
    {label:"NSTP (6 units req.)",types:["nstp"],icon:"🏫"},
    {label:"Physical Education",types:["pe"],icon:"🏃"},
  ];

  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
    <div class="section-title" style="margin:0">Degree Audit</div>
    <div style="padding:7px 14px;border-radius:10px;font-weight:700;font-size:12px;background:${eligible?"#dcfce7":"#fee2e2"};color:${eligible?"#16a34a":"#dc2626"}">${eligible?"✅ Eligible to Graduate":"❌ "+notPassed+" courses remaining"}</div>
  </div>`;

  if (failed.length>0) {
    html += `<div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:10px;padding:10px 14px;margin-bottom:10px"><span style="font-weight:700;color:#dc2626">Failed courses (must retake): </span>${failed.map(c=>`<span style="display:inline-block;background:#dc2626;color:#fff;font-size:10px;padding:2px 7px;border-radius:7px;margin:2px">${c.code}</span>`).join("")}</div>`;
  }

  GROUPS.forEach(g => {
    const courses = audit.filter(c=>g.types.includes(c.type));
    const passed = courses.filter(c=>c.status==="passed").length;
    const totalUnits = courses.reduce((s,c)=>s+c.units,0);
    const passedUnits = courses.filter(c=>c.status==="passed").reduce((s,c)=>s+c.units,0);

    html += `<div class="card" style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px">
        <span style="font-weight:700;font-size:13px">${g.icon} ${g.label}</span>
        <span style="font-size:11px;color:${passed===courses.length?"#16a34a":"#6b7280"}">${passed}/${courses.length} passed • ${passedUnits}/${totalUnits} units</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:5px">`;
    courses.forEach(c => {
      const sc = statusColor(c.status), sb = statusBg(c.status), si = statusIcon(c.status);
      const sel = STATE.selectedAudit===c.code;
      html += `<div class="audit-chip" onclick="toggleAudit('${c.code}')" style="background:${sb};border-color:${sel?sc:"transparent"};outline:${sel?"2px solid "+sc:"none"}">
        <div class="ac-code" style="color:${sc}">${si} ${c.code}</div>
        <div class="ac-info" style="color:${sc}">${c.units}u • ${c.grade?.num!==null?c.grade?.label||"—":"—"}</div>
      </div>`;
    });
    html += "</div>";

    if (STATE.selectedAudit) {
      const sel = courses.find(c=>c.code===STATE.selectedAudit);
      if (sel) {
        html += `<div class="detail-panel"><div style="display:flex;justify-content:space-between">
          <div>
            <div style="font-weight:700;font-size:14px">${sel.code} — ${sel.title}</div>
            <div style="font-size:12px;color:#6b7280;margin-top:3px">${sel.units} units | Year ${sel.year} Sem ${sel.sem} | <span style="color:${statusColor(sel.status)};font-weight:600">${sel.status.replace("_"," ")}</span></div>
            ${sel.prereq.length>0?`<div style="font-size:12px;margin-top:3px">Prerequisites: <b>${sel.prereq.join(", ")}</b></div>`:""}
            ${sel.coreq.length>0?`<div style="font-size:12px">Corequisites: <b>${sel.coreq.join(", ")}</b></div>`:""}
            ${sel.blockedBy?.length>0?`<div style="font-size:12px;color:#dc2626">Blocked by: <b>${sel.blockedBy.join(", ")}</b></div>`:""}
          </div>
          <button onclick="STATE.selectedAudit=null;renderTab('audit')" style="background:transparent;border:none;font-size:18px;cursor:pointer;color:#9ca3af">×</button>
        </div></div>`;
      }
    }
    html += "</div>";
  });

  html += `<div class="card" style="display:flex;flex-wrap:wrap;gap:10px;font-size:11px">
    ${[["✓","Passed","#16a34a"],["→","Available","#2563eb"],["🔒","Blocked","#9ca3af"],["✗","Failed","#dc2626"],["⏳","INC","#9333ea"],["↩","Dropped","#ea580c"],["◉","In Progress","#ca8a04"]].map(([i,l,c])=>`<span style="color:${c}">${i} ${l}</span>`).join("")}
  </div>`;

  el.innerHTML = html;
}

function toggleAudit(code) {
  STATE.selectedAudit = STATE.selectedAudit===code?null:code;
  renderTab("audit");
}

// ══════════════════════════════════════════════════════════════════
// SCHOLARSHIP ENHANCEMENT ENGINE
// ══════════════════════════════════════════════════════════════════

// Per-year rule sets — sourced from uploaded DOST SA + FAQ documents.
// Each year shares the core RA 7687 structure; deltas are noted per year.
const SCHOL_RULES = {
  "2023": {
    label: "DOST-SEI S&T Undergraduate Scholarship (RA 7687) — AY 2023 Cohort",
    gwaReq: { year1annual: 2.75, year2plus: 2.75, scale: "UP 1.00–5.00" },
    minLoad: 15,
    maxDropUnits: 3,
    stipend: { monthly: 7000, learningMaterials: 8000, tuitionCap: 35000 },
    gradeReqByYear: {
      1: "Annual GWA ≤ 2.75; no failing grade any semester",
      2: "Semestral GWA ≤ 2.75; no failing grades",
      3: "Passing grades in all subjects; regular load required",
      4: "Passing grades in all subjects; regular load required",
      5: "Passing grades in all subjects (graduating year)"
    },
    faq: [
      { q:"How many units can I drop per semester?", a:"A maximum of 3 academic units per semester. PE and NSTP units are not counted toward the drop limit." },
      { q:"Are PE and NSTP units counted for scholarship load purposes?", a:"No. PE and NSTP are excluded from academic load calculations for scholarship compliance." },
      { q:"Can I underload below 15 units?", a:"Only if it is your last graduating semester. Otherwise, underloading may trigger scholarship review." },
      { q:"What happens if I get an INC?", a:"You may still receive stipend during the suspended semester, but ensure you complete the subject. You may receive only partial allowance and get the other half after completion." },
      { q:"What is the GWA requirement?", a:"For Year 1: annual GWA ≤ 2.75 (no failing grade). For Year 2+: semestral GWA ≤ 2.75. For Year 3 onward: passing grades in all subjects." },
      { q:"Who should file a Letter of Appeal?", a:"As of January 2025, scholars who received academic deficiencies (dropped 4+ units, have INC, or did not meet grade requirement) do NOT need to write an appeal letter. Submit only the periodic requirements." },
      { q:"Can I shift programs?", a:"Yes, once during the scholarship period, at latest by the 1st semester of 3rd year. The new program must be an S&T priority course." },
      { q:"Where do I submit the periodical report?", a:"The UPD DOST Core Group posts the Submission Bin (Google Forms) in the batch Facebook groups. Answer on time to avoid stipend delays." },
    ],
  },
  "2024": {
    label: "DOST-SEI S&T Undergraduate Scholarship (RA 7687) — AY 2024 Cohort",
    gwaReq: { year1annual: 2.75, year2plus: 2.75, scale: "UP 1.00–5.00" },
    minLoad: 15,
    maxDropUnits: 3,
    stipend: { monthly: 8000, learningMaterials: 10000, tuitionCap: 40000 },
    gradeReqByYear: {
      1: "Annual GWA ≤ 2.75; no failing grade any semester",
      2: "Semestral GWA ≤ 2.75; no failing grades",
      3: "Passing grades in all subjects; regular load required",
      4: "Passing grades in all subjects; regular load required",
      5: "Passing grades in all subjects (graduating year)"
    },
    faq: [
      { q:"How many units can I drop per semester?", a:"A maximum of 3 academic units. PE and NSTP are not counted." },
      { q:"Are PE and NSTP counted for scholarship load?", a:"No — they are excluded from all academic load calculations." },
      { q:"Can I underload?", a:"Only during your last graduating semester." },
      { q:"What happens with an INC?", a:"Stipend may be partial. Ensure the subject is completed. Clarify with the UPD DOST Core Group." },
      { q:"What is the GWA requirement for 2024 cohort?", a:"Year 1: annual GWA ≤ 2.75. Year 2+: semestral GWA ≤ 2.75. Monthly stipend is ₱8,000 (increased from 2023 cohort)." },
      { q:"Who files a Letter of Appeal?", a:"As of January 2025, scholars with academic deficiencies submit only periodic requirements — no appeal letter needed." },
      { q:"Can I shift programs?", a:"Once only, at latest by 1st sem Year 3. New program must be S&T priority." },
      { q:"What is the tuition cap?", a:"Up to ₱40,000 per academic year for 2024 cohort scholars." },
    ],
  },
  "2025": {
    label: "DOST-SEI S&T Undergraduate Scholarship (RA 7687) — AY 2025 Cohort",
    gwaReq: { year1annual: 2.75, year2plus: 2.75, scale: "UP 1.00–5.00" },
    minLoad: 15,
    maxDropUnits: 3,
    stipend: { monthly: 8000, learningMaterials: 10000, tuitionCap: 40000 },
    gradeReqByYear: {
      1: "Annual GWA ≤ 2.75; no failing grade any semester",
      2: "Semestral GWA ≤ 2.75; no failing grades",
      3: "Passing grades in all subjects; regular load required",
      4: "Passing grades in all subjects; regular load required",
      5: "Passing grades in all subjects (graduating year)"
    },
    faq: [
      { q:"How many units can I drop per semester?", a:"3 units or less per regular semester. PE and NSTP are excluded from this count." },
      { q:"Are PE and NSTP units counted for dropping?", a:"No. PE and NSTP are non-academic and are not counted toward the drop limit." },
      { q:"Will I get stipend during a suspended semester due to INC?", a:"Yes, but you may receive only partial allowance. The other half is released after completing the subject. Clarify with the UPD DOST Core Group." },
      { q:"Can I underload below 15 units?", a:"Yes, only if it is genuinely your last graduating semester." },
      { q:"What happens if I shifted but haven't passed DOST requirements?", a:"Report to DOST-SEI and the UPD Diliman DOST Core Group immediately." },
      { q:"Who needs to write a Letter of Appeal?", a:"As of January 2025, scholars with academic deficiencies (dropped 4+ units, INC, or missed grade requirement) do NOT need an appeal letter. Submit only periodic requirements in the submission bin." },
      { q:"Where do I submit periodic reports?", a:"The UPD DOST Core Group posts the Submission Bin (Google Forms) in batch Facebook groups. Prepare your True Copy of Grades (TCG), Updated Curriculum, and LBP details." },
      { q:"Can I receive 100% financial assistance while on Partial Allowance?", a:"No. Continued with Partial Allowance means 100% tuition + other school fees, 50% monthly stipend, and 50% learning materials / connectivity allowance." },
      { q:"What is the tuition cap for 2025 scholars?", a:"Up to ₱40,000 per academic year; up to ₱10,000 for summer/midyear (if required by curriculum)." },
      { q:"What is the monthly stipend for 2025 scholars?", a:"₱8,000 per month during the regular academic year." },
      { q:"When is scholarship terminated?", a:"Two (2) grades of 5.00 in one semester automatically triggers termination with service obligation." },
      { q:"Can I shift programs?", a:"Yes, once and at latest by the 1st semester of your 3rd year. The new program must be an S&T priority course. Submit requirements to shift.transfer@sei.dost.gov.ph." },
    ],
  },
  "2026": {
    label: "DOST-SEI S&T Undergraduate Scholarship (RA 7687) — AY 2026 Cohort",
    gwaReq: { year1annual: 2.75, year2plus: 2.75, scale: "UP 1.00–5.00" },
    minLoad: 15,
    maxDropUnits: 3,
    stipend: { monthly: 8000, learningMaterials: 10000, tuitionCap: 40000 },
    gradeReqByYear: {
      1: "Annual GWA ≤ 2.75; no failing grade any semester",
      2: "Semestral GWA ≤ 2.75; no failing grades",
      3: "Passing grades in all subjects; regular load required",
      4: "Passing grades in all subjects; regular load required",
      5: "Passing grades in all subjects (graduating year)"
    },
    faq: [
      { q:"How many units can I drop per semester?", a:"3 units or less. PE and NSTP are not included in this count." },
      { q:"Are PE and NSTP counted for academic load?", a:"No — both are excluded from all load and drop calculations." },
      { q:"Can I underload?", a:"Only during your final graduating semester." },
      { q:"What if I get an INC?", a:"You may receive stipend but possibly only partial. Complete the subject promptly to restore full benefits." },
      { q:"What is the 2026 GWA requirement?", a:"Same as prior cohorts: ≤ 2.75 for UP scholars. Year 1 evaluated annually; Year 2+ evaluated each semester." },
      { q:"Who submits a Letter of Appeal?", a:"No appeal letter required for academic deficiencies as of January 2025. Submit periodic requirements only." },
      { q:"What are the contact emails for specific concerns?", a:"Financial: fa.concerns@sei.dost.gov.ph · Appeals: appeals@sei.dost.gov.ph · LOA: loa@sei.dost.gov.ph · Shifting: shift.transfer@sei.dost.gov.ph · General: scholarships@sei.dost.gov.ph" },
    ],
  },
};

// ══════════════════════════════════════════════════════════════════
// DOST-SEI OFFICIAL DECISION MATRIX
// Single source of truth for BOTH the automated evaluator
// (evaluateScholarshipStatus) and the Rules & Policy display tab —
// the two must never diverge. Sourced verbatim from the official
// rules supplied by the user (cohort-invariant; stipend/GWA/load
// numbers that DO vary per cohort remain in SCHOL_RULES above).
//
// "No previous deficiency" / "with previous deficiency" is detected
// automatically (see hasPriorDeficiency in evaluateScholarshipStatus)
// from: any previous 5.00, any previous unresolved 4.00/INC, any
// previous drop >3 units, any previous GWA miss, or any previously
// resolved deficiency of those kinds. It is never manually set.
// ══════════════════════════════════════════════════════════════════
const DOST_DECISION_MATRIX = {
  "First Year": [
    { trigger:"y1_underload",     status:"CONTINUED",  rule:"Underload of 3 units (dropped ≤3 units)", action:"No action required." },
    { trigger:"y1_drop_gt3",      status:"PROBATION",  rule:"Dropped more than 3 units", action:"Continued under Probation. Avoid excess dropping." },
    { trigger:"y1_gwa_small",     status:"PROBATION",  rule:"GWA below requirement by 0.0–0.10", action:"Continued under Probation. Improve GWA." },
    { trigger:"y1_gwa_big",       status:"PROBATION",  rule:"GWA below requirement by above 0.10", action:"Continued under Probation. Improve GWA urgently." },
    { trigger:"y1_inc_s1",        status:"PROBATION",  rule:"Grade(s) of 4.00/INC at the end of the First Semester", action:"Continued under Probation. Complete INC subject(s) promptly." },
    { trigger:"y1_fail_s1",       status:"PROBATION",  rule:"First grade of 5.00 at the end of the First Semester", action:"Continued under Probation. Retake the failed subject." },
    { trigger:"y1_combo_s2_nodef", status:"PROBATION",  rule:"Grade of 4.00/INC and one grade of 5.00 at the end of the Second Semester — no previous offense", action:"Continued under Probation. Retake the failed subject and complete the INC." },
    { trigger:"y1_combo_s2_def",   status:"PARTIAL",    rule:"Grade of 4.00/INC and one grade of 5.00 at the end of the Second Semester — with previous offense", action:"Continued with Partial Allowance. Comply with conditions; consult DOST-SEI." },
    { trigger:"y1_two_fails",     status:"TERMINATED", rule:"Two grades of 5.00 at the end of the Semester", action:"Terminated with Service Obligation. Consult DOST-SEI immediately." },
  ],
  "Second Year": [
    { trigger:"y2_gwa_nodef",     status:"PROBATION",  rule:"GWA below requirement — no previous deficiency", action:"Continued under Probation. Improve GWA." },
    { trigger:"y2_gwa_def",       status:"PARTIAL",    rule:"GWA below requirement — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y2_2inc_nodef",    status:"PROBATION",  rule:"Two grades of 4.00/INC in a term — no previous deficiency", action:"Continued under Probation. Complete INC subjects." },
    { trigger:"y2_2inc_def",      status:"PARTIAL",    rule:"Two grades of 4.00/INC in a term — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y2_1fail_nodef",   status:"PROBATION",  rule:"One grade of 5.00 — no previous deficiency", action:"Continued under Probation. Retake the failed subject." },
    { trigger:"y2_1fail_def",     status:"PARTIAL",    rule:"One grade of 5.00 — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y2_2nd_fail",      status:"PARTIAL",    rule:"Second grade of 5.00 (incurred in a different semester from the first)", action:"Continued with Partial Allowance. Comply with conditions; consult DOST-SEI." },
    { trigger:"y2_two_fails",     status:"TERMINATED", rule:"Two grades of 5.00 at the end of the Semester", action:"Terminated with Service Obligation. Consult DOST-SEI immediately." },
  ],
  "Third/Fourth Year": [
    { trigger:"y34_1inc_nodef",        status:"CONTINUED",  rule:"One grade of 4.00/INC — no previous deficiency", action:"No formal action required. Complete the INC subject." },
    { trigger:"y34_1inc_def",          status:"PROBATION",  rule:"One grade of 4.00/INC — with previous deficiency", action:"Continued under Probation. Complete the INC subject." },
    { trigger:"y34_2inc_nodef",        status:"PROBATION",  rule:"Two grades of 4.00/INC in a term — no previous deficiency", action:"Continued under Probation. Complete INC subjects." },
    { trigger:"y34_2inc_def",          status:"PARTIAL",    rule:"Two grades of 4.00/INC in a term — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y34_drop_nodef",        status:"PROBATION",  rule:"Dropped subjects exceeding 3 units — no previous deficiency", action:"Continued under Probation. Avoid excess dropping." },
    { trigger:"y34_drop_def",          status:"PARTIAL",    rule:"Dropped subjects exceeding 3 units — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y34_1fail_nodef",       status:"PROBATION",  rule:"One grade of 5.00 — no previous deficiency", action:"Continued under Probation. Retake the failed subject." },
    { trigger:"y34_1fail_def",         status:"PARTIAL",    rule:"One grade of 5.00 — with previous deficiency", action:"Continued with Partial Allowance. Comply with conditions." },
    { trigger:"y34_2nd_fail",          status:"PARTIAL",    rule:"Second grade of 5.00 (incurred in a different semester from the first)", action:"Continued with Partial Allowance. Comply with conditions; consult DOST-SEI." },
    { trigger:"y34_3rd_fail_unresolved", status:"TERMINATED", rule:"Third grade of 5.00 — has NOT yet passed the two previous failing grades incurred in two different semesters", action:"Terminated with Service Obligation. Consult DOST-SEI immediately." },
    { trigger:"y34_3rd_fail_resolved",   status:"PARTIAL",    rule:"Third grade of 5.00 — has already passed the two previous failing grades incurred in two different semesters", action:"Continued with Partial Allowance. Comply with conditions; consult DOST-SEI." },
    { trigger:"y34_two_fails",         status:"TERMINATED", rule:"Two grades of 5.00 at the end of the Semester", action:"Terminated with Service Obligation. Consult DOST-SEI immediately." },
    { trigger:"y34_good_standing",     status:"CONTINUED",  rule:"Passing all academic deficiencies (good standing)", action:"Continue current academic standing." },
  ],
  "Graduating Year": [
    { trigger:"grad_1fail",         status:"PROBATION", isGradYear:true, rule:"First grade of 5.00/F", action:"Continued to Submit Grades — comply with DOST-SEI submission requirements." },
    { trigger:"grad_2inc",          status:"PROBATION", isGradYear:true, rule:"Two grades of 4.00/INC", action:"Continued to Submit Grades — comply with DOST-SEI submission requirements." },
    { trigger:"grad_2nd_fail_pass", status:"PROBATION", isGradYear:true, rule:"Second grade of 5.00/F, but passed the previous failing grade", action:"Continued to Submit Grades — comply with DOST-SEI submission requirements." },
    { trigger:"grad_3rd_fail",      status:"PROBATION", isGradYear:true, rule:"Third grade of 5.00/F", action:"Continued to Submit Grades — comply with DOST-SEI submission requirements." },
    { trigger:"grad_two_fails",     status:"PROBATION", isGradYear:true, rule:"Two grades of 5.00 at the end of the Semester", action:"Continued to Submit Grades — comply with DOST-SEI submission requirements." },
  ],
};
function dostRule(yearLabel, trigger) {
  const found = (DOST_DECISION_MATRIX[yearLabel]||[]).find(r => r.trigger === trigger);
  return found || { trigger, status:"PROBATION", rule:trigger, action:"" };
}

// ── SCHOLARSHIP STATUS EVALUATOR ──────────────────────────────────
// Evaluates current status purely from the student's grade records,
// against DOST_DECISION_MATRIX above. "Year Enjoyed" and "Previous
// Deficiency" are both fully automatic — no manual selection is used
// anywhere in this function.
// Returns {status, reason, rule, action, semData, semStatuses,
//          yearEnjoyed, prevDeficiency, gwa, ...}
function evaluateScholarshipStatus(useSimMode) {
  const rules = SCHOL_RULES[STATE.scholarshipYear] || SCHOL_RULES["2025"];
  const gwaReq = rules.gwaReq.year1annual; // 2.75 for all current cohorts

  if (!STATE.scholarship) {
    return { status:"N/A", reason:"Not a DOST Scholar (disabled in settings).", rule:"N/A", action:"Enable scholarship in settings if applicable.", semData:[], semStatuses:[], yearEnjoyed:1, prevDeficiency:false };
  }

  // ── SEMESTER DATA: sourced from Grade Manager layout ─────────────
  // Scholarship Year 1 = the 1st AY in PLAN_STATE.years (Planner layout)
  // or the 1st curriculum year (default layout). Graduating Year = the
  // LAST entry in PLAN_STATE.years — automatically updates whenever the
  // user adds or removes a year in the Planner. No manual flag required.
  // A semester is "reached" the moment ANY single course in it has a
  // grade or DRP on record.
  const semData = [];
  const getOrigG = code => useSimMode ? effectiveGrade(code) : (STATE.grades[code]||{label:"In Progress",num:null});
  const hasSemMap = Object.keys(STATE.semesterMap||{}).length > 0;

  // Build the ordered list of AY groups that define scholarship years.
  // Each group has an id (used to look up Grade Manager buckets) and an
  // ordered list of semesters within that AY.
  let ayGroups; // [{id, displayLabel, sems:[{semStr, semIdx}]}]
  if (hasSemMap) {
    // Planner layout: use PLAN_STATE.years as the canonical AY sequence.
    ayGroups = PLAN_STATE.years.map(yr => ({
      id: yr.ay,
      displayLabel: yr.ay,
      sems: (yr.sems || ["1st","2nd"]).map((s, si) => ({semStr: s, semIdx: si + 1})),
    }));
  } else {
    // Default layout: derive from distinct curriculum years in COURSES.
    const seen = new Set();
    const years = [];
    COURSES.forEach(c => { if (!seen.has(c.year)) { seen.add(c.year); years.push(c.year); } });
    years.sort((a,b) => a - b);
    ayGroups = years.map(yr => ({
      id: `y${yr}`,
      displayLabel: `Year ${yr}`,
      sems: [1,2].map(s => ({semStr: s === 1 ? "1st" : "2nd", semIdx: s})),
    }));
  }

  const totalScholYears = ayGroups.length;
  // Build bucket map once (not inside the loop) for O(1) lookups.
  const bucketMap = {};
  buildSemBuckets().forEach(b => { bucketMap[b.key] = b; });

  for (let scholYear = 1; scholYear <= totalScholYears; scholYear++) {
    const ayGroup = ayGroups[scholYear - 1];
    const isGradYear = (scholYear === totalScholYears);

    for (const {semStr, semIdx} of ayGroup.sems) {
      // Look up the matching Grade Manager bucket for this AY + semester.
      const bucketKey = hasSemMap ? `${ayGroup.id}||${semStr}` : `${ayGroup.id}s${semIdx}`;
      const bucket = bucketMap[bucketKey];
      if (!bucket) continue;

      // Only regular curriculum course entries; retakes and customs are
      // excluded (retakes are placed independently and don't redefine
      // which scholarship year a semester belongs to).
      const semCourses = bucket.entries
        .filter(e => e.type === "course")
        .map(e => e.course);

      // Reached if ANY course has a grade or DRP.
      const withRecord = semCourses.filter(c => getOrigG(c.code).label !== "In Progress");
      if (withRecord.length < 1) continue;

      const graded = withRecord.filter(c => getOrigG(c.code).label !== "DRP");
      // Fails/INCs use the original end-of-semester grade — a later
      // successful retake does not retroactively erase the historical
      // 5.00/4.00 for DOST evaluation purposes. Retake resolution is
      // only checked separately where the matrix asks for it explicitly.
      const fails5 = graded.filter(c => getOrigG(c.code).num === 5.00);
      const incs4  = graded.filter(c => getOrigG(c.code).num === 4.00);
      // PE/NSTP excluded from drop-unit count (per DOST FAQ).
      const droppedU = withRecord
        .filter(c => getOrigG(c.code).label === "DRP" && !["pe","nstp"].includes(c.type))
        .reduce((s,c) => s + c.units, 0);
      const droppedPENSTP = withRecord
        .filter(c => getOrigG(c.code).label === "DRP" && ["pe","nstp"].includes(c.type))
        .reduce((s,c) => s + c.units, 0);

      // Semestral GWA — original grades, academic courses only (PE/NSTP out).
      let tp = 0, tu = 0;
      graded.forEach(c => {
        if (["pe","nstp"].includes(c.type)) return;
        const g = getOrigG(c.code);
        if (g.num === null) return;
        tp += g.num * c.units; tu += c.units;
      });
      const semGwa = tu > 0 ? tp / tu : null;

      semData.push({
        scholYear,                    // scholarship year number (1-indexed by AY order)
        semIdx,                       // semester within the AY (1 = 1st, 2 = 2nd)
        isGradYear,                   // true ⟺ this AY is the last in PLAN_STATE.years
        label: bucket.label,          // display label from Grade Manager (e.g. "AY 2025-2026 — 1st Semester")
        fails5: fails5.map(c => c.code),
        incs4:  incs4.map(c => c.code),
        droppedU, droppedPENSTP, semGwa,
        gradedCount: graded.length,
      });
    }
  }

  if (semData.length === 0) {
    return {
      status:"CONTINUED", gwa:null, semData:[], semStatuses:[],
      reason:"No completed semesters yet. Scholarship is currently active.",
      rule:rules.gradeReqByYear[1],
      action:"Maintain GWA ≤ 2.75 and avoid failing grades.",
      yearEnjoyed:1, prevDeficiency:false,
    };
  }

  const STATUS_RANK = {CONTINUED:0,PROBATION:1,PARTIAL:2,TERMINATED:3};
  let finalStatus = "CONTINUED";
  let triggerSem = null;
  let matchedPolicy = null;
  let triggerHadPriorDeficiency = false;
  const semStatuses = []; // parallel to semData — single source of truth for the per-semester table

  // hasPriorDeficiency: fully automatic, recomputed fresh from current
  // grades every call (nothing persisted). Becomes true the moment a
  // semester's OWN resulting status actually exceeds CONTINUED — i.e.
  // a rule was genuinely violated and consequences applied — and stays
  // true for the rest of THIS pass. A benign event that the matrix
  // explicitly resolves to Continued (e.g. a single 4.00/INC alone in
  // Year 1 Sem 2, or a first single INC in Year 3/4 with no prior
  // deficiency) does NOT set it, since nothing was actually penalized.
  // Because this is a full fresh recompute, clearing a grade that
  // caused a real deficiency naturally un-sets the flag for whatever
  // comes after it, and if it was the only deficiency on record, the
  // flag (and status) return to false/Continued entirely.
  let hasPriorDeficiency = false;

  // Chronological fail history — used to compute first/second/third
  // grade of 5.00 ordinals and whether prior fails are now resolved.
  const failHistory = []; // [{code}]
  let autoYearEnjoyed = 1;

  for (let sdIdx = 0; sdIdx < semData.length; sdIdx++) {
    const sd = semData[sdIdx];
    const semYr   = sd.scholYear;  // scholarship year number
    const semIdx  = sd.semIdx;     // 1 = 1st semester, 2 = 2nd semester
    const isGradSem = sd.isGradYear;
    const f = sd.fails5.length, inc = sd.incs4.length, drp = sd.droppedU, gwa = sd.semGwa;

    autoYearEnjoyed = isGradSem ? 5 : Math.min(semYr, 4);

    // Ordinal of a new fail this semester, and how many prior fails
    // (from earlier semesters) are still unresolved via retake.
    const priorFails = failHistory.slice();
    const priorFailCount = priorFails.length;
    const unresolvedPriorCount = priorFails.filter(pf => getLatestValidAttempt(pf.code).grade.num === 5.00).length;
    const newFailOrdinal = priorFailCount + 1;

    const candidates = []; // all rules that match this semester; worst wins
    const push = (r) => candidates.push({status:r.status, trigger:r.trigger, rule:r.rule, action:r.action, isGradYear:r.isGradYear});

    if (isGradSem) {
      // ── GRADUATING YEAR ──────────────────────────────────────────
      // All deficiency outcomes collapse to "Continued to Submit Grades".
      if (f >= 1 || inc >= 2) push(dostRule("Graduating Year","grad_1fail"));
    }

    else if (semYr === 1) {
      // ── FIRST YEAR ───────────────────────────────────────────────
      if (f >= 2) {
        push(dostRule("First Year","y1_two_fails"));
      } else {
        // Combo: a 4.00/INC AND a 5.00 together in the 2nd semester only.
        const comboS2 = (f === 1 && inc >= 1 && semIdx === 2);
        if (comboS2) {
          push(hasPriorDeficiency ? dostRule("First Year","y1_combo_s2_def") : dostRule("First Year","y1_combo_s2_nodef"));
        } else if (semIdx === 1) {
          // 1st semester only: single fail or single 4.00/INC alone = Probation.
          if (f === 1)   push(dostRule("First Year","y1_fail_s1"));
          if (inc >= 1)  push(dostRule("First Year","y1_inc_s1"));
        }
        // 2nd semester, NOT a combo: single fail alone OR single INC alone
        // → no rule fires; stays Continued. Only the AND combo escalates.
      }
      if (drp > 3) push(dostRule("First Year","y1_drop_gt3"));
      if (gwa !== null && gwa > gwaReq) push(gwa > gwaReq + 0.10 ? dostRule("First Year","y1_gwa_big") : dostRule("First Year","y1_gwa_small"));
      if (candidates.length === 0) push(dostRule("Third/Fourth Year","y34_good_standing"));
    }

    else if (semYr === 2) {
      // ── SECOND YEAR ──────────────────────────────────────────────
      if (f >= 2) {
        push(dostRule("Second Year","y2_two_fails"));
      } else {
        if (f === 1) {
          if (newFailOrdinal >= 2) push(dostRule("Second Year","y2_2nd_fail"));
          else push(hasPriorDeficiency ? dostRule("Second Year","y2_1fail_def") : dostRule("Second Year","y2_1fail_nodef"));
        }
        if (inc >= 2) push(hasPriorDeficiency ? dostRule("Second Year","y2_2inc_def") : dostRule("Second Year","y2_2inc_nodef"));
        if (gwa !== null && gwa > gwaReq) push(hasPriorDeficiency ? dostRule("Second Year","y2_gwa_def") : dostRule("Second Year","y2_gwa_nodef"));
      }
      if (candidates.length === 0) push(dostRule("Third/Fourth Year","y34_good_standing"));
    }

    else {
      // ── THIRD, FOURTH YEAR AND BEYOND ────────────────────────────
      if (f >= 2) {
        push(dostRule("Third/Fourth Year","y34_two_fails"));
      } else {
        if (f === 1) {
          if (newFailOrdinal === 2) {
            push(dostRule("Third/Fourth Year","y34_2nd_fail"));
          } else if (newFailOrdinal >= 3) {
            push(unresolvedPriorCount >= 1
              ? dostRule("Third/Fourth Year","y34_3rd_fail_unresolved")
              : dostRule("Third/Fourth Year","y34_3rd_fail_resolved"));
          } else {
            push(hasPriorDeficiency ? dostRule("Third/Fourth Year","y34_1fail_def") : dostRule("Third/Fourth Year","y34_1fail_nodef"));
          }
        }
        if (inc === 1) {
          push(hasPriorDeficiency ? dostRule("Third/Fourth Year","y34_1inc_def") : dostRule("Third/Fourth Year","y34_1inc_nodef"));
        } else if (inc >= 2) {
          push(hasPriorDeficiency ? dostRule("Third/Fourth Year","y34_2inc_def") : dostRule("Third/Fourth Year","y34_2inc_nodef"));
        }
        if (drp > 3) push(hasPriorDeficiency ? dostRule("Third/Fourth Year","y34_drop_def") : dostRule("Third/Fourth Year","y34_drop_nodef"));
        if (gwa !== null && gwa > gwaReq) push(hasPriorDeficiency ? dostRule("Third/Fourth Year","y34_gwa_def") : dostRule("Third/Fourth Year","y34_gwa_nodef"));
      }
      if (candidates.length === 0) push(dostRule("Third/Fourth Year","y34_good_standing"));
    }

    // Worst candidate this semester wins.
    let semStatus = "CONTINUED", semPolicy = null;
    if (candidates.length) {
      const maxRank = Math.max(...candidates.map(c => STATUS_RANK[c.status]));
      const worst = candidates.filter(c => STATUS_RANK[c.status] === maxRank);
      semStatus = worst[0].status;
      semPolicy = worst[0];
    }
    semStatuses.push({status: semStatus, isGradYear: !!semPolicy?.isGradYear, rule: semPolicy?.rule, action: semPolicy?.action});

    // Capture worst status across the whole timeline.
    if (STATUS_RANK[semStatus] > STATUS_RANK[finalStatus]) {
      finalStatus = semStatus;
      triggerSem = sd;
      matchedPolicy = semPolicy;
      triggerHadPriorDeficiency = hasPriorDeficiency;
    }

    // Update sticky prior-deficiency flag — but ONLY when a rule was
    // actually violated and the status changed as a result. Several
    // matrix rules (a single 4.00/INC or 5.00 alone in Year 1 Sem 2; a
    // single 4.00/INC in Year 3/4 with no prior deficiency) explicitly
    // resolve to CONTINUED — meaning nothing was actually penalized —
    // so they must NOT count as establishing a "previous deficiency"
    // for later semesters. Using the semester's OWN resulting status
    // (rather than the raw grade event) is what makes this correct.
    // Graduating year is excluded — its outcomes don't carry over.
    if (!isGradSem && semStatus !== "CONTINUED") {
      hasPriorDeficiency = true;
    }

    // Record new fails into chronological history for ordinal tracking.
    sd.fails5.forEach(code => failHistory.push({code}));
  }

  // ── BUILD REASON STRING ──────────────────────────────────────────
  const isGradYearPolicy = matchedPolicy?.isGradYear === true;
  let reason = "", action = "", rule = "";

  if (finalStatus === "CONTINUED") {
    reason = "No scholarship violations detected. All grade requirements are currently satisfied.";
    rule   = rules.gradeReqByYear[Math.min(autoYearEnjoyed,5)] || "Passing grades in all subjects.";
    action = "Continue current academic standing. Maintain GWA ≤ 2.75 each semester.";
  } else if (matchedPolicy) {
    rule   = matchedPolicy.rule;
    action = matchedPolicy.action;
    if (isGradYearPolicy) {
      reason = "Deficiency incurred in the Graduating Year. Status: Continued to Submit Grades — submit all required documents to DOST-SEI.";
    } else if (finalStatus === "TERMINATED") {
      reason = `Scholarship termination condition triggered: ${matchedPolicy.rule} (Scholarship Year ${triggerSem?.scholYear}, ${triggerSem?.label}).`;
    } else if (finalStatus === "PROBATION") {
      const issues = [];
      if (triggerSem?.fails5?.length)  issues.push(`${triggerSem.fails5.length} failing grade(s) of 5.00 (${triggerSem.fails5.join(", ")})`);
      if (triggerSem?.incs4?.length)   issues.push(`${triggerSem.incs4.length} grade(s) of 4.00/INC (${triggerSem.incs4.join(", ")})`);
      if (triggerSem?.droppedU > 3)    issues.push(`${triggerSem.droppedU} units dropped (>3 limit)`);
      if (triggerSem?.semGwa > gwaReq) issues.push(`GWA ${triggerSem.semGwa.toFixed(2)} (required ≤ ${gwaReq})`);
      reason = `Scholarship condition violated in Scholarship Year ${triggerSem?.scholYear} (${triggerSem?.label}): ${issues.join("; ")}.`;
    } else if (finalStatus === "PARTIAL") {
      reason = `Scholar is eligible for reduced benefits. Trigger: ${matchedPolicy.rule} — previous deficiency on record: ${triggerHadPriorDeficiency?"Yes":"No"}.`;
    }
  }

  const currentGwa = computeGWA(null, useSimMode);

  return {
    status: finalStatus,
    gwa: currentGwa,
    reason, rule, action,
    semData,
    semStatuses,
    triggerSem,
    matchedPolicy,
    rules,
    yearEnjoyed: autoYearEnjoyed,
    prevDeficiency: hasPriorDeficiency,
    lastEvalDate: new Date().toLocaleDateString("en-PH",{year:"numeric",month:"long",day:"numeric"}),
  };
}

// ── STATUS UI HELPERS ─────────────────────────────────────────────
const SCHOL_STATUS_UI = {
  CONTINUED: {label:"Continued",color:"#16a34a",bg:"#dcfce7",border:"#86efac",icon:"✅"},
  PROBATION: {label:"Continued under Probation",color:"#d97706",bg:"#fef3c7",border:"#fde047",icon:"⚠️"},
  PARTIAL:   {label:"Continued with Partial Allowance",color:"#ea580c",bg:"#fff7ed",border:"#fdba74",icon:"🔶"},
  TERMINATED:{label:"Terminated",color:"#dc2626",bg:"#fee2e2",border:"#fca5a5",icon:"🚫"},
  "N/A":     {label:"Not Applicable",color:"#6b7280",bg:"#f3f4f6",border:"#d1d5db",icon:"—"},
};

function scholSubTab(tab) {
  STATE.scholarSubTab = tab;
  saveState();
  renderTab("scholarship");
}
function setScholarYear(yr) {
  STATE.scholarshipYear = yr;
  saveState();
  renderTab("scholarship");
}

// ══════════════════════════════════════════════════════════════════
// END SCHOLARSHIP ENGINE — renderScholarship follows
// ══════════════════════════════════════════════════════════════════

function renderScholarship(el) {
  // Normalize type — migrate old values (CHED/Private) to Custom
  let scholType = STATE.scholarshipType || (STATE.scholarship ? "DOST" : "None");
  if (scholType !== "DOST" && scholType !== "Custom" && scholType !== "None") {
    scholType = "Custom";
    STATE.scholarshipType = "Custom";
  }
  const isNone = scholType === "None";
  const isDOST = scholType === "DOST";
  const isCustom = scholType === "Custom";

  const customName = STATE.customScholarshipName || "";
  const displayName = isCustom ? (customName || "Custom Scholarship") : (isDOST ? "DOST-SEI RA 7687" : "No Scholarship");

  // Guard: only evaluate if DOST, otherwise use N/A
  let eval_ = { status:"N/A", reason:"", rule:"", action:"", semData:[], semStatuses:[], lastEvalDate:"", yearEnjoyed:1, prevDeficiency:false };
  try {
    if (isDOST) eval_ = evaluateScholarshipStatus(false);
  } catch(e) { /* safe fallback */ }

  const gwa = computeGWA();
  const rules = SCHOL_RULES[STATE.scholarshipYear] || SCHOL_RULES["2025"];
  const sui = (isNone || isCustom) ? SCHOL_STATUS_UI["N/A"] : (SCHOL_STATUS_UI[eval_.status] || SCHOL_STATUS_UI["N/A"]);
  const subTab = STATE.scholarSubTab || "status";

  // ── HEADER
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px">
    <div class="section-title" style="margin:0">🏆 Scholarship Monitor</div>
    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <label style="font-size:11px;color:#6b7280;font-weight:600">Scholarship:</label>
      <select onchange="setScholarshipType(this.value)" style="padding:5px 10px;border-radius:8px;border:1px solid #d1d5db;font-size:12px;font-weight:700;color:#7B1113">
        ${["DOST","Custom","None"].map(t=>`<option value="${t}" ${scholType===t?"selected":""}>${t==="None"?"No Scholarship":t==="Custom"?(customName||"Custom Scholarship"):t}</option>`).join("")}
      </select>
      ${isDOST ? `
      <label style="font-size:11px;color:#6b7280;font-weight:600">Year:</label>
      <select onchange="setScholarYear(this.value)" style="padding:5px 10px;border-radius:8px;border:1px solid #d1d5db;font-size:12px;font-weight:700;color:#7B1113">
        ${["2023","2024","2025","2026"].map(y=>`<option value="${y}" ${STATE.scholarshipYear===y?"selected":""}>${y} Cohort</option>`).join("")}
      </select>` : ""}
      <span class="status-badge" style="background:${sui.bg};color:${sui.color};border:1px solid ${sui.border}">${sui.icon} ${isNone?"Monitoring Disabled":isCustom?(customName||"Custom"):sui.label}</span>
    </div>
  </div>`;

  // ── SETTINGS CARD always visible at top for recovery/reconfiguration
  html += `<div class="card" style="margin-bottom:10px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px">
      <div style="font-weight:700;font-size:13px">⚙️ Scholarship Settings</div>
      <button onclick="resetScholarshipConfig()" style="padding:4px 12px;border-radius:7px;border:1px solid #fca5a5;background:transparent;color:#dc2626;cursor:pointer;font-size:11px;font-weight:600;font-family:inherit">↺ Reset Configuration</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px">
      <div>
        <div style="font-size:12px;color:#6b7280;margin-bottom:5px">Scholarship Type</div>
        <select onchange="setScholarshipType(this.value)" style="padding:5px 8px;border-radius:7px;border:1px solid #d1d5db;font-size:12px;width:100%">
          ${["DOST","Custom","None"].map(t=>`<option value="${t}" ${scholType===t?"selected":""}>${t==="None"?"No Scholarship":t}</option>`).join("")}
        </select>
      </div>
      ${isCustom ? `<div>
        <div style="font-size:12px;color:#6b7280;margin-bottom:5px">Scholarship Name</div>
        <input id="custom-schol-name" value="${customName}" placeholder="e.g. SM Foundation"
          style="padding:5px 8px;border-radius:7px;border:1px solid #d1d5db;font-size:12px;width:100%;font-family:inherit"
          oninput="setCustomScholarshipName(this.value)"
          onblur="saveState();renderTab('scholarship')">
      </div>` : ""}
      ${isDOST ? `<div>
        <div style="font-size:12px;color:#6b7280;margin-bottom:5px">Year in scholarship <span style="color:#9ca3af">(auto-detected)</span></div>
        <div style="padding:5px 8px;border-radius:7px;border:1px solid #e5e7eb;background:#f8fafc;font-size:12px;font-weight:600;color:#374151">${eval_.yearEnjoyed===5?"Graduating Year":"Year "+eval_.yearEnjoyed}</div>
      </div>
      <div>
        <div style="font-size:12px;color:#6b7280;margin-bottom:5px">Previous deficiency? <span style="color:#9ca3af">(auto-detected)</span></div>
        <div style="padding:5px 8px;border-radius:7px;border:1px solid ${eval_.prevDeficiency?"#fca5a5":"#e5e7eb"};background:${eval_.prevDeficiency?"#fef2f2":"#f8fafc"};font-size:12px;font-weight:600;color:${eval_.prevDeficiency?"#dc2626":"#374151"}">${eval_.prevDeficiency?"Yes":"No"}</div>
      </div>` : ""}
    </div>
    ${isDOST ? `<div style="font-size:10px;color:#9ca3af;margin-top:8px">Both values are derived automatically from your grade records and recompute live — Previous Deficiency turns on only once a semester's status has genuinely been elevated above Continued, and turns back off if you edit grades so no such semester remains.</div>` : ""}
  </div>`;

  // ── CUSTOM SCHOLARSHIP VIEW
  if (isCustom) {
    const name = customName || "Custom Scholarship";
    html += `<div style="background:#f8fafc;border:1.5px dashed #d1d5db;border-radius:12px;padding:28px 24px;text-align:center;margin-bottom:14px">
      <div style="font-size:28px;margin-bottom:8px">🎓</div>
      <div style="font-size:15px;font-weight:700;color:#374151;margin-bottom:6px">Current Scholarship: ${name}</div>
      <div style="font-size:12px;color:#6b7280;margin-bottom:10px;max-width:400px;margin-left:auto;margin-right:auto">DOST-specific status evaluation is hidden for custom scholarships. You can still use Grade Manager, Planner, and What-If to manage your academics.</div>
      <div style="font-size:11px;color:#9ca3af">To enable DOST tracking, switch the scholarship type to <b>DOST</b> above. To disable monitoring, select <b>No Scholarship</b>.</div>
    </div>`;
    el.innerHTML = html;
    return;
  }

  // ── NO SCHOLARSHIP VIEW
  if (isNone) {
    html += `<div style="background:#f8fafc;border:1.5px dashed #d1d5db;border-radius:12px;padding:28px 24px;text-align:center;margin-bottom:14px">
      <div style="font-size:28px;margin-bottom:8px">🎓</div>
      <div style="font-size:15px;font-weight:700;color:#374151;margin-bottom:6px">No Active Scholarship Selected</div>
      <div style="font-size:12px;color:#6b7280;margin-bottom:16px;max-width:400px;margin-left:auto;margin-right:auto">Scholarship monitoring is disabled. Select a type above to enable automatic status evaluation, FAQ, and rule tracking.</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        ${["DOST","Custom"].map(t=>`<button onclick="setScholarshipType('${t}')" style="padding:7px 16px;border-radius:8px;border:1px solid #7B1113;background:#fff;color:#7B1113;cursor:pointer;font-size:12px;font-weight:700;font-family:inherit">${t}</button>`).join("")}
      </div>
    </div>
    <div class="card" style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:8px;color:#374151">Available While No Scholarship Is Selected</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:12px;color:#6b7280">
        ${["Scholarship Settings","Scholarship FAQ","Scholarship Simulator","Status Viewer","What-If Analysis","Rule Viewer"].map(f=>`<div style="padding:5px 8px;background:#f8fafc;border-radius:6px;border:1px solid #e5e7eb">✓ ${f}</div>`).join("")}
      </div>
      <div style="font-size:11px;color:#9ca3af;margin-top:8px">Your scholarship data, settings, and simulations are preserved. Switch back to any scholarship type at any time.</div>
    </div>`;

    if (subTab === "faq") {
      html += `<div class="card"><div style="font-weight:700;font-size:13px;margin-bottom:10px">FAQ Preview <span class="faq-year-badge">${STATE.scholarshipYear} Cohort</span></div>
        ${rules.faq.slice(0,4).map((f,i)=>`<div class="faq-item"><div class="faq-q">Q${i+1}. ${f.q}</div><div class="faq-a">${f.a}</div></div>`).join("")}
        <div style="text-align:center;padding:10px;font-size:11px;color:#6b7280">Select a scholarship to see full FAQ for your cohort.</div>
      </div>`;
    }
    el.innerHTML = html;
    return;
  }

  // ── DOST: Sub-tabs
  html += `<div class="schol-tabs">
    ${[["status","📊 Status"],["details","🗂️ Details"],["faq","❓ FAQ"],["rules","📋 Rules & Policy"]].map(([id,label])=>
      `<button class="schol-tab-btn ${subTab===id?"active":""}" onclick="scholSubTab('${id}')">${label}</button>`
    ).join("")}
  </div>`;

  // ══ SUB-TAB: STATUS
  if (subTab === "status") {
    const isGradYearResult = eval_.matchedPolicy?.isGradYear === true;
    const displaySui = isGradYearResult
      ? {label:"Continued to Submit Grades",color:"#0369a1",bg:"#e0f2fe",border:"#7dd3fc",icon:"📋"}
      : sui;
    html += `<div class="status-card" style="background:${displaySui.bg};border-color:${displaySui.border}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:11px;font-weight:700;color:${displaySui.color};margin-bottom:4px;text-transform:uppercase;letter-spacing:.5px">Current Status — ${rules.label.split("—")[1]?.trim()||""}</div>
          <div style="font-size:22px;font-weight:800;color:${displaySui.color};margin-bottom:6px">${displaySui.icon} ${displaySui.label}</div>
          <div style="font-size:12px;color:#374151;line-height:1.6;max-width:540px">${eval_.reason}</div>
          ${eval_.status==="PARTIAL"?`<div style="margin-top:10px;background:rgba(255,255,255,.7);border-radius:8px;padding:10px 12px;border:1px solid ${displaySui.border}">
            <div style="font-size:11px;font-weight:700;color:${displaySui.color};margin-bottom:6px">💰 Partial Allowance — Financial Breakdown</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px">
              <div><div style="color:#6b7280">Monthly Stipend Released</div><b style="color:#16a34a">₱${(rules.stipend.monthly*0.5).toLocaleString()}/mo</b> <span style="color:#9ca3af">(50%)</span></div>
              <div><div style="color:#6b7280">Monthly Stipend On Hold</div><b style="color:#dc2626">₱${(rules.stipend.monthly*0.5).toLocaleString()}/mo</b> <span style="color:#9ca3af">(50%)</span></div>
              <div><div style="color:#6b7280">Learning Materials Released</div><b style="color:#16a34a">₱${(rules.stipend.learningMaterials*0.5).toLocaleString()}</b> <span style="color:#9ca3af">(50%)</span></div>
              <div><div style="color:#6b7280">Learning Materials On Hold</div><b style="color:#dc2626">₱${(rules.stipend.learningMaterials*0.5).toLocaleString()}</b> <span style="color:#9ca3af">(50%)</span></div>
              <div style="grid-column:span 2"><div style="color:#6b7280">Tuition &amp; School Fees</div><b style="color:#16a34a">100% covered</b></div>
              <div style="grid-column:span 2;background:#fef3c7;border-radius:5px;padding:5px 8px;margin-top:3px"><b style="color:#92400e">Release Condition:</b> Resolve deficient subject(s). Held amounts released once deficiency is cleared and confirmed by DOST-SEI.</div>
            </div>
          </div>`:""}
        </div>
        <div style="text-align:right;min-width:100px">
          <div style="font-size:10px;color:#6b7280">Current GWA</div>
          <div style="font-size:28px;font-weight:800;color:${gwa&&gwa<=2.75?"#16a34a":"#dc2626"}">${gwa?gwa.toFixed(2):"—"}</div>
          <div style="font-size:10px;color:#6b7280">Requirement: ≤ ${rules.gwaReq.year1annual}</div>
        </div>
      </div>
    </div>`;

    html += `<div class="card" style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;color:#374151;margin-bottom:10px">📋 Status Explanation</div>
      <div class="rule-row">
        <span class="rule-label">Reason</span>
        <span class="rule-value">${eval_.reason}</span>
      </div>
      <div class="rule-row">
        <span class="rule-label">Applicable Rule</span>
        <span class="rule-value rule-highlight">${eval_.rule||"—"}</span>
      </div>
      <div class="rule-row">
        <span class="rule-label">Recommended Action</span>
        <span class="rule-value">${eval_.action||"—"}</span>
      </div>
      <div class="rule-row">
        <span class="rule-label">Grade Requirement (Year ${Math.min(eval_.yearEnjoyed,5)})</span>
        <span class="rule-value">${rules.gradeReqByYear[Math.min(eval_.yearEnjoyed,5)]||"—"}</span>
      </div>
      <div class="rule-row">
        <span class="rule-label">Last Evaluated</span>
        <span class="rule-value">${eval_.lastEvalDate} (auto-updated on grade change)</span>
      </div>
    </div>`;

    if (eval_.semData.length > 0) {
      html += `<div class="card" style="margin-bottom:10px">
        <div style="font-weight:700;font-size:13px;color:#374151;margin-bottom:10px">📊 Semester-by-Semester Evaluation</div>
        <div style="overflow-x:auto">
          <table class="dost-table">
            <thead><tr><th>Semester</th><th>Sem GWA</th><th>Fails (5.00)</th><th>INC (4.00)</th><th>Dropped</th><th>Status</th></tr></thead>
            <tbody>
              ${eval_.semData.map((sd,sdIdx)=>{
                // Per-row status comes directly from the evaluator's semStatuses —
                // the SAME engine that computes the overall result above, so this
                // table can never drift out of sync with the official decision matrix.
                const rowResult = eval_.semStatuses[sdIdx] || {status:"CONTINUED"};
                const rsui = rowResult.isGradYear
                  ? {label:"Continued to Submit Grades",color:"#0369a1",bg:"#e0f2fe",border:"#7dd3fc",icon:"📋"}
                  : (SCHOL_STATUS_UI[rowResult.status]||SCHOL_STATUS_UI["CONTINUED"]);
                return `<tr>
                  <td>
                    <div style="font-size:11px;font-weight:600;color:#374151">${sd.label}</div>
                    <div style="font-size:10px;color:#9ca3af">Scholarship Year ${sd.scholYear}${sd.isGradYear?" · <b style='color:#0369a1'>Graduating Year</b>":""}</div>
                  </td>
                  <td style="font-weight:600;color:${sd.semGwa&&sd.semGwa<=2.75?"#16a34a":"#dc2626"}">${sd.semGwa?sd.semGwa.toFixed(2):"—"}</td>
                  <td style="color:${sd.fails5.length?"#dc2626":"#374151"}">${sd.fails5.length?sd.fails5.join(", "):"None"}</td>
                  <td style="color:${sd.incs4.length?"#9333ea":"#374151"}">${sd.incs4.length?sd.incs4.join(", "):"None"}</td>
                  <td style="color:${sd.droppedU>3?"#dc2626":"#374151"}">${sd.droppedU}u</td>
                  <td><span class="status-badge" style="background:${rsui.bg};color:${rsui.color};border:1px solid ${rsui.border}" title="${rowResult.rule||""}">${rsui.label}</span></td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
    }
  }

  // ══ SUB-TAB: DETAILS
  else if (subTab === "details") {
    const peCompleted = STATE.peEntries.filter(e=>e.status==="Completed").length;
    const nstpU = STATE.nstpEntries.filter(e=>e.status==="Completed").reduce((s,e)=>s+(+e.units||3),0);
    const wag = computeWAG();
    const HONORS_LOCAL = [{label:"Summa Cum Laude",min:1.00,max:1.20},{label:"Magna Cum Laude",min:1.21,max:1.45},{label:"Cum Laude",min:1.46,max:1.75}];
    const honors = wag ? HONORS_LOCAL.find(h=>wag>=h.min&&wag<=h.max) : null;

    html += `<div class="details-grid">
      <div class="detail-item" style="border-top:3px solid #7B1113">
        <div class="di-label">Scholarship Program</div>
        <div class="di-value" style="font-size:11px">DOST-SEI S&T Undergraduate (RA 7687)</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #7B1113">
        <div class="di-label">Scholarship Year / Cohort</div>
        <div class="di-value">${STATE.scholarshipYear} Cohort</div>
      </div>
      <div class="detail-item" style="border-top:3px solid ${sui.color}">
        <div class="di-label">Current Status</div>
        <div class="di-value" style="color:${sui.color}">${sui.icon} ${sui.label}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #1d4ed8">
        <div class="di-label">Year in Scholarship</div>
        <div class="di-value">Year ${eval_.yearEnjoyed===5?"(Graduating)":eval_.yearEnjoyed}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #065f46">
        <div class="di-label">Current GWA</div>
        <div class="di-value" style="color:${gwa&&gwa<=2.75?"#16a34a":"#dc2626"}">${gwa?gwa.toFixed(2):"—"}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #1d4ed8">
        <div class="di-label">Current WAG</div>
        <div class="di-value">${wag?wag.toFixed(2):"—"}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #b45309">
        <div class="di-label">Latin Honors Track</div>
        <div class="di-value" style="font-size:11px">${honors?honors.label:"Not yet determined"}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #6b7280">
        <div class="di-label">Last Evaluation Date</div>
        <div class="di-value" style="font-size:11px">${eval_.lastEvalDate}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #374151">
        <div class="di-label">Next Evaluation Basis</div>
        <div class="di-value" style="font-size:11px">${eval_.yearEnjoyed<=1?"Annual GWA (both sems combined)":"Semestral GWA (each sem)"}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #7c3aed">
        <div class="di-label">Applicable Rule Set</div>
        <div class="di-value" style="font-size:11px">${rules.label.split("—")[0].trim()}</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #4b5563">
        <div class="di-label">PE Completion</div>
        <div class="di-value" style="color:${peCompleted>=4?"#16a34a":"#6b7280"}">${peCompleted}/4 courses</div>
      </div>
      <div class="detail-item" style="border-top:3px solid #374151">
        <div class="di-label">NSTP Completion</div>
        <div class="di-value" style="color:${nstpU>=6?"#16a34a":"#6b7280"}">${nstpU}/6 units</div>
      </div>
    </div>`;

    html += `<div class="card" style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;color:#374151;margin-bottom:10px">💰 Financial Assistance (${STATE.scholarshipYear} Cohort)</div>
      ${[
        ["Monthly Stipend",`₱${rules.stipend.monthly.toLocaleString()}/month`],
        ["Learning Materials & Connectivity",`₱${rules.stipend.learningMaterials.toLocaleString()}/academic year`],
        ["Tuition Cap (Regular Sem)",`₱${rules.stipend.tuitionCap.toLocaleString()}/academic year`],
        ["Under Partial Allowance","100% tuition · 50% stipend · 50% learning materials"],
        ["Thesis Allowance","₱10,000 (one-time)"],
        ["Group Health & Accident Insurance","Covered"],
        ["Graduation Allowance","Covered upon completion"],
      ].map(([k,v])=>`<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f3f4f6;font-size:12px"><span style="color:#6b7280">${k}</span><span style="font-weight:600;color:#374151">${v}</span></div>`).join("")}
    </div>`;
  }

  // ══ SUB-TAB: FAQ
  else if (subTab === "faq") {
    html += `<div class="card">
      <div style="font-weight:700;font-size:13px;color:#374151;margin-bottom:10px">
        Frequently Asked Questions
        <span class="faq-year-badge">${STATE.scholarshipYear} Cohort</span>
      </div>
      <div style="font-size:11px;color:#9ca3af;margin-bottom:12px">Auto-updated based on selected scholarship year. Source: DOST-SEI uploaded documents + Scholarship Agreement.</div>
      ${rules.faq.map((f,i)=>`
        <div class="faq-item">
          <div class="faq-q">Q${i+1}. ${f.q}</div>
          <div class="faq-a">${f.a}</div>
        </div>`).join("")}
    </div>`;

    html += `<div class="card" style="margin-top:10px">
      <div style="font-weight:700;font-size:13px;color:#374151;margin-bottom:10px">📧 DOST-SEI Contact Emails (All Cohorts)</div>
      ${[
        ["Financial matters & periodic reports","fa.concerns@sei.dost.gov.ph"],
        ["Appeals (academic deficiencies)","appeals@sei.dost.gov.ph"],
        ["Leave of Absence","loa@sei.dost.gov.ph"],
        ["Shifting / Transfer of School","shift.transfer@sei.dost.gov.ph"],
        ["Clearance requests","clearance@sei.dost.gov.ph"],
        ["Letter of Introduction (LBP)","loi@sei.dost.gov.ph"],
        ["Insurance","insurance@sei.dost.gov.ph"],
        ["Other concerns","scholarships@sei.dost.gov.ph"],
      ].map(([k,v])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:12px;flex-wrap:wrap;gap:4px"><span style="color:#6b7280">${k}</span><a href="mailto:${v}" style="color:#1d4ed8;font-weight:600;text-decoration:none">${v}</a></div>`).join("")}
      <div style="font-size:11px;color:#9ca3af;margin-top:8px">Always include: Year of Award · Scholarship Program · Issue in the subject line (e.g. "2025 Undergraduate Scholarship, Status of Stipend")</div>
    </div>`;
  }

  // ══ SUB-TAB: RULES & POLICY
  else if (subTab === "rules") {
    html += `<div class="card" style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:4px">Grade Requirements — ${STATE.scholarshipYear} Cohort</div>
      <div style="font-size:11px;color:#9ca3af;margin-bottom:10px">${rules.label}</div>
      ${Object.entries(rules.gradeReqByYear).map(([y,r])=>`
        <div style="padding:7px 0;border-bottom:1px solid #f3f4f6;font-size:12px;display:flex;gap:8px">
          <span style="font-weight:700;color:#7B1113;min-width:90px">Year ${y==="5"?"(Grad)":y}:</span>
          <span style="color:#374151">${r}</span>
        </div>`).join("")}
    </div>`;

    html += `<div class="card" style="margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:4px">Academic Deficiency Decision Matrix</div>
      <div style="font-size:11px;color:#9ca3af;margin-bottom:10px">Cohort-invariant — applies the same way across all DOST-SEI cohorts. Grouped by Year Enjoyed, which is auto-detected from your grade records (no manual year selection). "With/without previous deficiency" is also auto-detected from your full grade history.</div>
      ${Object.entries(DOST_DECISION_MATRIX).map(([yearLabel, entries])=>`
        <div style="margin-bottom:14px">
          <div style="font-weight:700;font-size:12px;color:#7B1113;margin-bottom:6px">${yearLabel}</div>
          <div style="overflow-x:auto">
            <table class="dost-table">
              <thead><tr><th>Condition</th><th>Resulting Status</th><th>Recommended Action</th></tr></thead>
              <tbody>
                ${entries.map(p=>{
                  const pui = p.isGradYear
                    ? {label:"Continued to Submit Grades",color:"#0369a1",bg:"#e0f2fe",border:"#7dd3fc"}
                    : (SCHOL_STATUS_UI[p.status]||SCHOL_STATUS_UI["N/A"]);
                  return `<tr>
                    <td style="font-size:11px">${p.rule}</td>
                    <td><span class="status-badge" style="background:${pui.bg};color:${pui.color};border:1px solid ${pui.border};font-size:10px">${pui.label}</span></td>
                    <td style="font-size:11px;color:#374151">${p.action}</td>
                  </tr>`;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>`).join("")}
    </div>`;

    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="card">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">Key Rules</div>
        ${[
          ["Drop limit",`Max ${rules.maxDropUnits} units/sem (PE/NSTP not counted)`],
          ["Min load",`${rules.minLoad} academic units required per semester`],
          ["Last sem","Underload OK only if truly final graduating semester"],
          ["INC","Stipend may be partial; must complete subject to restore benefits"],
          ["Shifting","Once only · by 1st Sem Year 3 · must be S&T priority course"],
          ["2 failures","2+ grades of 5.00 in one semester → Termination with service obligation"],
        ].map(([k,v])=>`<div style="padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:12px"><span style="font-weight:600;color:#7B1113">${k}:</span> ${v}</div>`).join("")}
      </div>
      <div class="card">
        <div style="font-weight:700;font-size:13px;margin-bottom:10px">Financial Allowances Under Each Status</div>
        ${[
          ["Continued","100% of all scholarship privileges"],
          ["Under Probation","100% of all scholarship privileges (with monitoring)"],
          ["Partial Allowance","100% tuition · 50% monthly stipend · 50% learning materials"],
          ["Terminated","No further financial assistance; service/refund obligation applies"],
        ].map(([s,d])=>{
          const ui=Object.values(SCHOL_STATUS_UI).find(x=>x.label.startsWith(s.split(" ")[0]))||SCHOL_STATUS_UI["CONTINUED"];
          return `<div style="padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:12px"><span style="font-weight:600;color:${ui.color}">${s}:</span> ${d}</div>`;
        }).join("")}
      </div>
    </div>`;
  }

  el.innerHTML = html;
}

const TYPE_LABEL = {
  major:"Major", math:"Math", science:"Science", ge:"GE", ge_elective:"GE Elective",
  nstp:"NSTP", pe:"PE", eee_elective:"EEE Elective", engg_elective:"Engg Elective",
  free_elective:"Free Elective", custom:"Custom",
};

// Merge two evaluateScholarshipStatus() results (real + projected) into
// one row list keyed by (scholYear, semIdx), so the What-If comparison
// table can show both sides even when a semester only has data on ONE
// side (e.g. simulating a grade into an otherwise-empty future term).
function mergeSemDataForCompare(realEval, projEval) {
  const map = new Map();
  (realEval.semData||[]).forEach((sd,i) => {
    const key = sd.scholYear+"-"+sd.semIdx;
    map.set(key, {scholYear:sd.scholYear, semIdx:sd.semIdx, isGradYear:sd.isGradYear, label:sd.label, real:sd, realRow:realEval.semStatuses[i]});
  });
  (projEval.semData||[]).forEach((sd,i) => {
    const key = sd.scholYear+"-"+sd.semIdx;
    const ex = map.get(key) || {scholYear:sd.scholYear, semIdx:sd.semIdx, isGradYear:sd.isGradYear, label:sd.label};
    ex.proj = sd; ex.projRow = projEval.semStatuses[i];
    map.set(key, ex);
  });
  return Array.from(map.values()).sort((a,b)=>a.scholYear-b.scholYear||a.semIdx-b.semIdx);
}
// Plain-language description of what changed in one comparison row.
function describeRowDelta(row) {
  if (!row.real || !row.proj) return "";
  const rf=row.real.fails5||[], pf=row.proj.fails5||[], ri=row.real.incs4||[], pi=row.proj.incs4||[];
  const parts = [];
  const newFails = pf.filter(c=>!rf.includes(c));
  const newIncs = pi.filter(c=>!ri.includes(c));
  const resolvedFails = rf.filter(c=>!pf.includes(c));
  const resolvedIncs = ri.filter(c=>!pi.includes(c));
  if (newFails.length) parts.push(`new 5.00: ${newFails.join(", ")}`);
  if (newIncs.length) parts.push(`new 4.00/INC: ${newIncs.join(", ")}`);
  if (resolvedFails.length) parts.push(`resolved 5.00: ${resolvedFails.join(", ")}`);
  if (resolvedIncs.length) parts.push(`resolved 4.00/INC: ${resolvedIncs.join(", ")}`);
  if (row.proj.droppedU !== row.real.droppedU) parts.push(`dropped units: ${row.real.droppedU}u → ${row.proj.droppedU}u`);
  return parts.join(" · ");
}
// Small GWA/WAG delta pill. Lower is always better in the 1.00–5.00 scale.
function deltaTag(real, sim) {
  if (real===null || sim===null || real===undefined || sim===undefined) return `<span style="font-size:10px;color:#9ca3af">—</span>`;
  const diff = sim - real;
  if (Math.abs(diff) < 0.005) return `<span style="font-size:10px;color:#9ca3af">no change</span>`;
  const improved = diff < 0;
  return `<span style="font-size:10px;font-weight:700;color:${improved?"#16a34a":"#dc2626"}">${diff<0?"↓":"↑"} ${diff>0?"+":""}${diff.toFixed(2)}</span>`;
}

function renderWhatIf(el) {
  let scholType = STATE.scholarshipType || (STATE.scholarship ? "DOST" : "None");
  const isDOST = scholType === "DOST";
  const simOn = !!STATE.simMode;

  // Real values are now FORCED-real regardless of the global sim toggle,
  // and Sim values are FORCED-simulated — so these are always accurate
  // and independent of each other (previously both silently followed
  // the same global flag, making "Real" and "Sim" identical whenever
  // simulation happened to be on).
  const realGwa = computeGWA(null, false);
  const realWag = computeWAG(false);
  const simGwa  = simOn ? computeGWA(null, true) : null;
  const simWag  = simOn ? computeWAG(true) : null;
  const realHonors = realWag!=null ? HONORS.find(h=>realWag>=h.min&&realWag<=h.max) : null;
  const simHonors  = simWag!=null ? HONORS.find(h=>simWag>=h.min&&simWag<=h.max) : null;

  // DOST comparison — real is ALWAYS evaluated with useSimMode=false now
  // (previously computeGWA() inside the evaluator silently drifted with
  // the global toggle; fixed so "current status" is always trustworthy).
  let realEval = {status:"N/A",reason:"",rule:"",action:"",semData:[],semStatuses:[],yearEnjoyed:1,prevDeficiency:false};
  let projEval = {status:"N/A",reason:"",rule:"",action:"",semData:[],semStatuses:[],yearEnjoyed:1,prevDeficiency:false};
  if (isDOST) {
    try { realEval = evaluateScholarshipStatus(false); } catch(e) {}
    if (simOn) { try { projEval = evaluateScholarshipStatus(true); } catch(e) { projEval = realEval; } }
    else { projEval = realEval; }
  }
  const rsui = SCHOL_STATUS_UI[realEval.status]||SCHOL_STATUS_UI["N/A"];
  const psui = SCHOL_STATUS_UI[projEval.status]||SCHOL_STATUS_UI["N/A"];
  const statusChanged = simOn && projEval.status !== realEval.status;

  // Courses with a REAL, non-no-op simulated override (selecting the
  // same grade as the real one doesn't count — decluttered from lists).
  const simmedCodes = simOn ? Object.keys(STATE.simGrades).filter(code => {
    const course = COURSES.find(c=>c.code===code);
    if (!course) return false;
    const simG = STATE.simGrades[code];
    const realG = STATE.grades[code] || {label:"In Progress",num:null};
    return simG.label !== realG.label;
  }) : [];

  const buckets = buildSemBuckets().filter(b => b.key !== "custom_unassigned" && b.entries.some(e=>e.type==="course"));

  el.innerHTML = `
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
    <div class="section-title" style="margin:0">🔮 What-If Grade Simulator</div>
    <div style="display:flex;gap:8px">
      <button onclick="toggleSimMode()" style="padding:7px 14px;border-radius:9px;border:none;background:${simOn?"#ff9800":"#7B1113"};color:#fff;font-weight:700;cursor:pointer;font-size:12px">${simOn?"⚡ Simulation ON — Click to Disable":"🔮 Enable Simulation"}</button>
      ${simOn?`<button onclick="clearSimGrades()" style="padding:7px 12px;border-radius:9px;border:1px solid #d1d5db;background:#fff;cursor:pointer;font-size:12px">Clear All Sim</button>`:""}
    </div>
  </div>

  ${simOn
    ? `<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:10px;padding:10px 14px;margin-bottom:12px;font-size:12px">⚡ Simulation active — <b>${simmedCodes.length} course${simmedCodes.length===1?"":"s"}</b> simulated. Changes here do NOT affect your real grades; every tab in the app previews the simulated values while this is on.</div>`
    : `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:10px 14px;margin-bottom:12px;font-size:12px;color:#1e3a8a">💡 Enable Simulation to test "what if I get this grade" scenarios — you'll see projected GWA, WAG, Honors, and Scholarship status update live, side-by-side with your real record. Nothing is saved to your real grades.</div>`
  }

  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px">
    ${sc_card("Real GWA",realGwa?realGwa.toFixed(2):"—","All graded courses","#374151")}
    ${sc_card("Sim GWA",simOn&&simGwa?simGwa.toFixed(2):"—",simOn?deltaTag(realGwa,simGwa):"Enable simulation","#ff9800")}
    ${sc_card("Real WAG",realWag?realWag.toFixed(2):"—","Weighted avg (no PE/NSTP)","#374151")}
    ${sc_card("Sim WAG",simOn&&simWag?simWag.toFixed(2):"—",simOn?deltaTag(realWag,simWag):"Enable simulation","#2563eb")}
  </div>

  <div class="card">
    <div style="font-weight:700;font-size:13px;margin-bottom:8px">🎖️ Latin Honors Projection</div>
    <div style="display:grid;grid-template-columns:${simOn?"1fr 1fr":"1fr"};gap:10px">
      <div style="background:#f8fafc;border-radius:8px;padding:10px 12px;border:1px solid #e5e7eb">
        <div style="font-size:10px;color:#9ca3af;margin-bottom:3px">CURRENT (Real WAG)</div>
        <div style="font-size:13px;font-weight:700;color:${realHonors?"#16a34a":"#6b7280"}">${realHonors?realHonors.label:(realWag?"WAG "+realWag.toFixed(2)+" — no honors yet":"Not enough graded courses")}</div>
      </div>
      ${simOn?`<div style="background:#fff8ec;border-radius:8px;padding:10px 12px;border:1px solid #fde68a">
        <div style="font-size:10px;color:#b45309;margin-bottom:3px">PROJECTED (Sim WAG)</div>
        <div style="font-size:13px;font-weight:700;color:${simHonors?"#16a34a":"#6b7280"}">${simHonors?simHonors.label:(simWag?"WAG "+simWag.toFixed(2)+" — no honors yet":"Not enough graded courses")}</div>
      </div>`:""}
    </div>
    <div style="font-size:10px;color:#9ca3af;margin-top:8px">Thresholds: Summa ≤ 1.20 · Magna ≤ 1.45 · Cum Laude ≤ 1.75 (WAG must also meet residency/unit rules)</div>
  </div>

  ${isDOST ? `
  <div class="card">
    <div style="font-weight:700;font-size:13px;margin-bottom:10px">🏆 Scholarship Status Comparison</div>
    <div style="display:grid;grid-template-columns:${simOn?"1fr auto 1fr":"1fr"};gap:10px;align-items:center">
      <div class="sim-schol-box" style="background:${rsui.bg};border-color:${rsui.border};margin-bottom:0">
        <div style="font-size:10px;color:#6b7280;margin-bottom:4px">CURRENT STATUS</div>
        <div style="font-size:16px;font-weight:800;color:${rsui.color};margin-bottom:4px">${rsui.icon} ${rsui.label}</div>
        <div style="font-size:11px;color:#374151">${realEval.reason||"—"}</div>
      </div>
      ${simOn?`<div style="font-size:20px;color:#9ca3af">→</div>
      <div class="sim-schol-box" style="background:${psui.bg};border-color:${psui.border};margin-bottom:0">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-size:10px;color:#6b7280">PROJECTED STATUS</span>
          ${statusChanged?`<span style="font-size:9px;background:#fff;padding:2px 6px;border-radius:5px;border:1px solid ${psui.border};color:${psui.color};font-weight:700">CHANGED</span>`:`<span style="font-size:9px;color:#9ca3af">no change</span>`}
        </div>
        <div style="font-size:16px;font-weight:800;color:${psui.color};margin-bottom:4px">${psui.icon} ${psui.label}</div>
        <div style="font-size:11px;color:#374151">${projEval.reason||"—"}</div>
        ${projEval.rule&&projEval.status!=="CONTINUED"?`<div style="font-size:10px;background:rgba(255,255,255,.6);padding:4px 8px;border-radius:5px;color:#374151;margin-top:6px"><b>Rule:</b> ${projEval.rule}<br><b>Action:</b> ${projEval.action}</div>`:""}
      </div>`:""}
    </div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10px;color:#6b7280;margin-top:10px;padding-top:10px;border-top:1px solid #f3f4f6">
      <span>Year Enjoyed: <b style="color:#374151">${projEval.yearEnjoyed===5?"Graduating":projEval.yearEnjoyed}</b>${simOn&&projEval.yearEnjoyed!==realEval.yearEnjoyed?` <span style="color:#ea580c">(was ${realEval.yearEnjoyed===5?"Graduating":realEval.yearEnjoyed})</span>`:""}</span>
      <span>Previous Deficiency: <b style="color:#374151">${projEval.prevDeficiency?"Yes":"No"}</b>${simOn&&projEval.prevDeficiency!==realEval.prevDeficiency?` <span style="color:#ea580c">(was ${realEval.prevDeficiency?"Yes":"No"})</span>`:""}</span>
    </div>
  </div>

  ${simOn ? (()=>{
    const rows = mergeSemDataForCompare(realEval, projEval);
    if (rows.length===0) return "";
    return `<div class="card">
      <div style="font-weight:700;font-size:13px;margin-bottom:10px">📋 Per-Semester Comparison</div>
      <div style="overflow-x:auto">
        <table class="dost-table">
          <thead><tr><th>Semester</th><th>Current Status</th><th>Projected Status</th><th>What Changed</th></tr></thead>
          <tbody>
            ${rows.map(row=>{
              const rStat = row.realRow?.status || null;
              const pStat = row.projRow?.status || null;
              const rui = rStat ? (row.realRow?.isGradYear?{label:"Continued to Submit Grades",color:"#0369a1",bg:"#e0f2fe",border:"#7dd3fc"}:(SCHOL_STATUS_UI[rStat]||SCHOL_STATUS_UI.CONTINUED)) : null;
              const pui = pStat ? (row.projRow?.isGradYear?{label:"Continued to Submit Grades",color:"#0369a1",bg:"#e0f2fe",border:"#7dd3fc"}:(SCHOL_STATUS_UI[pStat]||SCHOL_STATUS_UI.CONTINUED)) : null;
              const changed = rStat !== pStat;
              const delta = describeRowDelta(row);
              return `<tr style="${changed?"background:#fff8ec":""}">
                <td>
                  <div style="font-size:11px;font-weight:600;color:#374151">${row.label}</div>
                  <div style="font-size:10px;color:#9ca3af">Scholarship Year ${row.scholYear}${row.isGradYear?" · Graduating":""}</div>
                </td>
                <td>${rui?`<span class="status-badge" style="background:${rui.bg};color:${rui.color};border:1px solid ${rui.border};font-size:10px">${rui.label}</span>`:`<span style="font-size:10px;color:#d1d5db">not yet reached</span>`}</td>
                <td>${pui?`<span class="status-badge" style="background:${pui.bg};color:${pui.color};border:1px solid ${pui.border};font-size:10px">${pui.label}</span>`:`<span style="font-size:10px;color:#d1d5db">—</span>`}</td>
                <td style="font-size:10px;color:${changed?"#c2410c":"#9ca3af"};font-weight:${changed?"600":"400"}">${delta||(changed?"":"—")}</td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
  })() : ""}
  ` : ""}

  ${simOn && simmedCodes.length>0 ? `
  <div class="card">
    <div style="font-weight:700;font-size:13px;margin-bottom:10px">✏️ What's Being Simulated (${simmedCodes.length})</div>
    <div style="display:flex;flex-direction:column;gap:5px">
      ${simmedCodes.map(code=>{
        const course = COURSES.find(c=>c.code===code);
        const realG = STATE.grades[code]||{label:"In Progress",num:null};
        const simG = STATE.simGrades[code];
        return `<div class="sim-row" style="background:#fff8ec;border:1px solid #fde68a">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-weight:700;font-size:11px;color:#7B1113">${course.code}</span>
            <span style="font-size:10px;color:#6b7280">${course.title}</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-size:10px;color:${gradeColor(realG)};font-weight:600">${realG.label}</span>
            <span style="font-size:10px;color:#9ca3af">→</span>
            <span style="font-size:10px;color:${gradeColor(simG)};font-weight:700">${simG.label}</span>
            <button onclick="clearSimGrade('${code}')" title="Reset to real grade" style="padding:2px 7px;border-radius:5px;border:1px solid #fca5a5;background:transparent;color:#dc2626;cursor:pointer;font-size:10px;font-family:inherit">↺</button>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>` : ""}

  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <div style="font-weight:700;font-size:13px">📚 Adjust Grades by Semester ${simOn?"":"<span style='font-weight:400;color:#9ca3af;font-size:11px'>(enable simulation to edit)</span>"}</div>
    </div>
    ${buckets.map(bucket=>{
      const courses = bucket.entries.filter(e=>e.type==="course").map(e=>e.course);
      const bucketHasSim = simOn && courses.some(c=>simmedCodes.includes(c.code));
      return `<details class="wi-group" open>
        <summary class="wi-group-hdr">
          <span>${bucket.label}${bucketHasSim?` <span class="wi-changed-badge">${courses.filter(c=>simmedCodes.includes(c.code)).length} simulated</span>`:""}</span>
          <span style="font-size:10px;color:#9ca3af;font-weight:400">${courses.length} course${courses.length===1?"":"s"}</span>
        </summary>
        <div class="wi-group-body">
          ${courses.map(c=>{
            const realG = STATE.grades[c.code]||{label:"In Progress",num:null};
            const simG = STATE.simGrades[c.code];
            const isSimmed = simOn && simmedCodes.includes(c.code);
            const tc = TYPE_COLOR[c.type]||"#374151";
            const tb = TYPE_BG[c.type]||"#f9fafb";
            return `<div class="sim-row ${isSimmed?"wi-diff-row":""}" style="background:${isSimmed?"":tb};border:1px solid ${isSimmed?"#ff9800":tc+"18"}">
              <div style="min-width:0">
                <div>
                  <span style="font-weight:700;font-size:11px;color:${tc}">${c.code}</span>
                  <span style="font-size:9px;color:${tc};background:${tb};border:1px solid ${tc}33;padding:1px 5px;border-radius:5px;margin-left:5px">${TYPE_LABEL[c.type]||c.type}</span>
                </div>
                <div style="font-size:10px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.title} · ${c.units}u</div>
              </div>
              <div style="display:flex;align-items:center;gap:5px;flex-shrink:0">
                <span style="font-size:10px;color:${gradeColor(realG)};font-weight:600">${realG.label}</span>
                ${simOn?`<span style="font-size:10px;color:#6b7280">→</span>
                <select onchange="setSimGrade('${c.code}',this.value)" style="padding:3px 5px;border-radius:6px;border:1px solid ${simG?"#ff9800":"#d1d5db"};font-size:10px;background:${simG?"#fff3cd":"#fff"};width:88px">
                  ${GRADE_OPTIONS.map(go=>`<option value="${go.label}" ${(simG?simG.label:realG.label)===go.label?"selected":""}>${go.label}</option>`).join("")}
                </select>
                ${isSimmed?`<button onclick="clearSimGrade('${c.code}')" title="Reset to real grade" style="padding:2px 6px;border-radius:5px;border:1px solid #fca5a5;background:transparent;color:#dc2626;cursor:pointer;font-size:9px;font-family:inherit">↺</button>`:""}`:""}
              </div>
            </div>`;
          }).join("")}
        </div>
      </details>`;
    }).join("")}
  </div>`;
}

function toggleSimMode() {
  STATE.simMode = !STATE.simMode;
  saveState();
  renderTab("whatif");
  updateTopBadges();
}
function clearSimGrades() {
  STATE.simGrades = {};
  saveState();
  renderTab("whatif");
}
function setSimGrade(code, label) {
  const found = GRADE_OPTIONS.find(g=>g.label===label);
  STATE.simGrades[code] = found||{label:"In Progress",num:null};
  saveState();
  if (currentTab==="whatif") renderTab("whatif");
  updateTopBadges();
}
function clearSimGrade(code) {
  delete STATE.simGrades[code];
  saveState();
  if (currentTab==="whatif") renderTab("whatif");
  updateTopBadges();
}

function renderFlowchart(el) {
  const audit = computeAudit();
  const sel = STATE.selectedAudit ? audit.find(c=>c.code===STATE.selectedAudit) : null;

  // Build retake overlay: code -> retake info
  const retakeOverlay = {};
  (STATE.retakeRecords||[]).forEach(r => {
    if (r.placedAy && r.placedSem) retakeOverlay[r.code] = r;
  });

  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
    <div class="section-title" style="margin:0">🗺️ Curriculum Flowchart</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${[["passed","✓ Passed","#16a34a"],["available","→ Available","#2563eb"],["blocked","🔒 Blocked","#9ca3af"],["failed","✗ Failed","#dc2626"],["in_progress","◉ In Progress","#ca8a04"]].map(([s,l,c])=>`<span style="font-size:10px;color:${c};padding:2px 7px;background:${statusBg(s)};border-radius:7px;border:1px solid ${c}40">${l}</span>`).join("")}
      ${Object.keys(retakeOverlay).length>0?`<span style="font-size:10px;color:#7c3aed;padding:2px 7px;background:#ede9fe;border-radius:7px;border:1px solid #c4b5fd40">🔁 Retake</span>`:""}
    </div>
  </div>`;

  // Selected course detail panel
  if (sel) {
    // Find courses that depend on this one (postrequisites)
    const postreqs = COURSES.filter(c=>c.prereq.includes(sel.code)).map(c=>c.code);
    html += `<div class="card" style="border:2px solid #7B1113;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between">
        <div>
          <div style="font-weight:800;font-size:15px;color:#7B1113">${sel.code} — ${sel.title}</div>
          <div style="font-size:12px;color:#6b7280;margin-top:3px">${sel.units}u | Year ${sel.year} Sem ${sel.sem} | <span style="font-weight:700;color:${statusColor(sel.status)}">${sel.status.replace("_"," ")}</span></div>
          ${sel.prereq.length?`<div style="font-size:12px;margin-top:3px">⬆ Prerequisites: <b>${sel.prereq.join(", ")}</b></div>`:""}
          ${sel.coreq.length?`<div style="font-size:12px">↔ Corequisites: <b>${sel.coreq.join(", ")}</b></div>`:""}
          ${postreqs.length?`<div style="font-size:12px;color:#1d4ed8">⬇ Unlocks: <b>${postreqs.join(", ")}</b></div>`:""}
          ${sel.blockedBy?.length?`<div style="font-size:12px;color:#dc2626">🔒 Blocked by: <b>${sel.blockedBy.join(", ")}</b></div>`:""}
          ${sel.grade?.label&&sel.grade.label!=="In Progress"?`<div style="font-size:12px;font-weight:700;color:${gradeColor(sel.grade)}">Grade: ${sel.grade.label}</div>`:""}
          ${retakeOverlay[sel.code]?`<div style="font-size:11px;color:#7c3aed;margin-top:3px">🔁 Retake planned: ${retakeOverlay[sel.code].placedAy} ${retakeOverlay[sel.code].placedSem}</div>`:""}
        </div>
        <button onclick="STATE.selectedAudit=null;renderTab('flowchart')" style="background:transparent;border:none;font-size:20px;cursor:pointer;color:#9ca3af">×</button>
      </div>
    </div>`;
  }

  // ── MAIN FLOWCHART GRID ───────────────────────────────────────────
  // Auto-sort: for each year/sem column, sort courses by prereq depth
  // so courses higher in the chain appear at top
  function prereqDepth(code, memo={}) {
    if (memo[code] !== undefined) return memo[code];
    const c = COURSES.find(x=>x.code===code);
    if (!c || c.prereq.length===0) { memo[code]=0; return 0; }
    memo[code] = 1 + Math.max(...c.prereq.map(p=>prereqDepth(p,memo)));
    return memo[code];
  }
  const depthMemo = {};
  COURSES.forEach(c=>prereqDepth(c.code, depthMemo));

  html += `<div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:12px;justify-content:center;min-width:0">`;
  for (let y=1;y<=4;y++) {
    html += `<div class="flow-col">
      <div style="text-align:center;font-weight:700;font-size:12px;color:#7B1113;padding:7px 0;background:#fff0f0;border-radius:8px 8px 0 0;border:1px solid #fca5a580;border-bottom:none;letter-spacing:.2px">Year ${y}</div>`;
    for (let s=1;s<=2;s++) {
      // Sort courses in this slot by prereq depth, then by code
      const courses = audit
        .filter(c=>c.year===y&&c.sem===s)
        .slice()
        .sort((a,b)=>(depthMemo[a.code]||0)-(depthMemo[b.code]||0)||(a.code.localeCompare(b.code)));
      html += `<div class="flow-sem" style="border-radius:${s===2?"0 0 8px 8px":"0"};${s===2?"border-top:1px dashed #d1d5db":""};margin-bottom:${s===2?8:0}px">
        <div style="font-size:10px;font-weight:700;color:#9ca3af;margin-bottom:5px">SEM ${s}</div>`;
      courses.forEach(c=>{
        const sc = statusColor(c.status), sb = statusBg(c.status);
        const isSel = STATE.selectedAudit===c.code;
        const hasRetake = retakeOverlay[c.code];
        // Show prereq arrows inline
        const prereqDone = c.prereq.filter(p=>{const pa=audit.find(a=>a.code===p);return pa&&pa.status==="passed";});
        const prereqMissing = c.prereq.filter(p=>{const pa=audit.find(a=>a.code===p);return !pa||pa.status!=="passed";});
        const flowR=(STATE.electiveNames||{})[c.code];
        const flowCode=flowR?.displayCode||c.code;
        const flowTitle=flowR?.displayName||c.title;
        html += `<div class="flow-chip" onclick="toggleAuditFlow('${c.code}')"
          style="background:${isSel?sb:"transparent"};border-color:${isSel?sc:"transparent"};outline:${isSel?"2px solid "+sc:"none"}"
          title="${flowTitle}${c.prereq.length?' | Pre: '+c.prereq.join(', '):''}">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:10px;font-weight:700;color:${sc}">${flowCode}</span>
            <div style="display:flex;gap:2px;align-items:center">
              ${hasRetake?`<span style="font-size:8px;color:#7c3aed" title="Retake planned">🔁</span>`:""}
              <span style="font-size:9px;background:${sb};color:${sc};padding:1px 4px;border-radius:5px">${c.units}u</span>
            </div>
          </div>
          <div style="font-size:9px;color:#6b7280">${flowTitle.length>24?flowTitle.slice(0,24)+"…":flowTitle}</div>
          ${c.grade?.num!==null&&c.grade?.label!=="In Progress"?`<div style="font-size:9px;font-weight:700;color:${gradeColor(c.grade)}">${c.grade.label}</div>`:""}
          ${c.prereq.length?`<div style="font-size:8px;color:${prereqMissing.length?"#dc2626":"#9ca3af"};margin-top:1px">${prereqMissing.length?"🔒 ":"↑ "}${c.prereq.join(", ")}</div>`:""}
        </div>`;
        // Show retake entry below original if it exists
        if (hasRetake) {
          const rk = hasRetake;
          const rStatus = rk.retakeStatus||"planned";
          const rColor = rStatus==="completed"?"#16a34a":rStatus==="in_progress"?"#ca8a04":"#7c3aed";
          html += `<div style="margin-left:8px;padding:3px 7px;border-radius:5px;background:#ede9fe;border:1px solid #c4b5fd;margin-bottom:3px">
            <div style="font-size:9px;font-weight:700;color:#7c3aed">🔁 ${c.code} (Retake)</div>
            <div style="font-size:8px;color:#6b7280">${rk.placedAy||""} ${rk.placedSem||""}</div>
            <div style="font-size:8px;font-weight:700;color:${rColor}">${rStatus.charAt(0).toUpperCase()+rStatus.slice(1)}</div>
          </div>`;
        }
      });
      html += "</div>";
    }
    html += "</div>";
  }
  html += "</div>";

  // Legend footer
  html += `<div class="card" style="margin-top:4px;font-size:11px;color:#6b7280">
    <b>How to read:</b> Click any course chip to see its prerequisites, what it unlocks, and retake status. Courses are sorted by prerequisite depth within each semester. 🔒 = missing prerequisite listed below chip. ⬇ Unlocks = courses this one enables.
  </div>`;

  el.innerHTML = html;
}

function toggleAuditFlow(code) {
  STATE.selectedAudit = STATE.selectedAudit===code?null:code;
  renderTab("flowchart");
}

// ══════════════════════════════════════════════════════════════════
// PLANNER ENGINE
// ══════════════════════════════════════════════════════════════════

// Extend course data with planner fields (offered, difficulty, peSlot)
const COURSE_EXTRA = {
  "EEE 111":{offered:["1st","2nd"],difficulty:5},
  "EEE 113":{offered:["1st","2nd"],difficulty:4},
  "EEE 118":{offered:["1st","2nd"],difficulty:3},
  "Math 21":{offered:["1st","2nd"],difficulty:7},
  "Physics 71":{offered:["1st","2nd"],difficulty:7},
  "Philo 1":{offered:["1st","2nd","Midyear"],difficulty:3},
  "PE 1":{offered:["1st","2nd"],difficulty:1,peSlot:true},
  "EEE 121":{offered:["1st","2nd"],difficulty:8},
  "EEE 123":{offered:["1st","2nd"],difficulty:9},
  "EEE 128":{offered:["1st","2nd"],difficulty:4},
  "Math 22":{offered:["1st","2nd"],difficulty:8},
  "Physics 72":{offered:["1st","2nd"],difficulty:8},
  "Speech 30 / Eng 13":{offered:["1st","2nd","Midyear"],difficulty:3},
  "PE 2":{offered:["1st","2nd"],difficulty:1,peSlot:true},
  "EEE 131":{offered:["1st","2nd"],difficulty:8},
  "EEE 133":{offered:["1st","2nd"],difficulty:8},
  "EEE 137":{offered:["1st","2nd"],difficulty:6},
  "EEE 138":{offered:["1st","2nd"],difficulty:4},
  "Math 23":{offered:["1st","2nd"],difficulty:9},
  "Math 40":{offered:["1st","2nd"],difficulty:7},
  "GE Elective 1":{offered:["1st","2nd","Midyear"],difficulty:3},
  "NSTP 1":{offered:["1st","2nd"],difficulty:2,nstpSlot:true},
  "PE 3":{offered:["1st","2nd"],difficulty:1,peSlot:true},
  "EEE 141":{offered:["1st","2nd"],difficulty:8},
  "EEE 143":{offered:["1st","2nd"],difficulty:7},
  "EEE 145":{offered:["1st","2nd"],difficulty:7},
  "EEE 147":{offered:["1st","2nd"],difficulty:9},
  "EEE 148":{offered:["1st","2nd"],difficulty:4},
  "ES 101":{offered:["1st","2nd"],difficulty:7},
  "NSTP 2":{offered:["1st","2nd"],difficulty:2,nstpSlot:true},
  "PE 4":{offered:["1st","2nd"],difficulty:1,peSlot:true},
  "EEE 135":{offered:["1st","2nd"],difficulty:9},
  "EEE 151":{offered:["1st","2nd"],difficulty:8},
  "EEE 153":{offered:["1st","2nd"],difficulty:8},
  "EEE 155":{offered:["1st","2nd"],difficulty:7},
  "EEE 157":{offered:["1st","2nd"],difficulty:9},
  "EEE 158":{offered:["1st","2nd"],difficulty:5},
  "Physics 73":{offered:["1st","2nd"],difficulty:8},
  "ECE 161":{offered:["1st","2nd"],difficulty:8},
  "ECE 163":{offered:["1st","2nd"],difficulty:8},
  "ECE 164":{offered:["1st","2nd"],difficulty:5},
  "EEE 192":{offered:["1st","2nd"],difficulty:5},
  "EEE Elective":{offered:["1st","2nd"],difficulty:6},
  "GE Elective 2":{offered:["1st","2nd","Midyear"],difficulty:3},
  "Soc Sci 2":{offered:["1st","2nd","Midyear"],difficulty:3},
  "ECE 165":{offered:["1st","2nd"],difficulty:8},
  "ECE 167":{offered:["1st","2nd"],difficulty:7},
  "ECE 168":{offered:["1st","2nd"],difficulty:5},
  "EEE 196":{offered:["1st","2nd"],difficulty:7},
  "Engg Elective":{offered:["1st","2nd"],difficulty:5},
  "Kas 1":{offered:["1st","2nd","Midyear"],difficulty:3},
  "ECE 199":{offered:["1st","2nd"],difficulty:7},
  "Free Elective":{offered:["1st","2nd","Midyear"],difficulty:3},
  "PI 100":{offered:["1st","2nd","Midyear"],difficulty:3},
  "DRMAPS":{offered:["1st","2nd","Midyear"],difficulty:3},
  "Arts 1":{offered:["1st","2nd","Midyear"],difficulty:2},
  "Fil 40":{offered:["1st","2nd","Midyear"],difficulty:3},
};
function getCExtra(code){return COURSE_EXTRA[code]||{offered:["1st","2nd"],difficulty:5};}

// Resolve a planner code to a course-like object (curriculum or custom)
function getCourseOrCustom(code) {
  if (code.startsWith("custom__")) {
    const id = +code.replace("custom__","");
    const cc = (STATE.customCourses||[]).find(c=>c.id===id);
    if (!cc) return null;
    return {code:"custom__"+cc.id, displayCode:cc.code, title:cc.title, units:cc.units, type:cc.type||"custom", isCustom:true, customId:cc.id};
  }
  const c = COURSES.find(x=>x.code===code);
  if (!c) return null;
  return {...c, displayCode:c.code, isCustom:false};
}

// Default plan seeded from the BS ECE 2024 curriculum PDF
const DEFAULT_PLAN = {
  "AY 2025-2026||1st":["EEE 111","EEE 113","EEE 118","Math 21","Physics 71","Philo 1","PE 1"],
  "AY 2025-2026||2nd":["EEE 121","EEE 123","EEE 128","Math 22","Physics 72","Speech 30 / Eng 13","PE 2"],
  "AY 2026-2027||1st":["EEE 131","EEE 133","EEE 137","EEE 138","Math 23","Math 40","GE Elective 1","NSTP 1","PE 3"],
  "AY 2026-2027||2nd":["EEE 141","EEE 143","EEE 145","EEE 147","EEE 148","ES 101","NSTP 2","PE 4"],
  "AY 2027-2028||1st":["EEE 135","EEE 151","EEE 153","EEE 155","EEE 157","EEE 158","Physics 73"],
  "AY 2027-2028||2nd":["ECE 161","ECE 163","ECE 164","EEE 192","EEE Elective","GE Elective 2","Soc Sci 2"],
  "AY 2028-2029||1st":["ECE 165","ECE 167","ECE 168","EEE 196","Engg Elective","Kas 1"],
  "AY 2028-2029||2nd":["ECE 199","Free Elective","PI 100","DRMAPS","Arts 1","Fil 40"],
};

const PLANNER_KEY = "up_planner_electron_v1_0_0";
let PLAN_STATE = {
  plan: {},
  years: [
    {ay:"AY 2025-2026",sems:["1st","2nd"]},
    {ay:"AY 2026-2027",sems:["1st","2nd"]},
    {ay:"AY 2027-2028",sems:["1st","2nd"]},
    {ay:"AY 2028-2029",sems:["1st","2nd"]},
  ],
  maxRegLoad: 21,
  maxMidLoad: 6,
  diffAware: true,
  dragCode: null,
  dragFrom: null,
  locked: new Set(),      // codes that are locked in place
  selected: new Set(),    // codes currently multi-selected
  multiSelectMode: false, // toggle for multi-select UI
  isGraduatingSem: false, // final graduating semester exception (suppresses underload warnings)
};

function pKey(ay,sem){return `${ay}||${sem}`;}
function getSlot(ay,sem){return PLAN_STATE.plan[pKey(ay,sem)]||[];}
function allPlanned(){const a=[];Object.values(PLAN_STATE.plan).forEach(arr=>a.push(...arr));return a;}
function unplanned(){
  const p=new Set(allPlanned());
  const currUnplanned=COURSES.filter(c=>!p.has(c.code)).map(c=>c.code);
  // Custom courses not yet placed are also in the pool
  // We use a prefix "custom__" + id to distinguish from curriculum codes
  const customUnplanned=(STATE.customCourses||[])
    .filter(cc=>!p.has("custom__"+cc.id))
    .map(cc=>"custom__"+cc.id);
  return [...currUnplanned,...customUnplanned];
}

function savePlan(){
  try{localStorage.setItem(PLANNER_KEY,JSON.stringify({
    plan:PLAN_STATE.plan,
    years:PLAN_STATE.years,
    maxRegLoad:PLAN_STATE.maxRegLoad,
    maxMidLoad:PLAN_STATE.maxMidLoad,
    diffAware:PLAN_STATE.diffAware,
    locked:[...PLAN_STATE.locked],
    isGraduatingSem:PLAN_STATE.isGraduatingSem,
  }));}catch(e){}
}
function loadPlan(){
  try{
    const raw=localStorage.getItem(PLANNER_KEY);
    if(raw){
      const d=JSON.parse(raw);
      if(d.plan&&Object.keys(d.plan).length>0){
        PLAN_STATE.plan=d.plan;
        if(d.years)PLAN_STATE.years=d.years;
        if(d.maxRegLoad)PLAN_STATE.maxRegLoad=d.maxRegLoad;
        if(d.maxMidLoad)PLAN_STATE.maxMidLoad=d.maxMidLoad;
        if(d.diffAware!==undefined)PLAN_STATE.diffAware=d.diffAware;
        if(d.locked)PLAN_STATE.locked=new Set(d.locked);
        if(d.isGraduatingSem!==undefined)PLAN_STATE.isGraduatingSem=d.isGraduatingSem;
        return;
      }
    }
  }catch(e){}
  PLAN_STATE.plan=JSON.parse(JSON.stringify(DEFAULT_PLAN));
}

// Ordered semesters for constraint checking
function orderedSems(){
  const out=[];
  const semOrd={"1st":0,"2nd":1,"Midyear":2};
  PLAN_STATE.years.forEach(y=>{
    [...y.sems].sort((a,b)=>semOrd[a]-semOrd[b]).forEach(s=>out.push({ay:y.ay,sem:s}));
  });
  return out;
}
function codesBeforeSem(tAy,tSem){
  const order=orderedSems();
  const idx=order.findIndex(o=>o.ay===tAy&&o.sem===tSem);
  const before=new Set();
  for(let i=0;i<idx;i++)(PLAN_STATE.plan[pKey(order[i].ay,order[i].sem)]||[]).forEach(c=>before.add(c));
  return before;
}

// Per-course constraint check
function checkPlannedCourse(code,ay,sem){
  const c=COURSES.find(x=>x.code===code);
  if(!c)return{violations:[],warnings:[]};
  const violations=[],warnings=[];
  const before=codesBeforeSem(ay,sem);
  const same=(PLAN_STATE.plan[pKey(ay,sem)]||[]).filter(x=>x!==code);

  // Prerequisite check: must be completed in a prior semester
  c.prereq.forEach(p=>{if(!before.has(p))violations.push(`Prereq ${p} not yet completed`);});

  // Corequisite check: must be in same or earlier sem AND itself eligible.
  // A coreq placed in the same sem but itself blocked makes this course blocked too.
  c.coreq.forEach(q=>{
    const inBefore = before.has(q);
    const inSame = same.includes(q);
    if (!inBefore && !inSame) {
      violations.push(`Coreq ${q} not in same or earlier semester`);
      return;
    }
    // Coreq is present — but is it itself eligible?
    if (inSame && !inBefore) {
      // Check if the coreq has its own prereqs satisfied before this semester
      const coreqCourse = COURSES.find(x=>x.code===q);
      if (coreqCourse) {
        const coreqPrereqsBlocked = coreqCourse.prereq.filter(p=>!before.has(p));
        if (coreqPrereqsBlocked.length > 0) {
          violations.push(`Coreq ${q} is blocked in this semester (missing: ${coreqPrereqsBlocked.join(", ")})`);
        }
      }
    }
  });

  const ex=getCExtra(code);
  if(!ex.offered.includes(sem))warnings.push(`Not normally offered in ${sem}`);
  return{violations,warnings};
}

// Per-semester load and PE/NSTP constraint
function semStats(ay,sem){
  const codes=getSlot(ay,sem);
  const isMid=sem==="Midyear";
  const peList=codes.filter(c=>getCExtra(c).peSlot);
  const nstpList=codes.filter(c=>getCExtra(c).nstpSlot);
  const peUnits=peList.reduce((s,c)=>s+(getCourseOrCustom(c)?.units||0),0);
  const nstpUnits=nstpList.reduce((s,c)=>s+(getCourseOrCustom(c)?.units||0),0);
  // Academic units = total - PE - NSTP (includes custom courses)
  const acadUnits=codes.reduce((s,c)=>s+(getCourseOrCustom(c)?.units||0),0)-peUnits-nstpUnits;
  const violations=[],warnings=[];
  // ONE PE per semester
  if(peList.length>1)violations.push(`Only 1 PE allowed per semester (${peList.length} found: ${peList.join(", ")})`);
  // Academic load rules (PE and NSTP excluded)
  if(isMid){
    if(acadUnits>PLAN_STATE.maxMidLoad)violations.push(`Midyear overload: ${acadUnits}u > ${PLAN_STATE.maxMidLoad}u limit`);
  } else {
    if(acadUnits>21)violations.push(`Overload: ${acadUnits}u > 21u max (needs approval)`);
    else if(acadUnits>PLAN_STATE.maxRegLoad)warnings.push(`${acadUnits}u exceeds your set max of ${PLAN_STATE.maxRegLoad}u`);
    if(acadUnits>0&&acadUnits<15&&!PLAN_STATE.isGraduatingSem)warnings.push(`Underload: ${acadUnits}u < 15u — affects DOST & Latin Honors`);
  }
  if(!isMid&&acadUnits+peUnits>23)warnings.push(`Total academic+PE (${acadUnits+peUnits}u) exceeds 23u`);
  // Difficulty stacking (NSTP/PE excluded from difficulty count)
  if(PLAN_STATE.diffAware){
    const hardN=codes.filter(c=>!getCExtra(c).peSlot&&!getCExtra(c).nstpSlot&&(getCExtra(c).difficulty||0)>=8).length;
    if(hardN>=4)warnings.push(`${hardN} high-difficulty courses in one semester`);
  }
  if(STATE.scholarship&&!isMid&&acadUnits>0&&acadUnits<15&&!PLAN_STATE.isGraduatingSem)
    warnings.push(`DOST: underloading (${acadUnits}u academic) may trigger scholarship review`);
  return{acadUnits,peUnits,nstpUnits,violations,warnings,isMid};
}

function allPlanAlerts(){
  const out=[];
  PLAN_STATE.years.forEach(y=>y.sems.forEach(s=>{
    const st=semStats(y.ay,s);
    st.violations.forEach(v=>out.push({type:"err",msg:`${y.ay} ${s}: ${v}`}));
    st.warnings.forEach(w=>out.push({type:"wrn",msg:`${y.ay} ${s}: ${w}`}));
    getSlot(y.ay,s).forEach(code=>{
      const cv=checkPlannedCourse(code,y.ay,s);
      cv.violations.forEach(v=>out.push({type:"err",msg:`${code}: ${v}`}));
      cv.warnings.forEach(w=>out.push({type:"wrn",msg:`${code}: ${w}`}));
    });
  }));
  return out;
}

function predictGrad(){
  const order=orderedSems();
  const plannedSet=new Set(allPlanned());
  const plannedU=COURSES.filter(c=>plannedSet.has(c.code)).reduce((s,c)=>s+c.units,0);
  const remaining=COURSES.filter(c=>!plannedSet.has(c.code));
  let lastSlot=null;
  order.forEach(o=>{if(getSlot(o.ay,o.sem).length>0)lastSlot=o;});
  const earliest=remaining.length===0&&lastSlot?`${lastSlot.sem} Sem ${lastSlot.ay}`:"Not fully planned";
  return{earliest,plannedU,totalU:COURSES.reduce((s,c)=>s+c.units,0),remaining:remaining.length};
}

// Drag handlers — locked courses cannot be dragged
// ── POINTER-EVENT DRAG ENGINE ─────────────────────────────────────
// Uses pointerdown/pointermove/pointerup instead of HTML5 drag-and-drop.
// The HTML5 DnD API blocks all wheel/trackpad scroll events at the OS level
// while a drag is active. Pointer events have no such restriction, so the
// page scrolls freely with the mouse wheel while holding a course chip.
// Edge auto-scroll runs via rAF with the same threshold/speed as before.
function planPointerDown(e, code, fromAy, fromSem) {
  if (PLAN_STATE.locked.has(code)) return;
  if (e.button !== 0) return;
  if (e.target.closest('button')) return;
  if (PLAN_STATE.multiSelectMode) return;
  e.preventDefault();
  PLAN_STATE.dragCode = code;
  PLAN_STATE.dragFrom = fromAy ? {ay: fromAy, sem: fromSem} : null;

  const srcChip = document.querySelector(`[data-pchip="${CSS.escape(code)}"]`);
  if (srcChip) srcChip.classList.add("is-dragging");

  // Ghost chip follows cursor
  const ghost = document.createElement("div");
  ghost.id = "_planner_ghost";
  ghost.className = "planner-chip";
  ghost.style.cssText = [
    "position:fixed","z-index:9999","pointer-events:none","opacity:0.85",
    "min-width:120px","max-width:220px","box-shadow:0 4px 16px rgba(0,0,0,.22)",
    "background:" + (srcChip ? getComputedStyle(srcChip).background : "#fff"),
    "border:1.5px solid #7B1113","padding:5px 8px","border-radius:7px",
  ].join(";");
  ghost.textContent = code;
  document.body.appendChild(ghost);

  function moveGhost(cx, cy) {
    ghost.style.left = (cx + 12) + "px";
    ghost.style.top  = (cy - 16) + "px";
  }
  moveGhost(e.clientX, e.clientY);

  // Edge auto-scroll via rAF
  let cursorY = e.clientY;
  const threshold = 80, maxSpeed = 18;
  let rafId;
  function scrollStep() {
    if (!PLAN_STATE.dragCode) return;
    const vh = window.innerHeight;
    const distTop = cursorY, distBot = vh - cursorY;
    if (distTop < threshold && distTop > 0)
      window.scrollBy(0, -maxSpeed * (1 - distTop / threshold));
    else if (distBot < threshold && distBot > 0)
      window.scrollBy(0,  maxSpeed * (1 - distBot / threshold));
    rafId = requestAnimationFrame(scrollStep);
  }
  rafId = requestAnimationFrame(scrollStep);

  let lastDrop = null;

  function onMove(ev) {
    cursorY = ev.clientY;
    moveGhost(ev.clientX, ev.clientY);
    const el = document.elementFromPoint(ev.clientX, ev.clientY);
    const dropZone = el ? el.closest("[data-pdrop]") : null;
    if (dropZone !== lastDrop) {
      document.querySelectorAll(".planner-drop").forEach(z => z.classList.remove("drag-over"));
      if (dropZone) dropZone.classList.add("drag-over");
      lastDrop = dropZone;
    }
  }

  function onUp(ev) {
    cancelAnimationFrame(rafId);
    document.removeEventListener("pointermove",   onMove);
    document.removeEventListener("pointerup",     onUp);
    document.removeEventListener("pointercancel", onUp);
    ghost.remove();
    document.querySelectorAll(".is-dragging").forEach(el => el.classList.remove("is-dragging"));
    document.querySelectorAll(".planner-drop").forEach(z => z.classList.remove("drag-over"));
    if (!PLAN_STATE.dragCode) return;
    const el = document.elementFromPoint(ev.clientX, ev.clientY);
    const dropZone = el ? el.closest("[data-pdrop]") : null;
    const poolZone = el ? el.closest(".planner-pool") : null;
    if (dropZone) {
      const [ay, sem] = dropZone.dataset.pdrop.split("||");
      const code2 = PLAN_STATE.dragCode;
      if (PLAN_STATE.dragFrom) {
        const fk = pKey(PLAN_STATE.dragFrom.ay, PLAN_STATE.dragFrom.sem);
        PLAN_STATE.plan[fk] = (PLAN_STATE.plan[fk]||[]).filter(c => c !== code2);
      }
      const tk = pKey(ay, sem);
      if (!PLAN_STATE.plan[tk]) PLAN_STATE.plan[tk] = [];
      if (!PLAN_STATE.plan[tk].includes(code2)) PLAN_STATE.plan[tk].push(code2);
      PLAN_STATE.dragCode = null; PLAN_STATE.dragFrom = null;
      savePlan(); renderTab("planner");
    } else if (poolZone) {
      if (PLAN_STATE.dragFrom) {
        const fk = pKey(PLAN_STATE.dragFrom.ay, PLAN_STATE.dragFrom.sem);
        PLAN_STATE.plan[fk] = (PLAN_STATE.plan[fk]||[]).filter(c => c !== PLAN_STATE.dragCode);
      }
      PLAN_STATE.dragCode = null; PLAN_STATE.dragFrom = null;
      savePlan(); renderTab("planner");
    } else {
      PLAN_STATE.dragCode = null; PLAN_STATE.dragFrom = null;
      renderTab("planner");
    }
  }

  document.addEventListener("pointermove",   onMove);
  document.addEventListener("pointerup",     onUp);
  document.addEventListener("pointercancel", onUp);
}
// Legacy stubs — harmless no-ops kept for safety
function planDragStart(e, code, fromAy, fromSem) { e.preventDefault(); }
function planDragEnd() {}
function planDragOver(e, ay, sem) { e.preventDefault(); }
function planDrop(e, ay, sem) { e.preventDefault(); }
function planDropPool(e) { e.preventDefault(); }
function planRemove(code,ay,sem){
  const k=pKey(ay,sem);
  PLAN_STATE.plan[k]=(PLAN_STATE.plan[k]||[]).filter(c=>c!==code);
  savePlan();renderTab("planner");
}
function planAddYear(){
  const last=PLAN_STATE.years[PLAN_STATE.years.length-1];
  const y=parseInt(last.ay.split(" ")[1].split("-")[1]);
  PLAN_STATE.years.push({ay:`AY ${y}-${y+1}`,sems:["1st","2nd"]});
  savePlan();renderTab("planner");
}
function planToggleMidyear(ay){
  const y=PLAN_STATE.years.find(yr=>yr.ay===ay);
  if(!y)return;
  if(y.sems.includes("Midyear")){
    const k=pKey(ay,"Midyear");
    delete PLAN_STATE.plan[k];
    y.sems=y.sems.filter(s=>s!=="Midyear");
  } else {
    y.sems.push("Midyear");
  }
  savePlan();renderTab("planner");
}

function planDeleteYearPrompt(ay) {
  // Collect all courses in this year
  const yr = PLAN_STATE.years.find(y=>y.ay===ay);
  if (!yr) return;
  const allCodes = [];
  yr.sems.forEach(sem => allCodes.push(...getSlot(ay, sem)));
  const uniqueCodes = [...new Set(allCodes)];
  // Count retakes that are placed in this year
  const retakesInYear = (STATE.retakeRecords||[]).filter(r=>r.placedAy===ay);
  const courseCount = uniqueCodes.length;
  const retakeCount = retakesInYear.length;

  // Build confirmation modal
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "delete-year-modal";
  overlay.innerHTML = `<div class="modal-box">
    <div class="modal-title" style="color:#dc2626">🗑️ Delete Academic Year?</div>
    <p style="font-size:13px;color:#6b7280;margin-bottom:12px">You are about to delete:</p>
    <div style="font-size:15px;font-weight:700;color:#374151;margin-bottom:12px">${ay}</div>
    ${courseCount > 0 || retakeCount > 0 ? `
    <div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:12px">
      <div style="font-weight:700;color:#92400e;margin-bottom:5px">⚠️ This Academic Year currently contains:</div>
      ${courseCount > 0 ? `<div style="color:#374151">• ${courseCount} course${courseCount!==1?"s":""}: ${uniqueCodes.slice(0,6).join(", ")}${uniqueCodes.length>6?" …":""}</div>` : ""}
      ${retakeCount > 0 ? `<div style="color:#374151">• ${retakeCount} planned retake${retakeCount!==1?"s":""}</div>` : ""}
    </div>` : ""}
    <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 12px;margin-bottom:14px;font-size:12px">
      <div style="font-weight:700;color:#16a34a;margin-bottom:3px">✓ Safe deletion — nothing is lost:</div>
      <div style="color:#374151">• Courses move to the Available Courses pool</div>
      <div style="color:#374151">• All grades and academic history are preserved</div>
      <div style="color:#374151">• Courses can be reassigned to any other semester</div>
      <div style="color:#374151">• Completed records are never deleted</div>
    </div>
    <div class="modal-actions">
      <button class="modal-btn-cancel" onclick="document.getElementById('delete-year-modal').remove()">Cancel</button>
      <button style="padding:7px 18px;border-radius:8px;border:none;background:#dc2626;color:#fff;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit"
        onclick="planDeleteYearConfirm('${ay}')">🗑️ Delete Academic Year</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function planDeleteYearConfirm(ay) {
  document.getElementById("delete-year-modal")?.remove();

  // 1. Collect all course codes in this year across all sems
  const yr = PLAN_STATE.years.find(y=>y.ay===ay);
  if (!yr) return;
  const allCodes = [];
  yr.sems.forEach(sem => {
    allCodes.push(...getSlot(ay, sem));
    // Delete the plan slot — courses go back to pool (unplanned)
    delete PLAN_STATE.plan[pKey(ay, sem)];
  });

  // 2. Remove the year entry from PLAN_STATE.years
  PLAN_STATE.years = PLAN_STATE.years.filter(y=>y.ay!==ay);

  // 3. Clean up semesterMap entries for this year (Grade Manager)
  if (STATE.semesterMap) {
    Object.keys(STATE.semesterMap).forEach(k => {
      if (STATE.semesterMap[k]?.ay === ay) delete STATE.semesterMap[k];
    });
  }

  // 4. Retakes placed in this year: keep records but clear placedAy/placedSem
  // so they appear as unplaced in the Planned Retakes section
  (STATE.retakeRecords||[]).forEach(r => {
    if (r.placedAy === ay) { r.placedAy = ""; r.placedSem = ""; }
  });

  savePlan();
  saveState();
  renderTab("planner");

  // Show toast
  const banner = document.createElement("div");
  banner.style.cssText = "position:fixed;top:70px;right:20px;background:#374151;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:700;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,.2)";
  banner.textContent = `✓ ${ay} deleted — ${allCodes.length} course(s) returned to Available Courses`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 3500);
}
function planReset(){
  // Preserve locked courses: collect their current positions first
  const lockedPositions={};
  PLAN_STATE.years.forEach(yr=>yr.sems.forEach(s=>{
    getSlot(yr.ay,s).forEach(code=>{
      if(PLAN_STATE.locked.has(code)) lockedPositions[code]={ay:yr.ay,sem:s};
    });
  }));
  // Reset to default (only for unlocked)
  const newPlan=JSON.parse(JSON.stringify(DEFAULT_PLAN));
  // Remove locked codes from wherever default puts them
  Object.keys(newPlan).forEach(k=>{
    newPlan[k]=newPlan[k].filter(c=>!PLAN_STATE.locked.has(c));
  });
  // Re-inject locked courses at their saved positions
  Object.entries(lockedPositions).forEach(([code,pos])=>{
    const k=pKey(pos.ay,pos.sem);
    if(!newPlan[k])newPlan[k]=[];
    if(!newPlan[k].includes(code))newPlan[k].push(code);
  });
  PLAN_STATE.plan=newPlan;
  savePlan();renderTab("planner");
}
function planOptimize(){
  // Step 1: collect locked course positions (fixed constraints)
  const lockedPos={};
  PLAN_STATE.years.forEach(yr=>yr.sems.forEach(s=>{
    getSlot(yr.ay,s).forEach(code=>{
      if(PLAN_STATE.locked.has(code)) lockedPos[code]={ay:yr.ay,sem:s};
    });
  }));

  // Step 2: reset plan, re-inject locked courses first
  PLAN_STATE.plan={};
  Object.entries(lockedPos).forEach(([code,pos])=>{
    const k=pKey(pos.ay,pos.sem);
    if(!PLAN_STATE.plan[k])PLAN_STATE.plan[k]=[];
    PLAN_STATE.plan[k].push(code);
  });

  // Step 3: optimize unlocked courses only
  const order=orderedSems();
  const passed=new Set();
  // seed passed with locked courses that come "before" in order
  // We do a pass through order to build passed progressively
  const remaining=COURSES.filter(c=>!PLAN_STATE.locked.has(c.code));

  // Pre-seed passed with locked courses (treat as already placed)
  PLAN_STATE.locked.forEach(code=>passed.add(code));

  for(const slot of order){
    const{ay,sem}=slot;
    const isMid=sem==="Midyear";
    const maxU=isMid?PLAN_STATE.maxMidLoad:Math.min(PLAN_STATE.maxRegLoad,21);
    const k=pKey(ay,sem);
    if(!PLAN_STATE.plan[k])PLAN_STATE.plan[k]=[];

    // Compute units already used by locked courses in this slot
    const lockedInSlot=PLAN_STATE.plan[k].filter(c=>PLAN_STATE.locked.has(c));
    const lockedPE=lockedInSlot.filter(c=>getCExtra(c).peSlot||false);
    const lockedNSTP=lockedInSlot.filter(c=>getCExtra(c).nstpSlot||false);
    let acadU=lockedInSlot.reduce((s,c)=>s+(COURSES.find(x=>x.code===c)?.units||0),0)
              -lockedPE.reduce((s,c)=>s+(COURSES.find(x=>x.code===c)?.units||0),0)
              -lockedNSTP.reduce((s,c)=>s+(COURSES.find(x=>x.code===c)?.units||0),0);
    let peAdded=lockedPE.length;
    let diffSum=0;

    // Also add locked courses in this slot to passed
    lockedInSlot.forEach(c=>passed.add(c));

    // candidateCodes = codes we're about to place this slot (built up as we add)
    const candidateCodes = new Set(PLAN_STATE.plan[k] || []);

    const avail=remaining.filter(c=>{
      const ex=getCExtra(c.code);
      if(!ex.offered.includes(sem))return false;
      if(!c.prereq.every(p=>passed.has(p)))return false;
      // Coreq check: each coreq must be already passed OR going into this same slot
      // AND the coreq itself must have its own prereqs satisfied
      for (const q of c.coreq) {
        if (passed.has(q)) continue; // already completed — fine
        // Check if q is in candidateCodes (being placed this slot) AND q is eligible
        const qCourse = COURSES.find(x=>x.code===q);
        if (!qCourse) return false; // unknown coreq — block
        const qPrereqsMet = qCourse.prereq.every(p=>passed.has(p));
        if (!qPrereqsMet) return false; // coreq itself is blocked
        // qCourse is eligible to be placed concurrently — allow
      }
      return true;
    });
    avail.sort((a,b)=>{
      const aP=getCExtra(a.code).peSlot||false;
      const bP=getCExtra(b.code).peSlot||false;
      if(aP!==bP)return aP?1:-1;
      const aN=getCExtra(a.code).nstpSlot||false;
      const bN=getCExtra(b.code).nstpSlot||false;
      if(aN!==bN)return aN?1:-1;
      return (getCExtra(a.code).difficulty||5)-(getCExtra(b.code).difficulty||5);
    });
    for(const c of avail){
      const isPE=getCExtra(c.code).peSlot||false;
      const isNSTP=getCExtra(c.code).nstpSlot||false;
      if(isPE){
        if(peAdded>=1||isMid)continue;
        peAdded++;PLAN_STATE.plan[k].push(c.code);
        remaining.splice(remaining.indexOf(c),1);passed.add(c.code);continue;
      }
      if(isNSTP){
        // NSTP doesn't count toward academic load — always fits if prereqs met and not midyear
        if(isMid)continue;
        PLAN_STATE.plan[k].push(c.code);
        remaining.splice(remaining.indexOf(c),1);passed.add(c.code);continue;
      }
      const maxDiff=PLAN_STATE.diffAware?(isMid?15:28):999;
      if(acadU+c.units>maxU)continue;
      if(PLAN_STATE.diffAware&&diffSum+(getCExtra(c.code).difficulty||5)>maxDiff)continue;
      PLAN_STATE.plan[k].push(c.code);acadU+=c.units;
      diffSum+=getCExtra(c.code).difficulty||5;
      remaining.splice(remaining.indexOf(c),1);passed.add(c.code);
    }
  }
  savePlan();renderTab("planner");
}

// ── PLANNER → GRADE MANAGER SYNC ─────────────────────────────────
function syncPlannerToGrades() {
  // Build a new semesterMap from the current plan
  const newMap = {};
  PLAN_STATE.years.forEach(yr => {
    yr.sems.forEach(sem => {
      const codes = getSlot(yr.ay, sem);
      codes.forEach(code => {
        newMap[code] = {ay: yr.ay, sem};
      });
    });
  });

  // Compute summary for confirmation dialog
  const currentMap = STATE.semesterMap || {};
  let toUpdate = 0, isNew = 0, moved = 0;

  Object.entries(newMap).forEach(([code, pos]) => {
    const existing = currentMap[code];
    if (!existing) { isNew++; toUpdate++; }
    else if (existing.ay !== pos.ay || existing.sem !== pos.sem) { moved++; toUpdate++; }
    else toUpdate++;
  });

  // Build and show modal
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "sync-modal";
  overlay.innerHTML = `<div class="modal-box">
    <div class="modal-title">📅 Sync Planner → Grade Manager</div>
    <p style="font-size:13px;color:#6b7280;margin-bottom:14px">This will reorganize the Grade Manager's semester layout to match your Planner. All grades are preserved.</p>
    <div class="modal-row"><span>Total courses to sync</span><b>${Object.keys(newMap).length}</b></div>
    <div class="modal-row"><span>New placements</span><b style="color:#16a34a">${isNew}</b></div>
    <div class="modal-row"><span>Moved to different semester</span><b style="color:#1d4ed8">${moved}</b></div>
    <div class="modal-row"><span>Grades preserved</span><b style="color:#16a34a">✓ Yes — untouched</b></div>
    <div class="modal-actions">
      <button class="modal-btn-cancel" onclick="document.getElementById('sync-modal').remove()">Cancel</button>
      <button class="modal-btn-confirm" onclick="confirmSyncPlannerToGrades()">Proceed</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function confirmSyncPlannerToGrades() {
  document.getElementById("sync-modal")?.remove();

  // Build semesterMap from planner — regular courses only, never retake slots
  const newMap = {};
  PLAN_STATE.years.forEach(yr => {
    yr.sems.forEach(sem => {
      const codes = getSlot(yr.ay, sem);
      codes.forEach(code => {
        // Only map the original course — don't overwrite with a planner retake duplicate
        // Retakes are tracked via STATE.retakeRecords, not via semesterMap
        const existingEntry = STATE.semesterMap[code];
        // If existing entry is a retake entry, leave it alone
        if (existingEntry && existingEntry.isRetake) return;
        // If this course has any retake records, preserve the original attempt in its
        // existing semester — only the retake entry (r.placedAy/placedSem) should move.
        const hasRetake = (STATE.retakeRecords||[]).some(r => r.code === code);
        if (hasRetake) {
          if (existingEntry && !existingEntry.isRetake) newMap[code] = existingEntry;
          return;
        }
        // Map both curriculum and custom course codes
        newMap[code] = {ay: yr.ay, sem, isCustom: code.startsWith("custom__")};
      });
    });
  });

  // Preserve existing retake entries in semesterMap (keyed as code__retake_id)
  Object.entries(STATE.semesterMap).forEach(([k, v]) => {
    if (v && v.isRetake) newMap[k] = v;
  });

  STATE.semesterMap = newMap;
  saveState();
  updateTopBadges();
  if (currentTab === "grades") renderTab("grades");
  else if (currentTab === "dashboard") renderTab("dashboard");

  const banner = document.createElement("div");
  banner.style.cssText = "position:fixed;top:70px;right:20px;background:#1d4ed8;color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:700;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,.2)";
  banner.textContent = "✓ Grade Manager synced to Planner layout";
  document.body.appendChild(banner);
  setTimeout(()=>banner.remove(), 3000);
}

// ── LOCK HELPERS ──────────────────────────────────────────────────
function toggleLock(code){
  if(PLAN_STATE.locked.has(code)) PLAN_STATE.locked.delete(code);
  else PLAN_STATE.locked.add(code);
  savePlan();renderTab("planner");
}
function lockSelected(){
  PLAN_STATE.selected.forEach(c=>PLAN_STATE.locked.add(c));
  PLAN_STATE.selected.clear();
  savePlan();renderTab("planner");
}
function unlockSelected(){
  PLAN_STATE.selected.forEach(c=>PLAN_STATE.locked.delete(c));
  PLAN_STATE.selected.clear();
  savePlan();renderTab("planner");
}
function toggleSelectChip(code){
  if(PLAN_STATE.selected.has(code)) PLAN_STATE.selected.delete(code);
  else PLAN_STATE.selected.add(code);
  renderTab("planner");
}
function toggleMultiSelect(){
  PLAN_STATE.multiSelectMode=!PLAN_STATE.multiSelectMode;
  if(!PLAN_STATE.multiSelectMode) PLAN_STATE.selected.clear();
  renderTab("planner");
}
function lockAll(){
  allPlanned().forEach(c=>PLAN_STATE.locked.add(c));
  savePlan();renderTab("planner");
}
function unlockAll(){
  PLAN_STATE.locked.clear();
  savePlan();renderTab("planner");
}

// ── ACADEMIC HISTORY SYNC ─────────────────────────────────────────
function syncFromGrades(){
  // Read all passed courses from STATE.grades (the main grade tracker)
  const newlyCompleted=[];
  const missingFromPlan=[];
  const planned=new Set(allPlanned());

  COURSES.forEach(c=>{
    const g=STATE.grades[c.code];
    // A course is "completed" if it has a numeric grade 1.00–3.00
    const isCompleted=g&&g.num!==null&&g.num>=1.00&&g.num<=3.00;
    if(isCompleted&&!planned.has(c.code)){
      missingFromPlan.push(c.code);
    }
  });

  // Auto-place missing-from-plan completed courses into the correct default slot
  // (use the curriculum year/sem from COURSES as placement hint)
  let placed=0;
  missingFromPlan.forEach(code=>{
    const c=COURSES.find(x=>x.code===code);
    if(!c)return;
    // Find the AY key that corresponds to the curriculum year
    // Year 1 → AY 2025-2026, Year 2 → AY 2026-2027, etc.
    const ayMap={1:"AY 2025-2026",2:"AY 2026-2027",3:"AY 2027-2028",4:"AY 2028-2029"};
    const semMap={1:"1st",2:"2nd"};
    const targetAY=ayMap[c.year]||"AY 2025-2026";
    const targetSem=semMap[c.sem]||"1st";
    const k=pKey(targetAY,targetSem);
    // Make sure year/sem exists in PLAN_STATE.years
    const yearEntry=PLAN_STATE.years.find(y=>y.ay===targetAY);
    if(!yearEntry){
      PLAN_STATE.years.push({ay:targetAY,sems:["1st","2nd"]});
    }
    if(!PLAN_STATE.plan[k])PLAN_STATE.plan[k]=[];
    if(!PLAN_STATE.plan[k].includes(code)){
      PLAN_STATE.plan[k].push(code);
      placed++;
    }
    newlyCompleted.push(code);
  });

  savePlan();

  // Show result summary
  const msg=placed>0
    ?`✅ Sync complete: ${placed} completed course${placed!==1?"s":""} added to plan.\n\nCourses placed: ${newlyCompleted.join(", ")}`
    :`✅ Sync complete: plan is already up to date with your grade history.`;
  alert(msg);
  renderTab("planner");
}

function renderPlanner(el) {
  const alerts=allPlanAlerts();
  const grad=predictGrad();
  const pool=unplanned();
  const errN=alerts.filter(a=>a.type==="err").length;
  const wrnN=alerts.filter(a=>a.type==="wrn").length;
  const semOrd={"1st":0,"2nd":1,"Midyear":2};
  const lockedN=PLAN_STATE.locked.size;
  const selN=PLAN_STATE.selected.size;

  let html=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">
    <div class="section-title" style="margin:0">📅 Academic Planner</div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <div class="pt-grad-box">
        <span class="pt-grad-label">Earliest graduation</span>
        <span class="pt-grad-val">${grad.earliest}</span>
      </div>
      <div style="display:flex;gap:5px;flex-direction:column;font-size:11px">
        <span style="color:${errN?'#dc2626':'#16a34a'};font-weight:700">${errN} error${errN!==1?"s":""}</span>
        <span style="color:${wrnN?'#d97706':'#6b7280'}">${wrnN} warning${wrnN!==1?"s":""}</span>
      </div>
      ${lockedN>0?`<div style="font-size:11px;background:#e0e7ff;color:#4338ca;padding:3px 8px;border-radius:8px;font-weight:700">🔒 ${lockedN} locked</div>`:""}
    </div>
  </div>`;

  // Alerts
  if(alerts.length>0){
    html+=`<div style="margin-bottom:12px">`;
    alerts.slice(0,5).forEach(a=>{
      html+=`<div class="planner-alert ${a.type==="err"?"pa-err":"pa-wrn"}">${a.type==="err"?"❌":"⚠️"} ${a.msg}</div>`;
    });
    if(alerts.length>5)html+=`<div class="planner-alert" style="background:#f0f9ff;color:#0369a1">ℹ️ +${alerts.length-5} more issues</div>`;
    html+=`</div>`;
  }

  // Toolbar — row 1: actions
  html+=`<div class="planner-toolbar">
    <button class="pt-btn pt-primary" onclick="planOptimize()">✦ Auto-Optimize</button>
    <button class="pt-btn" onclick="planReset()">↺ Reset to Curriculum</button>
    <button class="pt-btn sync-btn" onclick="syncFromGrades()" title="Sync completed courses from grade history into the planner">🔄 Sync from Grades</button>
    <button class="pt-btn sync-grades-btn" onclick="syncPlannerToGrades()" title="Push planner semester layout to Grade Manager">📤 Sync to Grade Manager</button>
    <button class="pt-btn" onclick="planAddYear()">+ Add Year</button>
    <label style="font-size:11px;display:flex;align-items:center;gap:5px;cursor:pointer">
      <input type="checkbox" ${PLAN_STATE.diffAware?"checked":""} onchange="PLAN_STATE.diffAware=this.checked;savePlan();renderTab('planner')"> Difficulty-aware
    </label>
    <label style="font-size:11px;display:flex;align-items:center;gap:4px">
      Max load: <input type="number" value="${PLAN_STATE.maxRegLoad}" min="12" max="25"
        style="width:44px;padding:2px 5px;border:1px solid #d1d5db;border-radius:5px;font-size:11px"
        onchange="PLAN_STATE.maxRegLoad=+this.value;savePlan();renderTab('planner')">u
    </label>
    <label style="font-size:11px;display:flex;align-items:center;gap:5px;cursor:pointer" title="Suppresses the <15-unit underload warning for your final term. Does NOT affect Scholarship Graduating Year status — that's auto-detected from your last Planner year.">
      <input type="checkbox" ${PLAN_STATE.isGraduatingSem?"checked":""} onchange="PLAN_STATE.isGraduatingSem=this.checked;savePlan();renderTab('planner')"
        style="accent-color:#7B1113"> 🎓 Final Term (suppress underload warning)
    </label>
    <span style="font-size:11px;color:#6b7280">${grad.plannedU}/${grad.totalU}u · ${grad.remaining} unplaced</span>
  </div>`;

  // Toolbar — row 2: lock controls
  html+=`<div class="planner-toolbar" style="margin-top:-2px;flex-direction:column;gap:6px">
    <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;align-items:center">
      <button class="pt-btn" style="background:${PLAN_STATE.multiSelectMode?'#fef3c7':'#fff'};border-color:${PLAN_STATE.multiSelectMode?'#f59e0b':'#d1d5db'};color:${PLAN_STATE.multiSelectMode?'#92400e':'#374151'}"
        onclick="toggleMultiSelect()">${PLAN_STATE.multiSelectMode?'✓ Multi-Select ON':'Multi-Select'}</button>
      ${PLAN_STATE.multiSelectMode&&selN>0?`
        <button class="pt-btn" style="background:#e0e7ff;color:#4338ca;border-color:#a5b4fc" onclick="lockSelected()">🔒 Lock ${selN} selected</button>
        <button class="pt-btn" style="background:#fef9c3;color:#92400e;border-color:#fde047" onclick="unlockSelected()">🔓 Unlock ${selN} selected</button>
      `:""}
      <button class="pt-btn" onclick="lockAll()" title="Lock all planned courses">🔒 Lock All</button>
      <button class="pt-btn" onclick="unlockAll()" title="Unlock all courses">🔓 Unlock All</button>
    </div>
    <div style="font-size:10px;color:#9ca3af">🔒 Locked courses are protected from Optimize &amp; Reset</div>
  </div>`;

  // Pool
  if(pool.length>0){
    html+=`<div class="planner-pool">
      <div class="planner-pool-title">📥 Available Courses (${pool.length} courses · ${pool.reduce((s,c)=>s+(COURSES.find(x=>x.code===c)?.units||0),0)}u) — drag into any semester to schedule &nbsp;<span style="font-weight:400;color:#9ca3af">Courses removed from deleted years appear here</span></div>
      <div class="planner-pool-chips">`;
    pool.forEach(code=>{
      const c=getCourseOrCustom(code);if(!c)return;
      const tc=TYPE_COLOR[c.type]||"#1d4ed8";
      const tb=TYPE_BG[c.type]||"#eff6ff";
      const poolRenamed=(STATE.electiveNames||{})[code];
      const poolDisplayCode=poolRenamed?.displayCode||(c.isCustom?c.displayCode:code);
      const poolDisplayTitle=poolRenamed?.displayName||c.title;
      const poolBg=c.isCustom?"#eff6ff":tb;
      const poolColor=c.isCustom?"#1d4ed8":tc;
      html+=`<div class="pp-chip" data-pchip="${code}"
        style="background:${poolBg};color:${poolColor};border-color:${poolColor}30"
        onpointerdown="planPointerDown(event,'${code}',null,null)" title="${poolDisplayTitle}${c.isCustom?' (custom)':''}">
        ${poolDisplayCode}${c.isCustom?' <span style="font-size:8px;opacity:.7">✦</span>':''} <span style="opacity:.55;font-size:9px;font-weight:400">${c.units}u</span>
      </div>`;
    });
    html+=`</div></div>`;
  }

  // Year columns — wrapped for reliable horizontal scroll
  html+=`<div style="overflow-x:auto;overflow-y:visible;padding-bottom:4px;border-radius:8px">
  <div class="planner-years" style="justify-content:center;flex-wrap:wrap;min-width:unset;margin:0 auto">`;
  PLAN_STATE.years.forEach(yr=>{
    const hasMid=yr.sems.includes("Midyear");
    // Count courses and retakes in this year for the delete warning
    const yearCourseCount = yr.sems.reduce((s,sem)=>s+getSlot(yr.ay,sem).length, 0);
    html+=`<div class="planner-year">
      <div class="planner-year-hdr">
        <span>${yr.ay}</span>
        <div style="display:flex;gap:4px;align-items:center">
          <button style="font-size:9px;padding:1px 6px;background:rgba(255,199,44,.18);color:#FFC72C;border:1px solid rgba(255,199,44,.3);border-radius:5px;cursor:pointer"
            onclick="planToggleMidyear('${yr.ay}')">${hasMid?"−MY":"+MY"}</button>
          <button style="font-size:9px;padding:1px 5px;background:rgba(220,38,38,.18);color:#fca5a5;border:1px solid rgba(220,38,38,.3);border-radius:5px;cursor:pointer"
            onclick="planDeleteYearPrompt('${yr.ay}')" title="Delete this Academic Year">✕</button>
        </div>
      </div>`;
    [...yr.sems].sort((a,b)=>semOrd[a]-semOrd[b]).forEach((sem,si,arr)=>{
      const codes=getSlot(yr.ay,sem);
      const st=semStats(yr.ay,sem);
      const isLast=si===arr.length-1;
      let unitCls="pu-ok";
      if(st.violations.length>0)unitCls="pu-over";
      else if(st.warnings.length>0)unitCls="pu-warn";

      // Build unit label: "16u +2PE +3NSTP"
      let unitLabel=`${st.acadUnits}u`;
      if(st.peUnits)unitLabel+=` +${st.peUnits}PE`;
      if(st.nstpUnits)unitLabel+=` +${st.nstpUnits}NSTP`;

      html+=`<div class="planner-sem" style="${isLast?"border-radius:0 0 10px 10px":""}">
        <div class="planner-sem-hdr">
          <span class="planner-sem-label">${sem==="Midyear"?"Midyear":sem+" Sem"}</span>
          <span class="planner-units ${unitCls}" title="Academic: ${st.acadUnits}u${st.peUnits?" | PE: "+st.peUnits+"u":""}${st.nstpUnits?" | NSTP: "+st.nstpUnits+"u (non-academic)":""}">${unitLabel}</span>
        </div>
        <div class="planner-drop" data-pdrop="${pKey(yr.ay,sem)}">`;

      codes.forEach(code=>{
        const c=getCourseOrCustom(code);if(!c)return;
        const tc=TYPE_COLOR[c.type]||"#1d4ed8";
        const tb=TYPE_BG[c.type]||"#eff6ff";
        const cv=checkPlannedCourse(code,yr.ay,sem);
        const hasV=cv.violations.length>0;
        const hasW=cv.warnings.length>0;
        const isExtraPE=getCExtra(code).peSlot&&codes.filter(x=>getCExtra(x).peSlot).indexOf(code)>0;
        const finalV=hasV||isExtraPE;
        const isLocked=PLAN_STATE.locked.has(code);
        const isSel=PLAN_STATE.selected.has(code);
        const isNSTP=getCExtra(code).nstpSlot||false;
        const isPE=getCExtra(code).peSlot||false;
        const g=STATE.grades[code];
        const gLabel=g&&g.num!==null?` · ${g.label}`:"";
        const isCompleted=g&&g.num!==null&&g.num>=1.00&&g.num<=3.00;
        const planRenamed=(STATE.electiveNames||{})[code];
        const planDisplayCode=planRenamed?.displayCode||(c.isCustom?c.displayCode:code);
        const planDisplayTitle=planRenamed?.displayName||c.title;

        html+=`<div class="planner-chip${isLocked?" is-locked":""}${isSel?" is-selected":""}"
          data-pchip="${code}"
          style="background:${tb};border-color:${isLocked?"#6366f1":finalV?"#dc2626":hasW?"#f59e0b":tc+"28"};border-width:${isLocked||finalV||hasW?"1.5px":"0.5px"}"
          onpointerdown="planPointerDown(event,'${code}','${yr.ay}','${sem}')"
          ${PLAN_STATE.multiSelectMode?`onclick="toggleSelectChip('${code}')"`:""}>
          <div style="display:flex;align-items:center;gap:2px">
            ${PLAN_STATE.multiSelectMode?`<input type="checkbox" class="pc-select-cb" ${isSel?"checked":""} onclick="event.stopPropagation();toggleSelectChip('${code}')">`:""}
            <div class="pc-code" style="color:${tc}">${isLocked?"🔒 ":finalV?"❌ ":hasW?"⚠️ ":""}${isCompleted?"✓ ":""}${planDisplayCode}${isNSTP?`<span class="nstp-badge">NSTP</span>`:""}${isPE?`<span class="nstp-badge" style="background:#f0fdf4;color:#166534">PE</span>`:""}</div>
          </div>
          <div class="pc-title">${planDisplayTitle}</div>
          <div class="pc-meta">${c.units}u${isNSTP?" (non-academic)":isPE?" (non-academic)":""}${gLabel}</div>
          ${cv.violations.map(v=>`<div class="pc-vtag pc-err">${v}</div>`).join("")}
          ${cv.warnings.map(w=>`<div class="pc-vtag pc-wrn">${w}</div>`).join("")}
          <div style="display:flex;gap:3px;margin-top:3px">
            <button class="lock-btn ${isLocked?'locked':'unlocked'}"
              onclick="event.stopPropagation();toggleLock('${code}')">
              ${isLocked?"🔒 Locked":"🔓 Lock"}
            </button>
            ${!isLocked?`<button class="pc-remove" onclick="event.stopPropagation();planRemove('${code}','${yr.ay}','${sem}')">remove</button>`:""}
          </div>
        </div>`;
      });
      html+=`<div style="font-size:9px;color:#d1d5db;text-align:center;padding:4px">drop here</div>`;
      html+=`</div></div>`;
    });
    html+=`</div>`;
  });
  html+=`</div></div>`; // close planner-years + scroll wrapper

  // Legend
  html+=`<div class="card" style="display:flex;flex-wrap:wrap;gap:12px;font-size:11px;margin-top:4px">
    ${[["#7B1113","Major"],["#1d4ed8","Math"],["#065f46","Science"],["#6b21a8","GE"],["#7c3aed","GE Elective"],["#b45309","EEE Elective"],["#c2410c","Engg Elective"],["#0369a1","Free Elective"],["#374151","NSTP (non-acad)"],["#4b5563","PE (non-acad)"],["#4338ca","🔒 Locked"]].map(([c,l])=>`<span style="display:flex;align-items:center;gap:4px"><span style="width:9px;height:9px;background:${c};border-radius:2px;display:inline-block"></span>${l}</span>`).join("")}
  </div>`;

  el.innerHTML=html;
}
// ══════════════════════════════════════════════════════════════════
// END PLANNER ENGINE
// ══════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════
// GRADE SIMULATION WORKSPACE ENGINE
// ══════════════════════════════════════════════════════════════════

function gsNewWorkspace() {
  const ws = {
    id: Date.now(),
    courseName: "New Course",
    passingGrade: 60,          // passing threshold %
    autoAnalyze: false,
    analysisResult: null,
    components: [
      {id:1, name:"Prelim Exam",    weight:25, maxScore:100, earned:""},
      {id:2, name:"Midterm Exam",   weight:25, maxScore:100, earned:""},
      {id:3, name:"Finals Exam",    weight:50, maxScore:100, earned:""},
    ],
  };
  STATE.gsWorkspaces.push(ws);
  saveState();
  renderTab("gradesim");
}

function gsDeleteWorkspace(id) {
  STATE.gsWorkspaces = STATE.gsWorkspaces.filter(w=>w.id!==id);
  saveState();
  renderTab("gradesim");
}

function gsUpdateField(id, field, value) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===id);
  if (!ws) return;
  ws[field] = value;
  if (ws.autoAnalyze) ws.analysisResult = gsRunAnalysis(ws);
  saveState();
  if (field === "courseName") return; // Don't re-render — avoids focus loss while typing
  renderTab("gradesim");
}

function gsUpdateComponent(wsId, compId, field, value) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===wsId);
  if (!ws) return;
  const comp = ws.components.find(c=>c.id===compId);
  if (!comp) return;
  comp[field] = value === "" ? "" : (field==="name" ? value : parseFloat(value)||0);
  if (ws.autoAnalyze) ws.analysisResult = gsRunAnalysis(ws);
  saveState();
  if (field === "name") {
    // Don't re-render for name edits — just save. Avoids focus loss.
    return;
  }
  // Live-only refresh: don't re-render full tab (avoids losing focus)
  gsRefreshLive(ws);
}

function gsAddComponent(wsId) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===wsId);
  if (!ws) return;
  const newId = Date.now();
  ws.components.push({id:newId, name:"Component", weight:0, maxScore:100, earned:""});
  saveState();
  renderTab("gradesim");
}

function gsDeleteComponent(wsId, compId) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===wsId);
  if (!ws) return;
  ws.components = ws.components.filter(c=>c.id!==compId);
  saveState();
  renderTab("gradesim");
}

function gsToggleAutoAnalyze(wsId) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===wsId);
  if (!ws) return;
  ws.autoAnalyze = !ws.autoAnalyze;
  if (ws.autoAnalyze) ws.analysisResult = gsRunAnalysis(ws);
  saveState();
  renderTab("gradesim");
}

function gsComputeNow(wsId) {
  const ws = STATE.gsWorkspaces.find(w=>w.id===wsId);
  if (!ws) return;
  ws.analysisResult = gsRunAnalysis(ws);
  saveState();
  renderTab("gradesim");
}

// ── LIVE CALCULATIONS (lightweight, no re-render) ─────────────────
function gsLiveCalc(ws) {
  const totalWeight = ws.components.reduce((s,c)=>s+c.weight,0);
  let earnedPct = 0, earnedWeight = 0;
  const doneComps = [], remainingComps = [];

  ws.components.forEach(c => {
    const hasScore = c.earned !== "" && c.earned !== null && !isNaN(+c.earned);
    if (hasScore) {
      const pct = Math.min((+c.earned / (c.maxScore||1)) * 100, 100);
      earnedPct += pct * (c.weight / 100);
      earnedWeight += c.weight;
      doneComps.push({...c, pct});
    } else {
      remainingComps.push(c);
    }
  });

  const remainingWeight = totalWeight - earnedWeight;
  // Grade equivalent (UP scale, 60% pass)
  const gradeEq = gsPercentToGrade(earnedPct, earnedWeight, totalWeight, ws.passingGrade);

  return { earnedPct, earnedWeight, remainingWeight, totalWeight, doneComps, remainingComps, gradeEq };
}

function gsPercentToGrade(earnedPct, earnedWeight, totalWeight, passingPct) {
  if (totalWeight === 0) return { grade:"—", label:"—", color:"#6b7280" };
  // Project current score to what it would be if earned weight = 100%
  const projected = earnedWeight > 0 ? (earnedPct / earnedWeight) * totalWeight : 0;

  if (projected >= 96) return {grade:"1.00",label:"Excellent",color:"#16a34a"};
  if (projected >= 91) return {grade:"1.25",label:"Excellent",color:"#16a34a"};
  if (projected >= 86) return {grade:"1.50",label:"Very Good",color:"#16a34a"};
  if (projected >= 81) return {grade:"1.75",label:"Very Good",color:"#16a34a"};
  if (projected >= 76) return {grade:"2.00",label:"Good",color:"#2563eb"};
  if (projected >= 71) return {grade:"2.25",label:"Good",color:"#2563eb"};
  if (projected >= 66) return {grade:"2.50",label:"Satisfactory",color:"#2563eb"};
  if (projected >= 61) return {grade:"2.75",label:"Satisfactory",color:"#d97706"};
  if (projected >= passingPct) return {grade:"3.00",label:"Passing",color:"#d97706"};
  if (projected >= passingPct * 0.6) return {grade:"4.00 (INC)",label:"Incomplete",color:"#9333ea"};
  return {grade:"5.00",label:"Failed",color:"#dc2626"};
}

function gsRefreshLive(ws) {
  const live = gsLiveCalc(ws);
  const el = document.getElementById(`gsw-live-${ws.id}`);
  if (!el) return;
  const gra = live.gradeEq;
  el.innerHTML = `
    <div class="gsw-stat"><div class="gsw-stat-label">Current %</div><div class="gsw-stat-value">${live.earnedWeight>0?(live.earnedPct).toFixed(1)+"%":"—"}</div><div class="gsw-stat-sub">${live.earnedWeight}/${live.totalWeight}% weight done</div></div>
    <div class="gsw-stat"><div class="gsw-stat-label">Grade Equivalent</div><div class="gsw-stat-value" style="color:${gra.color}">${gra.grade}</div><div class="gsw-stat-sub">${gra.label}</div></div>
    <div class="gsw-stat"><div class="gsw-stat-label">Completed</div><div class="gsw-stat-value">${live.doneComps.length}</div><div class="gsw-stat-sub">of ${ws.components.length} components</div></div>
    <div class="gsw-stat"><div class="gsw-stat-label">Remaining Weight</div><div class="gsw-stat-value">${live.remainingWeight}%</div><div class="gsw-stat-sub">${live.remainingComps.length} component(s) left</div></div>
    <div class="gsw-stat"><div class="gsw-stat-label">Progress</div><div class="gsw-stat-value">${live.totalWeight>0?Math.round((live.earnedWeight/live.totalWeight)*100)+"%":"—"}</div><div class="gsw-stat-sub">toward ${ws.passingGrade}% passing</div></div>
  `;
}

// ── ADVANCED ANALYSIS (runs on demand / auto-analyze) ─────────────
function gsRunAnalysis(ws) {
  const live = gsLiveCalc(ws);
  const { earnedPct, remainingWeight, doneComps, remainingComps, totalWeight } = live;

  // Target grades map: UP grade → minimum % needed
  const targets = [
    {grade:"1.00", minPct:96}, {grade:"1.25", minPct:91}, {grade:"1.50", minPct:86},
    {grade:"1.75", minPct:81}, {grade:"2.00", minPct:76}, {grade:"2.25", minPct:71},
    {grade:"2.50", minPct:66}, {grade:"2.75", minPct:61}, {grade:"3.00", minPct:ws.passingGrade},
  ];

  const targetAnalysis = targets.map(t => {
    const needed = t.minPct - earnedPct; // still need this many % points from remaining weight
    const reqAvg = remainingWeight > 0 ? (needed / remainingWeight) * 100 : null;
    const feasible = reqAvg !== null && reqAvg <= 100;
    const impossible = reqAvg !== null && reqAvg > 100;
    // Per-component required score (if remaining comps share equally)
    const perComp = remainingComps.length > 0 && reqAvg !== null
      ? remainingComps.map(c => ({
          name: c.name,
          needed: Math.min((reqAvg / 100) * c.maxScore, c.maxScore),
          max: c.maxScore,
        }))
      : [];
    return { ...t, needed, reqAvg, feasible, impossible, perComp };
  });

  // Best case: all remaining = perfect
  const bestCasePct = earnedPct + remainingWeight;
  const bestGrade = gsPercentToGrade(bestCasePct, totalWeight, totalWeight, ws.passingGrade);

  // Worst case: all remaining = 0
  const worstGrade = gsPercentToGrade(earnedPct, totalWeight, totalWeight, ws.passingGrade);

  // Removal exam analysis
  const worstNum = parseFloat(worstGrade.grade);
  const bestNum  = parseFloat(bestGrade.grade);
  const removalNeeded = (worstNum >= 4 || bestNum >= 4) || (worstNum >= 3.5);

  return { targetAnalysis, bestCasePct, bestGrade, worstGrade, removalNeeded, live };
}

// ── RENDER GRADE SIM TAB ─────────────────────────────────────────
function renderGradeSim(el) {
  let html = `
  <div class="gsw-workspace-header">
    <div class="section-title" style="margin:0">🧮 Grade Simulation Workspace</div>
    <button class="gsw-analyze-btn" onclick="gsNewWorkspace()" style="background:#065f46">+ New Workspace</button>
  </div>
  <div style="font-size:12px;color:#6b7280;margin-bottom:14px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:8px 12px">
    ℹ️ <b>Live calculations</b> update as you type. Click <b>Analyze Requirements</b> to run the full target-grade analysis for each workspace.
  </div>`;

  if (STATE.gsWorkspaces.length === 0) {
    html += `<div style="text-align:center;padding:40px 20px;color:#9ca3af">
      <div style="font-size:32px;margin-bottom:10px">🧮</div>
      <div style="font-size:14px;font-weight:600;margin-bottom:6px">No workspaces yet</div>
      <div style="font-size:12px;margin-bottom:16px">Create a workspace for each course you want to simulate grades for.</div>
      <button class="gsw-analyze-btn" onclick="gsNewWorkspace()">+ Create First Workspace</button>
    </div>`;
  }

  STATE.gsWorkspaces.forEach(ws => {
    const live = gsLiveCalc(ws);
    const gra = live.gradeEq;
    const totalW = ws.components.reduce((s,c)=>s+c.weight,0);

    html += `<div class="gsw-card">
      <div class="gsw-title-row">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <input value="${ws.courseName}" style="font-size:14px;font-weight:700;color:#7B1113;border:none;background:transparent;border-bottom:1.5px solid #e5e7eb;padding:2px 4px;width:220px;font-family:inherit"
            onchange="gsUpdateField(${ws.id},'courseName',this.value)" onblur="gsUpdateField(${ws.id},'courseName',this.value)">
          <span style="font-size:11px;padding:2px 8px;border-radius:8px;background:${gra.color}18;color:${gra.color};font-weight:700;border:1px solid ${gra.color}30">${gra.grade} — ${gra.label}</span>
          ${totalW !== 100 ? `<span style="font-size:10px;color:#dc2626;font-weight:600">⚠️ Weights sum to ${totalW}% (should be 100%)</span>` : ""}
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          <label class="gsw-auto-toggle" title="Auto Analyze: refreshes analysis on every change">
            <input type="checkbox" ${ws.autoAnalyze?"checked":""} onchange="gsToggleAutoAnalyze(${ws.id})" style="accent-color:#7B1113">
            <span>Auto Analyze</span>
          </label>
          <button class="gsw-analyze-btn" onclick="gsComputeNow(${ws.id})">📊 Analyze Requirements</button>
          <button onclick="gsDeleteWorkspace(${ws.id})" style="padding:5px 10px;border-radius:7px;border:1px solid #fca5a5;background:transparent;color:#dc2626;cursor:pointer;font-size:11px;font-family:inherit">✕ Remove</button>
        </div>
      </div>

      <!-- LIVE STATS (always visible, always live) -->
      <div id="gsw-live-${ws.id}" class="gsw-live-grid">
        <div class="gsw-stat"><div class="gsw-stat-label">Current %</div><div class="gsw-stat-value">${live.earnedWeight>0?live.earnedPct.toFixed(1)+"%":"—"}</div><div class="gsw-stat-sub">${live.earnedWeight}/${live.totalWeight}% weight done</div></div>
        <div class="gsw-stat"><div class="gsw-stat-label">Grade Equivalent</div><div class="gsw-stat-value" style="color:${gra.color}">${gra.grade}</div><div class="gsw-stat-sub">${gra.label}</div></div>
        <div class="gsw-stat"><div class="gsw-stat-label">Completed</div><div class="gsw-stat-value">${live.doneComps.length}</div><div class="gsw-stat-sub">of ${ws.components.length} components</div></div>
        <div class="gsw-stat"><div class="gsw-stat-label">Remaining Weight</div><div class="gsw-stat-value">${live.remainingWeight}%</div><div class="gsw-stat-sub">${live.remainingComps.length} component(s) left</div></div>
        <div class="gsw-stat"><div class="gsw-stat-label">Progress</div><div class="gsw-stat-value">${live.totalWeight>0?Math.round((live.earnedWeight/live.totalWeight)*100)+"%":"—"}</div><div class="gsw-stat-sub">toward ${ws.passingGrade}% passing</div></div>
      </div>

      <!-- COMPONENT TABLE -->
      <div style="margin-bottom:4px">
        <div class="gsw-component-hdr">
          <span>Component</span><span>Weight (%)</span><span>Max Score</span><span>Score Earned</span><span></span>
        </div>
        ${ws.components.map(c => `
          <div class="gsw-component-row">
            <input class="gsw-input" value="${c.name}" placeholder="Component name"
              oninput="gsUpdateComponent(${ws.id},${c.id},'name',this.value)">
            <input class="gsw-input" type="number" value="${c.weight}" min="0" max="100" placeholder="Weight"
              oninput="gsUpdateComponent(${ws.id},${c.id},'weight',this.value)">
            <input class="gsw-input" type="number" value="${c.maxScore}" min="1" placeholder="Max"
              oninput="gsUpdateComponent(${ws.id},${c.id},'maxScore',this.value)">
            <input class="gsw-input" type="number" value="${c.earned}" min="0" placeholder="—"
              oninput="gsUpdateComponent(${ws.id},${c.id},'earned',this.value)"
              style="border-color:${c.earned!==""?"#7B1113":"#d1d5db"}">
            <button class="gsw-del-btn" onclick="gsDeleteComponent(${ws.id},${c.id})">✕</button>
          </div>`).join("")}
        <div style="display:flex;gap:8px;margin-top:6px;align-items:center">
          <button class="gsw-add-btn" onclick="gsAddComponent(${ws.id})">+ Add Component</button>
          <label style="font-size:11px;color:#6b7280;display:flex;align-items:center;gap:4px">
            Passing %: <input type="number" value="${ws.passingGrade}" min="1" max="100"
              style="width:48px;padding:3px 6px;border:1px solid #d1d5db;border-radius:5px;font-size:11px"
              onchange="gsUpdateField(${ws.id},'passingGrade',+this.value)">
          </label>
        </div>
      </div>

      <!-- ADVANCED ANALYSIS PANEL (only when computed) -->
      ${ws.analysisResult ? gsRenderAnalysis(ws, ws.analysisResult) : `<div style="font-size:11px;color:#9ca3af;margin-top:8px;padding:8px;text-align:center;background:#f9fafb;border-radius:6px">Click <b>Analyze Requirements</b> to see target scores, best/worst case, and removal exam analysis.</div>`}
    </div>`;
  });

  el.innerHTML = html;
}

function gsRenderAnalysis(ws, result) {
  const { targetAnalysis, bestCasePct, bestGrade, worstGrade, removalNeeded } = result;

  let html = `<div class="gsw-analysis-panel">
    <div class="gsw-analysis-title">📊 Advanced Analysis</div>

    <!-- Best / Worst Case -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div class="gsw-scenario-box gsw-best">
        <div style="font-weight:700;color:#16a34a;margin-bottom:3px">🌟 Best Case (Perfect Remaining)</div>
        <div style="font-size:13px;font-weight:700;color:${bestGrade.color}">${bestGrade.grade} — ${bestGrade.label}</div>
        <div style="font-size:10px;color:#374151;margin-top:2px">If you score 100% on all remaining ${result.live.remainingComps.length} component(s): ${bestCasePct.toFixed(1)}% total</div>
      </div>
      <div class="gsw-scenario-box gsw-worst">
        <div style="font-weight:700;color:#dc2626;margin-bottom:3px">💀 Worst Case (Zero Remaining)</div>
        <div style="font-size:13px;font-weight:700;color:${worstGrade.color}">${worstGrade.grade} — ${worstGrade.label}</div>
        <div style="font-size:10px;color:#374151;margin-top:2px">If you score 0 on all remaining components: ${result.live.earnedPct.toFixed(1)}% total</div>
      </div>
    </div>

    <!-- Target Grade Table -->
    <div style="font-weight:700;font-size:11px;color:#374151;margin-bottom:6px">Target Grade Requirements</div>
    ${result.live.remainingComps.length === 0
      ? `<div style="font-size:11px;color:#16a34a;padding:6px;background:#dcfce7;border-radius:6px">All components completed. Final grade: <b>${result.live.gradeEq.grade}</b></div>`
      : `<div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:11px">
          <thead><tr style="background:#f8fafc">
            <th style="padding:5px 8px;text-align:left;border-bottom:1px solid #e5e7eb">Target</th>
            <th style="padding:5px 8px;text-align:left;border-bottom:1px solid #e5e7eb">Avg % Needed</th>
            ${result.live.remainingComps.map(c=>`<th style="padding:5px 8px;text-align:left;border-bottom:1px solid #e5e7eb">${c.name}</th>`).join("")}
            <th style="padding:5px 8px;text-align:left;border-bottom:1px solid #e5e7eb">Feasible?</th>
          </tr></thead>
          <tbody>
          ${targetAnalysis.map(t => {
            const feasClass = t.feasible ? "#16a34a" : "#dc2626";
            const feasLabel = t.reqAvg===null ? "Already reached" : t.feasible ? `✓ Yes` : `✗ No (need ${t.reqAvg?.toFixed(1)}%)`;
            return `<tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:5px 8px;font-weight:700;color:#7B1113">${t.grade}</td>
              <td style="padding:5px 8px">${t.reqAvg===null?"—":t.reqAvg.toFixed(1)+"%"}</td>
              ${t.perComp.map(p=>`<td style="padding:5px 8px">${p.needed.toFixed(1)} / ${p.max}</td>`).join("")}
              <td style="padding:5px 8px;font-weight:700;color:${feasClass}">${feasLabel}</td>
            </tr>`;
          }).join("")}
          </tbody>
        </table>
      </div>`
    }

    <!-- Removal Exam -->
    ${removalNeeded ? `<div class="gsw-removal">
      <div style="font-weight:700;color:#92400e;margin-bottom:5px">⚠️ Removal Exam Analysis</div>
      <div style="font-size:11px;color:#374151;margin-bottom:4px">A grade of 4.00 (INC) is possible based on your current trajectory. Removal exam outcomes:</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <div style="background:#dcfce7;border:1px solid #86efac;border-radius:6px;padding:6px 10px;font-size:11px">
          <div style="font-weight:700;color:#16a34a">Pass Removal Exam</div>
          <div style="color:#374151">→ Final Grade: <b>3.00</b></div>
          <div style="color:#6b7280;font-size:10px">Scholarship: check grade req. for your year</div>
        </div>
        <div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:6px;padding:6px 10px;font-size:11px">
          <div style="font-weight:700;color:#dc2626">Fail Removal Exam</div>
          <div style="color:#374151">→ Final Grade: <b>5.00</b></div>
          <div style="color:#6b7280;font-size:10px">May trigger DOST scholarship deficiency policy</div>
        </div>
      </div>
    </div>` : ""}
  </div>`;
  return html;
}

// ══════════════════════════════════════════════════════════════════
// SCHOLARSHIP TAB ACCESSIBILITY FIX
// ══════════════════════════════════════════════════════════════════

function setScholarshipType(type) {
  STATE.scholarshipType = type;
  // Keep legacy STATE.scholarship in sync for existing evaluators
  STATE.scholarship = (type !== "None");
  saveState();
  renderTab("scholarship");
}

function setCustomScholarshipName(name) {
  STATE.customScholarshipName = name;
  saveState();
  // Don't re-render — avoids focus loss while typing
}

function resetScholarshipConfig() {
  if (!confirm("Reset scholarship configuration? This will reset type, status, and year settings. Your grades and academic history will NOT be affected.")) return;
  STATE.scholarshipType = "None";
  STATE.scholarship = false;
  STATE.yearInScholarship = 1;
  STATE.prevDeficiency = false;
  STATE.customScholarshipName = "";
  STATE.scholarSubTab = "status";
  saveState();
  renderTab("scholarship");
}

// ══════════════════════════════════════════════════════════════════
// RETAKE WORKFLOW ENGINE
// ══════════════════════════════════════════════════════════════════

function showRetakeModal(code, gradeNum, course) {
  const container = document.getElementById("retake-modal-container");
  if (!container) return;

  const courseTitle = course ? course.title : code;
  // Determine current planner placement for context
  let currentPlacement = "";
  const mapped = STATE.semesterMap[code];
  if (mapped) currentPlacement = `${mapped.ay} — ${mapped.sem} Semester`;

  if (gradeNum === 5.00) {
    container.innerHTML = `
    <div class="retake-modal-overlay" id="retake-overlay" onclick="if(event.target.id==='retake-overlay')closeRetakeModal()">
      <div class="retake-modal">
        <div class="retake-modal-title">⚠️ Failed Grade — Retake Required</div>
        <div class="retake-modal-sub">${code} · ${courseTitle}${currentPlacement ? ` · was in ${currentPlacement}` : ""}</div>
        <div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px;margin-bottom:14px;font-size:12px">
          <span style="font-weight:700;color:#dc2626">Grade: 5.00 (Failed)</span><br>
          <span style="color:#374151">This course must be retaken. The original failed attempt will be preserved in your academic history.</span>
        </div>
        <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:8px">Schedule retake placement:</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
          <div>
            <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Academic Year</div>
            <select id="retake-ay" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
              <option value="">— Select AY —</option>
              ${(typeof PLAN_STATE !== "undefined" ? PLAN_STATE.years : []).map(y=>`<option value="${y.ay}">${y.ay}</option>`).join("")}
            </select>
            <div style="font-size:10px;color:#9ca3af;margin-top:3px">Add years in the Planner first if missing.</div>
          </div>
          <div>
            <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Semester</div>
            <select id="retake-sem" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="Midyear">Midyear</option>
            </select>
          </div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="retake-btn retake-btn-primary" onclick="confirmRetake('${code}','5.00')">📋 Schedule Retake</button>
          <button class="retake-btn retake-btn-outline" onclick="closeRetakeModal()">Dismiss</button>
        </div>
        <div style="font-size:10px;color:#9ca3af;margin-top:10px">The original grade record is preserved. The retake will appear as <b>${code} (Retake)</b> with status: Planned.</div>
      </div>
    </div>`;
  } else if (gradeNum === 4.00) {
    container.innerHTML = `
    <div class="retake-modal-overlay" id="retake-overlay" onclick="if(event.target.id==='retake-overlay')closeRetakeModal()">
      <div class="retake-modal">
        <div class="retake-modal-title">⚠️ Incomplete Grade (4.00)</div>
        <div class="retake-modal-sub">${code} · ${courseTitle}${currentPlacement ? ` · was in ${currentPlacement}` : ""}</div>
        <div style="background:#fef3c7;border:1px solid #fde68a;border-radius:8px;padding:10px 12px;margin-bottom:14px;font-size:12px">
          <span style="font-weight:700;color:#d97706">Grade: 4.00 (INC)</span><br>
          <span style="color:#374151">A grade of 4.00 means you may take a Removal Examination to attempt to pass, or retake the course entirely.</span>
        </div>
        <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:10px">Choose an option:</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
          <button class="retake-btn retake-btn-warn" style="text-align:left;padding:10px 14px" onclick="confirmRemovalExam('${code}')">
            <div style="font-weight:700;margin-bottom:2px">📝 Take Removal Examination</div>
            <div style="font-size:10px;font-weight:400;color:#92400e">Sets status to "Pending Removal Exam". You can later record pass (→ 3.00) or fail (→ 5.00).</div>
          </button>
          <button class="retake-btn retake-btn-outline" style="text-align:left;padding:10px 14px" onclick="showRetakeScheduler('${code}','4.00')">
            <div style="font-weight:700;margin-bottom:2px">🔄 Retake Course</div>
            <div style="font-size:10px;font-weight:400;color:#7B1113">Skip removal exam and schedule a full retake. Original 4.00 grade is preserved.</div>
          </button>
        </div>
        <button class="retake-btn retake-btn-outline" style="border-color:#d1d5db;color:#6b7280" onclick="closeRetakeModal()">Dismiss</button>
      </div>
    </div>`;
  }
}

function showRetakeScheduler(code, originalGrade) {
  const container = document.getElementById("retake-modal-container");
  if (!container) return;
  const course = COURSES.find(c=>c.code===code);
  const courseTitle = course ? course.title : code;

  // Build AY options from existing planner years only — no new years created
  const ayOptions = (typeof PLAN_STATE !== "undefined" ? PLAN_STATE.years : [])
    .map(y => `<option value="${y.ay}">${y.ay}</option>`).join("");

  container.innerHTML = `
  <div class="retake-modal-overlay" id="retake-overlay" onclick="if(event.target.id==='retake-overlay')closeRetakeModal()">
    <div class="retake-modal">
      <div class="retake-modal-title">🔄 Schedule Course Retake</div>
      <div class="retake-modal-sub">${code} · ${courseTitle} · Original grade: ${originalGrade}</div>
      <div style="font-size:12px;font-weight:700;color:#374151;margin-bottom:8px">Select retake placement:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Academic Year</div>
          <select id="retake-ay" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
            <option value="">— Select AY —</option>
            ${ayOptions}
          </select>
          <div style="font-size:10px;color:#9ca3af;margin-top:3px">Only your existing plan years are shown. Add years in the Planner first.</div>
        </div>
        <div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Semester</div>
          <select id="retake-sem" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
            <option value="Midyear">Midyear</option>
          </select>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="retake-btn retake-btn-primary" onclick="confirmRetake('${code}','${originalGrade}')">📋 Confirm Retake</button>
        <button class="retake-btn retake-btn-outline" onclick="closeRetakeModal()">Cancel</button>
      </div>
      <div style="font-size:10px;color:#9ca3af;margin-top:10px">Original grade is preserved. Retake syncs to Grade Manager and Planner automatically. No new Academic Year is created.</div>
    </div>
  </div>`;
}

function confirmRetake(code, originalGrade) {
  const ay = document.getElementById("retake-ay")?.value?.trim() || "";
  const sem = document.getElementById("retake-sem")?.value || "1st";

  // Guard: require an AY to be selected — no new years created automatically
  if (!ay) {
    const ayEl = document.getElementById("retake-ay");
    if (ayEl) { ayEl.style.borderColor = "#dc2626"; ayEl.focus(); }
    const errId = "retake-ay-err";
    if (!document.getElementById(errId)) {
      const err = document.createElement("div");
      err.id = errId;
      err.style.cssText = "color:#dc2626;font-size:10px;margin-top:4px";
      err.textContent = "Please select an Academic Year.";
      ayEl?.parentElement?.appendChild(err);
    }
    return;
  }

  const record = {
    id: Date.now(),
    code,
    originalGrade,
    retakeStatus: "planned",
    removalStatus: null,
    placedAy: ay,
    placedSem: sem,
    createdAt: new Date().toISOString(),
  };
  STATE.retakeRecords.push(record);

  // ── Sync retake into Grade Manager semesterMap ────────────────
  if (!STATE.semesterMap) STATE.semesterMap = {};
  // Use a retake-specific key so the original placement is untouched
  STATE.semesterMap[code + "__retake_" + record.id] = {
    ay, sem, isRetake: true, originalCode: code
  };

  // ── Sync retake into Planner — into EXISTING year only ───────
  if (typeof PLAN_STATE !== "undefined") {
    const planK = pKey(ay, sem);
    // Only add to an existing year — NEVER create a new one here
    const planYear = PLAN_STATE.years.find(y => y.ay === ay);
    if (planYear) {
      // Ensure the chosen semester exists on that year
      if (!planYear.sems.includes(sem)) planYear.sems.push(sem);
      if (!PLAN_STATE.plan[planK]) PLAN_STATE.plan[planK] = [];
      if (!PLAN_STATE.plan[planK].includes(code)) {
        PLAN_STATE.plan[planK].push(code);
      }
      savePlan();
    }
  }

  saveState();
  closeRetakeModal();
  renderTab(currentTab);
  showRetakeToast(
    `✅ Retake scheduled: ${code} — ${ay} ${sem} Semester · Status: Planned · Synced to Planner & Grade Manager`
  );
}

function confirmRemovalExam(code) {
  const record = {
    id: Date.now(),
    code,
    originalGrade: "4.00",
    retakeStatus: null,
    removalStatus: "pending",
    placedAy: "",
    placedSem: "",
    createdAt: new Date().toISOString(),
  };
  STATE.retakeRecords.push(record);
  saveState();
  closeRetakeModal();
  renderTab(currentTab);
  showRetakeToast(`📝 ${code} marked as Pending Removal Exam. Record the outcome in Grade Manager.`);
}

function recordRemovalOutcome(recordId, outcome) {
  // outcome: "passed" or "failed"
  const rec = STATE.retakeRecords.find(r=>r.id===recordId);
  if (!rec) return;
  rec.removalStatus = outcome;
  if (outcome === "passed") {
    // Update the actual grade to 3.00
    const found = GRADE_OPTIONS.find(g=>g.label==="3.00");
    if (found) STATE.grades[rec.code] = found;
  } else if (outcome === "failed") {
    // Update grade to 5.00 and offer retake
    const found = GRADE_OPTIONS.find(g=>g.label==="5.00");
    if (found) STATE.grades[rec.code] = found;
    rec.removalStatus = "failed";
  }
  saveState();
  updateTopBadges();
  renderTab(currentTab);
  if (outcome === "failed") {
    const course = COURSES.find(c=>c.code===rec.code);
    setTimeout(()=>showRetakeSchedulerAfterFail(rec.code, course), 100);
  }
}

function showRetakeSchedulerAfterFail(code, course) {
  const courseTitle = course ? course.title : code;
  const container = document.getElementById("retake-modal-container");
  if (!container) return;
  container.innerHTML = `
  <div class="retake-modal-overlay" id="retake-overlay" onclick="if(event.target.id==='retake-overlay')closeRetakeModal()">
    <div class="retake-modal">
      <div class="retake-modal-title">❌ Removal Exam Failed → Grade: 5.00</div>
      <div class="retake-modal-sub">${code} · ${courseTitle}</div>
      <div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;padding:10px 12px;margin-bottom:14px;font-size:12px;color:#374151">
        The removal exam was not passed. The final grade has been recorded as <b>5.00</b>. Would you like to schedule a retake?
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
        <div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Academic Year</div>
          <select id="retake-ay" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
            <option value="">— Select AY —</option>
            ${(typeof PLAN_STATE !== "undefined" ? PLAN_STATE.years : []).map(y=>`<option value="${y.ay}">${y.ay}</option>`).join("")}
          </select>
          <div style="font-size:10px;color:#9ca3af;margin-top:3px">Add years in the Planner first if missing.</div>
        </div>
        <div>
          <div style="font-size:11px;color:#6b7280;margin-bottom:4px">Semester</div>
          <select id="retake-sem" style="padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:12px;width:100%;font-family:inherit">
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
            <option value="Midyear">Midyear</option>
          </select>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="retake-btn retake-btn-primary" onclick="confirmRetake('${code}','5.00')">📋 Schedule Retake</button>
        <button class="retake-btn retake-btn-outline" onclick="closeRetakeModal()">Dismiss</button>
      </div>
    </div>
  </div>`;
}

function deleteRetakeRecord(recordId) {
  STATE.retakeRecords = STATE.retakeRecords.filter(r=>r.id!==recordId);
  saveState();
  renderTab(currentTab);
}

function closeRetakeModal() {
  const container = document.getElementById("retake-modal-container");
  if (container) container.innerHTML = "";
}

function showRetakeToast(msg) {
  const t = document.createElement("div");
  t.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:#fff;padding:10px 18px;border-radius:10px;font-size:12px;z-index:2000;max-width:420px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,.3);pointer-events:none";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 4000);
}

// Render retake records panel (injected into Grade Manager)
function renderRetakePanel() {
  if (!STATE.retakeRecords || STATE.retakeRecords.length === 0) return "";
  let html = `<div class="card" style="margin-bottom:10px;border:1.5px solid #fca5a5">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span style="font-weight:700;font-size:13px;color:#dc2626">↩ Retake & Removal Exam Records</span>
      <span style="font-size:11px;color:#6b7280">${STATE.retakeRecords.length} record(s)</span>
    </div>`;
  STATE.retakeRecords.forEach(rec => {
    const course = COURSES.find(c=>c.code===rec.code);
    const title = course ? course.title : rec.code;
    const isPendingRemoval = rec.removalStatus === "pending";
    const isRetakePlanned = rec.retakeStatus === "planned";
    const isPassedRemoval = rec.removalStatus === "passed";
    const isFailedRemoval = rec.removalStatus === "failed";

    let statusBadge = "";
    if (isPendingRemoval) statusBadge = `<span class="retake-badge retake-badge-removal">⏳ Pending Removal Exam</span>`;
    else if (isPassedRemoval) statusBadge = `<span class="retake-badge retake-badge-passed">✅ Removal Passed → 3.00</span>`;
    else if (isFailedRemoval) statusBadge = `<span class="retake-badge retake-badge-failed">❌ Removal Failed → 5.00</span>`;
    else if (isRetakePlanned) statusBadge = `<span class="retake-badge retake-badge-planned">📋 Retake Planned</span>`;

    const placement = rec.placedAy ? `${rec.placedAy} — ${rec.placedSem} Semester` : (isRetakePlanned ? "Placement TBD" : "");

    html += `<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:9px 10px;border-radius:8px;margin-bottom:6px;background:#fafafa;border:1px solid #f3f4f6;flex-wrap:wrap;gap:6px">
      <div>
        <span style="font-weight:700;font-size:12px;color:#374151">${rec.code} (${rec.originalGrade})</span>
        ${statusBadge}
        <div style="font-size:11px;color:#6b7280;margin-top:2px">${title}${placement ? " · " + placement : ""}</div>
      </div>
      <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
        ${isPendingRemoval ? `
          <button onclick="recordRemovalOutcome(${rec.id},'passed')" style="padding:3px 10px;border-radius:6px;border:1px solid #86efac;background:#dcfce7;color:#16a34a;cursor:pointer;font-size:11px;font-weight:700;font-family:inherit">✓ Pass</button>
          <button onclick="recordRemovalOutcome(${rec.id},'failed')" style="padding:3px 10px;border-radius:6px;border:1px solid #fca5a5;background:#fee2e2;color:#dc2626;cursor:pointer;font-size:11px;font-weight:700;font-family:inherit">✗ Fail</button>
        ` : ""}
        <button onclick="deleteRetakeRecord(${rec.id})" style="padding:3px 8px;border-radius:6px;border:1px solid #e5e7eb;background:transparent;color:#9ca3af;cursor:pointer;font-size:10px;font-family:inherit">✕</button>
      </div>
    </div>`;
  });
  html += `<div style="font-size:10px;color:#9ca3af;margin-top:4px">Original grade records are preserved in Grade Manager. Retake entries are tracked separately.</div></div>`;
  return html;
}

// ══════════════════════════════════════════════════════════════════
// END RETAKE WORKFLOW ENGINE
// ══════════════════════════════════════════════════════════════════

// ── INIT ─────────────────────────────────────────────────────────
loadState();
loadPlan();
// Render dashboard immediately on load — fixes blank initial screen
showTab("dashboard");

