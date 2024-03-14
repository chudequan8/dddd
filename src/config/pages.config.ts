import productsDb from '../mocks/db/products.db';

export const asidePages: PagesType.Pages = [
  {
    to: "/sports",
    text: "Sportswear",
    icon: "icon-menu-sport",
    subPages: [
      {
        to: "/ai/dashboard",
        text: "AI Dashboard",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
      {
        to: "/ai/test",
        text: "Chat Pages",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/electronics",
    text: "Electronics",
    icon: "icon-menu-real-casino",
    subPages: [
      {
        to: "/nav2/dashboard",
        text: "nav2 Dashboard",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
      {
        to: "/nav2/test",
        text: "Chat Pages",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/nav3",
    text: "Suits",
    icon: "icon-ball-nine",
    subPages: [
      {
        to: "/nav3/dashboard",
        text: "nav3 Dashboard",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
      {
        to: "/nav3/test",
        text: "Chat Pages",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/nav6",
    text: "Furnitures",
    icon: "icon-huodong",
    subPages: [
      {
        to: "/nav3/dashboard",
        text: "nav3 Dashboard",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
      {
        to: "/nav3/test",
        text: "Chat Pages",
        icon: "https://media3.scdn.vn/img4/2023/05_17/yinpavnKTeNesRxwyq5x.png",
      },
    ],
  },
  {
    to: "/nva4",
    text: "Latest Offers",
    icon: "icon-menu-promotion",
  },
  {
    to: "/nav5",
    text: "Customer Service",
    icon: "icon-service-online",
  },
];

export const appPages = {
	aiAppPages: {
		id: 'aiApp',
		to: '/ai',
		text: 'AI',
		icon: 'HeroRocketLaunch',
		subPages: {
			aiDashboardPage: {
				id: 'aiDashboardPage',
				to: '/ai/dashboard',
				text: 'AI Dashboard',
				icon: 'HeroRocketLaunch',
			},
			chatPages: {
				id: 'customerPage',
				to: '/ai/chat',
				text: 'Chat Pages',
				icon: 'HeroChatBubbleLeft',
				subPages: {
					photoPage: {
						id: 'photoPage',
						to: '/ai/chat/photo',
						text: 'Photo Editing',
						icon: 'HeroPhoto',
					},
					videoPage: {
						id: 'videoPage',
						to: '/ai/chat/video',
						text: 'Video Generation',
						icon: 'HeroFilm',
					},
					audioPage: {
						id: 'audioPage',
						to: '/ai/chat/audio',
						text: 'Audio Generation',
						icon: 'HeroMusicalNote',
					},
					codePage: {
						id: 'audioPage',
						to: '/ai/chat/code',
						text: 'Code Generation',
						icon: 'HeroCommandLine',
					},
				},
			},
		},
	},
	crmAppPages: {
		id: 'crmApp',
		to: '/crm',
		text: 'CRM',
		icon: 'HeroUserGroup',
		subPages: {
			crmDashboardPage: {
				id: 'crmDashboardPage',
				to: '/crm/dashboard',
				text: 'CRM ',
				icon: 'HeroUserCircle',
			},
			customerPage: {
				id: 'customerPage',
				to: '/crm/customer',
				text: 'Customers',
				icon: 'HeroUserGroup',
				subPages: {
					listPage: {
						id: 'crmListPage',
						to: '/crm/customer/list',
						text: 'Customers List',
						icon: 'HeroQueueList',
					},
					editPage: {
						id: 'customerPage',
						to: `/crm/customer`,
						text: `Customer @`,
						icon: 'HeroUser',
					},
					editPageLink: {
						id: 'editPageLink',
						to: '/crm/customer',
					},
				},
			},
			rolePage: {
				id: 'rolePage',
				to: '/crm/role',
				text: 'Roles',
				icon: 'HeroShieldCheck',
				subPages: {
					listPage: {
						id: 'crmListPage',
						to: '/crm/role/list',
						text: 'Role List',
						icon: 'HeroQueueList',
					},
					editPage: {
						id: 'customerPage',
						to: `/crm/role`,
						text: `Role @`,
						icon: 'HeroShieldExclamation',
					},
					editPageLink: {
						id: 'editPageLink',
						to: '/crm/role',
					},
				},
			},
		},
	},
	projectAppPages: {
		id: 'projectApp',
		to: '/project',
		text: 'Project',
		icon: 'HeroClipboardDocumentCheck',
		subPages: {
			projectDashboardPage: {
				id: 'projectDashboardPage',
				to: '/project/dashboard',
				text: 'Projects Dashboard',
				icon: 'HeroClipboardDocumentCheck',
			},
			projectBoardPage: {
				id: 'projectBoardPage',
				to: `/project/board`,
				text: `Board `,
				icon: 'HeroQrCode',
			},
			projectBoardPageLink: {
				id: 'projectBoardPageLink',
				to: '/project/board',
			},
		},
	},
	educationAppPages: {
		id: 'educationApp',
		to: '/education',
		text: 'Education',
		icon: 'HeroBookOpen',
		subPages: {},
	},
	reservationAppPages: {
		id: 'reservationApp',
		to: '/reservation',
		text: 'Reservation',
		icon: 'HeroCalendarDays',
		subPages: {},
	},
	mailAppPages: {
		id: 'mailApp',
		to: '/mail',
		text: 'Mail',
		icon: 'HeroEnvelope',
		subPages: {
			inboxPages: {
				id: 'inboxPages',
				to: '/mail/inbox',
				text: 'Inbox',
				icon: 'HeroEnvelope',
			},
		},
	},
	chatAppPages: {
		id: 'chatApp',
		to: '/chat',
		text: 'Chat',
		icon: 'HeroChatBubbleLeftRight',
	},
};

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
