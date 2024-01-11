import Link from "next/link";

export default function Navbar() {
  return <nav className="text-2xl font-medium z-20 relative">
    <ul className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
    </ul>
  </nav>;
}
