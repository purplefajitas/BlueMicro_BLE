"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5331],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,y=h["".concat(s,".").concat(p)]||h[p]||c[p]||r;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"keymaps",title:"Configuring your own keymap",slug:"/keymaps"},s=void 0,d={unversionedId:"keymaps",id:"keymaps",title:"Configuring your own keymap",description:"To understand how to configure your keymap, you should first know what constitutes a keycode:",source:"@site/docs/configuration_keymap.md",sourceDirName:".",slug:"/keymaps",permalink:"/docs/keymaps",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/configuration_keymap.md",tags:[],version:"current",frontMatter:{id:"keymaps",title:"Configuring your own keymap",slug:"/keymaps"},sidebar:"someSidebar",previous:{title:"Configuring Advanced Features",permalink:"/docs/configure_combos"},next:{title:"Building Firmware",permalink:"/docs/build"}},u=[{value:"Keycodes",id:"keycodes",children:[{value:"The HID Keycode",id:"the-hid-keycode",children:[],level:3},{value:"The activation method",id:"the-activation-method",children:[],level:3},{value:"The activation duration",id:"the-activation-duration",children:[],level:3},{value:"The layer",id:"the-layer",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"The default layer",id:"the-default-layer",children:[],level:3}],level:2},{value:"Further layers",id:"further-layers",children:[],level:2},{value:"Single keys",id:"single-keys",children:[],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To understand how to configure your keymap, you should first know what constitutes a keycode:"),(0,r.kt)("h2",{id:"keycodes"},"Keycodes"),(0,r.kt)("p",null,"A single keycode field is made up of four different pieces of information:"),(0,r.kt)("h3",{id:"the-hid-keycode"},"The HID Keycode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'this is what the key actually sends to the computer, e.g. "KC_A" for "a"'),(0,r.kt)("li",{parentName:"ul"},"These conform with the USB HID standard and can be viewed in hid","_","keycodes.h"),(0,r.kt)("li",{parentName:"ul"},"there are special keycodes defined in advanced","_","keycodes.h where a modifier is sent at the same time as the keycode.")),(0,r.kt)("h3",{id:"the-activation-method"},"The activation method"),(0,r.kt)("p",null,"This is how the key is activated. options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PRESS: it is pressed.  This is the normal operation of a keyboard where a key will be sent, and kept in the HID report until the key is released.  If you want to use another activation method, use ",(0,r.kt)("strong",{parentName:"li"},"KC_NO")," in the standard PRESS to make sure that the standard activations don't get sent to the computer."),(0,r.kt)("li",{parentName:"ul"},"MT","_","TAP: it is pressed and then released.  The key is sent as soon as the key is released.  "),(0,r.kt)("li",{parentName:"ul"},"MT","_","HOLD: it is pressed and held.  The key is sent when the time limit expires.  The key is not repeated.  HOLD is useful for toggling modifiers or layers."),(0,r.kt)("li",{parentName:"ul"},"DT","_","TAP: it is pressed, released and not pressed again for DOUBLETAP","_","TIME","_","LIMIT. The keyboard will wait for the double tap time limit until the single tap key is sent."),(0,r.kt)("li",{parentName:"ul"},"DT","_","DOUBLETAP: it is pressed, released and tapped again within a certain time.  The keyboard will send the key as soon as a double tap is detected.\n(DOUBLETAP","_","TIME","_","LIMIT duration (in ms) is defined in KeyStates.h)")),(0,r.kt)("p",null,"There is a difference between MT","_","TAP and DT","_","TAP:  The key difference is when the keycode is sent.  With MT, the keycode is sent as soon as the key is released.  With DT, the keycode is sent some time after the key is released: delay time is there to detect the double taps."),(0,r.kt)("p",null,"Note: if you receive repeated keypresses, check that you do not have PRESS, MT_TAP and DT_TAP are not all defined.",(0,r.kt)("br",{parentName:"p"}),"\n","It is recommended that you use one of the 3 methods and do not combine them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'PRESS: key is sent with every HID report. The computer will automatically detect this and repeat the keycode until a HID report without the keycode is received. Default behaviour.  Note that if the computer loose connection with the keyboard, it will not receive the "empty" HID report and will start repeating the keypress.'),(0,r.kt)("li",{parentName:"ul"},"MT_TAP/MT_HOLD: This adds a timer to the keyboard to detect when the key is being held.  When held, a different keycode can be sent.  For each activation state of this method, a single HID report will be sent and then immediately released."),(0,r.kt)("li",{parentName:"ul"},"DT_TAP/DT_DOUBLETAP: This adds a timer to  the keyboard to detect if the same key is pressed again within a given time period.  When double-tapped, a different keycode can be sent. For each activation state of this method, a single HID report will be sent and then immediately released.")),(0,r.kt)("h3",{id:"the-activation-duration"},"The activation duration"),(0,r.kt)("p",null,"Once Activated, sending of the keycode can be sent at different times:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Momentary (default): as long as the key is active the keycode will be sent in every HID report to the computer.  This is the normal operation of a keyboard. Note that if the computer loose connection with the keyboard, it will not receive the "empty" HID report and will keep repeating the keypress.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Toggle: The keycode will be sent in every HID report to the computer, as long as a key with the same keycode isn't pressed. This is similar to how SHIFT and CAPS LOCK work.  However, this is done on the keyboard and can be applied to any modifier.\nToggle is useful with modifiers and layers.  You can toggle the key until the toggle keystroke is pressed again.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Oneshot: The keycode will be sent for a single HID report to the computer.  The keycode will be sent with the next non-null report to the computer (next keypress).  An an example, SHIFT key makes the next letter into a capital letter but no other one thereafter.  OneShot is useful for modifiers when a specific modifier should be sent along with the next key.  OneShot currently do not work for selecting layers."))),(0,r.kt)("p",null,"The activation duration can be defined in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DURATION(HID keycode)\n")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TG(KC_LSHIFT)\nOS(KC_LSHIFT)\n")),(0,r.kt)("p",null,"The activation duration are included as part of the definition for a layer or a single key.  As such, it does not get "),(0,r.kt)("h3",{id:"the-layer"},"The layer"),(0,r.kt)("p",null,"The Layer ID is needed to identify which layer the keypresses are being mapped to.  These map out to 0-15. "),(0,r.kt)("p",null,"The three key pieces of information needed to define each key press are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Layer ID"),(0,r.kt)("li",{parentName:"ul"},"activation method (default press & repeat, tap, double-tap hold)"),(0,r.kt)("li",{parentName:"ul"},"HID Keycode;  includes the activation duration modifier when needed (toggle, one shot)")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"the-default-layer"},"The default layer"),(0,r.kt)("p",null,'The default layer is the layer which you will most often use. Generally this is the "QWERTY" Layer.\nHere, you give the\nHID Keycode and optionally the activation duration for the default method on the default layer\n(currently PRESS and layer 0).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS>  matrix {\nKEYMAP(\n    <i>KEYCODE1</i>, <i>KEYCODE2</i>, <i>etc.</i>)\n};\n")),(0,r.kt)("p",null,"For example for the gherkin:"),(0,r.kt)("p",null,"std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =\n{KEYMAP(\nKC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,\nKC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_H,    KC_J,    KC_K,    KC_L,    KC_ESC,\nKC_Z,    KC_X,    KC_C,    KC_V,    KC_SPC,  KC_BKSPC,KC_B,    KC_N,    KC_M,    KC_NO )};"),(0,r.kt)("h2",{id:"further-layers"},"Further layers"),(0,r.kt)("p",null,"You can define layers in the same way as the default layer for any activation method and layer combo,\ne.g. PRESS on layer 1 or MT","_","TAP for layer 0. Most of the time, you'll only need press layers unless you use other activation methods a lot. You will need to add a tuple ",(0,r.kt)("strong",{parentName:"p"}," people won't understand what a tuple is...")," of this layer using the addLayers function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uint32_t <i>LAYER_NAME</i> {\n    KEYMAP(<i>...</i>)\n};\nfor (int row = 0; row < MATRIX_ROWS; ++row)\n{\n    for (int col = 0; col < MATRIX_COLS; ++col)\n    {\n        matrix[row][col].addActivation(<i>LAYER</i>, <i>METHOD</i>, <i>KEYCODE</i>));\n\n    }\n}  \n")),(0,r.kt)("h2",{id:"single-keys"},"Single keys"),(0,r.kt)("p",null,"You'll most likely use this to configure keys with uncommon activation methods, e.g. DT","_","DOUBLETAP.  However, when using a remapping macro (KEYMAP), it is recommended to create a full matrix with KC_NO everywhere except for where the specific activation method is desired.  However, for keyboards with no need for the KEYMAP macro, you can use the specific row and column directly (instead of looping over each row/column as shown above)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"matrix[<i>row</i>][<i>col</i>].addActivation(<i>LAYER</i>, <i>METHOD</i>, <i>KEYCODE</i>);\n")))}h.isMDXComponent=!0}}]);