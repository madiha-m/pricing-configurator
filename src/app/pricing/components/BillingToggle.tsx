"use client";

interface BillingToggleProps {
    billingCycle: "monthly" | "yearly";
    setBillingCycle: (cycle: "monthly" | "yearly") => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
    billingCycle,
    setBillingCycle,
}) => {
    return (
        <div className="flex justify-center my-8">
            <label
                htmlFor="billing-toggle"
                className={`
          relative inline-flex items-center cursor-pointer w-[110px] h-[36px] rounded-full
          transition-colors duration-300
          ${billingCycle === "yearly" ? "bg-teal-500" : "bg-gray-700"}
        `}
            >
                {/* Hidden Checkbox */}
                <input
                    id="billing-toggle"
                    type="checkbox"
                    checked={billingCycle === "yearly"}
                    onChange={() =>
                        setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
                    }
                    className="sr-only"
                />

                {/* Labels */}
                <span className="absolute left-3 text-xs font-medium text-white">
                    M
                </span>
                <span className="absolute right-3 text-xs font-medium text-white">
                    Y
                </span>

                {/* Shiny Knob */}
                <span
                    className={`
            absolute top-0 left-0 h-[36px] w-[50%] rounded-full shadow-md
            border border-gray-600 transition-transform duration-300
            ${billingCycle === "yearly" ? "translate-x-full" : "translate-x-0"}
          `}
                    style={{
                        background:
                            "conic-gradient(rgba(20,83,45,0.7), #0a1d2d, rgba(20,83,45,0.7), #0a1d2d, rgba(20,83,45,0.7))",
                    }}
                />
            </label>
        </div>
    );
};

export default BillingToggle;
