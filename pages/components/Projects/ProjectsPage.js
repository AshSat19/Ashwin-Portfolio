import { Fragment } from "react";
import Project from "../ui/Project/Project";

import { ScrollTop } from "primereact/scrolltop";

export default function ProjectsPage() {
  const projects = [
    {
      id: 231838376,
      name: "API Sandbox",
      link: "https://github.com/AshSat19/apiSandbox",
      description:
        "A REST API interrogation app developed using Angular. It allows users to test endpoints, and re-test previosly checked endpoints which are stored automatically in the browser's IndexedDB",
      language: "TypeScript",
    },
    {
      id: 253684186,
      name: "Appointly v1.0 - API",
      link: "https://github.com/AshSat19/appointly-backend",
      description:
        "A Node.js application that serves as API server for Appintly, an app that allows users to give out a public URL that allows people to book appointments with them",
      language: "JavaScript",
    },
    {
      id: 253684586,
      name: "Appointly v1.0 - Client",
      link: "https://github.com/AshSat19/appointly-client",
      description:
        "An Angular application that allows users to give out a public URL that allows people to book appointments with them",
      language: "TypeScript",
    },
    {
      id: 271733098,
      name: "Bing Distance Matrix",
      link: "https://github.com/AshSat19/bing-distance-matrix",
      view_link: "https://www.npmjs.com/package/bing-distance-matrix",
      description:
        "A wrapper NPM package that lets developers consume Microsoft's Bing Distance Matrix API easily",
      language: "JavaScript",
    },
    {
      id: 336634340,
      name: "Personality Quiz",
      link: "https://github.com/AshSat19/flutter_101_personality_quiz",
      description:
        "A basic personality quiz app developed yusing Flutter as a starter project",
      language: "Dart",
    },
    {
      id: 215970976,
      name: "pyChain",
      link: "https://github.com/AshSat19/pyChain",
      description:
        "Developed as part of learning Python 3, the application explores basic concepts of Blockchains and Crypto",
      language: "Python",
    },
    {
      id: 423092294,
      name: "Portfolio Website",
      link: "https://github.com/AshSat19/sathyan-next",
      view_link: "https://www.npmjs.com/package/bing-distance-matrix",
      description: "A portfolio website using Next.js",
      language: "JavaScript",
    },
    {
      id: 186603712,
      name: "Typester",
      html_url: "https://github.com/AshSat19/typester",
      description:
        "A simple game that measures players' typing speed and accurancy, developed using Angular",
      language: "TypeScript",
    },
    {
      id: 177764592,
      name: "Simple Calculator",
      link: "https://github.com/AshSat19/angularCalc",
      description: "A Simple, basic calculator app made on Angular",
      language: "TypeScript",
    },
  ];

  return (
    <Fragment>
      <div className="p-5 w-screen" id="experience">
        <h1 className="text-center">Featured Projects</h1>
        <div className="grid m-4">
          {projects.map((p) => (
            <div key={p.id} className="col-12 md:col-6 lg:col-4">
              <Project project={p}></Project>
            </div>
          ))}
        </div>
      </div>

      <ScrollTop threshold={100} />
    </Fragment>
  );
}
