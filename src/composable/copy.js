import { useClipboard } from "@vueuse/core";
export function useCopy({ source, text = 'Copied to the clipboard', createToast = true } = {}) {
    const { copy, copied, ...rest } = useClipboard({
        source,
        legacy: true
    });
    const { toast } = useToast();
    return {
        ...rest,
        isJustCopied: copied,
        async copy(content, { notificationMessage } = {}) {
            if (source) {
                await copy();
            }
            else {
                await copy(content);
            }
            if (createToast) {
                toast({
                    title: notificationMessage ?? text
                });
            }
        }
    };
}
function useToast() {
    throw new Error("Function not implemented.");
}
