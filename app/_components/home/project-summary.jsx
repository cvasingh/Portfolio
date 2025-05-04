// import { Divider } from "~/components/divider";
import Section from "@/components/section";

import { Suspense, lazy, useState } from "react";
// import katakana from "./katakana.svg";
import { useHydrated } from "@/hooks/useHydrated";
import { useWindowSize } from "@/hooks";
import { useTheme } from "@/context/theme-provider";
import { deviceModels } from "./model/device-models";
import Transition from "@/components/transition";
import { cssProps, media } from "@/utils/lib";
import dynamic from "next/dynamic";

export function Button({ children }) {
  return <button>{children}</button>;
}

export function Loader({ children }) {
  return <button>Loading</button>;
}

const Model = dynamic(() => import("./model/modal"), { ssr: false });

function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === "light"}
        style={cssProps({ opacity: svgOpacity })}
        className={"project-summary-svg"}
        data-device={device}
        viewBox="0 0 751 136"
      >
        {/* <use href={`${katakana}#katakana-project`} /> */}
      </svg>
    );
  }

  function renderDetails(visible) {
    return (
      <div className={"project-summary-details"}>
        <div aria-hidden className={"project-summary-index"}>
          {/* <Divider notchWidth="64px" notchHeight="8px" collapsed={!visible} collapseDelay={1000} /> */}
          <span className={"project-summary-indexNumber"} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <h2 className={"project-summary-title text-3xl font-bold"} data-visible={visible} id={titleId}>
          {title}
        </h2>
        <p className={"project-summary-description"} data-visible={visible}>
          {description}
        </p>
        <div className={"project-summary-button"} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={"project-summary-preview"}>
        {model.type === "laptop" && (
          <>
            {renderKatakana("laptop", visible)}
            <div className={"project-summary-model"} data-device="laptop">
              {!modelLoaded && <Loader center className={"project-summary-loader"} data-visible={visible} />}
              {isHydrated && visible && (
                <Model
                  alt={model.alt}
                  cameraPosition={{ x: 0, y: 0, z: 8 }}
                  showDelay={700}
                  onLoad={handleModelLoad}
                  show={visible}
                  models={[
                    {
                      ...deviceModels.laptop,
                      texture: {
                        ...model.textures[0],
                        sizes: laptopSizes
                      }
                    }
                  ]}
                />
              )}
            </div>
          </>
        )}
        {model.type === "phone" && (
          <>
            {renderKatakana("phone", visible)}
            <div className={"project-summary-model"} data-device="phone">
              {!modelLoaded && <Loader center className={"project-summary-loader"} data-visible={visible} />}
              {isHydrated && visible && (
                <Model
                  alt={model.alt}
                  cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                  showDelay={300}
                  onLoad={handleModelLoad}
                  show={visible}
                  models={[
                    {
                      ...deviceModels.phone,
                      position: { x: -0.6, y: 1.1, z: 0 },
                      texture: {
                        ...model.textures[0],
                        sizes: phoneSizes
                      }
                    },
                    {
                      ...deviceModels.phone,
                      position: { x: 0.6, y: -0.5, z: 0.3 },
                      texture: {
                        ...model.textures[1],
                        sizes: phoneSizes
                      }
                    }
                  ]}
                />
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <Section
      className={"project-summary-summary"}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={"project-summary-content"}>
        <Transition in={sectionVisible || focused}>
          {({ visible }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}

export default ProjectSummary;
