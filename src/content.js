import {
  BatteryCharging,
  Backpack,
  Bot,
  Cpu,
  Eye,
  Factory,
  Hand,
  Heart,
  Layers3,
  Lightbulb,
  Monitor,
  PlugZap,
  Radio,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Volume2,
} from "lucide-react";
import cableImage from "./assets/cable.jpg";
import dualRobotsImage from "./assets/dual-robots.jpg";
import fullKitImage from "./assets/full-kit.jpg";
import heroImage from "./assets/hero.jpg";
import manualImage from "./assets/manual.jpg";
import pouchImage from "./assets/pouch.jpg";

export const meeshoUrl = "https://www.meesho.com/s/p/ewd36y?utm_source=s";

export const highlights = [
  {
    icon: Cpu,
    title: "Interactive Robot Experience",
    text: "RoboMitra reacts with expressive movement and playful behavior that makes every interaction feel more alive.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Build Quality",
    text: "Each RoboMitra unit is handmade with love, giving it a polished finish, compact body, and a more premium feel in hand and on display.",
  },
  {
    icon: Sparkles,
    title: "Compact Size Convenience",
    text: "Portable sizing makes RoboMitra ready to use anytime.",
  },
];

export const featureCards = [
  {
    icon: Bot,
    title: "Made To Be Giftable",
    text: "Its expressive personality, movement, and compact size make RoboMitra a fun gift for kids, friends, and collectors.",
  },
  {
    icon: Layers3,
    title: "Easy To Carry And Place",
    text: "Small enough for desks, shelves, and bedside tables, while still standing out as a display-worthy companion robot.",
  },
];

export const productFeatures = [
  {
    icon: Bot,
    title: "Robots Interact Together",
    text: "When placed close to each other, RoboMitra units automatically respond and feel like they are talking to one another.",
  },
  {
    icon: BatteryCharging,
    title: "2-4 Hours Battery Backup",
    text: "Built for extended play and display sessions with dependable battery life in a compact body.",
  },
  {
    icon: Eye,
    title: "Smooth Eye Movements",
    text: "Expressive eye motion adds life, attention, and a more believable robotic personality.",
  },
  {
    icon: Sparkles,
    title: "Cute Animations",
    text: "Delightful animation moments make RoboMitra feel lively without losing its premium product feel.",
  },
  {
    icon: Backpack,
    title: "Compact and Portable",
    text: "Designed to be easy to carry, place, and showcase anywhere without taking much space.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Build",
    text: "A sturdy finish and well-made construction help RoboMitra feel polished and durable.",
  },
  {
    icon: Heart,
    title: "Human-Like Emotions",
    text: "Emotion-inspired expressions give the product a warmer, more relatable presence.",
  },
];

export const galleryShots = [
  {
    image: heroImage,
    title: "Hero Product Shot",
    alt: "RoboMitra front-facing product photo",
  },
  {
    image: dualRobotsImage,
    title: "Dual Robot View",
    alt: "Two RoboMitra units shown together",
  },
  {
    image: fullKitImage,
    title: "Full Box Contents",
    alt: "RoboMitra with pouch, manual, cable and box contents",
  },
  {
    image: cableImage,
    title: "Charging Cable",
    alt: "RoboMitra Type-C charging cable",
  },
  {
    image: pouchImage,
    title: "Brand Pouch",
    alt: "Red branded RoboMitra pouch",
  },
  {
    image: manualImage,
    title: "Manual",
    alt: "RoboMitra manual",
  },
];

export const boxContents = [
  "RoboMitra robot unit",
  "Type-C charging cable",
  "User manual",
  "Branded storage pouch",
  "Retail packaging",
];

export const stats = [
  { value: "2-4 Hrs", label: "Battery backup" },
  { value: "Type-C", label: "Fast charging support" },
  { value: "Compact", label: "Portable daily use" },
];

export const supportFaqs = [
  {
    icon: BatteryCharging,
    title: "1. Robot is not turning ON",
    points: [
      "Make sure the battery is charged",
      "Connect to charger and try again",
      "Check if power switch is ON",
    ],
  },
  {
    icon: Monitor,
    title: "2. Screen is not turning ON",
    points: [
      "Charge the battery fully",
      "Restart the robot",
      "Ensure all connections are proper",
    ],
  },
  {
    icon: PlugZap,
    title: "3. Robot is not charging",
    points: [
      "Use a good quality USB cable",
      "Check charging module connection",
      "Try a different charger",
    ],
  },
  {
    icon: Hand,
    title: "4. Touch is not working",
    points: [
      "Make sure your finger is clean and dry",
      "Touch properly on the sensor area",
      "Restart the robot",
    ],
  },
  {
    icon: Volume2,
    title: "5. No sound from buzzer",
    points: ["Restart the robot", "Contact support"],
  },
  {
    icon: Radio,
    title: "6. Two RoboMitra are not connecting",
    points: [
      "Bring both robots closer",
      "Restart both devices",
      "Wait a few seconds for auto connect",
    ],
  },
  {
    icon: RefreshCw,
    title: "7. Robot keeps restarting",
    points: ["Battery may be low", "Charge fully before use"],
  },
];

export const aboutPoints = [
  {
    icon: Lightbulb,
    title: "Built From A Simple Idea",
    text: "RoboMitra started with one question: why should smart companion robots be expensive? The project is focused on making them more affordable and accessible.",
  },
  {
    icon: Bot,
    title: "More Than A Gadget",
    text: "RoboMitra is designed as a small desk companion that reacts, expresses, and interacts through touch, sound, and smart behavior.",
  },
  {
    icon: Heart,
    title: "Technology That Feels Human",
    text: "Our mission is to make technology more human, more fun, and more approachable for everyday use.",
  },
  {
    icon: Factory,
    title: "Designed And Assembled In India",
    text: "We focus on creativity, simplicity, and continuous improvement while building and assembling our products in India.",
  },
  {
    icon: Radio,
    title: "Interactive Future",
    text: "When two RoboMitra devices come close, they can interact with each other, creating a fun and unique shared experience.",
  },
  {
    icon: Target,
    title: "Just The Beginning",
    text: "We aim to improve RoboMitra with better design, smarter features, and more interactive capabilities in the future.",
  },
];

export const productImages = {
  dualRobotsImage,
  fullKitImage,
  heroImage,
  pouchImage,
};
