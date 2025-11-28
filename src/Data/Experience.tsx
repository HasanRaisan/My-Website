
type content = {
    id: number;
    title: string;
    date: string;
    body: string;
    courseLink?: string;
    certificateLink?: string;
}
const experienceContentPartOne: content[] = [
  {
    id: 1,
    title: "Basic Fundamentals for Every Programmer - Level I",
    date: "Jun 13, 2023",
    body: "A beginner-friendly course that builds the essential foundation every programmer needs. It introduces core concepts that make learning future programming skills easier and provides a solid starting point for new learners.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1808721",
    certificateLink: "https://drive.google.com/file/d/1WM-Ra01R0OQGXRzyu7zTynNULKEZb53d/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Algorithms and Problem Solving - Level I",
    date: "Jun 13, 2023",
    body: "A simplified introduction to algorithms and problem-solving. The course develops logical and analytical thinking through gradual explanations and practical problems that strengthen sequential and structured thinking.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1810501",
    certificateLink: "https://drive.google.com/file/d/1KHUDle5KnXrEZexEeACLWB9IdHRXyV4_/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Introduction to Programming with C++ - Level I",
    date: "Jun 13, 2023",
    body: "A strong introduction to C++ programming, covering the language basics and advanced concepts with many practical exercises. It builds a solid foundation and helps learners quickly progress in programming.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1811421",
    certificateLink: "https://drive.google.com/file/d/1KHUDle5KnXrEZexEeACLWB9IdHRXyV4_/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Algorithms & Problem-Solving Level 1 Solutions",
    date: "May 20, 2023",
    body: "Advanced solutions to the challenges from the first algorithms course. It deepens understanding of problem-solving techniques through real-world examples and exposes learners to advanced programming patterns.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1811450",
    certificateLink: "https://drive.google.com/file/d/1Db5sN7_2yl7O_bGpT1F0PrKTV95NwlwV/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Algorithms and Problem Solving - Level II",
    date: "Mar 04, 2023",
    body: "A collection of 50 problems arranged by difficulty, using advanced techniques like Dynamic Programming and Divide and Conquer. Each problem is designed to build strong, efficient problem-solving skills.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1811531",
    certificateLink: "https://drive.google.com/file/d/1G2mXY32T2dppZ3UKCyQtA11PWZ7QKWPY/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Introduction to Programming with C++ - Level II",
    date: "Mar 26, 2023",
    body: "An advanced C++ course that explores deeper programming concepts, data handling methods, and algorithm design techniques. It strengthens programming skills and prepares learners to build more complex applications.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1827205",
    certificateLink: "https://drive.google.com/file/d/1kMZeUHr9voe8NJO2g6nc8p9W8OM4BGgM/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Algorithms and Problem Solving - Level III",
    date: "Apr 21, 2023",
    body: "A set of 51 structured problems with increasing difficulty, using advanced techniques like Dynamic Programming and Divide and Conquer. Each problem contributes to improving high-level problem-solving efficiency.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1869980",
    certificateLink: "https://drive.google.com/file/d/1du2te4ByJpyD39f9-5pQN7Xw8QUKaHmj/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Algorithms and Problem Solving - Level IV",
    date: "May 10, 2023",
    body: "Includes 65 problems arranged by difficulty, applying advanced methods like Dynamic Programming and Divide and Conquer to strengthen problem-solving skills. Each problem reflects real-world efficiency challenges.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1890122",
    certificateLink: "https://drive.google.com/file/d/1VqoVgeYTCBybRtc8NuvMjKc0zbfWLseS/view?usp=drive_link"
  },
  {
    id: 9,
    title: "Basic Fundamentals for Every Programmer - Level II",
    date: "May 01, 2025",
    body: "A deeper overview of core programming concepts, principles, and terminology. It strengthens understanding of how software works and how systems interact, forming a strong base for advanced learning.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1913013",
    certificateLink: "https://drive.google.com/file/d/1vmINDAYB-QmXmOG6uukpki9sCkDaNgGB/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Object-Oriented Programming (OOP)",
    date: "Jun 07, 2023",
    body: "A complete introduction to Object-Oriented Programming concepts in a practical, simplified way. It helps you apply OOP principles efficiently in real projects and improves productivity and code quality.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1936515",
    certificateLink: "https://drive.google.com/file/d/1X3pQcKvMIFsrMzzoMXg9rwG8UQCGa4O2/view?usp=drive_link"
  },
  {
    id: 11,
    title: "Applications of Object-Oriented Programming (OOP)",
    date: "Jun 23, 2023",
    body: "An applied course focused on reinforcing OOP concepts through practical implementations. It strengthens your understanding and ensures you gain hands-on experience with real programming applications.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1960017",
    certificateLink: "https://drive.google.com/file/d/10WKtc50e2wuza927aFQwbwXabluGgruq/view?usp=drive_link"
  },
  {
    id: 12,
    title: "Data Structures - Level I",
    date: "Jul 08, 2023",
    body: "An introduction to essential data structures and how they improve performance, scalability, and efficient data management. Mastering these concepts enables solving complex problems and optimizing applications.",
    courseLink: "https://programmingadvices.com/courses/enrolled/1973103",
    certificateLink: "https://drive.google.com/file/d/12z8J_8NZztvT9tG7_Lloer_QMFeFduQ4/view?usp=drive_link"
  },
  {
    id: 13,
    title: "Algorithms and Problem Solving - Level V",
    date: "Jul 20, 2023",
    body: "Eight applied projects in data structures that strengthen practical skills and deepen understanding of how data is stored and organized. These projects improve problem-solving and software design abilities.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2001432",
    certificateLink: "https://drive.google.com/file/d/1Iy7d5Ax3cVLDKiVUTVCbPTd9NQz-gF5q/view?usp=drive_link"
  }
];


