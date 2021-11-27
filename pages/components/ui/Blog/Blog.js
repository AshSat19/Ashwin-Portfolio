import { Card } from "primereact/card";
import { Button } from "primereact/button";

import classes from "./Blog.module.css";
import { Fragment } from "react";

export default function Blog(props) {
  return (
    <Fragment>
      <div className={classes.bigView}>
        <Card className="p-2 w-full m-2">
          <div className="flex align-items-center p-2 w-full">
            <img
              alt={props?.blog?.title}
              src={props?.blog?.image}
              onError={(e) =>
                (e.target.src =
                  "https://miro.medium.com/max/2000/1*jfdwtvU6V6g99q3G7gq7dQ.png")
              }
              className={classes.listImg}
            />
            <div className={classes.listDetail}>
              <h2 className="text-left">{props?.blog?.title}</h2>
              <h3 className="m-0 text-white-alpha-50">
                {props?.blog?.excerpt}
              </h3>

              <a
                href={props?.blog?.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3"
              >
                <Button
                  label="Read Now"
                  className="p-button-outlined p-button-info"
                />
              </a>
            </div>
          </div>
        </Card>
      </div>

      <div className={classes.smallView}>
        <Card
          title={props?.blog?.title}
          header={
            <img
              alt={props?.blog?.title}
              src={props?.blog?.image}
              onError={(e) =>
                (e.target.src =
                  "https://miro.medium.com/max/2000/1*jfdwtvU6V6g99q3G7gq7dQ.png")
              }
              className="w-full h-auto"
            />
          }
          footer={
            <a href={props?.blog?.link} target="_blank" rel="noreferrer">
              <Button
                label="Read Now"
                className="p-button-outlined p-button-info"
              />
            </a>
          }
          className="p-1 m-1"
        >
          <p className="m-0 text-white-alpha-50">{props?.blog?.excerpt}</p>
        </Card>
      </div>
    </Fragment>
  );
}
