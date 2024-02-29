let ques_cont = document.querySelector(".Questions");
let ques_number = document.querySelector("#number");
let take_char = document.querySelector(".take-char");
let char_massage = document.querySelector(".char-Massage");
let char_input = document.querySelector("#char-input");
let char_btn = document.querySelector("#char-btn");
let option_list = document.querySelector(".option-list");
let buttons = document.querySelector(".buttons");
let next_btn = document.querySelector(".next-btn");
let name_btn = document.querySelector("#name-btn");
let previous_btn = document.querySelector(".previous-btn");
let name_input = document.querySelector(".name-input");
let not_found = document.querySelector(".not-found");
let fetching_data = document.querySelector(".fetching-data");
let submit_massage = document.querySelector(".submit-massage");
let fetching_massage = document.querySelector("#fetching-massage");
let interview_maker = document.querySelector(".interview-maker");
let candidate_name = document.querySelector(".Name");
let interview_show = document.querySelector(".interview-show");
let arr = [
  "Aarav",
  "Aanya",
  "Aarush",
  "Aadhya",
  "Aadi",
  "Aarohi",
  "Aarushi",
  "Aryan",
  "Advait",
  "Aditi",
  "Ananya",
  "Arjun",
  "Aditya",
  "Anika",
  "Alok",
  "Amrita",
  "Aman",
  "Anvi",
  "Ansh",
  "Akshay",
  "Anushka",
  "Ankit",
  "Ayush",
  "Anmol",
  "Arnav",
  "Ashwin",
  "Atharva",
  "Anjali",
  "Arush",
  "Avani",
  "Akash",
  "Ameya",
  "Ayaan",
  "Anshika",
  "Aryan",
  "Anshul",
  "Anusha",
  "Aditi",
  "Abhinav",
  "Anirudh",
  "Amayra",
  "Aadi",
  "Arya",
  "Ayesha",
  "Avni",
  "Arpit",
  "Anvi",
  "Aarav",
  "Arnav",
  "Ahaan",
  "Aisha",
  "Ayushman",
  "Amaira",
  "Arhaan",
  "Amisha",
  "Anshuman",
  "Anshul",
  "Arnav",
  "Ayesha",
  "Anvita",
  "Aaradhya",
  "Ankit",
  "Anushree",
  "Avyukt",
  "Avisha",
  "Adhya",
  "Azaan",
  "Advaith",
  "Arhan",
  "Amaya",
  "Abeer",
  "Anusha",
  "Arjun",
  "Aarna",
  "Aarush",
  "Amrita",
  "Anshika",
  "Aadi",
  "Aria",
  "Advaita",
  "Arun",
  "Ashita",
  "Akriti",
  "Aryan",
  "Anirudh",
  "Amisha",
  "Aisha",
  "Anshuman",
  "Anvika",
  "Aayush",
  "Aarav",
  "Aadya",
  "Amaira",
  "Adhvait",
  "Anmol",
  "Aarav",
  "Anvay",
  "Advika",
  "Aradhya",
  "Amaan",
  "Bhavya",
  "Bhavesh",
  "Bhuvan",
  "Bhavana",
  "Bhargav",
  "Bharat",
  "Bhumika",
  "Bhuvika",
  "Bhaskar",
  "Bharathi",
  "Chetan",
  "Chaya",
  "Chirag",
  "Charan",
  "Charul",
  "Chaitra",
  "Chandni",
  "Chandan",
  "Chetna",
  "Chhavi",
  "Dhruv",
  "Disha",
  "Dheeraj",
  "Divya",
  "Dinesh",
  "Deepika",
  "Daksh",
  "Damini",
  "Devansh",
  "Devika",
  "Eesha",
  "Ekansh",
  "Eshaan",
  "Eva",
  "Eshika",
  "Ekta",
  "Ekisha",
  "Eknath",
  "Ekadashi",
  "Eshwar",
  "Faran",
  "Farida",
  "Fayaz",
  "Firoz",
  "Fareed",
  "Farhan",
  "Fazal",
  "Faisal",
  "Farida",
  "Farzana",
  "Gautam",
  "Gauri",
  "Ganesh",
  "Garima",
  "Girish",
  "Gunjan",
  "Gopal",
  "Geeta",
  "Gayatri",
  "Gitanjali",
  "Harsh",
  "Himanshu",
  "Hina",
  "Harsha",
  "Hitesh",
  "Hemant",
  "Hansa",
  "Hina",
  "Harini",
  "Himani",
  "Ishaan",
  "Ishita",
  "Ishan",
  "Ishani",
  "Indra",
  "Inaya",
  "Ishwari",
  "Ishwar",
  "Ishika",
  "Idris",
  "Jatin",
  "Jaya",
  "Jayant",
  "Jyoti",
  "Jagdish",
  "Janhavi",
  "Jyotika",
  "Jyotsna",
  "Jugal",
  "Jivika",
  "Kunal",
  "Kavita",
  "Krishna",
  "Kiran",
  "Kamal",
  "Kajal",
  "Karthik",
  "Kavya",
  "Kunal",
  "Kumud",
  "Lalita",
  "Laxman",
  "Lakshmi",
  "Lavanya",
  "Lakshman",
  "Leela",
  "Lokesh",
  "Lavina",
  "Lohita",
  "Lavisha",
  "Manish",
  "Meena",
  "Mukesh",
  "Mamta",
  "Manoj",
  "Mansi",
  "Mayank",
  "Megha",
  "Mohan",
  "Madhavi",
  "Nitin",
  "Nisha",
  "Nikhil",
  "Neha",
  "Naveen",
  "Nandini",
  "Neeraj",
  "Nidhi",
  "Nikita",
  "Nirmala",
  "Omkar",
  "Ojas",
  "Onkar",
  "Oviya",
  "Omkara",
  "Oshin",
  "Omkar",
  "Oorja",
  "Ojasvi",
  "Ovi",
  "Pankaj",
  "Priya",
  "Prakash",
  "Pooja",
  "Pradeep",
  "Preeti",
  "Pranav",
  "Pallavi",
  "Parth",
  "Prerna",
  "Qamar",
  "Qasim",
  "Qaiser",
  "Qadir",
  "Quasim",
  "Qamar",
  "Qubool",
  "Qudsia",
  "Qaizar",
  "Quamar",
  "Rahul",
  "Ritu",
  "Rajat",
  "Ruchi",
  "Rajesh",
  "Rashmi",
  "Rohit",
  "Rupali",
  "Rishi",
  "Renuka",
  "Saurabh",
  "Sonia",
  "Sunil",
  "Sarika",
  "Santosh",
  "Shweta",
  "Shivam",
  "Shalu",
  "Sachin",
  "Swati",
  "Tushar",
  "Tanvi",
  "Tejas",
  "Trisha",
  "Tarak",
  "Tanya",
  "Tapan",
  "Tina",
  "Tarun",
  "Tara", //
  "Utkarsh", //9
  "Uma",
  "Uday",
  "Urvashi",
  "Ujjwal",
  "Urvi",
  "Udita",
  "Upasana",
  "Umesh",
  "Ulka", //
  "Varun", //9
  "Vidya",
  "Vikas",
  "Vinita",
  "Vivek",
  "Vidhi",
  "Vikram",
  "Vandana",
  "Vikrant",
  "Vandita", //
  "Wahid",
  "Wajid",
  "Waqar",
  "Wasiq",
  "Waheeda",
  "Wajahat",
  "Warda",
  "Agra",
  "Ahmedabad",
  "Ajmer",
  "Bangalore",
  "Bhopal",
  "Bhubaneswar",
  "Chandigarh",
  "Chennai",
  "Coimbatore",
  "Delhi",
  "Dhanbad",
  "Dehradun",
  "Ernakulam",
  "Erode",
  "Eluru",
  "Faridabad",
  "Firozabad",
  "Fatehpur",
  "Goa",
  "Ghaziabad",
  "Gandhinagar",
  "Hyderabad",
  "Hubli",
  "Haridwar",
  "Indore",
  "Itanagar",
  "Imphal",
  "Jaipur",
  "Jabalpur",
  "Jalandhar",
  "Kolkata",
  "Kochi",
  "Kanpur",
  "Lucknow",
  "Ludhiana",
  "Latur",
  "Mumbai",
  "Mysore",
  "Madurai",
  "Nagpur",
  "Noida",
  "Nellore",
  "Ooty",
  "Osmanabad",
  "Ongole",
  "Pune",
  "Patna",
  "Puducherry",
  "Quilon",
  "Quilandy",
  "Quilapalli",
  "Rajkot",
  "Ranchi",
  "Rourkela",
  "Surat",
  "Shimla",
  "Srinagar",
  "Thiruvananthapuram",
  "Tirupati",
  "Tirunelveli",
  "Udaipur",
  "Ujjain",
  "Ulhasnagar",
  "Varanasi",
  "Vadodara",
  "Vijayawada",
  "Warangal",
  "Wardha",
  "Washim",
  "Art History",
  "Astrophysics",
  "Accounting",
  "Biology",
  "Business Ethics",
  "Botany",
  "Computer Science",
  "Chemistry",
  "Creative Writing",
  "Data Science",
  "Digital Marketing",
  "Dentistry",
  "Economics",
  "Electrical Engineering",
  "Environmental Science",
  "Finance",
  "French Literature",
  "Film Studies",
  "Geology",
  "Graphic Design",
  "Genetics",
  "History",
  "Human Resource Management",
  "Hospitality Management",
  "Information Technology",
  "International Relations",
  "Interior Design",
  "Journalism",
  "Java Programming",
  "Japanese Language",
  "Kinesiology",
  "Korean Studies",
  "Kotlin Development",
  "Linguistics",
  "Law Enforcement",
  "Linear Algebra",
  "Marketing",
  "Microbiology",
  "Music Theory",
  "Nursing",
  "Neuroscience",
  "Nutrition",
  "Organic Chemistry",
  "Operations Management",
  "Oceanography",
  "Physics",
  "Psychology",
  "Public Speaking",
  "Quantum Mechanics",
  "Quality Control",
  "Quechua Language",
  "Robotics",
  "Risk Management",
  "Russian Literature",
  "Statistics",
  "Social Work",
  "Sociology",
  "Theater Arts",
  "Tourism Management",
  "Tropical Medicine",
  "Urban Planning",
  "User Experience Design",
  "Ukrainian Language",
  "Virtual Reality Design",
  "Veterinary Medicine",
  "Vietnamese Studies",
  "Web Development",
  "Wildlife Biology",
  "Women's Studies",
  "Graduate with honors",
  "Pursue a master's degree",
  "Land an internship in a desired field",
  "Publish a research paper",
  "Start a student organization",
  "Attend a national or international conference",
  "Gain fluency in a second language",
  "Complete a study abroad program",
  "Build a professional network",
  "Secure a job in a specific industry",
  "Volunteer for a meaningful cause",
  "Develop strong leadership skills",
  "Win a scholarship or grant",
  "Participate in a hackathon or coding competition",
  "Create a personal website or portfolio",
  "Learn a new programming language",
  "Join a professional association",
  "Participate in a research project",
  "Excel in a competitive sport",
  "Attend workshops and seminars regularly",
  "Build a strong online presence",
  "Collaborate on a team project",
  "Develop strong communication skills",
  "Complete a certification relevant to your field",
  "Attend networking events",
  "Improve time management skills",
  "Mentor or tutor other students",
  "Gain expertise in a specific software tool",
  "Explore entrepreneurship and start a business",
  "Attend career fairs regularly",
  "Establish a healthy work-life balance",
  "Participate in a cultural exchange program",
  "Develop a positive mindset",
  "Attend leadership development programs",
  "Connect with alumni for mentorship",
  "Explore opportunities for remote work",
  "Complete an industry-specific training",
  "Excel in extracurricular activities",
  "Develop critical thinking skills",
  "Attend workshops on personal finance",
  "Build a portfolio of projects",
  "Attend industry-specific conferences",
  "Improve public speaking abilities",
  "Build expertise in data analysis",
  "Join a professional society",
  "Learn about ethical considerations in your field",
  "Develop a strong work ethic",
  "Participate in community service",
  "Attend job shadowing opportunities",
  "Improve problem-solving skills",
  "Establish a strong LinkedIn profile",
  "Pursue a mentorship program",
  "Develop a proficiency in graphic design",
  "Explore opportunities for innovation",
  "Volunteer for campus events and activities",
  "Improve organizational skills",
  "Attend career development workshops",
  "Develop a growth mindset",
  "Participate in industry-related forums",
  "Attend webinars and online courses",
  "Build expertise in artificial intelligence",
  "Develop a strong sense of teamwork",
  "Gain experience in project management",
  "Participate in job shadowing or internships",
  "Establish a personal brand",
  "Improve negotiation skills",
  "Pursue advanced certifications",
  "Build a diverse and inclusive network",
  "Contribute to open-source projects",
  "Artistic Painting",
  "Archery",
  "Astrophotography",
  "Baking",
  "Board Games",
  "Bird Watching",
  "Cooking",
  "Cycling",
  "Chess",
  "Dancing",
  "Drawing",
  "Digital Photography",
  "Embroidery",
  "Esports",
  "Exercise",
  "Fishing",
  "Fencing",
  "Fossil Hunting",
  "Gardening",
  "Guitar Playing",
  "Geocaching",
  "Hiking",
  "Horseback Riding",
  "Home Brewing",
  "Ice Skating",
  "Indoor Climbing",
  "Insect Collecting",
  "Jewelry Making",
  "Jogging",
  "Juggling",
  "Knitting",
  "Kite Flying",
  "Karaoke",
  "Lego Building",
  "Lacrosse",
  "Lapidary",
  "Mountain Biking",
  "Model Building",
  "Meditation",
  "Nordic Walking",
  "Numismatics (Coin Collecting)",
  "Novel Writing",
  "Origami",
  "Orienteering",
  "Oil Painting",
  "Photography",
  "Pottery",
  "Paintball",
  "Quilting",
  "Quick Sketching",
  "Quadcopter Flying",
  "Rock Climbing",
  "Running",
  "Role-Playing Games",
  "Swimming",
  "Scuba Diving",
  "Sculpture",
  "Table Tennis",
  "Traveling",
  "Tai Chi",
  "Ultimate Frisbee",
  "Urban Exploration",
  "Upcycling",
  "Violin Playing",
  "Video Gaming",
  "Vintage Car Restoration",
  "Woodworking",
  "Writing",
  "Wine Tasting",
];

