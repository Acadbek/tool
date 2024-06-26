"use strict";
/* __placeholder__ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@vueuse/core");
const button_1 = require("@/components/ui/button");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const mode = (0, core_1.useColorMode)();
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .DropdownMenu;
    ({}.DropdownMenu);
    ({}.DropdownMenu);
    __VLS_components.DropdownMenu;
    __VLS_components.DropdownMenu;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenu, dropdown_menu_1.DropdownMenu,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    const __VLS_6 = {}
        .DropdownMenuTrigger;
    ({}.DropdownMenuTrigger);
    ({}.DropdownMenuTrigger);
    __VLS_components.DropdownMenuTrigger;
    __VLS_components.DropdownMenuTrigger;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuTrigger, dropdown_menu_1.DropdownMenuTrigger,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ asChild: (true), }));
    const __VLS_8 = __VLS_7({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ asChild: (true), }));
    // @ts-ignore
    const __VLS_12 = {}
        .Button;
    ({}.Button);
    ({}.Button);
    __VLS_components.Button;
    __VLS_components.Button;
    // @ts-ignore
    [button_1.Button, button_1.Button,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ variant: ("outline"), }));
    const __VLS_14 = __VLS_13({ variant: ("outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ variant: ("outline"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0") }, mlns: ("http://www.w3.org/2000/svg"), width: ("32"), height: ("32"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ fill: ("currentColor"), d: ("M12.058 20q-3.334 0-5.667-2.333T4.058 12q0-3.039 1.98-5.27t4.904-2.634q.081 0 .159.006t.153.017q-.506.706-.801 1.57T10.158 7.5q0 2.667 1.866 4.533t4.534 1.867q.951 0 1.813-.295t1.548-.801q.012.075.017.153t.006.159q-.384 2.923-2.615 4.903T12.057 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.074 0-5.237-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100") }, xmlns: ("http://www.w3.org/2000/svg"), width: ("32"), height: ("32"), viewBox: ("0 0 24 24"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ fill: ("currentColor"), d: ("M12 5.423q-.213 0-.357-.144t-.143-.356V2.539q0-.213.144-.357t.357-.144t.356.144t.143.356v2.385q0 .213-.144.356t-.357.144m4.643 1.935q-.14-.14-.13-.342q.01-.2.15-.366l1.65-1.694q.15-.166.359-.166t.377.17q.156.156.156.35t-.16.354L17.35 7.358q-.16.16-.354.16t-.354-.16m2.435 5.142q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.385q.212 0 .356.144t.143.357t-.143.356t-.357.143zm-7.078 9.462q-.212 0-.356-.144t-.143-.357v-2.365q0-.212.144-.356t.357-.144t.356.144t.143.356v2.366q0 .212-.144.356t-.357.143M6.67 7.359l-1.713-1.67q-.166-.149-.166-.36t.166-.372q.16-.14.366-.14t.341.14L7.378 6.67q.14.134.14.341t-.136.348q-.15.14-.348.14t-.364-.14m11.662 11.686l-1.67-1.694q-.14-.165-.15-.366t.128-.342t.34-.14t.371.16l1.694 1.669q.146.14.143.344t-.149.37q-.16.164-.366.164t-.341-.165M2.539 12.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h2.384q.213 0 .356.144t.144.357t-.144.356t-.356.143zm2.436 6.544q-.14-.16-.15-.363t.13-.344l1.676-1.675q.16-.16.35-.16t.358.155q.165.17.165.371t-.165.366l-1.65 1.65q-.166.166-.373.166t-.341-.166M12.005 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("sr-only") }, });
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_18 = {}
        .DropdownMenuContent;
    ({}.DropdownMenuContent);
    ({}.DropdownMenuContent);
    __VLS_components.DropdownMenuContent;
    __VLS_components.DropdownMenuContent;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuContent, dropdown_menu_1.DropdownMenuContent,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ align: ("end"), }));
    const __VLS_20 = __VLS_19({ align: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ align: ("end"), }));
    // @ts-ignore
    const __VLS_24 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (...[$event]) => {
            __VLS_ctx.mode = 'light';
            // @ts-ignore
            [mode,];
        }
    };
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    let __VLS_27;
    let __VLS_28;
    // @ts-ignore
    const __VLS_32 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (...[$event]) => {
            __VLS_ctx.mode = 'dark';
            // @ts-ignore
            [mode,];
        }
    };
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    // @ts-ignore
    const __VLS_40 = {}
        .DropdownMenuItem;
    ({}.DropdownMenuItem);
    ({}.DropdownMenuItem);
    __VLS_components.DropdownMenuItem;
    __VLS_components.DropdownMenuItem;
    // @ts-ignore
    [dropdown_menu_1.DropdownMenuItem, dropdown_menu_1.DropdownMenuItem,];
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_46;
    const __VLS_47 = {
        onClick: (...[$event]) => {
            __VLS_ctx.mode = 'auto';
            // @ts-ignore
            [mode,];
        }
    };
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    let __VLS_43;
    let __VLS_44;
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['h-[1.2rem]'];
        __VLS_styleScopedClasses['w-[1.2rem]'];
        __VLS_styleScopedClasses['rotate-0'];
        __VLS_styleScopedClasses['scale-100'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['dark:-rotate-90'];
        __VLS_styleScopedClasses['dark:scale-0'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['h-[1.2rem]'];
        __VLS_styleScopedClasses['w-[1.2rem]'];
        __VLS_styleScopedClasses['rotate-90'];
        __VLS_styleScopedClasses['scale-0'];
        __VLS_styleScopedClasses['transition-all'];
        __VLS_styleScopedClasses['dark:rotate-0'];
        __VLS_styleScopedClasses['dark:scale-100'];
        __VLS_styleScopedClasses['sr-only'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Button: button_1.Button,
                DropdownMenu: dropdown_menu_1.DropdownMenu,
                DropdownMenuContent: dropdown_menu_1.DropdownMenuContent,
                DropdownMenuItem: dropdown_menu_1.DropdownMenuItem,
                DropdownMenuTrigger: dropdown_menu_1.DropdownMenuTrigger,
                mode: mode,
            };
        },
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
;
