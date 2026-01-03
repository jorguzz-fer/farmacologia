import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import LandingPageV2 from "@/pages/LandingPageV2";
import LandingPageV3 from "@/pages/LandingPageV3";
import LandingPageV5 from "@/pages/LandingPageV5";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPageV3} />
      <Route path="/v1" component={LandingPage} />
      <Route path="/v2" component={LandingPageV2} />
      <Route path="/v3" component={LandingPageV3} />
      <Route path="/v4" component={LandingPageV3} />
      <Route path="/v5" component={LandingPageV5} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
