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
const vue_1 = require("vue");
const radix_vue_1 = require("radix-vue");
const lucide_vue_next_1 = require("lucide-vue-next");
const utils_1 = require("@/lib/utils");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits();
const delegatedProps = (0, vue_1.computed)(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = (0, radix_vue_1.useForwardPropsEmits)(delegatedProps, emits);
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    emits: {},
});
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
        .DropdownMenuRadioItem;
    ({}.DropdownMenuRadioItem);
    ({}.DropdownMenuRadioItem);
    __VLS_components.DropdownMenuRadioItem;
    __VLS_components.DropdownMenuRadioItem;
    // @ts-ignore
    [radix_vue_1.DropdownMenuRadioItem, radix_vue_1.DropdownMenuRadioItem,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class))) }, }));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', props.class));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("absolute left-2 flex h-3.5 w-3.5 items-center justify-center") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .DropdownMenuItemIndicator;
    ({}.DropdownMenuItemIndicator);
    ({}.DropdownMenuItemIndicator);
    __VLS_components.DropdownMenuItemIndicator;
    __VLS_components.DropdownMenuItemIndicator;
    // @ts-ignore
    [radix_vue_1.DropdownMenuItemIndicator, radix_vue_1.DropdownMenuItemIndicator,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    // @ts-ignore
    const __VLS_12 = {}
        .Circle;
    ({}.Circle);
    __VLS_components.Circle;
    // @ts-ignore
    [lucide_vue_next_1.Circle,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("h-2 w-2 fill-current") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("h-2 w-2 fill-current") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("h-2 w-2 fill-current") }, }));
    // @ts-ignore
    [forwarded, utils_1.cn,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    var __VLS_18 = {};
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['left-2'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-3.5'];
        __VLS_styleScopedClasses['w-3.5'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['h-2'];
        __VLS_styleScopedClasses['w-2'];
        __VLS_styleScopedClasses['fill-current'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DropdownMenuItemIndicator: radix_vue_1.DropdownMenuItemIndicator,
                DropdownMenuRadioItem: radix_vue_1.DropdownMenuRadioItem,
                Circle: lucide_vue_next_1.Circle,
                cn: utils_1.cn,
                forwarded: forwarded,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
exports.default = {};
;
