# Kod inceleme notları

## İncelenen noktalar

- **Sayfa ve menü:** Üç sayfanın her birinde aynı menü hedefleri var. Geçerli sayfa `aria-current="page"` ile belirtiliyor; hedef dosyalar tarayıcıda açıldı.
- **Arama:** `script.js` kart başlığındaki `h2` değerini okuyor. Arama açıklama, kategori veya konumu taramıyor. Bu, ödevin yalnızca başlığa göre filtreleme koşuluna uyuyor.
- **Türkçe normalleştirme:** Kullanıcı sorgusu `trim()` ile kenar boşluklarından arındırılıyor; sorgu ve başlık `toLocaleLowerCase("tr-TR")` ile karşılaştırılıyor.
- **Sonuç durumu:** Görünen kartların sayısı sayaçta gösteriliyor. Sıfır eşleşmede boş mesajı açılıyor; Temizle işlemi alanı boşaltıp sayaç ve kartları sıfırlıyor.
- **Erişilebilirlik:** Arama alanının görünür etiketi `for`/`id` ile bağlı. Sayaç `aria-live="polite"` ile duyuruluyor. Temizle düğmesinin adı var ve klavye odağı `:focus-visible` ile belirgin.
- **Mobil düzen:** 390 px görünümde yatay taşma yok; arama alanı ve temizleme düğmesine Tab ile geçilebiliyor.
- **Görseller:** Fotoğraflar yerel `assets/` altında, görsellerde alternatif metin ve görünür atıf bulunuyor. Kaynak adresleri `FOTO_KAYNAKLARI.md` içinde.

## Değerlendirme ve sonraki adım

Kod, bu ölçütler açısından tarayıcıda denendi ve altı kabul testi geçti.
