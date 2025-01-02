import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Edit2 } from "lucide-react";

interface ReviewData {
  stepOne: {
    specialty: string;
    yearsOfExperience: string;
    currentRole: string;
    country: string;
    state: string;
  };
  stepTwo: {
    experience: string;
    achievements: string;
    challenges: string;
  };
  stepThree: {
    availability: string;
    mentorshipStyle: string;
    expectations: string;
  };
}

interface StepReviewProps {
  data: ReviewData;
  onSubmit: () => void;
  onEdit: (step: number) => void;
  onPrevious: () => void;
}

const StepReview = ({ data, onSubmit, onEdit, onPrevious }: StepReviewProps) => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary-light/10 to-white border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary-dark">Professional Information</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(1)}
              className="text-primary hover:text-primary-dark"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Specialty</span>
              <p className="mt-1 text-gray-900">{data.stepOne.specialty}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Years of Experience</span>
              <p className="mt-1 text-gray-900">{data.stepOne.yearsOfExperience}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Current Role</span>
              <p className="mt-1 text-gray-900">{data.stepOne.currentRole}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Location</span>
              <p className="mt-1 text-gray-900">
                {data.stepOne.country}
                {data.stepOne.state && `, ${data.stepOne.state}`}
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary-light/10 to-white border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary-dark">Experience & Achievements</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(2)}
              className="text-primary hover:text-primary-dark"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Experience</span>
              <p className="mt-1 text-gray-900">{data.stepTwo.experience}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Achievements</span>
              <p className="mt-1 text-gray-900">{data.stepTwo.achievements}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Challenges</span>
              <p className="mt-1 text-gray-900">{data.stepTwo.challenges}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary-light/10 to-white border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-primary-dark">Mentorship Details</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(3)}
              className="text-primary hover:text-primary-dark"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Availability</span>
              <p className="mt-1 text-gray-900">{data.stepThree.availability}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Mentorship Style</span>
              <p className="mt-1 text-gray-900">{data.stepThree.mentorshipStyle}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-medium text-primary">Expectations</span>
              <p className="mt-1 text-gray-900">{data.stepThree.expectations}</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex gap-4 justify-center mt-8">
        <Button variant="outline" onClick={onPrevious} className="w-32">
          Previous
        </Button>
        <Button onClick={onSubmit} className="w-48 bg-primary hover:bg-primary-dark">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default StepReview;