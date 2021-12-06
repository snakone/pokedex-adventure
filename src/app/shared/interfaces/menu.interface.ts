export interface LocationMenu {
  name: string;
  child: { location: string }[];
  open: boolean;
}

export interface LocationChange {
  menu: LocationMenu,
  location: string
}