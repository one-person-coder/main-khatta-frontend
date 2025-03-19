import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import BasicInfo from "./RegistrationSteps/BasicInfo";
import AccountDetail from "./RegistrationSteps/AccountDetail";
import IdentityVerification from "./RegistrationSteps/IdentityVerification";
import FamilyInformation from "./RegistrationSteps/FamilyInformation";
import RefferenceInformation from "./RegistrationSteps/RefferenceInformation";
import RegistrationComplete from "./RegistrationSteps/RegistrationComplete";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    father_name: "",
    username: "",
    email: "",
    password: "",
    cnf_password: "",
    phone_no: "",
    cnic_no: "",
    cnic_front_img: null,
    cnic_back_img: null,
    user_img: null,
    address: "",
    working_address: "",
    description: "",
    gender: "male",
    date_of_birth: "",
    family_name: "",
    family_relation: "other",
    family_phone_no: "",
    family_description: "",
    refer_name: "",
    refer_account_no: "",
    refer_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Registration data:", formData);
    setIsLoading(false);

    setStep(6);
  };

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {step <= 5 ? (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm !font-semibold text-purple-700">
              {step === 1
                ? "Basic Information"
                : step === 2
                ? "Account Details"
                : step === 3
                ? "Identity Verification"
                : step === 4
                ? "Family Information"
                : "References & Verification"}
            </span>
          </div>
          <Progress
            value={progress}
            className="h-2 w-full overflow-hidden rounded-full bg-gray-100 [&>div]:bg-purple-600"
          />
        </div>
      ) : null}

      <div className="rounded-xl bg-gray-50/50 dark:bg-zinc-900 p-6 shadow-inner">
        {step === 1 && (
          <BasicInfo
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <AccountDetail
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <IdentityVerification
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
          />
        )}

        {step === 4 && (
          <FamilyInformation
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
          />
        )}

        {step === 5 && (
          <RefferenceInformation
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        )}

        {step === 6 && <RegistrationComplete />}
      </div>
    </div>
  );
}
