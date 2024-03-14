import React from 'react';
import { TRoute } from '@/types/route.type';
import DefaultFooterTemplate from '@/components/templates/DefaultFooter.template';

const footerRoutes: TRoute[] = [
	{ path: '/*', element: <DefaultFooterTemplate /> },
];

export default footerRoutes;