const experienceContentPartTwo: content[] = [
  {
    id: 1,
    title: "Programming with C# - Level 1",
    date: "Aug 14, 2023",
    body: "An introduction to C#, one of the most widely used languages for building desktop, mobile, and web applications. You’ll learn the fundamentals and begin creating Windows Forms apps, gaining a strong foundation in modern programming.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2012538",
    certificateLink: "https://drive.google.com/file/d/1CtfhBOEEoMDxUe2Jx2S3mlTJFzpK1VVl/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Databases Level 1 using SQL Server",
    date: "Nov 01, 2023",
    body: "A complete introduction to databases and SQL Server. You’ll learn how databases work, how to write SQL queries, and how to apply concepts through hands-on practice, building strong foundations for efficient data handling.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2040664",
    certificateLink: "https://drive.google.com/file/d/1upMIMO10Yf8_fErtiGCgDL72d0moRmOJ/view?usp=drive_link"
  },
  {
    id: 3,
    title: "OOP As It Should Be In C#",
    date: "Jun 16, 2024",
    body: "A practical approach to learning Object-Oriented Programming in C#. You’ll gain a deep understanding of OOP concepts and learn how to apply them effectively in real projects, improving your productivity and code quality.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2057756",
    certificateLink: "https://drive.google.com/file/d/1XqWSGmZS4ECWeVcSgfBCb-D5leuNlZJx/view?usp=drive_link"
  },
  {
    id: 4,
    title: "Database - SQL (Projects & Practice)",
    date: "Aug 19, 2024",
    body: "A practical SQL course with 5 real projects and 54 query problems. It builds strong hands-on experience, deepens understanding of database concepts, and improves problem-solving skills for real-world data scenarios.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2076120",
    certificateLink: "https://drive.google.com/file/d/1wvRXNxoqfTEsw9xwa5H_TEVKNz1vDWyP/view?usp=drive_link"
  },
  {
    id: 5,
    title: "C# & Database Connectivity",
    date: "Oct 23, 2024",
    body: "A course focused on connecting C# applications with databases using ADO.NET. You’ll learn how to manage connections, run queries, update data, and build efficient applications that interact seamlessly with databases.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2100316",
    certificateLink: "https://drive.google.com/file/d/1_TMC3obD8Wg5GraV52u0bpc5iPjEx4v8/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Full Real Project",
    date: "Jan 19, 2025",
    body: "A complete real-world software project where you apply all previously learned programming concepts. This course strengthens practical problem-solving skills and teaches how to implement theoretical knowledge in real applications.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2139586",
    certificateLink: "https://drive.google.com/file/d/1uHYIlC1YC76qZg7Bb9PlS0fSjFRbVxZa/view?usp=drive_link"
  },
  {
    id: 7,
    title: "C# Programming Level 2",
    date: "May 01, 2025",
    body: "An advanced C# course covering modern techniques and best practices for writing efficient, reusable, and scalable code. You’ll explore advanced concepts used across many languages, improving your ability to build complex software.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2299021",
    certificateLink: "https://drive.google.com/file/d/17SSMQA0HUxila554AearZn1JiNspvKe6/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Database Level 2 - Concepts & T-SQL",
    date: "Apr 28, 2025",
    body: "A deeper dive into databases and T-SQL. You will learn advanced querying, performance concepts, and essential techniques for efficient data handling—skills necessary for nearly all modern software systems.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2409302",
    certificateLink: "https://drive.google.com/file/d/1MqCP8j7iL9HNHz1-6DQtdH923MKYA43C/view?usp=drive_link"
  },
  {
    id: 9,
    title: "Data Structures Level 2 in C#",
    date: "Aug 08, 2025",
    body: "An advanced data structures course focusing on improving storage efficiency and algorithmic performance. You’ll gain practical experience with complex structures and learn how to apply them to solve challenging problems.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2444236",
    certificateLink: "https://drive.google.com/file/d/1vzDRCbb4g4P3d0C01tSX_cLgDsR8dabS/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Algorithms Level 6",
    date: "current",
    body: "An advanced algorithms course designed for programmers seeking deep expertise in complex problem-solving. It focuses on high-level techniques and real-world applications, preparing you for competitions and professional excellence.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2460625",
    certificateLink: ""
  },
  {
    id: 11,
    title: "Windows Services",
    date: "Nov 11, 2025",
    body: "A course on building and managing Windows Services to automate tasks, enhance system performance, and improve reliability. These skills are valuable in administration, engineering, cybersecurity, and enterprise system management.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2662580",
    certificateLink: "https://drive.google.com/file/d/1iDjT3W07TCjUUmnuXB8I-1Sga7aTWbYe/view?usp=drive_link"
  }
];


