export interface TopMenuInterface {
    path: string;
    megaClass?: string;
    title: string;
    iconType: "" | "nzIcon" | "fontawesome";
    iconTheme: "" | "fab" | "far" | "fas" | "fill" | "outline" | "twotone";
    icon: string,
    nav?: boolean, // make the property optional by adding the "?" symbol
    navTitle?: string,
    submenu : TopMenuInterface[];
}

