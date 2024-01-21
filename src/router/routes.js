const routes = [
  {
    path: "/smart/",
    exact: true,
    component: () => import("layouts/LessonLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LessonWelcomePage.vue") },
      {
        path: "lessons/:lessonId",
        component: () => import("pages/LessonPage.vue"),
      },
    ],
  },
  {
    path: "/wise/",
    exact: true,
    component: () => import("layouts/AltLessonLayout.vue"),
    children: [{ path: "", component: () => import("pages/LessonPage.vue") }],
  },
  {
    path: "/",
    exact: true,
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
