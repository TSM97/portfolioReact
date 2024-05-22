import { footerDataSections, footerDataSocial } from './data';
import scrollTo from '../../utils/scrollTo';

export default function Footer() {
  return (
    <div className=' pt-4 sm:pt-10 lg:pt-12'>
      <footer className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col items-center border-t pt-6'>
          <nav className='mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6'>
            {footerDataSections.map((data) => {
              return (
                <div
                  onClick={() => scrollTo(data.link)}
                  className='text-foreground text-xl transition duration-100 hover:text-secondary hover:cursor-pointer'
                >
                  {data.title}
                </div>
              );
            })}
          </nav>

          <div className='flex gap-4'>
            {footerDataSocial.map((data) => {
              return (
                <a
                  href={data.link}
                  target='blank'
                  className='text-foreground transition duration-100 hover:text-secondary'
                >
                  <svg
                    className='h-5 w-5'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d={data.icon} />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

        <div className='py-8 text-center text-sm text-foreground-500'>
          © 2024 - This is my Portfolio. That's all.
        </div>
      </footer>
    </div>
  );
}
