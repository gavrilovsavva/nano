import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/HomePage",
    name: "HomePage",
    meta: { layout: "home" },
    component: () => import("@/layouts/HomePage.vue"),
  },
  // Contacts
  {
    path: "/ContactsPage",
    name: "ContactsPage",
    meta: { layout: "contacts" },
    component: () => import("@/layouts/contacts/ContactsPage.vue"),
  },
  {
    path: "/ShevchenkoLayout",
    name: "ShevchenkoLayout",
    meta: { layout: "shevchenko" },
    component: () => import("@/layouts/contacts/ShevchenkoLayout.vue"),
  },
  {
    path: "/StarosennayaLayout",
    name: "StarosennayaLayout",
    meta: { layout: "starosennaya" },
    component: () => import("@/layouts/contacts/StarosennayaLayout.vue"),
  },
  {
    path: "/KosmonavtovLayout",
    name: "KosmonavtovLayout",
    meta: { layout: "Kosmonavtov" },
    component: () => import("@/layouts/contacts/KosmonavtovLayout.vue"),
  },
  {
    path: "/ViliamsaLayout",
    name: "ViliamsaLayout",
    meta: { layout: "starosennaya" },
    component: () => import("@/layouts/contacts/ViliamsaLayout.vue"),
  },
  // About
  {
    path: "/AboutUs",
    name: "AboutUs",
    meta: { layout: "about" },
    component: () => import("@/layouts/AboutUs.vue"),
  },
  // Repairs
  {
    path: "/RepairsPage",
    name: "RepairsPage",
    meta: { layout: "about" },
    component: () => import("@/layouts/repairs/RepairsPage.vue"),
  },
  {
    path: "/PricePage",
    name: "PricePage",
    meta: { layout: "about" },
    component: () => import("@/layouts/repairs/PricePage.vue"),
  },
  {
    path: "/ModelsPage",
    name: "ModelsPage",
    meta: { layout: "models" },
    component: () => import("@/layouts/repairs/ModelsPage.vue"),
  },
  {
    path: "/MacbookPage",
    name: "MacbookPage",
    meta: { layout: "macbook" },
    component: () => import("@/layouts/repairs/MacbookPage.vue"),
  },
  {
    path: "/AndroidPage",
    name: "AndroidPage",
    meta: { layout: "android" },
    component: () => import("@/layouts/repairs/AndroidPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
