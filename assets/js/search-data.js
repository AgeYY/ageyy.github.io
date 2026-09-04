// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
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
          section: "News",},];
