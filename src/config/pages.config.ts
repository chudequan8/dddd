export const asidePages: PagesType.Pages = [
  {
    to: "/casino",
    text: "Casino",
    icon: "1",
    subPages: [
      {
        to: "/casino/gameList",
        text: "Picks For You",
        icon: "1",
      },
      {
        to: "/casino",
        text: "Casino Pages",
        icon: "2",
      },
    ],
  },
  {
    to: "/sports",
    text: "Sports",
    icon: "2",
    subPages: [
      {
        to: "/sports/live",
        text: "Live Events",
        icon: "1",
      },
    ],
  },
  {
    to: "",
    text: "Lottery",
    icon: "3",
    subPages: [
      {
        to: "/lottery",
        text: "All Lotteries",
        icon: "1",
      },
    ],
  },
  {
    to: "/bingo",
    text: "Bingo",
    icon: "1",
  },
  {
    to: "",
    text: "VIP Club",
    icon: "1",
  },
  {
    to: "",
    text: "Affiliate",
    icon: "4",
  },
  {
    to: "",
    text: "Sponsorships",
    icon: "2",
    subPages: [
      {
        to: "/sponsorships/afa",
        text: "AFA",
        icon: "1",
      },
    ],
  },
  {
    to: "/liveSupport",
    text: "Live Support",
    icon: "2",
  },
];

export const headMenuPages: PagesType.Pages = [
  {
    to: "/casino/picks",
    text: "casino",
    icon: "SvgHome",
  },
  {
    to: "/sports",
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
				to: '/sports/live',
				text: 'Live Events',
				icon: 'SvgLive',
			},
			homePage: {
				id: 'home',
				to: '/sports',
				text: 'Home',
				icon: 'SvgHome',
			},
		},
	},
};
