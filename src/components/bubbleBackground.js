import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BubbleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
                zIndex: -1,
            },
            fpsLimit: 60, // Lowering the FPS to 60 to make it smoother and slower
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },

            particles: {
                color: {
                    value: "#00bfff",
                },
                links: {
                    color: "#00bfff", // Set link color to blue as well
                    distance: 150,
                    enable: true,
                    opacity: 0.6,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false, // Set this to false for slower movement and better control
                    speed: 0.2, // Slower particle movement
                    straight: true, // This will make the particles move in straight lines, not random
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                className="absolute top-0 left-0 w-full h-full z-[-1]"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default BubbleBackground;
