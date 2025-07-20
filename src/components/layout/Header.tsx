import Link from "next/link"

export default function Header() {

    return (
        <header className="bg-background border-b border-border py-4">
            <nav className="container flex items-center justify-between">
                <div className="rounded-xl bg-amber-400 space-y-4 ml-8">
                    <Link href="/" className="text-2xl fo">
                    YourName.dev
                </Link>
                </div>
                <div className="space-x-6 md:flex hidden">
                    <Link href="./projects" className="text-foreground hover:text-primary transition-colors">
                        Project
                    </Link>
                    <Link href="./about">
                        About
                    </Link>
                    <Link href="/contact">
                        Contect
                    </Link>
                </div>
            </nav>
        </header>

    )
}