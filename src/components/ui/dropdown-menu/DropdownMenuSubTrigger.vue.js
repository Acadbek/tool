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
const delegatedProps = (0, vue_1.computed)(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwardedProps = (0, radix_vue_1.useForwardProps)(delegatedProps);
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
        .DropdownMenuSubTrigger;
    ({}.DropdownMenuSubTrigger);
    ({}.DropdownMenuSubTrigger);
    __VLS_components.DropdownMenuSubTrigger;
    __VLS_components.DropdownMenuSubTrigger;
    // @ts-ignore
    [radix_vue_1.DropdownMenuSubTrigger, radix_vue_1.DropdownMenuSubTrigger,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class));
    var __VLS_6 = {};
    // @ts-ignore
    [forwardedProps, utils_1.cn,];
    // @ts-ignore
    const __VLS_7 = {}
        .ChevronRight;
    ({}.ChevronRight);
    __VLS_components.ChevronRight;
    // @ts-ignore
    [lucide_vue_next_1.ChevronRight,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("ml-auto h-4 w-4") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("ml-auto h-4 w-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ ...{ class: ("ml-auto h-4 w-4") }, }));
    const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ml-auto'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['w-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DropdownMenuSubTrigger: radix_vue_1.DropdownMenuSubTrigger,
                ChevronRight: lucide_vue_next_1.ChevronRight,
                cn: utils_1.cn,
                forwardedProps: forwardedProps,
            };
        },
        props: {},
    });
}
const __VLS_component = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
exports.default = {};
;
