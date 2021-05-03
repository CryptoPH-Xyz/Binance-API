import { createChart } from 'lightweight-charts';

  const chart = createChart(document.getElementById('chart'), {
    width: 600,
    height: 300,
      timeScale: {
        timeVisible: true,
        borderColor: '#D1D4DC',
          },
    rightPriceScale: {
        borderColor: '#D1D4DC',
    },
     layout: {
      backgroundColor: '#ffffff',
      textColor: '#000',
    },
    grid: {
      horzLines: {
        color: '#F0F3FA',
      },
      vertLines: {
        color: '#F0F3FA',
      },
    },
  })
  
  const candleSeries = chart.addCandlestickSeries({
    upColor: '#20991F',
    downColor: '#DE1616',
    borderDownColor: '#DE1616',
    borderUpColor: '#20991F',
    wickDownColor: '#DE1616',
    wickUpColor: '#20991F',
  })

  candleSeries.setData([
  { time: '2019-05-15', open: 190.81, high: 192.81, low: 190.27, close: 191.76 },
	{ time: '2019-05-16', open: 192.47, high: 194.96, low: 192.20, close: 192.38 },
	{ time: '2019-05-17', open: 190.86, high: 194.50, low: 190.75, close: 192.58 },
	{ time: '2019-05-20', open: 191.13, high: 192.86, low: 190.61, close: 190.95 },
	{ time: '2019-05-21', open: 187.13, high: 192.52, low: 186.34, close: 191.45 },
	{ time: '2019-05-22', open: 190.49, high: 192.22, low: 188.05, close: 188.91 },
	{ time: '2019-05-23', open: 188.45, high: 192.54, low: 186.27, close: 192.00 },
	{ time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 }, 
  ])


export const getServerSideProps = async () => {
  const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m`)
  const orders = await res.json()

  return {
      props: { data }
  }
}

