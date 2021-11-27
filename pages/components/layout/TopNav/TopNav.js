import Link from "next/link";

import { Sidebar } from "primereact/sidebar";
import { Fragment, useState } from "react";
import { Button } from "primereact/button";

import classes from "./TopNav.module.css";

export default function TopNav() {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Skills",
      route: "/#skills",
    },
    {
      label: "Experience",
      route: "/#experience",
    },
    {
      label: "Projects",
      route: "/projects",
    },
    {
      label: "Blogs",
      route: "/blogs",
    },
    {
      label: "Contact Me",
      route: "/#contact",
    },
  ];

  return (
    <Fragment>
      <div
        className={classes.header}
        style={{
          position: "sticky",
          top: "0",
          zIndex: "999",
          marginBottom: "0",
        }}
      >
        <div className={classes.smallNav}>
          <i
            className="pi pi-bars cursor-pointer"
            onClick={() => setShowNav(true)}
            style={{ fontSize: "1.5rem" }}
          ></i>
        </div>
        <div className={classes.bigNav}>
          {navItems.map((n) => (
            <Link key={n.route} href={n.route}>
              <h3 className="mr-3 cursor-pointer">{n.label}</h3>
            </Link>
          ))}
          <a
            href="./static/Resume - Ashwin Sathian.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            <Button
              icon="pi pi-download"
              label="Download Resume"
              className="p-button-outlined"
            />
          </a>
        </div>
      </div>

      <Sidebar
        visible={showNav}
        onHide={() => setShowNav(false)}
        style={{ width: "60vw" }}
      >
        {navItems.map((n) => (
          <Link key={n.route} href={n.route}>
            <h3
              className="mr-3 cursor-pointer"
              onClick={() => setShowNav(false)}
            >
              {n.label}
            </h3>
          </Link>
        ))}
        <a
          href="./static/Resume - Ashwin Sathian.pdf"
          download
          target="_blank"
          rel="noreferrer"
        >
          <Button
            icon="pi pi-download"
            label="Download Resume"
            className="p-button-outlined"
          />
        </a>
      </Sidebar>
    </Fragment>
  );
}
