import { SiJavascript, SiFirebase, SiGit , SiFigma, SiBootstrap, SiMongodb, SiVisualstudio, SiDotnet} from "react-icons/si";

export const Skills = [
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "Java Script",
    Description: () => <>I usually code using Java Script.</>,
  },
  {
    slug: "figma",
    Component: SiFigma,
    title: "Figma",
    Description: () => <>When designing I use Figma for the conftability and easiness . </>,
  },
  {
    slug: "bootstrap",
    Component: SiBootstrap,
    title: "BootStrap Studio",
    Description: () => <>For Web Development designing I prefer to use BootStrap.</>,
  },
  {
    slug: "mongodb",
    Component: SiMongodb,
    title: "Mongobd",
    Description: () => <>I have used mongodb for various purposes in Database.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "visual studio code",
    Component: SiVisualstudio,
    title: "Visual Studio",
    Description: () => <>I use Visual Studio as my editor.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
  {
    slug: ".net",
    Component: SiDotnet,
    title: ".NET",
    Description: () => <>When building Management System I opt to use Visual Basic.</>,
  },
];
