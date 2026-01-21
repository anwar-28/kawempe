"use client";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";

const schoolFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const QuickActions = () => {
  const actions = [
    {
      title: "Registration Inquiry",
      description:
        "Have questions about admissions or enrollment? Contact us for guidance on entry requirements, procedures, and important dates.",
      buttonText: "Contact Us",
      href: "/contact",
      bgColor: "bg-red-400",
    },
    {
      title: "Online Registration",
      description:
        "Apply for admission online quickly and easily. Complete the registration process from anywhere at your convenience.",
      buttonText: "Apply Now",
      href: "/admissions",
      bgColor: "bg-green-400",
    },
    {
      title: "Academics & Staff",
      description:
        "Access staff portals, academic resources, and stay updated with school news and events.",
      buttonText: "Learn More",
      href: "/academics",
      bgColor: "bg-blue-400",
    },
    {
      title: "School News",
      description:
        "Get the latest updates on events, announcements, and important dates at Kawempe Muslim Secondary School.",
      buttonText: "View News",
      href: "/news",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <section className="bg-gray-50 text-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-12 text-center ${schoolFont.className}`}
        >
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-lg flex flex-col justify-between ${action.bgColor} text-white hover:scale-105 transition-transform`}
            >
              <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
              <p className="text-sm mb-4">{action.description}</p>
              <Link
                href={action.href}
                className="mt-auto bg-white text-gray-900 font-medium px-4 py-2 rounded-md text-center hover:bg-gray-200 transition"
              >
                {action.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
