import React from 'react';
import { TRoute } from '@/types/route.type';
import DefaultAsideTemplate from '@/components/templates/DefaultAside.template';

const asideRoutes: TRoute[] = [
	{ path: '/*', element: <DefaultAsideTemplate /> },
];

export default asideRoutes;
