# Render HTML page for SmartTV, AndroidTV, STB from JSON

![DEMO](https://raw.githubusercontent.com/extensionsapp/TVwww/master/image.jpg)

```html
<link rel="stylesheet" href="https://unpkg.com/tvwww/TVwww.min.css">
<script src="https://unpkg.com/tvwww/TVwww.min.js"></script>

    <script>
      window.onload = function() {
        TVwww({
                "categories": [
                  {
                    "title": "Главная",
                    "ok": "/tv-version"
                  },
                  {
                    "title": "Новые серии сериалов",
                    "ok": {
                      "contents": [
                        {
                          "active": true,
                          "ok": "/tv-version/post-id1200027-likhach.html/s1e16_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/1200027.jpg",
                          "title": "Лихач",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 16 Серия детектив и приключения"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1206895-agentstvo-o-k-o.html/s1e7_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/1206895.jpg",
                          "title": "Агентство О.К.О.",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 7 Серия детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id277565-vse-nenavidyat-krisa.html/s4e22_t-Kurazh-Bambej",
                          "image": "/files/poster/medium/277565.jpg",
                          "title": "Все ненавидят Криса",
                          "top": "Кураж-Бамбей",
                          "bottom": "4 Сезон 22 Серия комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1363088-davai-naidem-drug-druga.html/s1e6_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/1363088.jpg",
                          "title": "Давай найдем друг друга",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 6 Серия мелодрама"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id654963-ubiistvo-v-prigorode.html/s1e6_WestFilm",
                          "image": "/files/poster/medium/654963.jpg",
                          "title": "Убийство в пригороде",
                          "top": "WestFilm",
                          "bottom": "1 Сезон 6 Серия криминал, детектив и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id468054-otdel-ubiistv.html/s5e6_Fox-Crime",
                          "image": "/files/poster/medium/468054.jpg",
                          "title": "Отдел убийств",
                          "top": "Fox Crime",
                          "bottom": "5 Сезон 6 Серия драма, триллер, детектив и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1322881-samaya-opasnaya-igra.html/s1e15_ColdFilm",
                          "image": "/files/poster/medium/1322881.jpg",
                          "title": "Самая опасная игра",
                          "top": "ColdFilm Octopus KerobTV BaibaKo",
                          "bottom": "1 Сезон 15 Серия боевик и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1112403-prezumpciya-nevinovnosti.html/s1e5_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/1112403.jpg",
                          "title": "Презумпция невиновности",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 5 Серия мелодрама и детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1395366-igra-na-vyzhivanie.html/s1e3_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/1395366.jpg",
                          "title": "Игра на выживание",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 3 Серия приключения и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id673871-zashishaya-dzheikoba.html/s1e8_ColdFilm",
                          "image": "/files/poster/medium/673871.jpg",
                          "title": "Защищая Джейкоба",
                          "top": "ColdFilm Octopus HDrezka Studio WestFilm NewStudio",
                          "bottom": "1 Сезон 8 Серия триллер, детектив, драма и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id574346-lestnica-v-nebesa.html/s1e20_t-odnogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/574346.jpg",
                          "title": "Лестница в небеса",
                          "top": "одноголосый закадровый",
                          "bottom": "1 Сезон 20 Серия мелодрама и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id778783-etot-durak.html/s1e16_STEPonee",
                          "image": "/files/poster/medium/778783.jpg",
                          "title": "Этот дурак!",
                          "top": "STEPonee",
                          "bottom": "1 Сезон 16 Серия мелодрама, драма и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id466360-vse-tip-top-ili-zhizn-na-palube.html/s3e22_t-STS",
                          "image": "/files/poster/medium/466360.jpg",
                          "title": "Все тип-топ, или Жизнь на палубе",
                          "top": "СТС",
                          "bottom": "3 Сезон 22 Серия приключения, семейный и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id989069-chernyi-baron.html/s3e8_WestFilm",
                          "image": "/files/poster/medium/989069.jpg",
                          "title": "Черный Барон",
                          "top": "WestFilm",
                          "bottom": "3 Сезон 8 Серия драма и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id738134-sumasshedshie.html/s1e22_NewStudio",
                          "image": "/files/poster/medium/738134.jpg",
                          "title": "Сумасшедшие",
                          "top": "NewStudio",
                          "bottom": "1 Сезон 22 Серия комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id612824-virus-atakuet.html/s1e52_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/612824.jpg",
                          "title": "Вирус атакует!",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 52 Серия мультфильм"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id277536-bolshaya-lyubov.html/s5e10_Amedia",
                          "image": "/files/poster/medium/277536.jpg",
                          "title": "Большая любовь",
                          "top": "Amedia",
                          "bottom": "5 Сезон 10 Серия драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id416767-bolshe-chem-lyubov.html/s1e105_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/416767.jpg",
                          "title": "Больше, чем любовь",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 105 Серия мелодрама и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1337975-krepkii-khart.html/s1e10_ColdFilm",
                          "image": "/files/poster/medium/1337975.jpg",
                          "title": "Крепкий Харт",
                          "top": "ColdFilm Octopus HDrezka Studio LostFilm",
                          "bottom": "1 Сезон 10 Серия триллер, комедия и боевик"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1007386-gotard.html/s1e4_WestFilm",
                          "image": "/files/poster/medium/1007386.jpg",
                          "title": "Готард",
                          "top": "WestFilm",
                          "bottom": "1 Сезон 4 Серия драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id991672-boicovskii-sryv.html/s1e2_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/991672.jpg",
                          "title": "Бойцовский срыв",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 2 Серия спорт и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id806720-patrik-dempsi-v-gonke-le-mana.html/s1e4_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/806720.jpg",
                          "title": "Патрик Демпси в гонке Ле-Мана",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 4 Серия документальный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id991678-prestupniki-britanii-razboiniki-piraty-i-bandity.html/s1e3_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/991678.jpg",
                          "title": "Преступники Британии: разбойники, пираты и бандиты",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 3 Серия документальный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id922141-maior-lazer.html/s1e11_Black-Street-Records",
                          "image": "/files/poster/medium/922141.jpg",
                          "title": "Майор Лазер",
                          "top": "Black Street Records",
                          "bottom": "1 Сезон 11 Серия мультфильм, музыка, комедия, боевик и фантастика"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id596279-belyi-medved-shpion-vo-ldakh.html/s1e2_t-studiya-Omikron",
                          "image": "/files/poster/medium/596279.jpg",
                          "title": "Белый медведь: Шпион во льдах",
                          "top": "студия Омикрон",
                          "bottom": "1 Сезон 2 Серия документальный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id422850-baiki-khranitelya-sklepa.html/s2e13_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/422850.jpg",
                          "title": "Байки хранителя склепа",
                          "top": "Полное дублирование",
                          "bottom": "2 Сезон 13 Серия фантастика, мультфильм, ужасы, фэнтези и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id251818-neveroyatnye-priklyucheniya-dzhonni-kvesta.html/s2e26_t-Pervyj-kanal",
                          "image": "/files/poster/medium/251818.jpg",
                          "title": "Невероятные приключения Джонни Квеста",
                          "top": "Первый канал",
                          "bottom": "2 Сезон 26 Серия боевик, драма, мультфильм, триллер, семейный, приключения и фантастика"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id392091-enoty.html/s5e13_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/392091.jpg",
                          "title": "Еноты",
                          "top": "Полное дублирование",
                          "bottom": "5 Сезон 13 Серия драма, мультфильм, семейный и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id425973-lager-lazlo.html/s2e13_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/425973.jpg",
                          "title": "Лагерь Лазло",
                          "top": "Полное дублирование",
                          "bottom": "2 Сезон 13 Серия мультфильм, семейный и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id491694-specialnyi-agent-oso.html/s1e24_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/491694.jpg",
                          "title": "Специальный агент Осо",
                          "top": "Полное дублирование",
                          "bottom": "1 Сезон 24 Серия боевик, семейный, мультфильм, детектив и приключения"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id258542-gora-fregglov.html/s5e13_2x2",
                          "image": "/files/poster/medium/258542.jpg",
                          "title": "Гора Фрэгглов",
                          "top": "2x2",
                          "bottom": "5 Сезон 13 Серия комедия, семейный, мюзикл, фэнтези, приключения и мультфильм"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id648747-svezhee-myaso.html/s4e6_CBS-Drama",
                          "image": "/files/poster/medium/648747.jpg",
                          "title": "Свежее мясо",
                          "top": "CBS Drama",
                          "bottom": "4 Сезон 6 Серия комедия и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id436349-delo-bylo-v-gavrilovke-2.html/s1e12_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/436349.jpg",
                          "title": "Дело было в Гавриловке 2",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 12 Серия комедия и детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id436301-delo-bylo-v-gavrilovke.html/s1e12_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/436301.jpg",
                          "title": "Дело было в Гавриловке",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 12 Серия комедия и детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id681405-vozlyublennyi-princessy.html/s1e24_GREEN-TEA",
                          "image": "/files/poster/medium/681405.jpg",
                          "title": "Возлюбленный принцессы",
                          "top": "GREEN TEA",
                          "bottom": "1 Сезон 24 Серия драма, история и мелодрама"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id919285-konmen.html/s2e12_Jaskier",
                          "image": "/files/poster/medium/919285.jpg",
                          "title": "Конмэн",
                          "top": "Jaskier",
                          "bottom": "2 Сезон 12 Серия комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id765121-dzheronimo-stilton.html/s2e26_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/765121.jpg",
                          "title": "Джеронимо Стилтон",
                          "top": "Полное дублирование",
                          "bottom": "2 Сезон 26 Серия комедия, детектив, семейный, мультфильм и приключения"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id470959-mir-stranstvii.html/s1e26_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/470959.jpg",
                          "title": "Мир странствий",
                          "top": "Полное дублирование",
                          "bottom": "1 Сезон 26 Серия мультфильм, комедия и боевик"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id460133-bocman-i-popugai.html/s1e5_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/460133.jpg",
                          "title": "Боцман и попугай",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 5 Серия мультфильм"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id543365-koroleva-yuga.html/s1e63_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/543365.jpg",
                          "title": "Королева юга",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 63 Серия боевик, криминал, драма и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id403387-uolter-melon.html/s2e26_t-TV3",
                          "image": "/files/poster/medium/403387.jpg",
                          "title": "Уолтер Мелон",
                          "top": "ТВ3",
                          "bottom": "2 Сезон 26 Серия комедия и мультфильм"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id295052-argai.html/s1e26_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/295052.jpg",
                          "title": "Аргай",
                          "top": "Полное дублирование",
                          "bottom": "1 Сезон 26 Серия мультфильм, приключения и фантастика"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id300063-sabrina-malenkaya-vedma.html/s1e34_t-mnogogolosyj-zakadrovyj",
                          "image": "/files/poster/medium/300063.jpg",
                          "title": "Сабрина – маленькая ведьма",
                          "top": "многоголосый закадровый",
                          "bottom": "1 Сезон 34 Серия комедия, мультфильм, фэнтези и семейный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id674020-dinamo-neveroyatnyi-illyuzionist.html/s4e4_Discovery",
                          "image": "/files/poster/medium/674020.jpg",
                          "title": "Динамо: Невероятный иллюзионист",
                          "top": "Discovery",
                          "bottom": "4 Сезон 4 Серия документальный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id629602-volshebnye-poppiksi.html/s2e26_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/629602.jpg",
                          "title": "Волшебные Поппикси",
                          "top": "Полное дублирование",
                          "bottom": "2 Сезон 26 Серия мультфильм"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1274247-delo-ob-ubiistve-v-bashne-gorizont.html/s1e12_BaibaKo",
                          "image": "/files/poster/medium/1274247.jpg",
                          "title": "Дело об убийстве в башне Горизонт",
                          "top": "BaibaKo",
                          "bottom": "1 Сезон 12 Серия криминал и детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id687688-medvedi-sosedi.html/s2e43_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/687688.jpg",
                          "title": "Медведи-соседи",
                          "top": "Полное дублирование",
                          "bottom": "2 Сезон 43 Серия мультфильм и короткометражка"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id502901-don-khuan-i-ego-krasivaya-dama.html/s1e146_Intra-Communications",
                          "image": "/files/poster/medium/502901.jpg",
                          "title": "Дон Хуан и его красивая дама",
                          "top": "Intra Communications",
                          "bottom": "1 Сезон 146 Серия мелодрама и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id404127-bebi-luni-tyunz.html/s2e13_t-Pifagor",
                          "image": "/files/poster/medium/404127.jpg",
                          "title": "Бэби Луни Тюнз",
                          "top": "Пифагор",
                          "bottom": "2 Сезон 13 Серия мультфильм и семейный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id925948-katya-i-mim-mim.html/s1e51_t-Polnoe-dublirovanie",
                          "image": "/files/poster/medium/925948.jpg",
                          "title": "Катя и Мим-Мим",
                          "top": "Полное дублирование",
                          "bottom": "1 Сезон 51 Серия мультфильм и семейный"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id230679-tarzan.html/s1e8_HDrezka-Studio",
                          "image": "/files/poster/medium/230679.jpg",
                          "title": "Тарзан",
                          "top": "HDrezka Studio",
                          "bottom": "1 Сезон 8 Серия драма, приключения, боевик, мелодрама и детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1338255-cvetok-zla.html/s1e10_Octopus",
                          "image": "/files/poster/medium/1338255.jpg",
                          "title": "Цветок зла",
                          "top": "Octopus ColdFilm",
                          "bottom": "1 Сезон 10 Серия триллер, детектив, мелодрама и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1038464-neupravlyaemaya.html/s2e12_ColdFilm",
                          "image": "/files/poster/medium/1038464.jpg",
                          "title": "Неуправляемая",
                          "top": "ColdFilm HDrezka Studio BaibaKo Gears Media",
                          "bottom": "2 Сезон 12 Серия криминал, детектив, драма и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id471466-kruiz.html/s1e8_t-Original6naya-dorozhka",
                          "image": "/files/poster/medium/471466.jpg",
                          "title": "Круиз",
                          "top": "Оригинальная дорожка",
                          "bottom": "1 Сезон 8 Серия детектив и мелодрама"
                        }
                      ]
                    }
                  },
                  {
                    "title": "Последние обновления фильмов",
                    "ok": {
                      "contents": [
                        {
                          "active": true,
                          "ok": "/tv-version/post-id395787-sem-zhiznei.html",
                          "image": "/files/poster/medium/395787.jpg",
                          "title": "Семь жизней",
                          "top": 2008,
                          "bottom": "драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1266917-sila-stikhii.html",
                          "image": "/files/poster/medium/1266917.jpg",
                          "title": "Сила стихии",
                          "top": 2020,
                          "bottom": "боевик и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id437410-temnyi-rycar-vozrozhdenie-legendy.html",
                          "image": "/files/poster/medium/437410.jpg",
                          "title": "Темный рыцарь: Возрождение легенды",
                          "top": 2012,
                          "bottom": "криминал, боевик, триллер, фантастика и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1006466-podval.html",
                          "image": "/files/poster/medium/1006466.jpg",
                          "title": "Подвал",
                          "top": 2018,
                          "bottom": "ужасы"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1163792-krushiteli-sistemy.html",
                          "image": "/files/poster/medium/1163792.jpg",
                          "title": "Крушители системы",
                          "top": 2019,
                          "bottom": "драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1000432-golosa.html",
                          "image": "/files/poster/medium/1000432.jpg",
                          "title": "Голоса",
                          "top": 2020,
                          "bottom": "триллер и ужасы"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1282031-vyzhit.html",
                          "image": "/files/poster/medium/1282031.jpg",
                          "title": "#выжить",
                          "top": 2020,
                          "bottom": "ужасы и боевик"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1309718-nyanya-koroleva-proklyatykh.html",
                          "image": "/files/poster/medium/1309718.jpg",
                          "title": "Няня. Королева проклятых",
                          "top": 2020,
                          "bottom": "ужасы и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1189368-agent-eva.html",
                          "image": "/files/poster/medium/1189368.jpg",
                          "title": "Агент Ева",
                          "top": 2020,
                          "bottom": "драма, криминал, боевик и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id221121-pugovichnaya-voina.html",
                          "image": "/files/poster/medium/221121.jpg",
                          "title": "Пуговичная война",
                          "top": 1962,
                          "bottom": "комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1246367-zlodei.html",
                          "image": "/files/poster/medium/1246367.jpg",
                          "title": "Злодей",
                          "top": 2020,
                          "bottom": "драма, триллер и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id437678-sudya-dredd-3d.html",
                          "image": "/files/poster/medium/437678.jpg",
                          "title": "Судья Дредд 3D",
                          "top": 2012,
                          "bottom": "криминал, фантастика и боевик"
                        }
                      ]
                    }
                  },
                  {
                    "title": "Последние обновления сериалов",
                    "ok": {
                      "contents": [
                        {
                          "active": true,
                          "ok": "/tv-version/post-id733493-sotnya.html",
                          "image": "/files/poster/medium/733493.jpg",
                          "title": "Сотня",
                          "top": 2014,
                          "bottom": "фантастика, детектив и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1007679-komnata-104.html",
                          "image": "/files/poster/medium/1007679.jpg",
                          "title": "Комната 104",
                          "top": 2017,
                          "bottom": "фэнтези, ужасы, драма, детектив, фантастика, триллер и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id460586-pacany.html",
                          "image": "/files/poster/medium/460586.jpg",
                          "title": "Пацаны",
                          "top": 2019,
                          "bottom": "боевик, криминал, фантастика и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1231016-vospitannye-volkami.html",
                          "image": "/files/poster/medium/1231016.jpg",
                          "title": "Воспитанные волками",
                          "top": 2020,
                          "bottom": "фэнтези, драма, фантастика и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1214517-prosnuvshiisya.html",
                          "image": "/files/poster/medium/1214517.jpg",
                          "title": "Проснувшийся",
                          "top": 2020,
                          "bottom": "комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1309707-ted-lasso.html",
                          "image": "/files/poster/medium/1309707.jpg",
                          "title": "Тед Лассо",
                          "top": 2020,
                          "bottom": "комедия и спорт"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1372193-krov-i-voda.html",
                          "image": "/files/poster/medium/1372193.jpg",
                          "title": "Кровь и вода",
                          "top": 2020,
                          "bottom": "детектив и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1216724-zvonar.html",
                          "image": "/files/poster/medium/1216724.jpg",
                          "title": "Звонарь",
                          "top": 2019,
                          "bottom": "детектив"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1007909-straik.html",
                          "image": "/files/poster/medium/1007909.jpg",
                          "title": "Страйк",
                          "top": 2017,
                          "bottom": "драма, детектив, триллер и криминал"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id673871-zashishaya-dzheikoba.html",
                          "image": "/files/poster/medium/673871.jpg",
                          "title": "Защищая Джейкоба",
                          "top": 2020,
                          "bottom": "криминал, триллер, детектив и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1045251-strana-lavkrafta.html",
                          "image": "/files/poster/medium/1045251.jpg",
                          "title": "Страна Лавкрафта",
                          "top": 2020,
                          "bottom": "драма, фэнтези, фантастика, ужасы, детектив и триллер"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id927789-pes.html",
                          "image": "/files/poster/medium/927789.jpg",
                          "title": "Пес",
                          "top": 2015,
                          "bottom": "детектив"
                        }
                      ]
                    }
                  },
                  {
                    "title": "Фильмы 2020 года",
                    "ok": {
                      "contents": [
                        {
                          "active": true,
                          "ok": "/tv-version/post-id1263705-eshe-po-odnoi.html",
                          "image": "/files/poster/medium/1263705.jpg",
                          "title": "Еще по одной",
                          "top": 2020,
                          "bottom": "драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id679028-galereya-razbitykh-serdec.html",
                          "image": "/files/poster/medium/679028.jpg",
                          "title": "Галерея разбитых сердец",
                          "top": 2020,
                          "bottom": "комедия и мелодрама"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1220208-ammonit.html",
                          "image": "/files/poster/medium/1220208.jpg",
                          "title": "Аммонит",
                          "top": 2020,
                          "bottom": "мелодрама и драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1238506-zemlya-kochevnikov.html",
                          "image": "/files/poster/medium/1238506.jpg",
                          "title": "Земля кочевников",
                          "top": 2020,
                          "bottom": "драма"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1284475-krasavica-voin-seilor-mun-vechnost.html",
                          "image": "/files/poster/medium/1284475.jpg",
                          "title": "Красавица-воин Сейлор Мун: Вечность",
                          "top": 2020,
                          "bottom": "аниме, мелодрама, мультфильм, комедия и фэнтези"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1162784-koroleva.html",
                          "image": "/files/poster/medium/1162784.jpg",
                          "title": "Королева",
                          "top": 2020,
                          "bottom": "комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1309718-nyanya-koroleva-proklyatykh.html",
                          "image": "/files/poster/medium/1309718.jpg",
                          "title": "Няня. Королева проклятых",
                          "top": 2020,
                          "bottom": "ужасы и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1398916-bts-razbei-tishinu-film.html",
                          "image": "/files/poster/medium/1398916.jpg",
                          "title": "BTS: Разбей тишину: Фильм",
                          "top": 2020,
                          "bottom": "музыка, документальный и концерт"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1214517-prosnuvshiisya.html",
                          "image": "/files/poster/medium/1214517.jpg",
                          "title": "Проснувшийся",
                          "top": 2020,
                          "bottom": "комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1323571-istorii-molodykh.html",
                          "image": "/files/poster/medium/1323571.jpg",
                          "title": "Истории молодых",
                          "top": 2020,
                          "bottom": "драма и мелодрама"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1383059-zombi-detektiv.html",
                          "image": "/files/poster/medium/1383059.jpg",
                          "title": "Зомби-детектив",
                          "top": 2020,
                          "bottom": "фэнтези, детектив и комедия"
                        },
                        {
                          "active": false,
                          "ok": "/tv-version/post-id1333758-vlast-v-nochnom-gorode-kniga-vtoraya-prizrak.html",
                          "image": "/files/poster/medium/1333758.jpg",
                          "title": "Власть в ночном городе. Книга вторая: Призрак",
                          "top": 2020,
                          "bottom": "криминал и драма"
                        }
                      ]
                    }
                  },
                  {
                    "title": "Годы",
                    "ok": "/tv-version/year"
                  },
                  {
                    "title": "Жанры",
                    "ok": "/tv-version/genre"
                  },
                  {
                    "title": "Страны",
                    "ok": "/tv-version/country"
                  },
                  {
                    "title": "Полная версия",
                    "ok": "/?desktop"
                  }
                ],
                "contents": [],
                "settings": {
                  "backgrounds": [
                    "https://unpkg.com/tvwww/backgrounds/1.jpg",
                    "https://unpkg.com/tvwww/backgrounds/2.jpg",
                    "https://unpkg.com/tvwww/backgrounds/3.jpg",
                    "https://unpkg.com/tvwww/backgrounds/4.jpg",
                    "https://unpkg.com/tvwww/backgrounds/5.jpg",
                    "https://unpkg.com/tvwww/backgrounds/6.jpg",
                    "https://unpkg.com/tvwww/backgrounds/7.jpg",
                    "https://unpkg.com/tvwww/backgrounds/8.jpg",
                    "https://unpkg.com/tvwww/backgrounds/9.jpg",
                    "https://unpkg.com/tvwww/backgrounds/10.jpg"
                  ]
                },
                "active": {
                  "display": "categories.1.ok"
                }
              });
      };
    </script>
```