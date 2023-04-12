import { Navbar, Spacer, Text, Link, Image } from "@nextui-org/react";
import { useState } from 'react';

const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
  ];

export function Header({ onChange }) {

    return (
        <Navbar variant="sticky" shouldHideOnScroll>
            <Navbar.Brand href="#">
                <Image
                    height={75}
                    src="https://media.discordapp.net/attachments/820004127962431528/1095359472056160426/MagicEraser_230411_104719.png"
                    alt="Default Image"
                    objectFit="cover"
                />
            </Navbar.Brand>
            <Spacer x={1} />
             <Navbar.Toggle aria-label="toggle navigation" onChange={onChange} />
             <Navbar.Collapse transitionDelay={100} css={{ '@xs': { top: 0, left: '100vw' }}}>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem key={item}>
                            <Link
                                color="inherit"
                                css={{
                                    maxWidth: "15%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
        </Navbar>
    )
}