/* eslint-disable @typescript-eslint/no-explicit-any */
export class DispatchHelper {
    static dispatch: any
}
export const ProxyForDispatch = {
  get: function (target: any, name: any) {
    return (...args: any) => {
      DispatchHelper.dispatch(target[name](...args))
    }
  }
}
