const routes = [
  {
    path: "/smart/",
    component: () => import("layouts/LessonLayout.vue"),
    children: [
      {
        path: "lessons",
        name: "lesson-welcome",
        component: () => import("pages/LessonWelcomePage.vue"),
      },
      {
        path: "lessons/:lessonId",
        component: () => import("pages/LessonPage.vue"),
      },
    ],
  },
  {
    path: "/build/",
    component: () => import("layouts/LessonBuilderLayout.vue"),
    children: [
      {
        path: "lessons",
        component: () => import("pages/builder/LessonBuilderPage.vue"),
      },
      {
        path: "lessons/:lessonId",
        component: () => import("pages/builder/LessonBuilderPage.vue"),
      },
    ],
  },
  {
    path: "/",
    exact: true,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("pages/NuclearNewsPage.vue"),
      },
      {
        path: "/what-say-you",
        name: "what-say-you",
        component: () => import("pages/WhatSayYouPage.vue"),
      },
      {
        path: "/sims",
        name: "sims",
        component: () => import("pages/SimulatorsPage.vue"),
      },
      {
        path: "/games",
        name: "games",
        component: () => import("pages/GamesPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
