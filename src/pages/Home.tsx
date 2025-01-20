import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Network, Sparkles, HandShake, Star } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-secondary-light/20 to-primary-light/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-dark leading-tight mb-6 max-w-4xl mx-auto">
              The first student-led organization committed to working to shrink the socioeconomic gap in medical and graduate school
              <span className="text-primary"> -- one application at a time</span>
            </h1>
            <Link to="/services">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white gap-2 h-14 px-8 text-lg">
                Our Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "2100+", label: "Mentees", icon: Users },
              { number: "1000+", label: "Mentors", icon: GraduationCap },
              { number: "100s", label: "Students Admitted", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-secondary-light/30 backdrop-blur-sm"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-secondary-dark mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">Our Services</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Personal Statement Review",
                description: "Receive at least two rounds of detailed feedback on personal statements and other written application materials."
              },
              {
                icon: HandShake,
                title: "Practice Interviews",
                description: "Prepare for interviews with your mentor and with others. We regularly host individual and group practice interviews."
              },
              {
                icon: Network,
                title: "Professional Networking",
                description: "Join an international group of students and professionals committed to increasing diversity in STEM."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-secondary-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark leading-tight">
                100% free<br />100% of the time
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The cost of professional admissions advising is an enormous barrier for students pursing careers in STEM. Project SHORT strives to demystify this process by matching students one-on-one with graduate student mentors in their field -- all for free.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark leading-tight">
                Mentoring doesn't stop once you're accepted
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Project SHORT frequently hosts professional development webinars and other events, to facilitate networking, skill-building, and collaboration amongst our diverse team of medical and graduate students. Mentees are encouraged to get involved while applying and continue working and growing with us once accepted.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-secondary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Apply to join us</h2>
            <div className="flex justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="flex justify-center gap-6 pt-8">
              {/* Social links - replace # with actual social media links */}
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                Twitter
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                LinkedIn
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;