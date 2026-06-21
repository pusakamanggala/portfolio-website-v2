import Parser from "rss-parser";
import he from "he";
import Image from "next/image";

type MediumArticle = {
  title: string;
  link: string;
  contentSnippet: string;
  isoDate?: string;
  thumbnail?: string;
};

function extractImage(html: string): string | undefined {
  const matches = [...html.matchAll(/<img[^>]+src="([^">]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !src.includes("medium.com/_/stat")); // exclude tracking pixel
  return matches[0]; // first content image
}

function extractSnippet(html: string): string {
  const text = html.replace(/<[^>]+>/g, "");
  const decoded = he.decode(text);
  return decoded.slice(0, 140);
}

const MEDIUM_USERNAME = "pusakamanggala";

export default async function Article() {
  const parser = new Parser({
    customFields: {
      item: ["content:encoded"],
    },
  });

  const feed = await parser.parseURL(
    `https://medium.com/feed/@${MEDIUM_USERNAME}`
  );

  const articles: MediumArticle[] = feed.items.slice(0, 4).map((item) => {
    const content = item["content:encoded"] || item.content || "";
    return {
      title: item.title ?? "",
      link: item.link ?? "#",
      contentSnippet: extractSnippet(content),
      isoDate: item.isoDate,
      thumbnail: content ? extractImage(content) : undefined,
    };
  });

  return (
    <section id="articles" className="mt-7 pt-7! lg:border-t border-t-gray-700">
      <h2 className="section-title">ARTICLE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article, i) => (
          <div key={i}>
            {article.thumbnail && (
              <div className="relative w-full h-36 mb-3">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </div>
            )}
            <div>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline line-clamp-3"
              >
                {article.title}
              </a>
              <p className="text-gray-400 font-light line-clamp-2">
                {article.contentSnippet}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
