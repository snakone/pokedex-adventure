import { LocationMenu } from "../interfaces/menu.interface";

export const LOCATION_MENU: LocationMenu[] = [
  {
    name: 'Kanto',
    child: [
      {
        location: 'Route 1'
      },
      {
        location: 'Route 2'
      },
      {
        location: 'Power Plant'
      }
    ],
    open: false
  },
  // {
  //   name: 'Johto',
  //   child: [
  //     {
  //       location: 'Route 29'
  //     }
  //   ],
  //   open: false
  // }
];