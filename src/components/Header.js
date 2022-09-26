import React, { useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Header({ handleScrollRewards, handleScrollWork }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(true);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="relative">
            <MobileMenu
                menuOpen={menuOpen}
                closeMenu={closeMenu}
                handleScrollRewards={handleScrollRewards}
                handleScrollWork={handleScrollWork}
            />
            <DesktopMenu
                menuOpen={menuOpen}
                openMenu={openMenu}
                handleScrollRewards={handleScrollRewards}
                handleScrollWork={handleScrollWork}
            />
        </header>
    );
}

export default Header;
