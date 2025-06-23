import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fundamentals from "./pages/Fundamentals";
import Reserves from "./pages/Reserves";
import Consumption from "./pages/Consumption";
import PhysicalMarkets from "./pages/PhysicalMarkets";
import EnergyTransformation from "./pages/EnergyTransformation";
import USEnergyBalance from "./pages/USEnergyBalance";
import FuturesMarkets from "./pages/FuturesMarkets";
import OTCMarkets from "./pages/OTCMarkets";
import RiskManagement from "./pages/RiskManagement";
import TermStructure from "./pages/TermStructure";
import PriceOutlook from "./pages/PriceOutlook";
import NotFound from "./pages/NotFound";
import CommodityDerivatives from "./pages/CommodityDerivatives";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/reserves" element={<Reserves />} />
          <Route path="/consumption" element={<Consumption />} />
          <Route path="/physical-markets" element={<PhysicalMarkets />} />
          <Route path="/energy-transformation" element={<EnergyTransformation />} />
          <Route path="/us-energy-balance" element={<USEnergyBalance />} />
          <Route path="/futures-markets" element={<FuturesMarkets />} />
          <Route path="/otc-markets" element={<OTCMarkets />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/term-structure" element={<TermStructure />} />
          <Route path="/price-outlook" element={<PriceOutlook />} />
          <Route path="/commodity-derivatives" element={<CommodityDerivatives />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
