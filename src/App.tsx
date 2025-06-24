
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHomepage from "./pages/MainHomepage";
import OilHomepage from "./pages/OilHomepage";
import GasHomepage from "./pages/GasHomepage";
import MLHomepage from "./pages/MLHomepage";

// Oil section pages (preserved exactly)
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
import CommodityDerivatives from "./pages/CommodityDerivatives";

// Gas section pages
import GasReserves from "./pages/gas/GasReserves";
import GasFundamentals from "./pages/gas/GasFundamentals";
import GasConsumption from "./pages/gas/GasConsumption";
import PhysicalGasMarkets from "./pages/gas/PhysicalGasMarkets";
import EuropeanGasBalance from "./pages/gas/EuropeanGasBalance";
import GasTrading from "./pages/gas/GasTrading";
import GasTermStructure from "./pages/gas/GasTermStructure";
import GasPriceOutlook from "./pages/gas/GasPriceOutlook";
import GasDerivatives from "./pages/gas/GasDerivatives";

// ML section pages (placeholders)
import LinearRegression from "./pages/ml/LinearRegression";
import Regularization from "./pages/ml/Regularization";
import XGBoost from "./pages/ml/XGBoost";
import NeuralNetworks from "./pages/ml/NeuralNetworks";
import NHITS from "./pages/ml/NHITS";
import ModelComparison from "./pages/ml/ModelComparison";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<MainHomepage />} />
        
        {/* Oil Markets Section */}
        <Route path="/oil" element={<OilHomepage />} />
        <Route path="/oil/fundamentals" element={<Fundamentals />} />
        <Route path="/oil/reserves" element={<Reserves />} />
        <Route path="/oil/consumption" element={<Consumption />} />
        <Route path="/oil/physical-markets" element={<PhysicalMarkets />} />
        <Route path="/oil/energy-transformation" element={<EnergyTransformation />} />
        <Route path="/oil/us-energy-balance" element={<USEnergyBalance />} />
        <Route path="/oil/futures-markets" element={<FuturesMarkets />} />
        <Route path="/oil/otc-markets" element={<OTCMarkets />} />
        <Route path="/oil/risk-management" element={<RiskManagement />} />
        <Route path="/oil/term-structure" element={<TermStructure />} />
        <Route path="/oil/price-outlook" element={<PriceOutlook />} />
        <Route path="/oil/commodity-derivatives" element={<CommodityDerivatives />} />
        
        {/* Gas Markets Section */}
        <Route path="/gas" element={<GasHomepage />} />
        <Route path="/gas/reserves" element={<GasReserves />} />
        <Route path="/gas/fundamentals" element={<GasFundamentals />} />
        <Route path="/gas/european-balance" element={<EuropeanGasBalance />} />
        <Route path="/gas/trading" element={<GasTrading />} />
        <Route path="/gas/term-structure" element={<GasTermStructure />} />
        <Route path="/gas/price-outlook" element={<GasPriceOutlook />} />
        <Route path="/gas/derivatives" element={<GasDerivatives />} />
        
        {/* Machine Learning Section */}
        <Route path="/ml" element={<MLHomepage />} />
        <Route path="/ml/linear-regression" element={<LinearRegression />} />
        <Route path="/ml/regularization" element={<Regularization />} />
        <Route path="/ml/xgboost" element={<XGBoost />} />
        <Route path="/ml/neural-networks" element={<NeuralNetworks />} />
        <Route path="/ml/nhits" element={<NHITS />} />
        <Route path="/ml/model-comparison" element={<ModelComparison />} />
        
        {/* Legacy routes redirect to oil section */}
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
  </QueryClientProvider>
);

export default App;
