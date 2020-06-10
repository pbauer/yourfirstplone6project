/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
} from '@plone/volto/config';

import CalendarView from './components/Views/Calendar';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  layoutViews: {
    ...defaultViews.layoutViews,
    calendar_view: CalendarView,
  },
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};