let value = "";
//Find charcter given by user
const characters = () => {
  value = char_input.value;
  return value;
};
//generate new Html for new Answers
const generateOptions = (sizeStart, sizeEnd) => {
  let newHtml = "";
  for (let i = sizeStart; i < sizeEnd; i++) {
    newHtml += `<button class='option' id='${arr[i]}'>${arr[i]}</button>`;
  }
  option_list.innerHTML = newHtml;
  option_list.classList.remove("hide");
};
//checking value valid or Not
const condition = (value) => {
  for (let i = 0; i < 1; i++) {
    if (
      value[i] == "a" ||
      value[i] == "b" ||
      value[i] == "c" ||
      value[i] == "d" ||
      value[i] == "e" ||
      value[i] == "f" ||
      value[i] == "g" ||
      value[i] == "h" ||
      value[i] == "i" ||
      value[i] == "j" ||
      value[i] == "k" ||
      value[i] == "l" ||
      value[i] == "m" ||
      value[i] == "n" ||
      value[i] == "o" ||
      value[i] == "p" ||
      value[i] == "q" ||
      value[i] == "r" ||
      value[i] == "s" ||
      value[i] == "t" ||
      value[i] == "u" ||
      value[i] == "v" ||
      value[i] == "w"
    ) {
      return true;
    } else {
      return false;
    }
  }
};
let count = 0;
const optionsGenrator = (startNumber, endNumber) => {
  setTimeout(() => {
    generateOptions(startNumber, endNumber);
    previous_btn.classList.remove("hide");
  }, 2000);
};
const conditionCheck = (value) => {
  if (condition(value)) {
    if (value[0] == "a") {
      if (count == 1) {
        firstQuestion(0, 99);
      }
      if (count == 2) {
        secondQuestion(317, 320);
      }
      if (count == 3) {
        thirdQuestion(386, 389);
      }
      if (count == 4) {
        fourthQuestion(455, 458);
      }
      if (count == 5) {
        fifthQuestion(524, 527);
      }
    }
    if (value[0] == "b") {
      if (count == 1) {
        firstQuestion(100, 109);
      }

      if (count == 2) {
        secondQuestion(320, 323);
      }
      if (count == 3) {
        thirdQuestion(389, 392);
      }
      if (count == 4) {
        fourthQuestion(458, 461);
      }
      if (count == 5) {
        fifthQuestion(527, 530);
      }
    }
    if (value[0] == "c") {
      if (count == 1) {
        firstQuestion(110, 119);
      }
      if (count == 2) {
        secondQuestion(323, 326);
      }
      if (count == 3) {
        thirdQuestion(392, 395);
      }
      if (count == 4) {
        fourthQuestion(461, 464);
      }
      if (count == 5) {
        fifthQuestion(530, 533);
      }
    }
    if (value[0] == "d") {
      if (count == 1) {
        firstQuestion(120, 129);
      }
      if (count == 2) {
        secondQuestion(326, 329);
      }
      if (count == 3) {
        thirdQuestion(395, 398);
      }
      if (count == 4) {
        fourthQuestion(464, 467);
      }
      if (count == 5) {
        fifthQuestion(533, 536);
      }
    }
    if (value[0] == "e") {
      if (count == 1) {
        firstQuestion(130, 139);
      }
      if (count == 2) {
        secondQuestion(329, 332);
      }
      if (count == 3) {
        thirdQuestion(398, 401);
      }
      if (count == 4) {
        fourthQuestion(467, 470);
      }
      if (count == 5) {
        fifthQuestion(536, 539);
      }
    }
    if (value[0] == "f") {
      if (count == 1) {
        firstQuestion(140, 149);
      }
      if (count == 2) {
        secondQuestion(332, 335);
      }
      if (count == 3) {
        thirdQuestion(401, 404);
      }
      if (count == 4) {
        fourthQuestion(470, 473);
      }
      if (count == 5) {
        fifthQuestion(539, 542);
      }
    }
    if (value[0] == "g") {
      if (count == 1) {
        firstQuestion(150, 159);
      }
      if (count == 2) {
        secondQuestion(335, 338);
      }
      if (count == 3) {
        thirdQuestion(404, 407);
      }
      if (count == 4) {
        fourthQuestion(473, 476);
      }
      if (count == 5) {
        fifthQuestion(542, 545);
      }
    }
    if (value[0] == "h") {
      if (count == 1) {
        firstQuestion(160, 169);
      }
      if (count == 2) {
        secondQuestion(338, 341);
      }
      if (count == 3) {
        thirdQuestion(407, 410);
      }
      if (count == 4) {
        fourthQuestion(476, 479);
      }
      if (count == 5) {
        fifthQuestion(545, 548);
      }
    }
    if (value[0] == "i") {
      if (count == 1) {
        firstQuestion(170, 179);
      }
      if (count == 2) {
        secondQuestion(341, 344);
      }
      if (count == 3) {
        thirdQuestion(410, 413);
      }
      if (count == 4) {
        fourthQuestion(479, 482);
      }
      if (count == 5) {
        fifthQuestion(548, 551);
      }
    }
    if (value[0] == "j") {
      if (count == 1) {
        firstQuestion(180, 189);
      }
      if (count == 2) {
        secondQuestion(344, 347);
      }
      if (count == 3) {
        thirdQuestion(413, 416);
      }
      if (count == 4) {
        fourthQuestion(482, 485);
      }
      if (count == 5) {
        fifthQuestion(551, 554);
      }
    }
    if (value[0] == "k") {
      if (count == 1) {
        firstQuestion(190, 199);
      }
      if (count == 2) {
        secondQuestion(347, 350);
      }
      if (count == 3) {
        thirdQuestion(416, 419);
      }
      if (count == 4) {
        fourthQuestion(485, 488);
      }
      if (count == 5) {
        fifthQuestion(554, 557);
      }
    }
    if (value[0] == "l") {
      if (count == 1) {
        firstQuestion(200, 209);
      }
      if (count == 2) {
        secondQuestion(350, 353);
      }
      if (count == 3) {
        thirdQuestion(419, 422);
      }
      if (count == 4) {
        fourthQuestion(488, 491);
      }
      if (count == 5) {
        fifthQuestion(557, 560);
      }
    }
    if (value[0] == "m") {
      if (count == 1) {
        firstQuestion(210, 219);
      }
      if (count == 2) {
        secondQuestion(353, 356);
      }
      if (count == 3) {
        thirdQuestion(422, 425);
      }
      if (count == 4) {
        fourthQuestion(491, 494);
      }
      if (count == 5) {
        fifthQuestion(560, 563);
      }
    }
    if (value[0] == "n") {
      if (count == 1) {
        firstQuestion(220, 229);
      }
      if (count == 2) {
        secondQuestion(356, 359);
      }
      if (count == 3) {
        thirdQuestion(425, 428);
      }
      if (count == 4) {
        fourthQuestion(494, 497);
      }
      if (count == 5) {
        fifthQuestion(563, 566);
      }
    }
    if (value[0] == "o") {
      if (count == 1) {
        firstQuestion(230, 239);
      }
      if (count == 2) {
        secondQuestion(359, 362);
      }
      if (count == 3) {
        thirdQuestion(428, 431);
      }
      if (count == 4) {
        fourthQuestion(497, 500);
      }
      if (count == 5) {
        fifthQuestion(566, 569);
      }
    }
    if (value[0] == "p") {
      if (count == 1) {
        firstQuestion(240, 249);
      }
      if (count == 2) {
        secondQuestion(362, 365);
      }
      if (count == 3) {
        thirdQuestion(431, 434);
      }
      if (count == 4) {
        fourthQuestion(500, 503);
      }
      if (count == 5) {
        fifthQuestion(569, 572);
      }
    }
    if (value[0] == "q") {
      if (count == 1) {
        firstQuestion(250, 259);
      }
      if (count == 2) {
        secondQuestion(365, 368);
      }
      if (count == 3) {
        thirdQuestion(434, 437);
      }
      if (count == 4) {
        fourthQuestion(503, 506);
      }
      if (count == 5) {
        fifthQuestion(572, 575);
      }
    }
    if (value[0] == "r") {
      if (count == 1) {
        firstQuestion(260, 269);
      }
      if (count == 2) {
        secondQuestion(368, 371);
      }
      if (count == 3) {
        thirdQuestion(437, 440);
      }
      if (count == 4) {
        fourthQuestion(506, 509);
      }
      if (count == 5) {
        fifthQuestion(575, 578);
      }
    }
    if (value[0] == "s") {
      if (count == 1) {
        firstQuestion(270, 279);
      }
      if (count == 2) {
        secondQuestion(371, 374);
      }
      if (count == 3) {
        thirdQuestion(440, 443);
      }
      if (count == 4) {
        fourthQuestion(509, 512);
      }
      if (count == 5) {
        fifthQuestion(578, 581);
      }
    }
    if (value[0] == "t") {
      if (count == 1) {
        firstQuestion(280, 289);
      }
      if (count == 2) {
        secondQuestion(374, 377);
      }
      if (count == 3) {
        thirdQuestion(443, 446);
      }
      if (count == 4) {
        fourthQuestion(512, 515);
      }
      if (count == 5) {
        fifthQuestion(581, 584);
      }
    }
    if (value[0] == "u") {
      if (count == 1) {
        firstQuestion(290, 299);
      }
      if (count == 2) {
        secondQuestion(377, 380);
      }
      if (count == 3) {
        thirdQuestion(446, 449);
      }
      if (count == 4) {
        fourthQuestion(515, 518);
      }
      if (count == 5) {
        fifthQuestion(584, 587);
      }
    }
    if (value[0] == "v") {
      if (count == 1) {
        firstQuestion(300, 309);
      }
      if (count == 2) {
        secondQuestion(380, 383);
      }
      if (count == 3) {
        thirdQuestion(449, 452);
      }
      if (count == 4) {
        fourthQuestion(518, 521);
      }

      if (count == 5) {
        fifthQuestion(587, 590);
      }
    }
    if (value[0] == "w") {
      if (count == 1) {
        firstQuestion(310, 317);
      }
      if (count == 2) {
        secondQuestion(383, 386);
      }
      if (count == 3) {
        thirdQuestion(452, 455);
      }
      if (count == 4) {
        fourthQuestion(521, 524);
      }
      if (count == 5) {
        fifthQuestion(590, 593);
      }
    }
  } else {
    setTimeout(() => {
      fetching_data.innerHTML = `<p class="alert-word">Warning <i class="fa-solid fa-triangle-exclamation"></i><br>Please Enter A Valid small letter Character Between: a to w </p>`;
      previous_btn.classList.add("hide");
      fetching_data.classList.remove("hide");
      option_list.classList.add("hide");
    }, 2000);
  }
};

