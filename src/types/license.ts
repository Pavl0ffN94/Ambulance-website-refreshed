import license1 from '../img/str1.jpg'
import license2 from '../img/str2.jpg'
import license3 from '../img/str3.jpg'

 export type LicenseType = {
    src: string,
    id: number
}
export const licenseImg:LicenseType[] = [
{
    src: license1,
    id:1
}, 
{
    src: license2,
    id: 2
}, 
{
    src: license3,
    id:3
}
]
