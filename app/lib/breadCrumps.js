import { link } from "./links";

export const breadCrumps = {
  ABOUT_US: {
    title: "About Us",
    linksArray: [
      {
        id: 1,
        name: "Home",
        url: link.HOME,
      },
      {
        id: 2,
        name: "About Us",
        url: null,
      },
    ],
  },
  PORTFOLIO: {
    title: "Our Portfolio",
    linksArray: [
      {
        id: 1,
        name: "Home",
        url: link.HOME,
      },
      {
        id: 2,
        name: "Our Portfolio",
      },
    ],
  },
  PORTFOLIO_DETAILS: {
    title: "Portfolio Details",
    linksArray: [
      {
        id: 1,
        name: "Home",
        url: link.HOME,
      },
      {
        id: 2,
        name: "Portfolio",
        url:link.PORTFOLIO
      },
      {
        id:3,
        name:"Portfolio Details"
      }
    ],
  },
  ARTISTS:{
    title:"Our Artists",
    linksArray:[
        {
            id:1,
            name:"Home",
            url:link.HOME
        },
        {
            id:1,
            name:"Our Artists",
        },
    ]
  },
  ARTISTS_DETAILS:{
    title:"Artist Overview",
    linksArray:[
        {
            id:1,
            name:"Home",
            url:link.HOME
        },
        {
            id:2,
            name:"Artists",
            url:link.ARTISTS
        },
        {
          id:3,
          name:"Artist Overview"
        }
    ]
  },
  PROFILE:{
    title:"Profile",
    linksArray:[
      {
        id:1,
        name:"Home",
        url:link.HOME
      },
      {
        id:2,
        name:"Profile"
      }
    ]
  }
};
