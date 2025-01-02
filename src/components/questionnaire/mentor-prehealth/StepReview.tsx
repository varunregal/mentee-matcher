import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ReviewData {
  stepOne: {
    specialty: string;
    yearsOfExperience: string;
    currentRole: string;
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
      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
          <div className="grid gap-2">
            <div>
              <span className="text-sm font-medium text-gray-600">Specialty:</span>
              <p className="text-gray-900">{data.stepOne.specialty}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Years of Experience:</span>
              <p className="text-gray-900">{data.stepOne.yearsOfExperience}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Current Role:</span>
              <p className="text-gray-900">{data.stepOne.currentRole}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(1)}
            className="mt-2"
          >
            Edit
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Experience & Achievements</h3>
          <div className="grid gap-2">
            <div>
              <span className="text-sm font-medium text-gray-600">Experience:</span>
              <p className="text-gray-900">{data.stepTwo.experience}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Achievements:</span>
              <p className="text-gray-900">{data.stepTwo.achievements}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Challenges:</span>
              <p className="text-gray-900">{data.stepTwo.challenges}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(2)}
            className="mt-2"
          >
            Edit
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Mentorship Details</h3>
          <div className="grid gap-2">
            <div>
              <span className="text-sm font-medium text-gray-600">Availability:</span>
              <p className="text-gray-900">{data.stepThree.availability}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Mentorship Style:</span>
              <p className="text-gray-900">{data.stepThree.mentorshipStyle}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Expectations:</span>
              <p className="text-gray-900">{data.stepThree.expectations}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(3)}
            className="mt-2"
          >
            Edit
          </Button>
        </div>
      </Card>

      <div className="flex gap-4 justify-between mt-8">
        <Button variant="outline" onClick={onPrevious}>
          Previous
        </Button>
        <Button onClick={onSubmit}>
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default StepReview;