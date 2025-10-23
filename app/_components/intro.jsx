"use client";
import DecoderText from "@/components/decoder-text";
import Section from "@/components/section";
import Transition from "@/components/transition";
import { useInterval, useScrollToHash } from "@/hooks";
import { useEffect, useState } from "react";
import { useHydrated } from "@/hooks/useHydrated";
import Link from "next/link";
import dynamic from "next/dynamic";
import { config } from "@/constants";
import VisuallyHidden from "@/components/visually-hidden";
import { cssProps } from "@/utils/lib";

const DisplacementSphere = dynamic(() =>
  import("./displacement-sphere").then((module) => ({
    default: module.DisplacementSphere
  }))
);

export default function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);

  const introLabel = [disciplines.slice(0, -1).join(", "), disciplines.slice(-1)[0]].join(", and ");
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000
  );

  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className="h-screen flex items-center justify-center flex-col"
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in timeout={3000}>
        {({ visible, status }) => (
          <>
            {/* Theme Demo Link */}
            <Link
              href="/theme-demo"
              className="text-black text-lg font-medium fixed top-6 right-6 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:bg-white hover:shadow-lg transition-all"
            >
              🎨 Theme Demo
            </Link>

            {isHydrated && <DisplacementSphere />}
            <header className="main-hero-text">
              <h1 className="main-hero-name " data-visible={visible} id={titleId}>
                <DecoderText text={config.name} delay={500} />
              </h1>
              <h2 className="text-black text-5xl font-semibold [letter-spacing:-0.03em]">
                <VisuallyHidden className={""}>{`${config.role} + ${introLabel}`}</VisuallyHidden>
                <span aria-hidden className="main-hero-row ">
                  <span className="main-hero-word" data-status={status} style={cssProps({ delay: "200ms" })}>
                    {config.role}
                  </span>
                  <span className="main-hero-line" data-status={status} />
                </span>
                <div className="main-hero-row ">
                  {disciplines.map((item) => (
                    <Transition unmount in={item === currentDiscipline} timeout={{ enter: 3000, exit: 2000 }} key={item}>
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className="main-hero-word"
                          data-plus={true}
                          data-status={status}
                          style={cssProps({ delay: "600ms" })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
              </h2>
            </header>

            <Link
              href="/#project-1"
              className="scrollIndicator"
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </Link>
            <Link
              href="/#project-1"
              className="mobileScrollIndicator"
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg aria-hidden stroke="currentColor" width="43" height="15" viewBox="0 0 43 15">
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </Link>
          </>
        )}
      </Transition>
    </Section>
  );
}
