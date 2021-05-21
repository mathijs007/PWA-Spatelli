# PWA

Let's you order pasta and drinks, has a favouritism system and Nr for localforage

Website: [matheus007.be](https://matheus007.be)
## Design

Adobe xd file ('PastaApp.xd') is in de repository.

### Prerequisites

```
git, https://git-scm.com/downloads
```

## Content

### 1. Physical content
* All pages
    *  Ready, (html, css and js)!

* Home page
    * Buttons for ordering, getting your favourites and getting your order number
    * Slideshow monthly pasta's
    * Service worker with push notifications

* Order page
    * Gets products from database though the laraval api
    * Add/remove products into/from order list
        * This is done with localforage
    * Liking a product
        * This is done with localstorage
    * Posting the order to laravel with the laravel api
* Favourites page
    * Shows a list of liked items
        * This is done with  localstorage
        * Clicking a liked item will result in the deleting the item out of the list

* Your order page
    * Shows your order number after you have ordered
        * This is done with localstorage

### 2. Lessons content

* Mobile and can be added to screen (desktop as well)
* Manifest and icons
* Browser storage techniques (localstorage)
* Fetch
* Service workers
* Push notifications
* Positive audit test

## Built With

* HTML - HyperText Markup Language
* [CSS](https://nl.wikipedia.org/wiki/Cascading_Style_Sheets) - Style Sheet
* [Javascript](https://www.javascript.com/) - scripting language 
* [OneSignal](https://app.onesignal.com/) - an on-line service for push notifications

## Authors

* **Mathijs Vanwymeersch** - [*Initial work*](https://op-gitlab.howest.be/TI/S4-WebMobileSmartTechnology/2018-2019/04-pwa/mathijs-vanwymeersch)
