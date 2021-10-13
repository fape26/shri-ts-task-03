import { backgroundColors, ColorsOptions, ColorTypes, effects, EffectTypes, fontColors, Reset } from './model';
function addColor(text: string, color: ColorTypes, isBackground : boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList : EffectTypes[]) : string {
    return effectList.map(effect => effects[effect]).join('');
}

export function color(text:string, options?: ColorsOptions) : string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}