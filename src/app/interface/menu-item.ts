export interface MenuItem {
    id: string;
    label: string;
    url: string;
    redirectUrl?: string;
    icon?: string;
    active: boolean;
    subMenu?: MenuItem[];
}
