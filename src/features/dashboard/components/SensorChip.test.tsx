import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect, it} from 'vitest';
import {SensorChip} from './SensorChip';

it('shows an unavailable sensor without a closed lock or a safe status', () => {
  const html = renderToStaticMarkup(<SensorChip id="binary_sensor.door" name="Puerta" isOpen={false}
    isBlocking={false} isUnavailable unavailableLabel="No disponible" isLockLike battery={null}
    iconHtml="" statusLabelOpen="Abierto" statusLabelClosed="Cerrado" />);
  expect(html).toContain('No disponible');
  expect(html).not.toContain('Cerrado');
  expect(html).not.toContain('argus-lock-shackle');
});
