"use client";

import { Segmented, Typography } from "antd";
import PlanCard from "./PlanCard";
import { plans } from "../data/plans";
import { useState } from "react";
import BillingToggle from "./BillingToggle";

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
        <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

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
