import { useClipboard } from "@vueuse/core";
import { useToast } from '@/components/ui/toast/use-toast'

export function useCopy({ source, text = 'Copied to the clipboard', createToast = true } : { source?: string, text?: string, createToast?: boolean } = {}) {
  const { copy, copied, ...rest } = useClipboard({
    source,
    legacy: true
  });

  const { toast } = useToast()

  return {
    ...rest,
    isJustCopied: copied,
    async copy(content?: string, { notificationMessage } : { notificationMessage?: string } = {} ) {
      if(source) {
        await copy()
      } 
      else {
        await copy(content)
      }

      if(createToast) {
        toast({
          title: notificationMessage ?? text
        })
      }
    }
  }
}
