
/**
 * This function does a look up for the min/max reported scroll ranges by the viewport.
 * Note that if the header is ever adjusted these values will likely need to be updated
 * by adjusting the viewport size and using `window.visualViewport.height` to get the
 * height and then record the min/max scroll percentage on the page by uncommenting
 * the line that reports it.
 * */
export function getMinMaxScrollRange(viewportHeight){
    if(viewportHeight >= 1937)  return [.34, .61];
    else if(viewportHeight >= 1837)  return [.33, .62];
    else if(viewportHeight >= 1737)  return [.32, .63];
    else if(viewportHeight >= 1637)  return [.31, .64];
    else if(viewportHeight >= 1537)  return [.30, .65];
    else if(viewportHeight >= 1437)  return [.29, .66];
    else if(viewportHeight >= 1337)  return [.28, .67];
    else if(viewportHeight >= 1280)  return [.27, .68];
    else if(viewportHeight >= 1180)  return [.25, .70];
    else if(viewportHeight >= 1080)  return [.23, .72];
    else if(viewportHeight >= 937)   return [.20, .74];
    else if(viewportHeight >= 880)   return [.19, .75];
    else if(viewportHeight >= 780)   return [.17, .78];
    else if(viewportHeight >= 666)   return [.14, .80];
    else if(viewportHeight >= 566)   return [.11, .83];
    else if(viewportHeight >= 466)   return [.9, .85];
    else return [6, 88];  // >= 360
}

export const normalizeNumber = (min, max, value) => {
    let result = 0;
    if(value < min){
        result = 0;
    } else if( value > max){
        result = 1;
    } else{
        result = (value - min) / (max - min);
    }
    return result;
}