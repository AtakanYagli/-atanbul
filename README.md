# Arka Sokak — İstanbul'un sakin tarafı

**Hedef kitle:** İstanbul'da yaşayan veya şehri ziyaret eden, yeni yerleri yürüyerek ve acele etmeden keşfetmek isteyen meraklı gezginler.

Arka Sokak, İstanbul'un gündelik telaşında küçük bir mola arayanlar için hazırlanmış üç sayfalık bir şehir keşif rehberidir. Ödevdeki örnek konu başlıklarından farklı olarak avlular, merdivenler, kıyılar, kitapçılar ve korular etrafında beş özgün keşif sunar.

## Proje dosyaları

- `index.html` — site tanıtımı ve ana sayfa
- `icerikler.html` — beş keşif kartı ve başlık araması
- `hakkinda.html` — konu seçiminin ve rehberin amacı
- `style.css` — ortak görünüm ve mobil düzen
- `script.js` — başlık filtresi, sonuç sayacı, boş durum ve temizleme
- `assets/` — Pexels lisanslı, yerel fotoğraf dosyaları
- `FOTO_KAYNAKLARI.md` — görsel kaynak ve fotoğrafçı atıfları
- `AI_NOTLARI.md` — AI promptları ve kod inceleme notları
- `TEST_NOTLARI.md` — altı tarayıcı testinin sonuçları
- `KOD_INCELEME.md` — kodun ölçütlere göre inceleme kaydı
- `screenshots/` — üç tarayıcı ekran görüntüsü
- `verify_site.py` — Playwright ile testleri yeniden çalıştırma betiği

## Çalıştırma

Projeyi GitHub Codespaces'te açın veya bilgisayarınıza indirin. `index.html` dosyasını bir tarayıcıda açmak yeterlidir; sunucu, kurulum, backend veya veritabanı gerekmez. Menüden üç sayfa arasında geçiş yapılabilir. İçerikler sayfasındaki arama yalnızca kart başlıklarında, yazdıkça çalışır.

Fotoğraflar `assets/` klasöründe yerel olarak bulunur ve site çevrimdışı açıldığında da görünür. Fotoğrafçı adları ve Pexels kaynak bağlantıları sayfa üzerinde ve `FOTO_KAYNAKLARI.md` içinde verilmiştir. Google Fonts için internet bağlantısı gerekir; çevrimdışıyken sistem yazı tipleri kullanılır.

## GitHub repository

GitHub Codespaces'te yeni bir repository oluşturduktan sonra, öğretim elemanının erişebildiği repository bağlantısını bu satıra ekleyin: **[GitHub repository bağlantısını buraya ekleyin]**.

## Teslim öncesi

Altı kabul testi ve üç ekran görüntüsü `TEST_NOTLARI.md` ile `screenshots/` içinde kaydedilmiştir. İsterseniz Playwright yüklü ortamda `python verify_site.py` ile tekrar çalıştırabilirsiniz. İstenen `ÖĞRNO_AD_SOYAD.zip` arşivini, içinde tek proje klasörü olacak biçimde hazırlayın. Codespaces/GitHub bağlantısı ve commit geçmişi kullanıcı tarafından kendi hesabında tamamlanmalıdır.






