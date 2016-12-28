"use strict";

class Modal {

    constructor(name, shadow) {
        this.name = name;
        this.shadow = shadow
    }

    getModals() {
        return document.getElementsByClassName(this.name);
    }

    getBackdrops() {
        return document.getElementsByClassName(this.shadow);
    }

    getAll() {
        let all = [];
        all.push(this.getModals(), this.getBackdrops());

        let size = all.length;
        let temp = [];

        if (size > 0) {

            all.forEach(function sk(item) { // could be 1 DOM element or HTMLCollection

                if (item.length > 0) {
                    for (let j = 0; j < item.length; j++) {
                        temp.push(item[j]);
                    }
                }
                else {
                    temp.push(item);
                }
            });

        }

        return temp;
    }

    deleteAll() {
        let temp = this.getAll();

        temp.forEach(function d(el){
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });

        this.setScroll(); //

        return temp; // all elements
    }

    setScroll() {
        document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    }

}

// Init App
setTimeout(function () {

    let modal = new Modal('tp-modal', 'tp-backdrop');
    let counter = 0;

    let stopInterval = function () {
        window.clearInterval(intervalID);
    };

    let intervalID = window.setInterval(function () {

        console.log(counter);
        counter++;

        if (counter === 50) {
            stopInterval();
        }

        if (document.getElementsByClassName('tp-modal').length > 0) {
            modal.deleteAll();
        }
        // else {
        //     stopInterval();
        // }
    }, 100);

}, 3000);


