import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import UMCalculatorWrapper from "./app/components/UMCalculatorWrapper";
import SettlementVisualizerWrapper from "./app/components/SettlementVisualizerWrapper";

function MdxLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;

  if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  if (href && href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return <a href={href} {...rest}>{children}</a>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MdxLink,
    UMCalculator: UMCalculatorWrapper,
    SettlementVisualizer: SettlementVisualizerWrapper,
    ...components,
  };
}
