import { useState, useEffect } from "react";
import { Eye, EyeOff, LockKeyhole, User, User2Icon } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Label } from "../../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { cn } from "@/lib/utils";
import RegistrationForm from "./RegistrationForm";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ authType }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  useEffect(() => {
    if (authType === "login") {
      setActiveTab("login");
    } else if (authType === "register") {
      setActiveTab("register");
    }
  }, [authType]);

  useEffect(() => {
    if (activeTab === "login") {
      navigate("/auth?type=login");
    } else if (activeTab === "register") {
      navigate("/auth?type=register");
    }
  }, [activeTab]);

  const changeActiveTab = () => {
    setActiveTab((prevActiveTab) =>
      prevActiveTab === "login" ? "register" : "login"
    );
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle login logic here
    console.log("Login attempt with:", formData);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl">
      <Card className="overflow-hidden border-none bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-300 hover:shadow-purple-100 dark:shadow-none">
        <CardHeader className="space-y-1 pb-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-purple-400 text-white shadow-lg shadow-purple-200 dark:shadow-none">
            <User className="h-8 w-8" />
          </div>
          <CardTitle className="text-center text-2xl !font-bold">
            Welcome to Jeddah Traders
          </CardTitle>
          <CardDescription className="text-center text-base dark:text-zinc-300">
            Sign in to your account or register as a new customer
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-4">
          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-8">
              <div className="relative mx-auto flex max-w-md justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-zinc-600"></div>
                </div>

                <TabsList className="relative z-10 flex rounded-full border border-gray-200 bg-white dark:border-none dark:bg-zinc-800 p-1 py-6 py shadow-md">
                  <TabsTrigger
                    value="login"
                    className={cn(
                      "flex items-center gap-2 rounded-full px-6 py-5 text-sm font-medium transition-all duration-300",
                      "data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md",
                      "data-[state=inactive]:bg-transparent dark:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-zinc-200 data-[state=active]:cursor-auto cursor-pointer dark:data-[state=inactive]:hover:bg-zinc-700 dark:data-[state=active]:bg-purple-600"
                    )}
                  >
                    <LockKeyhole className="h-4 w-4" />
                    <span className="hidden sm:inline">Account Login</span>
                    <span className="inline sm:hidden">Login</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className={cn(
                      "flex items-center gap-2 rounded-full px-6 py-5 text-sm font-medium transition-all duration-300",
                      "data-[state=active]:bg-purple-600 dark:data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md",
                      "data-[state=inactive]:bg-transparent dark:text-white dark:data-[state=inactive]:hover:bg-zinc-700 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-zinc-200 data-[state=active]:cursor-auto cursor-pointer"
                    )}
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Register Account</span>
                    <span className="inline sm:hidden">Register</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-500",
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              )}
            >
              <TabsContent value="login" className="space-y-6">
                <div className="mx-auto max-w-xl space-y-2 rounded-xl bg-white dark:bg-zinc-900 p-6 shadow-[0_0_2px_rgba(0,0,0,0.4)] dark:shadow-[0_0_2px_rgba(255,255,255,0.5)]">
                  <div className="text-center">
                    <h3 className="text-lg !font-semibold text-gray-900 dark:text-white">
                      Sign in to your account
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-zinc-300">
                      Enter your credentials to access your account
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-sm font-medium">
                        Username
                      </Label>
                      <div className="group relative transition-all duration-300">
                        <User2Icon className="absolute left-3 translate-y-[1px] top-2.5 h-5 w-5 text-gray-400 transition-colors duration-300 group-focus-within:text-purple-500" />
                        <input
                          type="text"
                          placeholder="Username"
                          name="username"
                          id="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                          className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 pl-9 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="password"
                          className="text-sm font-medium"
                        >
                          Password
                        </Label>
                      </div>
                      <div className="group relative border-2 border-transparent">
                        <LockKeyhole className="absolute left-3 translate-y-[1px] top-2.5 h-5 w-5 text-gray-400 transition-colors duration-300 group-focus-within:text-purple-500" />
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="w-full border-2 border-transparent outline-1 outline-[#d1cfd4] rounded-[6px] duration-200 py-[8px] px-3 pl-9 dark:outline-zinc-600 focus-visible:outline-none focus:border-2 focus:border-[#8C57FF] placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
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
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className={cn(
                          "relative w-full overflow-hidden rounded-lg !bg-gradient-to-r !from-purple-600 !via-purple-500 !to-purple-600 bg-size-200 px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:bg-right hover:shadow-lg cursor-pointer",
                          isLoading && "opacity-90"
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
                            Signing in...
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">
                              Sign in to Account
                            </span>
                            <span className="absolute bottom-0 left-0 h-1 w-full bg-white/50"></span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-zinc-900 dark:text-zinc-300 px-2 text-muted-foreground">
                      Or New to Jeddah Traders
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 dark:bg-purple-200 text-sm text-purple-700 shadow-sm">
                    <button
                      type="button"
                      className="font-medium cursor-pointer text-purple-600 underline-offset-2 hover:underline"
                      onClick={() => setActiveTab("register")}
                    >
                      Create an account
                    </button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <RegistrationForm />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>

        {/* <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <a href="/terms" className="hover:text-foreground hover:underline">
              Terms
            </a>
            <span>•</span>
            <a
              href="/privacy"
              className="hover:text-foreground hover:underline"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="/contact"
              className="hover:text-foreground hover:underline"
            >
              Contact
            </a>
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
