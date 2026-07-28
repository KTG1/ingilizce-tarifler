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
      ["Drain the Pasta", "Next, drain the pasta in a colander.", "Sonra makarnayı bir süzgeçte süzün."],
      ["Add Butter or Olive Oil", "Add 1 tablespoon of butter or olive oil and stir gently.", "1 yemek kaşığı tereyağı veya zeytinyağı ekleyip nazikçe karıştırın."],
      ["Serve While Hot", "Finally, serve the pasta while it is hot.", "Son olarak makarnayı sıcakken servis edin."],
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

const pastaVariants = [
  {
    title: "Sade Makarna Tarifi",
    english: "Plain Pasta Recipe",
    description: "Plain pasta is boiled pasta finished with butter or olive oil. / Sade makarna, haşlandıktan sonra tereyağı veya zeytinyağıyla tamamlanan makarnadır.",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=1200&q=80",
    alt: "A bowl of plain cooked pasta ready to serve",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Water", "Su", "2 l"], ["Salt", "Tuz", "1 tsp"], ["Butter", "Tereyağı", "1 tbsp"]],
    steps: "Boil the water, add the pasta, cook for 8–10 minutes, drain and serve. / Suyu kaynatın, makarnayı ekleyin, 8–10 dakika pişirin, süzün ve servis edin.",
  },
  {
    title: "Domates Soslu Makarna",
    english: "Pasta with Tomato Sauce",
    description: "Pasta with tomato sauce combines cooked pasta with a quick garlic and tomato sauce. / Domates soslu makarna, pişmiş makarnayı sarımsaklı hızlı bir domates sosuyla birleştirir.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
    alt: "Pasta coated with tomato sauce in a serving bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Crushed tomatoes", "Ezilmiş domates", "250 g"], ["Garlic", "Sarımsak", "2 cloves"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, sauté the garlic for 1 minute. Then, add the tomatoes and cook for 10 minutes. Finally, toss with the pasta. / Önce sarımsağı 1 dakika soteleyin. Ardından domatesi ekleyip 10 dakika pişirin. Son olarak makarnayla karıştırın.",
  },
  {
    title: "Spagetti Bolonez",
    english: "Spaghetti Bolognese Recipe",
    description: "Spaghetti Bolognese is spaghetti served with a slow-cooked minced-beef and tomato sauce. / Spagetti Bolonez, kıymalı domates sosuyla servis edilen spagettidir.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Spaghetti Bolognese with minced beef and tomato sauce",
    ingredients: [["Spaghetti", "Spagetti", "200 g"], ["Minced beef", "Kıyma", "200 g"], ["Tomato purée", "Domates püresi", "250 g"], ["Onion", "Soğan", "1"]],
    steps: "First, brown the beef. Then, add the onion and tomato purée. After that, simmer for 25 minutes and serve over spaghetti. / Önce kıymayı kavurun. Ardından soğan ve domates püresini ekleyin. Daha sonra 25 dakika pişirip spagettinin üzerinde servis edin.",
  },
  {
    title: "Fırında Makarna",
    english: "Baked Pasta Recipe",
    description: "Baked pasta is pasta covered with béchamel sauce and cheese, then browned in the oven. / Fırında makarna, beşamel sos ve peynirle kaplanıp fırında kızartılan makarnadır.",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden baked pasta with béchamel sauce and cheese",
    ingredients: [["Pasta", "Makarna", "250 g"], ["Milk", "Süt", "500 ml"], ["Flour", "Un", "2 tbsp"], ["Grated cheese", "Rendelenmiş peynir", "150 g"]],
    steps: "First, prepare the béchamel sauce. Then, combine it with the pasta. Finally, add cheese and bake at 190°C for 25 minutes. / Önce beşamel sosu hazırlayın. Ardından makarnayla karıştırın. Son olarak peynir ekleyip 190°C'de 25 dakika pişirin.",
  },
  {
    title: "Fettuccine Alfredo",
    english: "Fettuccine Alfredo Recipe",
    description: "Fettuccine Alfredo coats ribbon pasta with a creamy butter and Parmesan sauce. / Fettuccine Alfredo, şerit makarnayı tereyağlı ve Parmesanlı kremalı sosla kaplar.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=80",
    alt: "Creamy Fettuccine Alfredo served with Parmesan",
    ingredients: [["Fettuccine", "Fettuccine makarna", "200 g"], ["Cream", "Krema", "200 ml"], ["Parmesan", "Parmesan", "80 g"], ["Butter", "Tereyağı", "2 tbsp"]],
    steps: "First, melt the butter. Then, add the cream and Parmesan. Finally, toss the cooked fettuccine in the sauce. / Önce tereyağını eritin. Ardından krema ve Parmesanı ekleyin. Son olarak pişmiş fettuccineyi sosla karıştırın.",
  },
  {
    title: "Ton Balıklı Makarna",
    english: "Tuna Pasta Recipe",
    description: "Tuna pasta is a quick pasta dish mixed with drained tuna, lemon and olive oil. / Ton balıklı makarna, süzülmüş ton balığı, limon ve zeytinyağıyla karıştırılan hızlı bir makarna yemeğidir.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    alt: "Tuna pasta with lemon and herbs in a bowl",
    ingredients: [["Pasta", "Makarna", "200 g"], ["Tuna", "Ton balığı", "160 g"], ["Lemon juice", "Limon suyu", "1 tbsp"], ["Olive oil", "Zeytinyağı", "1 tbsp"]],
    steps: "First, cook and cool the pasta. Then, add the drained tuna, lemon juice and olive oil. Finally, mix and serve. / Önce makarnayı pişirip soğutun. Ardından süzülmüş ton balığını, limon suyunu ve zeytinyağını ekleyin. Son olarak karıştırıp servis edin.",
  },
];

