# UP-ECE-Academic-Tracker
Unofficial academic tracker for BS Electronics Engineering students at UP Diliman. Tracks grades, GWA/WAG, DOST scholarship status, degree audit, and semester planning — all in a single offline HTML file, no account needed.

---
 
## Features
 
### 📊 Dashboard
At-a-glance summary of your academic standing. Shows cumulative GWA, WAG, units completed, degree progress, course status breakdown (passed, available, blocked, failed, incomplete), and recommended next courses.
 
### 📝 Grade Manager
Enter and manage grades semester by semester. Supports:
- GWA and WAG computation per semester and cumulatively
- GWA includes all academic courses (excludes PE and NSTP)
- WAG excludes INC grades
- Retake tracking — original and retake attempts stay in separate semesters
- Custom course support
- Elective renaming
- Planner-synced layout toggle
### 🎓 Degree Audit
Full audit of the BS CoE curriculum. Shows the status of every course — passed, available, blocked (unmet prerequisites), failed, or in progress — with prerequisite and corequisite checking.
 
### 🏆 Scholarship Monitor
Automatic DOST-SEI RA 7687 scholarship evaluation with support for multiple cohort years (AY 2023, 2024, 2025, 2026). Evaluates your current standing against scholarship rules and surfaces warnings before you lose status.
 
### 🔮 What-If Simulator
Simulate future grades and see how they affect your WAG and honors standing in real time. Honors thresholds (Cum Laude, Magna, Summa) are shown automatically.
 
### 🗺️ Curriculum Flowchart
Visual map of the entire BS CoE curriculum organized by year and semester. Click any course to see its prerequisites, what it unlocks, and retake status.
 
### 📅 Academic Planner
Drag-and-drop semester planner for mapping out your remaining academic years. Features:
- Prerequisite and corequisite constraint checking
- PE one-per-semester rule enforcement
- NSTP handling (non-academic)
- Graduating semester mode
- Difficulty-aware auto-optimization
- Max load cap per semester
- Lock courses to protect them from Auto-Optimize and Reset
- Multi-select for batch locking
- Sync to/from Grade Manager
### 🧮 Grade Simulator
Workspace for simulating grade scenarios on current enrolled courses without affecting your actual grade records.
 
---
 
## How to Use
 
1. Download `index.html`
2. Open it in any modern browser (Chrome, Firefox, Edge, Safari)
3. Start entering your grades in the **Grade Manager** tab
4. Everything saves automatically to your browser's local storage
No internet connection required after the first load (if hosted). No sign-up. No data leaves your device.
 
---
 
## Data & Privacy
 
All data is stored in your browser's **localStorage**. Nothing is sent to any server. Clearing your browser data will erase your saved records — export or back up your data regularly if needed.
 
---
 
## Curriculum
 
Built against the official **BS Electronics Engineering curriculum of UP Diliman**, including all core, required, and elective courses with accurate prerequisite and corequisite chains.
 
---
 
## Tech Stack
 
- Vanilla HTML, CSS, JavaScript — zero dependencies, zero frameworks
- Single self-contained `.html` file
- localStorage for persistence
---
 
## Disclaimer
 
This is an unofficial student tool. Always verify your academic standing, graduation requirements, and scholarship status with your official academic records and the University Registrar.
 
