import CollectiveDelivery from "../../components/home/CollectiveDelivery";
import Features from "../../components/home/Features";
import FeaturesGrid from "../../components/home/FeaturesGrid";
import Framework from "../../components/home/Framework";
import JoinUs from "../../components/home/JoinUs";
import ProcessMap from "../../components/home/ProcessMap";
import UpliftDelivery from "../../components/home/UpliftDelivery";


const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden">
      <Features />
      <FeaturesGrid />
      <UpliftDelivery />
      <CollectiveDelivery />
      <Framework />
      <ProcessMap />
      <JoinUs />
    </div>
  )
}

export default HomeScreen
