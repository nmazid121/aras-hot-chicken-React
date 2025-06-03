export const knowledgeBase = {
  context: `
Ara's Hot Chicken – Menu & Info

Signature Items:
1. Chicken Sammy – Crispy fried chicken breast on brioche with pickles, slaw, and house sauce. Most popular item.
2. Tendies – Hand-breaded chicken tenders served on white toast with pickles and a choice of sauce.
3. Wingies – Extra-large whole wings served with toast, pickle, and sauce (same size as thigh pieces).
4. Loaded Fries – Waffle fries dusted with spice blend, topped with crispy fried chicken and spicy mayo slaw.
5. Smoked Gouda Mac n' Cheese – Macaroni in house-made smoked gouda cheese sauce.

Mains:
- Chicken Sammies: $10.00
- Tendies (3 pcs): $$15.00
- Wingies (3 pcs): $14.00
- Loaded Fries: $11.50
- Nashville Hot Bucket (Small: 4 pcs / Large: 8 pcs): $13 / $26
- Chicken & Waffles: $16 (2 wings or tenders with waffles + syrup)
- Nashville Hot Fish n' Chips: $12 (2 battered cod fillets + fries + tartar sauce)

Vegetarian Option:
- Nashville Hot Caulie – 100% vegetarian crispy cauliflower (5 for $6)

Sides:
- Corn on the Cob (Honey butter optional): $4.00
- Nashville Fries (waffle fries w/ seasoning): $4.50
- Cornbread: $3.00
- Coleslaw (light mayo, cider vinegar, carrots, cabbage): $4.00
- Smoked Gouda Mac n’ Cheese: $5.99
- Samosas (4 pcs): $3.99
- Onion Rings (6 pcs): $5.00
- Regular Fries: $3.99

Sauces ($0.50 each):
- Spicy BBQ
- Honey Mustard
- Hot Honey
- Ranch
- Sweet Chilli
- Ara’s House Sauce

Desserts & Drinks:
- Vanilla Milkshake: $6.00
- Coconut Pie: $3.50
- Tiramisu: $6.00
- Soft Drinks: $2.49
- Milk: $1.50
- Sparkling Water: $2.50

Extras:
- Extra Toast, Pickles, Bun, and various add-ons from $0.50–$5.00
- Ara's Hot Chicken Sticker: $1.00

Heat Levels (Spice):
- Naked (No Spice)
- Sum Spice (Medium) 🔥
- Gotta Kick (Hot) 🔥🔥
- Ouch! (Xtra Hot) 🔥🔥🔥
- Sheeeeeeesh (Hottest) 🔥🔥🔥🔥

Specials:
- Ramadan Iftar Package: 1 Chicken Sammy, 4 Samosas, Dates, Water Bottle – $13.50

Features:
- 100% Halal
- Vegetarian option available
- Indoor seating with A/C
- Clean restrooms
- Street parking available
- Near Rutgers University

Social & Contact:
- Instagram: @arashotchicken
- Online Ordering: Available via their website
- Pickup Address: 323 Raritan Ave
  `
};


export const generateAnswer = (question) => {
  // Clean and prepare the question
  const cleanQuestion = question.toLowerCase().trim();
  
  // Extract relevant information from knowledge base
  const context = knowledgeBase.context;
  
  return context;
}; 