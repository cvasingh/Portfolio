
import { config } from '@/constants';
import Link from 'next/link';

const Footer = ({ className }) => (
  <footer className={""}>
    <p className='text-center'>
      <span className="">
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link className='' href="/humans.txt" target="_self">
        {' '}Made with ♥︎ by humans.
      </Link>
    </p>
  </footer>
);

export default Footer;