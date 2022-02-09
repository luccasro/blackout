import { Component } from '../components';
import map from 'lodash/map';
import React, { ReactElement } from 'react';
import type { ComponentType } from '@farfetch/blackout-client/contents/types';

/**
 * Render an Editorial Content.
 * Renders Editorial Content by going through all it's components and rendering them using the Editorial Component.
 *
 * @param {object} data - Data to render.
 * @param {Components[]} data.components - Collection of components to render.
 * @param {object} location - - Router location object.
 *
 * @returns {ReactElement[]} Rendered components.
 */
const renderContent = (
  {
    components,
  }: {
    components: ComponentType[];
  },
  location: Record<string, string>,
): ReactElement[] =>
  map(components, (component, key) => (
    <Component component={component} key={key} location={location} />
  ));

export default renderContent;
