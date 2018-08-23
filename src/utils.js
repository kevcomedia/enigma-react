export function createPipe(context, ...fns) {
  return function (arg) {
    return fns.reduce((acc, currFn) => currFn.call(context, acc), arg);
  };
}
