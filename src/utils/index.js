export const toUpperCaseFirst = (string) => {
    if (!string) return '' 
    else return string.charAt(0).toUpperCase()+string.slice(1)

}