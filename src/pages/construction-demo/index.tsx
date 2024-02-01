import SuccessCard from "./successCard";
import QualityService from "./QualityService";
import Sustainability from "./Sustainability";
import Footer from "./Footer";
import ClientFeedback from "./ClientFeedback";
import NavSection from "./NavSection";

function Construction() {
  return (
    <>
      <NavSection />

      <QualityService />
      <Sustainability />
      <ClientFeedback />
      <Footer />
    </>
  );
}

export default Construction;
