'use client';

import { useContext } from 'react';
import ThemeContext from '@/context/themeContext';

export default function useMessageStatus() {
    const { messageStatus, setMessageStatus } = useContext(ThemeContext);

    return { messageStatus, setMessageStatus };
}
