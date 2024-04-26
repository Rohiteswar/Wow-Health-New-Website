import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wow Health. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-black hover:underline underline-offset-4" href="/terms&conditions">
          Terms of Service
        </Link>
        <Link className="text-xs text-black hover:underline underline-offset-4" href="/account-deletion">
        Account Deletion Request
        </Link>
        <Link className="text-xs text-black hover:underline underline-offset-4" href="/privacy-policy">
          Privacy
        </Link>
        <Link className="text-xs text-black hover:underline underline-offset-4" href="/Refund-Policy">
        Refund Policy
        </Link>
      </nav>
    </footer>
  )
}

