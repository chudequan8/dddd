export const asidePages: PagesType.Pages = [
  {
    to: "/casino",
    text: "Casino",
    icon: "icon-menu-sport",
    subPages: [
      {
        to: "/casino/gameList",
        text: "Picks For You",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
      {
        to: "/casino",
        text: "Casino Pages",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "",
    text: "Sports",
    icon: "icon-menu-real-casino",
    subPages: [
      {
        to: "/sports/liveEvents",
        text: "Live Events",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "",
    text: "Lottery",
    icon: "icon-ball-nine",
    subPages: [
      {
        to: "/lottery",
        text: "All Lotteries",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/bingo",
    text: "Bingo",
    icon: "icon-huodong",
  },
  {
    to: "",
    text: "VIP Club",
    icon: "icon-menu-promotion",
  },
  {
    to: "",
    text: "Affiliate",
    icon: "icon-service-online",
  },
  {
    to: "",
    text: "Sponsorships",
    icon: "icon-ball-nine",
    subPages: [
      {
        to: "/sponsorships/afa",
        text: "AFA",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/liveSupport",
    text: "Live Support",
    icon: "icon-service-online",
  },
];

export const headMenuPages: PagesType.Pages = [
  {
    to: "/casino/picks",
    text: "casino",
    icon: "SvgHome",
  },
  {
    to: "/sports/liveEvents",
    text: "sports",
    icon: "icon-menu-real-casino",
  },
  {
    to: "/lottery",
    text: "lottery",
    icon: "icon-four-rectangle",
  },
];

export const gamePages = {
	casinoPage: {
		id: 'casino',
		to: '/casino',
		text: 'Casino',
		icon: 'HeroRocketLaunch',
		subPages: {
			picksForYouPage: {
				id: 'picksForYouPage',
				to: '/casino/picks',
				text: 'Picks For You',
				icon: 'HeroRocketLaunch',
			},
			crashPage: {
				id: 'crashPage',
				to: '/casino/crash',
				text: 'crash',
				icon: 'HeroRocketLaunch',
			},
		},
	},
	sportsPage: {
		id: 'sports',
		to: '/sports',
		text: 'Sports',
		icon: 'HeroRocketLaunch',
		subPages: {
			liveEventsPage: {
				id: 'liveEvents',
				to: '/sports/liveEvents',
				text: 'Live Events',
				icon: 'SvgLive',
			},
			homePage: {
				id: 'home',
				to: '/sports/liveEvents',
				text: 'Home',
				icon: 'SvgHome',
			},
		},
	},
};
