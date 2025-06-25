import Link from "next/link";

export default function Home() {
  const weeks = [
    {
      number: 1,
      title: "Week 1",
      description: "Dot Filter",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weeks.map((week) => (
        <Link key={week.number} href={`/week/${week.number}`}>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer p-6 h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-800">
                {week.title}
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {week.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
