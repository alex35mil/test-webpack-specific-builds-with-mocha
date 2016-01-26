export default (context, ...methods) => {
  const methodsCollection = (
    methods.length === 1 && Array.isArray(methods[0]) ? methods[0] : methods
  );

  methodsCollection.forEach(
    method => context[method] = context[method].bind(context)
  );
}
