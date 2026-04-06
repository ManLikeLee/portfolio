import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-blue-50 border-t border-blue-100 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-700 font-medium text-center md:text-left">
          Philip Uguru &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="https://github.com/manlikelee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/philip-uguru-9030ab3b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 font-medium transition-colors"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-xs text-gray-400 text-center md:text-right">
          Built with Next.js &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
