// data.js
export async function getData() {
    const apiKey = 'TU_CLAVE_DE_API';
    const symbol = 'MSFT';
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);  // Agrega este console.log para verificar los datos
    
    const timeSeries = json['Time Series (Daily)'];
    const labels = Object.keys(timeSeries).slice(0, 30).reverse();  // Últimos 30 días
    const values = labels.map(label => parseFloat(timeSeries[label]['4. close']));
    
    return {
        labels,
        values
    };
}
