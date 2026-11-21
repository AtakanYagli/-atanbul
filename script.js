"use strict";

// Arama içerik listesindeki kartların yalnızca başlıklarını karşılaştırır.
const searchInput = document.querySelector("#title-search");
const clearButton = document.querySelector("#clear-search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const cards = [...document.querySelectorAll(".discovery-card")];

if (searchInput && resultCount && emptyState) {
  function filterCards() {
    // Kullanıcının baştaki/sondaki boşluklarını ve harf büyüklüğünü yok say.
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    for (const card of cards) {
      const title = card.querySelector("h2").textContent.trim().toLocaleLowerCase("tr-TR");
      const matches = title.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    }

    resultCount.textContent = `${visibleCount} keşif gösteriliyor`;
    emptyState.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterCards);

  clearButton?.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });

  filterCards();
}

const detailDialog = document.querySelector("#discovery-dialog");
if (detailDialog) {
  const detailCopy = [
    "Renkli cephelerden içeri doğru kısa bir sapak ver. Kemerlerin ve taş duvarların çevrelediği avluda biraz yavaşla; Fener ve Balat sokaklarının hareketi geride kalsın.",
    "Karaköy'ün yokuşlarını birbirine bağlayan merdivenlerde yukarı çıkarken çevrene bak. Taş basamaklar, sokağın dokusunu ve gündelik şehir akışını fark etmek için küçük bir mola sunar.",
    "Salacak kıyısında suya dönük bir yer bulup vapurların geçişini izle. Kıyıdaki kısa bir yürüyüş ve martı sesleri, şehrin temposuna ara vermek için yeter.",
    "İstiklal'in kalabalığından bir kitapçının raflarına doğru uzaklaş. Rafların arasında dolaş, ilgini çeken bir kitabın sayfalarını karıştır ve günün telaşına kısa bir ara ver.",
    "Fethi Paşa Korusu'nun gölgeli yollarında plansızca yürü. Bir bankta dinlen, kuş seslerini dinle ve ağaçların arasından süzülen ışığı seyret."
  ];
  const detailImage = document.querySelector("#detail-image");
  const detailTitle = document.querySelector("#detail-title");
  const detailCategory = document.querySelector("#detail-category");
  const detailDescription = document.querySelector("#detail-description");
  const detailExtra = document.querySelector("#detail-extra");
  const detailPlace = document.querySelector("#detail-place");
  const detailCredit = document.querySelector("#detail-credit");
  const closeDetail = detailDialog.querySelector(".detail-dialog-close");

  cards.forEach((card, index) => {
    const trigger = card.querySelector("[data-discovery-open]");
    if (!trigger) return;
    const image = trigger.querySelector("img");
    const title = card.querySelector("h2").textContent.trim();
    trigger.setAttribute("aria-label", `${title} içeriğini aç`);
    trigger.addEventListener("click", () => {
      detailImage.src = image.src;
      detailImage.alt = image.alt;
      detailTitle.textContent = title;
      detailCategory.textContent = card.querySelector(".card-category").textContent.trim();
      detailDescription.textContent = card.querySelector(".discovery-body > p:not(.card-category)").textContent.trim();
      detailExtra.textContent = detailCopy[index];
      detailPlace.textContent = card.querySelector(".card-fact strong").textContent.trim();
      detailCredit.textContent = card.querySelector(".photo-credit").textContent.trim();
      detailDialog.showModal();
    });
  });

  closeDetail.addEventListener("click", () => detailDialog.close());
  detailDialog.addEventListener("click", (event) => {
    if (event.target === detailDialog) detailDialog.close();
  });
}
