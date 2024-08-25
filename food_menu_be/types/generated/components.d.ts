import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryFoodmenu extends Schema.Component {
  collectionName: 'components_category_foodmenus';
  info: {
    displayName: 'foodmenu';
    icon: 'folder';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface FoodMenuFoodmenu extends Schema.Component {
  collectionName: 'components_food_menu_foodmenus';
  info: {
    displayName: 'category';
    icon: 'folder';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface FoodMenuMenu extends Schema.Component {
  collectionName: 'components_food_menu_menus';
  info: {
    displayName: 'menu';
    icon: 'folder';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.foodmenu': CategoryFoodmenu;
      'food-menu.foodmenu': FoodMenuFoodmenu;
      'food-menu.menu': FoodMenuMenu;
    }
  }
}
