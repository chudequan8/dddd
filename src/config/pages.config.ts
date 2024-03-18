export const asidePages: PagesType.Pages = [
  {
    to: "/casino",
    text: "Casino",
    icon: "AsideNav4",
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
    icon: "AsideNav1",
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
    icon: "AsideNav2",
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
    icon: "AsideNav5",
  },
  {
    to: "",
    text: "VIP Club",
    icon: "AsideNav8",
  },
  {
    to: "",
    text: "Affiliate",
    icon: "AsideNav9",
  },
  {
    to: "",
    text: "Sponsorships",
    icon: "AsideNav10",
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
    icon: "AsideNav11",
    iconClassName: 'text-primary'
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
