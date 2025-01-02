import { useLocation, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 py-12 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {userData.role === "mentor" ? "Mentor" : "Mentee"} Questionnaire - {" "}
            {userData.category === "pre-health" ? "Pre-health" : "Graduate"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getQuestionnaireForm()}
        </CardContent>
      </Card>
    </div>
  );
};

export default Questionnaire;