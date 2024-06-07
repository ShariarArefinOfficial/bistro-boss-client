//import React from 'react';

import { useEffect, useState } from "react";
import SectionTitle from "../../../CommonComponent/SectionTitle";
import MenuItem from "../../../CommonComponent/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/menu`)
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">View Full Menu</button>

            </div>
        </section>
    );
};

export default PopularMenu;