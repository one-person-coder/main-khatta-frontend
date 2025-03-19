import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { WarningToast } from "../../../../utils/CustomToasts";

const BasicInfo = ({
  formData,
  handleChange,
  setFormData,
  nextStep,
  lastName = false,
}) => {
  const [date, setDate] = useState();

  useEffect(() => {
    if (formData.date_of_birth) {
      setDate(formData.date_of_birth);
    }
  }, []);

  const handleDateChange = (date) => {
    setDate(date.target.value);
    if (date) {
      setFormData((prev) => ({
        ...prev,
        date_of_birth: date.target.value,
      }));
    }
  };
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const ChangeNextStep = () => {
    const {
      fullname,
      father_name,
      phone_no,
      gender,
      date_of_birth,
      address,
      working_address,
    } = formData;

    // if (
    //   !fullname ||
    //   !father_name ||
    //   !phone_no ||
    //   !gender ||
    //   !date_of_birth ||
    //   !address ||
    //   !working_address
    // ) {
    //   WarningToast("Please complete all required fields before proceeding.");
    //   return;
    // }
    nextStep();
  };

  return (
    <div>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className={`space-y-2 ${lastName ? "" : "col-span-2"}`}>
            <Label htmlFor="fullname">Full Name</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {lastName && (
            <div className="space-y-2">
              <Label htmlFor="lastname">Last Name</Label>
              <div className="group relative border-2 border-transparent">
                <input
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                  className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="father_name">Father's Name</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="father_name"
                name="father_name"
                placeholder="Enter your father's name"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.father_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone_no">Phone Number</Label>
            <div className="group relative border-2 border-transparent">
              <input
                id="phone_no"
                name="phone_no"
                placeholder="Enter your phone number"
                className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={formData.phone_no}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange("gender", value)}
            >
              <SelectTrigger className="w-full outline-1 outline-[#d1cfd4] border-2 border-transparent rounded-[6px] duration-200 px-3 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,0.7)] !bg-transparent !h-[41px]">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date-of-birth">Date of Birth</Label>
            <input
              value={date}
              name="date_of_birth"
              id="date-of-birth"
              type="date"
              placeholder="Enter your phone number"
              className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              onChange={handleDateChange}
              required
              style={{
                colorScheme: "light dark",
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Residential Address</Label>
          <div className="group relative border-2 border-transparent">
            <textarea
              id="address"
              name="address"
              placeholder="Enter your residential address"
              className="min-h-[80px] w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="working_address">Working Address</Label>
          <div className="group relative border-2 border-transparent">
            <textarea
              id="working_address"
              name="working_address"
              placeholder="Enter your working address"
              className="min-h-[80px] w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
              value={formData.working_address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
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
    </div>
  );
};

export default BasicInfo;
