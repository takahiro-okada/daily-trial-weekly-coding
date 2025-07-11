import { DotFilter } from "./components/DotFilter";
import { TextAnimation } from "./components/TextAnimation";
import { FrostedGlass } from "./components/FrostedGlass";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return null;

  const renderWeeklyTask = () => {
    switch (id) {
      case "1":
        return <DotFilter />;
      case "2":
        return <TextAnimation />;
      case "3":
        return <FrostedGlass />;
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
