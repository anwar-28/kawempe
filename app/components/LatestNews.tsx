import React from "react";

const LatestNews = () => {
  const articles = [
    {
      title: "School Annual Day Highlights",
      description:
        "Catch up on all the exciting moments from our annual day celebrations, including awards and performances.",
      link: "#",
    },
    {
      title: "New Library Resources",
      description:
        "Our library just got a major update! Explore the latest books, journals, and digital resources available to students.",
      link: "#",
    },
    {
      title: "Sports Achievements",
      description:
        "Celebrating our students' incredible performances in inter-school competitions this month.",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 text-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
