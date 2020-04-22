import './index.scss';
import { loadPolyfillv2 } from '@opten/script/load-polyfill';
import { factory } from '@opten/compiler/factory';
import { TestComponentComponent } from './components/test-component';

loadPolyfillv2(() => initialize(document.body), []);

const initialize = factory([TestComponentComponent]);
