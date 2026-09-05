// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Small tools, research experiments, and things I build out of curiosity.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-our-paper-speed-modulations-in-grid-cell-information-geometry-was-published-in-nature-communications",
          title: 'Our paper, “Speed modulations in grid cell information geometry”, was published in Nature...',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-ph-d-in-physics-at-washington-university-in-st-louis-advised-by-prof-ralf-wessel",
          title: 'Successfully defended my Ph.D. in Physics at Washington University in St. Louis, advised...',
          description: "",
          section: "News",},{id: "news-started-as-a-postdoctoral-fellow-in-the-department-of-neuroscience-at-the-university-of-texas-at-austin-working-with-prof-xue-xin-wei",
          title: 'Started as a Postdoctoral Fellow in the Department of Neuroscience at The University...',
          description: "",
          section: "News",},{id: "projects-ai-career-tracker",
          title: 'AI Career Tracker',
          description: "A searchable job board for postdoctoral and industry opportunities in AI research and engineering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-career-tracker/";
            },},{id: "projects-fast-switch-projects",
          title: 'Fast Switch Projects',
          description: "A VS Code extension for switching between open projects with keyboard shortcuts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fast-switch-projects/";
            },},];
