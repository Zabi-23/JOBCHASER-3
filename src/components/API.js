
const fetchData = async () => {
    try {
        const response = await fetch('https://links.api.jobtechdev.se/joblinks?q=Flen');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;  // Return the whole data object
    } catch (error) {
        console.log('Error fetching data', error);
        return { hits: [] };  // Return an empty hits array if an error occurs
    }
};


export default fetchData;  


