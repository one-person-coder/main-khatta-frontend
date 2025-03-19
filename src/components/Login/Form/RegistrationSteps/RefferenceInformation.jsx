import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

const RefferenceInformation = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border border-purple-100 bg-purple-50/30 p-6 dark:bg-transparent dark:border-none">
        <h3 className="mb-4 text-lg font-medium text-purple-800 dark:text-purple-400">
          Reference Information (Optional)
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="refer_name">Reference Name</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="refer_name"
                name="refer_name"
                placeholder="Enter reference name"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.refer_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="refer_account_no">Reference Account Number</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="refer_account_no"
                name="refer_account_no"
                placeholder="Enter reference account number"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.refer_account_no}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <Label htmlFor="refer_description">Reference Description</Label>
          <div className="group relative border-2 border-transparent">
            <textarea
              id="refer_description"
              name="refer_description"
              placeholder="Enter additional details about your reference"
              className="min-h-[80px] w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.refer_description}
              onChange={handleChange}
            />
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
          type="submit"
          className={cn(
            "relative overflow-hidden rounded-lg !bg-gradient-to-r !from-purple-600 !via-purple-500 !to-purple-600 bg-size-200 px-6 !py-[21px] text-base font-medium text-white transition-all duration-300 hover:bg-right hover:shadow-lg cursor-pointer",
            isLoading && "opacity-80"
          )}
          style={{ backgroundSize: "200% auto" }}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Registering...
            </>
          ) : (
            <>
              <span className="relative z-10">Complete Registration</span>
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white/50"></span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default RefferenceInformation;
