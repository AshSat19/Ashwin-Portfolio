import moment from "moment";
import classes from "./Skills.module.css";

import { Carousel } from "primereact/carousel";

export default function Skills() {
  const topSkills = [
    {
      skill: "Angular",
      image: "./static/skill-images/angular.png",
      from: "20180801",
    },
    {
      skill: "Node.js",
      image: "./static/skill-images/node.png",
      from: "20180801",
    },
    {
      skill: "MongoDB",
      image: "./static/skill-images/mongo.png",
      from: "20180801",
    },
    {
      skill: "Nest.js",
      image: "./static/skill-images/nest.png",
      from: "20180801",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const topSkillTemplate = (t) => (
    <div key={t.skill} className={classes.topSkillCard}>
      <img src={t.image} alt={t.skill} className={classes.topSkillImg} />
      <h3 className="text-center line-height-1 m-2">{t.skill}</h3>
      <h4 className="text-center line-height-1 m-0 text-white-alpha-50">
        {moment(t.from, "YYYYMMDD").toNow(true)}
      </h4>
    </div>
  );

  return (
    <div className="p-5 w-screen" id="skills">
      <h1 className="text-center">Top Skills</h1>
      <Carousel
        value={topSkills}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={topSkillTemplate}
      />
    </div>
  );
}
