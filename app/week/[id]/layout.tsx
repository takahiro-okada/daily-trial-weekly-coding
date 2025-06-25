import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">{children}</div>
      <div className="mt-12 text-left">
        <Link
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-200"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
