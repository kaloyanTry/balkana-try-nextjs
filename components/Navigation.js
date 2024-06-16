import Link from 'next/link';

function Navigation() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-12'>
        <li>
          <Link
            href='/'
            className='hover:text-accent-200 transition-colors text-2xl font-bold'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-200 transition-colors text-2xl font-bold'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/projects'
            className='hover:text-accent-200 transition-colors text-2xl font-bold'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href='/tracks'
            className='hover:text-accent-200 transition-colors text-2xl font-bold'
          >
            Tracks
          </Link>
        </li>
        <li>
          <Link
            href='/account'
            className='hover:text-accent-300 transition-colors text-2xl font-bold'
          >
            Guests Area
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
