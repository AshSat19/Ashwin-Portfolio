import { Button } from "primereact/button";

export default function Contact() {
  const contactItems = [
    {
      icon: "pi-phone",
      link: "tel:+919961849679",
      label: "Phone: +91 9961849679",
    },
    {
      icon: "pi-envelope",
      link: "mailto:ashwinsathyan19@gmail.com",
      label: "Email: ashwinsathyan19@gmail.com",
    },
    {
      icon: "pi-linkedin",
      link: "https://www.linkedin.com/in/ashwinsathian/",
      label: "Linkedin Profile",
    },
    {
      icon: "pi-github",
      link: "https://github.com/AshSat19",
      label: "Github Profile",
    },
  ];

  return (
    <div className="p-5 w-screen" id="contact">
      <h1 className="text-center">Contact Me</h1>
      <div className="w-full flex align-items-center justify-content-center">
        {contactItems?.map((c) => (
          <a
            key={c.icon}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="m-2"
          >
            <Button
              icon={"pi " + c.icon}
              className="p-button-rounded"
              tooltip={c.label}
              tooltipOptions={{ position: "top" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
