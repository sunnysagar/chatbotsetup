import { useState } from "react";
import "../Style.css";

const plans = [
  {
    name: "Basic",
    price: 29,
    features: ["1,000 messages/month", "Basic AI model", "Email support", "1 chatbot"],
    notIncluded: ["Advanced analytics", "Custom AI training", "API access"],
    color: "blue",
  },
  {
    name: "Pro",
    price: 79,
    features: ["10,000 messages/month", "Advanced AI model", "Priority support", "3 chatbots", "Basic analytics"],
    notIncluded: ["Custom AI training", "API access"],
    color: "purple",
  },
  {
    name: "Business",
    price: 199,
    features: ["50,000 messages/month", "Premium AI model", "24/7 support", "Unlimited chatbots", "Advanced analytics", "Basic custom AI training"],
    notIncluded: ["Unlimited API access"],
    color: "green",
  },
  {
    name: "Enterprise",
    price: 499,
    features: ["Unlimited messages", "State-of-the-art AI model", "Dedicated account manager", "Unlimited everything", "Full custom AI training", "Unlimited API access"],
    notIncluded: [],
    color: "red",
  },
];

export default function PricingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <div className="price-container">
      <h2 className="price-title">AI CHATBOT PLAN</h2>
      <div className="price-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card ${hoveredPlan === plan.name ? "hovered" : ""} ${plan.color}`}
            onMouseEnter={() => setHoveredPlan(plan.name)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <div className="price-card-header">
              <h3>{plan.name}</h3>
              <p className="price">${plan.price}/mo</p>
            </div>
            <div className="card-body">
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index} className="included">✔ {feature}</li>
                ))}
                {plan.notIncluded.map((feature, index) => (
                  <li key={index} className="not-included">✖ {feature}</li>
                ))}
              </ul>
              <button className="choose-btn">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
