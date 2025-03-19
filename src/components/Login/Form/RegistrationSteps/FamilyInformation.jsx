import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WarningToast } from "../../../../utils/CustomToasts";

const FamilyInformation = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  setFormData,
}) => {
  const ChangeNextStep = () => {
    const {
      family_name,
      family_relation,
      family_phone_no,
      family_description,
    } = formData;

    // if (
    //   !family_name ||
    //   !family_relation ||
    //   !family_phone_no ||
    //   !family_description
    // ) {
    //   WarningToast("Please complete all required fields before proceeding.");
    //   return;
    // }

    nextStep();
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-purple-100 dark:bg-transparent dark:border-none bg-purple-50/30 p-6">
        <h3 className="mb-4 text-lg font-medium text-purple-800 dark:text-purple-400">
          Family Information
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="family_name">Family Member Name</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="family_name"
                name="family_name"
                placeholder="Enter family member name"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.family_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="family_relation">Relationship</Label>
            <Select
              value={formData.family_relation}
              onValueChange={(value) =>
                handleSelectChange("family_relation", value)
              }
            >
              <SelectTrigger className="w-full outline-1 outline-[#d1cfd4] border-2 border-transparent rounded-[6px] duration-200 px-3 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,0.7)] !bg-transparent !h-[41px]">
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spouse">Spouse</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="sibling">Sibling</SelectItem>
                <SelectItem value="child">Child</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="family_phone_no">Family Member Phone</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="family_phone_no"
                name="family_phone_no"
                placeholder="Enter family member phone"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.family_phone_no}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="family_description">
              Family Member Description
            </Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="family_description"
                name="family_description"
                placeholder="Enter additional details"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.family_description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="border-gray-200 !py-[21px] hover:bg-gray-50 hover:text-purple-600 transition-all duration-200 cursor-pointer dark:hover:bg-zinc-800 dark:hover:text-white"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous Step
        </Button>
        <Button
          type="button"
          onClick={ChangeNextStep}
          className="relative overflow-hidden rounded-lg !bg-gradient-to-r !from-purple-600 !via-purple-500 !to-purple-600 bg-size-200 px-6 !py-[21px] text-base font-medium text-white transition-all duration-300 hover:bg-right hover:shadow-lg cursor-pointer"
          style={{ backgroundSize: "200% auto" }}
        >
          <span className="relative z-10 flex items-center">
            Next Step
            <ChevronRight className="ml-2 h-4 w-4" />
          </span>
          <span className="absolute bottom-0 left-0 h-1 w-full bg-white/50"></span>
        </Button>
      </div>
    </div>
  );
};

export default FamilyInformation;
