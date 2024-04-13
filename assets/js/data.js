let data = (()=>{
    try {
        console.log('hola')
        const url = "http://localhost:5501/vocales.json";
        const getData = async () => {
            const response = await fetch(url);
            const json = await response.json(); 
            const { vocales } = json;
            return vocales;
        }
        return {getData};
    } catch (error) {
        console.log(error);
    }
})();

export default data;