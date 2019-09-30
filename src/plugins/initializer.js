export default async ({ store }, router) => {

	router.beforeResolve((to, from, next) => {
		console.log(to, from, next);
		console.log('1');
		if(to.matched.some(record => record.meta.requiresAuth)) {
			console.log('1');
			if(!store.getters.isAuth) {
				console.log('1');
				return next({ path: '/login'});
			} else { 
				console.log('1');
			return	next();
			}
		}
		next();
	});
  if (store._actions.init) {
		// console.log(store);
    await store.dispatch('init');
  }
}