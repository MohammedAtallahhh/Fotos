import { SinglePostSkeleton } from "@/components/Skeletons";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import SinglePost from "@/components/SinglePost";
import MorePosts from "@/components/MorePosts";

function PostPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="py-16">
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className="mx-auto my-12 max-w-3xl lg:max-w-4xl" />

      <Suspense>
        <MorePosts postId={id} />
      </Suspense>
    </div>
  );
}

export default PostPage;
