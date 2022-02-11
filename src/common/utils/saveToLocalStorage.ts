const saveToLocalStorage = (state: any) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};

export default saveToLocalStorage;
