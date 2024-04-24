import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { handleEmailButtonClick } from './Utils';
import useScreenSize from '../../hooks/useScreenSize';
import LOGO from '../../svgs/LOGO';
export default function NavBar() {
  const { isTablet } = useScreenSize();
  return (
    <>
      <section className='grid grid-cols-7 grid-rows-2 w-screen h-[15%] gap-x-unit-lg max-w-[100dvw]'>
        <section className='flex text-red col-span-1 row-span-2 pt-5 place-self-center'>
          <LOGO />
        </section>
        <Navbar maxWidth='2xl' isBordered className='col-span-6'>
          <NavbarContent className='hidden sm:flex gap-4' justify='end'>
            <NavbarItem className='text-lg' isActive>
              <Button
                color='primary'
                variant='shadow'
                size={`${isTablet ? 'sm' : 'lg'}`}
                className='font-semibold'
                onClick={handleEmailButtonClick}
              >
                Hire me
              </Button>
            </NavbarItem>
            <NavbarItem className='text-lg' isActive>
              <Button
                as={Link}
                href='/CV/CV.pdf'
                download
                color='primary'
                variant='bordered'
                size='lg'
                className='font-semibold border-4'
              >
                Download CV
              </Button>
            </NavbarItem>
            <ThemeSwitcher />
          </NavbarContent>
        </Navbar>
      </section>
    </>
  );
}
