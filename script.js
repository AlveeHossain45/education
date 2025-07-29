// ===================================================================================
// --- APP STATE, STORE & CONFIG ---
// ===================================================================================
let currentUser = null;

const navConfig = {
    Admin: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-user-graduate', text: 'Students', page: 'students' },
        { icon: 'fa-chalkboard-teacher', text: 'Teachers', page: 'teachers' },
        { icon: 'fa-building', text: 'Departments', page: 'departments' },
        { icon: 'fa-school', text: 'Classes', page: 'classes' },
        { icon: 'fa-calendar-check', text: 'Timetable', page: 'timetable' },
        { icon: 'fa-file-invoice-dollar', text: 'Fees', page: 'fees' },
        { icon: 'fa-file-alt', text: 'Exams', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-book-open-reader', text: 'Library', page: 'library' },
        { icon: 'fa-bus', text: 'Transport', page: 'transport' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ],
    Teacher: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-user-graduate', text: 'My Students', page: 'students' },
        { icon: 'fa-calendar-alt', text: 'Attendance', page: 'attendance' },
        { icon: 'fa-calendar-check', text: 'My Timetable', page: 'timetable' },
        { icon: 'fa-file-alt', text: 'Exams & Results', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ],
    Student: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-calendar-check', text: 'My Timetable', page: 'timetable' },
        { icon: 'fa-file-invoice-dollar', text: 'My Fees', page: 'fees' },
        { icon: 'fa-file-alt', text: 'My Results', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-envelope', text: 'Contact Teacher', page: 'contactTeacher' },
        { icon: 'fa-user-circle', text: 'My Profile', page: 'profile' },
    ]
};

// ===================================================================================
// --- SIMULATED API SERVICE & DATABASE ---
// ===================================================================================
let appDatabase = {};

const embeddedDatabase = {
  "users": {
    "admin": { "password": "admin", "role": "Admin", "name": "Admin User", "email": "admin@school.com", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=A" },
    "davis@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t1"},
    "wilson@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t2"},
    "anderson@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t3"},
    "garcia@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t4"},
    "martinez@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t5"},
    "lee@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t6"},
    "chen@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t7"},
    "taylor@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t8"},
    "moore@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t9"},
    "clark@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t10"},
    "wright@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t11"},
    "evans@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t12"},
    "harris@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t13"},
    "lewis@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t14"},
    "walker@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t15"},
    "hall@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t16"},
    "allen@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t17"},
    "king@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t18"},
    "scott@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t19"},
    "green@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t20"},
    "baker@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t21"},
    "adams@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t22"},
    "alice@school.com": { "password": "student", "role": "Student", "studentId": "s1"},
    "bob@school.com": { "password": "student", "role": "Student", "studentId": "s2"},
    "charlie@school.com": { "password": "student", "role": "Student", "studentId": "s3"},
    "diana@school.com": { "password": "student", "role": "Student", "studentId": "s4"},
    "bruce@school.com": { "password": "student", "role": "Student", "studentId": "s5"},
    "peter@school.com": { "password": "student", "role": "Student", "studentId": "s7"},
    "tony@school.com": { "password": "student", "role": "Student", "studentId": "s8"},
    "steve@school.com": { "password": "student", "role": "Student", "studentId": "s9"},
    "natasha@school.com": { "password": "student", "role": "Student", "studentId": "s10"},
    "wanda@school.com": { "password": "student", "role": "Student", "studentId": "s11"},
    "tchalla@school.com": { "password": "student", "role": "Student", "studentId": "s12"},
    "carol@school.com": { "password": "student", "role": "Student", "studentId": "s13"},
    "david@school.com": { "password": "student", "role": "Student", "studentId": "s14"},
    "thor@school.com": { "password": "student", "role": "Student", "studentId": "s15"},
    "loki@school.com": { "password": "student", "role": "Student", "studentId": "s16"},
    "jane@school.com": { "password": "student", "role": "Student", "studentId": "s17"},
    "bucky@school.com": { "password": "student", "role": "Student", "studentId": "s18"},
    "sam@school.com": { "password": "student", "role": "Student", "studentId": "s19"},
    "hope@school.com": { "password": "student", "role": "Student", "studentId": "s21"},
    "stephen@school.com": { "password": "student", "role": "Student", "studentId": "s22"},
    "matt@school.com": { "password": "student", "role": "Student", "studentId": "s23"},
    "jessica@school.com": { "password": "student", "role": "Student", "studentId": "s24"},
    "luke@school.com": { "password": "student", "role": "Student", "studentId": "s25"},
    "danny@school.com": { "password": "student", "role": "Student", "studentId": "s26"},
    "frank@school.com": { "password": "student", "role": "Student", "studentId": "s27"},
    "elektra@school.com": { "password": "student", "role": "Student", "studentId": "s28"},
    "reed@school.com": { "password": "student", "role": "Student", "studentId": "s29"},
    "sue@school.com": { "password": "student", "role": "Student", "studentId": "s30"},
    "johnny@school.com": { "password": "student", "role": "Student", "studentId": "s31"},
    "ben@school.com": { "password": "student", "role": "Student", "studentId": "s32"},
    "ororo@school.com": { "password": "student", "role": "Student", "studentId": "s33"},
    "tasnim.tanha@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081040"},
    "ratul.hasan@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081244"},
    "jubayer.ratul@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081263"},
    "jamil.hamim@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081267"},
    "arindom.turjo@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081311"},
    "monayem.hossain@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081251"},
    "prottoy.mankin@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081204"},
    "jubayer.manik@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081205"},
    "tahmidul.afrose@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081223"},
    "tahsinul.imrose@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081222"},
    "junidur.rahman@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081237"},
    "mamun.shake@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081255"},
    "raian.mahadi@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081266"},
    "saiful.islam@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081220"},
    "shourav.beswas@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081228"},
    "meherub.badhon@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081271"},
    "kanej.keya@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081550"},
    "anika.ebnat@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081556"},
    "farjana.bushra@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081569"},
    "khushi.akter@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081531"},
    "sanzida.sultana@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081545"},
    "sanjida.ruma@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081582"},
    "jannatul.mawya@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081053"},
    "zonaed.hossain@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081272"},
    "rokib.noyon@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081265"},
    "abrar.projoy@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081260"},
    "tuton.ghosh@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081268"},
    "mohammad.hosen@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081269"},
    "israt.shimu@school.com": { "password": "student", "role": "Student", "studentId": "s_2231081042"},
    "md.junaid@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081246"},
    "md.samiuzzaman@school.com": { "password": "student", "role": "Student", "studentId": "s_2233081257"}
  },
  "departments": [
    { "id": "d1", "name": "Science & Mathematics" },
    { "id": "d2", "name": "Humanities & Social Sciences" },
    { "id": "d3", "name": "Arts & Recreation" },
    { "id": "d4", "name": "Technology" },
    { "id": "d5", "name": "Languages" },
    { "id": "d6", "name": "Business & Economics" },
    { "id": "d7", "name": "Computer Science" },
    { "id": "d8", "name": "Physical Education" },
    { "id": "d9", "name": "Electrical Engineering" },
    { "id": "d10", "name": "Civil Engineering" },
    { "id": "d11", "name": "Department Of LAW" },
    { "id": "d12", "name": "English" },
    { "id": "d13", "name": "Philosophy" }
  ],
  "subjects": [
    { "id": "sub1", "name": "Mathematics" },
    { "id": "sub2", "name": "Physics" },
    { "id": "sub3", "name": "History" },
    { "id": "sub4", "name": "English" },
    { "id": "sub5", "name": "Physical Education" },
    { "id": "sub6", "name": "Art" },
    { "id": "sub7", "name": "Music" },
    { "id": "sub8", "name": "Biology" },
    { "id": "sub9", "name": "Chemistry" },
    { "id": "sub10", "name": "Geography" },
    { "id": "sub11", "name": "Computer Science" },
    { "id": "sub12", "name": "Economics" },
    { "id": "sub13", "name": "Social Studies" },
    { "id": "sub14", "name": "Drama" },
    { "id": "sub15", "name": "French" },
    { "id": "sub16", "name": "Spanish" },
    { "id": "sub17", "name": "German" },
    { "id": "sub18", "name": "Philosophy" },
    { "id": "sub19", "name": "Environmental Science" },
    { "id": "sub20", "name": "Algebra" },
    { "id": "sub21", "name": "Literature" }
  ],
  "students": [
    { "id": "s1", "name": "Alice Smith", "rollNo": "2233081101", "classId": "c1", "guardianName": "John Smith", "contact": "123-456-7890", "email": "alice@school.com", "address": "123 Main St", "dateOfBirth": "2015-05-20", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=AS" },
    { "id": "s2", "name": "Bob Johnson", "rollNo": "2233081102", "classId": "c1", "guardianName": "Jane Johnson", "contact": "123-456-7891", "email": "bob@school.com", "address": "456 Oak Ave", "dateOfBirth": "2015-06-11", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=BJ" },
    { "id": "s3", "name": "Charlie Brown", "rollNo": "2233082201", "classId": "c2", "guardianName": "Sally Brown", "contact": "123-456-7892", "email": "charlie@school.com", "address": "789 Pine Ln", "dateOfBirth": "2014-02-15", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=CB" },
    { "id": "s4", "name": "Diana Prince", "rollNo": "223308103", "classId": "c1", "guardianName": "Hippolyta Prince", "contact": "123-111-2223", "email": "diana@school.com", "address": "1 Paradise Island", "dateOfBirth": "2015-03-01", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=DP" },
    { "id": "s5", "name": "Bruce Wayne", "rollNo": "223308104", "classId": "c1", "guardianName": "Alfred Pennyworth", "contact": "123-222-3334", "email": "bruce@school.com", "address": "1007 Mountain Drive", "dateOfBirth": "2015-04-17", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O-", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=BW" },
    { "id": "s6", "name": "Clark Kent", "rollNo": "223308105", "classId": "c1", "guardianName": "Martha Kent", "contact": "123-333-4445", "email": "clark@school.com", "address": "321 Farm Road", "dateOfBirth": "2015-02-28", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s7", "name": "Peter Parker", "rollNo": "223308106", "classId": "c1", "guardianName": "May Parker", "contact": "123-444-5556", "email": "peter@school.com", "address": "20 Ingram Street", "dateOfBirth": "2015-08-10", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s8", "name": "Tony Stark", "rollNo": "223308107", "classId": "c1", "guardianName": "Howard Stark", "contact": "123-555-6667", "email": "tony@school.com", "address": "10880 Malibu Point", "dateOfBirth": "2015-05-29", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s9", "name": "Steve Rogers", "rollNo": "223308108", "classId": "c1", "guardianName": "Sarah Rogers", "contact": "123-666-7778", "email": "steve@school.com", "address": "569 Leavenworth St", "dateOfBirth": "1918-07-04", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s10", "name": "Natasha Romanoff", "rollNo": "223308109", "classId": "c1", "guardianName": "Ivan Romanoff", "contact": "123-777-8889", "email": "natasha@school.com", "address": "Stalingrad, Russia", "dateOfBirth": "1984-11-22", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s11", "name": "Wanda Maximoff", "rollNo": "223308110", "classId": "c1", "guardianName": "Olek Maximoff", "contact": "123-888-9990", "email": "wanda@school.com", "address": "Novi Grad, Sokovia", "dateOfBirth": "1989-02-10", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s12", "name": "TChalla Udaku", "rollNo": "223308111", "classId": "c1", "guardianName": "Ramonda Udaku", "contact": "123-999-0001", "email": "tchalla@school.com", "address": "Royal Palace, Wakanda", "dateOfBirth": "1980-11-29", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s13", "name": "Carol Danvers", "rollNo": "223308112", "classId": "c1", "guardianName": "Marie Danvers", "contact": "123-000-1112", "email": "carol@school.com", "address": "Planet Hala", "dateOfBirth": "1968-04-24", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s14", "name": "David Banner", "rollNo": "223308202", "classId": "c2", "guardianName": "Brian Banner", "contact": "213-111-2223", "email": "david@school.com", "address": "Unknown", "dateOfBirth": "1969-12-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s15", "name": "Thor Odinson", "rollNo": "223308203", "classId": "c2", "guardianName": "Odin Borson", "contact": "213-222-3334", "email": "thor@school.com", "address": "Asgard", "dateOfBirth": "965-01-01", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s16", "name": "Loki Laufeyson", "rollNo": "223308204", "classId": "c2", "guardianName": "Farbauti Laufeyson", "contact": "213-333-4445", "email": "loki@school.com", "address": "Jotunheim", "dateOfBirth": "965-12-17", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s17", "name": "Jane Foster", "rollNo": "223308205", "classId": "c2", "guardianName": "Erik Selvig", "contact": "213-444-5556", "email": "jane@school.com", "address": "Puente Antiguo, NM", "dateOfBirth": "1985-06-05", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s18", "name": "Bucky Barnes", "rollNo": "223308206", "classId": "c2", "guardianName": "George Barnes", "contact": "213-555-6667", "email": "bucky@school.com", "address": "Shelbyville, IN", "dateOfBirth": "1917-03-10", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s19", "name": "Sam Wilson", "rollNo": "223308207", "classId": "c2", "guardianName": "Paul Wilson", "contact": "213-666-7778", "email": "sam@school.com", "address": "Harlem, NY", "dateOfBirth": "1978-09-23", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s20", "name": "Scott Lang", "rollNo": "223308208", "classId": "c2", "guardianName": "Maggie Lang", "contact": "213-777-8889", "email": "scott@school.com", "address": "San Francisco, CA", "dateOfBirth": "1975-04-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s21", "name": "Hope van Dyne", "rollNo": "223308209", "classId": "c2", "guardianName": "Hank Pym", "contact": "213-888-9990", "email": "hope@school.com", "address": "San Francisco, CA", "dateOfBirth": "1979-08-21", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s22", "name": "Stephen Strange", "rollNo": "223308210", "classId": "c2", "guardianName": "Eugene Strange", "contact": "213-999-0001", "email": "stephen@school.com", "address": "177A Bleecker Street", "dateOfBirth": "1930-11-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s23", "name": "Matt Murdock", "rollNo": "223308301", "classId": "c3", "guardianName": "Jack Murdock", "contact": "312-111-2223", "email": "matt@school.com", "address": "Hells Kitchen, NY", "dateOfBirth": "1993-11-19", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s24", "name": "Jessica Jones", "rollNo": "223308302", "classId": "c3", "guardianName": "Alisa Jones", "contact": "312-222-3334", "email": "jessica@school.com", "address": "Forest Hills, Queens", "dateOfBirth": "1984-11-07", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s25", "name": "Luke Cage", "rollNo": "223308303", "classId": "c3", "guardianName": "James Lucas", "contact": "312-333-4445", "email": "luke@school.com", "address": "Harlem, NY", "dateOfBirth": "1972-10-12", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s26", "name": "Danny Rand", "rollNo": "223308304", "classId": "c3", "guardianName": "Wendell Rand", "contact": "312-444-5556", "email": "danny@school.com", "address": "K'un-Lun", "dateOfBirth": "1991-04-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s27", "name": "Frank Castle", "rollNo": "223308305", "classId": "c3", "guardianName": "Maria Castle", "contact": "312-555-6667", "email": "frank@school.com", "address": "Queens, NY", "dateOfBirth": "1976-02-16", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s28", "name": "Elektra Natchios", "rollNo": "223308306", "classId": "c3", "guardianName": "Hugo Natchios", "contact": "312-666-7778", "email": "elektra@school.com", "address": "Greek Islands", "dateOfBirth": "1980-11-25", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s29", "name": "Reed Richards", "rollNo": "223308307", "classId": "c3", "guardianName": "Nathaniel Richards", "contact": "312-777-8889", "email": "reed@school.com", "address": "Central City, CA", "dateOfBirth": "1942-02-28", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s30", "name": "Sue Storm", "rollNo": "223308308", "classId": "c3", "guardianName": "Franklin Storm", "contact": "312-888-9990", "email": "sue@school.com", "address": "Long Island, NY", "dateOfBirth": "1945-09-13", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s31", "name": "Johnny Storm", "rollNo": "223308309", "classId": "c3", "guardianName": "Franklin Storm", "contact": "312-999-0001", "email": "johnny@school.com", "address": "Long Island, NY", "dateOfBirth": "1948-10-05", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s32", "name": "Ben Grimm", "rollNo": "223308310", "classId": "c3", "guardianName": "Daniel Grimm", "contact": "312-000-1112", "email": "ben@school.com", "address": "Yancy Street, NY", "dateOfBirth": "1944-08-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s33", "name": "Ororo Munroe", "rollNo": "223308311", "classId": "c3", "guardianName": "N'Dare Munroe", "contact": "312-111-2222", "email": "ororo@school.com", "address": "Cairo, Egypt", "dateOfBirth": "1951-11-01", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s_2233081040", "name": "Mst Tasnim Amina Tanha", "rollNo": "2233081040", "classId": "c4", "guardianName": "Amina Tanha", "contact": "555-0101", "email": "tasnim.tanha@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-01-01", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s_2233081244", "name": "Ratul Hasan", "rollNo": "2233081244", "classId": "c4", "guardianName": "Kabir Hasan", "contact": "555-0102", "email": "ratul.hasan@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-02-02", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s_2233081263", "name": "Jubayer Ahmed Ratul", "rollNo": "2233081263", "classId": "c4", "guardianName": "Farid Ahmed", "contact": "555-0103", "email": "jubayer.ratul@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-03-03", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s_2233081267", "name": "Jamil Sarkar Hamim", "rollNo": "2233081267", "classId": "c4", "guardianName": "Ali Sarkar", "contact": "555-0104", "email": "jamil.hamim@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-04-04", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s_2233081311", "name": "Arindom Chakrabarty Turjo", "rollNo": "2233081311", "classId": "c4", "guardianName": "G. Chakrabarty", "contact": "555-0105", "email": "arindom.turjo@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-05-05", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s_2233081251", "name": "Monayem Hossain", "rollNo": "2233081251", "classId": "c4", "guardianName": "Nur Hossain", "contact": "555-0106", "email": "monayem.hossain@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-06-06", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s_2233081204", "name": "Prottoy Mankin", "rollNo": "2233081204", "classId": "c4", "guardianName": "David Mankin", "contact": "555-0107", "email": "prottoy.mankin@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-07-07", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s_2233081205", "name": "MD Jubayer hossain manik", "rollNo": "2233081205", "classId": "c4", "guardianName": "Alam Hossain", "contact": "555-0108", "email": "jubayer.manik@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-08-08", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s_2233081223", "name": "Tahmidul Islam Afrose", "rollNo": "2233081223", "classId": "c4", "guardianName": "Rafiqul Islam", "contact": "555-0109", "email": "tahmidul.afrose@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-09-09", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s_2233081222", "name": "Tahsinul Islam Imrose", "rollNo": "2233081222", "classId": "c4", "guardianName": "Rafiqul Islam", "contact": "555-0110", "email": "tahsinul.imrose@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-10-10", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s_2233081237", "name": "Junidur Rahman", "rollNo": "2233081237", "classId": "c4", "guardianName": "Habibur Rahman", "contact": "555-0111", "email": "junidur.rahman@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-11-11", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s_2233081255", "name": "Mamun Shake", "rollNo": "2233081255", "classId": "c4", "guardianName": "Abdullah Shake", "contact": "555-0112", "email": "mamun.shake@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-12-12", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s_2233081266", "name": "Raian Mahadi", "rollNo": "2233081266", "classId": "c4", "guardianName": "Fahim Mahadi", "contact": "555-0113", "email": "raian.mahadi@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-01-13", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s_2233081220", "name": "Md Saiful Islam", "rollNo": "2233081220", "classId": "c4", "guardianName": "Sirajul Islam", "contact": "555-0114", "email": "saiful.islam@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-02-14", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s_2233081228", "name": "Shourav Beswas", "rollNo": "2233081228", "classId": "c4", "guardianName": "B. Beswas", "contact": "555-0115", "email": "shourav.beswas@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-03-15", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s_2233081271", "name": "Meherub Hassan Badhon", "rollNo": "2233081271", "classId": "c4", "guardianName": "Anwar Hassan", "contact": "555-0116", "email": "meherub.badhon@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-04-16", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s_2233081550", "name": "Kanej Fatema Keya", "rollNo": "2233081550", "classId": "c5", "guardianName": "Abul Fatema", "contact": "555-0117", "email": "kanej.keya@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-05-17", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s_2233081556", "name": "Anika Ebnat", "rollNo": "2233081556", "classId": "c5", "guardianName": "Jamal Ebnat", "contact": "555-0118", "email": "anika.ebnat@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-06-18", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s_2233081569", "name": "Farjana Bushra", "rollNo": "2233081569", "classId": "c5", "guardianName": "Kamal Bushra", "contact": "555-0119", "email": "farjana.bushra@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-07-19", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s_2233081531", "name": "Most. Khushi Akter", "rollNo": "2233081531", "classId": "c4", "guardianName": "Rahim Akter", "contact": "555-0120", "email": "khushi.akter@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-08-20", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s_2233081545", "name": "Sanzida Sultana", "rollNo": "2233081545", "classId": "c4", "guardianName": "Karim Sultana", "contact": "555-0121", "email": "sanzida.sultana@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-09-21", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s_2233081582", "name": "Sanjida Akter Ruma", "rollNo": "2233081582", "classId": "c4", "guardianName": "Salim Akter", "contact": "555-0122", "email": "sanjida.ruma@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-10-22", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s_2233081053", "name": "Jannatul Mawya", "rollNo": "2233081053", "classId": "c4", "guardianName": "Ferdous Mawya", "contact": "555-0123", "email": "jannatul.mawya@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-11-23", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s_2233081272", "name": "Md.Zonaed Hossain", "rollNo": "2233081272", "classId": "c4", "guardianName": "Bilal Hossain", "contact": "555-0124", "email": "zonaed.hossain@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-12-24", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s_2233081265", "name": "Md.Rokib hasan noyon", "rollNo": "2233081265", "classId": "c4", "guardianName": "Jamal Hasan", "contact": "555-0125", "email": "rokib.noyon@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-01-25", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s_2233081260", "name": "Md Abrar Projoy", "rollNo": "2233081260", "classId": "c4", "guardianName": "Dalim Projoy", "contact": "555-0126", "email": "abrar.projoy@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-02-26", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s_2233081268", "name": "Tuton Ghosh", "rollNo": "2233081268", "classId": "c4", "guardianName": "T. Ghosh", "contact": "555-0127", "email": "tuton.ghosh@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-03-27", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s_2233081269", "name": "Mohammad Hosen", "rollNo": "2233081269", "classId": "c4", "guardianName": "Abdul Hosen", "contact": "555-0128", "email": "mohammad.hosen@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-04-28", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s_2231081042", "name": "Israt jahan shimu", "rollNo": "2231081042", "classId": "c4", "guardianName": "Iqbal Jahan", "contact": "555-0129", "email": "israt.shimu@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-05-29", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s_2233081246", "name": "Md Junaid", "rollNo": "2233081246", "classId": "c4", "guardianName": "Yusuf Junaid", "contact": "555-0130", "email": "md.junaid@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-06-30", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s_2233081257", "name": "Md. Samiuzzaman", "rollNo": "2233081257", "classId": "c4", "guardianName": "S. Zaman", "contact": "555-0131", "email": "md.samiuzzaman@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-07-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null }
  ],
"teachers": [
    { "id": "t1", "name": "Mr. Davis", "departmentId": "d1", "subject": "Math", "contact": "987-654-3210", "email": "davis@school.com", "address": "222 Teacher Rd", "joiningDate": "2018-07-15", "qualifications": "M.Sc. in Mathematics", "bloodGroup": "O+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=MD" },
    { "id": "t2", "name": "Ms. Wilson", "departmentId": "d1", "subject": "Science", "contact": "987-654-3211", "email": "wilson@school.com", "address": "333 Faculty Ct", "joiningDate": "2019-02-11", "qualifications": "M.Sc. in Physics", "bloodGroup": "A+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=MW" },
    { "id": "t3", "name": "Mr. Anderson", "departmentId": "d2", "subject": "History", "contact": "987-111-2223", "email": "anderson@school.com", "address": "444 History Ln", "joiningDate": "2020-08-20", "qualifications": "M.A. in History", "bloodGroup": "B-", "profileImage": null },
    { "id": "t4", "name": "Ms. Garcia", "departmentId": "d5", "subject": "English", "contact": "987-222-3334", "email": "garcia@school.com", "address": "555 Literature Ave", "joiningDate": "2017-01-10", "qualifications": "M.A. in English Literature", "bloodGroup": "AB+", "profileImage": null },
    { "id": "t5", "name": "Mr. Martinez", "departmentId": "d3", "subject": "Physical Education", "contact": "987-333-4445", "email": "martinez@school.com", "address": "666 Gymnasium Blvd", "joiningDate": "2021-05-19", "qualifications": "B.P.Ed", "bloodGroup": "O-", "profileImage": null },
    { "id": "t6", "name": "Ms. Lee", "departmentId": "d3", "subject": "Art", "contact": "987-444-5556", "email": "lee@school.com", "address": "777 Creativity Cres", "joiningDate": "2019-09-01", "qualifications": "M.F.A.", "bloodGroup": "A+", "profileImage": null },
    { "id": "t7", "name": "Mr. Chen", "departmentId": "d3", "subject": "Music", "contact": "987-555-6667", "email": "chen@school.com", "address": "888 Harmony Way", "joiningDate": "2018-03-12", "qualifications": "M.Mus.", "bloodGroup": "B+", "profileImage": null },
    { "id": "t8", "name": "Ms. Taylor", "departmentId": "d1", "subject": "Biology", "contact": "987-666-7778", "email": "taylor@school.com", "address": "999 Cell Division Dr", "joiningDate": "2022-07-28", "qualifications": "M.Sc. in Biology", "bloodGroup": "O+", "profileImage": null },
    { "id": "t9", "name": "Mr. Moore", "departmentId": "d1", "subject": "Chemistry", "contact": "987-777-8889", "email": "moore@school.com", "address": "101 Element St", "joiningDate": "2016-11-30", "qualifications": "M.Sc. in Chemistry", "bloodGroup": "A-", "profileImage": null },
    { "id": "t10", "name": "Ms. Clark", "departmentId": "d1", "subject": "Physics", "contact": "987-888-9990", "email": "clark@school.com", "address": "202 Quantum Quay", "joiningDate": "2017-06-15", "qualifications": "Ph.D. in Physics", "bloodGroup": "B+", "profileImage": null },
    { "id": "t11", "name": "Mr. Wright", "departmentId": "d2", "subject": "Geography", "contact": "987-999-0001", "email": "wright@school.com", "address": "303 Atlas Alley", "joiningDate": "2020-01-25", "qualifications": "M.A. in Geography", "bloodGroup": "O+", "profileImage": null },
    { "id": "t12", "name": "Ms. Evans", "departmentId": "d4", "subject": "Computer Science", "contact": "987-000-1112", "email": "evans@school.com", "address": "404 Binary Bypass", "joiningDate": "2021-08-01", "qualifications": "M.Tech in CS", "bloodGroup": "A+", "profileImage": null },
    { "id": "t13", "name": "Mr. Harris", "departmentId": "d6", "subject": "Economics", "contact": "987-112-2233", "email": "harris@school.com", "address": "505 Market Mews", "joiningDate": "2019-07-21", "qualifications": "M.A. in Economics", "bloodGroup": "AB-", "profileImage": null },
    { "id": "t14", "name": "Ms. Lewis", "departmentId": "d2", "subject": "Social Studies", "contact": "987-223-3344", "email": "lewis@school.com", "address": "606 Society Sq", "joiningDate": "2018-10-05", "qualifications": "M.A. in Sociology", "bloodGroup": "B-", "profileImage": null },
    { "id": "t15", "name": "Mr. Walker", "departmentId": "d3", "subject": "Drama", "contact": "987-334-4455", "email": "walker@school.com", "address": "707 Stage Street", "joiningDate": "2022-02-18", "qualifications": "M.A. in Theatre Arts", "bloodGroup": "O-", "profileImage": null },
    { "id": "t16", "name": "Ms. Hall", "departmentId": "d5", "subject": "French", "contact": "987-445-5566", "email": "hall@school.com", "address": "808 Paris Place", "joiningDate": "2017-04-12", "qualifications": "M.A. in French", "bloodGroup": "A+", "profileImage": null },
    { "id": "t17", "name": "Mr. Allen", "departmentId": "d5", "subject": "Spanish", "contact": "987-556-6677", "email": "allen@school.com", "address": "909 Madrid Manor", "joiningDate": "2020-09-09", "qualifications": "M.A. in Spanish", "bloodGroup": "B+", "profileImage": null },
    { "id": "t18", "name": "Ms. King", "departmentId": "d5", "subject": "German", "contact": "987-667-7788", "email": "king@school.com", "address": "121 Berlin Blvd", "joiningDate": "2021-01-14", "qualifications": "M.A. in German", "bloodGroup": "O+", "profileImage": null },
    { "id": "t19", "name": "Mr. Scott", "departmentId": "d2", "subject": "Philosophy", "contact": "987-778-8899", "email": "scott@school.com", "address": "232 Thought Thicket", "joiningDate": "2018-06-29", "qualifications": "M.A. in Philosophy", "bloodGroup": "A-", "profileImage": null },
    { "id": "t20", "name": "Ms. Green", "departmentId": "d1", "subject": "Environmental Sci.", "contact": "987-889-9900", "email": "green@school.com", "address": "343 Ecology Esplanade", "joiningDate": "2022-08-11", "qualifications": "M.Sc. in Environmental Science", "bloodGroup": "B+", "profileImage": null },
    { "id": "t21", "name": "Mr. Baker", "departmentId": "d1", "subject": "Algebra", "contact": "987-990-0011", "email": "baker@school.com", "address": "454 Equation End", "joiningDate": "2019-03-03", "qualifications": "M.Sc. in Mathematics", "bloodGroup": "AB+", "profileImage": null },
    { "id": "t22", "name": "Ms. Adams", "departmentId": "d5", "subject": "Literature", "contact": "987-001-1122", "email": "adams@school.com", "address": "565 Novella Nook", "joiningDate": "2017-10-10", "qualifications": "Ph.D. in Literature", "bloodGroup": "O+", "profileImage": null }
  ],
  "classes": [
    { "id": "c1", "name": "Class 1", "teacherId": "t2", "academicYear": "2025-2026", "roomNumber": "101" },
    { "id": "c2", "name": "Class 2", "teacherId": "t1", "academicYear": "2025-2026", "roomNumber": "102" },
    { "id": "c3", "name": "Class 3", "teacherId": "t3", "academicYear": "2025-2026", "roomNumber": "103" },
    { "id": "c4", "name": "Section G", "teacherId": "t4", "academicYear": "2025-2026", "roomNumber": "201" },
    { "id": "c5", "name": "Section C", "teacherId": "t5", "academicYear": "2025-2026", "roomNumber": "202" }
  ],
  "timetable": [
    { "id": "tt1", "classId": "c1", "dayOfWeek": "Monday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub2", "teacherId": "t2" },
    { "id": "tt2", "classId": "c1", "dayOfWeek": "Monday", "period": 2, "startTime": "09:45", "endTime": "10:30", "subjectId": "sub4", "teacherId": "t4" },
    { "id": "tt3", "classId": "c2", "dayOfWeek": "Monday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub1", "teacherId": "t1" },
    { "id": "tt4", "classId": "c2", "dayOfWeek": "Tuesday", "period": 2, "startTime": "09:45", "endTime": "10:30", "subjectId": "sub3", "teacherId": "t3" },
    { "id": "tt5", "classId": "c3", "dayOfWeek": "Wednesday", "period": 3, "startTime": "11:00", "endTime": "11:45", "subjectId": "sub8", "teacherId": "t8" },
    { "id": "tt6", "classId": "c4", "dayOfWeek": "Thursday", "period": 4, "startTime": "12:00", "endTime": "12:45", "subjectId": "sub11", "teacherId": "t12" },
    { "id": "tt7", "classId": "c5", "dayOfWeek": "Friday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub5", "teacherId": "t5" },
    { "id": "tt8", "classId": "c1", "dayOfWeek": "Tuesday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub1", "teacherId": "t1" }
  ],
  "notices": [
    { "id": "n1", "title": "School Reopens", "content": "The school will reopen on Monday, August 4th, 2025.", "date": "2025-07-25", "target": "All", "authorId": "admin" },
    { "id": "n2", "title": "Annual Sports Day", "content": "The annual sports day will be held in the last week of September.", "date": "2025-07-20", "target": "All", "authorId": "admin" },
    { "id": "n3", "title": "Urgent Staff Meeting", "content": "All teachers are requested to attend a meeting on Friday at 3 PM.", "date": "2025-07-26", "target": "Teacher", "authorId": "admin" },
    { "id": "n4", "title": "Science Fair Submissions", "content": "Students interested in the science fair must submit their project proposals by the end of this month.", "date": "2025-07-24", "target": "Student", "authorId": "t2" },
    { "id": "n5", "title": "Fee Payment Reminder", "content": "The last date for fee payment for the current term is August 10th. Please pay on time to avoid a late fee.", "date": "2025-07-22", "target": "All", "authorId": "admin" },
    { "id": "n6", "title": "Parent-Teacher Meeting", "content": "The Parent-Teacher meeting for classes 1-5 will be held on August 16th, 2025.", "date": "2025-07-29", "target": "All", "authorId": "admin" }
  ],
  "attendance": [
    { "attendanceId": "att1", "studentId": "s1", "classId": "c1", "date": "2025-07-28", "status": "Present" },
    { "attendanceId": "att2", "studentId": "s2", "classId": "c1", "date": "2025-07-28", "status": "Absent" },
    { "attendanceId": "att3", "studentId": "s3", "classId": "c2", "date": "2025-07-28", "status": "Present" },
    { "attendanceId": "att4", "studentId": "s_2233081040", "classId": "c4", "date": "2025-07-28", "status": "Present" }
  ],
  "fees": [
    { "id": "f1", "studentId": "s1", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f2", "studentId": "s2", "feeType": "Tuition Fee", "amount": 5000, "status": "Unpaid", "dueDate": "2025-08-10" },
    { "id": "f3", "studentId": "s1", "feeType": "Exam Fee", "amount": 500, "status": "Paid", "dueDate": "2025-09-01" },
    { "id": "f4", "studentId": "s3", "feeType": "Tuition Fee", "amount": 4500, "status": "Unpaid", "dueDate": "2025-08-10" },
    { "id": "f_2233081040", "studentId": "s_2233081040", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081244", "studentId": "s_2233081244", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081263", "studentId": "s_2233081263", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081267", "studentId": "s_2233081267", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081311", "studentId": "s_2233081311", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081251", "studentId": "s_2233081251", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081204", "studentId": "s_2233081204", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081205", "studentId": "s_2233081205", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081223", "studentId": "s_2233081223", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081222", "studentId": "s_2233081222", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081237", "studentId": "s_2233081237", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081255", "studentId": "s_2233081255", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081266", "studentId": "s_2233081266", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081220", "studentId": "s_2233081220", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081228", "studentId": "s_2233081228", "feeType": "Tuition Fee", "amount": 5000, "status": "Unpaid", "dueDate": "2025-08-10" },
    { "id": "f_2233081271", "studentId": "s_2233081271", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081550", "studentId": "s_2233081550", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081556", "studentId": "s_2233081556", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081569", "studentId": "s_2233081569", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081531", "studentId": "s_2233081531", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081545", "studentId": "s_2233081545", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081582", "studentId": "s_2233081582", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081053", "studentId": "s_2233081053", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081272", "studentId": "s_2233081272", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081265", "studentId": "s_2233081265", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081260", "studentId": "s_2233081260", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081268", "studentId": "s_2233081268", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081269", "studentId": "s_2233081269", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2231081042", "studentId": "s_2231081042", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081246", "studentId": "s_2233081246", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_2233081257", "studentId": "s_2233081257", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10" },
    { "id": "f_fine_s2", "studentId": "s2", "feeType": "Library Fine", "amount": 25, "status": "Unpaid", "dueDate": "2025-08-15" }
  ],
  "exams": [
    { "id": "ex1", "name": "Class Test I", "classId": "c1", "subjectId": "sub2", "teacherId": "t2", "date": "2025-08-15", "maxMarks": 25 },
    { "id": "ex2", "name": "Mid-Term Exam", "classId": "c1", "subjectId": "sub4", "teacherId": "t4", "date": "2025-09-17", "maxMarks": 100 },
    { "id": "ex3", "name": "Class Test I", "classId": "c2", "subjectId": "sub1", "teacherId": "t1", "date": "2025-08-16", "maxMarks": 25 },
    { "id": "ex4", "name": "Mid-Term Exam", "classId": "c4", "subjectId": "sub11", "teacherId": "t12", "date": "2025-09-15", "maxMarks": 100 }
  ],
  "results": [
    { "resultId": "res1", "examId": "ex1", "studentId": "s1", "marks": 22 },
    { "resultId": "res2", "examId": "ex1", "studentId": "s2", "marks": 19 },
    { "resultId": "res3", "examId": "ex2", "studentId": "s1", "marks": 85 },
    { "resultId": "res4", "examId": "ex2", "studentId": "s2", "marks": 78 },
    { "resultId": "res5", "examId": "ex3", "studentId": "s3", "marks": 24 }
  ],
  "library": {
    "books": [
      { "bookId": "b1", "title": "Introduction to Algebra", "author": "John Doe", "publicationYear": 2020, "isbn": "978-3-16-148410-0", "genre": "Mathematics", "totalCopies": 10, "availableCopies": 7 },
      { "bookId": "b2", "title": "A Brief History of Time", "author": "Stephen Hawking", "publicationYear": 1988, "isbn": "978-0-553-10953-5", "genre": "Science", "totalCopies": 5, "availableCopies": 4 },
      { "bookId": "b3", "title": "The Adventures of Tom Sawyer", "author": "Mark Twain", "publicationYear": 1876, "isbn": "978-0-14-303956-3", "genre": "Fiction", "totalCopies": 15, "availableCopies": 15 },
      { "bookId": "b4", "title": "Pride and Prejudice", "author": "Jane Austen", "publicationYear": 1813, "isbn": "978-0-14-143951-8", "genre": "Romance", "totalCopies": 7, "availableCopies": 7 },
      { "bookId": "b5", "title": "To Kill a Mockingbird", "author": "Harper Lee", "publicationYear": 1960, "isbn": "978-0-06-112008-4", "genre": "Fiction", "totalCopies": 12, "availableCopies": 10 },
      { "bookId": "b6", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publicationYear": 1925, "isbn": "978-0-7432-7356-5", "genre": "Fiction", "totalCopies": 8, "availableCopies": 8 }
    ],
    "transactions": [
      { "transactionId": "lt1", "bookId": "b1", "studentId": "s3", "issueDate": "2025-07-15", "dueDate": "2025-07-29", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt2", "bookId": "b2", "studentId": "s1", "issueDate": "2025-07-10", "dueDate": "2025-07-24", "returnDate": "2025-07-22", "status": "Returned" },
      { "transactionId": "lt3", "bookId": "b1", "studentId": "s2", "issueDate": "2025-07-01", "dueDate": "2025-07-15", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt4", "bookId": "b5", "studentId": "s_2233081040", "issueDate": "2025-07-25", "dueDate": "2025-08-08", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt5", "bookId": "b1", "studentId": "s5", "issueDate": "2025-07-29", "dueDate": "2025-08-12", "returnDate": null, "status": "Issued" }
    ],
    "reservations": [
      { "reservationId": "resv1", "bookId": "b1", "studentId": "s4", "requestDate": "2025-07-28", "status": "Pending" }
    ],
    "acquisitions": [
  {"acquisitionId": "acq1","bookId": "b6","title": "Introduction to AI", "author": "Stuart Russell","acquiredDate": "2025-07-15", "price": 4200, "supplier": "Academic Books Ltd." },
  {"acquisitionId": "acq2", "bookId": "b7", "title": "Data Structures in C",  "author": "Mark Allen Weiss", "acquiredDate": "2025-07-10","price": 3500, "supplier": "Campus Textbooks"},
  {"acquisitionId": "acq3", "bookId": "b8", "title": "World History: A Modern Perspective","author": "John Merriman", "acquiredDate": "2025-06-25","price": 3800, "supplier": "Global Distributors"}
     ]
  },
  "transport": {
    "vehicles": [
      { "vehicleId": "v1", "vehicleNumber": "DH-GA-1234", "driverName": "Mr. Kamal", "driverContact": "01711-000001", "capacity": 30 },
      { "vehicleId": "v2", "vehicleNumber": "DH-GA-5678", "driverName": "Mr. Jamal", "driverContact": "01711-000002", "capacity": 30 },
      { "vehicleId": "v3", "vehicleNumber": "DH-CA-9101", "driverName": "Mr. Rahim", "driverContact": "01711-000003", "capacity": 25 }
    ],
    "routes": [
      { "routeId": "r1", "routeName": "Route A - North", "stops": ["Stop A1", "Stop A2", "Stop A3"] },
      { "routeId": "r2", "routeName": "Route B - South", "stops": ["Stop B1", "Stop B2", "Stop B3"] },
      { "routeId": "r3", "routeName": "Route C - East", "stops": ["Stop C1", "Stop C2", "Stop C3", "Stop C4"] }
    ],
    "assignments": [
      { "assignmentId": "ta1", "studentId": "s1", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta2", "studentId": "s2", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta3", "studentId": "s3", "vehicleId": "v2", "routeId": "r2" },
      { "assignmentId": "ta4", "studentId": "s_2233081040", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta5", "studentId": "s4", "vehicleId": "v3", "routeId": "r3" },

      
    ]
  },
    "readingLists": [ {"listId": "rl1", "title": "Computer Science Essentials", "courseId": "cs101", "createdBy": "t1","books": ["b1", "b2", "b3"] },
  {
    "listId": "rl2", "title": "Modern Literature", "courseId": "lit202", "createdBy": "t2", "books": ["b4", "b5"]
  }   ]
};

// You can assign the embeddedDatabase to your appDatabase variable
appDatabase = embeddedDatabase;

// Example of accessing data
console.log("A student's name:", appDatabase.students.find(s => s.id === 's1').name);
console.log("A teacher's name:", appDatabase.teachers.find(t => t.id === 't1').name);
console.log("A book title:", appDatabase.library.books.find(b => b.bookId === 'b1').title);


const apiService = (() => {
    const DB_KEY = 'sms_database_modern';
    const init = async () => {
        const savedDb = localStorage.getItem(DB_KEY);
        if (savedDb) {
            try {
                appDatabase = JSON.parse(savedDb);
            } catch (error) {
                console.error("Could not parse saved database. Loading default.", error);
                appDatabase = JSON.parse(JSON.stringify(embeddedDatabase));
                save();
            }
        } else {
            appDatabase = JSON.parse(JSON.stringify(embeddedDatabase));
            save();
        }
    };
    const save = () => localStorage.setItem(DB_KEY, JSON.stringify(appDatabase));
    const get = (collection, subCollection = null) => new Promise(resolve => setTimeout(() => {
        if (subCollection) {
            resolve(JSON.parse(JSON.stringify(appDatabase[collection] ? (appDatabase[collection][subCollection] || []) : [])));
        } else {
            resolve(JSON.parse(JSON.stringify(appDatabase[collection] || [])));
        }
    }, 250));
    const create = (collection, data, subCollection = null) => new Promise(resolve => setTimeout(() => {
        const idKey = subCollection === 'books' ? 'bookId' : subCollection === 'transactions' ? 'transactionId' : 'id';
        const prefix = collection.slice(0,1) + (subCollection ? subCollection.slice(0,1) : '');
        const newItem = { ...data, [idKey]: `${prefix}${Date.now()}` };
        if (subCollection) {
            appDatabase[collection][subCollection].push(newItem);
        } else {
            appDatabase[collection].push(newItem);
        }
        save();
        resolve(newItem);
    }, 100));
    const update = (collection, id, data, subCollection = null, idKey = 'id') => new Promise(resolve => setTimeout(() => {
        const collectionToUpdate = subCollection ? appDatabase[collection][subCollection] : appDatabase[collection];
        const index = collectionToUpdate.findIndex(item => item[idKey] === id);
        if (index !== -1) {
            collectionToUpdate[index] = { ...collectionToUpdate[index], ...data };
            save();
            resolve(collectionToUpdate[index]);
        }
    }, 100));
    const remove = (collection, id, subCollection = null, idKey = 'id') => new Promise(resolve => setTimeout(() => {
        if(subCollection) {
            appDatabase[collection][subCollection] = appDatabase[collection][subCollection].filter(item => item[idKey] !== id);
        } else {
            appDatabase[collection] = appDatabase[collection].filter(item => item.id !== id);
        }
        save();
        resolve({ success: true });
    }, 100));
    const getAttendance = (date, classId) => new Promise(resolve => {
        const records = appDatabase.attendance.filter(att => att.date === date && att.classId === classId);
        const attendanceMap = records.reduce((acc, record) => {
            acc[record.studentId] = record.status;
            return acc;
        }, {});
        resolve(attendanceMap);
    });
    const saveAttendance = (date, classId, records) => new Promise(resolve => {
        appDatabase.attendance = appDatabase.attendance.filter(att => att.date !== date || att.classId !== classId);
        for (const studentId in records) {
            const newRecord = {
                attendanceId: `att${Date.now()}${studentId}`,
                studentId: studentId,
                classId: classId,
                date: date,
                status: records[studentId]
            };
            appDatabase.attendance.push(newRecord);
        }
        save();
        resolve({ success: true });
    });
    const getResultsForExam = (examId) => new Promise(resolve => {
        const results = appDatabase.results.filter(r => r.examId === examId);
        resolve(results);
    });
    const saveResults = (examId, resultsData) => new Promise(resolve => {
        resultsData.forEach(res => {
            const existingResultIndex = appDatabase.results.findIndex(r => r.examId === examId && r.studentId === res.studentId);
            if (existingResultIndex > -1) {
                appDatabase.results[existingResultIndex] = { ...appDatabase.results[existingResultIndex], ...res };
            } else {
                appDatabase.results.push({ resultId: `res${Date.now()}${res.studentId}`, examId, ...res });
            }
        });
        save();
        resolve({ success: true });
    });
     
       const reset = async () => {
        localStorage.removeItem(DB_KEY);
        await init(); // Re-initialize with embedded data
    };


    return { init, save, get, create, update, remove, getAttendance, saveAttendance, getResultsForExam, saveResults, reset };
})();


// ===================================================================================
// --- CENTRALIZED DATA STORE ---
// ===================================================================================
const store = {
    _data: {},
    _maps: {},
    async initialize() {
         const collections = ['users', 'departments', 'subjects', 'students', 'teachers', 'classes', 'timetable', 'notices', 'attendance', 'fees', 'exams', 'results', 'library', 'transport', 'readingLists'];
        const promises = collections.map(async (key) => {
            this._data[key] = await apiService.get(key);
        });
        await Promise.all(promises);
        this.buildMaps();
    },
    get(collection, subCollection = null) {
        if (subCollection) {
            return this._data[collection] ? (this._data[collection][subCollection] || []) : [];
        }
        return this._data[collection] || [];
    },
    getMap(collection) {
        return this._maps[collection] || new Map();
    },
    buildMaps() {
        this._maps.students = new Map(this.get('students').map(s => [s.id, s]));
        this._maps.teachers = new Map(this.get('teachers').map(t => [t.id, t]));
        this._maps.classes = new Map(this.get('classes').map(c => [c.id, c]));
        this._maps.subjects = new Map(this.get('subjects').map(s => [s.id, s]));
        this._maps.departments = new Map(this.get('departments').map(d => [d.id, d]));
        this._maps.books = new Map(this.get('library', 'books').map(b => [b.bookId, b]));
    },
    async refresh(collection) {
        this._data[collection] = await apiService.get(collection);
        this.buildMaps(); // Rebuild maps that might depend on this collection
    }
};

// ===================================================================================
// --- UI ELEMENT SELECTORS ---
// ===================================================================================
const ui = {
    loginPage: document.getElementById('login-page'),
    app: document.getElementById('app'),
    loginForm: document.getElementById('login-form'),
    loginMessage: document.getElementById('login-message'),
    logoutButton: document.getElementById('logout-button'),
    contentArea: document.getElementById('content-area'),
    pageTitle: document.getElementById('page-title'),
    navMenu: document.getElementById('nav-menu'),
    userInfo: document.getElementById('user-info'),
    userNameDisplay: document.getElementById('user-name-display'),
    sidebar: document.getElementById('sidebar'),
    modal: document.getElementById('form-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    closeModalButton: document.getElementById('close-modal-button'),
    confirmModal: document.getElementById('confirm-modal'),
    confirmText: document.getElementById('confirm-text'),
    confirmYesBtn: document.getElementById('confirm-yes-btn'),
    confirmNoBtn: document.getElementById('confirm-no-btn'),
    headerUserAvatar: document.getElementById('header-user-avatar'),
    toastContainer: document.getElementById('toast-container'),
    resetDataBtn: document.getElementById('reset-data-btn'), 
};


// ===================================================================================
// --- INITIALIZATION & ROUTING ---
// ===================================================================================
document.addEventListener('DOMContentLoaded', async () => {
    await apiService.init();
    await store.initialize();

    const savedUser = sessionStorage.getItem('sms_user_modern');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        initializeApp();
    } else {
        ui.loginPage.style.display = 'block';
        ui.app.classList.add('hidden');
    }

    setupGlobalEventListeners();
});

function setupGlobalEventListeners() {
    ui.loginForm.addEventListener('submit', handleLogin);
    ui.logoutButton.addEventListener('click', handleLogout);
    ui.closeModalButton.addEventListener('click', () => closeAnimatedModal(ui.modal));
    ui.confirmNoBtn.addEventListener('click', () => closeAnimatedModal(ui.confirmModal));
    ui.resetDataBtn.addEventListener('click', handleResetData);
}

async function handleLogin(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    ui.loginMessage.textContent = '';

    const users = await apiService.get('users');
    const userAccount = users[username.toLowerCase()];

    if (userAccount && userAccount.password === password) {
        currentUser = {
            username: username.toLowerCase(),
            role: userAccount.role,
        };

        // Fetch detailed profile info
        if (userAccount.role === 'Admin') {
            currentUser.id = 'admin';
            currentUser.name = userAccount.name;
            currentUser.email = userAccount.email;
            currentUser.profileImage = userAccount.profileImage;
        } else if (userAccount.role === 'Student') {
            const studentData = store.get('students').find(s => s.id === userAccount.studentId);
            currentUser = { ...currentUser, ...studentData };
        } else if (userAccount.role === 'Teacher') {
            const teacherData = store.get('teachers').find(t => t.id === userAccount.teacherId);
            currentUser = { ...currentUser, ...teacherData };
        }
        
        sessionStorage.setItem('sms_user_modern', JSON.stringify(currentUser));
        initializeApp();

    } else {
        ui.loginMessage.textContent = 'Invalid username or password.';
    }
}

function handleLogout() {
    // Instead of logging out immediately, first show the confirmation modal
    showConfirmationModal(
        "Are you sure you want to log out?", // This is the message the user will see
        () => {
            // This part only runs if the user clicks "Yes"
            currentUser = null;
            sessionStorage.removeItem('sms_user_modern');
            ui.app.classList.add('hidden');
            ui.loginPage.style.display = 'block';
            window.location.reload(); // To clear all state
        }
    );
}

function handleResetData() {
    showConfirmationModal(
        'Are you sure you want to reset all data? This will restore the application to its original state and log you out. This action cannot be undone.',
        async () => {
            await apiService.reset();
            showToast('Application data has been reset.', 'info');
            setTimeout(() => {
                handleLogout();
            }, 1500); 
        }
    );
}


function initializeApp() {
    ui.loginPage.style.display = 'none';
    ui.app.classList.remove('hidden');
    
    setupUIForRole();
    navigateTo('dashboard');
}

function setupUIForRole() {
    if (!currentUser) return;
   ui.headerUserAvatar.src = currentUser.profileImage || generateInitialsAvatar(currentUser.name);

    const menuItems = navConfig[currentUser.role];
    ui.navMenu.innerHTML = menuItems.map(item => `
        <a href="#" class="sidebar-link p-2 rounded-lg flex items-center gap-3" data-page="${item.page}">
            <i class="fas ${item.icon} w-5 text-center"></i>
            <span>${item.text}</span>
        </a>
    `).join('');

    document.querySelectorAll('.sidebar-link').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar-link').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            navigateTo(item.dataset.page);
        });
    });
    document.querySelector('.sidebar-link[data-page="dashboard"]').classList.add('active');
}

function navigateTo(page) {
    const pageText = navConfig[currentUser.role].find(item => item.page === page)?.text || 'Page';
    ui.pageTitle.textContent = pageText;
    
    const pageRenderers = {
        'dashboard': renderDashboard, 'students': renderStudentsPage,
        'teachers': renderTeachersPage, 'classes': renderClassesPage,
        'attendance': renderAttendancePage, 'fees': renderFeesPage,
        'exams': renderExamsPage, 'notices': renderNoticesPage,
        'profile': renderProfilePage, 'departments': renderDepartmentsPage,
        'library': renderLibraryPage, 'transport': renderTransportPage,
        'contactTeacher': renderContactTeacherPage, 'timetable': renderTimetablePage,
    };

    const renderFunc = pageRenderers[page] || (() => { ui.contentArea.innerHTML = '<p>Page not found.</p>'; });

   
    
    // Show skeleton loader
    if (['students', 'teachers', 'classes', 'departments', 'fees'].includes(page)) {
        ui.contentArea.innerHTML = getSkeletonLoaderHTML('table');
    } else if (page === 'dashboard') {
         ui.contentArea.innerHTML = getSkeletonLoaderHTML('dashboard');
    } else {
        ui.contentArea.innerHTML = `<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin fa-3x"></i></div>`;
    }

    // Render the actual content after a short delay
    setTimeout(renderFunc, 150);
}

// ===================================================================================
// --- PAGE RENDERERS ---
// ===================================================================================
// All `render...Page` functions from your provided script go here.
// I have included them below, unchanged, as they rely on the functions I've reconstructed.
async function renderDashboard() {
    // Data fetching (assuming store.get and store.getMap are efficient)
    const students = store.get('students');
    const teachers = store.get('teachers');
    const fees = store.get('fees');
    const allNotices = store.get('notices');
    const exams = store.get('exams');
    const books = store.get('library', 'books');
    const timetable = store.get('timetable');
    const classesMap = store.getMap('classes');
    const subjectsMap = store.getMap('subjects');

    // Helper functions for card creation (ensure these are defined globally or passed in)
    // For demonstration, I'm including them conceptually here.
    function createDashboardCard({ title, value, icon, color }) {
        const colorMap = {
            indigo: 'from-indigo-600 to-indigo-800',
            yellow: 'from-yellow-500 to-yellow-700',
            blue: 'from-blue-600 to-blue-800',
            green: 'from-green-600 to-green-800',
        };
        const gradientClass = colorMap[color] || 'from-gray-600 to-gray-800';

        return `
            <div class="dashboard-card bg-gradient-to-br ${gradientClass} p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                <div class="absolute inset-0 bg-black opacity-10 pointer-events-none rounded-xl"></div>
                <div class="flex items-center justify-between mb-4 relative z-10">
                    <div>
                        <p class="text-sm font-medium text-white text-opacity-80">${title}</p>
                        <p class="text-3xl font-bold text-white mt-1">${value}</p>
                    </div>
                    <div class="text-white text-4xl opacity-70">
                        <i class="fas ${icon}"></i>
                    </div>
                </div>
            </div>
        `;
    }

    function createUpcomingExamCard(exam, subjectName) {
        const examDate = new Date(exam.date);
        const formattedDate = examDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
        const formattedTime = examDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        return `
            <div class="bg-slate-700/50 p-4 rounded-lg flex items-center space-x-4 shadow-md transition-transform duration-200 hover:translate-x-1">
                <div class="flex-shrink-0 text-center bg-blue-900/50 text-blue-300 rounded-md p-2">
                    <p class="text-xs font-semibold">${formattedDate}</p>
                    <p class="text-sm">${formattedTime}</p>
                </div>
                <div>
                    <p class="font-bold text-white">${subjectName} - ${exam.type}</p>
                    <p class="text-sm text-slate-300">Class: ${classesMap.get(exam.classId)?.name || 'N/A'}</p>
                </div>
            </div>
        `;
    }

    // STUDENT DASHBOARD
    if (currentUser.role === 'Student') {
        const pendingFeesCount = fees.filter(f => f.studentId === currentUser.id && f.status === 'Unpaid').length;
        const upcomingExams = exams.filter(e => e.classId === currentUser.classId && new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));
        
                // --- NEW: Library Alert Logic ---
        const myLibraryTx = store.get('library', 'transactions').filter(t => t.studentId === currentUser.id && t.status === 'Issued');
        const myLibraryFines = store.get('fees').filter(f => f.studentId === currentUser.id && f.feeType === 'Library Fine' && f.status === 'Unpaid');
        const booksDueSoon = myLibraryTx.filter(t => {
            const dueDate = new Date(t.dueDate);
            // Reset today's date for accurate comparison
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const threeDaysFromNow = new Date(new Date().setDate(new Date().getDate() + 3));
            return dueDate <= threeDaysFromNow && dueDate >= today;
        });
        const overdueBooksCount = myLibraryTx.filter(t => new Date(t.dueDate) < new Date()).length;
        // --- END: Library Alert Logic ---


        const studentStatCards = [
            { title: 'Upcoming Exams', value: upcomingExams.length, icon: 'fa-file-alt', color: 'indigo' },
            { title: 'Pending Fees', value: pendingFeesCount, icon: 'fa-file-invoice-dollar', color: 'yellow' },
             { title: 'Overdue Books', value: overdueBooksCount, icon: 'fa-exclamation-triangle', color: 'gray' },
        ];

        ui.contentArea.innerHTML = `
             <div class="mb-6">
                <h2 class="text-3xl md:text-4xl font-extrabold text-white leading-tight">Welcome back, <span class="text-blue-400">${currentUser.name}!</span></h2>
                <p class="text-slate-400 mt-2">Here's your personalized summary for today.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">${studentStatCards.map(createDashboardCard).join('')}</div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Recent Notices</h3>
                    <div class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                        ${allNotices.length > 0 ? allNotices.slice(0, 4).map(n => `
                            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-slate-700/30 rounded-md transition-transform duration-200 hover:translate-x-1">
                                <p class="font-bold text-white">${n.title} <span class="text-xs font-normal text-slate-500">(${new Date(n.date).toLocaleDateString()})</span></p>
                                <p class="text-sm text-slate-400 mt-1">${n.content.substring(0, 80)}...</p>
                            </div>`).join('') : '<p class="text-slate-500 italic">No recent notices to display.</p>'}
                    </div>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Upcoming Exams</h3>
                    <div class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                        ${upcomingExams.length > 0 ? upcomingExams.slice(0, 4).map(e => createUpcomingExamCard(e, subjectsMap.get(e.subjectId)?.name || 'N/A')).join('') : '<p class="text-slate-500 italic">No upcoming exams scheduled.</p>'}
                    </div>
                </div>
                <!-- NEW: Library Alerts Card -->
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Library Alerts</h3>
                    <div class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                        ${myLibraryFines.length > 0 ? myLibraryFines.map(f => `
                            <div class="border-l-4 border-red-500 pl-4 py-2 bg-red-900/30 rounded-md">
                                <p class="font-bold text-white">Overdue Fine: BDT ${f.amount}</p>
                                <p class="text-sm text-red-300">Please pay your library fine promptly.</p>
                            </div>`).join('') : ''}
                        ${booksDueSoon.length > 0 ? booksDueSoon.map(t => `
                            <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/30 rounded-md">
                                <p class="font-bold text-white">Book Due Soon: ${store.getMap('books').get(t.bookId)?.title}</p>
                                <p class="text-sm text-yellow-300">Return by: ${t.dueDate}</p>
                            </div>`).join('') : ''}
                        ${myLibraryFines.length === 0 && booksDueSoon.length === 0 && overdueBooksCount === 0 ? '<p class="text-slate-500 italic">No urgent library alerts. You are all set!</p>' : ''}
                    </div>
                </div>
            </div>`;



    // TEACHER DASHBOARD
    } else if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = store.get('classes').filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];

        const myStudents = students.filter(s => allMyClassIds.includes(s.classId));
        const myExams = exams.filter(e => e.teacherId === currentUser.id);
        const upcomingExams = myExams.filter(e => new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = daysOfWeek[new Date().getDay()];
        const todaysClasses = timetable.filter(t => t.teacherId === currentUser.id && t.dayOfWeek === today)
                                        .sort((a,b) => a.startTime.localeCompare(b.startTime));

        const statCards = [
            { title: 'My Students', value: myStudents.length, icon: 'fa-user-graduate', color: 'blue' },
            { title: 'My Classes', value: allMyClassIds.length, icon: 'fa-school', color: 'green' },
            { title: 'My Upcoming Exams', value: upcomingExams.length, icon: 'fa-file-alt', color: 'yellow' },
            { title: "Today's Classes", value: todaysClasses.length, icon: 'fa-calendar-day', color: 'indigo' },
        ];

        ui.contentArea.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${statCards.map(createDashboardCard).join('')}</div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Today's Timetable (<span class="text-blue-400">${today}</span>)</h3>
                    <div class="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                        ${todaysClasses.length > 0 ? todaysClasses.map(c => `
                            <div class="flex items-center gap-4 p-3 rounded-lg bg-slate-700/50 transition-transform duration-200 hover:scale-[1.01]">
                                <div class="text-center font-semibold bg-blue-900/50 text-blue-300 rounded-lg px-3 py-1 min-w-[70px]">
                                    <p>${c.startTime}</p>
                                </div>
                                <div>
                                    <p class="font-bold text-white">${subjectsMap.get(c.subjectId)?.name || 'N/A'}</p>
                                    <p class="text-sm text-slate-400">Class: ${classesMap.get(c.classId)?.name || 'N/A'}</p>
                                </div>
                            </div>
                        `).join('') : `<p class="text-slate-500 italic">You have no classes scheduled for today.</p>`}
                    </div>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Quick Communication</h3>
                    <div class="space-y-3">
                        <button id="custom-message-btn" class="w-full text-left p-4 rounded-lg bg-blue-900/30 hover:bg-blue-900/60 transition duration-300 transform hover:scale-[1.02] shadow-md">
                            <p class="font-bold text-blue-200"><i class="fas fa-paper-plane mr-3 text-lg"></i>Send Custom Message</p>
                            <p class="text-sm text-blue-300 mt-1">Reach out to your classes or the Admin swiftly.</p>
                        </button>
                    </div>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Student Distribution</h3>
                    ${myStudents.length > 0 ? `<canvas id="genderChart"></canvas>` : `<p class="text-slate-500 italic">No student data to display.</p>`}
                </div>
            </div>
        `;

        document.getElementById('custom-message-btn').onclick = openAdvancedMessageModal;
        if(myStudents.length > 0) {
            renderDashboardCharts(null, myStudents);
        }
    // ADMIN DASHBOARD
    } else {
        const statCards = [
            { title: 'Total Students', value: students.length, icon: 'fa-user-graduate', color: 'blue' },
            { title: 'Total Teachers', value: teachers.length, icon: 'fa-chalkboard-teacher', color: 'green' },
            { title: 'Fees Due', value: fees.filter(f => f.status === 'Unpaid').length, icon: 'fa-file-invoice-dollar', color: 'yellow' },
            { title: 'Books Available', value: books.reduce((acc, book) => acc + book.availableCopies, 0), icon: 'fa-book', color: 'indigo' },
        ];

        const upcomingExams = exams.filter(e => new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));

        ui.contentArea.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${statCards.map(createDashboardCard).join('')}</div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Fee Collection Overview</h3>
                    <canvas id="feesChart"></canvas>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Student Distribution</h3>
                    <canvas id="genderChart"></canvas>
                </div>
            </div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Quick Communication</h3>
                    <p class="text-slate-400 mb-4">Send a message directly to specific classes, teachers, or the entire school.</p>
                    <button id="admin-send-message-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                        <i class="fas fa-paper-plane mr-2 text-lg"></i> Send a Message / Notice
                    </button>
                </div>
                <div class="bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Upcoming Events & Exams</h3>
                    <div class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                        ${upcomingExams.length > 0 ? upcomingExams.slice(0, 5).map(e => createUpcomingExamCard(e, subjectsMap.get(e.subjectId)?.name || 'N/A')).join('') : '<p class="text-slate-500 italic">No upcoming events or exams.</p>'}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('admin-send-message-btn').onclick = openAdvancedMessageModal;
        renderDashboardCharts(fees, students);
    }
}
async function renderStudentsPage() {
    const classes = store.get('classes');
    const timetable = store.get('timetable');
    let studentDataFilter = null;
    let configOverrides = {};

    if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = classes.filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];
        studentDataFilter = (student) => allMyClassIds.includes(student.classId);
        configOverrides = {
            hideAddButton: false, 
            hideActions: false, 
        };
    } else if (currentUser.role === 'Student') {
        studentDataFilter = (student) => student.classId === currentUser.classId;
        configOverrides = {
            hideAddButton: true,
            hideActions: true,
        };
    }
    
    const classMap = store.getMap('classes');
    const classFilterOptions = [
        { value: '', label: 'All Classes' },
        ...classes.map(c => ({ value: c.id, label: c.name }))
    ];

    const baseConfig = {
        title: 'Student',
        collectionName: 'students',
        dataFilter: studentDataFilter,
        search: true,
        searchPlaceholder: 'Search by name...',
        searchKeys: ['name'],
        classFilter: true,
        classFilterOptions: classFilterOptions,
        columns: [
            { label: 'Name', key: 'name', sortable: true },
            { label: 'Roll No', key: 'rollNo', sortable: true },
            { label: 'Class', render: item => classMap.get(item.classId)?.name || 'N/A', sortable: true, sortKey: 'classId' },
            { label: 'Guardian', key: 'guardianName' },
            { label: 'Email', key: 'email' },
            { name: 'bloodGroup', label: 'Blood Group', key:'bloodGroup' }

        ],
        formFields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'rollNo', label: 'Roll Number', type: 'text', required: true },
            { name: 'classId', label: 'Class', type: 'select', options: classes.map(c => `<option value="${c.id}">${c.name}</option>`).join(''), required: true },
            { name: 'gender', label: 'Gender', type: 'select', options: '<option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>', required: true },
            { name: 'bloodGroup', label: 'Blood Group', type: 'select', options: '<option value="">Select</option><option value="A+">A+</option><option value="A-">A-</option><option value="B+">B+</option><option value="B-">B-</option><option value="AB+">AB+</option><option value="AB-">AB-</option><option value="O+">O+</option><option value="O-">O-</option>' },
            { name: 'guardianName', label: 'Guardian Name', type: 'text', required: true },
            { name: 'contact', label: 'Guardian Contact', type: 'tel', required: true },
            { name: 'address', label: 'Address', type: 'textarea' },
        ]
    };

    renderGenericListPage({ ...baseConfig, ...configOverrides });
}
async function renderTeachersPage() {
    const departments = store.get('departments');
    const departmentMap = store.getMap('departments');
    renderGenericListPage({
        title: 'Teacher', collectionName: 'teachers',
        
        columns: [
            { label: 'Name', key: 'name', sortable: true }, { label: 'Primary Subject', key: 'subject', sortable: true },
            { label: 'Department', render: (item) => departmentMap.get(item.departmentId)?.name || 'N/A', key: 'departmentId', sortable: true },
            { label: 'Contact', key: 'contact' }, 
            { label: 'Email', key: 'email' },
            { name: 'bloodGroup', label: 'Blood Group', key:'bloodGroup' }

        ],
        formFields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'subject', label: 'Primary Subject', type: 'text', required: true },
            { name: 'departmentId', label: 'Department', type: 'select', options: departments.map(d => `<option value="${d.id}">${d.name}</option>`).join(''), required: true },
            { name: 'contact', label: 'Contact', type: 'tel', required: true },
            { name: 'address', label: 'Address', type: 'textarea' },
            { name: 'qualifications', label: 'Qualifications', type: 'text' },
        ],
        searchKeys: ['name', 'subject', 'email']
    });
}
async function renderDepartmentsPage() {
    renderGenericListPage({
        title: 'Department', collectionName: 'departments',
        columns: [{ label: 'Department Name', key: 'name', sortable: true }],
        formFields: [{ name: 'name', label: 'Department Name', type: 'text', required: true }],
        searchKeys: ['name']
    });
}
async function renderClassesPage() {
    const teachers = store.get('teachers');
    const teacherMap = store.getMap('teachers');
    renderGenericListPage({
        title: 'Class', collectionName: 'classes',
        columns: [
            { label: 'Class Name', key: 'name', sortable: true },
            { label: 'Class Teacher', render: (item) => teacherMap.get(item.teacherId)?.name || 'N/A', key: 'teacherId', sortable: true },
            { label: 'Academic Year', key: 'academicYear', sortable: true },
            { label: 'Room No.', key: 'roomNumber' },
            { label: 'EMAIL', render: (item) => teacherMap.get(item.teacherId)?.email || 'N/A' }

        ],
        formFields: [
            { name: 'name', label: 'Class Name', type: 'text', required: true },
            { name: 'teacherId', label: 'Class Teacher', type: 'select', options: teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join(''), required: true },
            { name: 'academicYear', label: 'Academic Year', type: 'text', placeholder: 'e.g., 2025-2026' },
            { name: 'email', label: 'Email', type: 'email', required: true },
           { name: 'roomNumber', label: 'Room Number', type: 'text' },
        ],
        searchKeys: ['name', 'academicYear', 'roomNumber']
    });
}
async function renderTimetablePage() {
    const timetable = store.get('timetable');
    const classes = store.get('classes');
    const subjects = store.get('subjects');
    const teachers = store.get('teachers');
    const subjectsMap = store.getMap('subjects');
    const teachersMap = store.getMap('teachers');

    let relevantClasses = [];
    if (currentUser.role === 'Admin') {
        relevantClasses = classes;
    } else if (currentUser.role === 'Student') {
        relevantClasses = classes.filter(c => c.id === currentUser.classId);
    } else if (currentUser.role === 'Teacher') {
        const teacherClassIds = [...new Set(timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId))];
        classes.forEach(c => {
            if (c.teacherId === currentUser.id && !teacherClassIds.includes(c.id)) {
                teacherClassIds.push(c.id);
            }
        });
        relevantClasses = classes.filter(c => teacherClassIds.includes(c.id));
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allPeriods = [...new Set(timetable.map(t => t.period))].sort((a, b) => a - b);
    const timeSlots = allPeriods.map(p => {
        const entry = timetable.find(t => t.period === p);
        return entry ? `${entry.startTime} - ${entry.endTime}` : `Period ${p}`;
    });

    const openTimetableForm = (entryData = {}, classId, day, period) => {
        const isEditing = !!entryData.id;
        const title = isEditing ? 'Edit Timetable Entry' : 'Add Timetable Entry';

        const formFields = [
            { name: 'subjectId', label: 'Subject', type: 'select', options: subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join(''), required: true },
            { name: 'teacherId', label: 'Teacher', type: 'select', options: teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join(''), required: true },
            { name: 'startTime', label: 'Start Time', type: 'time', required: true },
            { name: 'endTime', label: 'End Time', type: 'time', required: true },
        ];

        openFormModal(title, formFields, async (formData) => {
            const payload = { ...formData, classId, dayOfWeek: day, period: parseInt(period) };
            if (isEditing) {
                await apiService.update('timetable', entryData.id, payload);
                showToast('Entry updated successfully!', 'success');
            } else {
                await apiService.create('timetable', payload);
                showToast('Entry added successfully!', 'success');
            }
            await store.refresh('timetable');
            renderTimetablePage();
        }, entryData);
    };

    const getTimetableHTMLForClass = (classData, canEdit) => {
        const classTimetable = timetable.filter(t => t.classId === classData.id);
        const grid = {};
        classTimetable.forEach(item => {
            if (!grid[item.dayOfWeek]) grid[item.dayOfWeek] = {};
            grid[item.dayOfWeek][item.period] = item;
        });

        return `
            <div class="overflow-x-auto">
                <table class="min-w-full border-collapse timetable-grid">
                    <thead>
                        <tr class="bg-slate-700">
                            <th class="p-3 border border-slate-600">Time / Day</th>
                            ${days.map(day => `<th class="p-3 border border-slate-600">${day}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${allPeriods.map((period, index) => `
                            <tr class="text-center">
                                <td class="p-3 border border-slate-600 font-medium bg-slate-700/50">
                                    <p class="font-bold">${timeSlots[index]}</p>
                                    <p class="text-xs text-slate-500">Period ${period}</p>
                                </td>
                                ${days.map(day => {
                                    const entry = grid[day]?.[period];
                                    if (entry) {
                                        const subject = subjectsMap.get(entry.subjectId)?.name || 'N/A';
                                        const teacher = teachersMap.get(entry.teacherId)?.name || 'N/A';
                                        return `<td class="p-3 border border-slate-600 align-middle relative group">
                                                    <p class="font-bold">${subject}</p>
                                                    <p class="text-sm text-slate-400">${teacher}</p>
                                                    ${canEdit ? `
                                                    <div class="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                                        <button class="edit-entry-btn text-blue-500 p-1" data-entry-id="${entry.id}" title="Edit"><i class="fas fa-edit"></i></button>
                                                        <button class="delete-entry-btn text-red-500 p-1" data-entry-id="${entry.id}" title="Delete"><i class="fas fa-trash"></i></button>
                                                    </div>` : ''}
                                                </td>`;
                                    }
                                    return `<td class="p-3 border border-slate-600 align-middle relative group">
                                                ${canEdit ? `
                                                <button class="add-entry-btn opacity-0 group-hover:opacity-100 transition-opacity text-2xl text-slate-400 hover:text-green-500"
                                                        data-class-id="${classData.id}" data-day="${day}" data-period="${period}" title="Add Entry">
                                                    <i class="fas fa-plus-circle"></i>
                                                </button>` : ''}
                                            </td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    };

    ui.contentArea.innerHTML = `
        <div class="space-y-8">
            ${relevantClasses.map(c => {
                const isClassTeacher = currentUser.role === 'Teacher' && currentUser.id === c.teacherId;
                const canEdit = currentUser.role === 'Admin' || isClassTeacher;
                return `
                <div class="bg-slate-800 p-6 rounded-xl shadow-md">
                    <h3 class="text-xl font-semibold mb-4">${c.name} - Weekly Timetable</h3>
                    ${getTimetableHTMLForClass(c, canEdit)}
                </div>`;
            }).join('')}
            ${relevantClasses.length === 0 ? `
                <div class="bg-slate-800 p-6 rounded-xl shadow-md text-center">
                    <p>No timetable information available for you.</p>
                </div>
            ` : ''}
        </div>
    `;

    document.querySelectorAll('.edit-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const entryId = btn.dataset.entryId;
            const entry = timetable.find(e => e.id === entryId);
            if (entry) {
                openTimetableForm(entry, entry.classId, entry.dayOfWeek, entry.period);
            }
        };
    });

    document.querySelectorAll('.add-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const { classId, day, period } = btn.dataset;
            openTimetableForm({}, classId, day, period);
        };
    });

    document.querySelectorAll('.delete-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const entryId = btn.dataset.entryId;
            showConfirmationModal('Are you sure you want to delete this timetable entry?', async () => {
                await apiService.remove('timetable', entryId);
                await store.refresh('timetable');
                showToast('Entry deleted successfully.', 'success');
                renderTimetablePage();
            });
        };
    });
}
async function renderFeesPage() {
    const students = store.get('students');
    const studentMap = store.getMap('students');
    const formatCurrency = (value) => `BDT ${Number(value || 0).toLocaleString()}`;
    
    let config = {
        title: 'Fee', collectionName: 'fees',
        columns: [
            { label: 'Student', render: (item) => studentMap.get(item.studentId)?.name || 'N/A', key: 'studentId', sortable: true },
            { label: 'Fee Type', key: 'feeType', sortable: true },
            { label: 'Amount', key: 'amount', render: (item) => formatCurrency(item.amount), sortable: true },
            { label: 'Status', key: 'status', sortable: true, render: (item) => `<span class="status-badge ${item.status === 'Paid' ? 'status-paid' : 'status-unpaid'}">${item.status}</span>` },
            { label: 'Due Date', key: 'dueDate', sortable: true },
        ],
        formFields: [
            { name: 'studentId', label: 'Student', type: 'select', options: students.map(s => `<option value="${s.id}">${s.name} (Roll: ${s.rollNo})</option>`).join(''), required: true },
            { name: 'feeType', label: 'Fee Type', type: 'text', placeholder: 'e.g., Tuition, Exam Fee', required: true },
            { name: 'amount', label: 'Amount', type: 'number', required: true },
            { name: 'dueDate', label: 'Due Date', type: 'date', required: true },
            { name: 'status', label: 'Status', type: 'select', options: '<option value="Unpaid">Unpaid</option><option value="Paid">Paid</option>', required: true },
        ],
        searchKeys: ['feeType']
    };

    if (currentUser.role === 'Student') {
        config.dataFilter = (fee) => fee.studentId === currentUser.id;
        config.hideAddButton = true;
        config.hideActions = true;
    } else if (currentUser.role === 'Teacher') {
        config.hideAddButton = true;
        config.hideActions = true;
    }
    
    renderGenericListPage(config);
}
async function renderAttendancePage() {
    const classes = store.get('classes');
    const timetable = store.get('timetable');
    let viewableClasses = classes;
    
    if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = classes.filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];
        viewableClasses = classes.filter(c => allMyClassIds.includes(c.id));
    }

    ui.contentArea.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-semibold mb-4">Manage Attendance</h3>
            ${currentUser.role !== 'Student' ? `
            <div class="flex flex-wrap items-center gap-4 mb-4">
                <input type="date" id="attendance-date" value="${new Date().toISOString().slice(0, 10)}" class="border p-2 rounded-lg bg-transparent border-slate-600 focus:ring-2 focus:ring-blue-500">
                <select id="attendance-class" class="border p-2 rounded-lg bg-slate-700 border-slate-600 focus:ring-2 focus:ring-blue-500">${viewableClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select>
                <button id="load-attendance-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">Load</button>
            </div>` : ''}
            <div id="attendance-sheet"></div>
        </div>
    `;
    
    const loadBtn = document.getElementById('load-attendance-btn');
    if (loadBtn) {
        loadBtn.onclick = async () => {
            const date = document.getElementById('attendance-date').value;
            const classId = document.getElementById('attendance-class').value;
            const sheetContainer = document.getElementById('attendance-sheet');
            
            if (!date || !classId) {
                sheetContainer.innerHTML = `<p class="text-red-500">Please select both date and class.</p>`;
                return;
            }
            
            sheetContainer.innerHTML = getSkeletonLoaderHTML('table');
            
            const students = store.get('students').filter(s => s.classId === classId);
            const attendanceMap = await apiService.getAttendance(date, classId);
            
            sheetContainer.innerHTML = `
                <div class="overflow-x-auto mt-4">
                    <table class="min-w-full bg-transparent"><thead class="bg-slate-700"><tr>
                        <th class="py-3 px-4 text-left font-semibold">Student Name</th>
                        <th class="py-3 px-4 text-left font-semibold">Roll No</th>
                        <th class="py-3 px-4 text-left font-semibold">Status</th>
                    </tr></thead><tbody class="text-slate-300">
                    ${students.map(s => `
                        <tr class="border-b border-slate-700">
                            <td class="px-4 py-2">${s.name}</td>
                            <td class="px-4 py-2">${s.rollNo}</td>
                            <td class="px-4 py-2">
                                <select class="attendance-status border p-1 rounded-lg w-full bg-slate-700 border-slate-600" data-studentid="${s.id}">
                                    <option value="Present" ${attendanceMap[s.id] === 'Present' ? 'selected' : ''}>Present</option>
                                    <option value="Absent" ${attendanceMap[s.id] === 'Absent' ? 'selected' : ''}>Absent</option>
                                    <option value="Late" ${attendanceMap[s.id] === 'Late' ? 'selected' : ''}>Late</option>
                                </select>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody></table>
                    <button id="save-attendance-btn" class="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition">Save Attendance</button>
                </div>
            `;
            
            document.getElementById('save-attendance-btn').onclick = async () => {
                const records = {};
                document.querySelectorAll('.attendance-status').forEach(select => {
                    records[select.dataset.studentid] = select.value;
                });
                await apiService.saveAttendance(date, classId, records);
                showToast('Attendance saved successfully!', 'success');
            };
        };
    }
}
async function renderExamsPage() {
    const allExams = store.get('exams');
    const classes = store.get('classes');
    const subjects = store.get('subjects');
    const teachers = store.get('teachers');
    const timetable = store.get('timetable');
    const students = store.get('students');
    const results = store.get('results');
    const classesMap = store.getMap('classes');
    const subjectsMap = store.getMap('subjects');
    const teachersMap = store.getMap('teachers');

    let relevantExams = allExams;
    if (currentUser.role === 'Student') {
        relevantExams = allExams.filter(e => e.classId === currentUser.classId);
    } else if (currentUser.role === 'Teacher') {
        relevantExams = allExams.filter(e => e.teacherId === currentUser.id);
    }

    const getResultForStudent = (examId, studentId) => {
        const result = results.find(r => r.examId === examId && r.studentId === studentId);
        return result ? `${result.marks}` : 'N/A';
    };

    ui.contentArea.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
                <h3 class="text-xl font-semibold">Exams & Results</h3>
                ${currentUser.role === 'Teacher' ? `
                    <div class="w-full md:w-auto md:flex-1 max-w-sm">
                        <input type="text" id="exam-search-input" placeholder="Search by subject or class..." class="border p-2 rounded-lg w-full bg-transparent border-slate-600 focus:ring-2 focus:ring-blue-500">
                    </div>
                ` : ''}
                ${currentUser.role === 'Admin' || currentUser.role === 'Teacher' ? `<button id="add-exam-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Create Exam Schedule</button>` : ''}
            </div>
            <div id="exam-list" class="space-y-6"></div>
        </div>
        <div id="results-modal-container"></div>
    `;

    const examListContainer = document.getElementById('exam-list');
    const attachActionListeners = () => {
        document.querySelectorAll('.manage-results-btn').forEach(btn => btn.onclick = () => handleManageResults(btn.dataset.examId));
        document.querySelectorAll('.delete-exam-btn').forEach(btn => btn.onclick = () => {
             showConfirmationModal('Are you sure you want to delete this exam schedule?', async () => {
                await apiService.remove('exams', btn.dataset.id);
                await store.refresh('exams');
                showToast('Exam deleted', 'success');
                renderExamsPage();
            });
        });
    };
    function renderExamList(filterText = '') {
        let filteredExams = relevantExams;
        if (filterText) {
            const lowerCaseFilter = filterText.toLowerCase();
            filteredExams = relevantExams.filter(exam => {
                const subjectName = subjectsMap.get(exam.subjectId)?.name.toLowerCase() || '';
                const className = classesMap.get(exam.classId)?.name.toLowerCase() || '';
                return subjectName.includes(lowerCaseFilter) || className.includes(lowerCaseFilter);
            });
        }

        const examGroups = filteredExams.reduce((acc, exam) => {
            if (!acc[exam.name]) acc[exam.name] = [];
            acc[exam.name].push(exam);
            return acc;
        }, {});

        if (Object.keys(examGroups).length > 0) {
            examListContainer.innerHTML = Object.keys(examGroups).map(groupName => `
                <div>
                    <h4 class="text-lg font-bold mb-3 p-3 bg-slate-700/50 rounded-lg">${groupName}</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${examGroups[groupName].map(exam => `
                            <div class="p-4 border border-slate-700 rounded-lg flex flex-col justify-between">
                                <div>
                                    <p class="font-bold text-base">${classesMap.get(exam.classId)?.name || ''} - ${subjectsMap.get(exam.subjectId)?.name || ''}</p>
                                    <p class="text-sm text-slate-400">Date: ${exam.date} | Max Marks: ${exam.maxMarks}</p>
                                    <p class="text-sm text-slate-400">By: ${teachersMap.get(exam.teacherId)?.name || 'N/A'}</p>
                                    ${currentUser.role === 'Student' ? `<p class="mt-2 text-lg">Your Score: <span class="font-bold">${getResultForStudent(exam.id, currentUser.id)} / ${exam.maxMarks}</span></p>` : ''}
                                </div>
                                <div class="mt-3 flex gap-2">
                                    ${currentUser.role === 'Teacher' ? `<button class="manage-results-btn text-sm bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-lg" data-exam-id="${exam.id}">Manage Results</button>` : ''}
                                    ${currentUser.role === 'Admin' ? `<button class="delete-exam-btn text-sm bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg" data-id="${exam.id}"><i class="fas fa-trash"></i></button>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        } else {
            examListContainer.innerHTML = '<p>No exams found matching your criteria.</p>';
        }
        attachActionListeners();
    }

    const handleManageResults = (examId) => {
        const exam = allExams.find(e => e.id === examId);
        const examStudents = students.filter(s => s.classId === exam.classId);
        const examResults = results.filter(r => r.examId === examId);

        const modalHtml = `
            <div id="results-modal" class="modal show">
                <div class="modal-content !max-w-3xl">
                    <span id="close-results-modal" class="close-button">×</span>
                    <h2 class="text-xl font-bold mb-4">Manage Results for ${exam.name} (${subjectsMap.get(exam.subjectId)?.name})</h2>
                    <div class="max-h-[60vh] overflow-y-auto">
                        <table class="min-w-full">
                            <thead><tr class="bg-slate-700">
                                <th class="p-2 text-left">Student</th><th class="p-2 text-left">Roll No</th><th class="p-2 text-left">Marks (out of ${exam.maxMarks})</th>
                            </tr></thead>
                            <tbody>
                            ${examStudents.map(s => {
                                const result = examResults.find(r => r.studentId === s.id);
                                return `
                                <tr class="border-b border-slate-700">
                                    <td class="p-2">${s.name}</td>
                                    <td class="p-2">${s.rollNo}</td>
                                    <td class="p-2"><input type="number" class="w-24 p-1 border rounded bg-transparent border-slate-600" data-studentid="${s.id}" value="${result?.marks || ''}" max="${exam.maxMarks}"></td>
                                </tr>`;
                            }).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-end mt-4">
                        <button id="save-results-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Save Results</button>
                    </div>
                </div>
            </div>`;
        document.getElementById('results-modal-container').innerHTML = modalHtml;

        document.getElementById('close-results-modal').onclick = () => document.getElementById('results-modal-container').innerHTML = '';
        document.getElementById('save-results-btn').onclick = async () => {
            const resultsData = [];
            document.querySelectorAll('#results-modal input[type="number"]').forEach(input => {
                if(input.value) {
                    resultsData.push({ studentId: input.dataset.studentid, marks: parseFloat(input.value) });
                }
            });
            await apiService.saveResults(examId, resultsData);
            await store.refresh('results');
            showToast('Results saved successfully!', 'success');
            document.getElementById('results-modal-container').innerHTML = '';
            renderExamsPage();
        };
    };
 
    renderExamList();

    const searchInput = document.getElementById('exam-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderExamList(e.target.value);
        });
    }

    const addExamBtn = document.getElementById('add-exam-btn');
    if (addExamBtn) {
        addExamBtn.onclick = () => {
            let formFields;
            if (currentUser.role === 'Admin') {
                formFields = [
                    { name: 'name', label: 'Exam Name', type: 'text', required: true, placeholder: "e.g., Mid-Term Exam" },
                    { name: 'classId', label: 'Class', type: 'select', options: classes.map(c=>`<option value="${c.id}">${c.name}</option>`).join(''), required: true },
                    { name: 'subjectId', label: 'Subject', type: 'select', options: subjects.map(s=>`<option value="${s.id}">${s.name}</option>`).join(''), required: true },
                    { name: 'teacherId', label: 'Assigned Teacher', type: 'select', options: teachers.map(t=>`<option value="${t.id}">${t.name}</option>`).join(''), required: true },
                    { name: 'date', label: 'Date', type: 'date', required: true },
                    { name: 'maxMarks', label: 'Max Marks', type: 'number', required: true },
                ];
            } else if (currentUser.role === 'Teacher') {
                const myClassIds = [...new Set(timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId))];
                const myClasses = classes.filter(c => myClassIds.includes(c.id) || c.teacherId === currentUser.id);
                if (myClasses.length === 0) {
                    showToast("You are not assigned to any classes to create an exam for.", "error");
                    return;
                }
                formFields = [
                    { name: 'name', label: 'Exam Name', type: 'text', required: true, placeholder: "e.g., Class Test I" },
                    { name: 'classId', label: 'Class', type: 'select', options: myClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join(''), required: true },
                    { name: 'subjectId', label: 'Subject', type: 'select', options: subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join(''), required: true },
                    { name: 'date', label: 'Date', type: 'date', required: true },
                    { name: 'maxMarks', label: 'Max Marks', type: 'number', required: true },
                ];
            }

            openFormModal('Create New Exam Schedule', formFields, async (formData) => {
                const examData = { ...formData, teacherId: currentUser.role === 'Teacher' ? currentUser.id : formData.teacherId };
                await apiService.create('exams', examData);
                await store.refresh('exams');
                showToast('Exam created successfully', 'success');
                renderExamsPage();
            });
        };
    }
}
async function renderNoticesPage() {
    ui.contentArea.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-lg shadow-md">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Notice Board</h3>
                ${currentUser.role === 'Admin' || currentUser.role === 'Teacher' ? `<button id="add-new-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add New Notice</button>` : ''}
            </div>
            <div id="notice-list" class="space-y-4"></div>
        </div>`;
    
    const noticeListContainer = document.getElementById('notice-list');
    
    async function renderList() {
        await store.refresh('notices');
        const allNotices = store.get('notices'); 
        const teachersMap = store.getMap('teachers');
        const classesMap = store.getMap('classes');
        teachersMap.set('admin', { name: 'Admin' });

        const relevantNotices = allNotices.filter(n => {
            if (currentUser.role === 'Admin') return true;
            if (currentUser.role === 'Teacher') {
                return n.target === 'All' || n.target === 'Teacher' || n.target === 'Staff' || n.target === currentUser.id;
            }
            if (currentUser.role === 'Student') {
                return n.target === 'All' || n.target === 'Student' || n.target === `class_${currentUser.classId}`;
            }
            return false;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));

        if (relevantNotices.length === 0) {
            noticeListContainer.innerHTML = '<p>No notices found.</p>';
            return;
        }

        noticeListContainer.innerHTML = relevantNotices.map(item => {
            let audienceText, borderColor = 'border-blue-500';
            if (item.target === 'All') audienceText = 'For: All';
            else if (item.target === 'Student') { audienceText = `For: All Students`; borderColor = 'border-green-500'; }
            else if (item.target === 'Teacher') { audienceText = `For: All Teachers`; borderColor = 'border-yellow-500'; }
            else if (item.target === 'Staff') { audienceText = `For: Staff Only`; borderColor = 'border-purple-500'; }
            else if (item.target.startsWith('class_')) {
                const classId = item.target.split('_')[1];
                audienceText = `For: ${classesMap.get(classId)?.name || 'Specific Class'}`;
                borderColor = 'border-red-500';
            } else if (item.target === 'admin') { audienceText = `To: Admin`; borderColor = 'border-slate-500'; }
            else { audienceText = `To: You`; borderColor = 'border-teal-500'; }
            
            const authorName = teachersMap.get(item.authorId)?.name || 'School System';
            return createNoticeCard(item, authorName, audienceText, borderColor);
        }).join('');
        
        attachActionListeners();
    }

    function attachActionListeners() {
        document.querySelectorAll('.delete-btn').forEach(btn => btn.onclick = () => {
            showConfirmationModal('Are you sure you want to delete this notice?', async () => {
                await apiService.remove('notices', btn.dataset.id);
                showToast('Notice deleted successfully.', 'success');
                renderList();
            });
        });
    }
    
    if (currentUser.role === 'Admin' || currentUser.role === 'Teacher') {
        document.getElementById('add-new-btn').onclick = () => {
            openFormModal('Add New Notice', [
                { name: 'title', label: 'Title', type: 'text', required: true },
                { name: 'content', label: 'Content', type: 'textarea', required: true },
                { 
                    name: 'target', 
                    label: 'Target Audience', 
                    type: 'select', 
                    options: `
                        <option value="All">All (Students & Staff)</option>
                        <option value="Student">All Students Only</option>
                        <option value="Teacher">All Teachers Only</option>
                        <option value="Staff">Staff Only (Teachers & Admins)</option> 
                    `,
                    required: true 
                },
            ], async (formData) => {
                const noticeData = { ...formData, authorId: currentUser.id || 'admin', date: new Date().toISOString().slice(0, 10) };
                await apiService.create('notices', noticeData);
                showToast('Notice added successfully.', 'success');
                renderList();
            });
        };
    }

    renderList();
}
/////////////////////////////////////////Library page Function
async function renderLibraryPage() {
    // --- DATA FETCHING AND PREPARATION ---
    await Promise.all([
        store.refresh('library'),
        store.refresh('fees'),
        store.refresh('students'),
        store.refresh('teachers'),
        store.refresh('readingLists') // Ensure reading lists are loaded
    ]);

    const libraryData = store.get('library');
    const studentMap = store.getMap('students');
    const teacherMap = store.getMap('teachers');
    const memberMap = new Map([...studentMap, ...teacherMap]);
    const bookMap = new Map(libraryData.books.map(b => [b.bookId, b]));
    const FINE_PER_DAY = 5;

    // --- HELPER FUNCTIONS ---
    const formatDate = (isoDate) => new Date(isoDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const calculateOverdueDays = (dueDate) => {
        const due = new Date(dueDate);
        const today = new Date("2025-07-29T16:29:00");
        today.setHours(0, 0, 0, 0);
        due.setHours(0, 0, 0, 0);
        if (today <= due) return 0;
        return Math.ceil((today - due) / (1000 * 60 * 60 * 24));
    };

    // --- CORE LOGIC FUNCTIONS ---
    const handleReturn = async (transactionId) => {
        const transaction = libraryData.transactions.find(t => t.transactionId === transactionId);
        if (!transaction) return;

        const overdueDays = calculateOverdueDays(transaction.dueDate);
        if (overdueDays > 0) {
            const fineAmount = overdueDays * FINE_PER_DAY;
            showConfirmationModal(`This book is ${overdueDays} days overdue. A fine of BDT ${fineAmount} will be added. Proceed?`, async () => {
                await apiService.create('fees', {
                    studentId: transaction.studentId,
                    feeType: 'Library Fine',
                    amount: fineAmount,
                    status: 'Unpaid',
                    dueDate: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 10)
                });
                await completeReturn(transaction);
                showToast(`Fine of BDT ${fineAmount} added.`, 'info');
            });
        } else {
            await completeReturn(transaction);
        }
    };

    const completeReturn = async (transaction) => {
        await apiService.update('library', transaction.transactionId, { status: 'Returned', returnDate: new Date().toISOString().slice(0, 10) }, 'transactions', 'transactionId');
        const book = bookMap.get(transaction.bookId);
        if (book) {
            await apiService.update('library', book.bookId, { availableCopies: book.availableCopies + 1 }, 'books', 'bookId');
        }
        showToast('Book returned successfully!', 'success');
        renderLibraryPage();
    };

    const handleRequest = async (bookId) => {
        const newReservation = { bookId: bookId, studentId: currentUser.id, requestDate: new Date().toISOString().slice(0, 10), status: 'Pending' };
        await apiService.create('library', newReservation, 'reservations');
        showToast('Book requested! You will be notified when it is available.', 'success');
        renderLibraryPage();
    };

    const cancelRequest = async (reservationId) => {
        showConfirmationModal('Are you sure you want to cancel this book request?', async () => {
            await apiService.remove('library', reservationId, 'reservations', 'reservationId');
            showToast('Your book request has been cancelled.', 'success');
            renderLibraryPage();
        });
    };

    // --- UI RENDERING ---
    const renderTabs = () => {
        let tabs = [];
        if (currentUser.role === 'Admin') {
            tabs = [
                { id: 'admin-dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
                { id: 'catalog', label: 'Book Catalog', icon: 'fa-book' },
                { id: 'transactions', label: 'Transactions', icon: 'fa-exchange-alt' },
                { id: 'reservations', label: 'Reservations', icon: 'fa-clock' },
                { id: 'members', label: 'Members', icon: 'fa-users' },
                { id: 'reports', label: 'Reports', icon: 'fa-file-export' },
            ];
        } else if (currentUser.role === 'Student' || currentUser.role === 'Teacher') {
            tabs = [
                { id: 'catalog', label: 'Search Books', icon: 'fa-search' },
                { id: 'my-books', label: 'My Books & History', icon: 'fa-book-reader' },
            ];
            // Add a special tab for teachers
            if (currentUser.role === 'Teacher') {
                tabs.push({ id: 'reading-lists', label: 'Reading Lists', icon: 'fa-list-ol' });
            }
            // And add a special tab for students
            if (currentUser.role === 'Student') {
                tabs.push({ id: 'student-reading-lists', label: 'Reading Lists', icon: 'fa-list-ol' });
            }
        }

        return `
            <div class="flex flex-wrap border-b border-slate-700 mb-6">
                ${tabs.map((tab, index) => `
                    <button class="tab-link py-3 px-4 flex items-center gap-2 font-semibold border-b-2 transition-colors duration-300 ${index === 0 ? 'active text-blue-400 border-blue-400' : 'text-slate-400 border-transparent hover:text-white'}" data-tab="${tab.id}">
                        <i class="fas ${tab.icon}"></i> ${tab.label}
                    </button>
                `).join('')}
            </div>
            ${tabs.map((tab, index) => `<div id="${tab.id}" class="tab-content ${index > 0 ? 'hidden' : ''}"></div>`).join('')}
        `;
    };

    ui.contentArea.innerHTML = `<div class="bg-slate-900 p-4 sm:p-6 rounded-lg shadow-lg animate-fade-in">${renderTabs()}</div>`;

    // --- TAB-SPECIFIC RENDERERS ---

    const renderAdminDashboard = () => {
        const container = document.getElementById('admin-dashboard');
        const totalBooks = libraryData.books.reduce((sum, book) => sum + book.totalCopies, 0);
        const booksOnLoan = libraryData.transactions.filter(t => t.status === 'Issued').length;
        const overdueBooks = libraryData.transactions.filter(t => t.status === 'Issued' && calculateOverdueDays(t.dueDate) > 0).length;
        const totalMembers = memberMap.size;
        const genreCounts = libraryData.transactions.reduce((acc, t) => {
            const book = bookMap.get(t.bookId);
            if (book && book.genre) { acc[book.genre] = (acc[book.genre] || 0) + 1; }
            return acc;
        }, {});
        container.innerHTML = `
            <h3 class="text-2xl font-bold mb-6 text-white">Library Dashboard</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-slate-800 p-4 rounded-lg text-center"><div class="text-3xl font-bold text-blue-400">${totalBooks}</div><div class="text-slate-400">Total Books</div></div>
                <div class="bg-slate-800 p-4 rounded-lg text-center"><div class="text-3xl font-bold text-green-400">${booksOnLoan}</div><div class="text-slate-400">Books on Loan</div></div>
                <div class="bg-slate-800 p-4 rounded-lg text-center"><div class="text-3xl font-bold text-red-400">${overdueBooks}</div><div class="text-slate-400">Overdue Books</div></div>
                <div class="bg-slate-800 p-4 rounded-lg text-center"><div class="text-3xl font-bold text-purple-400">${totalMembers}</div><div class="text-slate-400">Total Members</div></div>
            </div>
            <div>
                <h4 class="text-xl font-semibold mb-4 text-white">Popular Genres</h4>
                <div class="bg-slate-800 p-4 rounded-lg"><div class="relative h-64 md:h-72 mx-auto max-w-xs">${Object.keys(genreCounts).length > 0 ? `<canvas id="genreChart"></canvas>`: `<p class="text-center text-slate-500">No transaction data to generate genre chart.</p>`}</div></div>
            </div>`;
        if (Object.keys(genreCounts).length > 0) {
            new Chart(document.getElementById('genreChart').getContext('2d'), { type: 'doughnut', data: { labels: Object.keys(genreCounts), datasets: [{ data: Object.values(genreCounts), backgroundColor: ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#6366f1'], borderColor: '#1e293b', hoverOffset: 8 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { color: '#e2e8f0', font: { size: 12 } } } } } });
        }
    };

    const renderCatalog = (containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="flex flex-wrap justify-between items-center gap-4 mb-4">
                <input type="text" id="book-search" placeholder="Search by title, author, genre, or ISBN..." class="w-full md:w-1/2 p-2 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 text-white">
                <div class="flex items-center gap-2">
                    ${currentUser.role === 'Admin' ? `<button id="add-book-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-plus"></i> Add New Book</button>` : ''}
                    ${currentUser.role === 'Teacher' ? `<button id="request-acquisition-btn" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-plus"></i> Request Acquisition</button>` : ''}
                </div>
            </div>
            <div id="catalog-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>`;

        if (document.getElementById('add-book-btn')) {
            document.getElementById('add-book-btn').onclick = () => openBookForm();
        }
        if (document.getElementById('request-acquisition-btn')) {
            document.getElementById('request-acquisition-btn').onclick = () => {
                openFormModal('Request a New Book for Acquisition', [
                    { name: 'title', label: 'Book Title', type: 'text', required: true },
                    { name: 'author', label: 'Author', type: 'text', required: true },
                    { name: 'reason', label: 'Reason for Request (e.g., for course XYZ)', type: 'textarea', required: true },
                ], async (formData) => {
                    const acquisitionRequest = { ...formData, requesterId: currentUser.id, requesterName: currentUser.name, requestDate: new Date().toISOString().slice(0, 10), status: 'Pending' };
                    await apiService.create('library', acquisitionRequest, 'acquisitions');
                    showToast('Acquisition request submitted successfully!', 'success');
                });
            };
        }
        const openBookForm = (book = {}) => {
            const isEditing = !!book.bookId;
            openFormModal(isEditing ? 'Edit Book' : 'Add New Book', [
                { name: 'title', label: 'Book Title', type: 'text', required: true, value: book.title || '' }, { name: 'author', label: 'Author', type: 'text', required: true, value: book.author || '' }, { name: 'publicationYear', label: 'Publication Year', type: 'number', required: true, value: book.publicationYear || '' }, { name: 'isbn', label: 'ISBN', type: 'text', value: book.isbn || '' }, { name: 'genre', label: 'Genre', type: 'text', required: true, value: book.genre || '' }, { name: 'totalCopies', label: 'Total Copies', type: 'number', required: true, value: book.totalCopies || '' },
            ], async (formData) => {
                if (isEditing) {
                    await apiService.update('library', book.bookId, formData, 'books', 'bookId');
                    showToast('Book updated successfully', 'success');
                } else {
                    formData.availableCopies = parseInt(formData.totalCopies);
                    await apiService.create('library', formData, 'books');
                    showToast('Book added successfully', 'success');
                }
                renderLibraryPage();
            });
        };
        const renderBookList = (books) => {
            const listContainer = document.getElementById('catalog-list');
            if (books.length === 0) { listContainer.innerHTML = `<div class="col-span-full text-center py-10"><p class="text-slate-500">No books found matching your criteria.</p></div>`; return; }
            listContainer.innerHTML = books.map(book => {
                const isRequestedByCurrentUser = libraryData.reservations.some(r => r.bookId === book.bookId && r.studentId === currentUser.id && r.status === 'Pending');
                return `
                <div class="p-4 border border-slate-700 rounded-lg flex flex-col bg-slate-800/50 hover:border-blue-500 transition-all duration-300 shadow-md">
                    <h4 class="font-bold text-lg text-white">${book.title}</h4>
                    <p class="text-slate-400 text-sm">by ${book.author}</p>
                    <p class="text-xs text-slate-500 mt-1">Genre: ${book.genre} | Published: ${book.publicationYear}</p>
                    <div class="flex-grow my-3"><span class="px-2 py-1 text-xs font-semibold rounded-full ${book.availableCopies > 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}">${book.availableCopies > 0 ? `${book.availableCopies} of ${book.totalCopies} Available` : 'Unavailable'}</span></div>
                    <div class="mt-auto pt-3 border-t border-slate-700/50 flex flex-col gap-2">
                        <div class="flex gap-2">
                            ${(currentUser.role === 'Student' || currentUser.role === 'Teacher') ? (book.availableCopies <= 0 ? (isRequestedByCurrentUser ? `<button class="w-full bg-yellow-600 text-white font-bold py-2 px-3 rounded-lg cursor-not-allowed text-sm" disabled><i class="fas fa-clock mr-2"></i>Pending Request</button>` : `<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg request-btn text-sm" data-bookid="${book.bookId}"><i class="fas fa-hand-paper mr-2"></i>Request to Borrow</button>`) : '') : ''}
                            ${currentUser.role === 'Admin' ? `<button class="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-lg edit-book-btn text-sm" data-bookid="${book.bookId}"><i class="fas fa-edit mr-2"></i>Edit</button>` : ''}
                        </div>
                        ${currentUser.role === 'Teacher' ? `<button class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-3 rounded-lg add-to-list-btn text-sm" data-bookid="${book.bookId}"><i class="fas fa-plus mr-2"></i>Add to List</button>` : ''}
                    </div>
                </div>`;
            }).join('');
            document.querySelectorAll('.request-btn').forEach(btn => btn.onclick = () => handleRequest(btn.dataset.bookid));
            document.querySelectorAll('.edit-book-btn').forEach(btn => { btn.onclick = () => { const bookToEdit = libraryData.books.find(b => b.bookId === btn.dataset.bookid); if (bookToEdit) openBookForm(bookToEdit); } });
            document.querySelectorAll('.add-to-list-btn').forEach(btn => btn.onclick = () => handleAddToList(btn.dataset.bookid));
        };
        document.getElementById('book-search').oninput = (e) => {
            const term = e.target.value.toLowerCase().replace(/-/g, '');
            const filteredBooks = libraryData.books.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term) || b.genre.toLowerCase().includes(term) || (b.isbn && b.isbn.replace(/-/g, '').includes(term)));
            renderBookList(filteredBooks);
        };
        renderBookList(libraryData.books);
    };

    const renderMyBooks = () => {
        const container = document.getElementById('my-books');
        const myTransactions = libraryData.transactions.filter(t => t.studentId === currentUser.id);
        const issuedBooks = myTransactions.filter(t => t.status === 'Issued');
        const historyBooks = myTransactions.filter(t => t.status === 'Returned');
        const myReservations = libraryData.reservations.filter(r => r.studentId === currentUser.id && r.status === 'Pending');
        const myFines = store.get('fees').filter(f => f.studentId === currentUser.id && f.feeType === 'Library Fine' && f.status === 'Unpaid');
        container.innerHTML = `
            <div class="space-y-8">
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-book-open mr-2 text-blue-400"></i>Books I Have Borrowed</h4>
                    <div class="space-y-3">${issuedBooks.length > 0 ? issuedBooks.map(t => { const book = bookMap.get(t.bookId); const overdueDays = calculateOverdueDays(t.dueDate); return `<div class="p-4 rounded-lg ${overdueDays > 0 ? 'bg-red-900/40 border border-red-700' : 'bg-slate-800/70'} flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> <span class="text-slate-400">by ${book?.author || 'N/A'}</span></div><div class="text-right ${overdueDays > 0 ? 'text-red-400 font-bold' : 'text-slate-300'}">Due: ${formatDate(t.dueDate)} ${overdueDays > 0 ? `(${overdueDays} days overdue)` : ''}</div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">You have not borrowed any books.</p>'}</div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-clock mr-2 text-yellow-400"></i>My Pending Book Requests</h4>
                    <div class="space-y-3">${myReservations.length > 0 ? myReservations.map(r => { const book = bookMap.get(r.bookId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> <span class="text-slate-400">by ${book?.author || 'N/A'}</span></div><div class="flex items-center gap-4"><span class="status-badge status-pending">Pending</span><button class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg text-sm cancel-request-btn" data-resid="${r.reservationId}">Cancel</button></div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">You have no pending book requests.</p>'}</div>
                </div>
                 <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-history mr-2 text-gray-400"></i>My Borrowing History</h4>
                    <div class="space-y-3">${historyBooks.length > 0 ? historyBooks.map(t => { const book = bookMap.get(t.bookId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> <span class="text-slate-400">by ${book?.author || 'N/A'}</span></div><div class="text-slate-400">Returned: ${formatDate(t.returnDate)}</div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">No borrowing history yet.</p>'}</div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-exclamation-triangle mr-2 text-red-500"></i>My Library Fines</h4>
                    <div class="space-y-3">${myFines.length > 0 ? myFines.map(f => `<div class="p-4 rounded-lg bg-red-900/50 border border-red-800 flex flex-wrap justify-between items-center gap-4"><div>Fine for late return. Amount: <span class="font-bold text-white">BDT ${f.amount}</span></div><button class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-lg" onclick="alert('Integration with a payment gateway is required.')">Pay Now</button></div>`).join('') : '<p class="text-slate-500 italic px-4">You have no outstanding library fines. Great job!</p>'}</div>
                </div>
            </div>`;
        document.querySelectorAll('.cancel-request-btn').forEach(btn => btn.onclick = () => cancelRequest(btn.dataset.resid));
    };

    const renderTransactions = () => {
        const container = document.getElementById('transactions');
        container.innerHTML = `
            <div class="flex justify-end mb-4"><button id="issue-book-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-plus-circle"></i> Issue Book</button></div>
            <div class="overflow-x-auto bg-slate-800 rounded-lg"><table class="min-w-full text-sm text-left"><thead class="bg-slate-700 text-slate-300 uppercase"><tr><th class="p-3">Book</th><th class="p-3">Member</th><th class="p-3">Issue Date</th><th class="p-3">Due Date</th><th class="p-3">Status</th><th class="p-3 text-right">Actions</th></tr></thead><tbody class="text-slate-300">${libraryData.transactions.sort((a,b) => new Date(b.issueDate) - new Date(a.issueDate)).map(t => { const overdueDays = calculateOverdueDays(t.dueDate); const member = memberMap.get(t.studentId); return `<tr class="border-b border-slate-700 hover:bg-slate-700/50"><td class="p-3 font-semibold">${bookMap.get(t.bookId)?.title || 'N/A'}</td><td class="p-3">${member?.name || 'N/A'}</td><td class="p-3">${formatDate(t.issueDate)}</td><td class="p-3 ${t.status === 'Issued' && overdueDays > 0 ? 'text-red-400 font-bold' : ''}">${formatDate(t.dueDate)}</td><td class="p-3"><span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span></td><td class="p-3 text-right">${t.status === 'Issued' ? `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded return-btn text-xs" data-id="${t.transactionId}">Mark Returned</button>` : `<span class="text-slate-500 text-xs">Returned on ${t.returnDate ? formatDate(t.returnDate) : ''}</span>`}</td></tr>`; }).join('')}</tbody></table></div>`;
        document.getElementById('issue-book-btn').onclick = () => {
            const availableBooks = libraryData.books.filter(b => b.availableCopies > 0); const allMembers = [ ...store.get('students').map(s => ({ ...s, role: 'Student' })), ...store.get('teachers').map(t => ({...t, role: 'Teacher'})) ];
            const issueBookSubmit = async (formData) => {
                await apiService.create('library', { ...formData, issueDate: new Date().toISOString().slice(0, 10), status: 'Issued', returnDate: null }, 'transactions');
                const book = bookMap.get(formData.bookId); await apiService.update('library', book.bookId, { availableCopies: book.availableCopies - 1 }, 'books', 'bookId');
                showToast('Book issued successfully', 'success'); renderLibraryPage();
            };
            const formFields = [ { name: 'bookId', label: 'Book', type: 'select', options: availableBooks.map(b => `<option value="${b.bookId}">${b.title} (${b.author})</option>`).join(''), required: true }, { name: 'studentId', label: 'Member (Student or Teacher)', type: 'select', options: allMembers.map(s => `<option value="${s.id}" data-role="${s.role}">${s.name} (${s.role})</option>`).join(''), required: true }, { name: 'dueDate', label: 'Due Date', type: 'date', required: true } ];
            openFormModal('Issue a Book', formFields, issueBookSubmit);
            const memberSelect = document.getElementById('studentId'); const dueDateInput = document.getElementById('dueDate');
            const updateDueDate = () => { if (!memberSelect || !dueDateInput) return; const selectedOption = memberSelect.options[memberSelect.selectedIndex]; const memberRole = selectedOption.dataset.role; let defaultDueDate = new Date(); const loanDays = (memberRole === 'Teacher') ? 28 : 14; defaultDueDate.setDate(defaultDueDate.getDate() + loanDays); dueDateInput.value = defaultDueDate.toISOString().slice(0, 10); };
            memberSelect.onchange = updateDueDate; updateDueDate();
        };
        document.querySelectorAll('.return-btn').forEach(btn => btn.onclick = () => handleReturn(btn.dataset.id));
    };

    const renderReservations = () => {
        const container = document.getElementById('reservations');
        const pendingReservations = libraryData.reservations.filter(r => r.status === 'Pending');
        container.innerHTML = `
            <h3 class="text-xl font-semibold mb-4 text-white">Pending Book Requests</h3><div class="space-y-3">${pendingReservations.length > 0 ? pendingReservations.map(r => { const book = bookMap.get(r.bookId); const student = studentMap.get(r.studentId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> requested by <span class="font-semibold text-blue-300">${student?.name || 'N/A'}</span></div><div>${book?.availableCopies > 0 ? `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded issue-from-request-btn" data-resid="${r.reservationId}" data-bookid="${r.bookId}" data-studentid="${r.studentId}">Approve & Issue</button>` : `<span class="text-yellow-400 font-semibold">Book Unavailable</span>`}</div></div>`; }).join('') : '<p class="text-slate-500 italic">There are no pending book requests.</p>'}</div>`;
        document.querySelectorAll('.issue-from-request-btn').forEach(btn => btn.onclick = async (e) => {
            const { resid, bookid, studentid } = e.currentTarget.dataset;
            await apiService.create('library', { bookId: bookid, studentId: studentid, status: 'Issued', issueDate: new Date().toISOString().slice(0, 10), dueDate: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 10) }, 'transactions');
            await apiService.update('library', resid, { status: 'Fulfilled' }, 'reservations', 'reservationId');
            const book = bookMap.get(bookid); await apiService.update('library', bookid, { availableCopies: book.availableCopies - 1 }, 'books', 'bookId');
            showToast(`Book issued and student notified!`, 'success'); renderLibraryPage();
        });
    };
    
    const renderMemberManagement = () => {
        const container = document.getElementById('members'); const allMembers = store.get('students').map(s => ({...s, type: 'Student'})).concat(store.get('teachers').map(t => ({...t, type: 'Teacher'})));
        container.innerHTML = `<input type="text" id="member-search" placeholder="Search by name or email..." class="w-full md:w-1/2 p-2 mb-4 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 text-white"><div id="member-list" class="space-y-3"></div>`;
        const renderMemberList = (members) => {
            document.getElementById('member-list').innerHTML = members.map(member => {
                const transactions = libraryData.transactions.filter(t => t.studentId === member.id); const fines = store.get('fees').filter(f => f.studentId === member.id && f.feeType === 'Library Fine' && f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0);
                return `<div class="p-4 rounded-lg bg-slate-800/70"><div class="flex justify-between items-start"><div><p class="font-bold text-white">${member.name}</p><p class="text-sm text-slate-400">${member.email}</p><p class="text-xs px-2 py-0.5 mt-1 inline-block rounded-full bg-purple-500/20 text-purple-300">${member.type}</p></div><div class="text-right"><p class="text-sm text-slate-300">Borrowed: ${transactions.length}</p>${fines > 0 ? `<p class="text-sm font-bold text-red-400">Fine: BDT ${fines}</p>` : ''}</div></div></div>`;
            }).join('');
        };
        document.getElementById('member-search').oninput = (e) => { const term = e.target.value.toLowerCase(); const filteredMembers = allMembers.filter(m => m.name.toLowerCase().includes(term) || (m.email && m.email.toLowerCase().includes(term))); renderMemberList(filteredMembers); };
        renderMemberList(allMembers);
    };

    const renderReports = () => {
        const container = document.getElementById('reports');
        container.innerHTML = `<h3 class="text-xl font-semibold mb-4 text-white">Generate & Export Reports</h3><div class="space-y-6"><div class="bg-slate-800 p-4 rounded-lg"><h4 class="font-semibold mb-2 text-slate-200">Inventory Reports</h4><button id="export-inventory-btn" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">Export Full Inventory (.csv)</button></div><div class="bg-slate-800 p-4 rounded-lg"><h4 class="font-semibold mb-2 text-slate-200">Financial Reports</h4><button id="export-fines-btn" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Export Unpaid Fines (.csv)</button></div><div class="bg-slate-800 p-4 rounded-lg"><h4 class="font-semibold mb-2 text-slate-200">Transaction Log</h4><div class="flex items-center gap-4"><input type="date" id="report-start-date" class="p-2 rounded-lg bg-slate-700 border-slate-600 text-white"><span class="text-slate-400">to</span><input type="date" id="report-end-date" class="p-2 rounded-lg bg-slate-700 border-slate-600 text-white"><button id="export-transactions-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Export Transactions</button></div></div></div>`;
        document.getElementById('export-inventory-btn').onclick = () => { const headers = ['Book ID', 'Title', 'Author', 'Genre', 'Publication_Year', 'ISBN', 'Total_Copies', 'Available_Copies']; const rows = libraryData.books.map(b => [b.bookId, `"${b.title.replace(/"/g, '""')}"`, `"${b.author.replace(/"/g, '""')}"`, b.genre, b.publicationYear, b.isbn, b.totalCopies, b.availableCopies]); exportToCsv('library_inventory.csv', headers, rows); };
        document.getElementById('export-fines-btn').onclick = () => { const headers = ['Student_Name', 'Student_Email', 'Fee_Type', 'Amount', 'Due_Date']; const rows = store.get('fees').filter(f => f.feeType === 'Library Fine' && f.status === 'Unpaid').map(f => { const student = studentMap.get(f.studentId); return [student?.name, student?.email, f.feeType, f.amount, f.dueDate]; }); exportToCsv('unpaid_library_fines.csv', headers, rows); };
        document.getElementById('export-transactions-btn').onclick = () => { const startDate = document.getElementById('report-start-date').value; const endDate = document.getElementById('report-end-date').value; if(!startDate || !endDate) { showToast('Please select a start and end date for the report.', 'error'); return; } const filteredTransactions = libraryData.transactions.filter(t => { const issueDate = new Date(t.issueDate); return issueDate >= new Date(startDate) && issueDate <= new Date(endDate); }); const headers = ['Transaction_ID', 'Book_Title', 'Student_Name', 'Issue_Date', 'Due_Date', 'Return_Date', 'Status']; const rows = filteredTransactions.map(t => { const book = bookMap.get(t.bookId); const student = studentMap.get(t.studentId); return [t.transactionId, book?.title, student?.name, t.issueDate, t.dueDate, t.returnDate || 'N/A', t.status]; }); exportToCsv(`transactions_${startDate}_to_${endDate}.csv`, headers, rows); };
    };

    // --- READING LISTS FUNCTIONS ---

    const handleAddToList = async (bookId) => {
        await store.refresh('readingLists');
        const myLists = store.get('readingLists').filter(l => l.teacherId === currentUser.id);
        if (myLists.length === 0) { showToast('Please create a reading list first from the "Reading Lists" tab.', 'info'); return; }
        openFormModal('Add Book to Reading List', [{ name: 'listId', label: 'Select List', type: 'select', options: myLists.map(l => `<option value="${l.id}">${l.name}</option>`).join(''), required: true }, ], async (formData) => {
            const list = myLists.find(l => l.id === formData.listId);
            if (list && !list.bookIds.includes(bookId)) {
                list.bookIds.push(bookId); await apiService.update('readingLists', list.id, { bookIds: list.bookIds });
                showToast('Book added to list!', 'success'); if (document.getElementById('reading-lists')) renderReadingLists();
            } else if (list) { showToast('This book is already in the selected list.', 'error'); }
        });
    };

    const renderReadingLists = () => {
        const container = document.getElementById('reading-lists');
        if (!container) return;
        const myReadingLists = store.get('readingLists').filter(l => l.teacherId === currentUser.id);
        container.innerHTML = `
            <div class="flex justify-between items-center mb-4"><h3 class="text-xl font-semibold text-white">My Reading Lists</h3><button id="create-list-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Create New List</button></div>
            <div class="space-y-4">${myReadingLists.length > 0 ? myReadingLists.map(list => `<div class="p-4 bg-slate-800 rounded-lg"><div class="flex justify-between items-center"><h4 class="text-lg font-bold text-white">${list.name}</h4><button class="text-red-500 delete-list-btn" data-listid="${list.id}"><i class="fas fa-trash"></i></button></div><ul class="mt-2 space-y-2 list-disc list-inside">${list.bookIds.map(bookId => { const book = bookMap.get(bookId); return book ? `<li class="text-slate-300 ml-4">${book.title} <span class="text-slate-500 text-sm">by ${book.author}</span></li>` : ''; }).join('')}</ul></div>`).join('') : '<p class="text-slate-500 italic">You have not created any reading lists.</p>'}</div>`;
        
        document.getElementById('create-list-btn').onclick = () => {
            const myClassIdsAsTeacher = store.get('classes').filter(c => c.teacherId === currentUser.id).map(c => c.id);
            const myClassIdsAsSubjectTeacher = store.get('timetable').filter(t => t.teacherId === currentUser.id).map(t => t.classId);
            const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];
            const myClasses = store.get('classes').filter(c => allMyClassIds.includes(c.id));
            if (myClasses.length === 0) { showToast("You must be assigned to a class to create a reading list.", "error"); return; }
            openFormModal('Create New Reading List', [
                { name: 'name', label: 'List Name (e.g., "History 101 Required Reading")', type: 'text', required: true },
                { name: 'classId', label: 'Assign to Class', type: 'select', options: myClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join(''), required: true },
            ], async (formData) => {
                await apiService.create('readingLists', { ...formData, teacherId: currentUser.id, bookIds: [] });
                showToast('Reading list created!', 'success');
                await store.refresh('readingLists');
                renderReadingLists();
            });
        };
        document.querySelectorAll('.delete-list-btn').forEach(btn => {
            btn.onclick = () => showConfirmationModal('Are you sure you want to delete this list?', async () => {
                await apiService.remove('readingLists', btn.dataset.listid);
                await store.refresh('readingLists');
                renderReadingLists();
            });
        });
    };

    const renderStudentReadingLists = () => {
        const container = document.getElementById('student-reading-lists');
        if (!container) return;
        const allLists = store.get('readingLists');
        const myClassLists = allLists.filter(list => list.classId === currentUser.classId);
        container.innerHTML = `
            <h3 class="text-2xl font-bold mb-6 text-white">Course Reading Lists</h3>
            <div class="space-y-6">${myClassLists.length > 0 ? myClassLists.map(list => {
                const teacher = teacherMap.get(list.teacherId);
                return `
                <div class="p-4 sm:p-6 bg-slate-800 rounded-lg shadow-md">
                    <div class="border-b border-slate-700 pb-3 mb-3">
                        <h4 class="text-xl font-bold text-white">${list.name}</h4><p class="text-sm text-slate-400">Curated by: ${teacher ? teacher.name : 'N/A'}</p>
                    </div>
                    <ul class="space-y-3">${list.bookIds.map(bookId => {
                        const book = bookMap.get(bookId); if (!book) return '';
                        return `<li class="text-slate-300 flex items-center gap-3"><i class="fas fa-book text-teal-400"></i><div><a href="#" class="font-semibold hover:underline view-book-in-catalog" data-book-title="${book.title}">${book.title}</a><span class="text-slate-500 text-sm block">by ${book.author}</span></div></li>`;
                    }).join('')}</ul>
                </div>`}).join('') : '<p class="text-slate-500 italic">Your teachers have not assigned any reading lists for your class yet.</p>'}
            </div>`;
        document.querySelectorAll('.view-book-in-catalog').forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                document.querySelector('.tab-link[data-tab="catalog"]').click();
                const searchInput = document.getElementById('book-search');
                searchInput.value = link.dataset.bookTitle;
                searchInput.dispatchEvent(new Event('input'));
            };
        });
    };

    const exportToCsv = (filename, headers, rows) => {
        let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent); const link = document.createElement("a");
        link.setAttribute("href", encodedUri); link.setAttribute("download", filename);
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
        showToast(`Report ${filename} downloaded.`, 'success');
    };

    // --- INITIAL TAB ACTIVATION ---
    if (currentUser.role === 'Admin') {
        renderAdminDashboard();
        renderCatalog('catalog');
        renderTransactions();
        renderReservations();
        renderMemberManagement();
        renderReports();
    } else if (currentUser.role === 'Student' || currentUser.role === 'Teacher') {
        renderCatalog('catalog');
        renderMyBooks();
        if (currentUser.role === 'Teacher') {
            renderReadingLists();
        }
        if (currentUser.role === 'Student') {
            renderStudentReadingLists();
        }
    }

    // Tab switching logic
    document.querySelectorAll('.tab-link').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active', 'text-blue-400', 'border-blue-400'));
            e.currentTarget.classList.add('active', 'text-blue-400', 'border-blue-400');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.getElementById(e.currentTarget.dataset.tab).classList.remove('hidden');
        });
    });
}

