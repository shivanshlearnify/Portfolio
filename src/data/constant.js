import carrental from "../assets/carrental.png"
import freshCart from "../assets/freshcart.jpg"

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind css",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },

      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },

  {
    title: "Explored",
    skills: [
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];

export const projects = [
  {
    id: 3,
    title: "FreshCart",
    date: "",
    description:
      " Fresh Cart offers fresh, quality groceries online with a user-friendly interface, secure payments, and fast delivery, ensuring a convenient shopping experience every time.",
    image:
    freshCart,
    tags: ["React js","Redux", "Tailwind css","Netifly"],
    category: "web app",
    github:
      "https://github.com/shivanshlearnify/Freshcart",
    webapp:
      "https://freshcartvgu.netlify.app/",
  },
  {
    id: 2,
    title: "Urban Drive",
    date: "",
    description:
    " 'urbandrive' simplifies your transportation needs with a diverse fleet of vehicles available for short-term hire. Our intuitive online platform allows quick reservations, flexible pick-up/drop-off options, and transparent pricing. Enjoy convenience and reliability with 'Car Rental' for your next journey.",
    image:
    "https://github.com/shivanshlearnify/carRental/raw/main/image.png",
    tags: ["React js", "Tailwind css","Netifly"],
    category: "web app",
    github:
    "https://github.com/shivanshlearnify/carRental",
    webapp:
    "https://urbandrive.netlify.app/",
  },
  {
    id: 1,
    title: "EmployNext",
    date: "",
    description:
      "Experience real-time weather updates effortlessly with our React JS weather website. Seamlessly crafted using React JS and powered by a reliable weather API",
    image:
      "https://github.com/shivanshlearnify/Weather-app-v2/assets/128142418/46adba46-599a-41b8-a4d5-5a0daf77725d",
    tags: ["React js","Netifly"],
    category: "web app",
    github: "https://github.com/shivanshlearnify/Weather-app-v2",
    webapp: "https://weather-app-v2-nine.vercel.app/",
  },
  {
    id: 1,
    title: "EmployNext",
    date: "",
    description:
    "Employnext: A seamless job portal connecting job seekers and employers for hassle-free hiring and career growth.",
    image:
    "https://private-user-images.githubusercontent.com/128142418/358841294-42106302-a982-44df-b375-4ad9bd2876a4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjM4OTI3NTQsIm5iZiI6MTcyMzg5MjQ1NCwicGF0aCI6Ii8xMjgxNDI0MTgvMzU4ODQxMjk0LTQyMTA2MzAyLWE5ODItNDRkZi1iMzc1LTRhZDliZDI4NzZhNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxN1QxMTAwNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MGI4MWY5ZjY2OGEyYzEwYWE2MWU2OGQ3MzFkMzIwZjFjNTY4ZjFmOTNhMmNkZjExYTdmZjI0MDRlOGY0ZmMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.botcEg6wjxTiInrrxXStOb184bT3apvKHl2xcG3R_YY",
    tags: ["React js", "Tailwind css","Netifly"],
    category: "web app",
    github: "https://github.com/shivanshlearnify/EmployNext",
    webapp: "https://employnext.netlify.app/",
  },
  
];
export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4C0xbdQNGjwaNWjJI6HoQKjkI5QlN0aeskisEqc&usqp=CAE&s",
    school: "Vivekananda Global University, jaipur",
    date: "July 2023 - June 2026",
    grade: "null",
    desc: "I am presently enrolled in the Bachelor of Computer Applications program at Vivekananda Global University in Jaipur.",
  },
];
