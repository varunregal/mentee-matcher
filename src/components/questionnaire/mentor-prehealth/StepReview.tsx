import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <ScrollArea className="h-[60vh] pr-4">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
              <CardDescription>
                <Button
                  variant="link"
                  onClick={() => onEdit(1)}
                  className="p-0 h-auto font-normal text-blue-500"
                >
                  Edit this section
                </Button>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Specialty</h4>
                <p className="text-gray-600">{data.stepOne.specialty}</p>
              </div>
              <div>
                <h4 className="font-semibold">Years of Experience</h4>
                <p className="text-gray-600">{data.stepOne.yearsOfExperience}</p>
              </div>
              <div>
                <h4 className="font-semibold">Current Role</h4>
                <p className="text-gray-600">{data.stepOne.currentRole}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience & Achievements</CardTitle>
              <CardDescription>
                <Button
                  variant="link"
                  onClick={() => onEdit(2)}
                  className="p-0 h-auto font-normal text-blue-500"
                >
                  Edit this section
                </Button>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Experience</h4>
                <p className="text-gray-600">{data.stepTwo.experience}</p>
              </div>
              <div>
                <h4 className="font-semibold">Achievements</h4>
                <p className="text-gray-600">{data.stepTwo.achievements}</p>
              </div>
              <div>
                <h4 className="font-semibold">Challenges Overcome</h4>
                <p className="text-gray-600">{data.stepTwo.challenges}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentorship Details</CardTitle>
              <CardDescription>
                <Button
                  variant="link"
                  onClick={() => onEdit(3)}
                  className="p-0 h-auto font-normal text-blue-500"
                >
                  Edit this section
                </Button>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Availability</h4>
                <p className="text-gray-600">{data.stepThree.availability}</p>
              </div>
              <div>
                <h4 className="font-semibold">Mentorship Style</h4>
                <p className="text-gray-600">{data.stepThree.mentorshipStyle}</p>
              </div>
              <div>
                <h4 className="font-semibold">Expectations from Mentees</h4>
                <p className="text-gray-600">{data.stepThree.expectations}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          className="flex-1"
        >
          Previous
        </Button>
        <Button type="button" onClick={onSubmit} className="flex-1">
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default StepReview;