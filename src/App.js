import React from "react";
import Header from "./components/layout/Header";
import Landing from "./components/Sections/Landing";
import Clients from "./components/Sections/Clients";

import Features from "./components/Sections/Features";
import Smart from "./components/Sections/SmartJack";
import Build from "./components/Sections/Build";
import Choose from "./components/Sections/Choose";
import UltimateFeatures from "./components/Sections/UltimateFeatures";
import PaymentCard from "./components/Sections/PaymentCard";
import Trusted from "./components/Sections/Trusted";
import Faq from "./components/Sections/Faq";
import Download from "./components/Sections/Download";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main style={{ margin: "0 auto", maxWidth: 1440 }}>
      <Header />
      <Landing />
      <Trusted />
      <Features />
      <Smart />
      <Build />
      <Choose />
      <UltimateFeatures />
      <PaymentCard />
      <Clients />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