///////////////////////////////////////////////////////////////////////////Transport 



         /// Transport 
async function renderTransportPage() {
    const transportData = store.get('transport');
    const studentMap = store.getMap('students');
    const { vehicles, routes, assignments } = transportData;

    const routeMap = routes.reduce((map, route) => ({ ...map, [route.routeId]: route.routeName }), {});
    const vehicleMap = vehicles.reduce((map, vehicle) => ({ ...map, [vehicle.vehicleId]: vehicle.vehicleNumber }), {});

    ui.contentArea.innerHTML = `
        <div class="space-y-6">
            <div class="bg-slate-800 p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-4">Student Assignments</h3>
                <div class="overflow-x-auto max-h-72">
                    <table class="min-w-full text-sm">
                        <thead class="bg-slate-700"><tr>
                            <th class="p-2 text-left">Student</th><th class="p-2 text-left">Route</th><th class="p-2 text-left">Vehicle No.</th>
                        </tr></thead>
                        <tbody class="text-slate-300">
                        ${assignments.map(a => `
                            <tr class="border-b border-slate-700">
                                <td class="p-2">${studentMap.get(a.studentId)?.name || 'N/A'}</td>
                                <td class="p-2">${routeMap[a.routeId] || 'N/A'}</td>
                                <td class="p-2">${vehicleMap[a.vehicleId] || 'N/A'}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-slate-800 p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Bus Routes</h3>
                    <div class="overflow-x-auto max-h-72">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-700"><tr><th class="p-2 text-left">Route Name</th><th class="p-2 text-left">Stops</th></tr></thead>
                            <tbody class="text-slate-300">
                            ${routes.map(r => `
                                <tr class="border-b border-slate-700"><td class="p-2 align-top">${r.routeName}</td><td class="p-2">${r.stops.join(', ')}</td></tr>
                            `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="bg-slate-800 p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Vehicles</h3>
                    <div class="overflow-x-auto max-h-72">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-700"><tr><th class="p-2 text-left">Vehicle No.</th><th class="p-2 text-left">Driver</th><th class="p-2 text-left">Capacity</th></tr></thead>
                            <tbody class="text-slate-300">
                            ${vehicles.map(v => `
                                <tr class="border-b border-slate-700"><td class="p-2">${v.vehicleNumber}</td><td class="p-2">${v.driverName}</td><td class="p-2">${v.capacity}</td></tr>
                            `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}
async function renderContactTeacherPage() {
    const classes = store.get('classes');
    const teachers = store.get('teachers');

    const myClass = classes.find(c => c.id === currentUser.classId);
    const classTeacher = myClass ? teachers.find(t => t.id === myClass.teacherId) : null;
    
    const baseInputClasses = "shadow-sm appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-700 text-slate-200 border-slate-600";

    ui.contentArea.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h3 class="text-xl font-semibold text-gray-100 mb-4 border-b pb-2 border-slate-700">Contact My Teacher</h3>
            ${classTeacher ? `
                <p class="text-slate-200 mb-4">You can contact your class teacher, <strong>${classTeacher.name}</strong> (${classTeacher.email}).</p>
                <form id="contact-teacher-form" class="space-y-4">
                    <div>
                        <label for="message-subject" class="block text-slate-300 text-sm font-bold mb-2">Subject</label>
                        <input type="text" id="message-subject" required class="${baseInputClasses}">
                    </div>
                    <div>
                        <label for="message-body" class="block text-slate-300 text-sm font-bold mb-2">Your Message</label>
                        <textarea id="message-body" rows="8" required class="${baseInputClasses}"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transform hover:scale-105 transition-transform duration-200 shadow-md">
                        Send Message
                    </button>
                </form>
            ` : `
                <p class="text-red-400">Your class teacher information is not available.</p>
            `}
        </div>
    `;

    if (classTeacher) {
        const form = document.getElementById('contact-teacher-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Sending...`;
            const subject = document.getElementById('message-subject').value;
            const body = document.getElementById('message-body').value;
            
            await apiService.create('notices', {
                title: `Message from Student ${currentUser.name}: ${subject}`,
                content: body + ` (Student Email: ${currentUser.email})`,
                date: new Date().toISOString().slice(0, 10),
                target: classTeacher.id,
                authorId: currentUser.id
            });
            showToast('Message sent to your teacher!', 'success');
            e.target.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = `Send Message`;
        });
    }
}
// =================== REPLACE THE ENTIRE renderProfilePage FUNCTION WITH THIS ===================
async function renderProfilePage() {
    let profileData = { ...currentUser };
    
    // Helper function to create consistent list items with icons
    const createDetailItem = (icon, label, value) => `
        <div class="flex items-start gap-4">
            <i class="fas ${icon} text-slate-400 text-lg w-5 text-center mt-1"></i>
            <div>
                <p class="font-semibold text-slate-400">${label}</p>
                <p class="text-slate-200">${value || 'N/A'}</p>
            </div>
        </div>
    `;

    let contactInfoHtml = '';
    let roleSpecificInfoHtml = '';

    // Populate data based on user role
    if (currentUser.role === 'Student') {
        const studentDetails = store.getMap('students').get(currentUser.id);
        if (studentDetails) profileData = { ...profileData, ...studentDetails };
        const myClass = store.getMap('classes').get(profileData.classId)?.name || 'N/A';
        
        contactInfoHtml = `
            ${createDetailItem('fa-envelope', 'Email Address', profileData.email)}
            ${createDetailItem('fa-phone', 'Guardian Contact', profileData.contact)}
            ${createDetailItem('fa-map-marker-alt', 'Address', profileData.address)}
        `;
        roleSpecificInfoHtml = `
            ${createDetailItem('fa-hashtag', 'Roll Number', profileData.rollNo)}
            ${createDetailItem('fa-school', 'Class', myClass)}
            ${createDetailItem('fa-user-shield', 'Guardian Name', profileData.guardianName)}
            ${createDetailItem('fa-calendar-day', 'Date of Birth', profileData.dateOfBirth)}
        `;

    } else if (currentUser.role === 'Teacher') {
        const teacherDetails = store.getMap('teachers').get(currentUser.id);
        if (teacherDetails) profileData = { ...profileData, ...teacherDetails };
        const myDept = store.getMap('departments').get(profileData.departmentId)?.name || 'N/A';
        
        contactInfoHtml = `
            ${createDetailItem('fa-envelope', 'Email Address', profileData.email)}
            ${createDetailItem('fa-phone', 'Contact Number', profileData.contact)}
            ${createDetailItem('fa-map-marker-alt', 'Address', profileData.address)}
        `;
        roleSpecificInfoHtml = `
            ${createDetailItem('fa-building', 'Department', myDept)}
            ${createDetailItem('fa-book', 'Primary Subject', profileData.subject)}
            ${createDetailItem('fa-graduation-cap', 'Qualifications', profileData.qualifications)}
            ${createDetailItem('fa-calendar-plus', 'Joining Date', profileData.joiningDate)}
        `;
    } else { // Admin
         contactInfoHtml = `
            ${createDetailItem('fa-envelope', 'Email Address', profileData.email)}
            ${createDetailItem('fa-user-cog', 'Role', 'System Administrator')}
        `;
    }

    const profileHtml = `
    <div class="max-w-4xl mx-auto space-y-6">
        <!-- Profile Header Card -->
        <div class="bg-slate-800 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-shrink-0 text-center relative group">
                    <img id="profile-img-preview" src="${profileData.profileImage || generateInitialsAvatar(profileData.name)}" alt="Profile Picture" class="w-28 h-28 rounded-full object-cover border-4 border-slate-700 shadow-lg">                <label for="profile-image-upload" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-camera text-2xl"></i>
                </label>
                <input type="file" id="profile-image-upload" accept="image/*" class="hidden">
            </div>
            <div class="flex-grow text-center sm:text-left">
                <h3 class="text-3xl font-bold">${profileData.name}</h3>
                <p class="text-slate-400 text-lg">${profileData.role}</p>
            </div>
            <div class="flex-shrink-0 flex flex-col gap-2">
                <button id="edit-profile-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
                <button id="change-password-btn" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                   <i class="fas fa-key"></i> Change Password
                </button>
            </div>
        </div>

        <!-- Profile Details Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Contact Information Card -->
            <div class="bg-slate-800 p-6 rounded-lg shadow-md">
                <h4 class="text-xl font-semibold border-b border-slate-700 pb-3 mb-4">Contact & Personal Info</h4>
                <div class="space-y-4">
                    ${contactInfoHtml}
                </div>
            </div>
            <!-- Role-Specific Information Card -->
            <div class="bg-slate-800 p-6 rounded-lg shadow-md">
                 <h4 class="text-xl font-semibold border-b border-slate-700 pb-3 mb-4">
                    ${currentUser.role === 'Student' ? 'Academic Details' : (currentUser.role === 'Teacher' ? 'Professional Details' : 'System Info')}
                 </h4>
                <div class="space-y-4">
                    ${roleSpecificInfoHtml}
                </div>
            </div>
        </div>
    </div>`;
    ui.contentArea.innerHTML = profileHtml;

    // --- EVENT LISTENERS ---

    // Image upload listener
    document.getElementById('profile-image-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const imageData = e.target.result;
                document.getElementById('profile-img-preview').src = imageData;
                ui.headerUserAvatar.src = imageData;
                currentUser.profileImage = imageData;
                sessionStorage.setItem('sms_user_modern', JSON.stringify(currentUser));
                
                let collection, id;
                if (currentUser.role === 'Student') { collection = 'students'; id = currentUser.id; }
                else if (currentUser.role === 'Teacher') { collection = 'teachers'; id = currentUser.id; }
                else if (currentUser.role === 'Admin') {
                    appDatabase.users['admin'].profileImage = imageData;
                    await apiService.save();
                    await store.refresh('users');
                    showToast('Profile image updated!', 'success');
                    return;
                }
                if (collection) {
                    await apiService.update(collection, id, { profileImage: imageData });
                    await store.refresh(collection);
                }
                showToast('Profile image updated!', 'success');
            };
            reader.readAsDataURL(file);
        }
    });

    // Edit Profile button listener
    const editBtn = document.getElementById('edit-profile-btn');
    if (editBtn) {
        editBtn.onclick = () => {
            if (currentUser.role === 'Admin') {
                showToast('Admin details cannot be edited here.', 'info');
                return;
            }

            let formFields = [ 
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                { name: 'contact', label: 'Contact Number', type: 'tel', required: true },
                { name: 'address', label: 'Address', type: 'textarea' },
            ];

            if (currentUser.role === 'Student') {
                formFields.push(
                    { name: 'guardianName', label: 'Guardian Name', type: 'text', required: true },
                    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' }
                );
            } else if (currentUser.role === 'Teacher') {
                formFields.push(
                    { name: 'subject', label: 'Primary Subject', type: 'text', required: true },
                    { name: 'qualifications', label: 'Qualifications', type: 'text' }
                );
            }
            
            openFormModal('Edit Profile', formFields, async (formData) => {
                const collection = currentUser.role === 'Student' ? 'students' : 'teachers';
                await apiService.update(collection, currentUser.id, formData);
                await store.refresh(collection);
                
                currentUser = {...currentUser, ...formData };
                sessionStorage.setItem('sms_user_modern', JSON.stringify(currentUser));

                showToast('Profile updated successfully!', 'success');
                renderProfilePage();
            }, profileData);
        };
    }

    // Change Password button listener
    document.getElementById('change-password-btn').onclick = openChangePasswordModal;
}

