# Tarayıcı test notları

Altı kabul testi Playwright ile Chromium tarayıcısında, bu projedeki yerel HTML dosyaları üzerinde çalıştırıldı. Beklenen ve gerçekleşen sonuçlar aşağıda kaydedilmiştir. Otomatik test, öğrencinin teslim öncesinde kendi bilgisayarında son bir gözle kontrol yapmasının yerini tutmaz.

| # | Girdi / işlem | Beklenen sonuç | Gerçekleşen sonuç | Karar |
|---|---|---|---|---|
| 1 | Aramaya `avluda` yazın. | Yalnızca “Bir avluda soluklan” görünür; sayaç 1 olur. | Bir kart göründü; sayaç `1 keşif` gösterdi. | Geçti |
| 2 | `  BİR AVLUDA  ` yazın. | Kenar boşlukları ve harf büyüklüğü eşleşmeyi bozmaz. | Yalnızca “Bir avluda soluklan” göründü; sayaç `1 keşif` oldu. | Geçti |
| 3 | `kutuphanemars` yazın. | Sayaç 0, kart yok ve boş sonuç mesajı görünür. | Sayaç `0 keşif`; boş sonuç mesajı görünür, kart kalmadı. | Geçti |
| 4 | Temizle'ye basın; sonra yalnızca boşluk yazın. | Her iki durumda da beş kart görünür, boş mesajı kapanır. | Temizle sonrasında ve boşluk sorgusunda 5 kart/sayaç 5; mesaj kapalı. | Geçti |
| 5 | Her sayfada üç menü bağlantısını açın. | Her hedef doğru HTML sayfasına gider. | Üç sayfadan her menü hedefi açıldı; 9/9 geçiş doğru URL'ye gitti. | Geçti |
| 6 | 390 px genişlikte arama ve Temizle arasında Tab ile gezin. | Yatay taşma yok; input/düğme klavyeyle ulaşılır, odak görünür. | Belge genişliği 390 px; Tab input'tan Temizle düğmesine geçti. `:focus-visible` odağı 3 px turuncu outline ile biçimlendiriyor. | Geçti |

## Ekran görüntüleri

Tarayıcıdan alınan gerçek görüntüler `screenshots/` klasöründedir:

1. `screenshots/01-normal-arama.png` — `avluda` araması ve tek eşleşen kart.
2. `screenshots/02-bos-sonuc.png` — sıfır eşleşme ve boş sonuç durumu.
3. `screenshots/03-mobil-390px.png` — 390 px dar ekran görünümü ve başlık araması.

