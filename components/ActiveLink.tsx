import { useRouter } from "next/router";
import Link from "next/link";

export interface ActiveLinkProps {
  text: string;
  href: string;
}
const style={
  color:'#0070f3',
  textDecoration:'underline'
}
export const ActiveLink = ({ text, href }: ActiveLinkProps) => {

  const {asPath} = useRouter();
  return (
    <Link href={href} legacyBehavior>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  );
};
