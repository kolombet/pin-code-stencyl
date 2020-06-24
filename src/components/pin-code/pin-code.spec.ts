// import { newSpecPage } from '@stencil/core/testing';
// import { PinCode } from './pin-code.component';
//
// describe('pin-code', () => {
//   it('renders', async () => {
//     const {root} = await newSpecPage({
//       components: [PinCode],
//       html: '<pin-code></pin-code>'
//     });
//     expect(root).toEqualHtml(`
//       <pin-code>
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm
//           </div>
//         </mock:shadow-root>
//       </pin-code>
//     `);
//   });
//
//   it('renders with values', async () => {
//     const {root} = await newSpecPage({
//       components: [PinCode],
//       html: `<pin-code first="Stencil" last="'Don't call me a framework' JS"></pin-code>`
//     });
//     expect(root).toEqualHtml(`
//       <pin-code first="Stencil" last="'Don't call me a framework' JS">
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm Stencil 'Don't call me a framework' JS
//           </div>
//         </mock:shadow-root>
//       </pin-code>
//     `);
//   });
// });
