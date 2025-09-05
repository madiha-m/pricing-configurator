"use client";

import { Card, Button, Typography } from "antd";

const { Title, Text } = Typography;

interface PlanCardProps {
  name: string;
  monthlyPrice: number;
  yearlyDiscount: number;
  description: string;
  features: string[];
  highlight: boolean;
  billingCycle: "monthly" | "yearly";
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  monthlyPrice,
  yearlyDiscount,
  description,
  features,
  highlight,
  billingCycle,
}) => {

  // Yearly total with discount
  const yearlyTotal = monthlyPrice * 12 * (1 - yearlyDiscount / 100);
  const yearlyPerMonth = yearlyTotal / 12;

  return (
    <Card
      className={`flex flex-col h-full !rounded-2xl !shadow-lg !text-left 
        ${highlight ? "!border-2 !border-teal-500" : "!border !border-gray-700"} 
        !bg-[#0a1d2d] !hover:shadow-xl !hover:border-teal-400 !transition-all !duration-300`}
      bodyStyle={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}
    >
      <div className="flex-1">
        {/* Title + description */}
        <Title level={3} className="!text-white">
          {name}
        </Title>
        <Text ellipsis className="!text-gray-400 !mb-4">{description}</Text>

        {/* Price */}
        <div className="mb-6 min-h-[80px] flex flex-col justify-center">
          {billingCycle === "monthly" ? (
            <>
              <div className="flex items-baseline">

                <span className="text-4xl font-bold text-teal-400">
                  ${monthlyPrice.toFixed(2)}
                </span>
                <span className="text-gray-400 ms-1">/month</span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5 ms-2 invisible">
                (placeholder for spacing)
              </div>
            </>
          ) : (
            <>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-teal-400">
                  ${yearlyTotal.toFixed(2)}
                </span>
                <span className="text-gray-400 ms-1">/year</span>
              </div>
              <div className="text-xs text-gray-400 mt-0.5 !ms-2">
                (≈ ${yearlyPerMonth.toFixed(2)}/month)
              </div>
              {yearlyDiscount > 0 && (
                <span className="ml-2 text-teal-400 font-medium">
                  {/* Save {yearlyDiscount}% */}
                </span>
              )}
            </>
          )}
        </div>

        {/* Features */}
        <div className="mb-10">
          <ul className="!mb-2 space-y-2">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="text-white flex items-center gap-2">
                ✅ {feature}
              </li>
            ))}
          </ul>
          {features.length > 4 && (
            <button className="!mt-1 !text-sm !text-gray-400 hover:!text-teal-400">
              +{features.length - 4} more
            </button>
          )}
        </div>
      </div>

      {/* Footer with button */}
      <div className="pt-4 border-t border-gray-700">
        <Button
          type="primary"
          size="large"
          className="w-full !bg-teal-500 hover:!bg-teal-400 !text-white font-semibold rounded-xl"
        >
          BUY NOW
        </Button>
        <p className="text-xs text-gray-400 !mt-2 text-center">15-day free trial</p>

      </div>
    </Card>
  );
};

export default PlanCard;
