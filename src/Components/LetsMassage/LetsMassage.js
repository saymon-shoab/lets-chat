import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat'
import './LetsMassage.css'
const LetsMassage = () => {
    return (
        <div className="letsChat">
            <Sidebar></Sidebar>
            <Chat></Chat>
        </div>
    );
};

export default LetsMassage;