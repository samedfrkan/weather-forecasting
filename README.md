# weather-forecast

Bu proje, derin öğrenme tekniklerini kullanarak hava durumu verilerini analiz etmeyi ve gelecekteki sıcaklık gibi önemli hava durumu özelliklerini tahmin etmeyi amaçlamaktadır. Proje, özellikle `LAST_DATA.csv` dosyasında bulunan gerçek dünya hava durumu verilerini işlemeye ve bu veriler üzerinde bir zaman serisi tahmin modeli oluşturmaya odaklanmaktadır.

## Proje Amacı

Projenin temel amacı, geçmiş hava durumu verilerinden öğrenerek belirli bir bölge için kuru termometre sıcaklığı ('SICKURU') gibi temel hava durumu parametrelerini tahmin etmektir. Uzun vadede, bu modelin 7 gün (168 saat) gibi belirli bir zaman dilimi için detaylı tahminler sağlayabilmesi hedeflenmektedir.

## Veri Seti

Bu projede kullanılan ana veri seti MGM'den alınmış gerçek verilere dayanmaktadır. Bu dosya aşağıdaki gibi çeşitli hava durumu parametrelerini içermektedir:
* `DATETIME`: Veri kaydının tarihi ve saati.
* `RUZGARYON`: Rüzgar yönü.
* `RUZGARHIZ`: Rüzgar hızı.
* `SICKURU`: Kuru termometre sıcaklığı (hedef değişken).
* `NISPINEM`: Bağıl nem.
* `BASINCAKTUEL`: Güncel basınç.
* `HADISE_...`: Çeşitli hava olaylarını belirten kategorik sütunlar.

Veri seti, modelin eğitimi için kapsamlı bir temel sunmaktadır.
