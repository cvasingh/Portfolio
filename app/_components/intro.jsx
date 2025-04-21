"use client";
// import DecoderText from "@/components/decoder-text";
// import Heading from "@/components/heading";
import Section from "@/components/section";
import Transition from "@/components/transition";
// import VisuallyHidden from "@/components/visually-hidden";
import { useInterval, usePrevious, useScrollToHash } from "@/hooks";
import { useEffect, useState } from "react";
import config from "@/config.json";
import { useHydrated } from "@/hooks/useHydrated";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/theme-provider";

const DisplacementSphere = dynamic(() =>
  import("./displacement-sphere").then((module) => ({
    default: module.DisplacementSphere
  }))
);

export function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { switchRef, theme, toggleTheme } = useTheme();
  const { disciplines } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);

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
    5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

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
      <button
        ref={switchRef}
        className="text-black dark:text-white text-xl font-bold absolute top-6 right-6 z-20 p-2 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {/* {isHydrated && <DisplacementSphere />} */}
            <header className="w-full relative max-w-[1024px] sm:max-w-[920px] md:max-w-[780px] -top-[var(--spaceL)] mobile:-top-[var(--space3XL)] mobileS:-top-[var(--spaceXL)] max-[820px]:max-h-[420px]:-top-[var(--spaceM)]">
              <h2 className="text-black dark:text-blue-600">shiva</h2>
              {/* TODO:check */}
              <h1
                className="uppercase text-[1.5rem] tracking-[0.3em] text-[var(--textLight)] mb-[var(--space2XL)] mt-0 font-[var(--fontWeightMedium)] leading-[1] opacity-0 transition-opacity duration-[var(--durationL)] ease-[var(--bezierFastoutSlowin)] delay-[200ms] laptop:text-[1.375rem] laptop:mb-[var(--spaceXL)] tablet:text-[1.125rem] mobile:mb-[var(--spaceL)] mobile:tracking-[0.2em] mobile:whitespace-nowrap mobile:overflow-hidden max-[820px]:max-h-[420px]:mb-[var(--spaceXL)]"
                data-visible={visible}
                id={titleId}
              >
                shibva
                {/* <DecoderText text={config.name} delay={500} /> */}
              </h1>
              {/* <Heading level={0} as="h2" className="leading-2">
                <VisuallyHidden>{`${config.role} + ${introLabel}`}</VisuallyHidden>
                <span
                  aria-hidden
                  className="flex flex-row items-center relative data-[hidden=true]:opacity-0"
                >
                  <span
                    className="relative flex-shrink-0 items-center leading-[1] animate-[introTextReveal_1.5s_var(--bezierFastoutSlowin)_forwards] text-[color-mix(in_lab,_var(--text)_0%,_transparent)] transition-opacity duration-[0.5s] ease delay-[var(--durationM)]"
                    data-status={status}
                    style={{ animationDelay: "200ms" }}
                  >
                    {config.role}
                  </span>
                  <span
                    className="h-[2px] bg-[color-mix(in_lab,var(--text)_30%,transparent)] w-[120%] ml-[20px] relative top-[0.05em] transition-all duration-[0.8s] delay-[1s] ease-[var(--bezierFastoutSlowin)] scale-x-0 data-[status='entered']:scale-x-100 data-[status='entered']:opacity-100"
                    data-status={status}
                  />
                </span>
                <div className="flex flex-row items-center relative">
                  {disciplines.map((item) => (
                    <Transition
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className="relative flex items-center leading-[1] opacity-0 transition-opacity duration-500 ease-in-out"
                          data-plus={true}
                          data-status={status}
                          style={{ animationDelay: "600ms" }}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                </div>
              </Heading> */}
            </header>

            {/* <Link
              href="/#project-1"
              className="fixed bottom-16 w-[26px] h-[38px] border-2 border-[color-mix(in_lab,var(--text)_40%,transparent)] rounded-[20px] opacity-0 transition-opacity duration-[var(--durationL)] ease-in-out data-[status='entered']:opacity-100 data-[hidden='true']:opacity-0 data-[hidden='true']:translate-y-[20px] focus-visible:opacity-100 hidden sm:block"
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
            </Link>
            <Link
              href="/#project-1"
              className="fixed bottom-0 opacity-0 transition-opacity duration-[var(--durationM)] ease-[cubic-bezier(0.8,0.1,0.27,1)] px-5 py-5 data-[status='entered']:opacity-100 data-[hidden='true']:opacity-0 data-[hidden='true']:translate-y-0 sm:hidden"
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>Scroll to projects</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </Link> */}
          </>
        )}
      </Transition>
    </Section>
  );
}
