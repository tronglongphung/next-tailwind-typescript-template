import Link from 'next/link';

export default function LinkComponent({ href, ...props }) {
  return (
    <Link href={href} passHref>
      <a {...props}>{props.children}</a>
    </Link>
  );
}
