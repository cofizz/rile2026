/* =========================================================
   i18n.js — SR/EN language toggle for the whole site.
   Loaded last on every page. Walks text nodes, input
   placeholders and the document title, swapping Serbian for
   English against the dictionary below. Choice is saved in
   localStorage so it persists across pages. No page reload.
   CSS-generated text (::before/::after) is handled by
   body.lang-en overrides in the stylesheets.
   ========================================================= */
(function () {
  "use strict";

  var DICT = {
    // ---- Navigation / chrome ----
    "POČETNA": "HOME",
    "PROIZVODI": "PRODUCTS",
    "O NAMA": "ABOUT US",
    "KONTAKT": "CONTACT",
    "Početna": "Home",
    "Proizvodi": "Products",
    "O nama": "About us",
    "Kontakt": "Contact",
    "Brzi linkovi": "Quick links",
    "Saznajte više": "Learn more",
    "Više Detalja": "More Details",
    "Pogledajte sve u ponudi": "See the full offer",
    "Pročitajte o nama!": "Read about us!",
    "Poručite!": "Order now!",
    "U ponudi": "Available",
    "Najtraženije": "Most popular",
    "IZDVOJENO IZ PONUDE": "FEATURED",
    "Naša ponuda": "Our offer",
    "Slični Proizvodi": "Similar Products",
    "Slični proizvodi": "Similar products",
    "Dostupne boje:": "Available colors:",

    // ---- Forms / contact ----
    "Kontaktirajte nas": "Contact us",
    "Ime": "First name",
    "Prezime": "Last name",
    "Email": "Email",
    "Telefon": "Phone",
    "Poruka": "Message",
    "Pošaljite poruku": "Send message",
    "Pošaljite poruku!": "Send message!",
    "Ili nas pozovite:": "Or call us:",
    "Spremni za kupovinu?": "Ready to buy?",
    "Pošaljite nam poruku ili nas pozovite i rado ćemo odgovoriti na sva vaša pitanja.": "Send us a message or give us a call and we'll gladly answer all your questions.",

    // ---- Product / spec labels ----
    "Opis proizvoda": "Product description",
    "Kvalitetni materijali": "Quality materials",
    "Različiti nivoi otpora": "Various resistance levels",
    "Kompatibilnost": "Compatibility",
    "Garancija 5 godina": "5-year warranty",
    "Izuzetna stabilnost": "Exceptional stability",
    "Jednostavna Montaža": "Easy Assembly",
    "Održivi Materijali": "Sustainable Materials",
    "Lako održivi materijali": "Easy-to-maintain materials",
    "Lako održivi materijali sa 10-godišnjom garancijom na ram": "Easy-to-maintain materials with a 10-year frame warranty",
    "Svestrani Sistem Otpora": "Versatile Resistance System",
    "Svestrani sistem otpora": "Versatile resistance system",
    "Svestrani sistem otpora sa oprugama": "Versatile spring resistance system",
    "Svestrane vežbe za celo telo": "Versatile full-body exercises",
    "Nečujan i gladak sistem klizanja": "Silent, smooth gliding system",
    "Nečujan sistem rada": "Silent operation",
    "Izdržljiva konstrukcija i gladak rad": "Durable construction and smooth operation",
    "Topao drveni dizajn": "Warm wooden design",
    "Crni ram sa modernim dizajnom": "Black frame with a modern design",
    "Reformer sa integrisanom kulom (tower)": "Reformer with integrated tower",
    "Reformer sa kulom za napredne vežbe": "Reformer with tower for advanced exercises",
    "Visokokvalitetno javorovo drvo": "High-quality maple wood",
    "Visokokvalitetno hrastovo drvo": "High-quality oak wood",
    "Visokokvalitetno hrastovo drvo sa nečujnim sistemom rada": "High-quality oak wood with silent operation",
    "*Boja podloge i rama može da bude promenljiva": "*Upholstery and frame color may vary",
    "u zavisnosti od vaših potreba*": "depending on your needs*",

    // ---- Footer / brand ----
    "Vrhunske Pilates mašine i oprema, ručno izrađene za studio i kućni trening.": "Premium Pilates machines and equipment, handcrafted for studio and home training.",
    "© 2025 Pilates Reformer Shop. Sva prava zadržana.": "© 2025 Pilates Reformer Shop. All rights reserved.",

    // ---- Home / hero ----
    "Najpovoljnije pilates mašine": "The most affordable Pilates machines",
    "Gde se inovacije i posvećenost fitnesu susreću": "Where innovation and dedication to fitness meet",
    "Naša priča započinje strašću jednog ličnog trenera koji je, gradeći svoj put u svetu fitnesa, shvatio važnost kvalitetne opreme za postizanje vrhunskih rezultata.": "Our story begins with the passion of a personal trainer who, while building his path in the world of fitness, realized the importance of quality equipment for achieving top results.",
    "Sa svojom vizijom, otvorio je fitnes centar koji je brzo postao omiljeno mesto ljubitelja zdravog načina života i sinonim za kvalitet, stručnost i inspiraciju. Uz naš centar, širimo strast prema fitnesu nudeći vrhunske Pilates mašine i opremu najvišeg kvaliteta u regionu.": "With his vision, he opened a fitness center that quickly became a favorite spot for lovers of a healthy lifestyle and a synonym for quality, expertise and inspiration. Through our center, we spread a passion for fitness by offering premium Pilates machines and equipment of the highest quality in the region.",

    // ---- Products page intro ----
    "Pregledajte celokupan asortiman reformera, stolica i opreme. Kliknite na proizvod za detalje i specifikacije.": "Browse our full range of reformers, chairs and equipment. Click a product for details and specifications.",

    // ---- Page titles ----
    "Proizvodi | Pilates Reformer Shop": "Products | Pilates Reformer Shop",

    // ---- Product descriptions ----
    "Reformer je ključna Pilates mašina za višestruke vežbe koje poboljšavaju držanje i tonus mišića bez preteranog napora.": "The Reformer is a key Pilates machine for a wide range of exercises that improve posture and muscle tone without excessive strain.",
    "Jedan od najomiljenijih Pilates uređaja za dinamične, celokupne treninge koji ciljaju snagu, fleksibilnost, koordinaciju i ravnotežu.": "One of the most beloved Pilates devices for dynamic, full-body workouts that target strength, flexibility, coordination and balance.",
    "Box je višenamenski rekvizit za vežbanje koji omogućava izvođenje širokog spektra vežbi za jačanje tela. Idealan je za razvijanje snage, ravnoteže i fleksibilnosti. Box je posebno koristan za ciljano vežbanje mišića trupa, nogu i ruku, pružajući podršku i otpor potrebne za precizno izvođenje pokreta. Savršen je za kućne vežbe. Box može pomoći svakome da postigne bolje držanje, povećanu stabilnost i ukupnu telesnu kondiciju.": "The Box is a versatile training prop that allows a wide range of body-strengthening exercises. It is ideal for developing strength, balance and flexibility. The Box is especially useful for targeted training of the core, leg and arm muscles, providing the support and resistance needed for precise movement. It is perfect for home workouts. The Box can help anyone achieve better posture, increased stability and overall physical condition.",
    "Chair, poznata i kao Wunda Chair, je višenamenski rekvizit za vežbanje koji omogućava izvođenje širokog spektra vežbi za jačanje tela. Idealan je za razvijanje snage, ravnoteže i fleksibilnosti. Chair je posebno koristan za ciljano vežbanje mišića trupa, nogu i ruku, pružajući podršku i otpor potrebne za precizno izvođenje pokreta. Savršen je za kućne vežbe. Chair može pomoći svakome da postigne bolje držanje, povećanu stabilnost i ukupnu telesnu kondiciju.": "The Chair, also known as the Wunda Chair, is a versatile training prop that allows a wide range of body-strengthening exercises. It is ideal for developing strength, balance and flexibility. The Chair is especially useful for targeted training of the core, leg and arm muscles, providing the support and resistance needed for precise movement. It is perfect for home workouts. The Chair can help anyone achieve better posture, increased stability and overall physical condition.",
    "Chair Barrel Trio je vrhunski Pilates uređaj koji objedinjuje snagu, fleksibilnost i ravnotežu. Svojim inovativnim dizajnom i raznolikim opcijama vežbanja, omogućuje kompletnu i dinamičnu Pilates rutinu. Sa svojim prilagodljivim platformama, oprugama i ručkama, Chair Barrel Trio nudi beskonačne mogućnosti prilagođene svim nivoima vežbača.": "The Chair Barrel Trio is a premium Pilates device that combines strength, flexibility and balance. With its innovative design and diverse exercise options, it enables a complete and dynamic Pilates routine. With its adjustable platforms, springs and handles, the Chair Barrel Trio offers endless possibilities tailored to all fitness levels.",
    "Combo Cadillac je vrhunski Pilates uređaj koji objedinjuje snagu, fleksibilnost i ravnotežu. Svojim inovativnim dizajnom i raznolikim opcijama vežbanja, omogućuje kompletnu i dinamičnu Pilates rutinu. Sa svojim prilagodljivim platformama, oprugama i ručkama, Cadillac nudi beskonačne mogućnosti prilagođene svim nivoima vežbača.": "The Combo Cadillac is a premium Pilates device that combines strength, flexibility and balance. With its innovative design and diverse exercise options, it enables a complete and dynamic Pilates routine. With its adjustable platforms, springs and handles, the Cadillac offers endless possibilities tailored to all fitness levels.",
    "Kada su u pitanju vežbe za jačanje trbušnih mišića i povećanje fleksibilnosti, ne postoji ništa efikasnije od Ladder Barrela. Naš specijalni sistem \"zone udobnosti\" obloge i robusna lestva i okvir napravljeni od javora garantuju visoke performanse. Jednostavan sistem podešavanja sa samo jednom pedalom prilagođen za različite veličine trupa i dužine nogu.": "When it comes to exercises for strengthening the abdominal muscles and increasing flexibility, there is nothing more effective than the Ladder Barrel. Our special \"comfort zone\" padding system and the sturdy ladder and frame made of maple guarantee high performance. A simple adjustment system with just one pedal adapts to different torso sizes and leg lengths.",
    "Pilates Arc je multifunkcionalna sprava dizajnirana za poboljšanje fleksibilnosti, snage i posture. Njegov zakrivljeni oblik omogućava podršku kičmi tokom vežbi istezanja, jačanja trupa i rehabilitacije. Idealan je za sve nivoe vežbača, jer pruža mogućnost prilagođavanja intenziteta treninga.": "The Pilates Arc is a multifunctional device designed to improve flexibility, strength and posture. Its curved shape supports the spine during stretching, core-strengthening and rehabilitation exercises. It is ideal for all fitness levels, as it offers the ability to adjust training intensity.",
    "Pilates Combo Cadillac Premium je multifunkcionalna sprava koja omogućava raznovrsne vežbe za snagu, fleksibilnost i pravilno držanje. Idealan je za profesionalne studije i zahtevne korisnike, pružajući stabilnost, sigurnost i prilagodljivost tokom treninga. Bilo da ste profesionalni instruktor ili entuzijasta pilatesa, ova sprava će vam pomoći da postignete maksimalne rezultate i unapredite svoje fizičko zdravlje.": "The Pilates Combo Cadillac Premium is a multifunctional device that enables a variety of exercises for strength, flexibility and proper posture. It is ideal for professional studios and demanding users, providing stability, safety and adaptability during training. Whether you are a professional instructor or a Pilates enthusiast, this device will help you achieve maximum results and improve your physical health.",
    "Pilates Reformer Tower Premium je multifunkcionalan rekvizit koji kombinuje prednosti Reformera i Towera za optimalno vežbanje. Idealan je za jačanje, fleksibilnost i ravnotežu, omogućavajući precizne i kontrolirane pokrete.": "The Pilates Reformer Tower Premium is a multifunctional prop that combines the advantages of the Reformer and the Tower for optimal training. It is ideal for strengthening, flexibility and balance, enabling precise and controlled movements.",
    "Pilates Reformer Tower je multifunkcionalan rekvizit koji kombinuje prednosti Reformera i Towera za optimalno vežbanje. Idealan je za jačanje, fleksibilnost i ravnotežu, omogućavajući precizne i kontrolirane pokrete.": "The Pilates Reformer Tower is a multifunctional prop that combines the advantages of the Reformer and the Tower for optimal training. It is ideal for strengthening, flexibility and balance, enabling precise and controlled movements.",
    "Pilates Spine Corrector je savršen alat za poboljšanje držanja, fleksibilnosti i snage. Dizajniran da podrži kičmu, ovaj rekvizit omogućava ciljane vežbe koje pomažu u jačanju trbušnih mišića i istezanju leđa. Idealan je za sve nivoe vežbača, pružajući efikasne rezultate u unapređenju vaše Pilates rutine.": "The Pilates Spine Corrector is the perfect tool for improving posture, flexibility and strength. Designed to support the spine, this prop enables targeted exercises that help strengthen the abdominal muscles and stretch the back. It is ideal for all fitness levels, delivering effective results in enhancing your Pilates routine.",
    "Reformer Black odlikuje se modernim crnim ramom i integrisanom kulom za napredne vežbe. Elegantan i izdržljiv, idealan je za studije koji žele upečatljiv, savremen izgled.": "The Reformer Black features a modern black frame and an integrated tower for advanced exercises. Elegant and durable, it is ideal for studios seeking a striking, contemporary look.",
    "Reformer Pro je profesionalna Pilates sprava izrađena od visokokvalitetnog javorovog drveta, namenjena studijima i zahtevnim korisnicima. Pruža stabilnost, preciznu kontrolu otpora i gladak, nečujan rad za sve nivoe vežbača.": "The Reformer Pro is a professional Pilates machine made of high-quality maple wood, intended for studios and demanding users. It provides stability, precise resistance control and smooth, silent operation for all fitness levels.",
    "Reformer Zen kombinuje klasični reformer sa kulom (tower), omogućavajući širok spektar vežbi za snagu, fleksibilnost i pravilno držanje. Topao drveni dizajn savršeno se uklapa u svaki studio.": "The Reformer Zen combines a classic reformer with a tower, enabling a wide range of exercises for strength, flexibility and proper posture. Its warm wooden design fits perfectly into any studio.",
    "Spring Wall pruža funkcionalnost Cadillac-a u kompaktnom i pristupačnom paketu. Šipka za guranje se lako podešava duž visine mašine, što je čini veoma prilagodljivom za upotrebu na podu, povišenim podlogama i Reformerima bilo koje visine.": "The Spring Wall delivers the functionality of the Cadillac in a compact and affordable package. The push-through bar adjusts easily along the height of the machine, making it highly adaptable for use on the floor, on raised platforms and on Reformers of any height.",
    "Unapredi svoju Pilates rutinu uz Reformer Spring Set, savršen dodatak za sve nivoe vežbača! Ovaj set opruga dizajniran je da omogući precizno podešavanje otpora, pružajući ti maksimalnu kontrolu nad svakim pokretom, bilo da radiš na snazi, stabilnosti ili fleksibilnosti.": "Upgrade your Pilates routine with the Reformer Spring Set, the perfect addition for all fitness levels! This spring set is designed to allow precise resistance adjustment, giving you maximum control over every movement, whether you're working on strength, stability or flexibility."
  };

  var norm = function (s) { return (s || "").replace(/\s+/g, " ").trim(); };

  var textEntries = [];   // { node, sr, en }
  var phEntries = [];     // { el, sr, en }
  var titleEntry = null;  // { sr, en }
  var current = "sr";

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = norm(raw);
      if (!key || !DICT[key]) continue;
      var lead = raw.match(/^\s*/)[0];
      var trail = raw.match(/\s*$/)[0];
      textEntries.push({ node: n, sr: raw, en: lead + DICT[key] + trail });
    }
    document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(function (el) {
      var key = norm(el.getAttribute("placeholder"));
      if (DICT[key]) phEntries.push({ el: el, sr: el.getAttribute("placeholder"), en: DICT[key] });
    });
    var tkey = norm(document.title);
    if (DICT[tkey]) titleEntry = { sr: document.title, en: DICT[tkey] };
  }

  function apply(lang) {
    var en = lang === "en";
    textEntries.forEach(function (e) { e.node.nodeValue = en ? e.en : e.sr; });
    phEntries.forEach(function (e) { e.el.setAttribute("placeholder", en ? e.en : e.sr); });
    if (titleEntry) document.title = en ? titleEntry.en : titleEntry.sr;
    document.documentElement.lang = en ? "en" : "sr";
    document.body.classList.toggle("lang-en", en);
  }

  function makeToggle() {
    var nav = document.querySelector(".navbar");
    if (!nav) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-toggle";
    function label() {
      btn.textContent = current === "en" ? "SR" : "EN";
      btn.setAttribute("aria-label", current === "en" ? "Prebaci na srpski" : "Switch to English");
    }
    btn.addEventListener("click", function () {
      current = current === "en" ? "sr" : "en";
      try { localStorage.setItem("lang", current); } catch (e) {}
      apply(current);
      label();
    });
    // place it just before the mail CTA so on desktop it groups on the
    // right next to the nav + envelope (CSS handles mobile ordering)
    var mail = nav.querySelector(".mail-a");
    if (mail) nav.insertBefore(btn, mail); else nav.appendChild(btn);
    label();
  }

  function init() {
    try { current = localStorage.getItem("lang") === "en" ? "en" : "sr"; } catch (e) { current = "sr"; }
    collect();
    apply(current);
    makeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
