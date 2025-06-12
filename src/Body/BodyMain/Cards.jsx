import {Stack,} from "@mui/material";
import { useEffect, useState } from "react";

import CardDesgin from "./CardDesgin";




export default function Cards({ CardsDetails, ListOfObject }) {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const activeFilters = Object.entries(ListOfObject)
            .filter(([_, val]) => val)
            .reduce((acc, [category, val]) => {
                acc[category] = val.split(',').map(v => v.trim().toLowerCase());
                return acc;
            }, {});

        const filteredCards = CardsDetails.filter(card => {
            return Object.entries(activeFilters).every(([category, values]) => {
                const cardValue = card[category] || "";
                return values.some(value =>
                    cardValue.toLowerCase().includes(value)
                );
            });
        });

        const cardComponents = filteredCards.map((item, idx) => (
            <CardDesgin key={idx} obj={item} />
        ));

        setElements(cardComponents);
    }, [CardsDetails, ListOfObject]);

    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                width: '100%',
                p: '2 0',
                bgcolor: 'background.paper',
            }}
        >
            {elements}
        </Stack>
    );
}
