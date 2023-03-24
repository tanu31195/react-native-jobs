import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY, RAPID_API_HOST } from "@env";
// import Constants from "expo-constants";

// const rapidApiKey = "";
// const rapidApiHost = "jsearch.p.rapidapi.com";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "rapidApiKey",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // setData(local.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      setError(error);
      alert("There is an error while fetching data");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

const local = {
  "status": "OK",
  "request_id": "760b303a-67c5-4f2c-b0f7-589d74471673",
  "parameters": {
    "query": "react native developer in texas, usa",
    "page": 1,
    "num_pages": 1
  },
  "data": [
    {
      "employer_name": "ASCII Group LLC",
      "employer_logo": null,
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Dice",
      "job_id": "iO6rldwM9e0AAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "React Native Developer - Plano TX (Onsite)",
      "job_apply_link": "https://www.dice.com/job-detail/5f8c0001-ff96-4746-820e-a4fe0d4ccb3d",
      "job_description": "Hi,\n\nThis is Venkatesh working as Technical Recruiter at ASCII Group.\n\nWe have a position which is suitable to your skillset. Please go through the below JD and let me know your interest.\n\nTitle : React Native Developer\n\nLocation : Plano TX (Onsite)\n\nDuration : 12 Months\n\nVisa Status : ANY\n\nRelevant Experience (in Yrs.): 6+ years\n\nDetailed Job Description:\n\nDesign and develop cross-platform mobile applications for Android, iOS, Windows, etc.\n\nHands on React Native developer with 10+ years’ experience with good communication and leadership skills. Certifications and LinkedIn profile will be added advantage.\n\nHands on experience in Redux and Redux Saga\n\nExperience with third-party libraries and APIs\n\nExperience with integrating RESTful services\n\nExperience in developing responsive UI design to support multiple view port\n\nThorough understanding of the responsibilities of the platform, database, API, caching layer, proxies,\n\nand other web services used in the system\n\nExperience in writing ADA compliance code\n\nCoordinating with the back-end developer in the process of building the RESTful API\n\nCoordinating with UX designer\n\nStrong oral and written communication skills.\nThanks & Regards,\n\nVenkatesh Kundurthi\n\nTeam Lead || ASCII Group, LLC.\n\nOffice: Ext. 104; Mobile:\n38345 W. 10 Mile Rd, Ste.#365; Farmington, MI 48335\n\nEmail:",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679593897,
      "job_posted_at_datetime_utc": "2023-03-23T17:51:37.000Z",
      "job_city": "Plano",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 33.019844,
      "job_longitude": -96.69888,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=iO6rldwM9e0AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-23T17:51:37.000Z",
      "job_offer_expiration_timestamp": 1682272297,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 120,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "React",
        "Native REact",
        "Redux"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": true
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Relevant Experience (in Yrs.): 6+ years",
          "Design and develop cross-platform mobile applications for Android, iOS, Windows, etc",
          "Hands on React Native developer with 10+ years’ experience with good communication and leadership skills",
          "Certifications and LinkedIn profile will be added advantage",
          "Hands on experience in Redux and Redux Saga",
          "Experience with third-party libraries and APIs",
          "Experience with integrating RESTful services",
          "Experience in developing responsive UI design to support multiple view port",
          "Experience in writing ADA compliance code",
          "Coordinating with UX designer",
          "Strong oral and written communication skills"
        ],
        "Responsibilities": [
          "Thorough understanding of the responsibilities of the platform, database, API, caching layer, proxies,",
          "and other web services used in the system",
          "Coordinating with the back-end developer in the process of building the RESTful API"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Pamten",
      "employer_logo": null,
      "employer_website": "http://www.pamten.com",
      "employer_company_type": null,
      "job_publisher": "ComputerWork",
      "job_id": "W8um9nYMqC8AAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "React Native Developer (Mid-Level)",
      "job_apply_link": "https://www.computerwork.com/us/en/search-jobs-in-Dallas,-Texas,-USA/REACT-NATIVE-DEVELOPER-MID-LEVEL-568831E247FF355B43/",
      "job_description": "Job Description\n\nIrving, TX (Hybrid in office 2-3 times per week)\n\nResponsibilities\n\nDesign and develop React Native Apps on both iOS and Android.\n\nMigrate existing Cordova Mobile App into React Native App\n\nWork collaboratively with scrum teams and product owners to identify new features and squash bugs.\n\nCoordinate with scrum teams to report progress, enhancements, and defects to key stakeholders.\n\nRequirements\n\nAt least 5 years in a software and mobile app development.\n\nAt least 3+ years in React Native App development, JS objects and libraries\n\nBachelor's degree in Computer Science, Engineering, or a related field.\n\nExperience working in an agile environment. (Scrum, Kanban, etc.)\n\nExcellent oral and written communication skills to interact effectively with various teams and management group.\n\nAbility to solve complex problems, including use of research, analysis, and expertise to develop creative, innovative solutions\n\n2+ years in C#, Web API, RESTful Services and SQL database\n\n3+ years in Html5, JavaScript, jQuery, Grunt, and other client-side frameworks\n\nVersion control systems. (Preferably Git or TFVS)",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679565480,
      "job_posted_at_datetime_utc": "2023-03-23T09:58:00.000Z",
      "job_city": "Dallas",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.776665,
      "job_longitude": -96.79699,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=W8um9nYMqC8AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-06T09:58:00.000Z",
      "job_offer_expiration_timestamp": 1680775080,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Design and develop React Native Apps on both iOS and Android",
          "At least 5 years in a software and mobile app development",
          "At least 3+ years in React Native App development, JS objects and libraries",
          "Bachelor's degree in Computer Science, Engineering, or a related field",
          "Experience working in an agile environment",
          "(Scrum, Kanban, etc.)",
          "Excellent oral and written communication skills to interact effectively with various teams and management group",
          "Ability to solve complex problems, including use of research, analysis, and expertise to develop creative, innovative solutions",
          "2+ years in C#, Web API, RESTful Services and SQL database",
          "3+ years in Html5, JavaScript, jQuery, Grunt, and other client-side frameworks",
          "Version control systems",
          "(Preferably Git or TFVS)"
        ],
        "Responsibilities": [
          "Work collaboratively with scrum teams and product owners to identify new features and squash bugs",
          "Coordinate with scrum teams to report progress, enhancements, and defects to key stakeholders"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "UnitedHealth Group",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_crLZ2ieRE_xkZxH4sMCaHoeSuK_Y7_7o03_L&s=0",
      "employer_website": "https://www.unitedhealthgroup.com",
      "employer_company_type": "Finance",
      "job_publisher": "Lensa",
      "job_id": "2Ne84UtnmY4AAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "React Native Developer - Remote, Hybrid",
      "job_apply_link": "https://lensa.com/react-native-developer-remote-or-hybrid-jobs/austin/jd/d9db3ba9fb6b0ef2dcfcc50ae96e54a4",
      "job_description": "Surest, a UnitedHealthcare Company, (formerly Bind) provides a new approach to health benefits designed to make it easier and more affordable for people to access health care services. Our innovative company is part tech start-up, part ground-breaking service delivery-changing the way benefits serve customers and consumers to deliver meaningful results and better outcomes (and we have just begun). We understand our members and employers alike desire a user-friendly, intuitive experience that puts people in control when it comes to the choices they make and the costs they pay for medical care. At Surest, we pride ourselves in our ability to make a difference, and with the backing of our parent company, UnitedHealthcare, we can operate in the best of both worlds—the culture and pace of an innovative start-up with big company support and stability. Come join the Surest team and help us design and deliver a cutting-edge health benefit that changes the face of health care.\n\nThis position is for React Native Software Engineer working on the Surest member application on iOS, Android, and Web.\n\nSoftware engineering is the application of engineering to the design, development, implementation, testing and maintenance of software in a systematic method. The roles in this function will cover all primary development activity across all technology functions that ensure we deliver code with high quality for our applications, products and services and to understand customer needs and to develop product roadmaps.\n\nThese roles include, but are not limited to analysis, design, coding, engineering, testing, debugging, standards, methods, tools analysis, documentation, research and development, maintenance, new development, operations and delivery. With every role in the company, each position has a requirement for building quality into every output. This also includes evaluating new tools, new techniques, strategies; Automation of common tasks; build of common utilities to drive organizational efficiency with a passion around technology and solutions and influence of thought and leadership on future capabilities and opportunities to apply technology in new and innovative ways.\n\nYou’ll enjoy the flexibility to work remotely * from anywhere within the U.S. as you take on some tough challenges.\n\nPrimary Responsibilities\n• Contribute and maintain the React Native consumer app for Surest\n• Review code from peers\n• Maintain and create unit tests to reach 100% code coverage\n• Modify existing automation tests\n• Help maintain documentation for best coding standards\n• Maintain the Continuous Integration and Delivery system\n\nYou’ll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in.\n\nRequired Qualifications\n• Undergraduate degree\n• 2+ years of React Native\n\nPreferred Qualifications\n• 2+ years of experience with iOS tech stacks using Swift and/or Objective C\n• 1+ years of experience with Android tech stacks using Kotlin and/or Java\n• 1+ years of with Web tech stacks like HTML, CSS, Javascript\n• Experience with Detox and Jest testing tools\n• Experience with Postgres Databases\n• Experience with the App submission process to Apple App Store and Google Play Store\n\nCareers at UnitedHealthcare Employer & Individual. We all want to make a difference with the work we do. Sometimes we're presented with an opportunity to make a difference on a scale we couldn't imagine. Here, you get that opportunity every day. As a member of one of our elite teams, you'll provide the ideas and solutions that help nearly 25 million customers live healthier lives. You'll help write the next chapter in the history of health care. And you'll find a wealth of open doors and career paths that will take you as far as you want to go. Go further. This is your life's best work.(sm)\n\nCalifornia, Colorado, Connecticut, Nevada, New York, Rhode Island, or Washington Residents Only: The salary range for California, Colorado, Connecticut, Nevada, New York, Rhode Island or Washington residents is $85,000 to $167,300. Pay is based on several factors including but not limited to education, work experience, certifications, etc. In addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements). No matter where or when you begin a career with UnitedHealth Group, you’ll find a far-reaching choice of benefits and incentives.\n\nAt UnitedHealth Group, our mission is to help people live healthier lives and make the health system work better for everyone. We believe everyone–of every race, gender, sexuality, age, location and income–deserves the opportunity to live their healthiest life. Today, however, there are still far too many barriers to good health which are disproportionately experienced by people of color, historically marginalized groups and those with lower incomes. We are committed to mitigating our impact on the environment and enabling and delivering equitable care that addresses health disparities and improves health outcomes — an enterprise priority reflected in our mission.\n\nDiversity creates a healthier atmosphere: UnitedHealth Group is an Equal Employment Opportunity/Affirmative Action employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, sex, age, national origin, protected veteran status, disability status, sexual orientation, gender identity or expression, marital status, genetic information, or any other characteristic protected by law.\n\nUnitedHealth Group is a drug - free workplace. Candidates are required to pass a drug test before beginning employment.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679481909,
      "job_posted_at_datetime_utc": "2023-03-22T10:45:09.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": [
        "health_insurance",
        "retirement_savings"
      ],
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=2Ne84UtnmY4AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-21T23:59:59.000Z",
      "job_offer_expiration_timestamp": 1682121599,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 24,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "Reading Comprehension",
        "Active Listening",
        "Speaking",
        "Critical Thinking",
        "Complex Problem Solving",
        "Operations Analysis",
        "Programming",
        "Judgment and Decision Making",
        "Systems Analysis",
        "Systems Evaluation"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": true
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Undergraduate degree",
          "2+ years of React Native"
        ],
        "Responsibilities": [
          "Software engineering is the application of engineering to the design, development, implementation, testing and maintenance of software in a systematic method",
          "The roles in this function will cover all primary development activity across all technology functions that ensure we deliver code with high quality for our applications, products and services and to understand customer needs and to develop product roadmaps",
          "These roles include, but are not limited to analysis, design, coding, engineering, testing, debugging, standards, methods, tools analysis, documentation, research and development, maintenance, new development, operations and delivery",
          "With every role in the company, each position has a requirement for building quality into every output",
          "This also includes evaluating new tools, new techniques, strategies; Automation of common tasks; build of common utilities to drive organizational efficiency with a passion around technology and solutions and influence of thought and leadership on future capabilities and opportunities to apply technology in new and innovative ways",
          "Contribute and maintain the React Native consumer app for Surest",
          "Review code from peers",
          "Maintain and create unit tests to reach 100% code coverage",
          "Modify existing automation tests",
          "Help maintain documentation for best coding standards",
          "Maintain the Continuous Integration and Delivery system",
          "You’ll be rewarded and recognized for your performance in an environment that will challenge you and give you clear direction on what it takes to succeed in your role as well as provide development for other roles you may be interested in"
        ],
        "Benefits": [
          "California, Colorado, Connecticut, Nevada, New York, Rhode Island, or Washington Residents Only: The salary range for California, Colorado, Connecticut, Nevada, New York, Rhode Island or Washington residents is $85,000 to $167,300",
          "Pay is based on several factors including but not limited to education, work experience, certifications, etc",
          "In addition to your salary, UnitedHealth Group offers benefits such as, a comprehensive benefits package, incentive and recognition programs, equity stock purchase and 401k contribution (all benefits are subject to eligibility requirements)",
          "No matter where or when you begin a career with UnitedHealth Group, you’ll find a far-reaching choice of benefits and incentives"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Yes We Group LLC",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq2Z932KLcm0gww-CEaCIyM3-NA2Cq5PbgMJM&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Dice",
      "job_id": "BUBcQSDK4SUAAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "Front End Developer (React and React Native)",
      "job_apply_link": "https://www.dice.com/job-detail/6df40f83-bac5-49f6-9beb-7350c14fed27",
      "job_description": "Front End Developer (React and React Native)\n\nIrving Texas\n\n24+ Months\n\nPROJECT DESCRIPTION/JOB SUMMARY\n\nReact JS application development and deployment.\n\nReact Native Experience (Mandatory)\n\nKEY RESPONSIBILITES AND DUTIES\n• Developing and implementing highly responsive user interface components using react concepts.\n• Writing application interface codes using JavaScript/TypeScript following react.js workflows.\n• Troubleshooting interface software and debugging application codes.\n• Developing and implementing front-end architecture to support user interface concepts.\n• Monitoring and improving front-end performance.\n• Documenting application changes and developing updates.\n• Write extensive unit testing on the front-end.\n• Meeting with the development team to discuss user interface ideas and applications.\n• Reviewing application requirements and interface designs.\n\n\"MUST HAVE\" SPECIFIC KNOWLEDGE AND SKILLS\n• 3+ Years of experience in React JS projects\n• Ability to analyze and think quickly and to resolve conflict\n• Previous experience working as a react.js developer.\n• In-depth knowledge of JavaScript, TypeScript, CSS, HTML, and front-end languages.\n• Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.\n• Experience with user interface design.\n• Knowledge of performance testing frameworks including Mocha and Jest.\n• Experience with browser-based debugging and performance testing software.\n• Excellent troubleshooting skills.\n\nThanks and Regards\n\nKrish",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679058447,
      "job_posted_at_datetime_utc": "2023-03-17T13:07:27.000Z",
      "job_city": "Irving",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.81402,
      "job_longitude": -96.94889,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=BUBcQSDK4SUAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-17T13:07:27.000Z",
      "job_offer_expiration_timestamp": 1681736847,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 36,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "React",
        "React Native"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "React Native Experience (Mandatory)",
          "\"MUST HAVE\" SPECIFIC KNOWLEDGE AND SKILLS",
          "3+ Years of experience in React JS projects",
          "Ability to analyze and think quickly and to resolve conflict",
          "Previous experience working as a react.js developer",
          "In-depth knowledge of JavaScript, TypeScript, CSS, HTML, and front-end languages",
          "Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux",
          "Experience with user interface design",
          "Knowledge of performance testing frameworks including Mocha and Jest",
          "Experience with browser-based debugging and performance testing software",
          "Excellent troubleshooting skills"
        ],
        "Responsibilities": [
          "Developing and implementing highly responsive user interface components using react concepts",
          "Writing application interface codes using JavaScript/TypeScript following react.js workflows",
          "Troubleshooting interface software and debugging application codes",
          "Developing and implementing front-end architecture to support user interface concepts",
          "Monitoring and improving front-end performance",
          "Documenting application changes and developing updates",
          "Write extensive unit testing on the front-end",
          "Meeting with the development team to discuss user interface ideas and applications",
          "Reviewing application requirements and interface designs"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "OscarMike",
      "employer_logo": null,
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Comeet",
      "job_id": "w12UpcO2DuwAAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "React Native Developer Mid",
      "job_apply_link": "https://www.comeet.com/jobs/goin/55.00E/react-native-developer-mid/29.53D",
      "job_description": "Description\n\nAgency Note: We are accepting 1099 & W-2 only.\n\nContract / Contract to hire\n\nReact Native Developer Mid\n\nThe React Native Developer is part of the Digital Technology Team. They are responsible for design, implementation and on-going enhancements of digital products and enhancing the digital experience. The developer must have a strong and continuously evolving technical mastery of app development focused on React Native. This includes hands-on programming, participating in design sessions, code reviews, system testing during various phases of development, follow best industry practices and publish app documentation.\n\nAbout you:\n\nLooking for a React Native Developer skilled in programming for both iOS and Android applications. Basic knowledge of AWS Cloud ecosystem and an idea of services like Lambda, API Gateway, CloudWatch, S3, etc. App developers with programming experience such as Objective C and android development are welcome to apply if the candidate is fluent enough to code in Javascript and work with Redux. Full-stack developers (UI + Services) fluent in JavaScript are also welcome to apply.\n\nRequirements\n\nKEY RESPONSIBILITIES AND DUTIES\n• Development involving end-to-end design, implementation of new features, and ongoing enhancements of digital products to enhance customers' digital experience.\n• Develop User Interface(UI) using React Native for both iOS and Android mobile application platforms.\n• Use JavaScript libraries such as Redux to make asynchronous API calls as well as improve the performance of the websites/mobile apps.\n• Perform pair programming, effectively communicate ideas with the team, assist in systems integration, performance testing, and product releases\n• Write UI components and modules with high reusability and scalability and leverage native APIs for deep integrations with both iOS and Android platforms\n\n“MUST HAVE” SPECIFIC KNOWLEDGE AND SKILLS\n• 3 years of experience working with React Native and React JS along with tools like Flux, Flow, or Redux\n• 4 years of experience involving Web Technologies, such as JavaScript, CSS, HTML, or functional programming\n• Experience working with REST APIs, document request models, offline storage, and third-party libraries\n• Experience in React Native development tools such as React Native Debugger, Xcode, Android Studio, iOS and Android Simulators, Jest, or ESLint\n• Experience in User Interface (UI) design and responsive designs.\n\nADDITIONAL SKILLS AND OTHER REQUIREMENTS\n• Ability to work in an Agile / SCRUM environment.\n• Self-directed with a start-up/entrepreneur mindset.\n• Ravenous about learning technology and problem solving.\n• Strong writing and communication skills.\n\nEDUCATION AND EXPERIENCE\n\nEDUCATION: Bachelors/4 Yr Degree\n\nYEARS OF RELEVANT WORK EXPERIENCE: 4+Years\n\nCERTIFICATIONS/LICENSES: Any relevant Technical/ Cloud Certifications would be an added advantage",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679058186,
      "job_posted_at_datetime_utc": "2023-03-17T13:03:06.000Z",
      "job_city": "Irving",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.81402,
      "job_longitude": -96.94889,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=w12UpcO2DuwAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": null,
      "job_offer_expiration_timestamp": null,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 48,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": true
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Looking for a React Native Developer skilled in programming for both iOS and Android applications",
          "Basic knowledge of AWS Cloud ecosystem and an idea of services like Lambda, API Gateway, CloudWatch, S3, etc",
          "App developers with programming experience such as Objective C and android development are welcome to apply if the candidate is fluent enough to code in Javascript and work with Redux",
          "Full-stack developers (UI + Services) fluent in JavaScript are also welcome to apply",
          "“MUST HAVE” SPECIFIC KNOWLEDGE AND SKILLS",
          "3 years of experience working with React Native and React JS along with tools like Flux, Flow, or Redux",
          "4 years of experience involving Web Technologies, such as JavaScript, CSS, HTML, or functional programming",
          "Experience working with REST APIs, document request models, offline storage, and third-party libraries",
          "Experience in React Native development tools such as React Native Debugger, Xcode, Android Studio, iOS and Android Simulators, Jest, or ESLint",
          "Experience in User Interface (UI) design and responsive designs",
          "ADDITIONAL SKILLS AND OTHER REQUIREMENTS",
          "Ability to work in an Agile / SCRUM environment",
          "Self-directed with a start-up/entrepreneur mindset",
          "Ravenous about learning technology and problem solving",
          "Strong writing and communication skills",
          "EDUCATION: Bachelors/4 Yr Degree",
          "YEARS OF RELEVANT WORK EXPERIENCE: 4+Years",
          "CERTIFICATIONS/LICENSES: Any relevant Technical/ Cloud Certifications would be an added advantage"
        ],
        "Responsibilities": [
          "The developer must have a strong and continuously evolving technical mastery of app development focused on React Native",
          "This includes hands-on programming, participating in design sessions, code reviews, system testing during various phases of development, follow best industry practices and publish app documentation",
          "Development involving end-to-end design, implementation of new features, and ongoing enhancements of digital products to enhance customers' digital experience",
          "Develop User Interface(UI) using React Native for both iOS and Android mobile application platforms",
          "Use JavaScript libraries such as Redux to make asynchronous API calls as well as improve the performance of the websites/mobile apps",
          "Perform pair programming, effectively communicate ideas with the team, assist in systems integration, performance testing, and product releases",
          "Write UI components and modules with high reusability and scalability and leverage native APIs for deep integrations with both iOS and Android platforms"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Himflax Group",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP_dgmF_Y7zmDazfGiusG4s_ladozBLcUmLlt&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "LinkedIn",
      "job_id": "IANRevikNioAAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "React native Developer/Android Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-android-developer-at-himflax-group-3522698864",
      "job_description": "Hi\n\nHope you are doing well !!\n\nThis is Amritanshu from Himflax Information Technologies Inc. We have an urgent requirement .Please review the below job description and If you are interested Please let me know. Please share your updated Resume with me at my Email: amritanshu@himflax.com or you can directly reach me at 302-204-7736.\n\nJob Title: Android Developer /IOS/ Mobile/ React Native Developer\n\nLocation: Irving, TX - (Hybrid – Only 2 days onsite)\n\nPosition Type: Long Term Contract\n\nJob Description:\n\nSkills and Responsibilities:\n\n• Design and develop React Native Apps on both iOS and Android.\n\n• Migrate existing Cordova Mobile App into React Native App\n\n• Work collaboratively with scrum teams and product owners to identify new features and squash bugs.\n\n• Coordinate with scrum teams to report progress, enhancements, and defects to key stakeholders.\n\nRequirements:\n\n• At least 8 years in a software and mobile app development.\n\n• At least 3+ years in React Native App development.\n\n• Bachelor’s degree in Computer Science, Engineering, or a related field.\n\n• Experience working in an agile environment. (Scrum, Kanban, etc.)\n\n• Excellent oral and written communication skills to interact effectively with various teams and management group.\n\n• Ability to solve complex problems, including use of research, analysis, and expertise to develop creative, innovative solutions.\n\nMust have experience with:\n\no 3+ years in React Native Framework, JS objects and libraries.\n\no 5+ years in C#, Web API, RESTful Services and SQL database\n\no 3+ years in Html5, JavaScript, jQuery, Grunt, and other client-side frameworks\n\no 3+ years in ORM experience such as Entity Framework.\n\no Version control systems. (Preferably Git or TFVS)\n\no Must be extremely organized, motivated, and work with a sense of urgency.\n\nNice-to-have experience with:\n\no T-SQL\n\no Writing complex joins, inserts, updates, and incorporating optimization techniques.\n\no Writing stored procedures and views.\n\no Cordova or other hybrid mobile experience. o Wholesale distribution industry.\n\nMandatory Skills :\n\n- 3+ years in React Native Framework, JS objects and libraries.\n\n- 5+ years in C#, Web API, RESTful Services and SQL database\n\nGood To Go Skills :\n\n- T-SQL\n\n- Writing complex joins, inserts, updates, and incorporating optimization techniques.\n\n- Writing stored procedures and views.\n\nThanks and Regards\n\nAmritanshu Ratna\n\nTechnical Recruiter\n\nHimflax Information Technologies Inc.\n\nUSA: 600 N, BROADWAY ST STE 5 3520, MIDDLETOWN DE 19709\n\nEmail Id: amritanshu@himflax.com\n\nContact No.: +1 3022047736, EXT-102\n\nDirect: 302-204-7736\n\nWebsite: https://himflax.com\n\nUSA",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1678818627,
      "job_posted_at_datetime_utc": "2023-03-14T18:30:27.000Z",
      "job_city": "Irving",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.81402,
      "job_longitude": -96.94889,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=IANRevikNioAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-13T18:30:27.000Z",
      "job_offer_expiration_timestamp": 1681410627,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 36,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "SQL Database",
        "Control Systems",
        "React Native",
        "React.js",
        "Android Development",
        "Apache Cordova",
        "Entity Framework",
        "Agile Environment",
        "JavaScript",
        "Mobile Application Development"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Design and develop React Native Apps on both iOS and Android",
          "At least 8 years in a software and mobile app development",
          "At least 3+ years in React Native App development",
          "Bachelor’s degree in Computer Science, Engineering, or a related field",
          "Experience working in an agile environment",
          "(Scrum, Kanban, etc.)",
          "Excellent oral and written communication skills to interact effectively with various teams and management group",
          "Ability to solve complex problems, including use of research, analysis, and expertise to develop creative, innovative solutions",
          "3+ years in React Native Framework, JS objects and libraries",
          "5+ years in C#, Web API, RESTful Services and SQL database",
          "3+ years in Html5, JavaScript, jQuery, Grunt, and other client-side frameworks",
          "3+ years in ORM experience such as Entity Framework",
          "Version control systems",
          "(Preferably Git or TFVS)",
          "Must be extremely organized, motivated, and work with a sense of urgency",
          "T-SQL",
          "Writing complex joins, inserts, updates, and incorporating optimization techniques",
          "Writing stored procedures and views",
          "Cordova or other hybrid mobile experience",
          "Wholesale distribution industry"
        ],
        "Responsibilities": [
          "Migrate existing Cordova Mobile App into React Native App",
          "Work collaboratively with scrum teams and product owners to identify new features and squash bugs",
          "Coordinate with scrum teams to report progress, enhancements, and defects to key stakeholders"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Cognizant United States, Cognizant Technology Solutions",
      "employer_logo": "https://www.cognizant.com/content/dam/cognizant/en_us/dotcom/logos/COG-Logo-2022.svg",
      "employer_website": "http://www.cognizant.com",
      "employer_company_type": "Computer Services",
      "job_publisher": "Careers At Cognizant",
      "job_id": "hscNyUT1YlIAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "React Native  Developer  (Hybrid)",
      "job_apply_link": "https://careers.cognizant.com/professionals/global/en/job/00053005181/React-Native-Developer-Hybrid",
      "job_description": "React Native Developer (hybrid)\n\nLocation San Francisco CA.\n\nCognizant is looking for a React Native Developer, an individual with experience in cross-platform app development for Android and iOS platforms, that has a good understanding & hands-on in implementing unit tests frameworks used for mobile app development and collaborating with other team members on agile development teams.\n• *You must be legally authorized to work in the United States without the need for employer sponsorship, now or at any time in the future**\n\nCognizant will not sponsor H-1B or other U.S. work authorization for this role.\n\nResponsibilities:\n• Should build Mobile applications using React Native\n• Work with Scrum Masters/Product Owners to understand the business needs\n• Should be able to design the UI of the mobile applications using wireframes and mocks\n• Should be able to call out risks or ask for immediate help when information is inadequate or if stuck\n• Should work with Backend developers, integration engineers, and QA folks on regular basis to ensure the designs are integrated and tested.\n• Should be able to deploy apps in respective app stores (if needed)\n• Should participate in all Scrum ceremonies and provide valuable feedback for optimizing delivery and process improvements.\n• Excellent communication skills and participates actively in team discussions.\n• Willing to learn new technologies and enjoys working in a dynamic fast paced environment.\n• Work in a team environment. Mentor and coach, the team members.\n\nRequired Qualifications:\n• A minimum of 6+ years of React Native Experience is required\n• Should have strong experience in React-Native-CLI, Redux, Middleware\n• Should have hands-on experience with React Native applications\n• Should also have experience in JavaScript ES6, ReactNative Stylesheet\n• Should have experience in managing onsite & offshore team\n• Experience in Native app development (Android/iOS) - Good to Have\n• Experience in iOS and Android App store releases - Good to Have\n• Has a highly collaborative working style. Can build and lead a team of high-performing engineers. Strong communication skills and participate actively in discussions with business stakeholders and the team members\n\nThe Salary rate for this position is between $89K – 130K, depending on the experience and other qualifications of the successful candidate.This position is also eligible for Cognizant’s discretionary annual incentive program, based on performance and subject to the terms of Cognizant’s applicable plans.\n\nBenefits: Cognizant offers the following benefits for this position, subject to applicable eligibility requirements:\n• Medical/Dental/Vision/Life Insurance\n• Paid holidays plus Paid Time Off\n• 401(k) plan and contributions\n• Long-term/Short-term Disability\n• Paid Parental Leave\n• Employee Stock Purchase Plan\n\nWhy Choose Cognizant?\n\nIt takes a lot to succeed in today’s fast-paced market, and Cognizant Technology Solutions has become a leader in the industry. We love big ideas and even bigger dreams! We stand out because we put human experiences at the core. Our associates enjoy robust benefits and training opportunities from our industry-recognized, award-winning Academy team. You will have access to hundreds of technical training to keep your skillsets fresh and have opportunities to acquire certifications in the newest technologies.\n\nEverything we do at Cognizant we do with passion—for our clients (fortune 100 companies), our communities, and our organization. It’s the defining attribute that we look for in our people.\n\nIf you love ambiguity, are excited by change, and excel through autonomy, we’d love to hear from you!\n\nAbout Cognizant Digital Engineering\n\nWell-designed software transcends digital technology, going beyond the fulfillment of basic requirements to focus instead on human needs. Within Cognizant Digital Engineering, we help clients develop software products that transform human insights into tangible, production-ready digital solutions. We also work with our clients to scale their native cloud applications. Using insights from the lived experiences of our consumers, we seamlessly replace traditional service strategies with engaging, precise, and direct digital applications. Designing phenomenal software is vital to success in the digital economy—and we understand that a human-centric approach is key to this design.\n\nwww.cognizant.com\n\n#LI-HN1\n\n#CB\n\n#IND123",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1678725961,
      "job_posted_at_datetime_utc": "2023-03-13T16:46:01.000Z",
      "job_city": "Dallas",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.776665,
      "job_longitude": -96.79699,
      "job_benefits": [
        "retirement_savings",
        "dental_coverage",
        "health_insurance",
        "paid_time_off"
      ],
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=hscNyUT1YlIAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": null,
      "job_offer_expiration_timestamp": null,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 72,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "react",
        "react-native-cli",
        "redux",
        "javascript",
        "react redux",
        "react native applications",
        "React Native Developer",
        "Swiggy Full Stack Developer - SDE I",
        "Interactive Developer - HTML & CSS & Javascript",
        "Associate UI Developer - JavaScript & .Net",
        "Server Side & UI Developer",
        "Senior Software Developer - Javascript & Node.js Developer",
        "Senior Developer - Java & Javaee & Mobile Applications",
        "Senior Full Stack Developer - Angular.js & Typescript & C# & MVC & Javascript",
        "Senior IOS Engineer - Swift & SDK & Cocoa Touch & Rest APIs",
        "Senior Software developer- Node JS & TIZEN J & Javascript & HTML5 & CSS3"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": true
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Cognizant is looking for a React Native Developer, an individual with experience in cross-platform app development for Android and iOS platforms, that has a good understanding & hands-on in implementing unit tests frameworks used for mobile app development and collaborating with other team members on agile development teams",
          "*You must be legally authorized to work in the United States without the need for employer sponsorship, now or at any time in the future**",
          "A minimum of 6+ years of React Native Experience is required",
          "Should have strong experience in React-Native-CLI, Redux, Middleware",
          "Should have hands-on experience with React Native applications",
          "Should also have experience in JavaScript ES6, ReactNative Stylesheet",
          "Should have experience in managing onsite & offshore team",
          "Experience in iOS and Android App store releases - Good to Have",
          "Has a highly collaborative working style",
          "Designing phenomenal software is vital to success in the digital economy—and we understand that a human-centric approach is key to this design"
        ],
        "Responsibilities": [
          "Should build Mobile applications using React Native",
          "Work with Scrum Masters/Product Owners to understand the business needs",
          "Should be able to design the UI of the mobile applications using wireframes and mocks",
          "Should be able to call out risks or ask for immediate help when information is inadequate or if stuck",
          "Should work with Backend developers, integration engineers, and QA folks on regular basis to ensure the designs are integrated and tested",
          "Should be able to deploy apps in respective app stores (if needed)",
          "Should participate in all Scrum ceremonies and provide valuable feedback for optimizing delivery and process improvements",
          "Work in a team environment",
          "Mentor and coach, the team members",
          "Strong communication skills and participate actively in discussions with business stakeholders and the team members"
        ],
        "Benefits": [
          "The Salary rate for this position is between $89K – 130K, depending on the experience and other qualifications of the successful candidate",
          "This position is also eligible for Cognizant’s discretionary annual incentive program, based on performance and subject to the terms of Cognizant’s applicable plans",
          "Medical/Dental/Vision/Life Insurance",
          "Paid holidays plus Paid Time Off",
          "401(k) plan and contributions",
          "Long-term/Short-term Disability",
          "Paid Parental Leave",
          "Employee Stock Purchase Plan",
          "You will have access to hundreds of technical training to keep your skillsets fresh and have opportunities to acquire certifications in the newest technologies"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Extend Information Systems Inc.",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOSK255X2-kDEDQwIAhqbXdSrPX_29Xs4WaYT&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "LinkedIn",
      "job_id": "VtSifxJSRM8AAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "React Native Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/react-native-developer-at-extend-information-systems-inc-3342189768",
      "job_description": "Location : Plano, TX (Hybrid) (2 day in week)\n\nLong term\n\n8+ Year required\n\nJob Posting JD\n• 9+ years of experience on a team developing either: React Native, native Android, or native iOS apps.\n• Designing and writing software technical specifications, writing software code and performing unit testing\n• Applying current technology to solve technical problems and ensuring system and application performance is optimized\n• Working with product teams on new product ideas, designs, prototypes and estimates\n• Maintaining coding standards to facilitate code maintenance and enhancement\n• Providing deep systems support (programming, architecture, system analysis) for the Applications team\n• Documenting processes and development projects\n• Experience on CICD setup\n• Familiarity with SCRUM as a development method for Agile Development\n\nThanks & Regards\n\nShankar Kr Singh\n\nExtend Information Systems\n\nCell: (571) 421-2684 ; Ext. 116\n\nEmail: shankar@extendinfosys.com\n\nAddress: 44355 Premier Plaza UNIT 220, Ashburn, VA, USA - 20147\n\nWeb: WWW.extendinfosys.com",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1667511140,
      "job_posted_at_datetime_utc": "2022-11-03T21:32:20.000Z",
      "job_city": "Plano",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 33.019844,
      "job_longitude": -96.69888,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=VtSifxJSRM8AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-05-02T21:32:22.000Z",
      "job_offer_expiration_timestamp": 1683063142,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 96,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "8+ Year required",
          "9+ years of experience on a team developing either: React Native, native Android, or native iOS apps",
          "Designing and writing software technical specifications, writing software code and performing unit testing",
          "Experience on CICD setup",
          "Familiarity with SCRUM as a development method for Agile Development"
        ],
        "Responsibilities": [
          "Working with product teams on new product ideas, designs, prototypes and estimates",
          "Maintaining coding standards to facilitate code maintenance and enhancement",
          "Providing deep systems support (programming, architecture, system analysis) for the Applications team",
          "Documenting processes and development projects"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "ICS Global Soft, Inc.",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJ_wfHb86EAZlLY1FV94xlZ5YG0U_vJh-dE5L&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Dice",
      "job_id": "NXYtT-VOuE8AAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "ReactJS Developer (Full-Time)",
      "job_apply_link": "https://www.dice.com/job-detail/561e7d0d-23a0-49b5-ab9d-51277ce35c43",
      "job_description": "Requirement: ReactJS Developer\n\nLocation: Dallas Texas (Day 1 Onsite in Hybrid )\n\nFull Time\n\nMust-Have Skills-\n• Minimum 12+ years of experience needed.\n• Candidates must have both React and JavaScript\n• More focused on Coding and basic configuration understanding\n• Front end with CSS and HTML design plus JavaScript\n\nBest Regards\n\nSai Prem\n\nTechnical Recruiter\n\nE-mail:\n\nOffice: (9 7 2) – (9 4 5) – (5 0 5 6)",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679585576,
      "job_posted_at_datetime_utc": "2023-03-23T15:32:56.000Z",
      "job_city": "Dallas",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.776665,
      "job_longitude": -96.79699,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=NXYtT-VOuE8AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-04-23T15:32:56.000Z",
      "job_offer_expiration_timestamp": 1682263976,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 144,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "React",
        "JavaScript",
        "CSS",
        "HTML"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Minimum 12+ years of experience needed",
          "Candidates must have both React and JavaScript",
          "More focused on Coding and basic configuration understanding",
          "Front end with CSS and HTML design plus JavaScript"
        ]
      },
      "job_job_title": null
    },
    {
      "employer_name": "Nucamp",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Xgk99mmtQB3jCzqJtNjF8VE5kCQUrheXML5Y&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "BeBee",
      "job_id": "4d-PNZcBL0sAAAAAAAAAAA==",
      "job_employment_type": "PARTTIME",
      "job_title": "React Native Developer",
      "job_apply_link": "https://us.bebee.com/job/20230319-b5b3f693c6e8b2a6e26e72393b3cc800",
      "job_description": "Nucamp ( (../community/tx/san-antonio)) the #1 Community-based\nCoding Bootcamp is seeking part-time Instructors (TA) specialized in React Native for its Front-End and Full-Stack\nCoding Bootcamps in San Antonio, Texas.\n\nEvery day bring your passion to help students achieve their web development goals. Our business is built upon helping communities succeed;\nyour passion to deliver the best web development learning experience in the classroom is the first prerequisite for teaching with Nucamp.\n\nAs an Instructor for Nucamp, you will look after a classroom of approximately 15 students in a blended environment mixing online and in-person\nexperiences. This is the perfect position for someone interested in community development through education, while supplementing his / her income.\nYou will be supporting adult students of diverse career, educational backgrounds, and cultures learn the awesome world of programming.\n\nNucamp's mission is to offer affordable learning programs for professional adults seeking the skills they need for the career they want. We are\nbringing together local teaching assistants, students and offering great curriculum and pedagogy structure to make it happen.You can play a\nsignificant role in helping your community, while also earning income and enhancing your resume.\n\nYour Responsibilities:\n• During the week, spend 45-60 minutes a day engaging with students, answering their questions and helping with their learning journey while\nthey watch video lectures and perform exercises. This will be done online, at any time, from anywhere.\n• At the end of the week (Saturdays), spend 4 hours delivering in-person workshops. Grade the student's weekly assignments.\n• Keep students motivated to complete their learning journey; be very responsive to individual student needs.\n\nSkills:\n• We're seeking individuals with 1+ year of knowledge in React Native , and knowledge of NodeJS, Express would be a plus.\n• Teaching experience is highly desired.\n• Proof of experience is mandatory.\n\nJob Details:\n• Part-time.\n• Compensation: $1,000 per class (4 weeks).",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1679242368,
      "job_posted_at_datetime_utc": "2023-03-19T16:12:48.000Z",
      "job_city": "San Antonio",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.42519,
      "job_longitude": -98.49459,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+native+developer+in+texas,+usa&htidocid=4d-PNZcBL0sAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-03-26T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1679788800,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Proof of experience is mandatory"
        ],
        "Responsibilities": [
          "bringing together local teaching assistants, students and offering great curriculum and pedagogy structure to make it happen",
          "During the week, spend 45-60 minutes a day engaging with students, answering their questions and helping with their learning journey while",
          "they watch video lectures and perform exercises",
          "At the end of the week (Saturdays), spend 4 hours delivering in-person workshops",
          "Grade the student's weekly assignments",
          "Keep students motivated to complete their learning journey; be very responsive to individual student needs"
        ],
        "Benefits": [
          "You will be supporting adult students of diverse career, educational backgrounds, and cultures learn the awesome world of programming",
          "Compensation: $1,000 per class (4 weeks)"
        ]
      },
      "job_job_title": null
    }
  ]
}