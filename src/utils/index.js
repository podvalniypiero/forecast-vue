const PRESSURE_UNITS = 0.750062

export const toUpperCaseFirst = (string) => {
    if (!string) return '' 
    else return string.charAt(0).toUpperCase()+string.slice(1)

}

export const getPressureMm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNITS) // hpa => mm for Pressure measuring
}