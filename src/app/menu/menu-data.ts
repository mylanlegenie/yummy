import type { LucideIcon } from "lucide-react";
import { CupSoda, Drumstick, Salad, Sandwich } from "lucide-react";

export type Dish = {
  name: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
  dishes: Dish[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "burgers",
    title: "Nos burgers",
    icon: Sandwich,
    iconBackground: "bg-[#FFE2A3]",
    iconColor: "text-[#E83F25]",
    dishes: [
      {
        name: "Yummy Burger",
        price: "9,90 €",
        description:
          "Steak grillé, cheddar fondant, salade, oignons rouges et sauce Yummy.",
      },
      {
        name: "Double Smash",
        price: "12,90 €",
        description:
          "Deux steaks smashés, double cheddar, pickles, oignons et sauce fumée.",
      },
      {
        name: "Chicken Crispy",
        price: "10,90 €",
        description:
          "Poulet croustillant, cheddar, salade fraîche et sauce légèrement épicée.",
      },
      {
        name: "Veggie Crunch",
        price: "9,50 €",
        description:
          "Galette végétale croustillante, crudités, cheddar et sauce aux herbes.",
      },
    ],
  },
  {
    id: "accompagnements",
    title: "Les accompagnements",
    icon: Salad,
    iconBackground: "bg-[#E4F2CF]",
    iconColor: "text-[#467A34]",
    dishes: [
      {
        name: "Frites maison",
        price: "3,90 €",
        description:
          "Frites dorées, croustillantes à l’extérieur et fondantes à cœur.",
      },
      {
        name: "Frites cheddar bacon",
        price: "5,90 €",
        description:
          "Nos frites recouvertes de cheddar fondant et d’éclats de bacon grillé.",
      },
      {
        name: "Onion Rings",
        price: "4,90 €",
        description:
          "Rondelles d’oignon panées et croustillantes, servies avec une sauce maison.",
      },
      {
        name: "Petite salade",
        price: "4,50 €",
        description:
          "Salade, tomates, concombre, oignons rouges et vinaigrette légère.",
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks à partager",
    icon: Drumstick,
    iconBackground: "bg-[#FFD9D2]",
    iconColor: "text-[#C9321D]",
    dishes: [
      {
        name: "Nuggets x6",
        price: "5,90 €",
        description:
          "Six bouchées de poulet croustillantes avec la sauce de votre choix.",
      },
      {
        name: "Tenders x4",
        price: "7,50 €",
        description:
          "Quatre filets de poulet tendres dans une panure dorée et relevée.",
      },
      {
        name: "Mozza Sticks x6",
        price: "6,50 €",
        description:
          "Bâtonnets de mozzarella fondante enrobés d’une chapelure croustillante.",
      },
      {
        name: "Hot Wings x6",
        price: "7,90 €",
        description:
          "Ailes de poulet marinées, croustillantes et délicatement pimentées.",
      },
    ],
  },
  {
    id: "douceurs",
    title: "Boissons & douceurs",
    icon: CupSoda,
    iconBackground: "bg-[#D9EEFF]",
    iconColor: "text-[#2476A8]",
    dishes: [
      {
        name: "Soda 33 cl",
        price: "2,50 €",
        description:
          "Coca-Cola, Coca-Cola Zéro, Fanta orange, Sprite ou Oasis tropical.",
      },
      {
        name: "Citronnade maison",
        price: "3,50 €",
        description:
          "Citron pressé, menthe fraîche et une pointe de sucre, servi bien frais.",
      },
      {
        name: "Milkshake",
        price: "4,90 €",
        description:
          "Vanille, chocolat ou fraise, mixé minute pour une texture onctueuse.",
      },
      {
        name: "Sundae gourmand",
        price: "3,90 €",
        description:
          "Glace vanille et nappage chocolat, caramel ou fruits rouges.",
      },
    ],
  },
];
