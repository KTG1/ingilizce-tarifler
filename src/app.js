import "./styles.css";

const sharedVocab = [
  ["boil", "kaynatmak", "Boil the water before adding the ingredients."],
  ["add", "eklemek", "Add the ingredients to the bowl."],
  ["mix", "karıştırmak", "Mix everything until combined."],
  ["serve", "servis etmek", "Serve the dish while it is fresh."],
];

const recipes = {
  makarna: {
    label: "Ana yemek",
    title: "İngilizce Makarna Tarifi",
    englishTitle: "Plain Pasta Recipe",
    introEn: "A plain pasta recipe is a simple set of instructions for boiling, draining and serving pasta.",
    introTr: "Sade makarna tarifi; makarnayı kaynatma, süzme ve servis etme adımlarını anlatan basit bir yönergedir.",
    time: "15 dakika", serves: "2 kişilik", level: "A2–B1", calories: "310 kcal",
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
    label: "Tatlı",
    title: "İngilizce Baklava Tarifi",
    englishTitle: "Turkish Baklava Recipe",
    introEn: "Baklava is a layered pastry made with thin phyllo sheets, nuts, butter and sweet syrup.",
    introTr: "Baklava; ince yufka katları, kuruyemiş, tereyağı ve şerbetle hazırlanan katmanlı bir tatlıdır.",
    time: "70 dakika", serves: "12 dilim", level: "B1", calories: "330 kcal",
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
    label: "İçecek",
    title: "İngilizce Smoothie Tarifi",
    englishTitle: "Banana Smoothie Recipe",
    introEn: "A banana smoothie is a cold drink made by blending bananas with milk, yogurt and honey.",
    introTr: "Muzlu smoothie; muzun süt, yoğurt ve balla blenderda karıştırılmasıyla hazırlanan soğuk bir içecektir.",
    time: "5 dakika", serves: "2 bardak", level: "A2", calories: "210 kcal",
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
  root.innerHTML = `<div class="index"><p class="eyebrow">3 temsilci tarif sayfası</p><h1>Bildiğiniz tariflerle İngilizce öğrenin.</h1><p class="lede">Ana yemek, tatlı ve içecek kategorilerindeki tariflerle İngilizce mutfak kelimelerini ve yönergeleri adım adım öğrenin.</p><div class="page-cards">${Object.entries(recipes).map(([slug, r]) => `<a href="#/${slug}"><span>${r.label}</span><div><h2>${r.title}</h2><p>${r.englishTitle}</p></div><strong>Sayfayı incele →</strong></a>`).join("")}</div></div>`;
  document.title = "İngilizce Tarifler — İçerik Prototipleri";
}

function renderRecipe(r) {
  document.title = `${r.title} | Konuşarak Öğren`;
  root.innerHTML = `<article>
    <header class="hero"><div><p class="eyebrow">${r.label}</p><h1>${r.title}</h1><p class="lede"><strong>${r.englishTitle}.</strong> ${r.introTr}</p></div><aside class="hero-card" aria-label="Tarif özeti"><dl><div><dt>Süre</dt><dd>${r.time}</dd></div><div><dt>Porsiyon</dt><dd>${r.serves}</dd></div><div><dt>İngilizce seviyesi</dt><dd>${r.level}</dd></div><div><dt>Kalori</dt><dd>${r.calories}</dd></div></dl></aside></header>
    <div class="page-grid"><aside class="toc"><strong>Bu sayfada</strong><a href="#definition">Tanım</a><a href="#ingredients">Malzemeler</a><a href="#steps">Adımlar</a><a href="#equipment">Ekipman</a><a href="#language">Dil bilgisi</a><a href="#exercise">Alıştırma</a></aside>
    <div class="content">
      <section id="definition"><p class="eyebrow">Tanım</p><h2>${r.englishTitle} nedir?</h2><div class="bilingual"><div class="language-card"><small>İngilizce</small><p>${r.introEn}</p></div><div class="language-card"><small>Türkçe</small><p>${r.introTr}</p></div></div></section>
      <section id="ingredients"><p class="eyebrow">Malzemeler</p><h2>Hangi malzemeler gerekir?</h2><p>Malzemeler İngilizce ve Türkçe karşılıklarıyla, ölçüleri rakamla gösterilmiştir.</p>${table(["İngilizce malzeme", "Türkçe karşılığı", "Miktar"], r.ingredients)}</section>
      <section id="steps"><p class="eyebrow">Yapılış</p><h2>Adım adım nasıl yapılır?</h2><p>Talimatlar İngilizce emir kipiyle başlar; <em>first, then, after that</em> ve <em>finally</em> adımları sıralar.</p><ol class="steps">${r.steps.map(s => `<li><div><h3>${s[0]}</h3><p><strong>${s[1]}</strong></p><p class="translation">${s[2]}</p></div></li>`).join("")}</ol>${table(["Adım", "İngilizce talimat", "Türkçe açıklama"], r.steps.map((s,i) => [i+1,s[1],s[2]]))}</section>
      <section id="equipment"><p class="eyebrow">Mutfak araçları</p><h2>Hangi mutfak araçları kullanılır?</h2>${table(["İngilizce araç adı", "Türkçe karşılığı", "Kullanıldığı adım"], r.equipment)}</section>
      <section id="language"><p class="eyebrow">Mutfakta İngilizce</p><h2>Temel İngilizce mutfak kelimeleri</h2><div class="vocab">${(r.vocab || sharedVocab).map(v => `<article><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Emir kipi</h3><p>İngilizce tarif talimatları özne almadan fiilin yalın hâliyle başlar: <strong>${r.steps[0][1]}</strong> Olumsuz talimatlarda <em>do not</em> kullanılır: <strong>Do not overcook it.</strong></p></section>
      <section id="exercise"><div class="exercise"><p class="eyebrow">8. sınıf İngilizce</p><h2>4 soruluk mini alıştırma</h2><ol><li>Tarifin ana malzemesi nedir?</li><li>İlk talimat hangi İngilizce fiille başlıyor?</li><li>Tarifin hazırlanması ne kadar sürüyor?</li><li>Son adımı Türkçe olarak yazın.</li></ol></div></section>
    </div></div></article>`;
}

function route() {
  const slug = location.hash.replace(/^#\//, "");
  slug && recipes[slug] ? renderRecipe(recipes[slug]) : renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();
