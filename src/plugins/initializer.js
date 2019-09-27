export default async ({ store }) => {
  console.log(store);
  if (store._actions.init) {
    await store.dispatch('init');
  }
}