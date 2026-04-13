import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
      <div className="text-center relative z-10 card-3d-hover bg-card border border-border p-16 rounded-[3rem] shadow-2xl">
        <h1 className="mb-6 text-9xl font-heading font-black text-accent drop-shadow-2xl">404</h1>
        <p className="mb-8 text-2xl font-heading font-bold text-foreground uppercase tracking-widest">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-10 py-4 rounded-2xl bg-accent text-accent-foreground font-heading font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:shadow-accent/40 active:scale-95 transition-all"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
