"use client"

import { Award, BarChart3, CheckCircle, DollarSign, Handshake, MessageCircle, Phone, Sparkles, Star, TrendingDown } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inventory", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Financing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoPrime"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Find Your Perfect Car Today"
          description="Discover premium vehicles with unbeatable prices, expert service, and flexible financing options. Your dream car awaits."
          tag="Trusted Since 1995"
          tagIcon={Award}
          buttons={[
            { text: "Browse Inventory", href: "product" },
            { text: "Get Pre-Approved", href: "pricing" }
          ]}
          imageSrc="https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car dealership showroom"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose AutoPrime"
          description={[
            "With over 25 years in the automotive industry, we've built our reputation on trust, quality, and customer satisfaction.",
            "Our experienced team provides personalized service to help you find the perfect vehicle that fits your lifestyle and budget."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Vehicles"
          description="Explore our hand-picked selection of premium vehicles"
          tag="Best Deals"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Mercedes-Benz",
              name: "C-Class Sedan",
              price: "$45,900",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/5195367/pexels-photo-5195367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mercedes C-Class Sedan"
            },
            {
              id: "2",
              brand: "BMW",
              name: "X5 SUV",
              price: "$65,900",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/8280443/pexels-photo-8280443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "BMW X5 SUV"
            },
            {
              id: "3",
              brand: "Audi",
              name: "A4 Sports",
              price: "$38,900",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Audi A4 Sports Car"
            },
            {
              id: "4",
              brand: "Tesla",
              name: "Model S",
              price: "$89,900",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tesla Model S"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Flexible Financing Options"
          description="Choose the financing plan that works best for you"
          tag="Pre-Approval Available"
          tagIcon={CheckCircle}
          plans={[
            {
              id: "cash",
              badge: "Best Value",
              badgeIcon: DollarSign,
              price: "Cash Purchase",
              subtitle: "Pay in full and save on interest",
              buttons: [
                { text: "Get Quote", href: "contact" },
                { text: "Learn More", href: "pricing" }
              ],
              features: [
                "No monthly payments",
                "Immediate ownership",
                "Negotiation flexibility",
                "No credit requirements"
              ]
            },
            {
              id: "financing",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "From 3.9% APR",
              subtitle: "Competitive rates with flexible terms",
              buttons: [
                { text: "Get Pre-Approved", href: "contact" },
                { text: "Calculate Payment", href: "pricing" }
              ],
              features: [
                "Terms up to 84 months",
                "Low down payments",
                "Quick approval process",
                "Build credit history"
              ]
            },
            {
              id: "lease",
              badge: "Lowest Payments",
              badgeIcon: TrendingDown,
              price: "Lease from $299/mo",
              subtitle: "Drive newer cars with lower payments",
              buttons: [
                { text: "View Lease Deals", href: "contact" },
                { text: "Compare Options", href: "pricing" }
              ],
              features: [
                "Lower monthly payments",
                "Warranty coverage",
                "Upgrade flexibility",
                "Gap insurance included"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="AutoPrime by the Numbers"
          description="See why thousands of customers trust us with their automotive needs"
          tag="Track Record"
          tagIcon={BarChart3}
          metrics={[
            { id: "1", value: "25+", description: "Years in Business" },
            { id: "2", value: "15,000+", description: "Happy Customers" },
            { id: "3", value: "98%", description: "Customer Satisfaction" },
            { id: "4", value: "500+", description: "Vehicles in Stock" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied AutoPrime customers"
          tag="Customer Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Business Owner",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Johnson"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34379678/pexels-photo-34379678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Financial Advisor",
              company: "Investment Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34346054/pexels-photo-34346054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Chen"
            },
            {
              id: "4",
              name: "Lisa Rodriguez",
              role: "Operations Manager",
              company: "Logistics Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Rodriguez"
            },
            {
              id: "5",
              name: "Robert Thompson",
              role: "Executive Director",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Robert Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Authorized Dealer For"
          description="We proudly represent the world's leading automotive brands"
          tag="Partnerships"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18234150/pexels-photo-18234150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6894432/pexels-photo-6894432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17357680/pexels-photo-17357680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12522419/pexels-photo-12522419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Phone}
          title="Schedule Your Test Drive Today"
          description="Ready to experience your next car? Contact us to schedule a test drive or get more information about our vehicles and financing options."
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By submitting, you agree to be contacted by our sales team about available vehicles and financing options."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "product" },
                { label: "Used Cars", href: "product" },
                { label: "Electric Vehicles", href: "product" },
                { label: "Luxury Cars", href: "product" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "pricing" },
                { label: "Trade-Ins", href: "contact" },
                { label: "Service Center", href: "contact" },
                { label: "Parts & Accessories", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "contact" },
                { label: "Reviews", href: "testimonial" }
              ]
            }
          ]}
          copyrightText="© 2025 AutoPrime. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}