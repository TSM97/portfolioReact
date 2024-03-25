export type dynamicCardsType = {
  url: string;
  title: string;
  id: number;
};

export type textCardsType = {
  title: string;
  text1: string;
  text2: string;
  id: number;
};

export const dynamicCards = [
  {
    url: "/images/JavaScript.webp",
    title: "JavaScript / TypeScript",
    id: 5,
  },
  {
    url: "/images/REACT2.webp",
    title: "React / NextJS",
    id: 4,
  },
  {
    url: "/images/Colors.webp",
    title: "Tailwind / Bootstrap",
    id: 3,
  },
  {
    url: "/images/FramerMotion.webp",
    title: "Framer Motion / ThreeJS",
    id: 2,
  },
  {
    url: "/images/HTML2.webp",
    title: "CSS / HTML",
    id: 1,
  },
];

export const textCards = [
  {
    title: "CSS / HTML",
    text1:
      "CSS allows me to style and design web pages with precision, using selectors, properties, and values to create visually appealing layouts and enhance user experience through responsive design.",
    text2:
      "HTML forms the foundation of every web page I create, providing the structure and semantics necessary for accessibility, SEO, and seamless integration with other technologies, ensuring a solid basis for building engaging and accessible web experiences.",
    id: 1,
  },
  {
    title: "Framer Motion / ThreeJS",
    text1:
      "With Framer Motion, I bring web interfaces to life through fluid animations and intuitive gestures, enhancing user engagement and creating memorable user experiences with minimal effort.",
    text2:
      "Utilizing Three.js, I delve into the world of 3D graphics and immersive web experiences, harnessing the power of WebGL to render stunning visuals and interactive environments that push the boundaries of frontend development.",
    id: 2,
  },
  {
    title: "Tailwind / Bootstrap",
    text1:
      "Tailwind CSS empowers me to design sleek and customized user interfaces with its utility-first approach, allowing for rapid development and easy maintenance by eliminating the need for extensive CSS code.",
    text2:
      "Bootstrap serves as a reliable toolkit for building responsive and professional-looking web applications, providing a plethora of pre-designed components and layout utilities that streamline the development process while ensuring consistency and accessibility.",
    id: 3,
  },
  {
    title: "React / NextJS",
    text1:
      "React, with its component-based architecture and virtual DOM, enables me to develop highly responsive and modular user interfaces, driving engagement and interactivity in web applications.",
    text2:
      "In my projects, I leverage the power of Next.js, a React framework, to build seamless and performant web experiences, with features like server-side rendering and automatic code splitting, enhancing both speed and SEO capabilities.",
    id: 4,
  },
  {
    title: "JavaScript / TypeScript",
    text1:
      "JavaScript serves as the backbone of modern web development, providing the flexibility and extensive library support needed to create captivating user experiences.",
    text2:
      "With TypeScript, I harness the power of static typing to build robust and scalable frontend applications, ensuring code reliability and ease of maintenance throughout the development process.",
    id: 5,
  },
];
