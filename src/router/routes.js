const routes = [
  {
    path: "/smart/",
    component: () => import("layouts/LessonLayout.vue"),
    children: [
      {
        path: "lessons",
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
