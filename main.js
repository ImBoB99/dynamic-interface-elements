(()=>{"use strict";var n={963:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),A=t(314),i=t.n(A)()(o());i.push([n.id,':root {\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.module-container {\n  position: relative;\n}\n\n/* Dropdown Menu Styling */\n.dropdown-menu-click {\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 1rem;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  user-select: none;\n  min-width: 220px;\n}\n\n/* Gap between dropdown menu and content */\n.dropdown-menu-click::after {\n  content: "";\n  display: block;\n  height: 2px; /* The gap size */\n  background-color: transparent;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n}\n\n/* Dropdown Contents Styling */\n.dropdown-contents {\n  margin-top: 2px;\n  width: 100%;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 99;\n}\n\n/* Dropdown Contents List */\n.dropdown-contents ul {\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Dropdown Item Styling */\n.dropdown-item {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 8px;\n  border-radius: 4px;\n  transition: background 0.2s ease-in-out;\n  text-indent: 8px;\n}\n\n.dropdown-item:hover {\n  background-color: var(--mediumblue);\n  cursor: pointer;\n}',"",{version:3,sources:["webpack://./src/modules/dropdownMenuClick.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,cAAc;EACd,WAAW,EAAE,iBAAiB;EAC9B,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,WAAW;AACb;;AAEA,8BAA8B;AAC9B;EACE,eAAe;EACf,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,sBAAsB;EACtB,WAAW;AACb;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB",sourcesContent:[':root {\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n}\n\n.hidden {\n  display: none;\n}\n\n.visible {\n  display: flex;\n}\n\n.module-container {\n  position: relative;\n}\n\n/* Dropdown Menu Styling */\n.dropdown-menu-click {\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 1rem;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  user-select: none;\n  min-width: 220px;\n}\n\n/* Gap between dropdown menu and content */\n.dropdown-menu-click::after {\n  content: "";\n  display: block;\n  height: 2px; /* The gap size */\n  background-color: transparent;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n}\n\n/* Dropdown Contents Styling */\n.dropdown-contents {\n  margin-top: 2px;\n  width: 100%;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 99;\n}\n\n/* Dropdown Contents List */\n.dropdown-contents ul {\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Dropdown Item Styling */\n.dropdown-item {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 8px;\n  border-radius: 4px;\n  transition: background 0.2s ease-in-out;\n  text-indent: 8px;\n}\n\n.dropdown-item:hover {\n  background-color: var(--mediumblue);\n  cursor: pointer;\n}'],sourceRoot:""}]);const a=i},281:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),A=t(314),i=t.n(A)()(o());i.push([n.id,':root {\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n}\n\n.module-container {\n  position: relative;\n}\n\n/* Dropdown Menu Styling */\n.dropdown-menu-hover {\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 1rem;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  user-select: none;\n  min-width: 220px;\n}\n\n/* Gap between dropdown menu and content */\n.dropdown-menu-hover::after {\n  content: "";\n  display: block;\n  height: 2px; /* The gap size */\n  background-color: transparent;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n}\n\n/* Dropdown Contents Styling */\n.dropdown-contents {\n  display: none;\n  margin-top: 2px;\n  width: 100%;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 99;\n}\n\n/* Dropdown Contents List */\n.dropdown-contents ul {\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Dropdown Item Styling */\n.dropdown-item {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 8px;\n  border-radius: 4px;\n  transition: background 0.2s ease-in-out;\n  text-indent: 8px;\n}\n\n.dropdown-item:hover {\n  background-color: var(--mediumblue);\n  cursor: pointer;\n}\n\n/* Show dropdown contents on hover */\n.dropdown-menu-hover:hover + .dropdown-contents,\n.dropdown-contents:hover {\n  display: flex;\n  flex-direction: column;\n}\n',"",{version:3,sources:["webpack://./src/modules/dropdownMenuHover.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,0CAA0C;AAC1C;EACE,WAAW;EACX,cAAc;EACd,WAAW,EAAE,iBAAiB;EAC9B,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,OAAO;EACP,WAAW;AACb;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,sBAAsB;EACtB,WAAW;AACb;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA,0BAA0B;AAC1B;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,uCAAuC;EACvC,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,eAAe;AACjB;;AAEA,oCAAoC;AACpC;;EAEE,aAAa;EACb,sBAAsB;AACxB",sourcesContent:[':root {\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n}\n\n.module-container {\n  position: relative;\n}\n\n/* Dropdown Menu Styling */\n.dropdown-menu-hover {\n  font-size: 1rem;\n  font-weight: 600;\n  padding: 1rem;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  user-select: none;\n  min-width: 220px;\n}\n\n/* Gap between dropdown menu and content */\n.dropdown-menu-hover::after {\n  content: "";\n  display: block;\n  height: 2px; /* The gap size */\n  background-color: transparent;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n}\n\n/* Dropdown Contents Styling */\n.dropdown-contents {\n  display: none;\n  margin-top: 2px;\n  width: 100%;\n  background-color: var(--darkblue);\n  border-radius: 4px;\n  overflow: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  box-sizing: border-box;\n  z-index: 99;\n}\n\n/* Dropdown Contents List */\n.dropdown-contents ul {\n  width: 100%;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/* Dropdown Item Styling */\n.dropdown-item {\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 8px;\n  border-radius: 4px;\n  transition: background 0.2s ease-in-out;\n  text-indent: 8px;\n}\n\n.dropdown-item:hover {\n  background-color: var(--mediumblue);\n  cursor: pointer;\n}\n\n/* Show dropdown contents on hover */\n.dropdown-menu-hover:hover + .dropdown-contents,\n.dropdown-contents:hover {\n  display: flex;\n  flex-direction: column;\n}\n'],sourceRoot:""}]);const a=i},427:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),A=t(314),i=t.n(A)()(o());i.push([n.id,":root {\n  --grey: #F9F7F7;\n  --lightblue: #DBE2EF;\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n  --error: #ff0000;\n  --valid: #08b608;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n/* error message styles */\n.error {\n  width: 100%;\n  max-width: 400px;\n  padding: 0;\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.5rem;\n}\n\nform input, form select {\n  min-width: 400px;\n  padding: 4px 8px;\n  font-size: 100%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n}\n\nbutton[type=submit] {\n  min-width: 400px;\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 8px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s ease-out;\n}\n\nbutton[type=submit]:hover {\n  background-color: #45a049;\n  transition: background 0.2s ease-in;\n}\n\ninput:required:invalid:focus {\n  border: 1px solid var(--error);\n}\n\ninput:required:valid {\n  border: 1px solid var(--valid);\n}\n","",{version:3,sources:["webpack://./src/modules/formJSValidation.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC",sourcesContent:[":root {\n  --grey: #F9F7F7;\n  --lightblue: #DBE2EF;\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n  --error: #ff0000;\n  --valid: #08b608;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n/* error message styles */\n.error {\n  width: 100%;\n  max-width: 400px;\n  padding: 0;\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.5rem;\n}\n\nform input, form select {\n  min-width: 400px;\n  padding: 4px 8px;\n  font-size: 100%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n}\n\nbutton[type=submit] {\n  min-width: 400px;\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 8px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s ease-out;\n}\n\nbutton[type=submit]:hover {\n  background-color: #45a049;\n  transition: background 0.2s ease-in;\n}\n\ninput:required:invalid:focus {\n  border: 1px solid var(--error);\n}\n\ninput:required:valid {\n  border: 1px solid var(--valid);\n}\n"],sourceRoot:""}]);const a=i},553:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),A=t(314),i=t.n(A)()(o());i.push([n.id,"/* Slider CSS */\n.slider-container {\n  position: relative;\n  width: 720px;\n}\n\n.slider-slides {\n  display: flex;\n  flex-direction: row;\n  z-index: 1;\n  height: 100%;\n}\n\n.slider-btn {\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--darkblue);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.arrow-left {\n  left: 20px;\n}\n\n.arrow-right {\n  right: 20px;\n}\n\n/* Arrow styles */\n.arrow-left i, .arrow-right i {\n  border: solid var(--grey);\n  border-width: 0 3px 3px 0;\n  padding: 6px;\n  position: relative;\n}\n\n.arrow-left i {\n  transform: rotate(135deg);\n  left: 2px;\n}\n\n.arrow-right i {\n  transform: rotate(-45deg);\n  right: 2px;\n}\n\n.slider-nav {\n  display: flex;\n  gap: 5px;\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.slider-nav-item {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--darkblue);\n  cursor: pointer;\n}","",{version:3,sources:["webpack://./src/modules/imageSlider.css"],names:[],mappings:"AAAA,eAAe;AACf;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA,iBAAiB;AACjB;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;EAClB,YAAY;EACZ,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;EACjC,eAAe;AACjB",sourcesContent:["/* Slider CSS */\n.slider-container {\n  position: relative;\n  width: 720px;\n}\n\n.slider-slides {\n  display: flex;\n  flex-direction: row;\n  z-index: 1;\n  height: 100%;\n}\n\n.slider-btn {\n  display: flex;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--darkblue);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 50%;\n}\n\n.arrow-left {\n  left: 20px;\n}\n\n.arrow-right {\n  right: 20px;\n}\n\n/* Arrow styles */\n.arrow-left i, .arrow-right i {\n  border: solid var(--grey);\n  border-width: 0 3px 3px 0;\n  padding: 6px;\n  position: relative;\n}\n\n.arrow-left i {\n  transform: rotate(135deg);\n  left: 2px;\n}\n\n.arrow-right i {\n  transform: rotate(-45deg);\n  right: 2px;\n}\n\n.slider-nav {\n  display: flex;\n  gap: 5px;\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.slider-nav-item {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--darkblue);\n  cursor: pointer;\n}"],sourceRoot:""}]);const a=i},365:(n,e,t)=>{t.d(e,{A:()=>a});var r=t(354),o=t.n(r),A=t(314),i=t.n(A)()(o());i.push([n.id,"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background-color: #101010;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n:root {\n  --grey: #F9F7F7;\n  --lightblue: #DBE2EF;\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n  --error: #ff0000;\n  --valid: #08b608;\n}\n\n/* Container */\n.container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem;\n  gap: 2rem;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,mCAAmC;EACnC,yBAAyB;EACzB,YAAY;EACZ,yCAAyC;AAC3C;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;EACE,iBAAiB;AACnB;AACA;;;;;;EAME,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,SAAS;AACX",sourcesContent:["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  background-color: #101010;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\np {\n  text-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\n:root {\n  --grey: #F9F7F7;\n  --lightblue: #DBE2EF;\n  --mediumblue: #3F72AF;\n  --darkblue: #112D4E;\n  --error: #ff0000;\n  --valid: #08b608;\n}\n\n/* Container */\n.container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem;\n  gap: 2rem;\n}"],sourceRoot:""}]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var A={},i=[],a=0;a<n.length;a++){var d=n[a],s=r.base?d[0]+r.base:d[0],l=A[s]||0,c="".concat(s," ").concat(l);A[s]=l+1;var u=t(c),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var C=o(p,r);r.byIndex=a,e.splice(a,0,{identifier:c,updater:C,references:1})}i.push(c)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=t(A[i]);e[a].references--}for(var d=r(n,o),s=0;s<A.length;s++){var l=t(A[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}A=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var A=e[r]={id:r,exports:{}};return n[r](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),A=t(825),i=t.n(A),a=t(659),d=t.n(a),s=t(56),l=t.n(s),c=t(540),u=t.n(c),p=t(113),C=t.n(p),E=t(365),B={};B.styleTagTransform=C(),B.setAttributes=l(),B.insert=d().bind(null,"head"),B.domAPI=i(),B.insertStyleElement=u(),o()(E.A,B),E.A&&E.A.locals&&E.A.locals;var m=t(281),g={};g.styleTagTransform=C(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;var b=t(963),f={};f.styleTagTransform=C(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(b.A,f),b.A&&b.A.locals&&b.A.locals,document.querySelectorAll(".dropdown-menu-click").forEach((n=>{n.addEventListener("click",(n=>{!function(n){const e=n.target.nextElementSibling;e.classList.toggle("visible"),e.classList.toggle("hidden")}(n)}))}));var h=t(553),v={};v.styleTagTransform=C(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals;const x=document.querySelector(".slider-container"),y=document.querySelectorAll(".slider-image"),w=document.querySelector(".slider-btn.arrow-left"),k=document.querySelector(".slider-btn.arrow-right");let S=0;function z(){y[S].style.display="none",S+=1,S==y.length&&(S=0),y[S].style.display="flex"}y.forEach(((n,e)=>{0!==e&&(n.style.display="none")})),w.addEventListener("click",(()=>{clearInterval(W),y[S].style.display="none",0==S&&(S=y.length),S-=1,y[S].style.display="flex",W=T()})),k.addEventListener("click",(()=>{clearInterval(W),z(),W=T()}));const F=document.createElement("div");function D(n){const e=parseInt(n.target.getAttribute("slide-index"));y[S].style.display="none",S=e,y[S].style.display="flex"}function T(){return setInterval(z,5e3)}F.classList.add("slider-nav"),function(){for(let n=0;n<y.length;n++){const e=document.createElement("div");e.classList.add("slider-nav-item"),e.setAttribute("slide-index",n),F.append(e),e.addEventListener("click",(n=>{clearInterval(W),D(n),W=T()}))}}(),x.append(F);let W=T();var Y=t(427),I={};I.styleTagTransform=C(),I.setAttributes=l(),I.insert=d().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=u(),o()(Y.A,I),Y.A&&Y.A.locals&&Y.A.locals;const L=document.querySelector("form"),j=document.getElementById("user_email"),q=document.querySelector("#user_email + span.error"),M=document.getElementById("user_country"),Z=document.getElementById("user_postal_code"),U=document.querySelector("#user_postal_code + span.error"),O=document.getElementById("user_password"),R=document.querySelector("#user_password + span.error"),_=document.getElementById("user_password_confirm"),P=document.querySelector("#user_password_confirm + span.error"),X={ch:["^(CH-)?\\d{4}$","Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950"],fr:["^(F-)?\\d{5}$","French postal codes must have exactly 5 digits: e.g. F-75012 or 75012"],de:["^(D-)?\\d{5}$","German postal codes must have exactly 5 digits: e.g. D-12345 or 12345"],nl:["^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$","Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS"]};function V(n,e,t){const r=t(n);r?function(n,e){n.innerHTML=e.replace(/\n/g,"<br>"),n.className="error active"}(e,r):function(n){n.textContent="",n.className="error"}(e)}function H(n){return n.validity.valueMissing?"Email address can't be empty":n.validity.typeMismatch?"Entered value needs to be an email address.":n.validity.tooShort?`Email should be at least ${n.minLength} characters; you entered ${n.value.length}.`:n.validity.tooLong?`Email should be at most ${n.maxLength} characters; you entered ${n.value.length}.`:""}function N(n){return new RegExp(X[M.value][0],"").test(n.value)?(Z.setCustomValidity(""),""):(Z.setCustomValidity(X[M.value][1]),X[M.value][1])}function $(n){return new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}").test(n.value)?(O.setCustomValidity(""),""):(O.setCustomValidity("Must contain: at least one number and one uppercase and lowercase letter, and at least 8 or more characters"),"Must contain:\n- At least one number\n- One uppercase and lowercase letter\n- At least 8 or more characters")}function G(n){return O.value===n.value?(_.setCustomValidity(""),""):(_.setCustomValidity("Passwords do not match"),"Passwords do not match")}j.addEventListener("input",(()=>V(j,q,H))),Z.addEventListener("input",(()=>V(Z,U,N))),O.addEventListener("input",(()=>V(O,R,$))),_.addEventListener("input",(()=>V(_,P,G))),L.addEventListener("submit",(n=>function(n){V(j,q,H),j.validity.valid||n.preventDefault(),V(Z,U,N),Z.validity.valid||n.preventDefault(),V(O,R,$),O.validity.valid||n.preventDefault(),V(_,P,G),_.validity.valid||n.preventDefault()}(n)))})();
//# sourceMappingURL=main.js.map