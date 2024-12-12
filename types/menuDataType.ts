export type MenuItem = {
    name: string;
    description: string;
    calories: string;
    price: string;
};

export type MenuData = {
    [key: string]: MenuItem[];
};