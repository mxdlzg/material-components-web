/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {assert} from 'chai';
import td from 'testdouble';

import {captureHandlers} from '../helpers/foundation';
import {testFoundation} from './helpers';
import {cssClasses, strings} from '../../../packages/mdc-ripple/constants';

suite('MDCRippleFoundation - General Events');

testFoundation('activates the background on focus', ({foundation, adapter, mockRaf}) => {
  const handlers = captureHandlers(adapter, 'registerInteractionHandler');
  foundation.init();
  mockRaf.flush();

  handlers.focus();
  mockRaf.flush();
  td.verify(adapter.addClass(cssClasses.BG_FOCUSED));
});

testFoundation('deactivates the background on blur', ({foundation, adapter, mockRaf}) => {
  const handlers = captureHandlers(adapter, 'registerInteractionHandler');
  foundation.init();
  mockRaf.flush();

  handlers.blur();
  mockRaf.flush();
  td.verify(adapter.removeClass(cssClasses.BG_FOCUSED));
});
