# Render HTML page for SmartTV, AndroidTV, STB from JSON

![DEMO](https://raw.githubusercontent.com/extensionsapp/TVwww/master/image1.png)

## Style

```html
<link rel="stylesheet" href="https://unpkg.com/tvwww/TVwww.min.css">
```

## Script

```html
<script src="https://unpkg.com/tvwww/TVwww.min.js"></script>
```

## Data categories

![DEMO](https://raw.githubusercontent.com/extensionsapp/TVwww/master/image2.png)

```json
{
  "categories": [
    {
      "title": "Home",
      "ok": "/"
    },
    {
      "title": "Movies",
      "ok": {
        "contents": []
      }
    },
    {
      "title": "TV-shows",
      "ok": {
        "contents": []
      }
    }
  ]
}
```

## Data contents

![DEMO](https://raw.githubusercontent.com/extensionsapp/TVwww/master/image3.png)

```json
{
  "categories": [
    {
      "title": "TV-shows",
      "ok": {
        "contents": [
          {
            "active": true,
            "ok": "https://www.themoviedb.org/tv/84958-loki",
            "image": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
            "title": "Loki",
            "top": "2021",
            "bottom": "Drama, Sci-Fi & Fantasy"
          },
          {
            "active": false,
            "ok": "https://www.themoviedb.org/tv/60625-rick-and-morty",
            "image": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
            "title": "Rick and Morty",
            "top": "2013",
            "bottom": "Animation, Comedy"
          }
        ]
      }
    }
  ]
}  
```

<details>
  <summary>Example object data</summary>
  
  ```json
{
   "categories":[
      {
         "title":"Home",
         "ok":"/"
      },
      {
         "title":"Movies",
         "ok":{
            "contents":[
               {
                  "active":true,
                  "ok":"https://www.themoviedb.org/movie/337404-cruella",
                  "image":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rTh4K5uw9HypmpGslcKd4QfHl93.jpg",
                  "title":"Cruella",
                  "top":"2021",
                  "bottom":"Comedy, Crime"
               },
               {
                  "active":false,
                  "ok":"https://www.themoviedb.org/movie/508943-luca",
                  "image":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xSzBeReCkJ4k3exLlaeTvOAXwlL.jpg",
                  "title":"Luca",
                  "top":"2021",
                  "bottom":"Animation, Comedy, Family, Fantasy"
               }
            ]
         }
      },
      {
         "title":"TV-shows",
         "ok":{
            "contents":[
               {
                  "active":true,
                  "ok":"https://www.themoviedb.org/tv/84958-loki",
                  "image":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
                  "title":"Loki",
                  "top":"2021",
                  "bottom":"Drama, Sci-Fi & Fantasy"
               },
               {
                  "active":false,
                  "ok":"https://www.themoviedb.org/tv/60625-rick-and-morty",
                  "image":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
                  "title":"Rick and Morty",
                  "top":"2013",
                  "bottom":"Animation, Comedy"
               }
            ]
         }
      }
   ],
   "settings":{
      "backgrounds":[
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
   "active":{
      "display":"categories.1.ok"
   }
}
  ```

</details>

## Usage

```html
<script>
    const data = {};
    window.onload = function() {
        TVwww(data);
    };
</script>
```