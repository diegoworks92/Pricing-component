import { cn } from "@/libs/utils";

interface HeaderPricingProps {
  plan: string;
  onClickMonthly: () => void;
  onClickYearly: () => void;
}

const HeaderPricing = ({
  plan,
  onClickMonthly,
  onClickYearly,
}: HeaderPricingProps) => {
  return (
    <ul className="p-2 bg-gray-950 text-white flex items-center gap-2 rounded-full">
      <li>
        <button
          onClick={onClickMonthly}
          className={cn(
            "py-2 px-4 rounded-full",
            plan === "monthly" && "bg-primary"
          )}
        >
          Monthly
        </button>
      </li>
      <li>
        <button
          onClick={onClickYearly}
          className={cn(
            "py-2 px-4 rounded-full",
            plan === "yearly" && "bg-primary"
          )}
        >
          Yearly
        </button>
      </li>
    </ul>
  );
};

export default HeaderPricing;
