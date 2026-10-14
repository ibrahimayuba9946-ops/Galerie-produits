
const plans = [
  {
    title: "Basic Plan",
    price: "9.99",
    features: [
      "1 GB Storage",
      "Basic Support",
      "All Core Features"
    ]
  },
  {
    title: "Pro Plan",
    price: "19.99",
    features: [
      "10 GB Storage",
      "Priority Support",
      "Advanced Features"
    ]
  },
  {
    title: "Premium Plan",
    price: "29.99",
    features: [
      "100 GB Storage",
      "24/7 Support",
      "All Premium Features"
    ]
  }
];

// Composant réutilisable
function Card(title, price, features) {
  const card = document.createElement("article");
  card.className = "pricing";

  const heading = document.createElement("h2");
  heading.className = "title";
  heading.textContent = title;

  const priceElement = document.createElement("p");
  priceElement.className = "price";
  priceElement.textContent = `$${price}`;

  const period = document.createElement("span");
  period.textContent = " / month";
  priceElement.appendChild(period);

  const list = document.createElement("ul");
  list.className = "features";

  features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    list.appendChild(item);
  });

  const button = document.createElement("button");
  button.className = "btn";
  button.type = "button";
  button.textContent = "Start Trial";

  button.addEventListener("click", () => {
    const message = document.getElementById("message");
    message.textContent =
      `Vous avez choisi le forfait ${title} à $${price} par mois.`;
  });

  card.append(heading, priceElement, list, button);

  return card;
}

// Affichage des trois cartes
const container = document.getElementById("pricing-container");

plans.forEach((plan) => {
  container.appendChild(
    Card(plan.title, plan.price, plan.features)
  );
});
