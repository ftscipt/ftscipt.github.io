// Получаем ссылки на элементы страницы
const form = document.querySelector('form');
const calculateButton = document.querySelector('#calculate-button');
const resultDiv = document.querySelector('#result');

// Функция для расчета прибыли и баланса
function calculateProfitAndBalance() {
// Получаем значения полей формы
const transactionAmount = parseFloat(form.elements['transaction-amount'].value);
const entryPrice = parseFloat(form.elements['entry-price'].value);
const closingPrice = parseFloat(form.elements['closing-price'].value);
const leverage = parseFloat(form.elements['leverage'].value);

// Рассчитываем количество токенов
const tokenAmount = transactionAmount / entryPrice;

// Рассчитываем прибыль и баланс
const profit = (closingPrice - entryPrice) * tokenAmount * leverage;
const balance = transactionAmount + profit;

// Выводим результат на страницу
resultDiv.innerHTML = `<p>Количество токенов: ${tokenAmount.toFixed(2)}</p><p>Прибыль: ${profit.toFixed(2)}$</p><p>Баланс: ${balance.toFixed(2)}$</p>`;
resultDiv.style.display = "inline-block";
}

// Добавляем обработчик события для кнопки расчета
calculateButton.addEventListener('click', calculateProfitAndBalance);

// Добавляем обработчики событий для изменения цены входа и суммы сделки
form.elements['transaction-amount'].addEventListener('input', calculateProfitAndBalance);
form.elements['entry-price'].addEventListener('input', calculateProfitAndBalance);