const firstQuestion = (indexfirst, indexlast) => {
  optionsGenrator(indexfirst, indexlast);
};
const secondQuestion = (idxstart, idxend) => {
  ques_cont.innerText = "2 - Where are your live ??";
  char_massage.innerText = "Enter first character of your city 💒";
  ques_cont.classList.remove("hide");
  take_char.classList.remove("hide");
  if (count == 2) {
    optionsGenrator(idxstart, idxend);
  }
};
const thirdQuestion = (idxstart, idxend) => {
  ques_cont.innerText = "3 -  What do you like the most about studying ??";
  char_massage.innerText = "Enter first character Which you like 👵";
  ques_cont.classList.remove("hide");
  take_char.classList.remove("hide");
  if (count == 3) {
    optionsGenrator(idxstart, idxend);
  }
};
const fourthQuestion = (idxstart, idxend) => {
  ques_cont.innerText = "4 - What is your future Goal ??";
  char_massage.innerText = "Enter a Random character 🎈";
  ques_cont.classList.remove("hide");
  take_char.classList.remove("hide");
  if (count == 4) {
    optionsGenrator(idxstart, idxend);
  }
};
const fifthQuestion = (idxstart, idxend) => {
  ques_cont.innerText = "5 - Which one hobbie you like most ??";
  char_massage.innerText =
    "Enter first character of your hobbie which you like most 🥰";
  ques_cont.classList.remove("hide");
  take_char.classList.remove("hide");
  if (count == 5) {
    optionsGenrator(idxstart, idxend);
  }
};
const hide_in_out = () => {
  fetching_data.classList.remove("hide");
  option_list.classList.add("hide");
  setTimeout(() => {
    fetching_data.classList.add("hide");
    option_list.classList.remove("hide");
  }, 2000);
};
const option_list_Question_call = () => {
  if (count == 1) {
    setTimeout(() => {
      submit_massage.classList.add("hide");
      secondQuestion();
    }, 2000);
  }
  if (count == 2) {
    setTimeout(() => {
      submit_massage.classList.add("hide");
      thirdQuestion();
    }, 2000);
  }
  if (count == 3) {
    setTimeout(() => {
      submit_massage.classList.add("hide");
      fourthQuestion();
    }, 2000);
  }
  if (count == 4) {
    setTimeout(() => {
      submit_massage.classList.add("hide");
      fifthQuestion();
    }, 2000);
  }
};

