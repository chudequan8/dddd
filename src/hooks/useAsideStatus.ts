'use client';

import { useTheme } from '@/context/themeContext';

export default function useAsideStatus() {
	const { asideStatus, setAsideStatus } = useTheme();

	return { asideStatus, setAsideStatus };
}
