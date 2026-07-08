import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

const topicData = {
  main: {
    options: [
      { label: "📦 Where is my order?", text: "Where is my order?", value: "order" },
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "🔧 How to get support?", text: "How to get support?", value: "support" },
      { label: "✨ What is RoboMitra?", text: "What is RoboMitra?", value: "about" },
    ],
  },
  order: {
    response: "Once your order is shipped, you will receive a tracking link via email (usually within 24-48 hours) to monitor your delivery. Custom orders may take 3-5 business days for assembly and testing before dispatch.",
    options: [
      { label: "🗓️ How many days to deliver?", text: "How many days to deliver?", value: "delivery_time" },
      { label: "📍 Can I change delivery address?", text: "Can I change delivery address?", value: "change_address" },
      { label: "💬 Talk to a human agent", text: "Talk to a human agent", value: "human_agent" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  delivery_time: {
    response: "Usually, shipping takes:\n- Metro cities: 2-4 business days\n- Other regions: 4-7 business days\n- Custom keychains: Please add 3 days for custom assembly.",
    options: [
      { label: "📦 Track order status", text: "Track order status", value: "order" },
      { label: "💬 Talk to a human agent", text: "Talk to a human agent", value: "human_agent" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  change_address: {
    response: "You can change your delivery address within 12 hours of placing your order. Please send your order ID and the new address to robomitra@zohomail.in or message us on Instagram DM as soon as possible!",
    options: [
      { label: "📦 Track order status", text: "Track order status", value: "order" },
      { label: "💬 Talk to a human agent", text: "Talk to a human agent", value: "human_agent" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  place: {
    response: "You can place an order directly through our official Instagram page via Direct Message (DM). Simply click the 'Buy Now' button in the navigation header to visit our page, choose your model (Mini Companion White or Bag Keychain Black), and send us a DM. We accept secure UPI payments.",
    options: [
      { label: "💰 What are the prices?", text: "What are the prices?", value: "pricing" },
      { label: "🎨 Are there custom designs?", text: "Are there custom designs?", value: "customization" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  pricing: {
    response: "Here is our current pricing catalog:\n- RoboMitra Mini Companion White: Rs. 999\n- RoboMitra Bag Keychain Black: Rs. 999\n- RoboMitra R1 (Flagship desk buddy): Rs. 1,599",
    options: [
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  customization: {
    response: "Yes! We support custom eye expression animations, body finishes, and personal tag engravings. Drop us a DM on Instagram with your requirements, and our design team will work on a preview template for you!",
    options: [
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  support: {
    response: "If you're facing charging, battery life, screen, or reaction issues, please check our troubleshooting guides on the Support page. If the issue persists, you can contact our support team at robomitra@zohomail.in. We respond within 24-48 hours.",
    options: [
      { label: "🔋 Battery / Charging guide", text: "Battery / Charging guide", value: "battery_guide" },
      { label: "🛠️ How to reset RoboMitra?", text: "How to reset RoboMitra?", value: "reset_guide" },
      { label: "📧 Direct Email Contact", text: "Direct Email Contact", value: "email_contact" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  battery_guide: {
    response: "RoboMitra charging instructions:\n1. Use the provided USB-C cable.\n2. Connect to a 5V 1A adapter (avoid high-wattage fast chargers).\n3. Charging takes ~45 minutes. A solid blue display indicates fully charged.",
    options: [
      { label: "🛠️ How to reset RoboMitra?", text: "How to reset RoboMitra?", value: "reset_guide" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  reset_guide: {
    response: "To reset your RoboMitra companion:\n1. Locate the tiny reset pinhole next to the USB-C port.\n2. Use a paperclip or SIM ejector tool to press it gently for 3 seconds.\n3. The display will flash, resetting the animations.",
    options: [
      { label: "🔋 Battery / Charging guide", text: "Battery / Charging guide", value: "battery_guide" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  email_contact: {
    response: "You can reach us at robomitra@zohomail.in. When emailing, please include:\n1. Your order reference ID\n2. A short video or photo of the issue\n3. Description of the problem\nThis helps our engineering team diagnose and solve your issue faster!",
    options: [
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  about: {
    response: "RoboMitra is a cyber-style desktop companion robot and bag keychain series. They feature bright animated screen reactions, touch interactivity, rechargeable battery, and high-quality premium body finishes. Perfect for desks, setups, and backpacks!",
    options: [
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "🔧 Troubleshooting / support?", text: "Troubleshooting / support?", value: "support" },
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  human_agent: {
    response: "I have queued your query for a human team member. Please send us a message on Instagram DM or email us at robomitra@zohomail.in with your details and we'll reply right away!",
    options: [
      { label: "↩️ Back to main menu", text: "Back to main menu", value: "main" },
    ]
  },
  hello: {
    response: "Hello there! 😊 How can I help you today? Please choose one of the options below or ask your question directly!",
    options: [
      { label: "📦 Where is my order?", text: "Where is my order?", value: "order" },
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "🔧 How to get support?", text: "How to get support?", value: "support" },
      { label: "✨ What is RoboMitra?", text: "What is RoboMitra?", value: "about" },
    ]
  },
  fallback: {
    response: "I'm not sure I understand that query. 🤖 I am a helper assistant! Try asking about 'order tracking', 'how to buy', 'product specs', or 'support', or click one of the quick options below.",
    options: [
      { label: "📦 Where is my order?", text: "Where is my order?", value: "order" },
      { label: "🛍️ How to place an order?", text: "How to place an order?", value: "place" },
      { label: "🔧 How to get support?", text: "How to get support?", value: "support" },
      { label: "✨ What is RoboMitra?", text: "What is RoboMitra?", value: "about" },
    ]
  }
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("main");
  const [messages, setMessages] = useState([
    {
      id: "greeting",
      sender: "ai",
      text: "Hello! 👋 I'm your RoboMitra AI Assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const getMatchedTopicValue = (text) => {
    const cleanVal = text.toLowerCase();
    
    // 1. Hello/Greetings
    if (cleanVal.includes("hello") || cleanVal.includes("hi") || cleanVal.includes("hey") || cleanVal.includes("greetings") || cleanVal.includes("yo")) {
      return "hello";
    }

    // 2. Placing an order / Buying (highest priority check for place order, buy, price)
    if (cleanVal.includes("buy") || cleanVal.includes("place") || cleanVal.includes("purchase") || cleanVal.includes("shop") || cleanVal.includes("how to order")) {
      if (cleanVal.includes("price") || cleanVal.includes("cost") || cleanVal.includes("how much") || cleanVal.includes("catalog")) {
        return "pricing";
      }
      if (cleanVal.includes("custom") || cleanVal.includes("design") || cleanVal.includes("color")) {
        return "customization";
      }
      return "place";
    }

    // 3. Pricing
    if (cleanVal.includes("price") || cleanVal.includes("cost") || cleanVal.includes("how much")) {
      return "pricing";
    }

    // 4. Customization
    if (cleanVal.includes("custom") || cleanVal.includes("design") || cleanVal.includes("color")) {
      return "customization";
    }

    // 5. Order Tracking / Delivery Time / Change Address (only matches tracking keywords if not a buy/place intent)
    if (cleanVal.includes("order") || cleanVal.includes("track") || cleanVal.includes("ship") || cleanVal.includes("delivery")) {
      if (cleanVal.includes("day") || cleanVal.includes("how long") || cleanVal.includes("time") || cleanVal.includes("when")) {
        return "delivery_time";
      }
      if (cleanVal.includes("address") || cleanVal.includes("location") || cleanVal.includes("change")) {
        return "change_address";
      }
      return "order";
    }

    if (cleanVal.includes("day") || cleanVal.includes("how long") || cleanVal.includes("time") || cleanVal.includes("when")) {
      return "delivery_time";
    }

    if (cleanVal.includes("address") || cleanVal.includes("location") || cleanVal.includes("change")) {
      return "change_address";
    }

    // 6. Support / Battery / Reset
    if (cleanVal.includes("battery") || cleanVal.includes("charge") || cleanVal.includes("power") || cleanVal.includes("cable") || cleanVal.includes("usb")) {
      return "battery_guide";
    }

    if (cleanVal.includes("reset") || cleanVal.includes("restart") || cleanVal.includes("pinhole") || cleanVal.includes("reboot")) {
      return "reset_guide";
    }

    if (cleanVal.includes("email") || cleanVal.includes("contact") || cleanVal.includes("write") || cleanVal.includes("message")) {
      return "email_contact";
    }

    if (cleanVal.includes("support") || cleanVal.includes("help") || cleanVal.includes("fix") || cleanVal.includes("broken")) {
      return "support";
    }

    // 7. General about
    if (cleanVal.includes("what") || cleanVal.includes("robomitra") || cleanVal.includes("concept") || cleanVal.includes("who") || cleanVal.includes("features")) {
      return "about";
    }

    // 8. Human Agent
    if (cleanVal.includes("human") || cleanVal.includes("agent") || cleanVal.includes("person") || cleanVal.includes("live chat")) {
      return "human_agent";
    }

    return "fallback";
  };

  const handleSelectOption = (value, label) => {
    // Add user message
    const userMsg = {
      id: Math.random().toString(),
      sender: "user",
      text: label,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI thinking and typing response
    setTimeout(() => {
      const topic = topicData[value] || topicData["main"];
      const aiMsg = {
        id: Math.random().toString(),
        sender: "ai",
        text: topic.response || "How can I help you?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setCurrentTopic(value);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Math.random().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const matchedValue = getMatchedTopicValue(text);
      const topic = topicData[matchedValue];
      
      const aiMsg = {
        id: Math.random().toString(),
        sender: "ai",
        text: topic.response,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setCurrentTopic(matchedValue);
      setIsTyping(false);
    }, 1200);
  };

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const currentOptions = topicData[currentTopic]?.options || topicData["main"].options;

  return (
    <div className="ai-assistant-wrapper">
      {/* Floating Action Button */}
      <button
        className={`ai-fab ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ai-fab-icon-inner"
            >
              <Bot size={24} />
              <span className="ai-fab-badge" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-chat-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-left">
                <div className="ai-header-avatar">
                  <Bot size={20} className="ai-avatar-icon" />
                  <span className="ai-avatar-status" />
                </div>
                <div>
                  <h4 className="ai-header-title">RoboMitra Assistant</h4>
                  <p className="ai-header-subtitle">Online • Powered by AI</p>
                </div>
              </div>
              <button
                className="ai-header-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="ai-chat-body">
              <div className="ai-messages-list">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`ai-message-bubble-wrapper ${
                      msg.sender === "user" ? "user" : "ai"
                    }`}
                  >
                    <div className="ai-message-bubble">
                      <p className="ai-message-text">{msg.text}</p>
                      <span className="ai-message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="ai-message-bubble-wrapper ai">
                    <div className="ai-message-bubble typing">
                      <div className="ai-typing-indicator">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </div>

            {/* Dynamic FAQ Options */}
            <div className="ai-chat-faqs">
              <p className="ai-faq-label">Suggested Questions:</p>
              <div className="ai-faq-grid">
                {currentOptions.map((opt) => (
                  <button
                    key={opt.value}
                    className="ai-faq-btn"
                    onClick={() => handleSelectOption(opt.value, opt.text || opt.label)}
                    disabled={isTyping}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              className="ai-chat-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (inputVal.trim()) {
                  handleSendMessage(inputVal);
                }
              }}
            >
              <input
                type="text"
                placeholder="Ask something..."
                className="ai-chat-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                disabled={isTyping}
              />
              <button
                type="submit"
                className="ai-chat-send-btn"
                disabled={!inputVal.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
