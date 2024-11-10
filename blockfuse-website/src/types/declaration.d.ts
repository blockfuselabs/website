declare module "*.png" {
  const value: string;
  export default value;
}


// src/types/svg.d.ts
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

