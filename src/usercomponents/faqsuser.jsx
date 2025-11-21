import React, { useState } from "react";
import HeaderUser from "./headeruser";
import FooterUser from "./footeruser";
import "./faqs.css";

function FAQUser() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Returns are accepted within 30 days of delivery. Items must be unused, with original tags and packaging.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days. Express shipping takes 1-3 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping times vary by location. Customs fees may apply.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you will receive a tracking number via email to monitor your delivery.",
    },
    {
      question: "Can I exchange items?",
      answer: "Yes, exchanges are accepted within 30 days. Please contact customer support to initiate an exchange.",
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes, we offer gift cards in various denominations. They can be purchased online and delivered via email.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <HeaderUser />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>We’re here to help! Find answers to common questions below.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        {faqs.map((faq, index) => (
          <div
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-question">{faq.question}</h3>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>

      <FooterUser />
    </>
  );
}

export default FAQUser;
