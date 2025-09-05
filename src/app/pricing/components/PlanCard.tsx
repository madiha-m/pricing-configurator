"use client";

import { Card, Button, Typography } from "antd";

const { Title, Text } = Typography;

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  highlight,
}) => {
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
        <Text className="!text-gray-400 block !mb-4">{description}</Text>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-teal-400">{price}</span>
          <span className="text-gray-400">{period}</span>
        </div>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-white flex items-center gap-2">
              ✅ {feature}
            </li>
          ))}
        </ul>
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
      </div>
    </Card>
  );
};

export default PlanCard;
