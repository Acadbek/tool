import { shuffleString } from "@/utils/random/shuffle.string";
export function createToken({ withUpperCase = true, withLowerCase = true, withNumbers = true, withSymbols = true, length = 64, alphabet }) {
    const AllAlphabet = alphabet ?? [
        withUpperCase ? 'QWERTYUIOPASDFGHJKLZXCVBNNM' : '',
        withLowerCase ? 'qwertyuiopasdfghjklzxcvbnm' : '',
        withNumbers ? '1234567890' : '',
        withSymbols ? '.,;:!?./-"\'#{([-|\\@)]=}*+' : '',
    ].join('');
    return shuffleString(AllAlphabet.repeat(length).substring(0, length));
}
