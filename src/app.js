import "./styles.css";

const sharedVocab = [
  ["boil", "kaynatmak", "Boil the water before adding the ingredients."],
  ["add", "eklemek", "Add the ingredients to the bowl."],
  ["mix", "karıştırmak", "Mix everything until combined."],
  ["serve", "servis etmek", "Serve the dish while it is fresh."],
];

const recipes = {
  makarna: {
    label: "Ana yemek · Main course",
    title: "İngilizce Makarna Tarifi",
    englishTitle: "Plain Pasta Recipe",
    introEn: "A plain pasta recipe is a simple set of instructions for boiling, draining and serving pasta.",
    introTr: "Sade makarna tarifi; makarnayı kaynatma, süzme ve servis etme adımlarını anlatan basit bir yönergedir.",
    time: "15 minutes", serves: "2 people", level: "A2–B1", calories: "310 kcal",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Water", "Su", "2 l"], ["Salt", "Tuz", "1 tsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: [
      ["Boil the Water", "First, boil 2 l of water in a large pot.", "Önce büyük bir tencerede 2 l suyu kaynatın."],
      ["Add Salt and Pasta", "Then, add 1 teaspoon of salt and 200 g of pasta.", "Ardından 1 çay kaşığı tuz ve 200 g makarna ekleyin."],
      ["Cook the Pasta", "After that, cook the pasta for 8–10 minutes.", "Daha sonra makarnayı 8–10 dakika pişirin."],
      ["Drain and Finish", "Finally, drain the pasta and mix it with 1 tablespoon of butter.", "Son olarak makarnayı süzün ve 1 yemek kaşığı tereyağıyla karıştırın."],
    ],
    equipment: [["Large pot", "Büyük tencere", "1–3"], ["Colander", "Süzgeç", "4"], ["Wooden spoon", "Tahta kaşık", "2–4"]],
    vocab: [["boil", "kaynatmak", "Boil 2 l of water."], ["drain", "süzmek", "Drain the cooked pasta."], ["stir", "karıştırmak", "Stir the pasta gently."], ["serve", "servis etmek", "Serve while hot."]],
  },
  baklava: {
    label: "Tatlı · Dessert",
    title: "İngilizce Baklava Tarifi",
    englishTitle: "Turkish Baklava Recipe",
    introEn: "Baklava is a layered pastry made with thin phyllo sheets, nuts, butter and sweet syrup.",
    introTr: "Baklava; ince yufka katları, kuruyemiş, tereyağı ve şerbetle hazırlanan katmanlı bir tatlıdır.",
    time: "70 minutes", serves: "12 slices", level: "B1", calories: "330 kcal",
    ingredients: [["Phyllo sheets", "Baklavalık yufka", "24 sheets"], ["Pistachios", "Antep fıstığı", "250 g"], ["Melted butter", "Eritilmiş tereyağı", "180 g"], ["Sugar", "Şeker", "300 g"], ["Water", "Su", "300 ml"]],
    steps: [
      ["Prepare the Syrup", "First, boil 300 ml of water with 300 g of sugar for 10 minutes.", "Önce 300 ml suyu 300 g şekerle 10 dakika kaynatın."],
      ["Layer the Phyllo", "Then, brush each phyllo sheet with melted butter and stack 12 sheets.", "Ardından her yufkayı eritilmiş tereyağıyla yağlayın ve 12 kat dizin."],
      ["Add the Pistachios", "Next, spread 250 g of pistachios evenly over the layers.", "Sonra 250 g Antep fıstığını katların üzerine eşitçe yayın."],
      ["Bake and Sweeten", "Finally, bake at 180°C for 35 minutes and pour the cool syrup over the hot baklava.", "Son olarak 180°C'de 35 dakika pişirin ve sıcak baklavanın üzerine soğuk şerbeti dökün."],
    ],
    equipment: [["Baking tray", "Fırın tepsisi", "2–4"], ["Pastry brush", "Yumurta fırçası", "2"], ["Saucepan", "Sos tenceresi", "1"]],
    vocab: [["layer", "katman", "Layer the phyllo sheets."], ["brush", "sürmek", "Brush each sheet with butter."], ["spread", "yaymak", "Spread the pistachios evenly."], ["pour", "dökmek", "Pour the syrup slowly."]],
  },
  smoothie: {
    label: "İçecek · Drink",
    title: "İngilizce Smoothie Tarifi",
    englishTitle: "Banana Smoothie Recipe",
    introEn: "A banana smoothie is a cold drink made by blending bananas with milk, yogurt and honey.",
    introTr: "Muzlu smoothie; muzun süt, yoğurt ve balla blenderda karıştırılmasıyla hazırlanan soğuk bir içecektir.",
    time: "5 minutes", serves: "2 glasses", level: "A2", calories: "210 kcal",
    ingredients: [["Bananas", "Muz", "2"], ["Milk", "Süt", "1 cup"], ["Yogurt", "Yoğurt", "½ cup"], ["Honey", "Bal", "1 tbsp"], ["Ice cubes", "Buz küpü", "4"]],
    steps: [
      ["Peel and Slice", "First, peel and slice 2 bananas.", "Önce 2 muzu soyun ve dilimleyin."],
      ["Add the Ingredients", "Then, add 1 cup of milk, ½ cup of yogurt and 1 tablespoon of honey to the blender.", "Ardından blendera 1 su bardağı süt, ½ su bardağı yoğurt ve 1 yemek kaşığı bal ekleyin."],
      ["Blend Until Smooth", "After that, blend the mixture for 45 seconds until smooth.", "Daha sonra karışımı pürüzsüz olana kadar 45 saniye çekin."],
      ["Pour and Serve", "Finally, pour the smoothie into 2 glasses and serve immediately.", "Son olarak smoothieyi 2 bardağa dökün ve hemen servis edin."],
    ],
    equipment: [["Blender", "Blender", "2–3"], ["Kitchen knife", "Mutfak bıçağı", "1"], ["Measuring cup", "Ölçü kabı", "2"]],
    vocab: [["peel", "soymak", "Peel the bananas."], ["slice", "dilimlemek", "Slice the fruit."], ["blend", "blenderda çekmek", "Blend for 45 seconds."], ["pour", "dökmek", "Pour into a glass."]],
  },
};

