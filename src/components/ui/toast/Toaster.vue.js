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
const use_toast_1 = require("./use-toast");
const _1 = require(".");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const { toasts } = (0, use_toast_1.useToast)();
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
        .ToastProvider;
    ({}.ToastProvider);
    ({}.ToastProvider);
    __VLS_components.ToastProvider;
    __VLS_components.ToastProvider;
    // @ts-ignore
    [_1.ToastProvider, _1.ToastProvider,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    for (const [toast] of __VLS_getVForSourceType((__VLS_ctx.toasts))) {
        // @ts-ignore
        const __VLS_6 = {}
            .Toast;
        ({}.Toast);
        ({}.Toast);
        __VLS_components.Toast;
        __VLS_components.Toast;
        // @ts-ignore
        [_1.Toast, _1.Toast,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((toast.id)), ...(toast), }));
        const __VLS_8 = __VLS_7({ key: ((toast.id)), ...(toast), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ key: ((toast.id)), ...(toast), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid gap-1") }, });
        if (toast.title) {
            // @ts-ignore
            const __VLS_12 = {}
                .ToastTitle;
            ({}.ToastTitle);
            ({}.ToastTitle);
            __VLS_components.ToastTitle;
            __VLS_components.ToastTitle;
            // @ts-ignore
            [_1.ToastTitle, _1.ToastTitle,];
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
            const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({}));
            (toast.title);
            // @ts-ignore
            [toasts,];
            (__VLS_17.slots).default;
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        }
        if (toast.description) {
            if (__VLS_ctx.isVNode(toast.description)) {
                // @ts-ignore
                const __VLS_18 = {}
                    .ToastDescription;
                ({}.ToastDescription);
                ({}.ToastDescription);
                __VLS_components.ToastDescription;
                __VLS_components.ToastDescription;
                // @ts-ignore
                [_1.ToastDescription, _1.ToastDescription,];
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
                const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
                ({}({}));
                const __VLS_24 = (toast.description);
                // @ts-ignore
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
                const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
                ({}({}));
                // @ts-ignore
                [vue_1.isVNode,];
                const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
                (__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            }
            else {
                // @ts-ignore
                const __VLS_30 = {}
                    .ToastDescription;
                ({}.ToastDescription);
                ({}.ToastDescription);
                __VLS_components.ToastDescription;
                __VLS_components.ToastDescription;
                // @ts-ignore
                [_1.ToastDescription, _1.ToastDescription,];
                // @ts-ignore
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
                const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({}));
                (toast.description);
                (__VLS_35.slots).default;
                const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
            }
        }
        // @ts-ignore
        const __VLS_36 = {}
            .ToastClose;
        ({}.ToastClose);
        __VLS_components.ToastClose;
        // @ts-ignore
        [_1.ToastClose,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({}));
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        const __VLS_42 = (toast.action);
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
        const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({}));
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
    // @ts-ignore
    const __VLS_48 = {}
        .ToastViewport;
    ({}.ToastViewport);
    __VLS_components.ToastViewport;
    // @ts-ignore
    [_1.ToastViewport,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['gap-1'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                isVNode: vue_1.isVNode,
                Toast: _1.Toast,
                ToastClose: _1.ToastClose,
                ToastDescription: _1.ToastDescription,
                ToastProvider: _1.ToastProvider,
                ToastTitle: _1.ToastTitle,
                ToastViewport: _1.ToastViewport,
                toasts: toasts,
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
