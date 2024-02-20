import React from "react";
import Article from "@/app/lib/article";
import Image from "next/image";

export default function PreviewCard({
  article,
}: Readonly<{
  article: Article;
}>) {
  const options = { day: "2-digit", month: "short", year: "numeric" } as const;
  const publishedAtString = article.publishedAt.toLocaleDateString(
    "en-GB",
    options
  );

  return (
    <section className="flex flex-col p-5 border border-black w-[380px] bg-white rounded-2xl shadow-[9px_8px_0px_0px_black]">
      <div className="relative w-full h-[200px]">
        <Image
          src={article.illustration}
          alt="artile illustration"
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <div className="px-3 py-1 bg-yellow font-extrabold self-start text-sm rounded mt-6">
        {article.category}
      </div>
      <p className="mt-3 text-sm">Published {publishedAtString}</p>
      <h2 className="font-extrabold text-2xl mt-4">{article.title}</h2>
      <p className="mt-5 text-grey">{article.description}</p>

      <div className="flex mt-6 items-center">
        <div className="w-8 h-8 relative">
          <Image src={article.author.avatarUrl} alt="avatar" fill />
        </div>
        <span className="text-sm font-extrabold ml-2">{article.author.name}</span>

      </div>
    </section>
  );
}
