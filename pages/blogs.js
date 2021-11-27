import { Fragment } from "react";
import Head from "next/head";
import BlogsPage from "./components/BlogsPage/BlogsPage";

export default function Blogs() {
  return (
    <Fragment>
      <Head>
        <title>Blogs - Ashwin Sathian | Web Application Developer</title>
        <meta
          name="description"
          content="I'm a Web Application Developer based out of India. I work primarily on the MEAN Stack. Here, you can find my profile and portfolio"
        />
        <meta
          name="keywords"
          content="ashwin,sathian,sathyan,developer,mean,mean stack,full stack developer,web application developer,angular,node,blog,blogger,medium,mongodb,nosql,javascript,typescript"
        />

        {/* Link Preview Metadata for Facebook */}
        <meta
          property="og:url"
          content="https://ashwinsathian-4d992.web.app/blogs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blogs - Ashwin Sathian | Web Application Developer"
        />
        <meta
          property="og:description"
          content="I'm a Web Application Developer based out of India. I work primarily on the MEAN Stack. Here, you can find my profile and portfolio"
        />
        <meta property="og:image" content="./static/Preview.png" />
        <meta
          property="og:image:alt"
          content="Blogs - Ashwin Sathian | Web Application Developer"
        />
        <meta property="og:image:type" content="img/jpg" />

        <link rel="icon" type="image/png" href="./icon.png" />

        {/* Google Font links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BlogsPage></BlogsPage>;
    </Fragment>
  );
}
