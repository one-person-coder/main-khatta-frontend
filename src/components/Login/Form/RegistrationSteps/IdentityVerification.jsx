import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { WarningToast } from "../../../../utils/CustomToasts";

const IdentityVerification = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
  setFormData,
}) => {
  const ChangeNextStep = () => {
    const { cnic_no, user_img, cnic_front_img, cnic_back_img } = formData;

    // if (!cnic_no || !user_img || !cnic_front_img || !cnic_back_img) {
    //   WarningToast("Please complete all required fields before proceeding.");
    //   return;
    // }

    nextStep();
  };

  const handleFileChange = (name, e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="cnic_no">CNIC Number</Label>
          <div className="group relative border-2 border-transparent">
            <input
              id="cnic_no"
              name="cnic_no"
              placeholder="Enter your CNIC number"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.cnic_no}
              onChange={handleChange}
              required
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Format: xxxxx-xxxxxxx-x
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Profile Image</Label>
        <div className="group cursor-pointer rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-500 dark:hover:border-purple-400 p-4 text-center transition-all duration-300 hover:border-purple-400 hover:bg-purple-50/30 dark:hover:bg-zinc-800">
          <div className="mb-2 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100 transition-all duration-300 group-hover:shadow-md">
              {formData.user_img ? (
                <img
                  src={
                    URL.createObjectURL(formData.user_img) || "/placeholder.svg"
                  }
                  alt="Profile preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400 transition-all duration-300 group-hover:text-purple-500" />
                </div>
              )}
            </div>
          </div>
          <Label
            htmlFor="user_img"
            className="cursor-pointer justify-center !text-center text-sm !font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
          >
            Upload Profile Photo
          </Label>
          <input
            id="user_img"
            name="user_img"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFileChange("user_img", e)}
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-zinc-300">PNG, JPG up to 5MB</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label>CNIC Images</Label>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="group cursor-pointer rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-500 dark:hover:border-purple-400 p-4 text-center transition-all duration-300 hover:border-purple-400 hover:bg-purple-50/30 dark:hover:bg-zinc-800">
            <div className="mb-2 flex justify-center">
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 group-hover:shadow-md">
                {formData.cnic_front_img ? (
                  <img
                    src={
                      URL.createObjectURL(formData.cnic_front_img) ||
                      "/placeholder.svg"
                    }
                    alt="CNIC front preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400 transition-all duration-300 group-hover:text-purple-500" />
                  </div>
                )}
              </div>
            </div>
            <Label
              htmlFor="cnic_front_img"
              className="cursor-pointer justify-center !text-center text-sm !font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
            >
              Upload CNIC Front
            </Label>
            <input
              id="cnic_front_img"
              name="cnic_front_img"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange("cnic_front_img", e)}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-zinc-300">PNG, JPG up to 5MB</p>
          </div>

          <div className="group cursor-pointer rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-500 dark:hover:border-purple-400 p-4 text-center transition-all duration-300 hover:border-purple-400 hover:bg-purple-50/30 dark:hover:bg-zinc-800">
            <div className="mb-2 flex justify-center">
              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 group-hover:shadow-md">
                {formData.cnic_back_img ? (
                  <img
                    src={
                      URL.createObjectURL(formData.cnic_back_img) ||
                      "/placeholder.svg"
                    }
                    alt="CNIC back preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400 transition-all duration-300 group-hover:text-purple-500" />
                  </div>
                )}
              </div>
            </div>
            <Label
              htmlFor="cnic_back_img"
              className="cursor-pointer justify-center !text-center text-sm !font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500"
            >
              Upload CNIC Back
            </Label>
            <input
              id="cnic_back_img"
              name="cnic_back_img"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange("cnic_back_img", e)}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-zinc-300">PNG, JPG up to 5MB</p>
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

export default IdentityVerification;