const experienceContentPartThree: content[] = [
  {
    id: 1,
    title: "Introduction to RESTful API",
    date: "Jun 21, 2025",
    body: "A practical intro to APIs and REST. Learn API concepts, REST principles, building endpoints with ASP.NET Core, CRUD operations, and how APIs integrate with different systems. A solid foundation for understanding and creating RESTful APIs.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2537475",
    certificateLink: "https://drive.google.com/file/d/1n3L9i1hlunj8Ytn2YSXJkiGFCi86Ep6s/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Entity Framework Core",
    date: "Sep 11, 2025",
    body: "Learn how to work with databases using EF Core: modeling, migrations, relationships, CRUD, LINQ, tracking, loading techniques, transactions, and building real database-driven applications.",
    courseLink: "https://youtube.com/playlist?list=PLqPejUavRNTVSVQ5k3UUMgj3RP8Qczwve&si=DXDwB2RTw2P4gZ4M",
    certificateLink: ""
  },
  {
    id: 3,
    title: "REST & RESTful API With ASP .NET Core",
    date: "Oct 01, 2025",
    body: "Hands-on REST API course using ASP.NET Core. Covers REST, HTTP, Swagger, CRUD, EF Core integration, Postman, file uploads, CQRS, Repository, Mediator, DTOs, eager/lazy loading, and securing APIs with Identity and JWT.",
    courseLink: "https://youtube.com/playlist?list=PLqPejUavRNTUbBmD6zRNRIHfEeSuUK53H&si=a6bbZQL-2uo8_kUj",
    certificateLink: ""
  },
  {
    id: 4,
    title: "Solid Principles",
    date: "Oct 12, 2025",
    body: "A deep dive into SOLID principles to build scalable, maintainable, and well-structured software. Learn practical applications, improve code quality, avoid design issues, and strengthen your OOP and architectural skills.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2632459",
    certificateLink: "https://drive.google.com/file/d/1FzbVt5OeHwgU1yIXZti-UZx9ojXcPZmK/view?usp=drive_link"
  },
  {
    id: 5,
    title: "ASP .NET Core",
    date: "Oct 20, 2025",
    body: "Another ASP.NET Core course covering project structure, dependency injection, CRUD, middleware, filters, configuration, logging, model binding, authentication, authorization, and role-based permissions.",
    courseLink: "https://youtube.com/playlist?list=PLsV97AQt78NQ8E7cEqovH0zLYRJgJahGh&si=_7AzGorl_mocEzs-",
    certificateLink: ""
  }
];


