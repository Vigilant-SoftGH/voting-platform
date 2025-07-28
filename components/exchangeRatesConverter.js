// lib/exchangeRatesConverter.js
import ExchangeRatesAPI from 'exchange-rates-api';

export async function convertWithExchangeRates(amount, fromCurrency, toCurrency) {
  try {
    // Get latest rates
    const rates = await ExchangeRatesAPI.getLatest(fromCurrency);
    
    if (!rates[toCurrency]) {
      throw new Error(`Unsupported target currency: ${toCurrency}`);
    }
    
    // Perform conversion
    return amount * rates[toCurrency];
  } catch (error) {
    console.error('Conversion error:', error);
    throw error;
  }
}

// Batch conversion for multiple currencies
export async function convertToMultiple(amount, fromCurrency, targetCurrencies) {
  try {
    const rates = await ExchangeRatesAPI.getLatest(fromCurrency);
    const results = {};
    
    targetCurrencies.forEach(currency => {
      if (rates[currency]) {
        results[currency] = amount * rates[currency];
      }
    });
    
    return results;
  } catch (error) {
    console.error('Batch conversion error:', error);
    throw error;
  }
}