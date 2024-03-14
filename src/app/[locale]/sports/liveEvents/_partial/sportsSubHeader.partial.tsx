'use client'
import React from 'react';
import Icon from '@/components/icon/Icon';
import Button from '@/components/ui/Button';
import { gamePages } from '../../../../../config/pages.config';
import Tooltip from '@/components/ui/Tooltip';
import DefButton from '@/components/ui/Button';
type TSportsHistory = {
	id: number;
	subPages: string;
	isActive: Boolean;
};

const sportsHeader: TSportsHistory[] = [
	{ id: 1, subPages: 'homePage', isActive: true },
	{ id: 2, subPages: 'liveEventsPage', isActive: false },
	// { id: 3, subPages: 'favourites' },
	// { id: 4, subPages: 'myBets' },
	// { id: 5, subPages: 'soccer' },
	// { id: 6, subPages: 'fifa' },
	// { id: 7, subPages: 'tennis' },
	// { id: 8, subPages: 'basketball' },
	// { id: 9, subPages: 'counterStrike' },
	// { id: 10, subPages: 'iceHockey' },
	// { id: 11, subPages: 'dota2' },
	// { id: 12, subPages: 'eCricket' },
	// { id: 13, subPages: 'americanFootball' },
	// { id: 14, subPages: 'cricket' },
	// { id: 15, subPages: 'baseball' },
	// { id: 16, subPages: 'nba2k' },
	// { id: 17, subPages: 'volleyball' },
	// { id: 18, subPages: 'fifaVolta' },
	// { id: 19, subPages: 'penaltyShootout' },
	// { id: 20, subPages: 'handball' },
	// { id: 21, subPages: 'tableTennis' },
	// { id: 22, subPages: 'kabaddi' },
	// { id: 23, subPages: 'eFighting' },
	// { id: 24, subPages: 'eTennis' },
	// { id: 25, subPages: 'eRocketLeague' },
	// { id: 26, subPages: 'aussieRules' },
	// { id: 27, subPages: 'olympics' },
	// { id: 28, subPages: 'Rugby' },
	// { id: 29, subPages: 'formula1' },
	// { id: 30, subPages: 'eShooter' },
];

const SportsSubHeader = () => {
	const subPages = gamePages.sportsPage.subPages;
	const changeActive = (index: number) => {
		console.log('index', index);
	};
	return (
		<div>
			{sportsHeader &&
				sportsHeader.map((item, index) => {
					const subPageKey = item.subPages;
					const subPageText = subPages[subPageKey as keyof typeof subPages]?.text;
					const subPageIcon = subPages[subPageKey as keyof typeof subPages]?.icon;
					return (
						<DefButton onClick={() => changeActive(index)}>
							<Tooltip text={subPageText}>
								<Icon
									size='text-5xl'
									icon={subPageIcon}
									color={item.isActive ? '#3BC117' : ''}
								/>
							</Tooltip>
						</DefButton>
					);
				})}
		</div>
	);
};

export default SportsSubHeader;
