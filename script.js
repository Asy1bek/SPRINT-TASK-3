document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('amount').addEventListener('input', updateConversions);
  document.getElementById('currency-select').addEventListener('change', updateConversions);
});

function updateConversions() {
  const amount = parseFloat(document.getElementById('amount').value) || 0;
  const selectedCurrency = document.getElementById('currency-select').value;

  const rates = {
    USD: { KZT: 428.25, EUR: 0.92 },
    KZT: { USD: 1 / 428.25, EUR: (1 / 428.25) * 0.92 }
  };

  const KZTValue = amount * (selectedCurrency === 'USD' ? rates.USD.KZT : 1);
  const USDValue = amount * (selectedCurrency === 'KZT' ? rates.KZT.USD : 1);
  const EURValue = amount * (selectedCurrency === 'USD' ? rates.USD.EUR : rates.KZT.EUR);

  document.getElementById('KZT').value = KZTValue.toFixed(2);
  document.getElementById('USD').value = USDValue.toFixed(2);
  document.getElementById('EUR').value = EURValue.toFixed(2);
}
