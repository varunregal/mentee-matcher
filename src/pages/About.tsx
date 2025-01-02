const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">About Mentee Matcher</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 mb-6">
              Mentee Matcher is a platform dedicated to connecting aspiring professionals with experienced mentors in their field. We believe that mentorship is a crucial component of professional development and success.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to make quality mentorship accessible to everyone, whether you're pursuing a career in healthcare or advancing your graduate studies. We carefully match mentees with mentors based on their goals, interests, and expertise.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-6">Our Values</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>Accessibility - Making quality mentorship available to all</li>
              <li>Quality - Ensuring meaningful mentor-mentee relationships</li>
              <li>Growth - Fostering continuous learning and development</li>
              <li>Community - Building a supportive network of professionals</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;