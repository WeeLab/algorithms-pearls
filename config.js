const config = {
	"gatsby": {
		"pathPrefix": "/",
    siteUrl: "https://learn.Epam.io",
		"gaTrackingId": null
  },
	"header": {
    // "logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    // "logoLink": "https://learn.Epam.io",
    title: "Algorithms Pearls",
		"githubUrl": "https://github.com/hasura/gatsby-gitbook-boilerplate",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
  },
	"sidebar": {
		"forcedNavOrder": [
			"/search-algorithms"
    	],
		"links": [
      { text: "Epam", link: "http://www.epam.com" },
      { text: "Topics Trello", link: "https://epa.ms/algopearls" },
      {
        text: "Code of Conduct",
        link:
          "https://www.contributor-covenant.org/version/1/4/code-of-conduct.html",
      },
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
    title: "Algorithms Pearls | Epam",
    description:
      "A study group formed by engineers from all levels where we aim to challenge our minds with innovative and well known problems in order to share our ideas, approaches and solutions in a dynamic and interactive environment.",
      "ogImage": null,
      "docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
      "favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
    },
};

module.exports = config;