import { cn } from "@/libs/utils";
import { PiStarFourFill } from "react-icons/pi";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

interface PricingCardProps {
  plan: string;
  price: number;
  description: string;
  features: {
    feature: string;
    include: boolean;
  }[];
  active?: boolean;
  offer?: boolean;
}

const PricingCard = ({
  plan,
  price,
  description,
  features,
  active,
  offer,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative border-2 border-gray-950 p-8 rounded-2xl hover:bg-gray-950 hover:text-white transition-all duration-300 hover:-translate-y-5",
        active && "bg-gray-950 lg:-translate-y-5 text-white"
      )}
    >
      <div className="space-y-5">
        <PiStarFourFill className="text-primary text-2xl" />
        {offer === true ? (
          <span className="bg-primary font-semibold p-1 text-xs text-black absolute right-0 top-3">
            BEST OFFER
          </span>
        ) : (
          ""
        )}
        <h2 className="text-2xl font-bold">{plan}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-end">
          <h1 className="text-4xl font-bold">{price}€</h1>
          <h5 className="text-gray-500">/ Per month</h5>
        </div>
      </div>
      <hr className="border-gray-300 my-5" />
      <div className="space-y-5">
        <h3 className="text-lg font-bold">Features</h3>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature.feature} className="flex items-center gap-2">
              {feature.include ? (
                <RiCheckboxCircleFill className="text-purple-800" />
              ) : (
                <RiCloseCircleFill className="text-red-600" />
              )}
              {feature.feature}
            </li>
          ))}
        </ul>
        <button className="border-2 border-gray-950 bg-gray-100 py-3 text-gray-950 px-4 rounded-full w-full hover:bg-gradient-to-b hover:from-primary hover:via-primary hover:to-yellow-500 transition-all duration-300 hover:text-white">
          Start with the {plan}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
