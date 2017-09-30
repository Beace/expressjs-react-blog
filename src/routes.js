import App from 'containers/App';
import HomePage from 'containers/HomePage';

const routes = {
  component: App,
  path: '/',
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: 'article/:id',
      getComponent(location, cb) {
        import('components/Post').then(module => cb(null, module.default));
      },
    },
    {
      path: 'news',
      getComponent(location, cb) {
        import('containers/NewsPage').then(module => cb(null, module.default));
      },
    },
    {
      path: 'about',
      getComponent(location, cb) {
        import('components/About').then(module => cb(null, module.default));
      },
    },
    {
      path: 'contact',
      getComponent(location, cb) {
        import('components/Contacts').then(module => cb(null, module.default));
      },
    },
    {
      path: 'book',
      getComponent(location, cb) {
        import('containers/BookPage').then(module => cb(null, module.default));
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        import('containers/NotMatch').then(module => cb(null, module.default));
      },
    },
  ],
};

export default routes;
