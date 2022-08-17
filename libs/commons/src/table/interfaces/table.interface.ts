export interface ITableHeaderColumns<T extends Record<string, any> = Record<string, any>> {
  key: keyof T;
  config?: Partial<ITableHeaderConfig>;
}

export interface ITableHeaderConfig {
  title: string;
}