ui.modalTitle.textContent = modalTitle;
ui.modalBody.innerHTML = formHtml;

document.getElementById('change-password-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    // --- Validation ---
    if (newPassword.length < 4) {
        showToast('New password must be at least 4 characters long.', 'error');
        return;
    }
    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match.', 'error');
        return;
    }
    if (newPassword === currentPassword) {
        showToast('New password cannot be the same as the old one.', 'error');
        return;
    }

    // --- Check against stored password ---
    const storedPassword = appDatabase.users[currentUser.username]?.password;
    if (currentPassword !== storedPassword) {
        showToast('Incorrect current password.', 'error');
        return;
    }

    // --- Update the password ---
    appDatabase.users[currentUser.username].password = newPassword;
    await apiService.save(); // Persist the entire database with the change

    showToast('Password updated successfully!', 'success');
    closeAnimatedModal(ui.modal);
});

openAnimatedModal(ui.modal);


// ===================================================================================
// --- REUSABLE UI COMPONENTS & HELPERS ---
// ===================================================================================

function generateInitialsAvatar(name) {
    // Fallback for cases where a name might not be provided
    if (!name) name = 'User';

    // 1. Get the initials from the name
    const nameParts = name.trim().split(' ');
    let initials = nameParts[0].charAt(0);
    if (nameParts.length > 1) {
        initials += nameParts[nameParts.length - 1].charAt(0);
    }
    initials = initials.toUpperCase();

    // 2. Define the static colors as requested
    const backgroundColor = '#ffffff'; // White background
    const textColor = '#000000';       // Black text

    // 3. Create the SVG image string with a border to make the white circle visible
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
            <circle cx="50" cy="50" r="48" fill="${backgroundColor}" stroke="#e2e8f0" stroke-width="2" />
            <text x="50%" y="50%" text-anchor="middle" dy="0.35em" font-size="45" font-family="Arial, sans-serif" font-weight="bold" fill="${textColor}">
                ${initials}
            </text>
        </svg>
    `;

    // 4. Encode the SVG to Base64 and return the data URI
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}



function createDashboardCard({ title, value, icon, color }) {
    return `
        <div class="bg-slate-800 p-6 rounded-xl shadow-lg flex items-center justify-between transition-transform transform hover:-translate-y-1">
            <div>
                <p class="text-slate-400">${title}</p>
                <p class="text-3xl font-bold">${value}</p>
            </div>
            <i class="fas ${icon} fa-3x text-${color}-500 opacity-30"></i>
        </div>
    `;
}
function createNoticeCard(notice, authorName, audienceText, borderColor) {
    return `
        <div class="p-4 border-l-4 ${borderColor} bg-slate-800/50 rounded-r-lg">
            <div class="flex justify-between items-start">
                <div>
                    <p class="font-bold text-lg">${notice.title}</p>
                    <p class="text-xs text-slate-400">Date: ${notice.date} | ${audienceText} | From: ${authorName}</p>
                    <p class="mt-2 text-slate-300 whitespace-pre-wrap">${notice.content}</p>
                </div>
                ${(currentUser.role === 'Admin' || currentUser.id === notice.authorId) ? `
                <div class="flex-shrink-0 ml-4">
                    <button class="text-red-500 hover:text-red-700 delete-btn" data-id="${notice.id}"><i class="fas fa-trash-alt"></i></button>
                </div>` : ''}
            </div>
        </div>`;
}
function createUpcomingExamCard(exam, subjectName) {
    return `
        <div class="flex items-center gap-4">
            <div class="text-center bg-red-900/50 text-red-300 rounded-lg px-3 py-1">
                <p class="font-bold text-lg">${new Date(exam.date).getDate()}</p>
                <p class="text-xs font-medium">${new Date(exam.date).toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div>
                <p class="font-bold">${exam.name} - ${subjectName}</p>
                <p class="text-sm text-slate-400">${exam.date}</p>
            </div>
        </div>
    `;
}

function checkForLibraryAlerts() {
    if (!currentUser || currentUser.role === 'Admin') return; // Only for Students and Teachers

    const myLibraryTx = store.get('library', 'transactions').filter(t => t.studentId === currentUser.id && t.status === 'Issued');
    
    // Check for books due in the next 3 days
    myLibraryTx.forEach(t => {
        const dueDate = new Date(t.dueDate);
        const today = new Date();
        const threeDaysFromNow = new Date(new Date().setDate(today.getDate() + 3));
        
        // Use setHours to compare dates only, ignoring time
        dueDate.setHours(0,0,0,0);
        today.setHours(0,0,0,0);
        threeDaysFromNow.setHours(0,0,0,0);

        if (dueDate <= threeDaysFromNow && dueDate >= today) {
            const book = store.getMap('books').get(t.bookId);
            if(book) {
                 showToast(`Reminder: '${book.title}' is due on ${t.dueDate}.`, 'info');
            }
        }
    });

    // Check for overdue fines
    const myFines = store.get('fees').filter(f => f.studentId === currentUser.id && f.feeType === 'Library Fine' && f.status === 'Unpaid');
    if (myFines.length > 0) {
        const totalFine = myFines.reduce((sum, f) => sum + f.amount, 0);
        showToast(`You have BDT ${totalFine} in unpaid library fines.`, 'error');
    }
}

function initializeApp() {
    ui.loginPage.style.display = 'none';
    ui.app.classList.remove('hidden');
    
    setupUIForRole();
    navigateTo('dashboard');
    
    // Add this line below to trigger alerts on login
    setTimeout(checkForLibraryAlerts, 1500); // Delay slightly to let the UI settle
}


function renderDashboardCharts(fees, students) {
    const gridColor = 'rgba(255, 255, 255, 0.1)';
    const textColor = '#e2e8f0'; // slate-200
    
    // Fees Chart (for Admin)
    const feesCtx = document.getElementById('feesChart')?.getContext('2d');
    if (feesCtx && fees) {
        const paidFees = fees.filter(f => f.status === 'Paid').length;
        const unpaidFees = fees.filter(f => f.status === 'Unpaid').length;
        new Chart(feesCtx, {
            type: 'bar',
            data: {
                labels: ['Paid', 'Unpaid'],
                datasets: [{
                    label: 'Fee Status',
                    data: [paidFees, unpaidFees],
                    backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(239, 68, 68, 0.6)'],
                    borderColor: ['#22c55e', '#ef4444'],
                    borderWidth: 1
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { color: textColor }, grid: { color: gridColor } }, x: { ticks: { color: textColor }, grid: { display: false } } } }
        });
    }

    // Gender Chart (for Admin and Teacher)
    const genderCtx = document.getElementById('genderChart')?.getContext('2d');
    if (genderCtx) {
        const maleCount = students.filter(s => s.gender === 'Male').length;
        const femaleCount = students.filter(s => s.gender === 'Female').length;
        new Chart(genderCtx, {
            type: 'doughnut',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{ data: [maleCount, femaleCount], backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(236, 72, 153, 0.7)'], borderColor: ['#3b82f6', '#ec4899'], borderWidth: 1 }]
            },
            options: { responsive: true, plugins: { legend: { position: 'top', labels: { color: textColor } } } }
        });
    }
}
async function openAdvancedMessageModal() {
    const classes = store.get('classes');
    const teachers = store.get('teachers');
    const timetable = store.get('timetable');

    const modalTitle = 'Quick Communication';
    const baseSelectClasses = "shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-slate-200 bg-slate-700 border-slate-600 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500";

    let targetSelectionHtml = '';
    if (currentUser.role === 'Admin') {
        targetSelectionHtml = `
            <div>
                <label for="msg-target-type" class="block text-slate-300 text-sm font-bold mb-2">Send To</label>
                <select id="msg-target-type" class="${baseSelectClasses}">
                    <option value="">-- Select Target Type --</option>
                    <option value="class">A Specific Class/Section</option>
                    <option value="teacher">A Specific Teacher</option>
                </select>
            </div>
            <div>
                <label for="msg-target-id" class="block text-slate-300 text-sm font-bold mb-2">Select Name</label>
                <select id="msg-target-id" name="target" required class="${baseSelectClasses}" disabled>
                    <option value="">-- First Select Type --</option>
                </select>
            </div>
        `;
    } else if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = classes.filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];
        const myClasses = classes.filter(c => allMyClassIds.includes(c.id));

        targetSelectionHtml = `
            <div>
                <label for="msg-target-id" class="block text-slate-300 text-sm font-bold mb-2">Select Recipient</label>
                <select id="msg-target-id" name="target" required class="${baseSelectClasses}">
                    <option value="">-- Select --</option>
                    <option value="admin">Admin</option>
                    <optgroup label="My Classes">
                        ${myClasses.map(c => `<option value="class_${c.id}">${c.name}</option>`).join('')}
                    </optgroup>
                </select>
            </div>`;
    }

    const formHtml = `
        <form id="advanced-message-form" class="space-y-4">
            <div class="grid grid-cols-1 ${currentUser.role === 'Admin' ? 'md:grid-cols-2' : ''} gap-4">
                ${targetSelectionHtml}
            </div>
            <div>
                <label for="msg-title" class="block text-slate-300 text-sm font-bold mb-2">Message Title</label>
                <input type="text" id="msg-title" name="title" required class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-slate-200 bg-slate-700 border-slate-600 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="msg-content" class="block text-slate-300 text-sm font-bold mb-2">Message Content</label>
                <textarea id="msg-content" name="content" rows="4" required class="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-slate-200 bg-slate-700 border-slate-600 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div class="flex items-center justify-end pt-4 border-t border-slate-600">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">Send Message</button>
            </div>
        </form>
    `;

    ui.modalTitle.textContent = modalTitle;
    ui.modalBody.innerHTML = formHtml;
    openAnimatedModal(ui.modal);

    if (currentUser.role === 'Admin') {
        const targetTypeSelect = document.getElementById('msg-target-type');
        const targetIdSelect = document.getElementById('msg-target-id');
        targetTypeSelect.onchange = () => {
            const selectedType = targetTypeSelect.value;
            targetIdSelect.innerHTML = '';
            targetIdSelect.disabled = true;
            if (selectedType === 'class') {
                targetIdSelect.innerHTML = `<option value="">-- Select a Class --</option>` + classes.map(c => `<option value="class_${c.id}">${c.name}</option>`).join('');
                targetIdSelect.disabled = false;
            } else if (selectedType === 'teacher') {
                targetIdSelect.innerHTML = `<option value="">-- Select a Teacher --</option>` + teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
                targetIdSelect.disabled = false;
            } else {
                 targetIdSelect.innerHTML = '<option value="">-- First Select Type --</option>';
            }
        };
    }
    
    document.getElementById('advanced-message-form').onsubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        if (!formData.target) {
            showToast('Please select a recipient for your message.', 'error');
            return;
        }
        await apiService.create('notices', {
            title: formData.title,
            content: formData.content,
            target: formData.target,
            authorId: currentUser.id || 'admin',
            date: new Date().toISOString().slice(0, 10)
        });
        showToast('Message sent successfully!', 'success');
        closeAnimatedModal(ui.modal);
    };
}
function getSkeletonLoaderHTML(type) {
    if (type === 'table') {
        return `
            <div class="bg-slate-800 p-6 rounded-xl shadow-md">
                <div class="flex justify-between items-center mb-4">
                    <div class="skeleton h-8 w-1/3"></div>
                    <div class="skeleton h-10 w-32"></div>
                </div>
                <div class="space-y-2">
                    ${Array(5).fill(0).map(() => `
                        <div class="skeleton-table-row">
                            <div class="skeleton skeleton-table-cell"></div>
                            <div class="skeleton skeleton-table-cell"></div>
                            <div class="skeleton skeleton-table-cell"></div>
                            <div class="skeleton skeleton-table-cell"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    if (type === 'dashboard') {
        return `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="skeleton skeleton-card"></div> <div class="skeleton skeleton-card"></div>
                <div class="skeleton skeleton-card"></div> <div class="skeleton skeleton-card"></div>
            </div>
             <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 skeleton h-64 rounded-xl"></div>
                <div class="skeleton h-64 rounded-xl"></div>
            </div>
        `;
    }
    return '';
}
function openAnimatedModal(modalElement) {
    modalElement.style.display = 'flex';
    setTimeout(() => modalElement.classList.add('show'), 10);
}
function closeAnimatedModal(modalElement) {
    modalElement.classList.remove('show');
    modalElement.addEventListener('transitionend', () => {
        modalElement.style.display = 'none';
    }, { once: true });
}
function showConfirmationModal(text, onConfirm) {
    ui.confirmText.textContent = text;
    ui.confirmYesBtn.onclick = () => {
        onConfirm();
        closeAnimatedModal(ui.confirmModal);
    };
    openAnimatedModal(ui.confirmModal);
}

function openChangePasswordModal() {
    const modalTitle = 'Change Your Password';
    const formHtml = `
        <form id="change-password-form" class="space-y-4">
            <div>
                <label for="currentPassword" class="block text-sm font-medium text-slate-300">Current Password</label>
                <input type="password" id="currentPassword" name="currentPassword" required 
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="newPassword" class="block text-sm font-medium text-slate-300">New Password</label>
                <input type="password" id="newPassword" name="newPassword" required
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="confirmPassword" class="block text-sm font-medium text-slate-300">Confirm New Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="pt-4 flex justify-end">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update Password</button>
            </div>
        </form>
    `;

    ui.modalTitle.textContent = modalTitle;
    ui.modalBody.innerHTML = formHtml;

    document.getElementById('change-password-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const currentPassword = e.target.currentPassword.value;
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        // --- Validation ---
        if (newPassword.length < 4) {
            showToast('New password must be at least 4 characters long.', 'error');
            return;
        }
        if (newPassword !== confirmPassword) {
            showToast('New passwords do not match.', 'error');
            return;
        }
        if (newPassword === currentPassword) {
            showToast('New password cannot be the same as the old one.', 'error');
            return;
        }

        // --- Check against stored password ---
        // Note: We are directly accessing appDatabase here because user auth data isn't in the store.
        const storedPassword = appDatabase.users[currentUser.username]?.password;
        if (currentPassword !== storedPassword) {
            showToast('Incorrect current password.', 'error');
            return;
        }

        // --- Update the password ---
        appDatabase.users[currentUser.username].password = newPassword;
        await apiService.save(); // Persist the entire database with the change

        showToast('Password updated successfully!', 'success');
        closeAnimatedModal(ui.modal);
    });

    openAnimatedModal(ui.modal);
}





function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const iconClass = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        info: 'fa-info-circle'
    }[type];

    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${iconClass} text-xl"></i><span>${message}</span>`;
    ui.toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 3000);
}

// ===================================================================================
// --- GENERIC LIST PAGE & FORM MODAL (RECONSTRUCTED) ---
// ===================================================================================
async function renderGenericListPage(config) {
    const { title, collectionName, columns, formFields, searchKeys, hideAddButton, hideActions, dataFilter, classFilter, classFilterOptions } = config;
    
    let items = await store.get(collectionName);
    if (dataFilter) items = items.filter(dataFilter);
    let originalItems = [...items]; // For filtering without re-fetching

    const renderTable = (data) => {
        const tableContainer = document.getElementById('generic-list-container');
        if (!tableContainer) return;
        
        if (data.length === 0) {
            tableContainer.innerHTML = `<p class="text-center text-slate-400 py-8">No ${title.toLowerCase()} data found.</p>`;
            return;
        }

        tableContainer.innerHTML = `
            <div class="overflow-x-auto">
                <table class="min-w-full">
                    <thead class="bg-slate-700">
                        <tr>
                            ${columns.map(c => `<th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">${c.label}</th>`).join('')}
                            ${!hideActions ? `<th class="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>` : ''}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-700">
                        ${data.map(item => `
                            <tr>
                                ${columns.map(c => `<td class="px-4 py-4 whitespace-nowrap text-sm">${c.render ? c.render(item) : item[c.key] || 'N/A'}</td>`).join('')}
                                ${!hideActions ? `
                                    <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button class="text-blue-400 hover:text-blue-300 edit-btn" data-id="${item.id}">Edit</button>
                                        <button class="text-red-400 hover:text-red-300 ml-4 delete-btn" data-id="${item.id}">Delete</button>
                                    </td>
                                ` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>`;
        attachActionListeners();
    };

    const attachActionListeners = () => {
        document.querySelectorAll('.edit-btn').forEach(btn => btn.onclick = () => {
            const item = originalItems.find(i => i.id === btn.dataset.id);
            openFormModal(`Edit ${title}`, formFields, async (formData) => {
                await apiService.update(collectionName, item.id, formData);
                await store.refresh(collectionName);
                showToast(`${title} updated successfully!`, 'success');
                renderGenericListPage(config);
            }, item);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => btn.onclick = () => {
            showConfirmationModal(`Are you sure you want to delete this ${title.toLowerCase()}?`, async () => {
                await apiService.remove(collectionName, btn.dataset.id);
                await store.refresh(collectionName);
                showToast(`${title} deleted successfully.`, 'success');
                renderGenericListPage(config);
            });
        });
    };
    
    // Initial HTML structure
    ui.contentArea.innerHTML = `
        <div class="bg-slate-800 p-6 rounded-lg shadow-md">
            <div class="flex flex-wrap justify-between items-center mb-4 gap-4">
                <h3 class="text-xl font-semibold">${title} Management</h3>
                <div class="flex gap-4 items-center">
                    ${config.search ? `<input type="text" id="search-input" placeholder="${config.searchPlaceholder || `Search ${title}s...`}" class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">` : ''}
                    ${classFilter ? `<select id="class-filter" class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">${classFilterOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}</select>` : ''}
                    ${!hideAddButton ? `<button id="add-new-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add New ${title}</button>` : ''}
                </div>
            </div>
            <div id="generic-list-container"></div>
        </div>
    `;

    renderTable(items);
    
    // Add event listener for the "Add New" button if it exists
    const addNewBtn = document.getElementById('add-new-btn');
    if (addNewBtn) {
        addNewBtn.onclick = () => {
            openFormModal(`Add New ${title}`, formFields, async (formData) => {
                await apiService.create(collectionName, formData);
                await store.refresh(collectionName);
                showToast(`${title} added successfully!`, 'success');
                renderGenericListPage(config);
            });
        };
    }
    
    const handleFilter = () => {
        const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
        const classFilterValue = document.getElementById('class-filter')?.value || '';

        let filteredItems = [...originalItems];
        
        if (searchTerm && searchKeys.length > 0) {
            filteredItems = filteredItems.filter(item => 
                searchKeys.some(key => item[key] && item[key].toLowerCase().includes(searchTerm))
            );
        }

        if (classFilter && classFilterValue) {
            filteredItems = filteredItems.filter(item => item.classId === classFilterValue);
        }
        
        renderTable(filteredItems);
    };

    if(config.search) document.getElementById('search-input').oninput = handleFilter;
    if(classFilter) document.getElementById('class-filter').onchange = handleFilter;
}

function openFormModal(title, formFields, onSubmit, initialData = {}) {
    ui.modalTitle.textContent = title;
    
    ui.modalBody.innerHTML = `
        <form id="modal-form" class="space-y-4">
            ${formFields.map(field => `
                <div>
                    <label for="${field.name}" class="block text-sm font-medium text-slate-300">${field.label}</label>
                    ${field.type === 'textarea' ? `
                        <textarea id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">${initialData[field.name] || ''}</textarea>
                    ` : field.type === 'select' ? `
                        <select id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} class="mt-1 block w-full pl-3 pr-10 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            ${field.options}
                        </select>
                    ` : `
                        <input type="${field.type}" id="${field.name}" name="${field.name}" value="${initialData[field.name] || ''}" ${field.required ? 'required' : ''} placeholder="${field.placeholder || ''}" class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    `}
                </div>
            `).join('')}
            <div class="pt-4 flex justify-end">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Save</button>
            </div>
        </form>
    `;

    // Set initial values for select fields
    formFields.forEach(field => {
        if (field.type === 'select' && initialData[field.name]) {
            document.getElementById(field.name).value = initialData[field.name];
        }
    });
    
    document.getElementById('modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        onSubmit(formData);
        closeAnimatedModal(ui.modal);
    });
    
    openAnimatedModal(ui.modal);
}