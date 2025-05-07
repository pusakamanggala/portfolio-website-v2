function convertDateForIos(dateString: string): Date | null {
  const arr = dateString.split(/[-T:.Z ]/).map(Number);
  if (arr.length >= 3) {
    return new Date(
      arr[0],
      arr[1] - 1,
      arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0
    );
  }
  return null;
}

export default async function Footer() {
  let lastUpdated: string | null = null;

  try {
    const res = await fetch(
      "https://api.github.com/repos/pusakamanggala/portfolio-website-v2",
      { next: { revalidate: 86400 } }
    );
    const repoData = await res.json();

    if (repoData?.pushed_at) {
      const date = convertDateForIos(repoData.pushed_at);
      if (date && !isNaN(date.getTime())) {
        lastUpdated = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    }
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
  }

  return (
    <footer className="pt-16 pb-20 text-end text-sm text-gray-400">
      {lastUpdated && <p>Last updated: {lastUpdated}</p>}
    </footer>
  );
}
