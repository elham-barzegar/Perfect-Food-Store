import {getMenuApiCall} from "@/api/Menu";
import {useQuery} from "@tanstack/react-query";
import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";

interface Props {
    position: string;
}

export function useMenu({position}: Props) {

    const {data: menuData} = useQuery({queryKey: [getMenuApiCall.name], queryFn: () => getMenuApiCall()})

    let MenuItems: null | PopulateType<MenuItemType> = null;

    if (menuData) {
        const findMenu = menuData.data.filter((item: EntityType<MenuType>) => item.attributes.position === position);
        if (findMenu.length > 0) {
            MenuItems = findMenu[0].attributes.menu_items;
            MenuItems.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank)
                    return -1;
                if (a.attributes.rank > b.attributes.rank)
                    return 1;
                return 0;
            })
        }
    }
    return {data: MenuItems};
}