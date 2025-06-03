import { pipeline } from '@xenova/transformers';
import { knowledgeBase } from './knowledge';

let questionAnswerer = null;

// Initialize the model
const initializeModel = async () => {
  if (!questionAnswerer) {
    questionAnswerer = await pipeline('question-answering', 'Xenova/distilbert-base-uncased-distilled-squad');
  }
  return questionAnswerer;
};

export const getAIResponse = async (question) => {
  const lowerQuestion = question.toLowerCase().trim();

  // Spiciest chicken question
  if (lowerQuestion.includes('spiciest') || (lowerQuestion.includes('most') && lowerQuestion.includes('hot'))) {
    return "Our spiciest level is 'Sheeeeeeesh' - it's our hottest level with four fire emojis! 🔥🔥🔥🔥";
  }

  // Spice levels
  if (lowerQuestion.includes('spice') || lowerQuestion.includes('hot') || lowerQuestion.includes('heat')) {
    return "We have 5 heat levels:\n• Naked (No Spice)\n• Sum Spice (Medium) 🔥\n• Gotta Kick (Hot) 🔥🔥\n• Ouch! (Xtra Hot) 🔥🔥🔥\n• Sheeeeeeesh (Hottest) 🔥🔥🔥🔥";
  }

  // Signature items
  if (lowerQuestion.includes('signature') || lowerQuestion.includes('popular') || lowerQuestion.includes('best')) {
    return "Our signature items include:\n1. Chicken Sammy – Crispy fried chicken breast on brioche with pickles, slaw, and house sauce\n2. Tendies – Hand-breaded chicken tenders with white toast, pickles and sauce\n3. Wingies – Extra-large whole wings with toast, pickle, and sauce\n4. Loaded Fries – Waffle fries with spice blend, crispy chicken and spicy mayo slaw\n5. Smoked Gouda Mac n' Cheese 🍗";
  }

  // Menu items
  if (lowerQuestion.includes('menu') || lowerQuestion.includes('serve') || lowerQuestion.includes('food') || lowerQuestion.includes('eat')) {
    return "Our main menu includes:\n• Chicken Sammies: $10.00\n• Tendies (3 pcs): $15.00\n• Wingies (3 pcs): $14.00\n• Loaded Fries: $11.50\n• Nashville Hot Bucket (4/8 pcs): $13/$26\n• Chicken & Waffles: $16\n• Nashville Hot Fish n' Chips: $12\nPlus various sides and our famous sauces! 🍗";
  }

  // Vegetarian options
  if (lowerQuestion.includes('vegan') || lowerQuestion.includes('vegetarian')) {
    return "Yes, we have vegetarian options! Try our Nashville Hot Caulie – 100% vegetarian crispy cauliflower (5 pieces for $6). We also have sides like Smoked Gouda Mac n' Cheese, Nashville Fries, Corn on the Cob, and more! 🥗";
  }

  // Sides
  if (lowerQuestion.includes('side') || lowerQuestion.includes('fries') || lowerQuestion.includes('mac')) {
    return "Our sides include:\n• Corn on the Cob: $4.00\n• Nashville Fries: $4.50\n• Cornbread: $3.00\n• Coleslaw: $4.00\n• Smoked Gouda Mac n' Cheese: $5.99\n• Samosas (4 pcs): $3.99\n• Onion Rings (6 pcs): $5.00\n• Regular Fries: $3.99 🍟";
  }

  // Sauces
  if (lowerQuestion.includes('sauce')) {
    return "Our sauces ($0.50 each) include:\n• Spicy BBQ\n• Honey Mustard\n• Hot Honey\n• Ranch\n• Sweet Chilli\n• Ara's House Sauce 🥫";
  }

  // Desserts & Drinks
  if (lowerQuestion.includes('dessert') || lowerQuestion.includes('drink') || lowerQuestion.includes('beverage')) {
    return "Desserts & Drinks:\n• Vanilla Milkshake: $6.00\n• Coconut Pie: $3.50\n• Tiramisu: $6.00\n• Soft Drinks: $2.49\n• Milk: $1.50\n• Sparkling Water: $2.50 🥤";
  }

  // Location
  if (lowerQuestion.includes('where') || lowerQuestion.includes('location') || lowerQuestion.includes('address')) {
    return "We're located at 323 Raritan Ave, near Rutgers University. We have indoor seating with A/C, clean restrooms, and street parking is available! 📍";
  }

  // Halal
  if (lowerQuestion.includes('halal')) {
    return "Yes! We are proud to serve 100% Halal food! ✅ 🍗";
  }

  // Ramadan special
  if (lowerQuestion.includes('ramadan') || lowerQuestion.includes('iftar')) {
    return "During Ramadan, we offer a special Iftar Package for $13.50 which includes:\n• 1 Chicken Sammy\n• 4 Samosas\n• Dates\n• Water Bottle 🌙";
  }

  // Ordering
  if (lowerQuestion.includes('order') || lowerQuestion.includes('delivery') || lowerQuestion.includes('pickup')) {
    return "You can order online through our website for pickup at 323 Raritan Ave. Follow us on Instagram @arashotchicken for updates! 🛵";
  }

  // Default response
  return "Hi! I can help you with our menu, spice levels, signature items, sides, sauces, desserts, and more. What would you like to know about Ara's Hot Chicken? 😊";
}; 