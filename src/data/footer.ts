import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Art and the artists different perspectives of seeing everything a new way. Lounge for all artists of all mediums.",
    quickLinks: [
        {
            text: "Zines",
            url: "/zines"
        },
        {
            text: "About",
            url: "/about"
        },
        {
            text: "Contact",
            url: "/contact"
        }
    ],
    email: 'visionfeverteam@gmail.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}