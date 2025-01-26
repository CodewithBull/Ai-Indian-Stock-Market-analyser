from flask import Flask, request, jsonify
import yfinance as yf
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

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

if __name__ == '__main__':
    app.run(debug=True)
