"use client";

import { Segmented, Typography } from "antd";
import PlanCard from "./PlanCard";
import { plans } from "../data/plans";
import { useState } from "react";

const { Title } = Typography;

const PricingSection = () => {

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-[#001529] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Title level={2} className="!text-white mb-12">
          Choose a right plan for you
        </Title>

        {/* Toggler */}
        <div className="mb-12 flex justify-center">
          <Segmented
            options={["Monthly", "Yearly"]}
            value={billingCycle === "monthly" ? "Monthly" : "Yearly"}
            onChange={(val) => setBillingCycle(val.toLowerCase() as "monthly" | "yearly")}
            className="!bg-[#0a1d2d !text-white"
          />
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              {...plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
