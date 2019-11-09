import React from 'react';
import { FaPizzaSlice} from "react-icons/all";

export const Hearder = () => {
    return (
        <header className={"header"} data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/public/images/logo.png" alt="Todo-list" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <FaPizzaSlice/>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
