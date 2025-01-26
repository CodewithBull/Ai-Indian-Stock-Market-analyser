from flask import Flask, request, jsonify
import yfinance as yf
from flask_cors import CORS
from sklearn.linear_model import LinearRegression
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/get_stock_data', methods=['GET'])
def get_stock_data():
    symbol = request.args.get('symbol', '').strip()
    if not symbol:
        return jsonify({"error": "Stock symbol is required"}), 400

    try:
        stock = yf.Ticker(symbol)
        stock_info = stock.info

        data = {
            "symbol": symbol,
            "name": stock_info.get('longName', 'Not Available'),
            "last_price": stock_info.get('currentPrice'),
            "day_high": stock_info.get('dayHigh'),
            "day_low": stock_info.get('dayLow'),
            "market_cap": stock_info.get('marketCap', 'Not Available'),
            "pe_ratio": stock_info.get('forwardPE', 'Not Available'),
            "dividend_yield": stock_info.get('dividendYield', 'Not Available'),
            "52_week_high": stock_info.get('fiftyTwoWeekHigh', 'Not Available'),
            "52_week_low": stock_info.get('fiftyTwoWeekLow', 'Not Available')
        }

        return jsonify(data)
    except Exception as e:
        return jsonify({"error": f"Failed to fetch stock data: {str(e)}"}), 500


@app.route('/predict_stock', methods=['GET'])
def predict_stock():
    symbol = request.args.get('symbol', '').strip()
    if not symbol:
        return jsonify({"error": "Stock symbol is required"}), 400

    try:
        stock = yf.Ticker(symbol)
        hist = stock.history(period='1y')  # Fetch 1 year of historical data

        if hist.empty:
            return jsonify({"error": "No historical data available for this stock"}), 404

        # Prepare data for ML model
        hist['Days'] = np.arange(len(hist))
        X = hist[['Days']].values
        y = hist['Close'].values

        # Train a simple Linear Regression model
        model = LinearRegression()
        model.fit(X, y)

        # Predict the next 5 days
        future_days = np.arange(len(hist), len(hist) + 5).reshape(-1, 1)
        predictions = model.predict(future_days)

        predicted_prices = {f"Day {i+1}": price for i, price in enumerate(predictions)}
        return jsonify(predicted_prices)

    except Exception as e:
        return jsonify({"error": f"Failed to predict stock prices: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)

lekin isma llm model hi dalunga gemini ya pollination hn kyukni ye jyda shi na hogi abhi uske liye bhotdata chayye
hn vhi lekin phele ya bta idea kisa ha badhiya h par ek or website bhi thi sayad aesi usme to sayad auto invest bhi thaa 
lekin agar usna galat jagah paisa daal diya to problem bhi ho sakti  bhi vh soch rha tha pkka sure na hu m ki vo feature tha ya na ad me dekha tha maine to 
maina search kra par ek bhi aisi website na aayi