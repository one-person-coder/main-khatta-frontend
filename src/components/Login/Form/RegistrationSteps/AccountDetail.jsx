import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { WarningToast } from "../../../../utils/CustomToasts";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

const AccountDetail = ({ formData, handleChange, nextStep, prevStep }) => {
  const [showPassword, setShowPassword] = useState(false);

  const ChangeNextStep = () => {
    const { email, username, password, cnf_password, description } = formData;

    // if (!email || !username || !password || !cnf_password || !description) {
    //   WarningToast("Please complete all required fields before proceeding.");
    //   return;
    // }

    // if (password.length < 6) {
    //   WarningToast("Password must be at least 6 characters long.");
    //   return;
    // }

    // if (password !== cnf_password) {
    //   WarningToast("Passwords do not match.");
    //   return;
    // }

    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="group relative border-2 border-transparent">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="group relative border-2 border-transparent">
            <input
              id="username"
              name="username"
              placeholder="Choose a username"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="group relative border-2 border-transparent">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:bg-transparent !cursor-pointer dark:text-zinc-300 dark:hover:text-zinc-100 dark:hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
          {/* <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters long
                </p> */}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <div className="group relative border-2 border-transparent">
            <input
              id="confirm_password"
              name="cnf_password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.cnf_password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">About Yourself</Label>
        <div className="group relative border-2 border-transparent">
          <textarea
            id="description"
            name="description"
            placeholder="Tell us a bit about yourself"
            className="min-h-[80px] w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
            value={formData.description}
            onChange={handleChange}
          />
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

export default AccountDetail;
