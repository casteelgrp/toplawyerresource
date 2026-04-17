import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  external = false,
}: CTAButtonProps) {
  const className =
    "inline-block my-4 px-5 py-3 rounded-lg border border-gray-300 text-sm font-medium no-underline text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
