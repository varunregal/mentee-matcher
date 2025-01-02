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
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {userData.role === "mentor" ? "Mentor" : "Mentee"} Questionnaire - {" "}
              {userData.category === "pre-health" ? "Pre-health" : "Graduate"}
            </h1>
            <p className="mt-2 text-gray-600">
              Please complete all sections of the questionnaire
            </p>
          </div>
          {getQuestionnaireForm()}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;