const experienceContentPartFour: content[] = [
  {
    id: 1,
    title: "HTML - Deep Dive",
    date: "Mar 25, 2025",
    body:
      "A deep dive into HTML covering core elements, clean structure, browser rendering, and best practices. Builds strong foundational knowledge with practical insights for writing optimized, maintainable HTML.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2628701",
    certificateLink:
      "https://drive.google.com/file/d/1dQx9MChUZPtpHIITHxQO9w8Nc9_yThnC/view?usp=drive_link",
  },
  {
    id: 2,
    title: "CSS Foundations Deep Dive",
    date: "Aug 23, 2025",
    body:
      "A comprehensive CSS foundation course covering syntax, core styling concepts, clean code practices, and real-world design. Builds strong understanding of rules, colors, text, layouts, and structured styling.",
    courseLink: "https://programmingadvices.com/courses/enrolled/2756661",
    certificateLink:
      "https://drive.google.com/file/d/1gfZEoDnYh0HLmxXJkE4h6IjegvzGEo1f/view?usp=drive_link",
  },
  {
    id: 3,
    title: "JavaScript",
    date: "Sep 02, 2025",
    body:
      "A practical JavaScript course focusing on the DOM, events, forms, selectors, browser APIs, and interacting with HTML/CSS. Covers how JS manipulates content, styles, and user interactions in real web pages.",
    courseLink:
      "https://youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&si=Fl4RtiFjDVCnpqzt",
    certificateLink: "",
  },
  {
    id: 4,
    title: "BootStrap",
    date: "Sep 30, 2025",
    body:
      "A Bootstrap course teaching responsive design, grid system, components, utilities, forms, navbars, cards, and layout building. Focuses on creating modern, mobile-friendly UIs quickly and professionally.",
    courseLink:
      "https://youtube.com/playlist?list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ&si=zhYXJJuNMTFhEAKH",
    certificateLink: "",
  },
  {
    id: 5,
    title: "TypeScript",
    date: "Oct 12, 2025",
    body:
      "Covers TypeScript syntax, types, arrays, functions, enums, interfaces, classes, inheritance, generics, unions, and structure of scalable typed applications. Builds strong skills for writing safe, maintainable code.",
    courseLink:
      "https://youtube.com/playlist?list=PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ&si=ixHjuM9XUH1LPQAo",
    certificateLink: "",
  },
  {
    id: 6,
    title: "React",
    date: "Current",
    body:
      "A full React course covering JSX, components, props, state, lists, forms, hooks, context, routing, UI frameworks, and building real apps. Learned how to structure projects and manage data flow effectively.",
    courseLink:
      "https://youtube.com/playlist?list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&si=02DoHnRvmdnZXK5K",
    certificateLink: "",
  },
];



export type Experience = {
  id: number;
  title: string;
  dateRange: string;
  body: string;
  content: content[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Foundational Mastery in Programming",
    dateRange: "Jan 2022 - Feb 2023",
    body: `This phase builds a solid programming core, starting with Basic Fundamentals and progressing through an intensive, multi-level study of Algorithms and Problem Solving. It provides practical instruction in C++ (Levels I & II), followed by mastery of Object-Oriented Programming (OOP), its applications, and essential Data Structures (Level I). This segment establishes the critical logical and computational skills needed for advanced development. From <a href="https://programmingadvices.com" target="_blank" rel="noopener noreferrer" class="text-accent-purple hover:text-primary transition-colors">ProgrammingAdvices.com</a>.`,
    content: experienceContentPartOne
  },
  {
    id: 2,
    title: "The C# & Database Deep Dive",
    dateRange: "Feb 2023 - Aug 2024",
    body: `This segment focuses on applied, in-demand skills using the C# language and Database Management. It covers C# fundamentals, desktop development (Windows Forms), and deep dives into SQL Server (Levels 1 &amp; 2 - T-SQL). Key concepts include advanced OOP in C#, connecting applications to databases (ADO.NET), and executing a comprehensive real-world project. The section concludes with advanced C# topics, Data Structures Level 2, high-level Algorithms Level 6, and Windows Services. From <a href="https://programmingadvices.com" target="_blank" rel="noopener noreferrer" class="text-accent-purple hover:text-primary transition-colors">ProgrammingAdvices.com</a>.`,
    content: experienceContentPartTwo
  },
    {
    id: 3,
    title: "Back-End Development with .NET Core (API Focus)",
    dateRange: "Aug 2024 - Current",
    body: "This part focuses on professional Back-End Development using the modern .NET Core framework. It emphasizes building robust services through mastery of RESTful APIs, efficient data management using Entity Framework Core, and implementation of professional standards like Clean Architecture. Crucial security elements, including Authorization and Authentication, are also covered.",
    content: experienceContentPartThree
  },
    {
    id: 4,
    title: "Front-End Web Development & React",
    dateRange: "Aug 2025 - Current",
    body: "This segment covers the essential skills for building engaging user interfaces. It grounds the learning in the core web technologies: HTML, CSS, and JavaScript, enhanced by Bootstrap. The progression includes using TypeScript for scalable code and mastering the React JS framework to create modern, interactive, and high-performance Front-End web applications.",
    content: experienceContentPartFour
  }
];
