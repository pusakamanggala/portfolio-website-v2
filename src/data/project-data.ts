type ProjectData = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link?: {
    href: string;
    name: string;
  }[];
};

export const projectData: ProjectData[] = [
  {
    title: "Adaptive Network Laboratory Dashboard",
    description:
      "Microservices-based platform I developed with Telkom University's Adaptive Network Lab, streamlining research, lab operations, and equipment management. It features CI/CD pipelines, private cloud deployment, and self-service Kubernetes integration—allowing efficient lab management and automation.",
    image: "/images/project/an-dashboard.png",
    stack: ["React", "JavaScript", "Tailwind", "Vite"],
    link: [
      {
        href: "https://www.linkedin.com/posts/annasik_hi-linkedin-kali-ini-saya-ingin-sharing-activity-7130241438054785024-XYLH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADRsvrEBXXghxqw0Rytyf1y9qk4zbB3TMsU",
        name: "Demo",
      },
    ],
  },
  {
    title: "Satisfaction Survey Website",
    description:
      "Student satisfaction survey website, lecturers, and tracer study is a website that serves to collect responses or feedback from students, lecturers, and alumni for the purposes of evaluating the quality of education. This website is a case study of UIN Malang Mathematics study program and as my final project at S1 Computer Engineering Telkom University.",
    image: "/images/project/survey-website.png",
    stack: ["React", "JavaScript", "Tailwind", "Chart.js"],
    link: [
      {
        href: "https://repositori.telkomuniversity.ac.id/pustaka/202584/aplikasi-survei-kepuasan-mahasiswa-dosen-dan-tracer-study-berbasis-website-studi-kasus-prodi-matematika-uin-malang-wrap-entrepreneurship-capstone-.html",
        name: "Thesis",
      },
    ],
  },
  {
    title: "Echo | Spotify App Clone",
    description:
      "Echo is a web application that allows users to explore tracks, artists, playlists, albums, and more from the Spotify music catalog. It utilizes the Spotify Web API for developers to provide a seamless music exploration experience. Users can search for their favorite songs, discover new artists, playlists, and albums.",
    image: "/images/project/echo.png",
    stack: ["React", "JavaScript", "Tailwind", "Vite"],
    link: [
      {
        href: "https://echo-spotify-clone.netlify.app/",
        name: "Live Site",
      },
      {
        href: "https://github.com/pusakamanggala/echo-music-app",
        name: "GitHub",
      },
      {
        href: "https://youtu.be/8Vb7kPkncHA",
        name: "Youtube",
      },
    ],
  },
  {
    title: "Marketing Landing Page",
    description:
      "A clean and modern landing page for marketing like crypto-related services, built using Next.js, React, and TypeScript. It includes smooth animations and eye-catching visuals to make the content more engaging. The design uses Tailwind CSS for easy styling and works well on all devices—whether it's a phone, tablet, or desktop. This page is a good starting point if you want to promote a crypto app, service, or product, and it's easy to adjust and customize to fit your needs.",
    image: "/images/project/mrboo.png",
    stack: ["React", "TypeScript", "Tailwind", "Next.js"],
    link: [
      {
        href: "https://mr-boo-next.vercel.app/",
        name: "Demo Site",
      },
    ],
  },
  {
    title: "24 Games",
    description:
      "A math card game where you use four or six cards in your deck. Find the value of 24 in your card combination. The rules of the game is simple, you have to use matematical calculations based on the value of the cards in your deck. The goal is to get the value to 24. You can use simple mathematical operations ( x - + ÷ ), but remember to use them according to the rules of mathematical operations.",
    image: "/images/project/24-game.png",
    stack: ["React", "JavaScript", "Tailwind", "Vite"],
    link: [
      {
        href: "https://dua-opat.vercel.app/",
        name: "Live Site",
      },
      {
        href: "https://github.com/pusakamanggala/24-game-web-app",
        name: "GitHub",
      },
      {
        href: "https://www.youtube.com/watch?v=pxwHfVRxn7I",
        name: "Youtube",
      },
    ],
  },
];
