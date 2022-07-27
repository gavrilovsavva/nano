<template>
  <div>
    <transition name="cc">
      <div
        v-if="appModal === true"
        @click="appOff"
        class="modal-container"
      ></div>
    </transition>

    <transition name="call-animation">
      <div v-if="appModal === true" class="call-c">
        <div class="modal">
          <h3 class="modal__title">
            Залишіть заявку на ремонт та отримайте знижку 5%
          </h3>
          <form action="#" class="modal__form">
            <div class="modal__input-container">
              <input
                type="text"
                class="modal__input"
                id="modal__input"
                placeholder="nano"
                required
              />
              <label for="modal__input" class="modal__label">Им'я</label>
            </div>

            <div class="modal__input-container">
              <input
                type="tel"
                name=""
                class="modal__input"
                placeholder="nano"
                v-mask="'+38 (0##)-###-##-##'"
                masked="true"
                value=""
                pattern="[\+]\d{2}\s[\(]\d{3}[\)][\-]\d{3}[\-]\d{2}[\-]\d{2}"
              />
              <label for="modal__input" class="modal__label"
                >Контактний номер</label
              >
            </div>

            <div class="modal__input-container">
              <input type="text" class="modal__input" placeholder="nano" />
              <label for="modal__input" class="modal__label"
                >Модель телефону</label
              >
            </div>

            <div class="modal__input-container">
              <select name="" id="" class="modal__input">
                <option value="">Проспект Шевченка 10/1</option>
                <option value="">Старосінна площа 1А</option>
                <option value="">Вільямса 9A</option>
                <option value="">Космонавтів 9/1</option>
              </select>
              <label for="modal__input" class="modal__label"
                >Вибрати відділення</label
              >
            </div>

            <div class="modal__input-container">
              <textarea
                name=""
                id="modal__input"
                class="modal__text-area modal__input"
                placeholder="nano"
              ></textarea>
              <label
                for="modal__input"
                class="modal__label modal__text-area-label"
                >Коментар</label
              >
            </div>

            <input type="submit" value="Надіслати" class="modal__submit" />
          </form>
        </div>
      </div>
    </transition>
  </div>
  <button @click="appModalBtn" class="btn-modal btn-app">
    Заявка на ремонт
  </button>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      appModal: false,
    };
  },
  methods: {
    appModalBtn() {
      this.appModal = true;
    },
    appOff() {
      this.appModal = false;
    },
  },
};
</script>

<style lang="scss"></style>
