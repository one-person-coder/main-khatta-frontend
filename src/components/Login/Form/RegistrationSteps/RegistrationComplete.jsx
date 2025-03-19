import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const RegistrationComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="mb-4 rounded-full bg-green-100 p-6 shadow-md">
        <CheckCircle2 className="h-16 w-16 text-green-600" />
      </div>
      <h3 className="mb-2 text-2xl font-bold">Registration Successful!</h3>
      <p className="mb-6 max-w-md text-muted-foreground">
        Your account has been successfully registered, but it is not yet active.
        The admin will review and activate your account within 24 to 48 hours.
        Thank you for registering on Jeddah Traders.
      </p>
      <Button
        type="button"
        className="relative overflow-hidden rounded-lg !bg-gradient-to-r !from-purple-600 !via-purple-500 !to-purple-600 bg-size-200 px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:bg-right hover:shadow-lg cursor-pointer"
        style={{ backgroundSize: "200% auto" }}
        asChild
      >
        <NavLink to={"/auth?type=login"}>
          <span className="relative z-10">Go to Login</span>
          <span className="absolute bottom-0 left-0 h-1 w-full bg-white/50"></span>
        </NavLink>
      </Button>
    </div>
  );
};

export default RegistrationComplete;