function renderPastaPage() {
  const r = recipes.makarna;
  const vocab = [
    ["boil", "kaynatmak", "Boil the water."], ["drain", "süzmek", "Drain the pasta."],
    ["sauté", "sotelemek", "Sauté the garlic."], ["cook", "pişirmek", "Cook for 10 minutes."],
    ["add", "eklemek", "Add the salt."], ["stir", "karıştırmak", "Stir gently."],
    ["simmer", "kısık ateşte pişirmek", "Simmer the sauce."], ["toss", "harmanlamak", "Toss with the sauce."],
    ["bake", "fırında pişirmek", "Bake at 190°C."], ["serve", "servis etmek", "Serve while hot."],
  ];
  document.title = "İngilizce Makarna Tarifi (Makarna Yapılışı İngilizce) | Konuşarak Öğren";
  root.innerHTML = `<article class="pasta-guide">
    <header class="hero"><div><p class="eyebrow">İngilizce yemek tarifleri</p><h1>İngilizce Makarna Tarifi</h1><p class="lede"><strong>Plain Pasta Recipe.</strong> İngilizce makarna tarifi; malzemeleri, emir kipindeki pişirme adımlarını ve Türkçe karşılıklarını birlikte öğreten uygulamalı bir İngilizce rehberidir.</p></div><aside class="hero-card" aria-label="Tarif özeti"><dl><div><dt>Hazırlık</dt><dd>5 dakika</dd></div><div><dt>Pişirme</dt><dd>10 dakika</dd></div><div><dt>Porsiyon</dt><dd>2 kişilik</dd></div><div><dt>Seviye</dt><dd>A2–B1</dd></div></dl></aside></header>
    <div class="page-grid"><nav class="toc" aria-label="Sayfa bölümleri"><strong>Bu sayfada</strong><a href="#concepts">Kavramlar</a><a href="#recipes">Tarifler</a><a href="#plain-pasta">6 adım</a><a href="#nutrition">Besin değerleri</a><a href="#measurements">Ölçüler</a><a href="#grammar">Dil kuralları</a><a href="#exercise">Alıştırma</a></nav>
    <div class="content">
      <section id="concepts"><p class="eyebrow">Temel kavramlar ve çeviriler</p><h2>İngilizce makarna tarifi nedir?</h2><p class="section-intro">İngilizcede <strong>pasta</strong> genel kategoriyi, <strong>spaghetti</strong>, <strong>penne</strong> ve <strong>fettuccine</strong> ise belirli makarna biçimlerini anlatır. Tarif boyunca İngilizce talimat önce, Türkçe açıklama hemen sonra verilir.</p>${table(["İngilizce kavram", "Türkçe karşılığı", "İlgili tarif"], [["pasta","makarna","Tüm tarifler"],["plain pasta","sade makarna","Sade makarna"],["tomato sauce","domates sosu","Domates soslu makarna"],["béchamel sauce","beşamel sos","Fırında makarna"],["minced beef","kıyma","Spagetti Bolonez"]])}<h3>Tarif yazımında kullanılan fiiller</h3>${table(["Fiil", "Türkçe karşılığı", "Örnek cümle"], [["Boil","Kaynatmak","Boil 2 l of water. / 2 l su kaynatın."],["Drain","Süzmek","Drain the pasta. / Makarnayı süzün."],["Sauté","Sotelemek","Sauté the garlic. / Sarımsağı soteleyin."],["Cook","Pişirmek","Cook for 10 minutes. / 10 dakika pişirin."]])}</section>
      <section id="recipes"><p class="eyebrow">6 tarif çeşidi</p><h2>İngilizce makarna tarifleri</h2><p class="section-intro">Her tarifte tanım, İngilizce–Türkçe malzemeler, miktarlar ve kısa yapılış birlikte verilmiştir.</p><div class="variant-list">${pastaVariants.map((v, i) => `<article class="variant-card"><div class="variant-copy"><span class="variant-number">${String(i + 1).padStart(2,"0")}</span><h3>${v.title} <small>(${v.english})</small></h3><p>${v.description}</p>${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],v.ingredients)}<p class="method-note"><strong>Yapılış:</strong> ${v.steps}</p></div><figure><img src="${v.image}" alt="${v.alt}" loading="lazy"><figcaption>${v.english}</figcaption></figure></article>`).join("")}</div></section>
      <section id="plain-pasta"><p class="eyebrow">Sabit 6 adım</p><h2>Plain Pasta İngilizce adım adım nasıl yapılır?</h2><p class="section-intro">Bu sade makarna tarifi 6 adımdan oluşur ve yaklaşık 15 dakika sürer. İngilizce cümleler emir kipiyle başlar.</p><ol class="steps">${r.steps.map(s => `<li><div><h3>${s[0]}</h3><p><strong>${s[1]}</strong></p><p class="translation">${s[2]}</p></div></li>`).join("")}</ol>${table(["Adım","İngilizce talimat","Türkçe açıklama"],r.steps.map((s,i)=>[i+1,s[1],s[2]]))}<h3>Makarna pişirmek için gerekenler</h3>${table(["İngilizce malzeme","Türkçe karşılığı","Miktar"],r.ingredients)}<h3>Kullanılan mutfak ekipmanları</h3>${table(["İngilizce ekipman","Türkçe karşılığı","Kullanıldığı adım"],[["Large pot","Büyük tencere","1–3"],["Measuring spoon","Ölçü kaşığı","2 ve 5"],["Wooden spoon","Tahta kaşık","2, 3 ve 5"],["Colander","Süzgeç","4"],["Serving bowl","Servis kasesi","6"]])}</section>
      <section id="nutrition"><p class="eyebrow">Kalori ve besin değerleri</p><h2>Bir porsiyon sade makarna kaç kalori?</h2><p class="section-intro">Sossuz, pişmiş makarnanın enerji değeri yaklaşık <strong>158 kcal/100 g</strong>; 180 g'lık örnek bir porsiyonun enerji değeri yaklaşık <strong>284 kcal</strong> kabul edilebilir. Kullanılan makarna ve yağ miktarı sonucu değiştirir.</p>${table(["Porsiyon","Kalori","Açıklama"],[["100 g pişmiş makarna","158 kcal","Sossuz yaklaşık değer"],["1 porsiyon (180 g)","284 kcal","Yağ ve sos hariç yaklaşık değer"]])}<h3>Sade makarnanın 100 g için besin değerleri</h3>${table(["İngilizce besin ögesi","Türkçe karşılığı","100 g'daki miktar"],[["Protein","Protein","5.8 g"],["Carbohydrate","Karbonhidrat","30.9 g"],["Fat","Yağ","0.9 g"],["Dietary fiber","Lif","1.8 g"]])}<p class="source-note">Değerler genel pişmiş makarna verilerine dayalı yaklaşık eğitim değerleridir. Kaynak yöntemi: <a href="https://fdc.nal.usda.gov/" target="_blank" rel="noreferrer">USDA FoodData Central</a>.</p></section>
      <section id="measurements"><p class="eyebrow">Ölçü birimleri ve kelimeler</p><h2>İngilizce makarna tariflerinde kullanılan ölçü birimleri</h2><p class="section-intro">İngilizce makarna tariflerinde <strong>cup, tablespoon, teaspoon, gram</strong> ve <strong>milliliter</strong> birimleri kullanılır.</p>${table(["İngilizce birim","Türkçe karşılığı","Metrik karşılığı","Tarif örneği"],[["cup","su bardağı","240 ml","Add 1 cup of sauce."],["tablespoon (tbsp)","yemek kaşığı","15 ml","Add 1 tablespoon of oil."],["teaspoon (tsp)","çay kaşığı","5 ml","Add 1 teaspoon of salt."],["gram (g)","gram","1 g","Cook 200 g of pasta."],["milliliter (ml)","mililitre","1 ml","Add 250 ml of sauce."]])}<h3>Temel İngilizce mutfak kelimeleri</h3><div class="vocab vocab-wide">${vocab.map(v=>`<article><h3>${v[0]}</h3><strong>${v[1]}</strong><p>${v[2]}</p></article>`).join("")}</div><h3>Gram ve litre nasıl kullanılır?</h3>${table(["Metrik birim","Emperyal karşılığı","Türkçe açıklama"],[["100 g","3.5 oz","Yaklaşık 100 gram"],["1 l","4.2 cups","Yaklaşık 1 litre"]])}</section>
      <section id="grammar"><p class="eyebrow">İngilizce dil kuralları</p><h2>İngilizce makarna tarifi yazarken nelere dikkat edilir?</h2>${table(["Kural","İngilizce örnek","Türkçe karşılığı"],[["Emir kipi","Boil the water.","Suyu kaynatın."],["Sıra zarfları","First, boil the water.","Önce suyu kaynatın."],["Sayılabilen/sayılamayan isimler","Add two tomatoes and some salt.","İki domates ve biraz tuz ekleyin."],["Ölçü ifadeleri","Add 1 tablespoon of oil.","1 yemek kaşığı yağ ekleyin."]])}<h3>Emir kipi nasıl kullanılır?</h3><p class="section-intro">Emir kipi, özne kullanmadan fiilin yalın hâliyle başlar: <strong>Boil, add, cook, drain, serve.</strong> Olumsuz talimatta <em>do not</em> kullanılır: <strong>Do not overcook the pasta. / Makarnayı fazla pişirmeyin.</strong></p>${table(["İngilizce emir","Türkçe karşılığı","Fiil"],[["Boil the water.","Suyu kaynatın.","boil"],["Add the pasta.","Makarnayı ekleyin.","add"],["Cook for 10 minutes.","10 dakika pişirin.","cook"],["Drain the pasta.","Makarnayı süzün.","drain"],["Serve while hot.","Sıcakken servis edin.","serve"]])}<h3>First, then, after that, next, finally</h3>${table(["Sıra zarfı","Türkçe karşılığı","Örnek"],[["First","Önce","First, boil the water."],["Then","Ardından","Then, add the pasta."],["After that","Daha sonra","After that, cook for 10 minutes."],["Next","Sonra","Next, drain the pasta."],["Finally","Son olarak","Finally, serve while hot."]])}<div class="language-card sequence"><small>Kısa tarif paragrafı</small><p>First, boil the water. Then, add the salt and pasta. After that, cook for 8–10 minutes. Next, drain the pasta and add butter. Finally, serve it while hot.</p><p class="translation">Önce suyu kaynatın. Ardından tuz ve makarnayı ekleyin. Daha sonra 8–10 dakika pişirin. Sonra makarnayı süzüp tereyağı ekleyin. Son olarak sıcakken servis edin.</p></div></section>
      <section id="exercise"><div class="exercise"><p class="eyebrow">8. sınıf İngilizce</p><h2>4 soruluk makarna tarifi alıştırması</h2><ol><li>“Drain the pasta” cümlesinin Türkçe karşılığı nedir?</li><li>Makarnayı kaç dakika pişirmelisiniz?</li><li>Tarifin son adımını İngilizce yazın.</li><li><em>First</em> ve <em>finally</em> kelimelerini kullanarak iki tarif cümlesi kurun.</li></ol></div></section>
    </div></div></article>`;
}

function route() {
  const slug = location.hash.replace(/^#\//, "");
  slug === "makarna" ? renderPastaPage() : slug && recipes[slug] ? renderRecipe(recipes[slug]) : renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", route);
route();
