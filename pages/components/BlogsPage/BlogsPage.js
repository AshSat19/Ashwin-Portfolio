import { Fragment } from "react";
import Blog from "../ui/Blog/Blog";

import { ScrollTop } from "primereact/scrolltop";

export default function BlogsPage() {
  const blogs = [
    {
      title: "Is it the end of the road for Hackintosh?",
      link: "https://ashwinsathian19.medium.com/is-it-the-end-of-the-road-for-hackintosh-dd924b800d3c",
      image: "https://miro.medium.com/max/1400/1*M2TBf18UkHWD3juW7S4Vsw.jpeg",
      excerpt:
        "For the longest time since the Apple II dropped decades ago, Apple has been a champion of the ‘closed environment school of thought; i.e. the customisation and tooling options for Apple products — hardware and software, are limited to what Apple ships...",
    },
    {
      title: "Dynamic Theming using Angular Material",
      link: "https://levelup.gitconnected.com/dynamic-theming-using-angular-material-c0b7dc7a12d4",
      image: "https://miro.medium.com/max/1400/1*stOukK_jMBWA84pcesjWMg.jpeg",
      excerpt:
        "A while back, I was working on a project that used Angular for the UI and Angular Material for the UI components. And that got me thinking — what if I could allow the user to choose a light or dark theme for the application?",
    },
    {
      title: "Shorter import paths in Angular",
      link: "https://levelup.gitconnected.com/shorter-import-paths-in-angular-8141734090e4",
      image: "https://miro.medium.com/max/1400/1*sw4IeaqAWhbcYPU49fFk0A.png",
      excerpt:
        "Imports in Angular applications can get messy, particularly in ones that have a very nested structure. While a nested project directory structure has many benefits that make it much better than a flat structure, relative and/or absolute import paths in such cases can be agonizingly long...",
    },
    {
      title: "Unsubscribing in Angular, the right way",
      link: "https://levelup.gitconnected.com/unsubscribing-in-angular-the-right-way-6ed82be43ccc",
      image: "https://miro.medium.com/max/1400/1*kh36dX-r9FGmTYhVzC44HQ.png",
      excerpt:
        "Once you get a hold of it, event-driven implementations using RxJS go a long way in making your Angular app dynamic. Even if you’re in your early days of using Angular, it’s highly recommended that you make use of Observables, Subjects, Subscriptions, etc. in your application to get the best...",
    },
    {
      title: "Deploying your Angular app on Firebase using Github Actions",
      link: "https://medium.com/analytics-vidhya/deploying-your-angular-app-on-firebase-using-github-actions-b2167af8e0e6",
      image: "https://miro.medium.com/max/1092/1*D6GQetcniO9h-1bhFadUsg.jpeg",
      excerpt:
        "For any Angular developer, amateur or expert, looking for cheap(or free)hosting solutions for their projects, Firebase Hosting is one of the best solutions you have access to — it’s free and the deployment process is really easy...",
    },
    {
      title: "A Tale of Two Copies",
      link: "https://levelup.gitconnected.com/a-tale-of-two-copies-bb4f8ab64c1a",
      image: "https://miro.medium.com/max/1400/1*ZgAxmE7hqE2D1s8Ut63Rmw.png",
      excerpt:
        "Let’s face it — Javascript is a funny language, to say the least. And the internet is filled with articles articulating this. But it’s simple, powerful and ubiquitous, and learning a trick or two wouldn’t go amiss. In this article, we’ll be discussing a tricky bit in Javascript — copying.",
    },
    {
      title: "Angular Tutorial: Building a Postman clone — Part 2",
      link: "https://faun.pub/angular-tutorial-building-a-postman-clone-part-2-eb6fc96631e",
      image: "https://miro.medium.com/max/1400/1*gPqL5V7Rur21LCzTgyfrQQ.png",
      excerpt: "Part 2 of the tutorial on developing API Sandbox",
    },
    {
      title: "Angular Tutorial: Building a Postman clone — Part 1",
      link: "https://faun.pub/angular-tutorial-building-a-postman-clone-part-1-1727d815b0d3",
      image: "https://miro.medium.com/max/1400/1*gPqL5V7Rur21LCzTgyfrQQ.png",
      excerpt:
        "Postman is one of the most popularly used solutions among developers around the world. While Postman as such is a ‘Collaboration Platform for API Development’, it’s used most commonly for one purpose — testing REST API endpoints. In this tutorial series, we’ll look at how we can develop a similar...",
    },
    {
      title: "How to Install Git on your local machine",
      link: "https://ashwinsathian19.medium.com/how-to-install-git-on-your-machine-9f98ab42e5a0",
      image: "https://miro.medium.com/max/440/0*PRN2N4TP2FYprPfy",
      excerpt:
        "Here’s the simple rule — you’re a developer means that you ABSOLUTELY have to have Git installed on your machine. In this post, we'll quickly look at how this can be done on your Linux, macOS and Windows machines.",
    },
    {
      title: "Basic Git Commands that Every Developer Absolutely Should Know",
      link: "https://faun.pub/basic-git-commands-that-every-developer-absolutely-should-know-1cf8cf4e13d5",
      image: "https://miro.medium.com/max/700/1*fDwzjCH3qzhosC6DVel4ng.jpeg",
      excerpt:
        "When I started working as a product developer, I had to start using version control and Git. As much as we’ve all at some point heard these terms, not all of us are clear what they are and what they entail. So, here is the theory.",
    },
    {
      title: "ES6 Concepts to know before starting MEAN Stack development",
      link: "https://medium.com/swlh/es6-concepts-to-know-before-starting-mean-stack-development-f4bd85f5baa",
      image: "https://miro.medium.com/max/640/1*kCD_6R3UkMHkpS_YgFoU9w.jpeg",
      excerpt:
        "A couple of days ago, I came across an article which listed the top features brought to the fore by the latest in Javascript, ES2019/ES10. That got me chuckling because only the other day, I had a discussion about how many people even after all these years are unaware of...",
    },
    {
      title: "Angular Tutorial: Simple Calculator",
      link: "https://ashwinsathian19.medium.com/angular-tutorial-simple-calculator-3edd3973f592",
      image: "https://miro.medium.com/max/700/0*QdlOHyiaRPvlzB6D",
      excerpt:
        "In this post, we’ll look at how we can build a simple calculator on Angular.",
    },
  ];

  return (
    <Fragment>
      <div className="p-5 w-screen">
        <h1 className="text-center">Featured Blogs</h1>

        {blogs.map((b) => (
          <Blog key={b.link} blog={b} className="m-1"></Blog>
        ))}
      </div>

      <ScrollTop threshold={100} />
    </Fragment>
  );
}
