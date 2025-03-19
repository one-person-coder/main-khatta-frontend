import { useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import LoginForm from "../components/Login/Form/LoginForm";
import { Particles } from "../components/Login/particles/Particles";

function Auth() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-gray-50 dark:bg-zinc-900 pt-16 md:flex-row">
        <div className="relative hidden w-full overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 dark:bg-none md:block md:w-1/2 lg:w-2/5">
          <Particles className="absolute inset-0" quantity={70} />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-8 rounded-full bg-white/10 p-6 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-12 w-12 text-white"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
            </div>
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Jeddah Traders
            </h1>
            <p className="mb-6 text-xl text-white/80">General Order Supplier</p>
            <div className="max-w-md text-white/80">
              <p className="mb-8">
                Your trusted partner for all trading needs. Access your account
                to manage orders, track shipments, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="font-semibold">Premium Service</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                  <span className="font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                  <span className="font-semibold">Global Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-gray-50 dark:bg-zinc-900 px-4 py-8 md:w-1/2 md:py-12 lg:w-3/5 lg:px-8">
          <LoginForm authType={type} />
        </div>
      </main>
    </>
  );
}

export default Auth;
