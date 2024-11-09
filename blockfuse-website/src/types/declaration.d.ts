declare module "*.png" {
  const value: string;
  export default value;
}
export declare type Team = {
  id: Scalars["string"];
  name: Scalar["string"];
  image: scalar["string"];
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};
