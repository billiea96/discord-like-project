const routes = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Hero />
      </>
    ),
  },
  {
    path: "/channels",
    element: <Home />,
    children: [
      {
        path: ":id",
        element: <Home />,
      },
    ],
  },
];

export default routes;
