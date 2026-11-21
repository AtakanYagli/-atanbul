
## 1. Plan ve içerik promptu

**Amaç:** Konu, hedef kitle, sayfa yapısı ve içerik başlıklarını belirlemek; kodlamadan önce kabul ölçütü çıkarmak.

> BPR201 Internet Tabanlı Programlama dersi için, ödev yönergesindeki Yapay Zeka, Yazılım, Blog ve Edebiyat örneklerinden farklı bir konuda üç sayfalı, Türkçe bir web sitesi planla. Konu İstanbul'un sakin şehir kaçamakları olsun. Hedef kitleyi tek cümleyle tanımla; siteye akılda kalan bir ad ver. Ana Sayfa, Keşifler ve Hakkında sayfalarının içeriğini tasarla. Keşifler için en az beş özgün kısa başlık, açıklama ve konuya özgü konum/kategori bilgisi öner. Kod yazma; önce dosya planını, içerik listesini ve ödev ölçütlerine karşı kabul kontrol listesini sun. Gerçek olmayan bilgi veya ziyaret saati/ücreti uydurma.

**Projede karşılığı:** Arka Sokak adı, İstanbul'da yürüyerek yeni yer arayan hedef kitle; üç HTML sayfası ve avlu, merdiven, kıyı, kitapçı, koru başlıkları.

## 2. HTML ve CSS promptu

**Amaç:** Planı ortak menülü, semantik, erişilebilir ve mobil bir ön yüze çevirmek.

> Önceden onayladığım planla şu dosyaları oluştur: index.html, icerikler.html, hakkinda.html ve style.css. Her sayfada aynı üç hedefli navigation menu bulunsun ve geçerli sayfayı aria-current ile işaretle. Tüm sayfalar aynı style.css dosyasını kullansın. Görsel dil, İstanbul şehir defteri gibi editoryal ve özgün olsun; tipografi, asimetrik düzen ve fotoğraf alanları kullan. 390px genişlikte yatay taşma olmasın. Semantik HTML, açıklayıcı görsel alt metni, görünür klavye odağı, yeterli renk kontrastı ve hareket azaltma tercihini gözet. İçerik metinleri Türkçe ve özgün olsun. İçerik listesini HTML'de tut; backend veya framework ekleme. Önce dosya yapısını ve kısa kabul kontrol listesini ver, sonra kodu üret.

**Projede karşılığı:** Ortak menü; `style.css`; fotoğraflı editoryal ana sayfa, içerik ve hakkında düzenleri; responsive kırılımlar ve `:focus-visible`.

## 3. JavaScript ve code review promptu

**Amaç:** Başlık aramasını eklemek, ölçütlere karşı gözden geçirmek ve açıklanabilir hale getirmek.

> `icerikler.html` içindeki `.discovery-card` öğelerine yazdıkça çalışan vanilla JavaScript araması ekle. Arama input'unun görünür `<label>` öğesi olsun. Yalnızca karttaki `h2` başlığını filtrele; açıklama, kategori ve konum metnini arama. Türkçe büyük/küçük harf dönüşümü için `toLocaleLowerCase("tr-TR")`, sorgu başı ve sonu için `trim()` kullan. Görünür kart sayısını güncelle; eşleşme yokken boş sonuç mesajını göster; Temizle düğmesi input'u boşaltsın, filtreyi yenilesin ve odağı input'a geri versin. Boş veya yalnızca boşluk içeren sorguda bütün kartları göster. Mevcut HTML yapısını ve tasarımı koru. Sonra kodu ödev ölçütlerine göre gözden geçir; her event listener'ın ve `includes` koşulunun ne yaptığını sade dille açıkla. Gerçekten çalıştırmadığın testlere geçti deme.

**Projede karşılığı:** `script.js` içindeki `input` ve `click` event listener'ları, `title.includes(query)` koşulu ve erişilebilir durum mesajı.

## Öneri değerlendirmesi

- **Arama kapsamını dar tuttum:** Genel bir arama yaklaşımı kart açıklaması veya konum bilgisini de tarayabilirdi. Ödev yalnızca başlıkların filtrelenmesini istediği için kod `h2` seçiyor; diğer metinler eşleşme hesabına katılmıyor.
- **Türkçe ve boşluk işleme ekledim:** Düz `toLowerCase()` Türkçe `I/İ` harflerinde beklenmeyen eşleşme verebilir. `toLocaleLowerCase("tr-TR")` yerel harf dönüşümünü, `trim()` kenar boşluklarının yok sayılmasını sağlar. Ödevin kabul testleriyle uyumlu olduğu tarayıcıda doğrulandı.
- **Filtreyi yeniden kullanıyorum:** Temizle düğmesi aynı `filterCards()` fonksiyonunu çağırıyor. Böylece sayaç ve boş durum arama yazma davranışıyla aynı kuralla güncelleniyor; iki ayrı filtre mantığı oluşmuyor.
- **Fotoğraflar için harici hotlink yerine yerel dosya:** Ağ bağlantısı kesildiğinde de sayfanın çalışması ve indirilmiş ZIP'te görsel bulunması için fotoğraflar `assets/` içine kaydedildi. Fotoğrafçı atıfları ve kaynak adresleri `FOTO_KAYNAKLARI.md` içinde.

## Kod açıklaması

### Event listener nedir, burada ne yapıyor?

`searchInput.addEventListener("input", filterCards)` satırı, input değeri her değiştiğinde `filterCards` fonksiyonunu çalıştırır. Kullanıcı yazarken arama güncellenir; Enter'a basması gerekmez. `clearButton.addEventListener("click", ...)` düğmeye basılınca arama metnini boşaltır, aynı filtre fonksiyonunu yeniden çalıştırır ve klavye odağını arama alanına taşır.

### Filtreleme koşulu ne yapıyor?

`title.includes(query)`, normalleştirilmiş arama ifadesinin yalnızca kart başlığında geçip geçmediğini kontrol eder. Sonuç doğru değilse kart `hidden` yapılır. `trim()` sonrası sorgu boş olduğunda her metin boş ifadeyi içerdiğinden tüm kartlar görünür. Görünen kart sayısı sıfırsa boş sonuç mesajı açılır.

