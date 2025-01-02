import { Check } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Platform Features</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Smart Matching Algorithm",
                features: [
                  "Personality-based matching",
                  "Goal alignment",
                  "Experience level consideration",
                  "Field-specific matching"
                ]
              },
              {
                title: "Communication Tools",
                features: [
                  "Integrated messaging system",
                  "Video call capabilities",
                  "Schedule management",
                  "Resource sharing"
                ]
              },
              {
                title: "Progress Tracking",
                features: [
                  "Goal setting and monitoring",
                  "Meeting history",
                  "Achievement tracking",
                  "Feedback system"
                ]
              },
              {
                title: "Resource Library",
                features: [
                  "Field-specific resources",
                  "Best practices guides",
                  "Career development materials",
                  "Success stories"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;