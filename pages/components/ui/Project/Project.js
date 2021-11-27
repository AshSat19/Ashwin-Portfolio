import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function Project(props) {
  return (
    <Card
      key={props?.project?.id}
      title={props?.project?.name}
      subTitle={props?.project?.language}
      footer={
        <div>
          <a href={props?.project?.link} target="_blank" rel="noreferrer">
            <Button
              label="GitHub Repo"
              icon="pi pi-github"
              className="p-button-outlined p-button-info"
            />
          </a>
          {props?.project?.view_link ? (
            <a
              href={props?.project?.view_link}
              target="_blank"
              rel="noreferrer"
              className="ml-2"
            >
              <Button label="View" className="p-button-outlined" />
            </a>
          ) : null}
        </div>
      }
      className="p-2"
    >
      <p className="m-0 text-white-alpha-50">{props?.project?.description}</p>
    </Card>
  );
}
