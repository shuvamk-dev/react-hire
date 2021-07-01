import { ADD_TO_SAVE, DELETE_FROM_SAVE } from "../../actionTypes/react";
const initialState = {
  companyList: [
    {
      id: 1,
      name: "WazirX",
      website: "https://careers.wazirx.com/jobs",
      domain: "Fintech",
      logo: "https://media-exp3.licdn.com/dms/image/C4E0BAQHfjTMcCunuOw/company-logo_200_200/0/1623824571975?e=1632960000&v=beta&t=_pCbSyYClLIXcJlTI7ohW5Z1bqVMCqPlmyo5vnTdRwU",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      name: "Groww",
      website: "https://groww.in/about-us",
      domain: "Fintech",
      logo: "https://media-exp3.licdn.com/dms/image/C4D0BAQHSl3byAWi9ow/company-logo_200_200/0/1519952564040?e=1632960000&v=beta&t=wtQEncFEZ1pMtFFPNaHb9hGd7UyZ5trVXBAkd2p0v1I",
      location: "Bangalore, Karnataka",
    },
    {
      id: 3,
      name: "HackerEarth",
      website: "https://hackerearthjobs.recruiterbox.com/",
      domain: "Software",
      logo: "https://media-exp3.licdn.com/dms/image/C4D0BAQHgoMowHLH6Rw/company-logo_200_200/0/1622540336050?e=1632960000&v=beta&t=uPB6QAiQxl9kgeuLpTNFfJXRsuacPlGfgwTk82Pd2KA",
      location: "Bangalore, Karnataka",
    },
    {
      id: 4,
      name: "Zebpay",
      website: "https://zebpay.com/careers/",
      domain: "Fintech",
      logo: "https://media-exp3.licdn.com/dms/image/C560BAQFsTTpZZeQAtg/company-logo_200_200/0/1583130938756?e=1632960000&v=beta&t=ZSolQDLUlpodIlrxADKJZdeujcbJyqSXXGsOUP1eZ04",
      location: "Ahmedabad, Gujarat",
    },
    {
      id: 5,
      name: "Recko Inc.",
      website: "https://recko-team.freshteam.com/jobs",
      domain: "Fintech",
      logo: "https://media-exp3.licdn.com/dms/image/C560BAQFkP-cSbCe28A/company-logo_200_200/0/1604400287450?e=1632960000&v=beta&t=E-W8I9pSx7wViKD9--ICAg00gsPKbe6dCTxiW2AxMDI",
      location: "Bengaluru, Karnataka",
    },
    {
      id: 6,
      name: "Treebo Hotels",
      website:
        "https://www.linkedin.com/company/treebohotels/jobs/?originalSubdomain=in",
      domain: "Hospitality",
      logo: "https://media-exp3.licdn.com/dms/image/C4E0BAQH-f7GkG6f9ww/company-logo_200_200/0/1601487380882?e=1632960000&v=beta&t=imrXmfWgnGLx3Yk-iFVhWppaq1UUygE05aSbJtDnrn8",
      location: "Bengaluru, Karnataka",
    },
    {
      id: 7,
      name: "PharmEasy",
      website: "https://pharmeasy.in/careers/",
      domain: "Healthtech",
      logo: "https://media-exp3.licdn.com/dms/image/C510BAQH4-n66jA6urw/company-logo_200_200/0/1552381250138?e=1632960000&v=beta&t=WQFtJHvUAYP_fKqesyNDRL_DRfb-eW7A8rgUOqKfmsc",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 8,
      name: "Upstox",
      website: "https://jobs.lever.co/upstox",
      domain: "Fintech",
      logo: "https://media-exp3.licdn.com/dms/image/C510BAQGQMzN22PJz1g/company-logo_200_200/0/1552649200386?e=1632960000&v=beta&t=ZEGcdRrXhgIRjWTr7MEWdWNvfiWkPUUWeXqTevLBg3o",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 9,
      name: "Dream11",
      website: "https://jobs.lever.co/dreamsports",
      domain: "Gametech",
      logo: "https://media-exp3.licdn.com/dms/image/C4D0BAQHNFdSdu8chdQ/company-logo_200_200/0/1519890073011?e=1632960000&v=beta&t=17055R4HwDSB4JxnkhPiq0GO_Vaov24IdySPAIdPBt0",
      location: "Mumbai, Maharashtra",
    },
  ],
  saved: [],
};

const ReactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SAVE: {
      const { data } = action;
      return {
        ...state,
        saved: [...state.saved, data],
      };
    }
    case DELETE_FROM_SAVE: {
      const { data } = action;
      const deletedArray = state.saved.filter((item) => item.id !== data.id);
      return {
        ...state,
        saved: deletedArray,
      };
    }
    default:
      return state;
  }
};

export default ReactReducer;
