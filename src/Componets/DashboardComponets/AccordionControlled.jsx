import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';

export default function AccordionControlled() {
    const [index, setIndex] = React.useState(0);

    const accordionStyle = {
        p: 2,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: 1,
        display: 'flex',
        justifycontent: "center",
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            boxShadow: 4,
            borderColor: '#c0c0c0',
        },
    };

    return (
        <AccordionGroup
            sx={{
                maxWidth: 400,
                gap: 1,
                display: 'flex',
                justifyContent: 'center',
                mx: 'auto',
            }}
        >

            <Accordion
                expanded={index === 0}
                onChange={(event, expanded) => setIndex(expanded ? 0 : null)}
                sx={accordionStyle}
            >
                <AccordionSummary>First accordion</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={index === 1}
                onChange={(event, expanded) => setIndex(expanded ? 1 : null)}
                sx={accordionStyle}
            >
                <AccordionSummary>Second accordion</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={index === 2}
                onChange={(event, expanded) => setIndex(expanded ? 2 : null)}
                sx={accordionStyle}
            >
                <AccordionSummary>Third accordion</AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    );
}
