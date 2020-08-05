let lacalCity = '广东'
try {
    if (localStorage.city) {
        lacalCity = localStorage.city
}
} catch (e) {
    
}
export default {
    city:lacalCity
}