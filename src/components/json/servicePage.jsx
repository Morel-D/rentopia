import search from "../../assets/searchIcon.png";
import listing from "../../assets/lsitingIcon.png";
import filter from "../../assets/filterIcon.png";
import inbox from "../../assets/inboxIcon.png";
import smartPhone from "../../assets/smartIcon.png";
import laptop from "../../assets/laptopIcon.png";
import bell from "../../assets/notificationIcon.png";


const serviceSection = ({translation}) =>
[
    {
        id: 1,
        image: search,
        title: translation.serviceSecondSectionCardTitle1,
        description: translation.serviceSecondSectionCardContext1,
        duration: "1000"
    },

    {
        id: 2,
        image: listing,
        title: translation.serviceSecondSectionCardTitle2,
        description: translation.serviceSecondSectionCardContext2,
        duration: "2000"

    },

    {
        id: 3,
        image: filter,
        title: translation.serviceSecondSectionCardTitle3,
        description: translation.serviceSecondSectionCardContext3,
        duration: "3000"
    },

    {
        id: 4,
        image: inbox,
        title: translation.serviceSecondSectionCardTitle4,
        description: translation.serviceSecondSectionCardContext4,
        duration: "1000"
    },

    {
        id: 5,
        image: smartPhone,
        title: translation.serviceSecondSectionCardTitle5,
        description: translation.serviceSecondSectionCardContext5,
        duration: "2000"
    },

    {
        id: 6,
        image: laptop,
        title: translation.serviceSecondSectionCardTitle6,
        description: translation.serviceSecondSectionCardContext6,
        duration: "3000"
    },

    {
        id: 7,
        image: bell,
        title: translation.serviceSecondSectionCardTitle7,
        description: translation.serviceSecondSectionCardContext7,
        duration: "1000"
    },
];

export {serviceSection}