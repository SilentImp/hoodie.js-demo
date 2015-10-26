"use strict";
(function() {

    /**
     * Класс демонстрирующий синхронизацию текста введенного offline
     * @class
     */
    class ModelSync {

        /**
         * Инициализируем Hoodie.js и обработчики событий
         * @constructor
         */
        constructor () {
            // Инициируем Hoodie
            this.hoodie = new Hoodie();

            // Что бы упростить пример предполагаем, что у нас уже есть пользователь test с паролем 123123
            this.user = this.hoodie.account.signIn('test', '123123').done(this.init.bind(this)).fail(this.cantLogin.bind(this));

            // Создаем стор note
            this.notes = this.hoodie.store('note');

            // Поле ввода, в котором будет отображаться текст
            this.textarea = document.querySelector('textarea');

            // Храним текущее содержимое поля
            this.current_text = "";

            // Получаем всё содержимое стора note типа note с id note
            this.notes.findAll('note:note').done(this.noteFromStore.bind(this));

            // При обновлении содержимого стора нужно обновить и textarea
            this.hoodie.store.on('note:note:update', this.updateNote.bind(this));
        }

        /**
         * После получения содержимого стора note типа note с id note
         * проверяем есть ли оно и, если есть, отображаем в поле ввода
         */
        noteFromStore (notes) {
            if(notes.length > 0) {
                this.textarea.value = notes[0].text;
            }
        }

        /**
         * Если пользователь не аутентифицирован, то вся работа происходит
         * исключительно локально. Такая ситуация в контексте этого примера
         * нам не подходит
         */
        cantLogin () {
            alert('Ошибка аутентификации');
        }

        /**
         * Если пользователь успешно аутентифицирован, то мы открываем поле
         * ввода для редактирования и после каждого нажатия клавишы сохраняем
         * содержимое поля
         */
        init () {
            this.textarea.removeAttribute('disabled');
            this.textarea.addEventListener('keyup', this.saveText.bind(this))
        }

        /**
         * Если содержимое поля изменилось — сохраняем его в стор
         */
        saveText () {
            if (this.current_text === this.textarea.value) {
                return;
            }
            this.current_text = this.textarea.value;
            this.hoodie.store.updateOrAdd('note', 'note', {
                text: this.textarea.value
            });
        }

        /**
         * Если содержимое поля изменилось на другой машине, то обновляем
         * содержимое поля ввода
         */
        updateNote (updatedObject, details) {
            if (typeof details.remote !== "undefined" && details.remote === true && this.textarea.value != updatedObject.text) {
                this.current_text = updatedObject.text;
                this.textarea.value = updatedObject.text;
            }
        }

    }

    let ready = new Promise((resolve, reject) => {
        if (document.readyState != "loading") return resolve();
        document.addEventListener("DOMContentLoaded", () => resolve());
    });

    ready.then(()=>{
        new ModelSync;
    });

})();
