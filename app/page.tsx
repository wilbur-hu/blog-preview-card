import PreviewCard from "@/app/components/previewcard";
import User from "@/app/lib/user";
import Article from "./lib/article";
import avatar from "@/public/images/image-avatar.webp";
import illstruation from "@/public/images/illustration-article.svg";

export default function Home() {
  const user = new User("Greg Hooper", avatar.src);

  const article = new Article(
    "HTML & CSS foundations",
    "These languages are the backbone of every website, defining structure, content, and presentation.",
    "Learning",
    illstruation.src,
    new Date("2023-12-21"),
    user
  );

  return (
    <>
      <main className="flex flex-col self-stretch grow items-center justify-center">
        <PreviewCard article={article} />
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/wilbur-hu" target="_blank">
          Wilbur Hu
        </a>
        .
      </div>
    </>
  );
}
