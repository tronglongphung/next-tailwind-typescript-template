import Link from '@/components/Link';
import { useTheme } from 'next-themes';

const navigation = [
  // { name: 'Giới Thiệu', href: '/about-us' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="container dark:text-stone-200">
      add navigation here
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')} className="p-2 border rounded">
          Light Mode
        </button>
        <button onClick={() => setTheme('dark')} className="p-2 border rounded">
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
