import { styled, Text, Tooltip, Link } from "@nextui-org/react";
import Scroll from "react-scroll";

const Grid = styled("footer", {
    display: "grid",
    gap: "20px",
    alignItems: "center",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: "rgb(0,50,99)",
    padding: "0 10px",
    height: "200px",

    "@sm": { padding: "0px 150px" }
});

const Button = styled("a", {
    display: "grid",
    placeItems: "center",
    borderRadius: "100%",
    fontSize: "$xl",
    bgColor: "white",
    color: "#EE3D40",
    width: "40px",
    height: "40px",
    transition: "ease-in-out 100ms",

    "&:hover": { bgColor: "rgb(255,255,255,0.8)" }
});

const props = { spy: true, smooth: true, offset: -200, duration: 500 };

export function Footer() {
    return (
        <Grid>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: "white" }}>
                <Link onClick={() => Scroll.animateScroll.scrollToTop}>
                    Home
                </Link>
                <Link onClick={() => Scroll.scroller.scrollTo("about", props)}>
                    About
                </Link>
                <Link onClick={() => Scroll.scroller.scrollTo("features", props)}>
                    Features
                </Link>
            </div>
            <div>
                <Text css={{ color: "white" }}>
                    All copyrights are reserved to Carson Lenze &copy;{" "}
                    {new Date().getFullYear()}
                </Text>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Button href="https://instagram.com/hhhsbpa">
                    <i className="fa-brands fa-instagram" />
                </Button>
                <Button href="https://twitter.com/hhhsbpa">
                    <i className="fa-brands fa-twitter" />
                </Button>
                <Tooltip content="Connect with us!">
                    <Button href="https://linktr.ee/hhhsbpa">
                        <i className="fa-brands fa-linkedin-in" />
                    </Button>
                </Tooltip>
            </div>
        </Grid>
    );
}