export const depthMap = {
    1: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)',
    2: '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)',
    3: '0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)',
    4: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)',
    5: '0 0 20px 4px rgba(154,161,177,.15), 0 4px 80px -8px rgba(36,40,47,.25), 0 4px 4px -2px rgba(91,94,105,.15)',
  } as const;
  
  export const darkDepthMap = {
    1: '0 2px 2px 0 rgba(75,163,222,0.14), 0 3px 1px -2px rgba(75,163,222,0.12), 0 1px 5px 0 rgba(75,163,222,0.20)',
    2: '0 6px 10px 0 rgba(75,163,222,0.14), 0 1px 18px 0 rgba(75,163,222,0.12), 0 3px 5px -1px rgba(75,163,222,0.20)',
    3: '0 12px 17px 2px rgba(75,163,222,0.14), 0 5px 22px 4px rgba(75,163,222,0.12), 0 7px 8px -4px rgba(75,163,222,0.20)',
    4: '0 24px 38px 3px rgba(75,163,222,0.14), 0 9px 46px 8px rgba(75,163,222,0.12), 0 11px 15px -7px rgba(75,163,222,0.20);',
    5: '0 0 20px 4px rgba(31,141,214,0.15), 0 4px 80px -8px rgba(31,141,214,0.25), 0 4px 4px -2px rgba(31,141,214,0.15);',
  } as const;
  
  export const viewDisallowProps = [
    'width',
    'height',
    'overflow',
    'display',
    'opacity',
    'cursor',
    'size',
  ];