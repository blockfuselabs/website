
declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    import { FunctionComponent, SVGAttributes } from "react";
    const ReactComponent: FunctionComponent<SVGAttributes<SVGElement>>;
    export { ReactComponent };
  }

  declare module 'react-blockies';