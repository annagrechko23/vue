export default async ({ store }, router) => {
	router.beforeResolve((to, from, next) => {
		if(to.matched.some(record => record.meta.requiresAuth)) {
			if(!store.getters.isAuth) {
				return next({ path: '/login'});
			} else { 
			return	next();
			}
		}
		next();
	});
  if (store._actions.init) {
    await store.dispatch('init');
  }
}