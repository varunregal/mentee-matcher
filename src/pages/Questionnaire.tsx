import { useLocation, Navigate } from "react-router-dom";
import MentorPreHealthForm from "@/components/questionnaire/MentorPreHealthForm";
import MentorGraduateForm from "@/components/questionnaire/MentorGraduateForm";
import MenteePreHealthForm from "@/components/questionnaire/MenteePreHealthForm";
import MenteeGraduateForm from "@/components/questionnaire/MenteeGraduateForm";

const Questionnaire = () => {
  const location = useLocation();
  const userData = location.state;

  if (!userData) {
    return <Navigate to="/signup" replace />;
  }

  const getQuestionnaireForm = () => {
    const { role, category } = userData;
    
    if (role === "mentor" && category === "pre-health") {
      return <MentorPreHealthForm />;
    }
    if (role === "mentor" && category === "graduate") {
      return <MentorGraduateForm />;
    }
    if (role === "mentee" && category === "pre-health") {
      return <MenteePreHealthForm />;
    }
    if (role === "mentee" && category === "graduate") {
      return <MenteeGraduateForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">
            {userData.role === "mentor" ? "Mentor" : "Mentee"} Questionnaire
          </h1>
          <p className="text-purple-100">
            {userData.category === "pre-health" ? "Pre-health" : "Graduate"} Program
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          {getQuestionnaireForm()}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;