export type ApiResponse<K extends string = "data", R = any> = {
  [key in K]: R;
} & {
  total: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
