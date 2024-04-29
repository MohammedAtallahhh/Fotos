import Posts from "@/components/Posts";
import { PostsSkeleton } from "@/components/Skeletons";
import { Suspense } from "react";

function DashboardPage() {
  return (
    <main className="flex flex-grow w-full">
      <div className="flex flex-col flex-1 gap-y-8 mx-auto pb-20 max-w-lg">
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}

export default DashboardPage;
