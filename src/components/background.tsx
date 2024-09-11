
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { truncate } from "fs";
export default function Background() {
    
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
    return (
      <div>
        <div className="particlesContainer">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#090E16",
                },
              },

              fpsLimit: 40,
              interactivity: {
                events: {
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
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#00FFFF",
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  width: 1,
                  opacity: 0.2,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: true,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1200,
                  },
                  value: 80,
                },

                shape: {
                  type: "circle",
                },
                opacity: {
                  value: 0.4,
                },
                size: {
                  value: { min: 1, max: 2 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>
    );
}