import { FC, useCallback, useState } from 'react';

import style from './conflip-history-item.module.sass';

const MOCK_USERS = [
    { bet: 10, winner: false, avatar: '/img/avatarBig.png', lvl: 25 },
    { bet: 12, winner: true, avatar: '/img/avatarBig.png', lvl: 25 }
]



export const ConflipHistoryItem: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const close = useCallback(() => setIsOpen(false), []);
    const open = useCallback(() => setIsOpen(true), []);


    return <div className={style.root} >
        {MOCK_USERS.map(items => items.map(({ bet, winner, avatar, lvl }) => {
            
        }))}
  </div>
};
