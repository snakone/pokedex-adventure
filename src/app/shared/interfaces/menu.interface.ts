export interface LocationMenu {
  name: string;
  child: { location: string }[];
  open: boolean;
}