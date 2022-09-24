import React, { useState, useEffect } from "react";

function Footer() {
    const [year, setYear] = useState(0);

    useEffect(() => {
        const date = new Date();
        const fullYear = date.getFullYear();
        setYear(fullYear);
    }, []);

    return (
        <footer className="mt-20 p-2 text-center text-xs text-gray-400">
            Copyright &copy; <span>{year}</span> by curypd. All rights reserved.
        </footer>
    );
}

export default Footer;
