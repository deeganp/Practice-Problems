# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


def maxProfit(prices):
    minPrice = float('inf')
    maxProfit = 0

    for price in prices:
        # Update the minimum price if a lower price is encountered
        if price < minPrice:
            minPrice = price
        # Update the maximum profit if selling at current price gives a better profit
        elif price - minPrice > maxProfit:
            maxProfit = price - minPrice

    return maxProfit