const optionList = () => {
  option_list.addEventListener("click", (e) => {
    option_list.classList.add("hide");
    let data = e.target.id;
    interview(data);
    previous_btn.classList.add("hide");
    ques_cont.classList.add("hide");
    submit_massage.classList.remove("hide");
    option_list_Question_call();
    if (count == 5) {
      fetching_massage.innerText =
        "Making Your Interview Just Wait for few Seconds";
      setTimeout(() => {
        interview_show.innerText = `INTRODUCTION :-  My name is "${p[0]}", and I am living in "${p[1]}", I love to studing "${p[2]}" My short term goal is  "${p[3]}", My one of the faviourite Hobbie is, "${p[4]}"..... `;

        submit_massage.classList.add("hide");
        interview_maker.classList.remove("hide");
      }, 3000);
    }
  });
};
const previousBtn = () => {
  previous_btn.addEventListener("click", () => {
    not_found.classList.remove("hide");
    option_list.classList.add("hide");
    previous_btn.classList.add("hide");
  });
};
const newFuctionCall = (number) => {
  if (count == number) {
    characters();
    conditionCheck(value);

    hide_in_out();
    conditionCheck(value);
    take_char.classList.add("hide");

    previousBtn();
    char_input.value = null;
  }
};
optionList();
char_btn.addEventListener("click", () => {
  count += 1;

  newFuctionCall(1);
  newFuctionCall(2);
  newFuctionCall(3);
  newFuctionCall(4);
  newFuctionCall(5);
});

const nameValue = () => {
  let v = name_input.value;
  return v;
};

name_btn.addEventListener("click", () => {
  let data2 = nameValue();
  interview(data2);
  name_input.value = null;
  not_found.classList.add("hide");
  submit_massage.classList.remove("hide");
  setTimeout(() => {
    submit_massage.classList.add("hide");
  }, 2000);
  ques_cont.classList.add("hide");
  option_list_Question_call();

  if (count == 5) {
    fetching_massage.innerText =
      "Making Your Interview Just Wait for few Seconds";
    setTimeout(() => {
      interview_show.innerText = `INTRODUCTION :-  My name is "${p[0]}", and I am living in "${p[1]}", I love to studing "${p[2]}" My short term goal is "${p[3]}", My one of the faviourite Hobbie is,"${p[4]}"...... `;

      submit_massage.classList.add("hide");
      interview_maker.classList.remove("hide");
    }, 3000);
  }
});
let p = [];
const interview = (data) => {
  if (count == 1) {
    candidate_name.innerText = data;
  }
  p.push(data);
};
