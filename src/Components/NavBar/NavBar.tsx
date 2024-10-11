import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { handleEmailButtonClick } from "./Utils";
import useScreenSize from "../../hooks/useScreenSize";
import LOGO from "../../svgs/LOGO";
export default function NavBar() {
  const { isTablet, isMobile } = useScreenSize();
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-7 grid-rows-2 w-screen min-h-[15vh] gap-x-unit-lg max-w-[100dvw]">
        <section className="flex text-red col-span-1 row-span-2 md:pt-7 place-self-center">
          <LOGO
            className={`${
              isMobile ? "w-[120px] h-[80px]" : "w-[150px] h-[120px]"
            }`}
          />
        </section>

        {isTablet ? (
          <section className="text-center row-span-2 pt-3">
            <Button
              color="primary"
              variant="shadow"
              size={`${isTablet ? "sm" : "lg"}`}
              className="font-semibold mr-2"
              onClick={handleEmailButtonClick}
            >
              Hire me
            </Button>
            <Button
              as={Link}
              href={`${import.meta.env.BASE_URL}/CV/MyResume.pdf`}
              download
              color="primary"
              variant="bordered"
              size={`${isTablet ? "sm" : "lg"}`}
              className="font-semibold border-4 mt-2"
            >
              Download CV
            </Button>
          </section>
        ) : (
          <Navbar maxWidth="2xl" isBordered className="col-span-6">
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
              <NavbarItem className="text-lg" isActive>
                <Button
                  color="primary"
                  variant="shadow"
                  size={`${isTablet ? "sm" : "lg"}`}
                  className="font-semibold"
                  onClick={handleEmailButtonClick}
                >
                  Hire me
                </Button>
              </NavbarItem>
              <NavbarItem className="text-lg" isActive>
                <Button
                  as={Link}
                  href={`${import.meta.env.BASE_URL}/CV/MyResume.pdf`}
                  download
                  color="primary"
                  variant="bordered"
                  size="lg"
                  className="font-semibold border-4"
                >
                  Download CV
                </Button>
              </NavbarItem>
              <ThemeSwitcher />
            </NavbarContent>
          </Navbar>
        )}
      </section>
    </>
  );
}
