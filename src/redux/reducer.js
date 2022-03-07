import { createStore } from "redux";

const initialState = {
  homeCards: [
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_7.png",
      link: "Corporate Data Officer",
      company: "Altenwerth, Medhurst and Roberts",
      address: "Sierra Leone",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
      isLiked: false,
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_8.png",
      link: "Corporate Data Officer",
      company: "Raynor Group",
      address: "Bermuda",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
      isLiked: false,
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_9.png",
      link: "Corporate Data Officer",
      company: "Mraz, Donnelly and Collins",
      address: "Italy",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$ 12,000",
      isLiked: false,
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_10.png",
      link: "Corporate Data Officer",
      company: "Altenwerth, Medhurst and Roberts",
      address: "Sierra Leone",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
      isLiked: false,
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_11.png",
      link: "Corporate Data Officer",
      company: "Raynor Group",
      address: "Bermuda",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$12,000",
      isLiked: false,
    },
    {
      src: "https://zone-assets-api.vercel.app/assets/images/companies/company_12.png",
      link: "Corporate Data Officer",
      company: "Mraz, Donnelly and Collins",
      address: "Italy",
      experiense: 8,
      time: "Part Time",
      career: "Manager",
      salary: "$ 12,000",
      isLiked: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  let s = JSON.parse(JSON.stringify(state));

  console.log(action);
  //   console.log(s[action.payload.key][action.payload.id].isLiked);

  switch (action.type) {
    case "ISLIKED":
      s[action.payload.key][action.payload.id].isLiked =
        !s[action.payload.key][action.payload.id].isLiked;
      return { ...s };
    default:
      return { ...s };
  }
};

const store = createStore(reducer);

export default store;