const root = document.querySelector("#content");
const table = (headers, rows) => `<table><thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

function renderHome() {
  root.innerHTML = `<div class="index"><p class="eyebrow">Content prototype · 3 representative pages</p><h1>Learn English from the recipes you already know.</h1><p class="lede">Brief yapısını test etmek için ana yemek, tatlı ve içecek kategorilerinden üç temsilci içerik sayfası hazırlandı.</p><div class="page-cards">${Object.entries(recipes).map(([slug, r]) => `<a href="#/${slug}"><span>${r.label}</span><div><h2>${r.title}</h2><p>${r.englishTitle}</p></div><strong>Sayfayı incele →</strong></a>`).join("")}</div></div>`;
  document.title = "İngilizce Tarifler — İçerik Prototipleri";
}

function renderRecipe(r) {
  document.title = `${r.title} | Konuşarak Öğren`;
  root.innerHTML = `<article>
    <header class="hero"><div><p class="eyebrow">${r.label}</p><h1>${r.title}</h1><p class="lede"><strong>${r.englishTitle}.</strong> ${r.introTr}</p></div><aside class="hero-card" aria-label="Tarif özeti"><dl><div><dt>Time · Süre</dt><dd>${r.time}</dd></div><div><dt>Serves · Porsiyon</dt><dd>${r.serves}</dd></div><div><dt>English level</dt><dd>${r.level}</dd></div><div><dt>Calories</dt><dd>${r.calories}</dd></div></dl></aside></header>
    <div class="page-grid"><aside class="toc"><strong>Bu sayfada</strong><a href="#definition">Tanım</a><a href="#ingredients">Malzemeler</a><a href="#steps">Adımlar</a><a href="#equipment">Ekipman</a><a href="#language">Dil bilgisi</a><a href="#exercise">Alıştırma</a></aside>
    <div class="content">
      <section id="definition"><p class="eyebrow">Definition · Tanım</p><h2>${r.englishTitle} nedir?</h2><div class="bilingual"><div class="language-card"><small>English</small><p>${r.introEn}</p></div><div class="language-card"><small>Türkçe</small><p>${r.introTr}</p></div></div></section>
      <section id="ingredients"><p class="eyebrow">Ingredients · Malzemeler</p><h2>What ingredients do you need?</h2><p>Malzemeler İngilizce ve Türkçe karşılıklarıyla, ölçüleri rakamla gösterilmiştir.</p>${table(["English ingredient", "Türkçe karşılığı", "Quantity"], r.ingredients)}</section>
      <section id="steps"><p class="eyebrow">Method · Yapılış</p><h2>How do you make it step by step?</h2><p>Talimatlar İngilizce emir kipiyle başlar; <em>first, then, after that</em> ve <em>finally</em> adımları sıralar.</p><ol class="steps">${r.steps.map(s => `<li><div><h3>${s[0]}</h3><p><strong>${s[1]}</strong></p><p class="translation">${s[2]}</p></div></li>`).join("")}</ol>${table(["Step", "English instruction", "Türkçe açıklama"], r.steps.map((s,i) => [i+1,s[1],s[2]]))}</section>
      <section id="equipment"><p class="eyebrow">Tools · Araçlar</p><h2>Which kitchen equipment is used?</h2>${table(["English equipment", "Türkçe karşılığı", "Used in step"], r.equipment)}</section>
      <section id="language"><p class="eyebrow">Kitchen English</p><h2>Temel İngilizce mutfak kelimeleri</h2><div class="vocab">${(r.vocab || sharedVocab).map(v => `<article><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Imperative mood · Emir kipi</h3><p>İngilizce tarif talimatları özne almadan fiilin yalın hâliyle başlar: <strong>${r.steps[0][1]}</strong> Olumsuz talimatlarda <em>do not</em> kullanılır: <strong>Do not overcook it.</strong></p></section>
      <section id="exercise"><div class="exercise"><p class="eyebrow">8th grade English</p><h2>4 soruluk mini alıştırma</h2><ol><li>What is the main ingredient in this recipe?</li><li>Which verb begins the first instruction?</li><li>How long does the recipe take?</li><li>Write the final step in Turkish.</li></ol></div></section>
    </div></div></article>`;
}

function route() {
  const slug = location.hash.replace(/^#\//, "");
  slug && recipes[slug] ? renderRecipe(recipes[slug]) : renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();
