import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

import classes from "./Experience.module.css";

export default function Experience() {
  const experienceItems = [
    {
      position: "Full Stack Developer",
      company: "penny Software",
      duration: "July 2020 - Present",
      description:
        "Part of a team that's building a SaaS platform for simplifying B2B procurement as well as a B2B marketplace. Day-to-day responsibilities include maintaining as well as planning and developing new features for the applications, end-to-end across the stack.",
    },
    {
      position: "Sr. Full Stack Developer",
      company: "Manaraah",
      duration: "Jan 2020 - Jun 2020",
      description:
        "Lead a team that built various Web Applications for multiple clients and proprietary products. Day-to-day responsibilities included end-to-end planning and development of the applications, interacting with clients/business team and mentoring interns.",
    },
    {
      position: "Software Development Engineer",
      company: "WeCP",
      duration: "Feb 2019 - Jan 2020",
      description:
        "Part of a team that developed and maintained a hiring assessment SaaS product and one that helps users learn API/SDK integration with modern frontend frameworks. Responsibilities also included selecting and grooming developer interns, as well as interacting with business partners.",
    },
    {
      position: "Jr. Programmer",
      company: "Reubro International",
      duration: "Aug 2018 - Jan 2019",
      description:
        "Entry-level full-stack developer, responsible for individual projects as well as teams that developed and maintained the firm's flagship products of the time.",
    },
  ];
  const experienceCard = (e) => {
    return (
      <Card
        key={e.company}
        title={e.position}
        subTitle={e.company + " | " + e.duration}
      >
        <p className="m-0 text-white-alpha-50">{e.description}</p>
      </Card>
    );
  };

  return (
    <div className="p-5 w-screen" id="experience">
      <h1 className="text-center">Experience</h1>
      <Timeline
        value={experienceItems}
        align="alternate"
        content={experienceCard}
        className={classes.expTimeline}
      />
      <div className={classes.expAccordion}>
        {experienceItems?.map((e) => experienceCard(e))}
      </div>
    </div>
  );
}
