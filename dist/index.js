import { Slider } from "./Slider.js";
const options = {
    delay: 2500,
    root: "slider",
    width: 1200,
    height: 800,
    slides: [
        {
            color: "#c62828",
            text: "RED"
        },
        {
            color: "#ad1457",
            text: "PINK"
        },
        {
            color: "#6a1b9a",
            text: "PURPLE"
        },
        {
            color: "#4527a0",
            text: "DEEP_PURPLE"
        },
        {
            color: "#283593",
            text: "INDIGO"
        },
        {
            color: "#1565c0",
            text: "BLUE"
        },
        {
            color: "#0277bd",
            text: "LIGHT_BLUE"
        },
        {
            color: "#00838f",
            text: "CYAN"
        },
        {
            color: "#00695c",
            text: "TEAL"
        },
        {
            color: "#2e7d32",
            text: "GREEN"
        },
        {
            color: "#558b2f",
            text: "LIGHT_GREEN"
        },
        {
            color: "#827717",
            text: "LIME"
        },
        {
            color: "#ef6c00",
            text: "ORANGE"
        },
        {
            color: "#d84315",
            text: "DEEP_ORANGE"
        },
        {
            color: "#4e342e",
            text: "BROWN"
        }
    ]
};
window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider(options);
});
