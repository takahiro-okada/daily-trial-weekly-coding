import { DotFilter } from "./components/DotFilter";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  if (!id) return null;

  const renderWeeklyTask = () => {
    switch (id) {
      case "1":
        return <DotFilter />;
      default:
        return (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                ページが見つかりません
              </h1>
            </div>
          </div>
        );
    }
  };

  return <div className="relative">{renderWeeklyTask()}</div>;
}
