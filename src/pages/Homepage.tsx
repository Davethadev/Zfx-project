import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { HowItWorks } from "../components/HowItWorks";
import { Plans } from "../components/Plans";
import { Footer } from "../components/Footer";

import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, rem } from "@mantine/core";

export function HomePage() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Plans />
      <Footer />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={
                <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
              }
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            ></Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
