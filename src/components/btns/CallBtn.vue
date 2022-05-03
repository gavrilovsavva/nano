<template>
  <transition name="cc">
    <div
      v-if="callModal === true"
      @click="callOff"
      class="modal-container"
    ></div>
  </transition>

  <transition name="call-animation">
    <div v-if="callModal === true" class="call-c">
      <div class="modal">
        <h3 class="modal__title">Вызов мастера</h3>
        <span class="modal__subtitle"> 9:00 - 21:00</span>
        <form action="#" class="modal__form">
          <div class="modal__input-container">
            <input
              type="text"
              class="modal__input"
              id="modal__input"
              placeholder="nano"
              required
            />
            <label for="modal__input" class="modal__label">Имя</label>
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
              >Контактный номер</label
            >
          </div>

          <div class="modal__input-container">
            <input type="text" class="modal__input" placeholder="nano" />
            <label for="modal__input" class="modal__label"
              >Модель телефона</label
            >
          </div>

          <div class="modal__input-container">
            <input type="text" class="modal__input" placeholder="nano" />
            <label for="modal__input" class="modal__label">Адрес</label>
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
              >Комментарий</label
            >
          </div>

          <input type="submit" value="Отправить" class="modal__submit" />
        </form>
      </div>
    </div>
  </transition>

  <button @click="callModalBtn" class="btn-modal">
    <img src="@/assets/header/manage.svg" alt="manage" class="btn-img" />
    Вызвать мастера
  </button>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      callModal: false,
    };
  },
  methods: {
    callModalBtn() {
      this.callModal = true;
    },
    callOff() {
      this.callModal = false;
    },
  },
};
</script>

<style></style>
