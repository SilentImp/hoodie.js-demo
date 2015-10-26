# Пример использования Hoodie.js

Для запуска:

    // Установим hoodie (http://docs.hood.ie/en/start/)
    npm install -g hoodie-cli
    // Установим зависимости (находясь в папке app)
    npm install
    // Запустим hoodie-сервер
    hoodie start
    // Откроем в браузере панель администрирования и создадим пользователя test
    // с паролем 123123
    open http://127.0.0.1:6002/
    // Откроем в браузере url, который слушает сервер hoodie
    open http://127.0.0.1:6001/


# Доклады

* [A quick introduction to Hoodie](https://www.youtube.com/watch?v=DxULq8y1SJ0)
* [Offline First (Web) Apps — Alex Feyerke — Cold-Front 2015](https://www.youtube.com/watch?v=WA0sNsmEcZ0)
* [Look ma, no backend! - Gregor Martynus - Front-Trends 2013](https://vimeo.com/67553019)
* [Огромный список событий, на которых говорили о Hoodie](http://hood.ie/events/)

# Сслыки

* [hood.ie](http://hood.ie/)
* [@hoodiehq](https://twitter.com/hoodiehq)
* [Slack](http://hood.ie/chat/index.html)

# Используют Hoodie в продакшене

* [minutes.io](https://minutes.io/)
* [prototypo.io](https://www.prototypo.io/)

# Разрешение конфликтов

> jan [2:23 PM]
> @silentimp: in ​_theory_​ it works just like CouchDB conflict handling
> in ​_practice_​: the old/current Hoodie version keeps the conflicts only on the server. the new Hoodie version will sync conflicts to the client as well

> silentimp [2:23 PM]
so currently i can’t handle conflicts from frontend, right?

> jan [2:25 PM]
correct
