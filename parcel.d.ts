declare module '*.module.scss' {
  const value: Record<string, string>;
  export default value;
}

declare module '*.png' {
  const value: any;
  export = value;
}
