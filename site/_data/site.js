module.exports = {
  name: "Hoppy Hours",
  shortDesc:
    "A ChartHopper’s experience at AWS re:Invent 2021",
  url: "",
  authorEmail: "peter.colapietro@charthop.com",
  authorHandle: "@pc",
  authorName: "Pete",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#3CB7E7",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "#2E5D84",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
